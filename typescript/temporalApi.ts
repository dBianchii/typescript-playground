import { Temporal } from "@js-temporal/polyfill";

const now = Temporal.Now.plainDateISO()
  .add({ days: 7, hours: 3 })
  .getCalendar();
console.log(now.day);
