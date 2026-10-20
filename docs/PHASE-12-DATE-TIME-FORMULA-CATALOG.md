# Phase 12 — Date & Time Formula Catalogue

**Status:** Initial Phase 12 Date & Time implementation is connected to the site; 14 calculator definitions and automated reference/domain tests are included. Automated verification must pass on the final commit before this phase can be marked technically signed off. Independent review and human accessibility testing remain separate requirements.

## Inventory

| ID | Calculator | Main method and assumptions |
|---|---|---|
| dt-date-difference | Date Difference Calculator | UTC-midnight date-only subtraction in calendar days. |
| dt-add-days | Add or Subtract Calendar Days | Signed integer days using Gregorian UTC calendar arithmetic. |
| dt-business-days | Business Days Between Dates | Count weekdays in (start, end]; ignores public holidays. Signed output. |
| dt-add-business-days | Add or Subtract Business Days | Move forward/backward over Monday–Friday days; ignores public holidays. |
| dt-age | Age Between Two Dates | Calendar years/months/days with component borrowing; future birth date rejected. |
| dt-timezone-offset | Fixed Time-Zone Offset Converter | Convert using explicit fixed UTC offsets in minutes; no DST or historical zone database. |
| dt-unix-timestamp | Unix Timestamp Converter | ISO timestamp requires Z or explicit ±HH:MM offset; output Unix seconds and milliseconds. |
| dt-work-hours | Net Work Hours Calculator | Clock-time difference, supports overnight shifts, subtracts break minutes. |
| dt-overtime | Overtime Calculator | Splits worked hours against a user-defined regular-hours threshold; not a wage-law calculation. |
| dt-countdown | Date Countdown Calculator | Signed calendar-day difference from reference date to target date. |
| dt-recurring-interval | Recurring Date Generator | Generates 1–50 occurrences by a positive whole-day interval. |
| dt-leap-year | Leap Year Checker | Gregorian divisible-by-4/100/400 rule. |
| dt-iso-week | ISO Week Number Calculator | ISO-8601 weeks start Monday; week 1 contains the first Thursday. |
| dt-duration-seconds | Duration to Total Seconds | days × 86,400 + hours × 3,600 + minutes × 60 + seconds. |

## Reference results

- 2026-01-01 to 2026-01-31 → 30 calendar days.
- 2026-01-31 + 1 calendar day → 2026-02-01.
- 2026-01-05 through 2026-01-09, counting after start through end → 4 business days.
- 2026-01-09 + 1 business day → 2026-01-12.
- 2000-01-15 to 2026-01-14 → 25 years, 11 months, 30 days.
- 2026-01-01T09:00 at UTC+05:30 → 2026-01-01T03:30 at UTC.
- 1970-01-01T00:00:01Z → Unix 1 second / 1,000 milliseconds.
- 09:00 to 17:30 less a 30-minute break → 8 net hours.
- 10 worked hours with an 8-hour regular threshold → 2 overtime hours.
- 2021-01-01 → ISO week 53 of week-year 2020.
- 1 day, 2 hours, 3 minutes, 4 seconds → 93,784 total seconds.

## Safety, assumptions, and edge cases

- Date-only calculations use the Gregorian calendar and avoid local daylight-saving offsets by using UTC calendar fields.
- A fixed-offset tool is not a replacement for an IANA time-zone database. Daylight-saving changes and historical rules are not inferred.
- Business-day calculations skip Saturday and Sunday only; national, regional, bank, and organization-specific holidays are not included.
- Overtime is arithmetic only; pay rules, exemptions, and legal work-time definitions vary by jurisdiction.
- Timestamp input must include a zone designator, and invalid calendar dates and malformed times are rejected.
- Large recurrence lists and numeric ranges are bounded to avoid unreasonable workloads.
- Browser tests include a category-to-calculator journey and a date-difference interaction. Human keyboard and screen-reader review remains outstanding.

## Acceptance checklist

- [x] 14 unique calculator IDs, with fields, formulas, and examples.
- [x] Browser-local engine and UI category wiring.
- [x] Reference examples plus invalid-date/domain tests.
- [x] Source test and JavaScript syntax-check configuration.
- [x] Browser test for category listing and date-difference interaction.
- [ ] Latest full CI run succeeds on the final implementation commit.
- [ ] Human keyboard and screen-reader testing.
- [ ] Independent calendar/time-zone review for the methods and assumptions.
