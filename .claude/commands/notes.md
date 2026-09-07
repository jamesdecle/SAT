---
description: Generate the one-page skill notes for a student as PDF
argument-hint: <name> <skill>
---

Read CLAUDE.md, then `students/$ARGUMENTS`'s `profile.md` and existing notes
in `students/$ARGUMENTS/notes/`.

Build the notes page from `templates/skill-notes.md` for the named skill:
"What the SAT asks" (every recurring question type for this skill listed in
`reference/sat-math-skills.md`, each with one fully worked OFFICIAL example
from `question-bank/bank.json` — never a clone), "The method" (short,
numbered), "Desmos move" (from `reference/desmos-playbook.md`), "Traps",
and "Linked assignments" (this student's quiz and homework files that use
this skill — scan `students/$ARGUMENTS/quizzes/` and `homework/`). Keep it
to one page unless the skill has more than five question types.

If the bank has no official examples for a question type in this skill, say
so and ask me to run `/bank <skill>` first — don't fake an official example.

Save to `students/$ARGUMENTS/notes/<skill-slug>.md` and render to PDF via
`scripts/md-to-pdf.js` with a header of student, date, skill.
