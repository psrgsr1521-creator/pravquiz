// Tagged template literal function - returns the raw string as-is
function r(strings, ...values) {
    let result = '';
    strings.forEach((str, i) => {
        result += str;
        if (i < values.length) result += values[i];
    });
    return result;
}

// Prefix for questions with missing definitions
const M = "[Note: Full question definition not available in source] ";

const quizData = [
    // ---------- Week 1 ----------
    { question: r`Let $f : \mathbb{Q} \times \mathbb{Q} \to \mathbb{R}$ be defined by $f(p, q) = p + q\sqrt{7}$. Choose the correct answer.`, options: ["f is onto", "f is one-one", "f is neither one-one nor onto", "f is not well-defined."], correct: 1 },
    { question: r`The set $A = \{a + b\sqrt{3} : a, b \in \mathbb{Q}\}$ is`, options: ["finite", "countable", "uncountable", "none of these."], correct: 1 },
    { question: r`Consider the metric space $(\mathbb{R}, d)$ where $d$ denotes the discrete metric and $S = \{\frac{1}{m} + \frac{1}{2} : m \in \mathbb{N}\}$. Which of the following is true`, options: ["0 is a limit point of S", "1/2 is a limit point of S", "all points of S are isolated points", "none of these."], correct: 2 },
    { question: r`Define $x \sim y \iff x - y$ is a multiple of $\sqrt{2}$. For $x, y \in \mathbb{R}$, this relation is:`, options: ["Reflexive but not Symmetric", "Transitive but not reflexive", "An Equivalence Relation", "Anti-symmetric."], correct: 2 },
    { question: r`Which of the following defines a metric on $\mathbb{R}$?`, options: [r`$d(x, y) = |x - y| + 1$`, r`$d(x, y) = \frac{|x - y|}{1 + |x - y|}$`, r`$d(x, y) = |x + y|$`, r`$d(x, y) = 0$ for all $x, y$.`], correct: 1 },
    { question: "If A, B are open subsets of a metric space, then", options: [r`$A \cap B$ is always closed`, r`$A \cup B$ is always open`, r`$A \setminus B$ is always open`, r`$A \cap B$ is always finite.`], correct: 1 },
    { question: r`Consider the discrete metric on $\mathbb{R}$. Which statement is true?`, options: ["Every singleton is open", "Every infinite set has a limit point", "The set (0, 1) has boundary points", r`The only open sets are $\emptyset$ and $\mathbb{R}$.`], correct: 0 },
    { question: r`Let $A \subset X$ in a metric space. Which statement is always true?`, options: ["Every interior point is a limit point", "Every isolated point is an interior point", "Every boundary point is a limit point of A", "Every finite set is open."], correct: 2 },
    { question: r`Let S be an open set of real numbers and $s \in S$. Then the set $S \setminus \{s\}$ is`, options: ["open set", "closed set", "always a finite set", "neither open nor closed"], correct: 0 },
    { question: "Which of the following is dense in the interval (0, 1)?", options: [r`$\{\frac{1}{n} : n \in \mathbb{N}\}$`, r`$\{0.5\}$`, r`$\mathbb{Z}$`, r`$(0, 1) \cap \mathbb{Q}$.`], correct: 3 },

    // ---------- Week 2 ----------
    { question: r`Consider the set $A = \{n^{1/4} - [n^{1/4}] : n \in \mathbb{N}\}$. Which of the following is true?`, options: ["A is not bounded above", "A is not bounded below", "A is a bounded set", "A is not a bounded set"], correct: 2 },
    { question: r`Let $\{S_\lambda\}$ be a collection of compact sets of a metric space such that the intersection of every finite sub-collection of $\{S_\lambda\}$ is non-empty. Then $\cap_\lambda S_\lambda$ is`, options: ["always empty", "always non-empty", r`may be empty or non-empty depending on the sets $S_\lambda$`, "None of these"], correct: 1 },
    { question: r`The collection of sets $F_n = \{x \in \mathbb{R} : -\frac{1}{n} < x < 1 + \frac{1}{n}\}$, $n \in \mathbb{N}$. Then this collection`, options: ["forms an open cover of [0, 1]", "forms an open cover of [0, 2]", "does not form an open cover of [0, 1]", "none of these"], correct: 0 },
    { question: r`Let $A = \{\frac{2n+1}{n+2} : n \in \mathbb{N}\}$. Which of the following is true?`, options: ["A is bounded above but not bounded below", "A is bounded below but not bounded above", "A is both bounded above and bounded below", "A is neither bounded above nor bounded below"], correct: 2 },
    { question: r`Let A be a non-empty bounded subset of $\mathbb{R}$. Define $-A = \{-x : x \in A\}$. Which of the following is always true?`, options: [r`$\sup(-A) = -\sup A$`, r`$\sup(-A) = -\inf A$`, r`$\inf(-A) = \inf A$`, r`$\sup(-A) = \sup A$`], correct: 1 },
    { question: r`Let $A \subseteq \mathbb{R}$. Which of the following is equivalent to saying that A is dense in $\mathbb{R}$?`, options: ["Every non-empty open interval contains a point of A", "A is countable", "A is closed", "Every point of A is isolated"], correct: 0 },
    { question: "Which of the following statements is true?", options: ["Every perfect set is open", "Every perfect set is closed and has no isolated points", "Every closed set is perfect", "Every open set is perfect"], correct: 1 },
    { question: r`For each $n \in \mathbb{N}$, let $F_n = [-1 + \frac{1}{n}, 2]$. Then $\bigcup_{n=1}^\infty F_n$ is`, options: ["[-1, 2]", "(-1, 2)", "{2}", "(-1, 2]"], correct: 3 },
    { question: r`Let $A = (0, 1] \cup \{2\} \subset \mathbb{R}$. Then A is`, options: ["open", "closed", "neither open nor closed", "perfect"], correct: 2 },
    { question: r`Which of the following subsets of $\mathbb{R}$ is connected but not compact?`, options: ["[0, 1]", "(0, 1)", r`$[0, 1] \cup [2, 3]$`, "{0, 1}"], correct: 1 },

    // ---------- Week 3 ----------
    { question: r`The sequence $\{a_n\}$ where $a_n = \sin n\pi$ is a`, options: ["unbounded sequence", "divergent sequence", "constant sequence", "None of these"], correct: 2 },
    { question: r`Define a convergent sequence by $x_1 = 1$ and $x_{n+1} = \frac{1}{1+x_n}$ for all $n \ge 1$. The limit of the sequence $\{x_n\}$ as $n \to \infty$ is:`, options: ["1", "0", r`$\frac{\sqrt{5}-1}{2}$`, r`$\frac{1+\sqrt{5}}{2}$`], correct: 2 },
    { question: r`Let the sequence $\{a_n\}$ be defined by $a_n = \frac{1}{n}$ if n is odd, and $a_n = 1 + \frac{1}{n}$ if n is even. Which of the following is true?`, options: [r`$\{a_n\}$ has one limit point`, r`$\{a_n\}$ has more than one limit point`, r`$\{a_n\}$ has no limit point`, r`$\{a_n\}$ is convergent`], correct: 1 },
    { question: "The Cantor set is", options: ["countable and closed", "uncountable and closed", "uncountable and open", "countable and open"], correct: 1 },
    { question: r`The sequence $\{\frac{n}{n+1}\}$ is`, options: ["monotonically increasing and bounded above", "monotonically decreasing and bounded below", "oscillatory", "unbounded"], correct: 0 },
    { question: r`Consider the sequence $\{a_n\}$ defined by $a_n = (-1)^n + \frac{1}{n}$. Which of the following is true?`, options: [r`$\{a_n\}$ is a convergent sequence`, r`$\{a_n\}$ has exactly two limit points`, r`$\{a_n\}$ is monotonically increasing`, r`$\{a_n\}$ has no limit point`], correct: 1 },
    { question: r`Which of the following is always compact in $\mathbb{R}$?`, options: ["The intersection of two compact sets", "The union of infinitely many compact sets", "Every bounded set", "Every closed set"], correct: 0 },
    { question: "Which of the following is true?", options: [r`Every open cover of a compact subset of $\mathbb{R}$ has a finite subcover`, "Every open cover of (0, 1) has no finite subcover", "Every open interval is compact", r`Every bounded subset of $\mathbb{R}$ is compact`], correct: 0 },
    { question: "Choose the correct answer.", options: ["Every infinite set of real numbers has a limit point", "Disjoint sets are separated", "Every infinite subset of a closed set has a limit point", "Separated sets are disjoint"], correct: 3 },
    { question: r`Let K be a compact subset of $\mathbb{R}$. Which of the following is true?`, options: ["Every sequence in K has a subsequence converging to a point of K", "Every sequence in K is monotone", "K is an open set", "K is a countable set"], correct: 0 },

    // ---------- Week 4 ----------
    { question: r`Consider the following statements and choose the correct option. 1: If a positive sequence $a_n$ converges to $a$ then $\lim \sqrt[n]{a_1 a_2 \cdots a_n} = a$. 2: If a positive sequence $a_n$ satisfies $\lim \frac{a_{n+1}}{a_n} = a$ then $\lim \sqrt[n]{a_1 a_2 \cdots a_n} = a$. 3: If a positive sequence $a_n$ satisfies $\lim \frac{a_{n+1}}{a_n} = a$ then $\lim \sqrt[n]{a_n} = a$.`, options: ["all the statements are true", "statement 1 and statement 2 are true but statement 3 is false", "statement 2 and statement 3 are true but statement 1 is false", "statement 1 and statement 3 are true but statement 2 is false."], correct: 3 },
    { question: r`A sequence $\{x_n\}$ diverges to $+\infty$ if for every $M > 0$, there exists $N$ such that for all $n \geq N$:`, options: [r`$|x_n| < M$`, r`$x_n > M$`, r`$x_n < -M$`, r`$x_n = M$`], correct: 1 },
    { question: "Which of the following statements is true?", options: ["Every monotone sequence is bounded", "Every bounded sequence is monotone", "Every bounded sequence has a convergent subsequence", "Every convergent sequence is increasing."], correct: 2 },
    { question: r`The sequence $a_n = \left(1 - \frac{1}{n}\right)^n$ is`, options: ["monotonically increasing and bounded above", "monotonically decreasing and bounded below", "oscillatory", "unbounded."], correct: 0 },
    { question: r`The value of $\lim_{n \to \infty} \frac{3n + \sin n}{3n + \cos n}$ is`, options: ["0", "1", "3", "does not exist."], correct: 1 },
    { question: r`The value of $\lim_{n \to \infty} \left(\sqrt{n^2 + 3n} - n\right)$ is`, options: ["0", r`$\frac{3}{2}$`, "3", "does not exist."], correct: 1 },
    { question: r`The sequence $a_n = \int_{0}^{1} x^n (1 - x)\,dx$ is`, options: ["divergent", "oscillatory", "convergent", "unbounded."], correct: 2 },
    { question: r`Let $x_1 = 4$, $x_{n+1} = \frac{x_n + 2}{2}$, $n \in \mathbb{N}$. Then the sequence $\{x_n\}$ is`, options: ["convergent and converges to 2", "convergent and converges to 1", "divergent", "oscillatory."], correct: 0 },
    { question: r`The value of $\lim_{n \to \infty} \left(\frac{n!}{(n+1)!}\right)^{1/n}$ is`, options: ["1/e", "1", "e", r`$\infty$.`], correct: 1 },
    { question: r`Let $a_n = (-1)^n$ and $b_n = 1 - \frac{1}{n}$. Which of the following is true?`, options: [r`Both $a_n$ and $b_n$ are convergent`, r`$a_n$ is divergent, $b_n$ is convergent and $a_n + b_n$ is divergent`, r`Both $a_n$ and $b_n$ are divergent`, r`$a_n + b_n$ is convergent.`], correct: 1 },

    // ---------- Week 5 ----------
    { question: r`The sequence $\{a_n\}$ defined by $a_n = 1 + \frac{1}{2} + \frac{1}{2^2} + \dots + \frac{1}{2^n}$ is`, options: ["not a Cauchy sequence", "divergent sequence", "oscillatory sequence", "Cauchy sequence"], correct: 3 },
    { question: r`Let $\{a_n\}$ be a bounded sequence satisfying $a_{n+1} \ge a_n - \frac{1}{n^2}$, $n \in \mathbb{N}$. Then`, options: [r`$\{a_n\}$ diverges to $+\infty$`, r`$\{a_n\}$ is convergent`, r`$\{a_n\}$ is oscillatory`, "none of these"], correct: 1 },
    { question: r`Which of the following is a subsequence of $\{\frac{1}{n}\}$?`, options: [r`$\{\frac{1}{n^2}\}$`, r`$\{\frac{1}{n+\frac{1}{2}}\}$`, r`$\{\frac{1}{\sqrt{n}}\}$`, r`$\{\frac{1}{\log(n+2)}\}$`], correct: 0 },
    { question: r`Let $\{u_n\}$ be a sequence such that $\lim u_{2n} = 3$, $\lim u_{2n-1} = 3$. Then`, options: [r`$\{u_n\}$ converges to 3`, r`$\{u_n\}$ is bounded but divergent`, r`$\{u_n\}$ is monotone`, "none of these"], correct: 0 },
    { question: "Which of the following is true?", options: ["Every bounded sequence is Cauchy", "Every monotone sequence is convergent", "Every Cauchy sequence of real numbers is convergent", "All of these"], correct: 2 },
    { question: r`The sequence $a_n = \frac{2n+1}{3n+4}$ is`, options: ["convergent", "divergent", "oscillatory", "unbounded"], correct: 0 },
    { question: r`The series $\sum_{n=1}^{\infty} \frac{1}{n(n+2)}$ is`, options: ["divergent", r`convergent with sum $\frac{1}{2}$`, r`convergent with sum $\frac{3}{4}$`, "convergent with sum 1"], correct: 2 },
    { question: r`Let $s_n = \frac{n}{n+1}$ be the sequence of partial sums of a series $\sum a_n$. Then`, options: [r`$a_n = \frac{1}{n(n+1)}$`, r`$a_n = \frac{1}{(n+1)(n+2)}$`, r`$a_n = \frac{1}{n+1}$`, r`$a_n = \frac{1}{n}$`], correct: 0 },
    { question: r`Let $\sum u_n$ be a series of positive terms. Which of the following conditions is sufficient for the convergence of the series?`, options: [r`$u_n \to 0$`, r`$\{u_n\}$ is decreasing`, r`$\sum u_n$ has bounded partial sums`, r`$\{u_n\}$ is bounded`], correct: 2 },
    { question: r`The sum of the series $\sum_{n=1}^{\infty} \frac{1}{n(n+1)}$ is`, options: [r`$\frac{1}{2}$`, "1", "2", "the series is divergent"], correct: 1 },

    // ---------- Week 6 ----------
    { question: r`The series $\sum_{n \in \mathbb{N}} \frac{n^n}{7^{n^2}}$ is`, options: ["convergent", "divergent", "converges to 0", "none of these"], correct: 0 },
    { question: "Which of the following is false?", options: [r`Let $\sum x_n$ be a conditionally convergent series in $\mathbb{R}$ then $\sum x_n$ is convergent`, r`Let $\sum x_n$ be an absolutely convergent series in $\mathbb{R}$ and any rearrangement $\sum y_n$ of $\sum x_n$ converges to the same value`, r`Let $\sum x_n$ be an absolutely convergent series in $\mathbb{R}$ and for any $c \in \mathbb{R}$ there is a rearrangement $\sum y_n$ of $\sum x_n$ which converges to $c$`, "none of these"], correct: 2 },
    { question: r`The series $\sum_{n=2}^{\infty} \frac{1}{n \log n}$ is`, options: ["convergent", "divergent", "conditionally convergent", "none of these"], correct: 1 },
    { question: r`The sum of the series $\sum_{n=1}^{\infty} \left(\frac{1}{n} - \frac{1}{n+1}\right)$ is`, options: ["0", "1", "2", "the series diverges"], correct: 1 },
    { question: r`The series $\sum_{n=1}^{\infty} \left(\frac{n}{n+1}\right)^n$ is`, options: ["convergent", "conditionally convergent", "divergent", "absolutely convergent"], correct: 2 },
    { question: r`The series $\sum_{n=1}^{\infty} \frac{\sin(1/n)}{n}$ is`, options: ["convergent", "conditionally convergent", "divergent", "none of these"], correct: 0 },
    { question: r`The series $\sum_{n=2}^{\infty} \frac{1}{n(\log n)^3}$ is`, options: ["convergent", "conditionally convergent", "divergent", "none of these"], correct: 0 },
    { question: r`Let $s_n = \frac{n}{n+1}$ be the sequence of partial sums of a series $\sum a_n$. Then`, options: [r`$a_n = \frac{1}{n(n+1)}$`, r`$a_n = \frac{1}{(n+1)(n+2)}$`, r`$a_n = \frac{1}{n+1}$`, r`$a_n = \frac{1}{n}$`], correct: 0 },
    { question: r`The sum of the series $\sum_{n=1}^{\infty} \frac{1}{2^n}$ is`, options: ["1", "2", r`$\frac{1}{2}$`, "diverges"], correct: 0 },
    { question: r`The series $\sum_{n=1}^{\infty} \frac{(-1)^n}{n^2}$ is`, options: ["conditionally convergent", "absolutely convergent", "divergent", "none of these"], correct: 1 },

    // ---------- Week 7 ----------
    { question: r`$\lim_{x \to 0} (1 + x)^{\frac{1}{x}}$ is equal to`, options: ["0;", "1;", "e;", r`$\infty$.`], correct: 2 },
    { question: "Which of the following limits are correct?", options: [r`$\lim_{n \to \infty} n^{1/n} = 0$`, r`$\lim_{n \to \infty} n^{1/n} = 1$`, r`$\lim_{n \to \infty} n^{1/n} = e$`, r`$\lim_{n \to \infty} n^{1/n} = \infty$`], correct: 1 },
    { question: r`Let $f(x) = [x - 3]$ for $x \in \mathbb{R}$ where [.] denotes the greatest integer function. Then the values of $\lim_{x \to 0+} f(x)$ and $\lim_{x \to 0-} f(x)$ are respectively`, options: ["-2, -4;", "-4, -3;", "-3, -4;", "-2, -3."], correct: 2 },
    { question: r`Evaluate $\lim_{x \to 0} \frac{1}{1 + \pi^{1/x}}$.`, options: ["1;", "0;", r`$\pi$;`, "does not exist."], correct: 3 },
    { question: r`Evaluate $\lim_{x \to 0^+} \left[\frac{\sin x}{x}\right]$ where [.] denotes the greatest integer function.`, options: ["0;", "-1;", "1;", "does not exist."], correct: 0 },
    { question: r`Let $f(x) = x$ for $x \in \mathbb{Q}$, and $f(x) = 2 - x$ for $x \in \mathbb{R} \setminus \mathbb{Q}$. Find $\lim_{x \to 1} f(x)$.`, options: ["1;", "2;", "0;", "does not exist."], correct: 0 },
    { question: r`Let $f(x) = \cot x$, $x \in (0, \pi)$. Then the values of $\lim_{x \to 0^+} f(x)$ and $\lim_{x \to \pi^-} f(x)$ are respectively,`, options: [r`$-\infty, \infty$;`, r`$\infty, -\infty$;`, r`$\infty$, does not exist;`, r`does not exist, $-\infty$.`], correct: 1 },
    { question: r`Find $\lim_{x \to 0} \frac{1}{x} \cos \frac{1}{x}$.`, options: ["0;", r`$\infty$;`, r`$-\infty$;`, "does not exist."], correct: 3 },
    { question: r`For $\alpha \in \mathbb{Q}$, the value $\lim_{n \to \infty} \sin(n!\pi\alpha)$ is equal to`, options: ["1;", "0;", "-1;", "does not exist."], correct: 1 },
    { question: r`The value $\lim_{x \to 0} \frac{\ln(1 + x)}{x}$ is,`, options: ["-1;", "1;", r`$\infty$;`, "does not exist."], correct: 1 },

    // ---------- Week 8 ----------
    { question: r`The value $\lim_{x \to \infty} x(\ln(1 + x) - \ln x)$ is`, options: ["-1;", "1;", "0;", "does not exist."], correct: 1 },
    { question: r`Evaluate $\lim_{x \to \infty} \frac{\sqrt{x^2 + 1} - x}{x}$.`, options: ["0;", "1;", "2;", "-1."], correct: 0 },
    { question: r`The function $f(x) = \csc(x)$ is discontinuous at`, options: [r`$\{n\pi : n \in \mathbb{Z}\}$;`, r`$\{\frac{2}{3}n\pi : n \in \mathbb{Z}\}$;`, r`$\{(2n + 1)\frac{\pi}{2} : n \in \mathbb{Z}\}$;`, "continuous everywhere."], correct: 0 },
    { question: M + r`Let $f : \mathbb{R} \to \mathbb{R}$ be defined by (definition missing). The function f is continuous at`, options: ["all rational points", "all irrational points", "nowhere", "everywhere."], correct: 2 },
    { question: M + r`Let $f : \mathbb{R} \to \mathbb{R}$ be defined by (definition missing). Then the set of discontinuity of f is`, options: [r`$\mathbb{R}$;`, r`$\mathbb{Q}$;`, r`$\mathbb{R} \setminus \mathbb{Q}$;`, r`$\{0\}$.`], correct: 3 },
    { question: M + "The function (definition missing) is", options: ["continuous;", "discontinuous;", "discontinuous only at 0 and continuous elsewhere;", "continuous only at 0 and discontinuous elsewhere."], correct: 0 },
    { question: M + r`Let $f : \mathbb{R} \to \mathbb{R}$ be defined by (definition missing). Then f is continuous at $x = 0$ if $k = $ ?`, options: ["2;", "3;", "5;", "none of these."], correct: 2 },
    { question: M + r`Let $f : [0, 1] \to \mathbb{R}$ be defined by (definition missing). Then the set of discontinuity of f is`, options: [r`$\{0\}$;`, r`$\{0, \frac{1}{2}\}$;`, r`$\{0, \frac{1}{2}, 1\}$;`, r`$\{\frac{1}{2}, 1\}$.`], correct: 2 },
    { question: r`Let $f : \mathbb{R} \to \mathbb{R}$ be defined by $f(x) = x - [x]$. Then the set of discontinuity of f is`, options: [r`$\mathbb{R}$;`, r`$\mathbb{Q}$;`, r`$\mathbb{R} \setminus \mathbb{Q}$;`, r`$\mathbb{Z}$.`], correct: 3 },
    { question: r`$\lim_{x \to 0} \sin x \cos \frac{1}{x}$ is`, options: ["1;", "-1;", "0;", "does not exist."], correct: 2 },

    // ---------- Week 9 ----------
    { question: r`Let $f(x) = x^2 - 4x + 3$, $x \in [0, 5]$. Then the maximum and minimum values of f on [0, 5] are respectively`, options: ["8, -1;", "3, -1;", "8, 0;", "3, 0."], correct: 0 },
    { question: r`Let $f(x) = \frac{x^4 + 2x^2 + 3\sin^2 x}{x^6 + 3x^4 + 3x^2 + 1}$, $x \in \mathbb{R}$. Then f is`, options: ["unbounded;", "bounded above but not bounded below;", "bounded below but not bounded above;", "bounded above and bounded below."], correct: 3 },
    { question: r`The equation $x^5 + 2x^3 + x - 2 = 0$ has`, options: ["more than one positive root;", "exactly one positive root;", "no positive root;", "no real root."], correct: 1 },
    { question: r`The equation $3^x + 4^x + 12^x = 13^x$ has`, options: ["three real roots;", "two real roots;", "one real root;", "no real root."], correct: 2 },
    { question: r`The function $f(x) = \frac{1}{x}$ on (0, 1) is`, options: ["uniformly continuous", "continuous but not uniformly continuous", "not continuous but absolutely continuous", "none of these"], correct: 1 },
    { question: r`The continuous image of a compact set in $\mathbb{R}$ is`, options: ["open", "closed but unbounded", "compact", "None of these"], correct: 2 },
    { question: M + "Consider the function (definition missing). Then", options: [r`f is continuous only at $x = 0$;`, r`f is continuous on $\mathbb{Q}$;`, r`f is continuous on $\mathbb{R} \setminus \mathbb{Q}$;`, r`f is continuous on $\mathbb{R}$;`], correct: 0 },
    { question: M + "The function (definition missing) is", options: ["not uniformly continuous;", "uniformly continuous;", "discontinuous;", "none of these."], correct: 0 },
    { question: M + "The function (definition missing) is", options: ["uniformly continuous;", "not uniformly continuous;", "discontinuous;", "none of these."], correct: 1 },
    { question: "Which of the following statements is true?", options: [r`Every continuous function on $[a, b]$ is absolutely continuous;`, r`Every uniformly continuous function on $[a, b]$ is absolutely continuous;`, r`Every absolutely continuous function on $[a, b]$ is uniformly continuous;`, r`A continuous function on $[a, b]$ need not be uniformly continuous.`], correct: 2 },

    // ---------- Week 10 ----------
    { question: r`Let $f(x) = x^2 + 3x + a$ if $x \le 1$, and $f(x) = bx + 2$ if $x > 1$, be differentiable for every x. Then the values of a and b are`, options: ["2, 10;", "3, 5;", "3, 7;", "2, 7."], correct: 1 },
    { question: r`If f is differentiable at 0 with $f'(0) \neq 0$, then $\lim_{x \to 0} \frac{f(x)e^x - f(0)}{f(x)\cos x - f(0)} =$`, options: [r`$1 + \frac{f(0)}{f'(0)}$;`, r`$1 - \frac{f(0)}{f'(0)}$;`, r`$\frac{f(0)}{f'(0)}$;`, r`$f'(0)$.`], correct: 0 },
    { question: M + r`Let $f : \mathbb{R} \to \mathbb{R}$ be a function such that (condition missing) for all $x, y \in \mathbb{R}$. For which values of $\alpha$ must f be a constant function?`, options: [r`For all $\alpha > 0$;`, r`only if $\alpha = 1$;`, r`for all $\alpha \ge 1$;`, r`for all $\alpha > 1$.`], correct: 3 },
    { question: M + r`Let $f : \mathbb{R} \to \mathbb{R}$ be defined by (definition missing). Choose the correct answer:`, options: [r`f is continuous at $x = 0$ for $p \ge 0$;`, r`f is continuous at $x = 0$ for $p < 0$;`, r`f is differentiable at $x = 0$ for $p > 2$;`, r`f is differentiable at $x = 0$ for $p < 1$.`], correct: 2 },
    { question: r`The function $f(x) = x + \frac{1}{3}x \sin(\ln x^2)$ if $x \neq 0$, $f(0) = 0$, is`, options: [r`$\lim_{x \to 0^-} f(x) \neq \lim_{x \to 0^+} f(x)$;`, r`not continuous at $x = 0$;`, r`continuous but not differentiable at $x = 0$;`, r`differentiable at $x = 0$.`], correct: 2 },
    { question: r`Let $f(x) = x^4 - 4x^3 + 4x^2 + 1$. The number of local maxima and local minima of f is respectively`, options: ["1, 1;", "1, 2;", "2, 1;", "2, 2."], correct: 1 },
    { question: r`Consider $f(x) = \ln x$, $g(x) = x$, for $x \in [1, e]$. If $c \in (1, e)$ is the point guaranteed by Cauchy's Mean Value Theorem, then c is`, options: [r`$\frac{1}{e - 1}$;`, r`$\frac{e - 1}{e}$;`, r`$e - 1$;`, r`$\frac{e}{e - 1}$.`], correct: 2 },
    { question: r`Let $f(x) = x^3 - 3x^2 + 2x$ on the interval [0, 3]. The number of points $c \in (0, 3)$ satisfying the conclusion of Lagrange's Mean Value Theorem is`, options: ["0;", "1;", "2;", "3."], correct: 1 },
    { question: "Which of the following is true?", options: [r`Rolle's theorem is applicable to $f(x) = |x|$ in $[-1, 1]$.`, r`Rolle's theorem is applicable to $f(x) = |x|$ in $[1, 5]$.`, r`Rolle's theorem is applicable to $f(x) = \ln \frac{x^2 + ab}{x(a + b)}$ in $[a, b]$, where $0 \notin [a, b]$.`, r`Rolle's theorem is not applicable to $f(x) = \ln \frac{x^2 + ab}{x(a + b)}$ in $[a, b]$, where $0 \notin [a, b]$.`], correct: 2 },
    { question: r`Let $f : [a, b] \to \mathbb{R}$ be continuous on $[a, b]$ and differentiable on $(a, b)$ with $f(a) = f(b)$. Then there always exists $c \in (a, b)$ such that`, options: [r`$f'(c) = 1$`, r`$f'(c) = 0$`, r`$f(c) = 0$`, r`$f'(c) = f(c)$`], correct: 1 },

    // ---------- Week 11 ----------
    { question: "Choose the correct answer:", options: [r`$\frac{1}{x} \log\left(\frac{e^x - 1}{x}\right) < 0$ for $x > 0$`, r`$\frac{1}{x} \log\left(\frac{e^x - 1}{x}\right) > 1$ for $x > 0$`, r`$\frac{1}{x} \log\left(\frac{e^x - 1}{x}\right) < 1$ for $x > 0$`, r`$\frac{1}{x} \log\left(\frac{e^x - 1}{x}\right) > 2$ for $x > 0$`], correct: 2 },
    { question: r`Evaluate $\lim_{x \to 0} \frac{x - \sin x}{x^3}$`, options: ["0", "1/6", "1/3", "does not exist"], correct: 1 },
    { question: r`The function $f(x) = x \tan^{-1} \frac{1}{x}$ if $x \neq 0$, $f(0) = 0$, is`, options: [r`$\lim_{x \to 0^-} f(x) \neq \lim_{x \to 0^+} f(x)$;`, r`not continuous at $x = 0$;`, r`continuous but not differentiable at $x = 0$;`, r`differentiable at $x = 0$.`], correct: 2 },
    { question: r`Let $f : [-1, 1] \to \mathbb{R}$ be thrice differentiable, $f(-1) = f(0) = f'(0) = 0$ and $f(1) = 1$. Then there always exists a $c \in (-1, 1)$ such that`, options: [r`$f'''(c) \le 0$;`, r`$f'''(c) \ge 3$;`, r`$f'(c) = 0$;`, "none of these."], correct: 1 },
    { question: r`Let $f : \mathbb{R} \to \mathbb{R}$ be a continuous function such that $f\left(r + \frac{1}{n}\right) = f(r)$ for any $r \in \mathbb{Q}$ and natural number n. Then`, options: ["f is strictly increasing;", "f is not continuous;", "f is constant;", "f is not uniformly continuous."], correct: 2 },
    { question: M + "Question 6 (question text missing in source).", options: ["1;", "1/3", "1/5", "1/7"], correct: 1 },
    { question: M + "Question 7 (question text missing in source).", options: ["0", r`$\pi$`, "1/2", "2"], correct: 0 },
    { question: "Which of the following is a partition of [1, 10]?", options: ["{1, 10, 11};", "{2, 7, 10};", "{1, 7, 5, 10};", "{1, 2, 5, 7, 10}."], correct: 3 },
    { question: r`Let $\mathscr{P} = \{3, 5, 6.7, 9, 10.2, 11, 13.1, 15\}$ be a partition of [3, 15]. Then the norm $\|\mathscr{P}\|$ of $\mathscr{P}$ is`, options: ["2", "2.7", "2.3", "3"], correct: 2 },
    { question: M + r`Let $f : [0, 1] \to \mathbb{R}$ be a function defined by (definition missing). Then the values of the lower integral and the upper integral of f on [0, 1] are respectively`, options: ["2, 2;", "1/2, 2;", "2, 1/2", "1/2, 1/2."], correct: 1 },

    // ---------- Week 12 ----------
    { question: r`Let $\mathscr{P}_1 = \{1, 2, 9, 15.2, 20\}$, $\mathscr{P}_2 = \{1, 2, 3, 7, 9, 13, 2, 15.2, 17.7, 20\}$, and $\mathscr{P}_3 = \{1, 2, 9, 13, 14, 15, 19, 20\}$ be three partitions of [1, 20]. Then, which of the following is true?`, options: [r`$\mathscr{P}_1$ is a refinement of $\mathscr{P}_2$, and $\mathscr{P}_2$ is a refinement of $\mathscr{P}_3$;`, r`$\mathscr{P}_2$ is a refinement of $\mathscr{P}_1$, but $\mathscr{P}_3$ is not a refinement of $\mathscr{P}_1$.`, r`$\mathscr{P}_1$ is a refinement of $\mathscr{P}_2$, but $\mathscr{P}_2$ is not a refinement of $\mathscr{P}_3$;`, r`$\mathscr{P}_2$ is not a refinement of $\mathscr{P}_1$, but $\mathscr{P}_3$ is a refinement of $\mathscr{P}_2$.`], correct: 1 },
    { question: r`Let $f : [a, b] \to \mathbb{R}$ be a bounded function and there is a partition P of [a, b] such that $L(P, f) = U(P, f)$ holds. Then`, options: ["f is continuous", "f may not be continuous", "f is not Riemann integrable", "f is not continuous but Riemann integrable"], correct: 0 },
    { question: r`A function $f : [a, b] \to \mathbb{R}$ is Riemann integrable if for every $\epsilon > 0$ there exists a partition $\mathscr{P}$ of [a, b] such that`, options: [r`$U(\mathscr{P}, f) < \epsilon$;`, r`$L(\mathscr{P}, f) < \epsilon$;`, r`$U(\mathscr{P}, f) - L(\mathscr{P}, f) < \epsilon$;`, r`$U(\mathscr{P}, f) + L(\mathscr{P}, f) < \epsilon$.`], correct: 2 },
    { question: r`Let $f : [a, b] \to \mathbb{R}$ be a bounded function and $\mathscr{P}, \mathscr{P}'$ be two partitions of [a, b] such that $\mathscr{P} \subseteq \mathscr{P}'$. Then which of the following is true in general?`, options: [r`$L(\mathscr{P}, f) \le L(\mathscr{P}', f)$;`, r`$U(\mathscr{P}, f) \le U(\mathscr{P}', f)$;`, r`$U(\mathscr{P}, f) \le L(\mathscr{P}', f)$;`, r`$U(\mathscr{P}', f) \le L(\mathscr{P}, f)$;`], correct: 0 },
    { question: r`Let $f, g : [a, b] \to \mathbb{R}$ be two bounded functions and P be any partition of [a, b]. Then`, options: [r`$L(P, f + g) \ge L(P, f) + L(P, g)$;`, r`$U(P, f + g) \ge U(P, f) + U(P, g)$;`, r`$L(P, f + g) \le L(P, f) + L(P, g)$;`, r`$U(P, f + g) = U(P, f) + U(P, g)$.`], correct: 0 },
    { question: M + r`Let $f : [0, 1] \to \mathbb{R}$ be defined by (definition missing).`, options: ["f is not Riemann integrable;", r`$\int_0^1 f(x) dx = 0$;`, r`$\int_0^1 f(x) dx = 1$;`, r`$\int_0^1 f(x) dx = \frac{\pi^2}{6} - 1$.`], correct: 3 },
    { question: r`The function $f : [0, 1] \to \mathbb{R}$ is defined by $f(x) = 1$ if $x \in [0, 1] \cap \mathbb{Q}$, and $-1$ otherwise. Then which of the following is true?`, options: [r`lower integral = upper integral;`, r`lower integral $\ge$ upper integral;`, r`lower integral = 1 and upper integral = -1;`, r`lower integral = -1 and upper integral = 1.`], correct: 3 },
    { question: r`If f is integrable and $f(x) \ge 0$ on [a, b], then $\int_a^b f(x) dx$ is`, options: ["< 0;", r`$\ge 0$;`, r`$\le 0$;`, "= 0."], correct: 1 },
    { question: r`Let $f : [a, b] \to \mathbb{R}$ be a Riemann integrable function and $g : [a, b] \to \mathbb{R}$ be a function such that the set $\{x \in [a, b] : f(x) \neq g(x)\}$ is finite. Then`, options: ["g is Riemann integrable;", "g may not be Riemann integrable;", "g is always continuous;", "none of these."], correct: 0 },
    { question: "A bounded function f is Riemann integrable on [a, b] if and only if", options: ["f is continuous;", "the set of its points of discontinuity has Lebesgue measure greater than zero;", "the set of its points of discontinuity has Lebesgue measure zero;", "f is monotone."], correct: 2 }
];
let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let answerSubmitted = [];
let quizQuestions = [];

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function startQuiz(shuffle = false) {
    const shouldShuffleOptions = document.getElementById('shuffleOptionsCheck') && document.getElementById('shuffleOptionsCheck').checked;

    // Deep clone to prevent modifying the original structure
    quizQuestions = JSON.parse(JSON.stringify(quizData));

    if (shuffle) {
        quizQuestions = shuffleArray(quizQuestions);
    }

    if (shouldShuffleOptions) {
        quizQuestions.forEach(q => {
            const originalCorrectText = q.options[q.correct];
            q.options = shuffleArray(q.options);
            q.correct = q.options.indexOf(originalCorrectText);
        });
    }

    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const question = quizQuestions[currentQuestion];
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('questionNumber').textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
    document.getElementById('score').textContent = `Score: ${score}`;

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;

        if (answerSubmitted[currentQuestion]) {
            optionDiv.classList.add('disabled');
            if (index === question.correct) {
                optionDiv.classList.add('correct');
            } else if (index === userAnswers[currentQuestion]) {
                optionDiv.classList.add('incorrect');
            }
        } else {
            optionDiv.onclick = () => selectOption(index);
            if (userAnswers[currentQuestion] === index) {
                optionDiv.classList.add('selected');
            }
        }

        optionsContainer.appendChild(optionDiv);
    });

    const submitBtn = document.getElementById('submitBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (answerSubmitted[currentQuestion]) {
        showFeedback();
        if (submitBtn) submitBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'block';
    } else {
        hideFeedback();
        if (submitBtn) submitBtn.style.display = 'block';
        // Only hide Next button if you want to force submission before moving forward
        // But user wants to MOVE to another option/question? 
        // Let's keep Next button visible but maybe it warns if not answered? 
        // Actually, "move to another option" implies they can just click around.
        if (nextBtn) nextBtn.style.display = 'block';
    }

    updateProgressBar();
    updateNavigationButtons();
}

