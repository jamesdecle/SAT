# SAT Math Tutoring — Standing Rules

This file governs every session in this project. Read it first, every time. It is
written for Claude (the assistant) and for the tutor (the human user of this
project, referred to below as "I"/"me").

**Working directory note:** this project was originally specified to live at
`~/Claude/SAT-Math`. It is built instead at the root of this git repository
(`jamesdecle/sat`, branch `claude/sat-math-project-setup-9dtih1` at time of
creation), because this session is wired to that repo. Treat the repo root as
`SAT-Math/` for every path referenced below and in every template. If this
project is ever relocated to `~/Claude/SAT-Math` on a local machine, no paths
inside this repo need to change — everything is relative to the project root.

---

## Test facts

Digital SAT only. Practice tests are the official Bluebook practice tests. Math is two modules of 22 questions, 35 minutes each, roughly 75% multiple choice and 25% student-produced response (SPR). Desmos is built into the test app. Math is scored 200 to 800. Pace is about 95 seconds per question.

## Content map

Four domains and 19 skills:
- Algebra (about 35%): Linear equations in one variable; Linear functions; Linear equations in two variables; Systems of two linear equations in two variables; Linear inequalities in one or two variables.
- Advanced Math (about 35%): Nonlinear functions; Nonlinear equations in one variable and systems of equations in two variables; Equivalent expressions.
- Problem-Solving and Data Analysis (about 15%): Ratios, rates, proportional relationships, and units; Percentages; One-variable data: distributions and measures of center and spread; Two-variable data: models and scatterplots; Probability and conditional probability; Inference from sample statistics and margin of error; Evaluating statistical claims: observational studies and experiments.
- Geometry and Trigonometry (about 15%): Area and volume; Lines, angles, and triangles; Right triangles and trigonometry; Circles.

## Questions

Official College Board questions from question-bank/bank.json come first. Every official question is labeled with its College Board ID. Every question you write yourself is labeled "Clone of <ID>" and matches that question's skill, difficulty, and format. Never present a clone as official. Never use a question that is marked as active (appearing on a Bluebook practice test), so quizzes never spoil a practice test. If the bank has no questions for a skill, say so and ask me to export that skill before writing clones.

## Desmos

Every skill-notes page, lesson plan, and quiz includes Desmos where it helps. Notes carry a "Desmos move" section. Each quiz has at least one question that is fastest on Desmos and at least one that is faster by hand, with the answer key saying which is which. The first lesson for any student who has not used Desmos is a Desmos orientation using reference/desmos-playbook.md.

## Output

Every student-facing deliverable is saved as a PDF in the student's folder, alongside its markdown source. Use whatever PDF tooling is available (a pdf skill, pandoc, or an HTML-to-PDF step). If nothing usable is installed, tell me exactly what to install. Every PDF has a header with student name, date, skill(s), and time limit where relevant. Answer keys are a separate PDF or a separate final page.

## Notes

One page per skill, student facing, in plain language. Sections in this order: What the SAT asks (every recurring question type for this skill, each with one fully worked official example); The method (short, numbered); Desmos move; Traps; Linked assignments (the quiz and homework files that use this skill). Update the Linked assignments section every time a new quiz or homework touches the skill. Keep it to one page unless a skill has more than five question types.

## Schedule

students/<name>/schedule.md is the single source of truth for that student. It holds exam date, class days and times, session length, homework hours per week, and a week-by-week table from today to the exam. Full-length Bluebook practice tests are placed every two to three weeks, weekly in the last four weeks, and never in the final three days. The session after each practice test is a review session. Every row links to the files it uses. I tell you the class days, practice test dates, and homework deadlines case by case; you place everything else around them.

## Logging

After every session, quiz, homework, or practice test I report, update scores.md and log.md for that student, then recompute the skill mastery table.

## Privacy

Everything stays on this machine. Never send student names, scores, or files to any external service. Question bank content is College Board copyright and is for my private tutoring use only.

---

## Additional working conventions

These aren't verbatim from the original spec, but are needed for consistency across sessions.

### Project structure

```
SAT-Math/                        (this repo root)
  CLAUDE.md                      this file
  .claude/commands/              slash commands, one .md per command
  question-bank/
    raw/                         PDF exports from the College Board Educator Question Bank
    figures/                     <id>.png images extracted from questions with figures/tables
    bank.json                    every parsed question, tagged (see schema below)
  reference/
    sat-math-skills.md
    desmos-playbook.md
    practice-tests.md
  templates/                     master templates — copy, don't edit in place
  students/<name>/
    profile.md                  grade, courses, Desmos comfort, target score, exam date, diagnosis
    scores.md                   score history (practice tests, quizzes, homework)
    schedule.md                 week-by-week plan (single source of truth)
    log.md                      session-by-session log
    lessons/
    quizzes/
    notes/
    homework/
    practice-tests/
  scripts/
    md-to-pdf.js                 markdown -> HTML -> PDF via headless Chromium
```

### bank.json schema

`question-bank/bank.json` is a JSON array. Each record:

```json
{
  "id": "College Board question ID",
  "domain": "Algebra | Advanced Math | Problem-Solving and Data Analysis | Geometry and Trigonometry",
  "skill": "one of the 19 skills",
  "difficulty": "Easy | Medium | Hard",
  "question_type": "a recurring question type from reference/sat-math-skills.md",
  "stem": "question text",
  "choices": ["A ...", "B ...", "C ...", "D ..."] ,
  "is_spr": false,
  "correct_answer": "...",
  "rationale": "...",
  "source_file": "question-bank/raw/<file>.pdf",
  "has_figure": false,
  "figure_path": "question-bank/figures/<id>.png",
  "active": false,
  "date_added": "YYYY-MM-DD"
}
```

`active: true` means the question is known to appear on a Bluebook practice test — never assign it. Setting `active` requires cross-referencing against reference/practice-tests.md and/or the "Exclude Active Questions" export filter; when in doubt, leave `active: false` but flag it for my review rather than silently assigning.

### File naming

- Raw exports: `question-bank/raw/<domain>__<skill>__p<page>.pdf` (spaces in skill/domain replaced with `-`).
- Figures: `question-bank/figures/<College-Board-ID>.png`.
- Student deliverables: `students/<name>/<lessons|quizzes|notes|homework|practice-tests>/<YYYY-MM-DD>-<short-slug>.md` with a matching `.pdf` of the same name.

### PDF generation

No pandoc, wkhtmltopdf, or weasyprint is installed in this environment. PDFs are produced with `scripts/md-to-pdf.js`, which converts markdown to HTML (via the `marked` npm package) and prints it to PDF with headless Chromium (Playwright, already installed at `/opt/pw-browsers`). Usage:

```
node scripts/md-to-pdf.js <input.md> <output.pdf> [--header "Student · Date · Skill · Time limit"]
```

If this tooling ever breaks (Chromium missing, `marked` not installed), say exactly what's missing and how to fix it — don't silently skip the PDF.

### Slash commands

See `.claude/commands/`. Every command reads the relevant student files first, then follows the rules above.

### Session start checklist

At the start of any session on this project: re-read this file, then read the named student's `profile.md`, `schedule.md`, and `scores.md` before doing anything else.
