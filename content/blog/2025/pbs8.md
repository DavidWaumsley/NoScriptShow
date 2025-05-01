---
title:  'intrinsic page bilder?'
description: What is a CMS and should clients have one.
date: 2025-03-12
tags: ["podcast"]
permalink: "/pbs8{{slugify }}/"

---

 # The intrinsic page builder

A talk in four sections:

 - The changes and new demands on web designers.
 - What is intrinsic web design?
 - What is a page builder?
 - What could an "intrinsic" page builder look like? 

 The focus is on what is coming from the [W3C](https://www.w3.org/)


 ##  What are the changes and new demands?

 2017 may have brought one of the biggest changes since the beginning of the web with [browser interoperability](https://web.dev/blog/interop-2025). 

- Dark and light mode 
- No or reduced motion (animation)
- Forced colour (for high contrast themes)
- Reduced transparency  (experimental)
- Reduced data to save bandwidth (experimental) 

**More pressing is:**


- Having to support over 2k unique [viewport sizes](https://viewports.fyi/all/).
- Having the web on fridges, watches, glasses and kindles.
- Having to support mono-chrome  right up to  P3 colour gamut  this is wider than our graphic programs support. 
- Smart Speakers where this is no screen at all.
- And that our sites need to be faster, greener, accessible and international.


<img src="/img/CSSAwesome.webp"  loading="lazy" width="1476" height="1500" alt="">

## What is intrinsic web design?

Jen Simmons coined the term in 2018 in a talk called ["Everything You Know About Web Design Just Changed"](https://www.youtube.com/watch?v=jBwBACbRuGY). 


<img src="/img/image.png"  loading="lazy" width="1600" height="900" alt="">

**Resources**

- [The first ever website](https://info.cern.ch/).
- [CSS Experiments - Jen Simmons](https://labs.jensimmons.com/).
- [Andy Bell – Be the browser’s mentor, not its micromanager](https://www.youtube.com/watch?v=5uhIiI9Ld5M)
- [ Matthias Ott - Web Design Engineering With the New CSS](https://www.youtube.com/watch?v=su6WA0kUUJE)


## What is a page builder?

There is no one answer, but typically they are seen as visual tools that help people build web pages with no code knowledge. 

### WYSIWYGs

Håkon Wium Lie (the creator of CSS) says ["the WYSIWYG model doesn't really work and shouldn't work".](https://www.youtube.com/watch?v=PQTpsxf7rQQ&t=2606s) 

There’s too many devices to view them all simultaneously. The W3C tries to make CSS as easy and logical as possible, but it needs to be taught right.

**If we agree, page builders need to be tools that help people understand and work with code rather than avoid it.**

### AI

Presently vibe coding is being heavily hyped. You just prompt what you want and you get it. But...

- LLMs are trained on old and bad ways of doing things.
- We need understand the code to prompt and judge its returns
- AI can be restricted to libraries such as React with Tailwind CSS, but can create more compexity.
- HTML and CSS are declarative languages. Almost every line written is a creative judgement.

### A way to escape CSS?

- Many traditional programmers hate CSS because it does not give them the control they expect
- Others (me) have learned to hate it because it was taught as hacks and tricks to make it like print. 
- It is becoming a complex programming language replacing JavaScript, but the design basics have got much easier.
- With CSS becoming more programmable we can do more with generators and recipes.


### The professional builders

These seem popular now probably because there are so many visual designers who started with a WYSIWYG only to find they need to learn CSS. But learning CSS through a UI seems to 

- add an extra layer of complexity (new icons and builder specific names to learn).
- creates and ever changing working environment.  

Some builders ecosystems recommend CSS frameworks or promote certain methodologies like BEM but they can distract from learning CSS basic and make thing harder in the long run.



**Resources**

- [Alex Russell - The Reckoning ]( https://infrequently.org/series/reckoning/)
- [Jeremy Keith - Declarative Design](https://www.youtube.com/watch?v=pzRsvoyQGsg)
- [Rachel Andrew - Refactoring (the way we talk about) CSS](https://noti.st/rachelandrew/wuKH4y)

 ##  What might an intrisic page builder look like?

So far on the noscript show we made a few simple demo sites ( [Vets](https://vets.here24.co/), [Bistro](https://bisto.here24.co/) and [Hairdresser](https://bento.here24.co/)) with no builder.

It's been a good way to catch up on modern CSS, but it has shown me what I do

 - there is no cost for hosting 