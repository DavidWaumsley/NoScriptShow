---
title:  Creating links that are not too hyper!
description: Looking at links gaffs, aria labels, when to use target="_blank" and underlining links with CSS. 
date: 2024-02-13
tags: ["learn"]
permalink: "/learn/4{{slugify }}/"
videoid: AQAw17sNO6c
---

## Notes
----------

As hyperlinks make the web what it is, I thought I should talk a bit about how we have marked-up and styled our anchor tags on this initial version of the show's website.

The premise of the podcast is that we are relearning the fundamentals of web design. What this has been showing us is that this process is only partly about learning new approaches and specifications.

Much of it is about unlearning things that once seemed like cool design, but increasingly look more like ignorance and even contempt for web users.

### Let's start with the basic HTML markup

Getting an anchor link with the VSCode editor is really easy:

*   We type "a" and enter on the first option that automatically appears. The cursor moves to where we want to add our url.
*   If that url is for a local HTML file we only need to enter a forward slash to select from the available files.
*   Then we only need to tab to where we can enter the text to be linked (just before the closing anchor tag)

``` html
<a href="/"> linked text here</a>
```
For accessibility we should avoid vague link copy like "Click Here" and "Read More" which can be confusing when a screen reader reads them out of context. Of course, we can get around this by adding an aria-label for screen readers to announce:
``` html
<a href="/" aria-label="read more about avoiding aria-labels"> read more...</a>
```
An easier way might be to try (where possible) to design with non-sighted people in mind.

It saves having to read the difference between aria-label and aria-labelledby and still doubting you got it right? That could just be me!

Recently I programmed the "read more" links on a WordPress blog archive page to add an aria-label that included the blog post's title.

It's a very common pattern, but often it seems pointless as the title is typically a link that has been styled to not look like a link and so require another for the sighted people.

### Using target "\_blank"

In the VS Code editor we can select the 2nd anchor tag option (blank) and will get:

```html
 <a href="/"  target="_blank" rel="noopener noreferrer"> read more...</a>
```
This, of course, opens the link in a new browser tab and VS Code kindly adds rel="noopener noreferrer".

It does this as target “\_blank” opens up a security issue which these solve. There is no SEO implication with these.

You may also notice that rel="nofollow” is not an option nor does it auto-complete in VSCode. I am quite thankful for this because I was an over user of nofollow.

Many years back I bought into the idea that you could balance your inbound and outbound like ratio for better SEO results. I'm sure ratios matter, but if everyone can prevent search engines from following everyone else there is little point in having search or SEO

From now on I'm using it to prevent passing link authority to sites that don't reflect the values of the site. My guess would be that with Google's new focus on [Experience, Expertise, Authoritativeness and Trustworthiness](https://developers.google.com/search/blog/2022/12/google-raters-guidelines-e-e-a-t) linking to reputable sources might help.

### When should we use target "\_blank"?

For most previous sites I've defaulted to using target"\_blank" for external links. This is something which a [2014 CSS tricks article](https://css-tricks.com/use-target_blank/) argues is a bad approach.

I read this article when it was published and changed my approach, but like one of the article's commenters says I had it flagged by a client as a bug! Since this article I imagine even more people's use of social media where external links open a new tab.

Interestingly when I switched to following people who blog on web standards who mostly don't use target"\_blank", I was thrown at first. That told me I had also developed this expectation.

I believe the CSS tricks article is right. When you force target”\_blank” you take away the user's ability to opt-in to that. This, of course, is assuming they know they can right click and choose to open links in a new tab or window.

This site has one of the "good reasons" CSS tricks list for using target"\_blank" This is that we have audio and video content which could be disrupted if the user clicks a link that does not open a new tab.

Of course, that is not on every page. Initially to keep the site's behaviour consistent I made the external links on resources and subscribed page target"\_blank", but I have changed this to give (our type of) users the option. I would be interested in your thoughts.

As most modern screen readers will declare what will happen, the concern is with sighted users. To help I have added a “link-out” icon with this CSS that selects every link with the target="\_blank attribute:

```css
a [target="_blank"]:after { 
content: url(/images/link-out.svg);
margin-inline: 0.2rem;
color: var(--brand);
}    
```
[Webaim.org](https://webaim.org/techniques/hypertext/hypertext_links#new_window) suggests this, but also note that it does not necessarily tell users that a new tab will open.

I can't possibly do this video without citing Heydon Pickering's powerful slide from a [talk at Paris Web](https://vimeo.com/377175838).

### "Underline your f\*cking links, you sociopaths"

This seems to have become a popular t-shirt slogan now.

Without Custom CSS browser agent styles give us underlines on our links by default. It is a signifier that identifies this UI from other things as a way of navigating the web.

Unfortunately designers come along and remove them without a full understanding of the impact. Particularly on the 300 million colour blind people of the world.

I'm particularly guilty of this because I used a builder based Bootstrap 4 framework and unthinkingly went along with the default. They remove the links until the user hovers over them. This was changed with Bootstrap 5.

In Heydon's talk he mentions how accessibility expert [Adrian Roselli](https://adrianroselli.com/) was urging Mastodon to add underlined links. There was resistance as The CEO and lead developer did not want the ["visual clutter"](https://github.com/mastodon/mastodon/pull/9898#issuecomment-456410756) (and being open source there were other subjective opinions). It seems they have added underlines now.

### Styling underlines with CSS

Of course aesthetics are also important and fortunately CSS keeps giving us more control over our underlines.

We can independently colour, style and set the [thickness](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-thickness) of them. We can set them to skip ink ( i.e. leave space for font descenders)or not . My favourite is the new [text-underline-offset](https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-offset)

For our site, I have used this reset taken this from a brilliant article by [Stephanie Eckles:](https://moderncss.dev/modern-css-for-dynamic-component-based-architecture/#css-reset-additions)

 ```css
 /* Baseline for default links */
a:not([class]) {
text-decoration-thickness: max(0.06rem, 1px);
text-underline-offset: 0.4rem;
 }
```
One difference on this site is that I set mine to rems (set by the root) where she uses ems relative to the element. We are using a lot of h2's as links and ems seemed too thick in this case.

One last thing I like to do to is give links a subtle press down feel on click:
```css
 a: active { 
position: relative;
inset-block-start: 0.05rem;
} /* inset-block-start is the
 modern way to write "top"  */  

 ```