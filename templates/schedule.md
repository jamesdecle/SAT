<!--
TEMPLATE — copy to students/<name>/schedule.md. This file is the single
source of truth for the student's plan. Rebuild the week-by-week table
whenever /plan is run or a practice test result changes the weak-skill
picture. Placement rules: full-length practice tests every 2-3 weeks,
weekly in the last 4 weeks, never in the final 3 days before the exam. The
session immediately after each practice test is a review session. Every
row must link to the files it uses.
-->

# Schedule — {{student}}

**Exam date:** {{exam_date}}
**Class days/times:** {{class_days_times}}
**Session length:** {{session_length}} minutes
**Homework:** {{homework_hours_per_week}} hours/week

## Week-by-week plan

| Week of | Session date(s) | Focus | Type | Files |
|---|---|---|---|---|
| {{week_start}} | {{session_date}} | {{skill_or_"Desmos orientation"}} | Lesson | {{link_to_lesson_md}} |
| {{week_start}} | {{session_date}} | {{skill}} | Quiz | {{link_to_quiz_md}} |
| {{week_start}} | {{session_date}} | Full-length practice test | Practice Test | {{link_to_practice_test_folder}} |
| {{week_start}} | {{session_date}} | Review of practice test {{n}} | Review | {{link_to_review_notes}} |

<!-- Continue rows from today through the exam date. Insert practice tests
     every 2-3 weeks, weekly in the final 4 weeks, none in the final 3 days.
     Insert a review session immediately after every practice test. -->

## Placement log
- {{date}}: {{what_was_placed_and_why}}
