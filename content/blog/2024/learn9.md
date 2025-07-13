---
title: Adding a light and dark mode with a toggle
description: About adding a light or dark toggle to website and how this is not perfect but might become a standard.
date: 2024-04-21
tags: ["learn"]
permalink: "/learn/9/{{slugify }}/"
videoid: eZTB4rH7Wh8
---
This is following on from chat [episode 8](/8/) where Nathan and I finally started talking about designing the show's website.

In that episode I offered a rough homepage mock up and together we attempted to critically access it in the way various experts might.

Here I am looking at the light and dark mode toggle in that design. I'll share the code I'm initially going to use and also talk about my concerns over present implementations of this feature.

Offering a dark mode toggle is trending right now, but we are including it because It is not entirely inconceivable that one day this might be considered a standard for most websites.

I say this because browser and (particularly mobile) device vendors have good reasons to want to offer a portable web experience that can respond to the environmental light, available battery life and what the user personally finds comfortable. These vendors have a powerful influence on the W3C working groups which recently has been giving us many new ways to work with a variety of user preferences.

I can cover this better with Nathan when we do our planned chat episode on the user preferences we can, or soon will be able to, honour using CSS.

Embracing the dark side?
------------------------

The dark mode that's presently on the initial site was a whim. We wanted to start with only enough design to make our early content presentable and the dark aspect gave its stark appearance a little more interest with most sites being light.

Honouring a user's (system or browser) preference for dark or light is not technically difficult (at least with simple designs).

Since 2020, we can add to our CSS:

```css
:root {
  color-scheme: light dark;
}
```

Then if we create a HTML page the browsers own user agent styles will kick in.

If our device or browser is set to dark mode the browser will give us light text against a dark background and visa versus is set to light. It will also apply dark and light styling to the browser built in components as I previously used with the audio element.

Most will not want this as the styles colours added by browser are similar but not the same. I personally prefer Firefox's slightly lighter and blue tinged background to chrome's default.

To take control of our own light and dark colours we have the [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) media query. Baseline (which we talk about in [episode 9](/9/) of the chat) classifies it as "widely available" across browsers. [Can I use](https://caniuse.com/?search=prefers-color-scheme) in April 2024 says it is96% supported globally (higher in the UK and USA).

Very soon things may get easier when the [light-dark()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark) function gets better browser support. With this you will be able write your CSS like this:

body {color: light-dark(color-1, color-2);
background-color: light-dark (color-1, custom color-2);
 }

or assign them to custom properties
```css
:root {
 color-scheme: light dark;
--base: light-dark(hsl(0, 0%, 100%), hsl(240, 10%, 10%));
--shade: light-dark(hsl(0, 0%, 100%), hsl(240, 10%, 10%));
}
```

The dark mode toggle dilemma
----------------------------

Although initially some felt it was enough to let the user decide their preference via their browser or device settings I think most have come to realise that most users don't know there is this option and if they do they may not alway want it . The way to solve both issues is to offer a toggle switch on your site.

he good news is that thanks to the newly supported [:has()](https://developer.mozilla.org/en-US/docs/Web/CSS/:has) CSS relational pseudo-class we can create a toggle without needing JavaScript.

There is a [great demo of this](https://codepen.io/bramus/pen/oNOwqMW) by Bramus Van Damme. He works for Google and is definitely someone to follow.

His light dark switch works by using :has() to see if an HTML input has been checked. If so, it uses that associated CSS rule if not it uses the other.

The snag with using this as a light and dark toggle is that it only applies to the page you are on. I set up a demo and concluded the experience is worse that not having a toogle.

Hello JS my old friend
----------------------

If we want the user's toggled preference to remain until they say otherwise we need javaScript to hold this request in the user's local storage in their browser.

This is what I'm doing presently. The javaScript I used was prompted with Chat GPT, but seems to have been working fine on another site I did last year.

### javaScript


```js

 // Get the toggle button element by its ID
const toggleButton = document.getElementById('dark-mode-toggle');

// Get the root element of the document 
const rootElement = document.documentElement;

// Check if the user's system prefers dark mode
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Check if there's a stored color mode preference in local storage
const storedMode = localStorage.getItem('colorMode');

// If there's a stored mode preference, add it to the root element's class list
if (storedMode) {
  rootElement.classList.add(storedMode);
} 
// If there's no stored mode preference but the system prefers dark mode, add the dark mode class
else if (prefersDarkMode) {
  rootElement.classList.add('dark-mode');
}

// Add an event listener to the toggle button for when it's clicked
toggleButton.addEventListener('click', () => {
  // Toggle the 'dark-mode' class on the root element
  rootElement.classList.toggle('dark-mode');
  
  // Determine the current mode based on whether the 'dark-mode' class is present
  const currentMode = rootElement.classList.contains('dark-mode') ? 'dark-mode' : '';
  
  // Store the current mode preference in local storage
  localStorage.setItem('colorMode', currentMode);
});
```

### CSS

```css
:root {
  /* colors*/
  --brand: hsl(355, 81%, 62%);
  --accent:  hsl(240, 27%, 40%);
  --base:hsl(240, 8%, 90%);
  --text:  hsl(240, 8%, 10%);
  --shade: hsl(240, 9%, 82%); 
}

.dark-mode {
  --brand: hsl(355, 81%, 62%);
  --accent: hsl(240, 100%, 81%);
  --base: hsl(240, 8%, 10%);
  --text: hsl(240, 8%, 95%);
  --shade: hsl(240, 9%, 14%);   
}


.toggle-area {
display: flex;
justify-content: end;
}

#dark-mode-toggle { 
  border: 0; 
  cursor: pointer; 
  background-color:var(--brand);  
  border-radius: 20rem; 
}

#dark-mode-toggle img{
  width: 20px;
  display:inline;
  padding:.2rem;
  transition: .4s;  
}

#dark-mode-toggle img:active{
  transform: rotate(90deg);
}

.dark-mode .moon {
  filter: invert(100%);  
  }
  .dark-mode .sun {
   filter: invert(100%);  
    }
```

### HTML
```html
  <div class="toggle-area">
  <button id="dark-mode-toggle"       
  aria-label="A toggle for a dark or light theme" >      
    <img class="moon" src="/images/moon.svg" alt="">
    <img class="sun" src="/images/sun.svg" alt="">      
  </button>
</div>  
``` 

Some light in the darkness
--------------------------

I was not sure how to conclude this. I did not like the idea of relying on javaScript. I did not like that I could not use the prefers-color-scheme to swap my logo if I had a toggle.

Mostly I felt that if the overall aim of the W3C is to encourage a more user preference based web I am not sure that leaving web designers to come up with their own UI for this is the right way. More confusion for users and developers individually reinventing the wheel.

Then I discovered Bramus had a few days ago released a proof of concept [light and dark mode extension for chrome](https://www.bram.us/2023/10/09/the-future-of-css-easy-light-dark-mode-color-switching-with-light-dark/ target=). I missed it, but he has been arguing that there should be settings in the browser based on the web site viewed for a few years.

Certainly If all browsers did adopt it would address some of my uneasiness with it and make it easy for those wanting to only use HTML and CSS.

No doubt it would create other concerns like should it only show if the site has a light and dark mode to stop users pointless clicking for something that does not exist.

What I think this probably tells us is that the state of a user preference based web is very much in its infancy.