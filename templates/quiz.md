<!--
TEMPLATE — copy to students/<name>/quizzes/<YYYY-MM-DD>-<skill-slug>-quiz.md
Defaults: 8–12 questions, mixed MCQ/SPR, ~60% official / ~40% clones,
95 sec/question time limit (round to nearest minute), difficulty mix pulled
from the student's current mastery table in scores.md.
Answer key is a SEPARATE final page (or separate PDF) — never interleaved
with the questions. Every question must NOT be marked active in bank.json.
Render with scripts/md-to-pdf.js; header must include student, date, skill(s),
time limit.
-->

# Quiz — {{skill}}

**Student:** {{student}}
**Date:** {{date}}
**Time limit:** {{n_questions}} questions × 95 sec ≈ **{{time_limit_minutes}} minutes**
**Instructions:** No notes. Desmos is available for every question — decide
for each one whether it's faster to graph or faster to work by hand. Show
your work for SPR questions in the space provided.

---

### 1. [{{difficulty}}] {{cb_id_or_clone_label}}
{{stem}}

{{choices_or_spr_blank}}

### 2. [{{difficulty}}] {{cb_id_or_clone_label}}
{{stem}}

{{choices_or_spr_blank}}

<!-- ... continue to 8–12 questions total ... -->

---
<!-- PAGE BREAK — answer key starts here -->

# Answer Key — {{skill}} Quiz ({{student}}, {{date}})

| # | Answer | Source | Rationale | Desmos or By hand |
|---|---|---|---|---|
| 1 | {{answer}} | {{cb_id_or_"Clone of <ID>"}} | {{rationale}} | {{Desmos/By hand}} |
| 2 | {{answer}} | {{cb_id_or_"Clone of <ID>"}} | {{rationale}} | {{Desmos/By hand}} |

*At least one question above is fastest on Desmos and at least one is faster
by hand — confirm both are present before finalizing.*
