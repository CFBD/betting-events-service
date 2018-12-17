module.exports = async (rabbit) => {
    const sportUrl = process.env.SPORT_URL;
    const rp = require('request-promise');

    const getLines = async () => {
        let result = await rp({
            url: `https://www.bovada.lv/services/sports/event/v2/events/A/description${sportUrl}`,
            json: true
        });

        return result[0];
    }

    let book = await getLines();

    const publishEventCreated = async (event) => {
        let created = {
            id: event.id,
            competitionId: event.competitionId,
            competitors: event.competitors.map(c => {
                return {
                    home: c.home,
                    id: c.id,
                    name: c.name
                }
            }),
            groups: event.displayGroups.map(g => {
                return {
                    id: g.id,
                    description: g.description,
                    markets: g.markets.map(m => {
                        return {
                            id: m.id,
                            description: m.description,
                            notes: m.notes,
                            period: m.period.description,
                            live: m.period.live,
                            outcomes: m.outcomes.map(o => {
                                return {
                                    competitorId: o.competitorId,
                                    description: o.description,
                                    id: o.id,
                                    price: {
                                        american: o.price.american,
                                        handicap: o.price.handicap
                                    },
                                    status: o.status,
                                    type: o.type
                                }
                            })
                        }
                    })
                }
            })
        };
        
        await rabbit.publish('event_created', created);
    }

    const publishGroupCreated = async (g, e) => {
        await rabbit.publish('group_created', {
            id: g.id,
            event: e.description,
            competitors: e.competitors,
            description: g.description,
            markets: g.markets.map(m => {
                return {
                    id: m.id,
                    description: m.description,
                    notes: m.notes,
                    period: m.period.description,
                    live: m.period.live,
                    outcomes: m.outcomes.map(o => {
                        return {
                            competitorId: o.competitorId,
                            description: o.description,
                            id: o.id,
                            price: {
                                american: o.price.american,
                                handicap: o.price.handicap
                            },
                            status: o.status,
                            type: o.type
                        }
                    })
                }
            })
        });
    }

    const publishMarketCreated = async (m, g, e) => {
        await rabbit.publish('market_created', {
            id: m.id,
            competitors: e.competitors,
            event: e.description,
            group: g.name,
            description: m.description,
            notes: m.notes,
            period: m.period.description,
            live: m.period.live,
            outcomes: m.outcomes.map(o => {
                return {
                    competitorId: o.competitorId,
                    description: o.description,
                    id: o.id,
                    price: {
                        american: o.price.american,
                        handicap: o.price.handicap
                    },
                    status: o.status,
                    type: o.type
                }
            })
        });
    }

    const publishOutcomeCreated = async (o, e, g, m) => {
        await rabbit.publish('outcome_created', {
            event: e.description,
            group: g.description,
            market: m.description,
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

    const syncLines = async () => {
        let newBook = await getLines();

        for (let event of newBook.events) {
            let old = book.events.find(e => e.id == event.id);

            if (!old) {
                await publishEventCreated(event);
            } else {
                await syncEvent(old, event);
            }
        }
    }

    let syncEvent = async (old, current) => {
        for (let group of current.displayGroups){
            let oldGroup = old.displayGroups.find(g => g.id == group.id);

            if (!oldGroup) {
                await publishGroupCreated(group, current);
            } else {
                await syncGroup(oldGroup, group, current);
            }
        }
    }

    let syncGroup = async (oldGroup, currentGroup, event) => {
        for (let market of currentGroup.markets) {
            let oldMarket = oldGroup.markets.find(m => m.id == market.id);

            if (!oldMarket) {
                await publishMarketCreated(market, currentGroup, event);
            } else {
                await syncMarket(oldMarket, market, currentGroup, event);
            }
        }
    }

    const syncMarket = async (oldMarket, currentMarket, group, event) => {
        for (let outcome of currentMarket.outcomes) {
            let oldOutcome = oldMarket.outcomes.find(o => o.id == outcome.id);

            if (!oldOutcome) {
                await publishOutcomeCreated(outcome, event, group, currentMarket);
            } else {
                await syncOutcome(oldOutcome, outcome, event, group, currentMarket);
            }
        }
    }

    const syncOutcome = async (oldOutcome, o, e, g, m) => {
        let message = {
            event: e.description,
            group: g.description,
            market: m.description,
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

    return {
        syncLines
    }
}