---
title:  Web safe or system fonts are cool again
description: Looking at modernfontstack.com an online to get web safe fonts. 
date: 2024-02-06
tags: ["learn"]
permalink: "/learn/3{{slugify }}/"
videoid: ilrfhdSuIsw
---

TRANSCRIPT
----------

In the last video I showed how we got fluid typography for the show's website through Utopia.fyi's wonderful (copy and paste) tool. It gives us these variables we can assign to our type elements. Carrying on with the theme of typography I want to talk about fonts.

As this is an agile project where the aim is to get something out and iterate as we go (in this case in line with the shows content) we are starting with system fonts.

System fonts are having a bit of a comeback at the moment so It seemed like a good time to talk about why that is and why it might matter more in the near future and also mention another great online tool.

### Free online tool for web safe fonts

Firstly, VS code offers a drop-down menu of web safe font stacks when you type font family. That's good, but if you want more information and choice it is worth checking out the [Modern Font Stack site.](https://modernfontstacks.com/).

If you hover over any collection you will see an information icon which when clicked will take you to GitHub. Here you will see a visual representation of the sytem fonts and will be able to see the font weights avialable.

### The Pros and Cons of web safe fonts

Let's start with the more obvious pros:

*   **It's very quick and easy to set up.**  
    No messing with converting and optimising fonts. No individually adding weights. No messing with font-display to avoid “Flashes of Unstyled or invisible Text” no updating fonts because it's not displaying correctly on X device.
*   **It's more environmentally friendly and cheaper.**  
    If you and your visitor are paying for their bandwidth use. Certainly it will help us keep out Netlify host free for longer.
*   **Faster page loads which might boost SEO,**  
    Less visitor bounces and a plus point for Google's algorithm.
*   **No 3rd party gathering your visitor's data and legal risk of fines.**  
    Something we have been seeing with those using the Google Font API.

Less obvious upsides for using system fonts:

*   **Access pro fonts optimised and updated to the users device.**  
    We would not be able to license fonts like San Francisco and Segoe
*   **Familiar to users.**  
    
*   **Looking ahead to when [prefers reduced data](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-data) is supported**  
    As we saw with the rapid use of Dark and Light preference we could be expected to provide a good system alternative on our websites.

The cons are obvious:

*   No Branding.
*   Loss of control.
*   Boring (but is that partly a lack of imagination?).

Much of the time and depending on the type of site we will need a non-system font, but certainly many web agencies are now sugesting (at least for the body copy) the client look to websafe fonts first.

Recently saw this thought provoking quote from [Massimo Vignelli](https://en.wikipedia.org/wiki/Massimo_Vignelli) from when the NYC SCHOOL OF VISUAL ARTS made him the recipient of its 1991 Masters Series Award:

> "In the new computer age, the proliferation of typefaces and type manipulations represents a new level of visual pollution threatening our culture. Out of thousands of typefaces, all we need are a few basic ones, and trash the rest."

The fonts he talked about are not websafe, but this was in 1991 before most new fonts for device were created.