# Digital SAT Math — Domains, Skills, and Question Types

Four domains, 19 skills, 44 scored Math questions total across two 22-question
modules (module 2's difficulty adapts to module 1 performance; the question
count per domain below is the same either way). Weights and question counts
are College Board's published targets and are approximate — actual test forms
vary by a question or two per domain.

This file is the source for the "What the SAT asks" section of every skill
notes page: every question type listed under a skill must eventually have a
fully worked **official** example in that skill's notes page. The type lists
below are seeded from general knowledge of the digital SAT and are a starting
point — **revise them from the actual questions as the bank grows** (rule in
CLAUDE.md, section 5.5). When you parse a batch of new questions into
bank.json, scan for question types not yet listed here and add them.

---

## Algebra — about 35% (13–15 questions)

### Linear equations in one variable
- Solve a one-step or multi-step linear equation for a variable.
- Solve a linear equation with variables/constants on both sides.
- Solve a literal equation for one variable in terms of others.
- Determine the number of solutions (one, none, infinite) from a form like `a(x+b) = ax+c`.
- Given that a linear equation has infinitely many solutions, solve for an unknown constant in it (often SPR).
- Set up and solve a real-world rate/word problem as a linear equation.
- Translate a word problem into a linear equation *without* solving it (the answer choices are equations, not numbers).

### Linear functions
- Given a table, graph, or equation, find the value of `f(x)` or the rate of change.
- Write the equation of a line from two points, from a point and a slope, or from a real-world description.
- Interpret slope and intercept in context (rate, starting value).
- Compare two linear functions given in different representations (table vs. equation vs. graph).
- Write a piecewise-style linear function from a real-world description (e.g. a flat fee plus a per-unit rate) using one given data point to solve for the unknown rate.
- Build a linear model from two data points, then evaluate it at a new input.
- Given a linear function, find the change in output for a given change in input using the slope alone (no need to evaluate the full function).

### Linear equations in two variables
- Find the slope, x-intercept, or y-intercept of a line from its equation.
- Convert between slope-intercept, standard, and point-slope forms.
- Write an equation of a line parallel or perpendicular to a given line.
- Determine whether a point lies on a given line.
- Find an unknown coefficient in a line's equation given points the line passes through.
- Given a table of values for a line, find a feature (e.g. x-intercept) of a vertically translated version of that line.
- Interpret the coefficients of a two-variable linear equation modeling a real scenario (e.g., compare unit rates).
- Read the x- or y-intercept of a given graph and interpret it in context (e.g., an estimated per-unit quantity).

### Systems of two linear equations in two variables
- Solve a system by substitution or elimination for a numeric answer.
- Determine the number of solutions (one, none, infinite) from the system's coefficients.
- Write a system from a word problem (mixture, cost, rate) and solve.
- Given a system with one unknown constant, find the constant that makes the system have no solution / infinite solutions.

### Linear inequalities in one or two variables
- Solve a one-variable linear inequality and express the solution set.
- Solve a system of two linear inequalities and identify a point in the solution region.
- Translate a real-world constraint ("at most," "at least") into an inequality.
- Read a shaded region on a graph to answer a multiple-choice question about which point/values satisfy it.

---

## Advanced Math — about 35% (13–15 questions)

### Nonlinear functions
- Evaluate or interpret a quadratic, exponential, radical, or rational function at a point.
- Identify key features from a quadratic graph: vertex, axis of symmetry, zeros, direction of opening.
- Interpret exponential growth/decay parameters (initial value, growth/decay rate, base) in context.
- Compare average rate of change of a nonlinear function over an interval.
- Match a transformed function (shifted, reflected, scaled) to its graph or equation.
- Find the y-intercept of a function's graph, algebraically or from a table (including a table of a *related* function, e.g. g(x) = f(x)/(x+3)).
- Find the vertex/minimum/maximum value of a quadratic given in standard, factored, or vertex form.
- Determine the number of x-axis crossings of an exponential (or other nonlinear) function from its parameters.
- Build an exponential function from a table of values (find the base and initial value).
- Interpret a coefficient or parameter's meaning within a function model, not just the overall growth rate (e.g., what a specific factor represents).
- Write an explicit formula for a geometric sequence.
- Word problem modeled by a quadratic (e.g., revenue, an integer product) — solve by factoring or by finding the vertex.
- Abstract reasoning: given a family of equivalent function forms, determine which one displays a specific feature (e.g. the y-intercept) as a visible constant or coefficient.