function selectOption(index) {
    if (answerSubmitted[currentQuestion]) return;

    userAnswers[currentQuestion] = index;

    // Just highlight, don't submit
    const options = document.querySelectorAll('.option');
    options.forEach((opt, i) => {
        if (i === index) {
            opt.classList.add('selected');
        } else {
            opt.classList.remove('selected');
        }
    });
}

function submitAnswer() {
    if (currentQuestion >= quizQuestions.length) return;
    if (answerSubmitted[currentQuestion]) return;
    if (userAnswers[currentQuestion] === undefined) {
        alert('Please select an option first!');
        return;
    }

    const question = quizQuestions[currentQuestion];
    const selectedIndex = userAnswers[currentQuestion];
    answerSubmitted[currentQuestion] = true;

    const options = document.querySelectorAll('.option');
    options.forEach((opt, i) => {
        opt.classList.remove('selected');
        opt.classList.add('disabled');
        opt.onclick = null;

        if (i === question.correct) {
            opt.classList.add('correct');
        }
        if (i === selectedIndex && selectedIndex !== question.correct) {
            opt.classList.add('incorrect');
        }
    });

    if (selectedIndex === question.correct) {
        score++;
        document.getElementById('score').textContent = `Score: ${score}`;
    }

    document.getElementById('submitBtn').style.display = 'none';
    showFeedback();
}

