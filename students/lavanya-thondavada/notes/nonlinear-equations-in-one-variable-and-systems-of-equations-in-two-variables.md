# Nonlinear Equations in One Variable and Systems of Equations in Two Variables

**Domain:** Advanced Math (about 35% of the test)

This skill has more question types than usual, so this page runs longer than one
page — that's expected per how it's built, not a sign anything's wrong.

## What the SAT asks

### 1. Solve a quadratic equation with the quadratic formula
*Example (7f81d0c3, Medium):* x² − x − 1 = 0. What values satisfy the equation above?

**Worked:** Plug a=1, b=−1, c=−1 into x = (−b ± √(b²−4ac)) / 2a: x = (1 ± √5)/2. Correct answer: x = (1+√5)/2 and x = (1−√5)/2.

### 2. Use the discriminant to count real solutions
*Example (332cd67b, Easy):* 3x² − 15x + 18 = 0. How many distinct real solutions?

**Worked:** Discriminant = b² − 4ac = (−15)² − 4(3)(18) = 225 − 216 = 9. Positive → exactly two distinct real solutions.

### 3. Solve a system of one linear and one quadratic equation
*Example (d0a7871e, Medium):* y = x + 1 and y = x² + x. If (x, y) is a solution, which could be the value of x?

**Worked:** Set the two expressions for y equal: x + 1 = x² + x → x² = 1 → x = ±1. Only −1 appears among the choices.

### 4. Determine the number of solutions to a nonlinear system from its graph
*Example (a5663025, Medium):* A quadratic and a linear equation are graphed together. How many solutions does the system have?

**Worked:** Count intersection points on the graph directly — no algebra needed. Two intersection points → 2 solutions.

### 5. Solve a nonlinear system algebraically for a full ordered pair
*Example (4661e2a9, Hard):* x − y = 1 and x + y = x² − 3. Which ordered pair (x, y) solves the system?

**Worked:** Solve the first equation for x (x = y+1), substitute into the second: y+1+y = (y+1)²−3 → 2y+1 = y²+2y−2 → y² = 3 → y = ±√3. Back-substitute y=√3 into x=y+1 to get x=1+√3. Answer: (1+√3, √3).

### 6. Solve a system with a radical equation to find one coordinate
*Example (1e003284, Easy):* x = 49 and y = √x + 9. What is the value of y at the intersection?

**Worked:** Substitute x=49 directly into the second equation: y = √49 + 9 = 7+9 = 16.

### 7. Solve an absolute value equation (often SPR)
*Example (3a9d60b2, Hard):* 2|4−x| + 3|4−x| = 25. What is the positive solution?

**Worked:** Combine like terms: 5|4−x| = 25 → |4−x| = 5. Split into two cases: 4−x=5 (x=−1) or 4−x=−5 (x=9). The positive solution is 9.

### 8. Solve a quadratic by completing the square (often SPR, radical-form answer)
*Example (ba0edc30, Hard):* x² − 2x − 9 = 0. One solution can be written as 1+√k. What is k?

**Worked:** x² − 2x = 9 → x² − 2x + 1 = 10 → (x−1)² = 10 → x = 1 ± √10. Matching the given form 1+√k gives k = 10.

### 9. Find a parameter that makes a line intersect a parabola exactly once (often SPR)
*Example (fc3d783a, Hard):* Line 2y = 4.5 intersects parabola y = −4x² + bx at exactly one point, b > 0. Find b.

**Worked:** Substitute y=2.25 into the parabola: 2.25 = −4x²+bx → 4x² − bx + 2.25 = 0. "Exactly one point" means discriminant = 0: b² − 4(4)(2.25) = 0 → b² = 36 → b = 6 (positive root, since b>0).

### 10. Literal equation rearrangement (nonlinear form)
*Example (4e18fc5d, Medium):* v = −w/(150x). Which equation expresses w in terms of v and x?

**Worked:** Multiply both sides by −150x: −150xv = w, so w = −150vx.

### 11. Determine which of several inequalities is equivalent to a given one
*Example (3c95093c, Easy):* 6x − 9y > 12. Which inequality has the same solution set?

**Worked:** Divide every term by 3 (a positive number, so the inequality direction doesn't flip): 2x − 3y > 4.

## The method
1. **Is it one equation, or a system?** One equation → solve directly. A system → substitute one equation into the other to get down to one variable.
2. **Does it ask for the solutions themselves, or just how many there are?** If it only asks "how many," don't solve — use the discriminant (single quadratic) or count graph intersections (system). It's faster and avoids arithmetic errors.
3. **Absolute value equation** → isolate the absolute value on one side, then split into two cases (positive and negative) and solve both.
4. **No easy factors?** Use the quadratic formula or complete the square — don't force a factoring attempt that isn't there.
5. **A parameter must make a system/line have exactly one solution (tangent)?** Set the discriminant of the resulting quadratic equal to 0 and solve for the parameter.
6. **Radicals in the equation?** After solving, check for extraneous solutions by substituting back in — a squared equation can introduce fake roots (this didn't come up directly in this batch, but it's a standard trap on this skill).

## Desmos move
Graph both sides (or both equations of a system) as separate lines (`y1=`, `y2=`) and click every intersection point — Desmos gives exact coordinates and directly answers "how many solutions." For "how many solutions" or "for what value of the parameter does this have exactly one solution" questions, this is usually faster than algebra: add a slider on the unknown parameter and drag until the graphs touch at exactly one point, then read the slider value.

## Traps
- Forgetting the ± when taking a square root (completing-the-square problems have two solutions unless the question asks for one specific one).
- Sign errors when splitting an absolute value equation into two cases.
- Solving for the solutions when the question only asked "how many" — wastes time under the 95-second pace.
- Dividing an inequality by a negative number without flipping the direction (didn't come up in these 12 questions, but it's the classic trap on the "equivalent inequality" question type).

## Linked assignments
- Lesson: students/lavanya-thondavada/lessons/2026-09-10-nonlinear-equations.md
- Quiz: students/lavanya-thondavada/quizzes/2026-09-17-nonlinear-equations-quiz.md
- Homework: students/lavanya-thondavada/homework/2026-09-10-nonlinear-equations-hw.md
