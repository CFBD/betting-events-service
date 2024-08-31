import axios from "axios";
import { RabbitInstance } from "./rabbit";
import { EspnResponse, Evt } from "../types/espn";

const getLines = async (): Promise<EspnResponse> => {
    const response = await axios.get("https://www.espn.com/college-football/scoreboard?year=2024&_xhr=api&groups=80");
    return response.data;
}

export const useEspn = async (rabbit: RabbitInstance) => {

    let book = await getLines();


    const publishEventCreated = async (event: Evt) => {
        if (event.odds && event.gameOdds && event.gameOdds.odds.length > 0 && event.gameOdds.providerName === 'ESPN BET') {
            const home = event.competitors.find(c => c.isHome === true);
            const away = event.competitors.find(c => c.isHome === false);

            const homeOdds = event.gameOdds.odds.find(o => o.line.primaryText === home?.abbrev);
            const awayOdds = event.gameOdds.odds.find(o => o.line.primaryText === away?.abbrev);

            if (homeOdds && awayOdds) {
                const created = {
                    gameId: event.id,
                    spread: parseFloat(homeOdds.pointSpread.primary),
                    overUnder: parseFloat(homeOdds.total.primary.replace('o', '').replace('u', '')),
                    homeMoneyline: parseFloat(homeOdds.moneyline.primary),
                    awayMoneyline: parseFloat(awayOdds.moneyline.primary),
                }

                await rabbit.publish('espn_event_created', created);
            }
        }
    }

    const syncEvent = async (oldEvent: Evt, event: Evt) => {
        if (event.odds && event.gameOdds && event.gameOdds.odds.length > 0 && event.gameOdds.providerName === 'ESPN BET') {
            const home = event.competitors.find(c => c.isHome === true);
            const away = event.competitors.find(c => c.isHome === false);

            const homeOdds = event.gameOdds.odds.find(o => o.line.primaryText === home?.abbrev);
            const awayOdds = event.gameOdds.odds.find(o => o.line.primaryText === away?.abbrev);

            const oldHomeOdds = oldEvent?.gameOdds?.providerName === 'ESPN BET' ? oldEvent?.gameOdds?.odds.find(o => o.line.primaryText === home?.abbrev) : null;
            const oldAwayOdds = oldEvent?.gameOdds?.providerName === 'ESPN BET' ? oldEvent?.gameOdds?.odds.find(o => o.line.primaryText === away?.abbrev) : null;

            if (
                homeOdds && awayOdds &&
                (
                    homeOdds.pointSpread.primary !== oldHomeOdds?.pointSpread.primary ||
                    homeOdds.total.primary !== oldHomeOdds?.total.primary ||
                    (homeOdds.moneyline.primary !== 'OFF' && homeOdds.moneyline.primary !== oldHomeOdds?.moneyline.primary) ||
                    (awayOdds.moneyline.primary !== 'OFF' && awayOdds.moneyline.primary !== oldAwayOdds?.moneyline.primary)
                )
            ) {
                const updated = {
                    gameId: event.id,
                    spread: parseFloat(homeOdds.pointSpread.primary),
                    overUnder: parseFloat(homeOdds.total.primary.replace('o', '').replace('u', '')),
                    homeMoneyline: homeOdds.moneyline.primary !== 'OFF' ? parseFloat(homeOdds.moneyline.primary) : null,
                    awayMoneyline: awayOdds.moneyline.primary !== 'OFF' ? parseFloat(awayOdds.moneyline.primary) : null,
                }

                await rabbit.publish('espn_event_updated', updated);
            }
        }
    }

    const syncEspnLines = async () => {
        try {
            const newBook = await getLines();

            if (newBook.page.content.scoreboard.evts.length > 0) {
                for (let event of newBook.page.content.scoreboard.evts) {
                    let oldEvent = book.page.content.scoreboard.evts.find(e => e.id === event.id) ?? null;

                    if (!oldEvent) {
                        await publishEventCreated(event);
                    } else {
                        await syncEvent(oldEvent, event);
                    }
                }

                book = newBook;
            }
        } catch (error) {
            console.error(error);
        }
    }

    return {
        syncEspnLines,
    };
};
