import "dotenv/config";

import { scheduleJob } from 'node-schedule';
import { useRabbit } from "./lib/rabbit";
import { useBovada } from "./lib/bovada";
import { useDraftKings } from "./lib/draftkings";

(async () => {
    const rabbit = await useRabbit();
    const bovada = await useBovada(rabbit);
    const draftkings = await useDraftKings(rabbit);

    let bovadaJob = scheduleJob("bovadaJob", "*/5 * * * *", bovada.syncBovadaLines);
    let draftkingsJob = scheduleJob("draftkingsJob", "*/5 * * * *", draftkings.syncDraftKingsLines);

    console.log("syncing sportsbooks...");
})().catch(err => {
    console.error(err);
});
