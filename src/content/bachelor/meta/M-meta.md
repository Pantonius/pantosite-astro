---
title: M - Experiences and Additional Thoughts
pubDate: 2025-09-10T10:00:00Z
description: An informal peek behind the curtain for the reader; A place for the author to let loose.
part: 100
---
The following sections are meant as an informal peek behind the curtain and a place for me to let loose on my experience and additional thoughts on the synthesis of my bachelor thesis.

# Preface
The product of my work, meaning the actual collection of paper that is called my bachelor thesis, is probably a bigger disappointment to me than it should be; We'll get to why in [the following section](#ambitions-and-the-quickest-path-to-failure).

No matter the disappointment I feel towards the actual thesis, I am content with the state of the tool implementation at the end of the process. Each day started with an exilerating breakthrough of the current blocker and ended with an equally damning crash into the next blocker. A night's sleep would always lead to the next breakthrough and next block. The result is a _correct_, though small scale, proof of concept that we can be quite satisfied with.

The aftermath of the last month or so may yield some additional insights, improvements and a sturdier colloquium than the actual thesis may have provided.

# Ambitions and the Quickest Path to Failure
A learning from working on my bachelor thesis concerns ambitions and time constraints. The actual thesis takes approximately three months, from registration to handing in. 

# Core Erlang Documentation
Truthfully, finding good documentation for Erlang and its intermediary language Core Erlang has been tough. The best place for a formal definition of Core Erlang syntax and semantics has been the source code of the Erlang/OTP compiler[^erlc]. The key insight here is that Core Erlang isn't really meant to be used outside of the OTP compilation pipeline; There isn't much of an incentive to pin it down. Unfortunately, this also means that [soter-v2](https://github.com/damaruCode/soter-v2) is somewhat thrown into the whims of any changes to the erlang compiler. A fact that can already be seen by the desugaring of the `receive` keyword down to four atomic keywords since OTP 25[^receive-lowering] leading to our choice of pinning the version to OTP 24 for soter-v2.


[^aam]: <!-- TODO -->
[^erlc]: https://github.com/erlang/otp/tree/master/lib/compiler/src, visited 10th September 2025
[^receive-lowering]: https://github.com/erlang/otp/commit/82645f41a29b9af18cddac0b338dd2c856eb09a1, visited 14th August 2025
