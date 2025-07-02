---
title:  Embedding YouTube videos for performance
description:  Lite YouTube Embed allows us to embed YouTube videos without automatically downloading YouTube's associated assets.
date: 2024-03-06
tags: ["learn"]
permalink: "/learn/6{{slugify }}/"
videoid: dt3XR_X22GY
---


Hello. This is following up to [episode 5](/5) of the main chat where Nathan and I were talking about component based web design.

In that we touched on [web components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) which in simple terms are “web standards” alternatives to 3rd party component libraries like React and Vue.js. The big plus is they will last as long as the web.

We've been experimenting with two web components for the media embeds on the show's constantly developing website:

*   A Shadow Dom component for our audio chat player by Dave Rupert (which I'll cover in the next video) and what we are covering today..
*   A "Light Dom" component called [Lite YouTube Embed](https://github.com/paulirish/lite-youtube-embed/) by Paul Irish which allows us to embed YouTube videos without forcing the visitors to download all of YouTube associated files regardless of whether the video is actually played.

Lite Youtube Embed
------------------

What Lite YouTube Embed does is only downloads a YouTube thumbnail image of the video and places a SVG play button over it so it visibly looks the same as a regular embed.

This saves well over a megabyte on the initial page load (which is, in our case, more than 10 times the size of the page we are adding it to) Of course, when the user clicks on play the embed acts as normal, but I'm sure a decent percentage of people visiting our page will have already seen the video and are here for the additional text resources. According to [Mr. Beast we should be avoiding external links in YouTube.](https://medium.com/illumination/mr-beast-explains-why-you-shouldnt-put-outbound-links-into-posts-on-social-media-platforms-1b8bcf9ce198)

I'm surprised Google's YouTube embed does not do this by default, particularly since the default way of embedding almost certainly makes you fail their own [Core Web Vitals on page load.](https://pagespeed.web.dev/analysis/https-noscript-show-0/t1ya9i5v2y?form_factor=mobile)

If they downloaded files based on the user's actions, as this component does, I'm sure it would greatly benefit the environment (not to mention those users who pay proportionately more for their data particularly outside of the west).

But on the positive side, Paul Irish the author of this alternative is a Google employee who works on performance, Chrome DevTools, Lighthouse, and PageSpeed Insights.

Also for the last 8 years I have been using a [similar technique](https://www.labnol.org/internet/light-youtube-embeds/27941/) by another Google developer Amit Agarwal (who seems to update his post on this according to the date shown).

The previous solution seemed to work perfectly, but I thought I would try Paul's as it is often recommended and is on Github where I can see if others have found issues I may have not tested for.

From my quite shallow understanding the main difference is that Paul Irish's solution is a web component in the sense that the Javascript used is registered to this custom element we put in our html.


```html
<lite-youtube> content goes here </lite-youtube>  
```
This is not a Shadow Dom component where the CSS is encapsulated in the Javascript (although there is a link to a [forked Shadow Dom version](https://github.com/justinribeiro/lite-youtube)).

I've called it “Light DOM” as that is the favoured buzzword of the day but I think we could just call it HTML.

The instructions and examples on Github are straightforward and useful, but I did deviate a bit from them to push performance as much as possible. Certainly I would appreciate anyone letting me know if I have got it wrong.

  
![Screenshot of  a Page Speed Insights test showing a 100 score.](/img/Lite-you-tube-embed-page-speed.webp)

 ## The CSS
-------

Firstly, I grabbed Paul's CSS which I put into my only style-sheet so it's cached ready for each page that might need it. Given CSS renders quickly and we have little of it on this site that makes the most sense to me.

As a side point, these days (and following some Google recommendations) I will separate large chunks of CSS that may just be used on a few rarely visited pages and add them to that page internally or inline. Something that back in the day would have been frowned upon, but now we have to balance what we load and against having one source of truth for our code.

I slightly slimmed and modernised the CSS For example we have now have aspect-ratio so don't need old CSS tricks hack to achieve this and change anything I saw that was not a logical property I may change this further but here is mine:

```css
   /* Youtube */

lite-youtube {
  position: relative;
  display: block;
  contain: content;
  background-position: center center;
  background-size: cover;
  cursor: pointer; 
}

/* gradient */
lite-youtube::before {
  content: attr(data-title);
  display: block;
  position: absolute;
  inset-block-start: 0;
   background-image: linear-gradient(180deg,
   hsla(0, 0%, 0%, 0.67) 0%,
   hsla(0, 0%, 0%, 0.54) 14%,
   hsla(0, 0%, 0%, 0.15) 54%,
   hsla(0, 0%, 0%, 0.051) 72%,
   hsla(0, 0%, 0%, 0) 94%);
  height: 99px;
  width: 100%;  
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
}

/* responsive iframe with a 16:9 aspect ratio
  thanks https://css-tricks.com/responsive-iframes/
*/
lite-youtube::after {
  content: "";
  display: block;
 /* padding-bottom: calc(100% / (16 / 9)); */
 aspect-ratio: 16 / 9 ;
}
lite-youtube > iframe {
width: 100%;
height: 100%;
position: absolute;  
inset-block-start:0 ;
inset-inline-start:0 ;
  border: 0;
}

/* play button */
lite-youtube > .lty-playbtn {
display: block;
width: 100%;
height: 100%;
  /* …but visually it's still the same size */
  background: no-repeat center/68px 48px;
  /* YT's actual play button svg */
  background-image: url
  ('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 68 48"><
   path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13
 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63
  3.26-5.42 6.19C.06 13.05 0
24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 
5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13
27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 
34.95 68 24 68 24s-.06-10.95-1.48-16.26z" 
fill="red"/><   
path d="M45 24 27 14v20"
 fill="white"/></svg>');
  position: absolute;
  cursor: pointer;
  z-index: 1;
  filter: grayscale(25%);
  transition: filter .1s cubic-bezier(0, 0, 0.2, 1);
  border: 0;
}

lite-youtube:hover > .lty-playbtn,
lite-youtube .lty-playbtn:focus {
  filter: none;
}

/* Post-click styles */
lite-youtube.lyt-activated {
  cursor: unset;
}
lite-youtube.lyt-activated::before,
lite-youtube.lyt-activated > .lty-playbtn {
  opacity: 0;
  pointer-events: none;
}

.lyt-visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
```

The Javascript
--------------

I downloaded the Github Javascript file to my sites folder and linked to the pages it was needed on.

This file is well commented, but just to shave off a bit more for visitors I removed these and [minified the Javascript.](https://www.toptal.com/developers/javascript-minifier) It compresses 1.7kb

## The HTML
--------

With a space of over 700px for the video I need a slightly larger thumbnail than the default 480px which is what you would get if you did not specify an inline background image. The next size up was 640px which might look a bit poor on retina display.

1280px seemed a bit large but I accidentally discovered that YouTube serves a webp version and that saving made me go with that.

```html
<lite-youtube videoid="xx"
style="background-image: url('https://i.ytimg.com/vi_webp/xx/maxresdefault.webp');"> 
</lite-youtube>
```

This also stops Google's PageSpeed Insights from nagging me to “serve images in a next-gen format”. There is still a nag about “Serving static assets with an efficient cache policy” but I don't think there's anything I can do about that as it is on Google's servers.

You can see the issues if you run a [Pagespeed insights test on on the Lite Youtube Embed's demo page](https://pagespeed.web.dev/analysis/https-paulirish-github-io-lite-youtube-embed-variants-pe-html/i897dycxhw?form_factor=mobile)

The other thing PageSpeed Insights flagged up (under the SEO section) was that the link to YouTube was not crawlable so I formatted that differently. The main concern with this solution is many claimed this makes the video....

[Not Indexable by Google](https://github.com/paulirish/lite-youtube-embed/issues/105)
-------------------------------------------------------------------------------------

This is issue is now solved with iframe in a <noscript> tag within the Javascript.

Dave Smart's another suggestion was to add schema with this [handy tool.](https://classyschema.org/Video?example=single)

All you have to do is add your Youtube video and it generates the JSON script which I add just before the pages closing </head> tag. Incidentally, I put SEO stuff last in the head following a talk by performance expert Harry Robert called ["Get your head straight".](https://www.youtube.com/watch?v=UW1PEMBdX5E)

I am not sure how important schema or rich snippets are these days. Some SEO's have started saying that with advances in machine learning technology i.e. Natural language processing (NLP) search engines are relying on them less.

I've added them just because it is so quick to do so, which was not the case when I was using WordPress, but it's "swings and roundabouts": as WordPress plugins did automate other SEO meta data that I now have to do manually. I will talk about this another time.

## Preloading the YouTube thumbnail
--------------------------------

One last thing before I go, is that I preloaded the Youtube thumbnail. As it was there at hand it seemed a quick copy and paste job that seemed to keep the PageSpeed Insights score more often at 100.