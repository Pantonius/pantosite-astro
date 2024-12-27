---
title: Frag Wahltraut
pubDate: 2024-12-26T22:00:00Z
description: Frag Wahltraut
heroImage: /images/posts/frag-wahltraut/homepage.png
---

Towards the end of the summer semester two elections take place at the University of Kosntanz; One for university committees and another for student committees. Historically the voter turnout has been low, mostly because as a student, you rarely get to know much about what is decided in the committees and how those decisions may or may not affect your own studies -- that's a problem to be tackled by the university, the student representation and, perhaps best, the student councils.

However, another factor is, that most students don't know the people and parties running for various committees and the student parlament.

In national and state elections as well as the election for the european parliament the [Federal Agency for Civic Education](https://www.bpb.de/die-bpb/ueber-uns/federal-agency-for-civic-education/) here in germany prepares and hosts a tool called the [Wahl-O-Mat](https://www.wahl-o-mat.de), which presents somewhere around 35 political theses that a user can answer with "agree", "neutral" and "don't agree" or skip to get an overview of political parties that might best represent the users own political views. The Student Representation of the University of Konstanz decided to develop and host their very own version of that Wahl-O-Mat called [Frag Wahltraut](https://wahl.stuve-uni-kn.de).

## Copy Paste
It seems to be a central theme with my websites that they are all descendants of one another. In this case Frag Wahltraut already kindof existed eight months before it got that name. It was the very first proof of concept for the [Engagement Wegweiser](https://engagement.stuve-uni-kn.de) -- and it shows.

![Engagement Wegweiser](/images/posts/engagement-wegweiser/homepage.png)

## Core Mechanic
However, the core mechanic (currently) differs. There are three stages to the tool:

- [1. Theses](#1-theses)
- [2. Weighting](#2-weighting)
- [3. Result](#3-result)

Which roughly corresponds to the original [Wahl-O-Mat](https://www.wahl-o-mat.de) as described in the article ["Wie funktioniert der Wahl-O-Mat?"](https://www.bpb.de/themen/wahl-o-mat/294576/wie-funktioniert-der-wahl-o-mat/) by the [Federal Agency for Civic Education](https://www.bpb.de/die-bpb/ueber-uns/federal-agency-for-civic-education/). The [computational model](https://www.bpb.de/system/files/dokument_pdf/Rechenmodell_des_Wahl-O-Mat.pdf) can easily found in said article.

### 1. Theses
In this first stage the user simply answers the theses presented by the tool with `agree`, `neutral` or `don't agree` or skips the thesis, which will take it out of the overall scoring entirely.

![Theses page of Frag Wahltraut](/images/posts/frag-wahltraut/theses.png)

- `Agree` corresponds to `0`
- `Neutral` corresponds to `1`
- `Don't Agree` corresponds to `2`

### 2. Weighting
In the second stage the user can take a look at the decisions taken and give any number of them double the weight in the computation of the overall result.

![Weighting page of Frag Wahltraut](/images/posts/frag-wahltraut/weighting.png)

They may also navigate back to a particular question and change their answer.

### 3. Result
In the final stage the result is presented to the user.

![Result page of Frag Wahltraut](/images/posts/frag-wahltraut/result.png)

Clicking on the parties reveals their stances on the theses as well as a short(-ish) explaination of their view.

![Result page of Frag Wahltraut with more information to the stances of a party](/images/posts/frag-wahltraut/result-accordion.png)

## To the Stars
As described in my article about the [Engagement Wegweiser](/projects/engagement-wegweiser) I am currently working on a revamp of the tools that are provided by the Student Representation of the University Konstanz. Once the new version of the Engagement Wegweiser is done, Frag Wahltraut will once again become a descendant of that newer version. Thankfully, at its core, the future Engagement Wegweiser will function as a generalized version of Frag Wahltraut, making it extremely easy to reuse the system for the coming elections in 2025.