function showFeedback() {
    const question = quizQuestions[currentQuestion];
    const feedbackContainer = document.getElementById('feedbackContainer');
    const feedbackMessage = document.getElementById('feedbackMessage');
    const showAnswerBtn = document.getElementById('showAnswerBtn');
    const correctAnswerText = document.getElementById('correctAnswerText');

    feedbackContainer.classList.remove('correct-feedback', 'incorrect-feedback');
    feedbackContainer.classList.add('show');

    if (userAnswers[currentQuestion] === question.correct) {
        feedbackContainer.classList.add('correct-feedback');
        feedbackMessage.textContent = '✓ Correct! Well done!';
        showAnswerBtn.style.display = 'none';
        correctAnswerText.classList.remove('show');
    } else {
        feedbackContainer.classList.add('incorrect-feedback');
        feedbackMessage.textContent = '✗ Incorrect!';
        showAnswerBtn.style.display = 'block';
        correctAnswerText.classList.remove('show');
    }
}

function hideFeedback() {
    const feedbackContainer = document.getElementById('feedbackContainer');
    feedbackContainer.classList.remove('show');
}

function showCorrectAnswer() {
    const question = quizQuestions[currentQuestion];
    const correctAnswerText = document.getElementById('correctAnswerText');
    correctAnswerText.textContent = `Correct Answer: ${question.options[question.correct]}`;
    correctAnswerText.classList.add('show');
}

