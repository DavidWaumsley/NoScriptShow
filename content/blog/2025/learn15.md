---
title:  "Styling Quotes"
description: Styling testimonials, blockquotes and pull quotes.
date: 2025-08-19
tags: ["learn"]
permalink: "/learn/15/{{slugify }}/"
videoid: 
draft: true

---

 **Show Notes:**

 In [part one](/24/) we attempted to rationalize the HTML mark-up needed for testimonial, regular quotes and pull quotes. Here we are looking quickly at styling them with CSS. 

## Testimonials

It's common for these to be displayed as a carousel, but until this can be achived in an accessible way without JavaScript we (for reasons associated with the show's name) look for simpler and more resilient options like:

- The "Reel" a horizontal scrolling technique used on [Every Layout ](https://every-layout.dev/).
- Details and Summary as used on our demo [here](https://band.here24.co/)

An example 3 colunm testimonial can be found on our [intrinsic framework](https://intrinsicframework.here24.co/testimonials/).

The details and summary used on the band website demo combines the RAM technique [shown here](https://intrinsicframework.here24.co/maximum-column-grid/) with the diclosure widget example [shown here](https://intrinsicframework.here24.co/disclosure-widget/).


## Pull Quotes

As mentioned in part one pull quotes don't naturally lend themselves to the web because it is repeated content and the effect is difficult and lost on smaller devices.

Interestingly though, Rachel Andrew's CSS Day 2025 presentation called [Multicol and fragmentation](https://youtu.be/NfwDP9shxNQ?t=2445) talks about the idea of the web being more like printed pages going forward. She introduces the idea of "exclusions" (to normal flow). The examples she shows look much like the patterns designers often try to recreate with pull quotes. 

  <div class="popout center-me" >

  <img src="/img/exclusions.webp" loading="lazy" width="1200" height="665" alt="screenshot from Rachel Andrew's talk showing print examples of large text excluded from normal document flow.">

  <small> <em> A screenshot from Rachel Andrew's talk.</em></small>
</div>

The No Script Show uses a [named grid lines technique](https://layout-breakouts-builder.vercel.app/) to allow some content to break out of the narrow more readabe confines allowed for written text (as seen with the above image). This can be used to create somthing close to a typical pull quote pattern as shown [here](https://band.here24.co/music/street-lights-album) and [here](https://band.here24.co/music/shadow-album).

## Regular Quotes

Over time we will be building up some copy and paste styles, but a good starting point is [this recent post on CSS tricks by Andy Clarke](https://css-tricks.com/getting-creative-with-quotes/).

