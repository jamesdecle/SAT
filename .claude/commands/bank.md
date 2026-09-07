---
description: Extract and parse one skill's questions from the College Board Educator Question Bank
argument-hint: <skill>
---

Read CLAUDE.md section on Questions, and the "Build the question bank"
process it points to.

For skill "$ARGUMENTS":

1. At https://satsuiteeducatorquestionbank.collegeboard.org: Find Questions →
   Assessment: SAT → Section: Math → tick the domain this skill belongs to
   (see `reference/sat-math-skills.md`) → Search. On results: Add Filters →
   Skill = "$ARGUMENTS" (and Difficulty if I want a specific one), turn on
   "Exclude Active Questions", set View to 50, select all on the page,
   Export with correct answers and explanations. Save each page's export to
   `question-bank/raw/<domain>__<skill>__p<page>.pdf` (spaces → `-`). Repeat
   for every page. This is a file download each time — ask me to approve
   each export, or tell me you're ready for me to run the exports myself and
   drop them in `question-bank/raw/`.
2. Parse every new PDF in `question-bank/raw/` for this skill into
   `question-bank/bank.json`, following the schema in CLAUDE.md: id, domain,
   skill, difficulty, question_type, stem, choices/SPR, correct_answer,
   rationale, source_file, has_figure, figure_path, active, date_added.
   Extract any figures/tables to `question-bank/figures/<id>.png`.
   Deduplicate by id.
3. Report counts per difficulty for this skill when done.
4. Update the question-type list for this skill in
   `reference/sat-math-skills.md` from what you actually saw, and log the
   change under its "Change log" section.
