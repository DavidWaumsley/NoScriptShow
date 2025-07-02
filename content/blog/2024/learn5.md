---
title:  Accessibility - Skip nav links & :focus-visible
description: Links, aria labels and when to use target="_blank". 
date: 2024-02-20
tags: ["learn"]
permalink: "/learn/5{{slugify }}/"
videoid: _KLBhO_7zW8
---

TRANSCRIPT
----------

We've been progressively building the show's website with a first focus on trying to make the content as usable as we can before seriously tackling the aesthetics.

Now we have 5 items in the main navigation, it seemed like time to add a way for **keyboard** and **screen readers** users to be able to skip the repetition of these links and get to the main page content.

WCAG (the Web Content Accessibility Guidelines) does not specify "skip nav links", but says we should have a mechanism to [bypass blocks](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html) of content that are repeated on multiple Web pages. Other examples they give are:

*   News site's where the users may have to go though many article links to get to the main story and
*   Ecommerce sites where there could be many filter options before they can get to the products.

Some sites also provide a **"skip to the footer"** option too.

We don't need that, but this has made me think about how footers are often used to dump less relevant content and legalese and how we might also want to allow people to skip that. Amazon does this by placing their "back to top" link at the start of their footer.

(Accidentally there's no legal links here as there's no tracking or cookies on this site)

Truefully, if it hadn't been for accessibility legislation increasing awareness (and we'll probably have more with the [European Accessibility Act](https://ec.europa.eu/social/main.jsp?catId=1202) coming in 2025) I am not sure how much attention I would have paid to these things.

It's a shame I needed the law to encourage me to do the designer's main job of finding empathy with users, but now I think sharpening up these "soft skills" is becoming more vital. Not just to increase the reach of our website, but to highlight the advantages we have over AI.

As a sighted mouse user I almost never use the keyboard on web pages until recently when I had a temporary strain on my mouse hand. Presumably age will force me to do this more.

From my limited experience of tabbing my way around the web it is frustrating, but this must pale into insignificance compared with those with motor issues who have to navigate pages with [head wands, mouth sticks or sip-and-puff switches.](https://webaim.org/articles/motor/assistive)

While many off-the-shelf sites have "skip to content links" added by default they can make things even more confusing when addons (like forms) and DIY user mess up the tabbing order.

It is not difficult to add this yourself and do it right, but before I get into that I want to mention (as it's relevant) the new…

### :focus-visible (pseudo class)

[:focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) now has support across all major browsers and solves a problem that when a sighted mouse user clicks on a focusable element (like a button) they get a 'focus ring' that may only be needed to guide those using the tab key.

When I was in a page builder community this issue came up regularly with people saying how do I get rid of the ugly outline around the header text of my FAQ section when clicked. The reason was the accordion module marked up the titles with the button tag.

The _wrong_ solution was to the add this CSS:

```css
:focus { outline: none; }
```

[My solution](https://www.a11yproject.com/posts/never-remove-css-outlines/) was to add JavaScript to detect a mouse action and then remove the outline. Now browsers will by magic (or heuristics) do this for us via its own user agent CSS. No need for JS.

Assuming we are not [supporting IE](https://caniuse.com/?search=focus-visible), we only have to remember to avoid using :focus (rather than :focus-visible) when we want to custom style our focus state as this will undo what browsers are now doing for us.

I have used this:

```css
:focus-visible{
outline: 2px solid var(--accent);
outline-offset: .35rem;
border-radius: .1rem;
} 
```
### Skip nav links

#### Adding the HTML

Ideally I would have set this up first, but the idea was to build up this starting with the bare minimum which was a single page.

I also wanted to see how far we could go using VS Code search and replace before having to bring in a CMS or static site generator the manage the growing number of pages

To quickly add the skip links to all pages I went to VS Code's "Edit tab" and selected "replace in files". I searched for the beginning

tag which gave me all the HTML pages and replace with:
```html
<header>
<a href="#skip-to-main" class="skip-link">Skip to content</a>    
```
The link has an ID (skip-to-main) for the same page linking and a class (skip-link) or the styling

I repeated this search and replace to add where I wanted the skip link to go to in the document. I chose the maing tag Some use a H1:

```html
<main class="narrow" id="skip-to-main">
```
**NOTE:** I had to do this twice as there were two types of classes already added to the main tag.

#### Adding the CSS

We needed some styles for the link and a way to hide it until it is focussed on. As I have already added a custom focus ring we have that already.
```css
.skip-link {
position: absolute; 
padding: .3rem;
margin-inline-start: .5rem;
background-color: var(--shade);  
text-decoration-thickness: max(0.06rem, 1px);
text-underline-offset: 0.2rem; 
z-index: 10;
}  
/* styles the skip to content link */
```

The most frustrating part of this is that CSS has multiple ways to hide content, but no specific display property for hiding content from all except screen reader or keyboard user.

We can't use

```css
display: none 
```

as this removes elements altogether. Because of this we have all sorts of over complex “belt and braces” approaches which have to get changed according to the changing inconsistency of screen readers and browser vendors

Here I have included what is used by [Tailwind](https://tailwindcss.com/docs/screen-readers) and Bootstrap at the time of recording plus clip-path (that is supposed to replace the now deprecated clip property, but is used for old browsers).

```css
.skip-link:not(:focus) { 
clip-path: inset(50%);
position: absolute;
width: 1px; 
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0, 0, 0, 0); 
white-space: nowrap;
border-width: 0;
}
/* hides the link when not focussed */
```

On the live site (for now) I have only added:
```css
.skip-link:not(:focus) { 
 clip-path: inset(50%);
}
```

This is to see under what circumstance this today is not enough. Let me know if you see an issue. There was one with Safari, but I think it is fixed now.

What this does is clip all edges of the element to 50% effectively hiding everything.

[W3schools.com](https://www.w3schools.com/accessibility/accessibility_skip_links.php) take a different approach.

### Other links

*   [Visually hidden content is a hack that needs to be resolved, not enshrined](https://www.scottohara.me/blog/2023/03/21/visually-hidden-hack)
*   [The anatomy of visually-hidden](https://www.tpgi.com/the-anatomy-of-visually-hidden/)
