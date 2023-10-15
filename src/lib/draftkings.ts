import axios from "axios";
import { RabbitInstance } from "./rabbit";
import { DraftKingsResponse, Competition, Offer, Outcome } from "../types/draftkings";

const getLines = async (): Promise<DraftKingsResponse> => {
    const response = await axios.get("https://sportsbook-us-nh.draftkings.com/api/odds/v2/leagues/87637/offers/gamelines.json?main=true");
    return response.data;
}

export const useDraftKings = async (rabbit: RabbitInstance) => {

    let book = await getLines();

    const publishEventCreated = async (event: Competition) => {
        await rabbit.publish("draftkings_event_created", event);
    }

    const publishOfferCreated = async (offer: Offer, event: Competition) => {
        await rabbit.publish("draftkings_offer_created", {
            event,
            offer
        });
    }

    const publishOutcomeCreated = async (outcome: Outcome, offer: Offer, event: Competition) => {
        await rabbit.publish("drafktings_outcome_created", {
            event,
            offer,
            outcome
        });
    }

    const syncCompetition = async (old: Competition | undefined, current: Competition) => {
        for (let offer of current.offers) {
            const oldOffer = old?.offers.find(o => o.id === offer.id) ?? null;
            if (!oldOffer) {
                await publishOfferCreated(offer, current);
            }

            await syncOffer(oldOffer, offer, current);
        }
    }

    const syncOffer = async (old: Offer | null, current: Offer, event: Competition) => {
        for (let outcome of current.outcomes) {
            const oldOutcome = old?.outcomes.find(o => o.id === outcome.id) ?? null;
            if (!oldOutcome) {
                await publishOutcomeCreated(outcome, current, event);
            } else {
                await syncOutcome(oldOutcome, outcome, current, event);
            }
        }
    }

    const syncOutcome = async (old: Outcome, current: Outcome, offer: Offer, event: Competition) => {
        let outcomeEvent = {
            event,
            offer,
            outcome: current,
            previous: old
        }

        if (current.line !== null && old.line !== current.line) {
            await rabbit.publish("draftkings_outcome_line_changed", outcomeEvent);
        }

        if (old.oddsAmerican !== current.oddsAmerican) {
            await rabbit.publish("draftkings_outcome_odds_changed", outcomeEvent);
        }
    }

    const syncDraftKingsLines = async () => {
        try {
            const newBook = await getLines();

            if (newBook.errorStatus && newBook.errorStatus?.code === "BET419") {
                book = {
                    events: []
                };
                return;
            }

            for (let event of newBook.events) {
                const old = book.events.find(e => e.id === event.id);

                if (!old) {
                    await publishEventCreated(event);
                }

                await syncCompetition(old, event);
            }

            book = newBook;
        } catch (err) {
            console.error(err);
        }
    }

    return {
        syncDraftKingsLines
    }
};