---
description: Onboard a new SAT Math student (CLAUDE.md section 6)
argument-hint: <name>
---

Read CLAUDE.md in full before doing anything else.

Onboard student "$ARGUMENTS" per the "Student onboarding" rules in CLAUDE.md:

1. Create `students/$ARGUMENTS/` with `profile.md`, `scores.md`, `schedule.md`,
   `log.md`, and the folders `lessons/`, `quizzes/`, `notes/`, `homework/`,
   `practice-tests/` (copy structure/fields from `templates/schedule.md` for
   the schedule file; use plain markdown for the others per the fields listed
   in CLAUDE.md section 6).
2. Ask me for anything not already given: grade level; math courses completed
   and current one; comfort with Desmos; target score; exam date; class days,
   times, and length; homework hours per week; and Bluebook score reports
   (date, test number, total Math score, per-domain performance band, and
   missed-question skill/difficulty when I give you the question-level
   review).
3. Without waiting further, produce:
   - A diagnosis in `profile.md`: skills ranked by expected point gain
     (skill weight × miss rate), naming the three skills to attack first and
     why.
   - The full schedule in `schedule.md` from today to the exam date, using
     the Schedule rule in CLAUDE.md and the class days I gave you.
   - The first week's materials as PDFs: the notes page for the first skill,
     the first lesson plan, the first quiz, and the first homework. If this
     student is new to Desmos, the first lesson is the Desmos orientation
     from `reference/desmos-playbook.md`.

Pull all official questions from `question-bank/bank.json`. If the bank has
no questions yet for a needed skill, say so plainly and ask me to run
`/bank <skill>` before writing clones for that skill.
