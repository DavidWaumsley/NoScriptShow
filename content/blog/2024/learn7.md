---
title: Adding an audio player (web components)
description: Looking at a audio chat player which is a shadow DOM component by Dave Rupert. It's fabulous but comes with some pros and cons.
date: 2024-03-19
tags: ["learn"]
permalink: "/learn/7{{slugify }}/"
videoid: J03DQ2rQBsE
---

## Audio chat player
--------------------

This is the second follow-up to episode of the chat where we we were talking about component based web design.

Here we are looking at the audio chat player that's presently on the show website. This is a shadow DOM component by [Dave Rupert.](https://daverupert.com/) He is co-host of the [Shop Talk chat](https://shoptalkshow.com/) which he does with Chris Coyier (of Codepen and formerly CSS tricks fame). This player is also used on their chat too.

We can find it at [HTML with superpowers](https://htmlwithsuperpowers.netlify.app/using/examples/chat-player.html) where the code and working example is on (perhaps no surprise) [CodePen.](https://codepen.io/davatron5000/pen/LYerBQw)

## Installing the audio player
---------------------------

To install the chat player all we have to do is:

*   Copy and paste the JavaScript to our own JS file and reference it on the pages we are using it (just before the close `</body>` tag of our HTML).

`<script type="module" src="/player.js"></script>`

*   Then add the `<chat-player> </chat-player>` custom element to where we want the player to show in our HTML and within that add on an tag providing the source of our audio file.
    

## The pros and cons of shadow DOM components
------------------------------------------

What is good is that if the Javascript fails on the site it reverts back to the browser's own audio player and the audio can still be played. You might want to add preload="none" to the audio tag so that in the event of a JS fail the audio tag does not start loading until played.

Using only the audio tag is the simplest approach, but the style and functionality of players varies across browsers.

For example the 60% of chromium browsers visitors (globally) will get a download and playback speed option. Presently those on Firefox will not get these. Music is about the only audio I listen to at a normal speed so it would not meet my needs.

Although there is not much in the way of styling included, you will see from the Codepen example that the CSS (flexbox) layout is encapsulated in the Javascript.

As we discussed in the chat, this can be good in the sense that it is portable. We can add the component to any project without the fear of naming or specificity conflicts with the existing CSS there.

The downside is there is a delay to the CSS being processed which increases the Cumulative Layout Shift that Google's core web vital measures. In this case we see the browser's native audio player before the styling kicks in. On a slow internet connection it could be frustrating to move your finger or mouse over the play button only for it to move before you can complete the action.

As I am coding alone to my own naming convention CSS encapsulation to me is not really a benefit. It forces me to do the CSS styling in a Javascript document where I lose the time-saving prompts and auto-completes that [Emmet](https://emmet.io/) gives me in the VS Code editor. I'm more prone to error.

Of course, Dave Rupert and Chris Coyier are both far more knowledgeable on web components than I am. On their chat they discussed this topic at the end of 2023 following a run of articles by people who influence web standards.

It might be worth reading Chris's article on [light DOM components](https://frontendmasters.com/blog/light-dom-only/) that reflects and references the view that this, rather than Shadow DOM, might be our best first option.

In this case (and as I understand it), if we want the fallback back of the HTML audio player we need the [shadow-root open for a slot in which to place it.](https://htmlwithsuperpowers.netlify.app/images/chat-player.png)

As this is the [noscript.show](https://noscript.show/) we're focusing on what we can do with the declarative languages HTML and CSS, but if you want to learn Web Component. Dave Rupert has a [course on it.](https://frontendmasters.com/courses/web-components/) He has been following this tech for more than a decade before its recent popularity (as a way to escape the burnout of changing and competing 3rd party libraries?).

It may also be worth following Zach Leatherman (best known for creating the 11ty static site generator) who creates, talks and [writes](https://www.zachleat.com/web/?category=web-components) a lot about Web Components.

## Adjusting the chat player defaults
-------------------------------------

### CSS

Below is the custom CSS I added for this flexbox version. I initially "borrowed" the CSS grid layout used on the Shop Talk chat.

```css
.chat-player {
background-color:var(--shade);
/* this is overwriting lower in the cascade*/   
  }
.chat-player button svg{
background-color:var(--brand);
display:block;
width:4rem;
height:2rem;
padding:.5rem; 
}
.chat-player button {
background-color:var(--brand);
}
.chat-player button:hover{
filter: brightness(1.2);
}
.button-rewind{
display: none;
}
.button-ff{
 display: none;
}
.chat-player input[type=range] {
 appearance: none;
width: 100%;
background-color:var(--base);
}
.chat-player input[type=range]::-webkit-slider-thumb {
height: 1rem;
width: 1rem; 
background: var(--brand);
cursor: pointer;
appearance: none;      
}
chat-player button {
 border:none;     
}
```
Before adding any extra CSS it adapted to the color-scheme: dark presently set on our site. Although the CSS is encapsulated I could reference the colour variables set it up in the :root of the site. If I used the same colour naming convention across projects this would be helpful. I suspect I won't!

This is a bit hacky, but In this version I have hidden the skip forward and back 30 seconds options in the CSS and also commented them out in the JavaScript.

I am not spending too much time on this as it is likely on the next iteration of the site's design that we will replace this for the lite youtube embed covered in the last video. Perhaps we will have icon links to the other places where you can listen to the audio.

### LIT

What we can see at the top of the Javascript is that this component was built with [LIT.](https://lit.dev/) This (if you have the aptitude for it) is a light open source framework by Google that makes it easier to build your web components and share them.

From my tests we can bump up the LIT version to 3.0.0. I think the main breaking change is that this version no longer supports IE11.

This LIT import does bring in other dependencies which we can see on our page load waterfall. The impact on page speed is not great, but not as good a the lite youtube embed used only on the site's learn pages.

