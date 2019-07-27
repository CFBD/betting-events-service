(async() => {
    require('dotenv').config();

    const rabbit = await require('./lib/rabbit')();
    const book = await require('./lib/sportsbook')(rabbit);

    const schedule = require('node-schedule');

    let job = schedule.scheduleJob("*/5 * * * *", book.syncLines);
})().catch(err => {
    console.error(err);
});