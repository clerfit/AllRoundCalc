import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
const require=createRequire(import.meta.url);
const {definitions,calculate}=require("../assets/js/date-time-calculations.js");

test("Phase 12 Date & Time registry has 14 uniquely identified documented calculators",()=>{
  assert.equal(definitions.length,14);
  assert.equal(new Set(definitions.map(d=>d.id)).size,14);
  for(const d of definitions) assert.ok(d.name&&d.description&&d.formula&&d.example&&d.fields.length,d.id);
});
const cases=[
 ["dt-date-difference",{startDate:"2026-01-01",endDate:"2026-01-31"},"30 calendar days"],
 ["dt-add-days",{date:"2026-01-31",days:"1"},"2026-02-01"],
 ["dt-business-days",{startDate:"2026-01-05",endDate:"2026-01-09"},"4 business days (weekends excluded; public holidays included)"],
 ["dt-add-business-days",{date:"2026-01-09",businessDays:"1"},"2026-01-12"],
 ["dt-age",{birthDate:"2000-01-15",asOfDate:"2026-01-14"},"25 years, 11 months, 30 days"],
 ["dt-timezone-offset",{dateTimeLocal:"2026-01-01T09:00",sourceOffset:"330",targetOffset:"0"},"2026-01-01T03:30"],
 ["dt-unix-timestamp",{dateTime:"1970-01-01T00:00:01Z"},"Unix seconds: 1; milliseconds: 1000"],
 ["dt-work-hours",{startTime:"09:00",endTime:"17:30",breakMinutes:"30"},"8 hours (8 h 0 min)"],
 ["dt-overtime",{hoursWorked:"10",regularHours:"8"},"Regular hours: 8; overtime hours: 2"],
 ["dt-countdown",{fromDate:"2026-01-01",targetDate:"2026-01-10"},"9 calendar days remaining"],
 ["dt-recurring-interval",{startDate:"2026-01-01",intervalDays:"7",occurrences:"3"},"2026-01-08, 2026-01-15, 2026-01-22"],
 ["dt-leap-year",{year:"2000"},"2000 is a leap year"],
 ["dt-iso-week",{date:"2021-01-01"},"ISO week 53 of 2020"],
 ["dt-duration-seconds",{days:"1",hours:"2",minutes:"3",seconds:"4"},"93784 seconds"]
];
test("Date & Time reference examples match expected results",()=>{
 for(const [id,values,expected] of cases)assert.equal(calculate(id,values).result,expected,id);
});
test("date inputs reject impossible calendar dates and malformed strings",()=>{
 assert.throws(()=>calculate("dt-date-difference",{startDate:"2026-02-30",endDate:"2026-03-01"}),/valid calendar date/);
 assert.throws(()=>calculate("dt-add-days",{date:"tomorrow",days:1}),/YYYY-MM-DD/);
});
test("business-day counting is signed and does not count weekends",()=>{
 assert.equal(calculate("dt-business-days",{startDate:"2026-01-09",endDate:"2026-01-05"}).result,"-4 business days (weekends excluded; public holidays included)");
 assert.equal(calculate("dt-business-days",{startDate:"2026-01-09",endDate:"2026-01-10"}).result,"0 business days (weekends excluded; public holidays included)");
});
test("time-zone converter documents and validates fixed offsets",()=>{
 assert.throws(()=>calculate("dt-timezone-offset",{dateTimeLocal:"2026-01-01T09:00",sourceOffset:"900",targetOffset:"0"}),/whole number from -840 through 840/);
 assert.throws(()=>calculate("dt-timezone-offset",{dateTimeLocal:"2026-01-01T25:00",sourceOffset:"0",targetOffset:"0"}),/valid 24-hour time/);
});
test("work-hours rejects breaks longer than shift; overtime rejects negative values",()=>{
 assert.throws(()=>calculate("dt-work-hours",{startTime:"09:00",endTime:"17:00",breakMinutes:"500"}),/Break cannot exceed/);
 assert.throws(()=>calculate("dt-overtime",{hoursWorked:"-1",regularHours:"8"}),/non-negative/);
});
test("ISO timestamp requires explicit offset and invalid dates fail",()=>{
 assert.throws(()=>calculate("dt-unix-timestamp",{dateTime:"1970-01-01T00:00:01"}),/explicit Z or ±HH:MM offset/);
 assert.throws(()=>calculate("dt-unix-timestamp",{dateTime:"not-a-date"}),/explicit Z or ±HH:MM offset/);
});
test("duration values and recurrence counts enforce bounded domains",()=>{
 assert.throws(()=>calculate("dt-duration-seconds",{days:"-1",hours:"0",minutes:"0",seconds:"0"}),/non-negative/);
 assert.throws(()=>calculate("dt-recurring-interval",{startDate:"2026-01-01",intervalDays:"1",occurrences:"51"}),/1 through 50/);
});