function nextQuestion() {
    if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function updateProgressBar() {
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.style.visibility = currentQuestion === 0 ? 'hidden' : 'visible';
    nextBtn.textContent = currentQuestion === quizQuestions.length - 1 ? 'Finish' : 'Next';
}

function showResults() {
    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === quizQuestions[index].correct) {
            score++;
        }
    });

    const percentage = (score / quizQuestions.length) * 100;
    const incorrect = quizQuestions.length - score;

    document.getElementById('quizScreen').style.display = 'none';
    document.getElementById('resultsScreen').style.display = 'block';
    document.getElementById('finalScore').textContent = score;
    document.getElementById('correctCount').textContent = score;
    document.getElementById('incorrectCount').textContent = incorrect;
    document.getElementById('percentage').textContent = percentage.toFixed(1);

    let message = '';
    if (percentage >= 90) {
        message = '🌟 Excellent! Outstanding performance!';
    } else if (percentage >= 70) {
        message = '👍 Great job! Well done!';
    } else if (percentage >= 50) {
        message = '👌 Good effort! Keep learning!';
    } else {
        message = '📚 Keep practicing! You can do better!';
    }
    document.getElementById('resultsMessage').textContent = message;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    answerSubmitted = [];
    quizQuestions = [];
    document.getElementById('resultsScreen').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
}

