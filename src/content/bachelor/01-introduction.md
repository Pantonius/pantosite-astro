---
title: 01 - Introduction
pubDate: 2025-09-10T10:00:00Z
description: An Odyssey of analysing (Core) Erlang programs via an abstract interpretation framework. Heavily based on previous work by Emanuele D'Osualdo
part: 1
---
Erlang is a functional programing language with message-passing concurrency. It is widely used in the communication industry for massively scalable, distributed and fault-tolerant systems. WhatsApp uses Erlang for its backend.[^whatsapp-erl] Others, like Discord went with an alternative programming language, Elixir, that compiles to the erlang virtual machine (BEAM).[^discord-erl]

Core Erlang is an intermediary language produced during compilation to BEAM[^the-beam-book].

[^whatsapp-erl]: https://www.erlang-solutions.com/blog/20-years-of-open-source-erlang-openerlang-interview-with-anton-lavrik-from-whatsapp/, visited 9th September 2025
[^discord-erl]: https://discord.com/blog/how-discord-scaled-elixir-to-5-000-000-concurrent-users, visited 9th September 2025
[^the-beam-book]: I recommend reading [The BEAM Book by Erik Stenman](https://blog.stenmans.org/theBeamBook). To my knowledge, it is the most complete work on the topic, that I was able to find; Except for the [source code](https://github.com/erlang/otp) itself, that is.
