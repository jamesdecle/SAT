# Desmos Playbook — Skill by Skill

The Desmos graphing calculator is built into the Bluebook testing app on every
Math question (not just calculator-allowed — digital SAT Math allows Desmos
throughout). It opens as a split-screen panel. Students type expressions into
numbered lines exactly like desmos.com/calculator.

**What SAT Desmos does NOT do:** no saving graphs between questions (it resets
each question), no image import, no uploading data files, no scientific/
distribution functions beyond what's listed below, no custom colors beyond
defaults mattering. Don't let a student build a workflow that depends on any
of that.

General habit to teach first: **type the expression, then look at the graph —
click on graph features (points, intersections) rather than trying to read
coordinates off the axes by eye.** Desmos rounds and snaps to exact points
when you click directly on them.

---

## Universal moves (use across many skills)

**Solve any single-variable equation by graphing both sides.**
Type `y1=<left side>` and `y2=<right side>` as two separate lines. Click the
intersection point that appears; Desmos shows its coordinates. The x-value is
the solution. Works for linear, quadratic, radical, exponential, absolute
value — anything.

**Solve a system the same way / count solutions.**
Type each equation on its own line (`y1=...`, `y2=...`, or just the two
equations directly, e.g. `x+y=4` and `2x-y=1`). Click each intersection.
Number of intersections = number of solutions: 0 → no solution, 1 → one
solution, 2 (for a line/parabola system) → two solutions, infinitely many
overlapping lines → infinite solutions (Desmos will draw them as the same
line).

**Check whether two expressions are equivalent.**
Type `y1=<expression A>` and `y2=<expression B>`. If the graphs perfectly
overlap (one line drawn, or Desmos shows them as identical), they're
equivalent. If they diverge anywhere, they're not — and you can click a point
where they differ to get a counterexample value.

**Use a slider for an unknown constant.**
Type an equation with an undefined letter, e.g. `y=a*x^2+3`. Desmos offers
"add slider" for `a` — click it, then drag to see how the graph changes.
Useful for "for which value of k does this system have no solution" type
problems: slide until the graph matches the described condition, then read
the slider value.

---

## Linear equations in one variable
Graph both sides as `y1=` / `y2=`, click the intersection; the x-coordinate
is the answer. Fastest when the equation has decimals/fractions that are
error-prone by hand.

## Linear functions
Type the function as `y1=`. Click the y-intercept (crosses the y-axis) and
any labeled point to read the rate of change. For "compare two functions"
questions, graph both and compare slopes/intercepts visually, or use a table
(see below) to compare specific values.

## Linear equations in two variables
Type the equation directly (Desmos accepts standard form like `3x+2y=12`
as-is). Click the x-intercept and y-intercept points directly on the graph to
read them — don't compute algebraically if a click gets the same answer
faster.

## Systems of two linear equations in two variables
Universal system move above. For "no solution / infinite solutions" with an
unknown constant, add a slider on the constant and watch the second line
rotate/shift until it matches (parallel = no solution, identical = infinite).

## Linear inequalities in one or two variables
Type the inequality directly, e.g. `y<2x-1` or `x+y>=4`. Desmos shades the
solution region automatically. For a "which point is a solution" question,
plot the answer choices as points, e.g. `(3,1)`, and see which ones fall in
the shaded region.

## Nonlinear functions
Type the function as `y1=`. Click the gray points Desmos flags automatically:
vertex (for a parabola), x-intercepts (zeros), and y-intercept. These are
exact values, not estimates, when Desmos highlights them as special points —
click directly on the point until it "snaps" and shows exact coordinates.

## Nonlinear equations in one variable and systems of equations in two variables
Universal solve-by-graphing move for single equations. For systems (e.g. a
line and a parabola), graph both and click every intersection — the number
of intersections directly answers "how many solutions."

## Equivalent expressions
Universal equivalence-check move: graph both expressions as `y1=`/`y2=` and
confirm overlap. Also useful to test each answer choice against the original
expression one at a time if the question is multiple choice.

## Ratios, rates, proportional relationships, and units
Not usually a graphing problem, but Desmos is a fast calculator: type the
proportion directly, e.g. `3/4=x/20`, and Desmos solves numerically if you
graph both sides and intersect, or just evaluate expressions with normal
arithmetic syntax.

## Percentages
Use Desmos as a calculator: type expressions directly, e.g.
`80*(1-0.15)` for a 15% discount off $80, or `x*1.08=54` graphed as two
lines to back-solve an original price.

## One-variable data: distributions and measures of center and spread
Enter the data as a list in a table (click the `+` and choose "table"), one
value per row in column `x1`. Then in a new line type `mean(x1)`, `median(x1)`,
`stdev(x1)`, or `stdevp(x1)` (population vs. sample — check which the
question wants) to get the value instantly instead of computing by hand.

## Two-variable data: models and scatterplots
Enter paired data in a table with columns `x1` and `y1`. For a line of best
fit, add a new line and type `y1 ~ mx1 + b` — Desmos performs a linear
regression and reports `m` and `b`. For other models, use the matching form,
e.g. `y1 ~ a*b^x1` for exponential regression.

## Probability and conditional probability
Calculator use only — type the ratio directly, e.g. `12/45` or
`(12/45)/(20/45)` for a conditional probability, to avoid arithmetic slips.
No dedicated probability function.

## Inference from sample statistics and margin of error
Calculator use only: type `<statistic> - <margin>` and `<statistic> +
<margin>` as two lines to get the confidence interval endpoints directly
instead of doing the addition/subtraction by hand under time pressure.

## Evaluating statistical claims: observational studies and experiments
Not a Desmos skill — this is reasoning about study design. Flag it in notes
as a "by hand always" skill.

## Area and volume
Calculator use only for the arithmetic (plug the formula in directly, e.g.
`pi*5^2*12` for a cylinder's volume) — Desmos won't derive the formula for
you, but it saves error on the computation, especially with π and fractions.

## Lines, angles, and triangles
Mostly a by-hand reasoning skill (angle chasing). Desmos is useful only as a
calculator to check arithmetic on the final numeric answer.

## Right triangles and trigonometry
Desmos trig functions work in **radians by default** — check/change the
angle mode (bottom-right wrench icon) to degrees before typing `sin(40)` etc.
Type the trig expression directly to evaluate, e.g. `12/sin(35)`.

## Circles
Type the circle equation directly in the form `(x-h)^2+(y-k)^2=r^2` with
numbers plugged in — Desmos draws it immediately, letting you visually
confirm center `(h,k)` and radius `r`, or check whether a given point lies
on/inside/outside the circle by plotting it.

---

## Notes-page shorthand

When a skill-notes page says "Desmos" in the quiz answer key, it means: this
question is meaningfully faster using one of the moves above than doing the
algebra by hand under time pressure. "By hand" means the algebra is faster
than typing it into Desmos and clicking around.