function addCredit() {
    const container = document.createElement('div');
    container.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        z-index: 1000;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 6px;
    `;

    const popup = document.createElement('div');
    popup.style.cssText = `
        display: flex;
        flex-direction: row;
        gap: 15px;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        padding: 8px 16px;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s, border-color 0.3s;
    `;

    // SVG icons block
    popup.innerHTML = `
        <a href="https://www.instagram.com/this_side_hp/" target="_blank" style="color: #E1306C; text-decoration: none; display: flex; align-items: center; justify-content: center; font-size: 24px;" title="Instagram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
        <a href="https://www.linkedin.com/in/himanshu-prajapati-728aa0201/" target="_blank" style="color: #0077B5; text-decoration: none; display: flex; align-items: center; justify-content: center; font-size: 24px;" title="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
    `;

    const creditBtn = document.createElement('div');
    creditBtn.innerHTML = 'Made by Himanshu';
    creditBtn.style.cssText = `
        font-size: 18px;         
        font-weight: 500;
        font-style: italic;
        padding: 8px 16px;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        cursor: default;
        transition: background-color 0.3s, border-color 0.3s;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    `;

    container.appendChild(popup);
    container.appendChild(creditBtn);
    document.body.appendChild(container);

    // Style overrides for morning theme text
    const updateThemeStyles = () => {
        if (document.body.classList.contains('theme-morning')) {
            creditBtn.style.color = '#333';
            creditBtn.style.backgroundColor = 'rgba(235, 245, 250, 0.9)';
            creditBtn.style.borderColor = 'rgba(255, 255, 255, 0.5)';
            popup.style.background = 'rgba(235, 245, 250, 0.9)';
            popup.style.borderColor = 'rgba(255, 255, 255, 0.5)';
        } else {
            creditBtn.style.color = '#fff';
            creditBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
            creditBtn.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            popup.style.background = 'rgba(0, 0, 0, 0.3)';
            popup.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        }
    };

    const observer = new MutationObserver(updateThemeStyles);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    // Initial check
    updateThemeStyles();
}

restartQuiz();
addCredit();

function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('theme-toggle');
    body.classList.toggle('theme-morning');

    if (body.classList.contains('theme-morning')) {
        btn.textContent = '🌙';
    } else {
        btn.textContent = '🌞';
    }
}