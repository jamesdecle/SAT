---
description: Generate the next lesson plan (or one for a named skill) as PDF
argument-hint: <name> [skill]
---

Read CLAUDE.md, then `students/$ARGUMENTS`'s `profile.md`, `schedule.md`,
`scores.md`, and `log.md`.

Arguments are "<name> [skill]". If a skill is given, build the lesson for
that skill; otherwise use the next lesson on `schedule.md`.

Build the lesson plan from `templates/lesson-plan.md`: warm-up (2 official
questions from a previous skill), direct instruction (link the skill's
notes page — create it first via the `/notes` flow if it doesn't exist yet),
Desmos move demo, guided practice (4-6 official questions, easy to hard),
exit ticket (2 questions), homework assigned, notes-for-me section. Timings
must sum to the student's session length from `schedule.md`. If this is the
student's first lesson and their profile says they haven't used Desmos, make
it the Desmos orientation from `reference/desmos-playbook.md` instead.

Pull questions from `question-bank/bank.json` only (never active questions).
If the bank lacks questions for this skill, say so and ask me to run
`/bank <skill>` first rather than writing clones.

Save the markdown to `students/$ARGUMENTS/lessons/<date>-<skill-slug>.md`
and render it to a PDF alongside it via `scripts/md-to-pdf.js`, with a header
of student, date, skill(s).
