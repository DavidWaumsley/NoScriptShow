---
title: Easy responsive or fluid typography
description: Looking at the Utopia online calculator which makes it easy to get fluid typography. 
date: 2024-01-30
tags: ["learn"]
permalink: "/learn/2{{slugify }}/"
videoid: jweWInlUTgQ
---
TRANSCRIPT
----------

### The reason for this video

This is an extra to the main no script chat.

As part of the chat we are live designing and developing the show's website. This is so as the show progresses we can highlight the huge number of significant advances that have been coming to the web platform recently (mostly HTML and CSS).

Ahead of our episode on typography (where there will be too much to cover) I thought it might be helpful to do a quick walkthrough of the responsive typography that's already been set up.

As with much of the chat we are presently learning how to move to the more flexible intrinsic web design approach.

I hated having to set font sizes for different devices with media queries. It got ever more time consuming and ineffective as the range of devices available grew.

Adding more breakpoints as most page builders did only made site's harder to change, bloated and still unable to serve users of the future.

Fortunately, CSS has given us a function called [clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp). With this, we can get the browser to do all the hard work for us. We just set our minimum and maximum size parameter and it will do the calculation to see the right size is served to the user.

Even better, we don't really have to write it or understand it. There are free copy and paste tools out that create custom property we can use in our designs

### Utopia - Fluid Type Scale Calculator

The one I used here is [Utopia.fyi.](https://utopia.fyi/)

It is made by James Gilyead (a designer specialising in typography) & Trys Mudford (a really smart frontend developer) and is supported by [Clearleft](https://clearleft.com/) a UK agency co-founded by [Jeremy Keith](https://adactio.com/).

I have tried other tools, but I like Utopia best because:

*   We can also use it to set responsive spacing
*   It is thoughtfully developed. Recently I saw vw was updated to vi (to measure the inline size of the viewport, not just the viewport).
*   It also includes a non-viewport unit in the middle “preferred” value to see if things do not get messed up if the users zoomed in on their viewport .
*   They have already added sizing for container queries which we will cover later on the show. Also A WordPress theme.json generator is in the pipeline!

Also mention in the video is [Typescale.com](https://typescale.com/) and the new unit for the text-wrap property:- balance and pretty which help balance text and reduces widowed words.