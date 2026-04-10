---
title: A1 - CEK Machine
pubDate: 2025-09-10T10:00:00Z
description: Introduction to the CEK machine by Felleisen et al. and its extensions by D. Van Horn and M. Might.
part: 50
---

The syntax of the CEK (**C**ontrol **E**nvironment **K**ontinuation) machine.

$$
\begin{align*}
e & \in & Exp & ::= & x^l \mid (e_0 e_1)^l \mid (\lambda x. e)^l \\
x & \in & Var & & \text{a set of identifiers}
\end{align*}
$$
