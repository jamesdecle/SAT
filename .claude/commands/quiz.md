---
description: Generate a quiz plus answer key for a student as PDF
argument-hint: <name> <skill> [count]
---

Read CLAUDE.md, then `students/$ARGUMENTS`'s `profile.md` and `scores.md`
(for the mastery table / difficulty mix).

Build the quiz from `templates/quiz.md` for the named skill: default 8-12
questions (or the given count), mixed multiple choice and SPR, about 60%
official / 40% clones, difficulty mix drawn from the mastery table, 95
seconds/question time limit rounded to the nearest minute. At least one
question must be fastest on Desmos and at least one faster by hand — mark
which in the answer key. Never use a question marked `active` in
`question-bank/bank.json`.

If the bank lacks enough official questions for this skill/difficulty mix,
say so and ask me to run `/bank <skill>` first before filling the gap with
clones.

Save the markdown to `students/$ARGUMENTS/quizzes/<date>-<skill-slug>-quiz.md`
with the answer key as a separate final page (or separate PDF, your choice,
but never interleaved with questions). Render to PDF via `scripts/md-to-pdf.js`
with a header of student, date, skill, time limit. After creating it, add it
to the "Linked assignments" section of that skill's notes page for this
student (create the notes page first via `/notes` if it doesn't exist).
