import axios from "axios";
import { RabbitInstance } from "./rabbit";
import { EspnResponse, Evt } from "../types/espn";
import { RedisInstance } from "./redis";

const getLines = async (): Promise<EspnResponse | null> => {
    const date = new Date();
    const response = await axios.get<EspnResponse>("https://www.espn.com/college-football/scoreboard?year=2024&_xhr=api&groups=80");

    for (let seasonType of response.data.page.content.scoreboard.calendar) {
        for (let week of seasonType.entries) {
            const startDate = new Date(week.startDate);
            const endDate = new Date(week.endDate);
            if (date >= startDate && date <= endDate) {
                const newResponse = await axios.get<EspnResponse>(`https://www.espn.com/college-football/scoreboard?year=2024&week=${week.value}&_xhr=api&groups=80`);
                return newResponse.data;
            }
        }
    }

    return null;
}

export const useEspn = async (rabbit: RabbitInstance, redis: RedisInstance) => {
    let book: EspnResponse | null;
    let bookString = await redis.get("espn_book");
    if (bookString === null) {
        book = await getLines();
        if (book) {
            await redis.set("espn_book", JSON.stringify(book));
        }
    } else {
        book = JSON.parse(bookString);
    }

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

            if (book && newBook && newBook.page.content.scoreboard.evts.length > 0) {
                for (let event of newBook.page.content.scoreboard.evts) {
                    let oldEvent = book.page.content.scoreboard.evts.find(e => e.id === event.id) ?? null;

                    if (!oldEvent) {
                        await publishEventCreated(event);
                    } else {
                        await syncEvent(oldEvent, event);
                    }
                }

                book = newBook;
                await redis.set("espn_book", JSON.stringify(book));
            }
        } catch (error) {
            console.error(error);
        }
    }

    return {
        syncEspnLines,
    };
};
