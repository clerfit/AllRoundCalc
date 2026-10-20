# Phase 10 — Health & Fitness Formula Catalogue

**Scope:** 14 introductory body-measurement, exercise, and training calculators. Results are estimates only and do not diagnose conditions, prescribe food intake, or replace professional guidance.

| Calculator | Formula | Domain and example |
|---|---|---|
| Adult BMI | kg/m² | Adults only; 70 kg, 175 cm → 22.857; screening measure, not diagnosis |
| Mifflin–St Jeor resting energy | Men: 10W+6.25H−5A+5; women: 10W+6.25H−5A−161 | Adult equation; 70 kg, 175 cm, age 30, men's constant → 1,648.75 kcal/day |
| Daily energy scenario | resting energy × activity multiplier | 1,600 × 1.5 → 2,400 kcal/day; not an intake prescription |
| Target heart-rate zone | (220−age) × lower/upper intensity | Age 30 at 60–80% → 114–152 bpm; rough population estimate |
| Heart-rate reserve target | (HRmax−resting HR) × intensity + resting HR | Age 30, resting HR 60, 70% → 151 bpm |
| Waist-to-height ratio | waist/height | Same unit; 80/175 → 0.4571 |
| Waist-to-hip ratio | waist/hip | Same unit; 80/100 → 0.8 |
| Body surface area | √(height(cm)×weight(kg)/3600) | Mosteller estimate; 70 kg, 175 cm → 1.8447 m² |
| One-rep max | load × (1 + reps/30) | Epley estimate, 1–10 reps; 60 kg × 5 → 70 kg |
| Running pace | elapsed minutes/distance km | 5 km in 30 min → 6:00 min/km |
| Running speed | distance km/elapsed hours | 5 km in 30 min → 10 km/h |
| MET energy estimate | MET × 3.5 × kg/200 × minutes | MET 6, 70 kg, 30 min → 220.5 kcal |
| Strength training volume | load × reps × sets | 40 kg × 8 × 3 → 960 kg-volume |
| Weight change | (current−starting)/starting × 100% | 60→57 kg → −5% |

## Safety and privacy

- Calculations run locally in the browser; these engines do not add accounts or server-side input history.
- Adult BMI and Mifflin–St Jeor are not intended for children or adolescents; the BMR tool rejects ages below 18.
- Age-predicted heart rate, activity multipliers, resting energy, MET energy, and 1RM estimates have meaningful individual error.
- No result is a diagnosis, treatment recommendation, medication dose, weight-loss target, or guarantee of exercise safety.
- If symptoms or a medical condition affect exercise, use qualified clinical guidance rather than relying on an estimated heart-rate target.

## Reference sources

- CDC, About Adult BMI: https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html
- Mifflin et al., *A new predictive equation for resting energy expenditure in healthy individuals* (1990): https://pubmed.ncbi.nlm.nih.gov/2305711/
- ACSM exercise testing and prescription resources: https://www.acsm.org/education-resources/books/guidelines-exercise-testing-prescription
- Mosteller, *Simplified calculation of body-surface area* (1987): https://pubmed.ncbi.nlm.nih.gov/3657876/

These references are starting points for review, not a claim of independent clinical validation for every use or population.

## Acceptance checklist

- [x] 14 definitions with formulas, examples, limitations, and field help.
- [x] Browser-local engine with adult age restrictions and input validation.
- [x] Reference and invalid-input tests authored.
- [x] Full source suite (112 tests) and JavaScript syntax checks pass.
- [x] Chromium desktop/tablet/mobile and automated accessibility checks pass.
- [ ] Independent formula review and human keyboard/screen-reader review completed.
- [x] Automated regression tests for Phases 03–09 pass.

**Sign-off rule:** this phase remains unverified until complete automated and human review is recorded.
