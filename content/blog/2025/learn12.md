---
title: Building an accessible accordion with HTML and CSS
description: Building an accessible accordion with HTML and CSS. 
date: 2025-06-11
tags: ["learn"]
permalink: "/learn/12{{slugify }}/"
videoid: 
draft: true
---
 **Show Notes:**

## Accordions with JS

Stolen from Sara Soueidan’s excellent [Practical Accessibility](https://practical-accessibility.today/) course:

-  Typical approach using [HTML buttons](https://codepen.io/SaraSoueidan/pen/yyLQmQZ/26d304b2094c87136a61a0b7cf12de18) (no good is JS fails to load).
- Accordion with ["interactive headings"](https://codepen.io/SaraSoueidan/pen/raNoXWr/b84fe6faa8823d00347532f428677044) (progressive enhancement).
- In-page search issues may be solved with the new hidden=until-found attribute.


## [Disclosure widget](https://intrinsicframework.here24.co/disclosure-widget/)

- With details the browser has a built-in shadow DOM component.
- details-content has browser styles set to content-visibility: hidden which changes to block.
- Styling the marker is [limited](https://css-tricks.com/using-styling-the-details-element/#aa-style-the-marker).

## [Exclusive CSS accordion](https://intrinsicframework.here24.co/css-exclusive-accordion/)

- We can use 'open" to keep any panel open.`<details open>` 
- With a matching name attribute we get an exclusive accordion. `<details name="anyname">`
- We can fix the height and allow scroll (Adrian Roselli’s [example](https://codepen.io/aardrian/pen/gOqdaXQ)).
- In our example I have borrowed the mock icon from [web.dev.](https://web.dev/learn/html/details/#toggling_the_summary_marker). 