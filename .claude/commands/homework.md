---
description: Generate this week's homework plus answer key for a student as PDF
argument-hint: <name>
---

Read CLAUDE.md, then `students/$ARGUMENTS`'s `profile.md`, `schedule.md`,
and `scores.md`.

Build homework from `templates/homework.md`: 10-15 questions, about 60% from
the current skill on `schedule.md` and 40% spiral review of this student's
weakest previous skills per the mastery table in `scores.md`, plus an answer
key. Never use a question marked `active` in `question-bank/bank.json`.

If the bank lacks enough official questions, say so and ask me to run
`/bank <skill>` first before filling the gap with clones.

Save the markdown to `students/$ARGUMENTS/homework/<date>-<skill-slug>-hw.md`
and render to PDF via `scripts/md-to-pdf.js` with a header of student, date,
skill(s). Add it to the "Linked assignments" section of every skill's notes
page it touches for this student.
