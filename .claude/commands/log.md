---
description: Log a quiz, homework, or practice test result for a student
argument-hint: <name>
---

Read CLAUDE.md, then `students/$ARGUMENTS/profile.md`, `scores.md`,
`schedule.md`, and `log.md`.

I'm about to paste or describe a quiz, homework, or practice test result for
"$ARGUMENTS". Once I give it to you:

1. Append an entry to `students/$ARGUMENTS/log.md` (date, session/assignment
   type, what happened).
2. Update `students/$ARGUMENTS/scores.md` with the new result. For a
   practice test: date, test number, total Math score, per-domain
   performance band, and every missed question's skill and difficulty if I
   gave you the question-level review. Also add a row to
   `reference/practice-tests.md` under "Student usage".
3. Recompute the skill mastery table in `scores.md` (skill weight × miss
   rate, or the best estimate available from what's logged so far).
4. If this was a full-length practice test: place a review session next in
   `schedule.md`, and if the weak-skill picture changed, adjust the
   remaining schedule (still respecting: full tests every 2-3 weeks, weekly
   in the last 4 weeks, never in the final 3 days, review session
   immediately after each test).
5. Tell me in one short paragraph what changed and why.
