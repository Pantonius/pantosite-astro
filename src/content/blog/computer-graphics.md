---
title: Computer Graphics - An Overview
pubDate: 2025-02-06T19:00:00Z
description: A brief overview of Computer Graphics
---

# Basics
Before we dive into the details of computer graphics, let us talk about some basic concepts all around light.

## Plenoptic Function
The plenoptic function describes all light rays at all points in space at any point in time.

![Plenoptic Function](/images/posts/computer-graphics/plenoptic_function.svg)

It operates in a 6-dimensional space consisting of
- Position: $V_x, V_y, V_z$
- Direction: $\Phi, \Theta$
- Time: $t$

In photography and film the time is fixed at each frame and the position is either fixed or follows from the time. Computer graphics often simulates that.

So the problem is reduced to a 2-dimensional space consisting simply of the directions $\Theta$ and $\Phi$.

## Global Illumination
$$
L(x, \omega) = L_e(x, \omega) + \int_\Omega f_r(x, \omega', \omega) L(x', \omega') cos(\omega', n) d\omega'
$$

- $L(x, \omega)$
: describes the light from an object $x$ in direction $\omega$
- $L_e(x, \omega)$
: light emission if x is a light source
- $f_r(x, \omega', \omega)$
: reflection function given an object $x$ and an incoming angle $\omega'$ and outgoing angle $\omega$.
- $cos(\omega', n)$ weakening factor; the greater the distance between the incident angle $\omega'$ away from the surface normal $n$, the greater the area that is lit and the weaker the light at a particular point

# Graphics Pipeline

# Geometry
We build geometry out of two distinct constructs: **points** and **vectors**.

![Points and Vectors](/images/posts/computer-graphics/points_vectors.svg)

**Points** are coordinates with respect to a coordinate origin  
**Vectors** are movement statements from a point P to a point Q

## Vector Space $\mathbb{R}^n$
Contains **scalars** and **vectors** with...

### Vector Addition
$$
\begin{bmatrix}
  v_1 \\
  v_2 \\
  \vdots \\
  v_n
\end{bmatrix}
+
\begin{bmatrix}
  w_1 \\
  w_2 \\
  \vdots \\
  w_n
\end{bmatrix}
=
\begin{bmatrix}
  v_1 + w_1 \\
  v_2 + w_2 \\
  \vdots \\
  v_n + w_n 
\end{bmatrix}
$$

### Scalar Multiplication
$$
a \cdot \begin{bmatrix}
  v_1 \\
  v_2 \\
  \vdots \\
  v_n
\end{bmatrix}
=
\begin{bmatrix}
  a \cdot v_1 \\
  a \cdot v_2 \\
  \vdots \\
  a \cdot v_n
\end{bmatrix}
$$
<br/>
<br/>
We encounter the following problems:
- there are **no coordinates**
- there are **no distances** or the like

## Affine Space $A^n$
Contains **scalars**, **vectors** and **points**.

For each pair of points $(P, Q)$ with $P, Q \in A^n$ there is a vector $v \in V^n$ such that $v$ points from $P$ to $Q$.

Elements of $A^n$ are **points**.

$0$ is the coordinate origin and $v = (OP)$ is the location vector for $P \in A^n$.

**Problem:** We still have no concept of lengths.
