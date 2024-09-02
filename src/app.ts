import "dotenv/config";

import { scheduleJob } from 'node-schedule';
import { useRabbit } from "./lib/rabbit";
import { useRedis } from "./lib/redis";
import { useBovada } from "./lib/bovada";
import { useDraftKings } from "./lib/draftkings";
import { useEspn } from "./lib/espn";

(async () => {
    const rabbit = await useRabbit();
    const redis = await useRedis();
    const bovada = await useBovada(rabbit, redis);
    const draftkings = await useDraftKings(rabbit, redis);
    const espn = await useEspn(rabbit, redis);

    let bovadaJob = scheduleJob("bovadaJob", "*/5 * * * *", bovada.syncBovadaLines);
    let draftkingsJob = scheduleJob("draftkingsJob", "*/5 * * * *", draftkings.syncDraftKingsLines);
    let espnJob = scheduleJob("espnJob", "*/5 * * * *", espn.syncEspnLines);

    console.log("syncing sportsbooks...");
})().catch(err => {
    console.error(err);
});
