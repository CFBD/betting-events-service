import axios from 'axios';
import { RabbitInstance } from './rabbit';
import { BovadaResponse, Competition, DisplayGroup, Market, Outcome } from '../types/bovada';

const bovadaUrl = process.env.BOVADA_SPORT_URL;
const getLines = async (): Promise<BovadaResponse> => {
    let response = await axios.get(`https://www.bovada.lv/services/sports/event/v2/events/A/description${bovadaUrl}`);
    return response.data[0];
};

export const useBovada = async (rabbit: RabbitInstance) => {
    let book = await getLines();

    const publishEventCreated = async (event: Competition) => {
        const created = {
            id: event.id,
            competitionId: event.competitionId,
            competitors: event.competitors.map(c => ({
                home: c.home,
                id: c.id,
                name: c.name
            })),
            groups: event.displayGroups.map(g => ({
                id: g.id,
                description: g.description,
                markets: g.markets.map(m => ({
                    id: m.id,
                    description: m.description,
                    notes: m.notes,
                    period: m.period.description,
                    live: m.period.live,
                    outcomes: m.outcomes.map(o => ({
                        competitorId: o.competitorId,
                        description: o.description,
                        id: o.id,
                        price: {
                            american: o.price.american,
                            handicap: o.price.handicap
                        },
                        status: o.status,
                        type: o.type
                    }))
                }))
            }))
        };

        await rabbit.publish('event_created', created);
    }

    const publishGroupCreated = async (g: DisplayGroup, e: Competition) => {
        await rabbit.publish('group_created', {
            id: g.id,
            event: e.description,
            competitors: e.competitors,
            description: g.description,
            markets: g.markets.map(m => ({
                id: m.id,
                description: m.description,
                notes: m.notes,
                period: m.period.description,
                live: m.period.live,
                outcomes: m.outcomes.map(o => ({
                    competitorId: o.competitorId,
                    description: o.description,
                    id: o.id,
                    price: {
                        american: o.price.american,
                        handicap: o.price.handicap
                    },
                    status: o.status,
                    type: o.type
                }))
            }))
        });
    }

    const publishMarketCreated = async (m: Market, g: DisplayGroup, e: Competition) => {
        await rabbit.publish('market_created', {
            id: m.id,
            competitors: e.competitors,
            event: e.description,
            group: g.description,
            description: m.description,
            notes: m.notes,
            period: m.period.description,
            live: m.period.live,
            outcomes: m.outcomes.map(o => ({
                competitorId: o.competitorId,
                description: o.description,
                id: o.id,
                price: {
                    american: o.price.american,
                    handicap: o.price.handicap
                },
                status: o.status,
                type: o.type
            }))
        });
    }

    const publishOutcomeCreated = async (o: Outcome, e: Competition, g: DisplayGroup, m: Market) => {
        await rabbit.publish('outcome_created', {
            event: e.description,
            group: g.description,
            market: m.description,
            period: m.period.description,
            live: m.period.live,
            competitors: e.competitors,
            competitorId: o.competitorId,
            description: o.description,
            id: o.id,
            price: {
                american: o.price.american,
                handicap: o.price.handicap
            },
            status: o.status,
            type: o.type
        });
    }

    const syncCompetition = async (old: Competition | undefined, current: Competition) => {
        for (let group of current.displayGroups) {
            const oldGroup = old?.displayGroups.find(g => g.id === group.id) ?? null;
            if (!oldGroup) {
                await publishGroupCreated(group, current);
            }

            await syncGroup(oldGroup, group, current);
        }
    }

    const syncGroup = async (oldGroup: DisplayGroup | null, currentGroup: DisplayGroup, event: Competition) => {
        for (let market of currentGroup.markets) {
            const oldMarket = oldGroup?.markets.find(m => m.id === market.id) ?? null;
            if (!oldMarket) {
                await publishMarketCreated(market, currentGroup, event);
            }

            await syncMarket(oldMarket, market, currentGroup, event);
        }
    }

    const syncMarket = async (oldMarket: Market | null, currentMarket: Market, group: DisplayGroup, event: Competition) => {
        for (let outcome of currentMarket.outcomes) {
            let oldOutcome = oldMarket?.outcomes.find(o => o.id == outcome.id) ?? null;

            if (!oldOutcome) {
                await publishOutcomeCreated(outcome, event, group, currentMarket);
            } else {
                await syncOutcome(oldOutcome, outcome, event, group, currentMarket);
            }
        }
    }

    const syncOutcome = async (oldOutcome: Outcome, o: Outcome, e: Competition, g: DisplayGroup, m: Market) => {
        let message = {
            event: e.description,
            group: g.description,
            market: m.description,
            period: m.period.description,
            live: m.period.live,
            competitors: e.competitors,
            competitorId: o.competitorId,
            description: o.description,
            id: o.id,
            price: {
                american: o.price.american,
                handicap: o.price.handicap
            },
            status: o.status,
            type: o.type,
            previous: {
                american: oldOutcome.price.american,
                handicap: oldOutcome.price.handicap
            }
        };

        if (oldOutcome.status != o.status) {
            await rabbit.publish('outcome_status_changed', message);
        }

        if (oldOutcome.price.american != o.price.american) {
            await rabbit.publish('outcome_odds_changed', message);
        }

        if (oldOutcome.price.handicap != o.price.handicap) {
            await rabbit.publish('outcome_handicap_changed', message);
        }
    }

    const syncBovadaLines = async () => {
        try {
            const newBook = await getLines();

            if (newBook?.events?.length ?? 0 > 0) {
                for (let event of newBook.events) {
                    let old = book.events?.find(e => e.id === event.id);

                    if (!old) {
                        await publishEventCreated(event);
                    }

                    await syncCompetition(old, event);
                }

                book = newBook;
            }
        }
        catch (err) {
            console.error(err);
        }
    }

    return {
        syncBovadaLines
    }
}