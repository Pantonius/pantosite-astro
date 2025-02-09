---
title: Engagement Wegweiser
pubDate: 2024-12-26T22:00:00Z
description: Engagement Wegweiser is a tool developed by me for the Student Representation of the University of Konstanz to help students find committees and university groups that best suit their particular interests.
heroImage: /images/posts/engagement-wegweiser/homepage.png
---
The [Engagement Wegweiser](https://engagement.stuve-uni-kn.de) was originally a tool for students to find committees and university groups that best suit their particular interests. Since then it has become a centrepiece of the Student Representation's campaign to encourage more involvement from the student body at the University of Konstanz.

Moreover, it was the first IT project that the Student Representation took on to aid the everyday life of students at its university.

## Current State
In the beginning there was the [student council website](/projects/fachschaft-website) and I saw that it was good -- so I copied it, threw any unnecessary code out and started work on the actual tool. I changed the header to be more in line with the design of the [University Website](https://www.uni-konstanz.de)

Currently the user simply clicks through a predefined question hierarchy until a list of relevant committees and university groups is presented.

You can imagine this hierarchy as a simple tree, where each internal node is a question and each leaf is a list of committees and groups:

```
Root
├── Art
│   ├── Music
│   ├── Theatre
│   ├── Literature & Journalism
│   └── Other
├── Social
│   ├── General
│   │   ├── Education
│   │   ├── Helping & Meeting
│   │   ├── Mental Health
│   │   └── LGBTQIA+
│   ├── Committees
│   │   ├── Student
│   │   └── University
│   │       ├── General
│   │       └── Specialized
│   └── Groups
│       ├── International & Politics
│       ├── Law
│       ├── Science & Economy
│       └── Sports
├── Religion
└── Nature & Sustainability
```

Each leaf holds a list of committees or groups that I will not list here.

### The Application
Behind the scenes extensive information about each committee / group is held in a CSV file, including but not limited to their website, social media accounts, email adress and ofcourse a short description. Thus every committee and group has their own little information page in the tool, though it might not be linked anywhere, as can be seen with the computer science student council:
- if you navigate to [Start > Soziales & Politik > Ja, Studi-Themen! > studentische Selbstverwaltung > Fach](https://engagement.stuve-uni-kn.de/app?path=Root,Social,Gremien,GremienStud&answer=0) and click on "Fachschaft Informatik", you'll end up on the [student council website](https://fachschaft.inf.uni-konstanz.de)
- if you instead simply use the path [/hsg/FSInformatik](https://engagement.stuve-uni-kn.de/hsg/FSInformatik), you'll end up on the special information page as generated from the extensive information that has been stored in the tool.

### Editors
At a later stage I additionally created an editor for the underlying structure of the question hierarchy as well as a form to create, edit and delete committees / groups from the tool.

#### Structure Editor
![Editor for the question hierarchy](/images/posts/engagement-wegweiser/editor-structure.png)

#### Group / Committee Editor
![Editor for the committees and groups](/images/posts/engagement-wegweiser/editor-hsg.png)

## To the Stars
I am currently working on a new version of the Engagement Wegweiser with [Astro](https://astro.build/) as its backbone and Vue for any interactive islands. The hope is to make the tool more robust, reduce loading times and improve the documentation of the tool. 

Additionally we have decided to update the core mechanic with which committees and groups are recommended to the user: Instead of navigating through the afore mentioned question hierarchy down to a list of handpicked recommendations, the system will pivot to a questionaire with a number of category scores associated with every answer. Possible categories could be:
- How much `responsibility` is the user ready to carry
- How comfortable is the user to be in the `spotlight`
- Is the user more interested to engage within their own `domain`, meaning their course of study, or on a university wide level
- How interested is the user in `paperwork` meaning their readiness to read through statutes and regulations of various committees at the university
- How interested is the user to be part of a `creative` process meaning their readiness to create posters, flyers, social-media posts or maintain a website and create tools
- How important is the `social impact` of their work to the user

The details of the system still have to be thought out and discussed, but I imagine it will be fairly close to the principle of the [Frag Wahltraut](/projects/frag-wahltraut) system, which in turn basically works the same as the [Wahl-O-Mat](https://www.bpb.de/themen/wahl-o-mat/) that the [Federal Agency for Civic Education](https://www.bpb.de/die-bpb/ueber-uns/federal-agency-for-civic-education/) hosts for national and state elections as well as the elections for the european parliament.

A catalogue of questions will be assembled and given to student representatives of university committees and university groups such that they can give their personal scores. All the Engagement Wegweiser will then do is: compute the similarity between the users answers with the committees and groups to give a sorted listed of all areas of student participation within the university.