### Nonlinear equations in one variable and systems of equations in two variables
- Solve a quadratic equation by factoring, completing the square, or the quadratic formula.
- Use the discriminant to determine the number of real solutions.
- Solve a system of one linear and one quadratic equation (find intersection points).
- Solve an equation with a radical or rational expression, checking for extraneous solutions.
- Determine the number of solutions to a nonlinear system from its graph or algebra.
- Solve an absolute value equation (often SPR).
- Solve a nonlinear system algebraically to find a full ordered-pair solution (not just one coordinate).
- Find a parameter value that makes a line tangent to (intersect exactly once) a parabola, using the discriminant.
- Literal equation rearrangement (solve for one variable in terms of others) in a nonlinear/rational form.

### Equivalent expressions
- Rewrite a polynomial expression in an equivalent factored or expanded form.
- Simplify a rational expression (factor and cancel).
- Rewrite an exponential expression using exponent rules.
- Determine which of several expressions is algebraically equivalent to a given one.
- Add, subtract, or multiply polynomial or rational expressions.
- Factor a perfect-square trinomial or other special-product form.
- Determine which of two given binomials is/are factors of a quadratic (Roman-numeral I/II style).
- Rewrite a radical or rational-exponent expression as x^(a/b) and solve for the exponent (often SPR).
- Substitute given expressions for variables into a combination and simplify (function-composition style).
- Polynomial identity: match coefficients on both sides of an equation true "for all x" to solve for an unknown constant or product.
- Factor a difference of squares, including with irrational roots (e.g. x^2 - 5).

---

## Problem-Solving and Data Analysis — about 15% (5–7 questions)

### Ratios, rates, proportional relationships, and units
- Solve a proportion or unit-rate word problem, including unit conversion.
- Scale a recipe/model/map using a given ratio.
- Solve a "how long/how many" problem using a constant rate.

### Percentages
- Find a percent, percent increase/decrease, or original value before a percent change.
- Solve successive/compound percent change problems.

### One-variable data: distributions and measures of center and spread
- Read mean, median, mode, range, or standard deviation from a data set, dot plot, or histogram.
- Determine the effect of adding/removing a data point (or a constant shift) on mean and median.
- Compare the spread or shape (skew) of two distributions.

### Two-variable data: models and scatterplots
- Read a scatterplot and identify the line/curve of best fit.
- Use a regression equation to predict a value or interpret slope/intercept in context.
- Assess how well a linear vs. exponential vs. quadratic model fits given data.

### Probability and conditional probability
- Compute a simple probability from a two-way frequency table.
- Compute a conditional probability ("given that...") from a two-way table.
- Compute probability of a compound event (independent events, "and"/"or").

### Inference from sample statistics and margin of error
- Use a sample statistic and margin of error to construct/interpret a confidence interval.
- Determine what a margin of error implies about the range of a population parameter.
- Evaluate how sample size affects margin of error.

### Evaluating statistical claims: observational studies and experiments
- Determine whether a study design supports a causal claim vs. only a correlational one.
- Identify what population a sample's conclusions can be generalized to, based on sampling method.
- Critique a study for bias, confounding, or lack of randomization.

---

## Geometry and Trigonometry — about 15% (5–7 questions)

### Area and volume
- Compute area of a composite 2-D figure (triangles, circles, polygons).
- Compute volume or surface area of a 3-D solid (prism, cylinder, cone, sphere).
- Solve for a missing dimension given area/volume and other dimensions.
- Scale factor problems: how area/volume changes when linear dimensions scale.

### Lines, angles, and triangles
- Use angle relationships (parallel lines cut by a transversal, triangle angle sum, exterior angle) to find a missing angle.
- Use triangle similarity or congruence to find a missing side or angle.
- Apply the triangle inequality or side-angle relationships.

### Right triangles and trigonometry
- Use SOH-CAH-TOA to find a missing side or angle in a right triangle.
- Use the Pythagorean theorem.
- Use complementary-angle trig relationships (sin θ = cos(90° − θ)).
- Solve a real-world right-triangle (angle of elevation/depression) problem.

### Circles
- Use the circle equation `(x−h)² + (y−k)² = r²` to find center/radius, or write the equation from a graph/description.
- Find arc length or sector area from a central angle.
- Use inscribed angle / central angle relationships.
- Find the equation of a circle given endpoints of a diameter or a tangent condition.

---

## Change log

Record here whenever this file is revised from newly parsed bank questions, e.g.:

- 2026-09-07: Initial seed from general SAT knowledge, no bank data yet.
- 2026-09-07: Parsed 50 Advanced Math questions (mixed Nonlinear functions / Nonlinear equations in one variable and systems of equations in two variables / Equivalent expressions — export wasn't filtered to a single skill) into bank.json. Added the question types actually observed under each of the three Advanced Math skills above.
- 2026-09-07: Parsed 15 more questions (Algebra domain, all Hard difficulty, mixed across Linear equations in one variable / Linear functions / Linear equations in two variables) into bank.json. Bank is now 65 questions total. Added the question types actually observed under each of these three Algebra skills.
