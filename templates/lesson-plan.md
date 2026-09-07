<!--
TEMPLATE — copy this file to students/<name>/lessons/<YYYY-MM-DD>-<skill-slug>.md
and fill in every {{placeholder}}. Delete this comment block in the copy.
Timings across Warm-up + Direct Instruction + Guided Practice + Exit Ticket
must add up to {{session_length}}. Render to PDF with:
  node scripts/md-to-pdf.js <this-file>.md <this-file>.pdf --header "{{student}} · {{date}} · {{skills}}"
-->

# Lesson Plan — {{student}}

**Date:** {{date}}
**Session length:** {{session_length}} minutes
**Skill(s):** {{skills}}

## Objectives
- {{objective_1}}
- {{objective_2}}

## Warm-up ({{warmup_minutes}} min)
Two official questions from a **previous** skill, for retrieval practice.

1. [{{prev_skill}}] {{cb_id_1}} — {{warmup_q1_stem}}
2. [{{prev_skill}}] {{cb_id_2}} — {{warmup_q2_stem}}

## Direct instruction ({{instruction_minutes}} min)
Link the notes page: `students/{{student}}/notes/{{skill_notes_file}}.md`

- {{teaching_point_1}}
- {{teaching_point_2}}

### Desmos move demo
{{desmos_move_description}} (from reference/desmos-playbook.md)

## Guided practice ({{practice_minutes}} min)
4–6 official questions, easy to hard.

1. (Easy) {{cb_id}} — {{stem}}
2. (Easy–Medium) {{cb_id}} — {{stem}}
3. (Medium) {{cb_id}} — {{stem}}
4. (Medium–Hard) {{cb_id}} — {{stem}}
5. (Hard) {{cb_id}} — {{stem}}

## Exit ticket ({{exit_minutes}} min)
Two questions, done independently, to gauge whether the skill landed.

1. {{cb_id}} — {{stem}}
2. {{cb_id}} — {{stem}}

## Homework assigned
`students/{{student}}/homework/{{homework_file}}.md` — due {{due_date}}.

## Notes for me after the session
- What clicked / what didn't:
- Adjust next lesson:
- Update mastery table? (Y/N)

---
*Timing check: {{warmup_minutes}} + {{instruction_minutes}} + {{practice_minutes}} + {{exit_minutes}} = {{session_length}} minutes.*
