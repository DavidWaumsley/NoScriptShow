---
title: CSS layouts made simple
description: Looks at modern CSS layouts using the show's initial simplified site. 
date: 2024-01-24
tags: ["learn"]
permalink: "/learn/1/{{slugify }}/"
videoid: ANg1d8wO3Pc
---

Video notes
----------

### The reason for this video

This is extra content to the main [No Script show](/) No Script show. In particular, [Episode 3](/3) where Nathan and I were trying to both understand and explain modern CSS layout and how it has been completely refactored.

We used the main points of a talk by [Rachel Andrew](https://noti.st/rachelandrew/VqOEAa/refactoring-the-way-we-talk-about-css#scagi0F). She was significant in seeing we got the first truly comprehensive layout spec for the web:- CSS Grid. It was actually supported in all the browsers back in 2017 so you can see we are doing a lot of catching up.

Its not a topic that translates to an audio chat very well so here I'm showing how it connects with the first stages of building the show's website.

The site is, on purpose, simple and under-styled so we can use it to keep showing what we are learning in the show. For example the enforced dark mode should be an option by the time we do our episode on user preferences.

### Why understanding CSS and HTML is more useful than ever

Overall the show is about learning the fundamentals of designing for the browser at a time when it could not be more different to designing for print.

Even if you are not authoring the HTML and CSS yourself it's probably more essential than ever to know the basics of what it is doing. And if you know the basics then HTML and CSS also becomes easy (which they were always designed to be)

About a year ago I decided I should be able to offer clients who need a CMS a site just using the web platform and I got a bit overwhelmed, but now with a few sites under my belt it seems you don't need to over complicate this or know it all. I think this is essentially Rachel Andrew's main point. She says she can teach new people easier than those with a history with CSS and get people able to make their own site in a day.

### Tools

*   [Visual Studio Code](https://visualstudio.microsoft.com/) A free and open source code editor. I won't cover installing that as there are plenty of posts and YouTube videos on that.
*   There is also this fork that does not send data to Microsoft. [VSCodium](https://vscodium.com/)
*   [Netlify Hosting](https://www.netlify.com/) . Free up to 100GB bandwidth per month.

We are working to W3C [rule of least power](https://www.w3.org/2001/tag/doc/leastPower.html).

That is starting with HTM and CSS first as declarative language where the browser is already equipped to do what we tell it or declare what we want it to do . We will still need a smidge of JS which needs programming logic. But typically if enough people are doing stuff in JS it gets put into HTML or CSS where it is fast and has much less room for error. Presently we will need JS for a dark mode switcher, but this probably will not be true for much longer.

Long term as this is a content site we will probably have to manage. Maybe with WordPress (locally) or a static site generator like [Astro](https://astro.build/) or [11ty](https://www.11ty.dev/).

The nice thing about editors today is they do most of your writing.

### Looking at the code

The rest of the video looks and the code used and how it is influenced by Rachel Andrew's talk covered in Episode 3 of the chat.

*   Flow layout
*   Use of CSS Flex, Grid Subgrid
*   Logical properties
*   (Box) Alignment and sizing

### Code snippets

 ```css
/* Intrinsic resposive grids: */

 /* min function added to remove the 
    media query shown in the video. */
  
  .resources {
    display: grid;
    gap: var(--space-s-l);
    grid-template-columns: repeat(auto-fit,
    minmax(min(27rem, 100%), 1fr));
    margin-block-end: var(--space-m-l);
  } 

 /* Used to center the main content: */

    .narrow {
      margin-inline: auto;
      width: min(70ch, 100% - 3rem);
    }  
```
  