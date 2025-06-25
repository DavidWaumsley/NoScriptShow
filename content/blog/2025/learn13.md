---
title: Creating accessible navigation
description: We look the code needed for an accessible menu bar 
date: 2025-06-25
tags: ["learn"]
permalink: "/learn/13{{slugify }}/"
videoid: 
draft: true
---
 **Show Notes:**


## Examples with JS

### Fly-out Menus

From the W3C's [Web Accessibility Initiative](https://www.w3.org/WAI/):

- [Examples with code ](https://www.w3.org/WAI/tutorials/menus/flyout/#fly-out-functionality)

<small>Accessible, but not progresively enhanced or very usable on small devices.</small>

### Animated nav hidden on mobile 

From Manuel Matuzović's  [Acessibility Cookbook](https://accessibility-cookbook.com/):

- [Example](https://codepen.io/matuzo/pen/pomaLZQ)
- [Code](https://accessibility-cookbook.com/code/chapter7/recipe7_6/1_nav-animated/)

<small>Accessible and fine for small devices, but not progresively enhanced.</small>

### Progressively enhanced navigation 

From Sara Soueidan's [Practical Accessibility](https://practical-accessibility.today/).

- [Drop-down navigation](https://codepen.io/SaraSoueidan/pen/eYPVvBo/7bb41d53655af69e44b6cf4a72102097).
- [Mobile navigation (focus trapped)](https://codepen.io/SaraSoueidan/pen/abYgpMG/2aaf9e249122f4619c924bcfc75f450f).
- [Mobile navigation (focus NOT trapped]( https://codepen.io/SaraSoueidan/pen/BaGPOdw/29d8bd26d365b0161c6d0ded9c33e5ef).

<small>Here &lt;span&gt; tags are changed to &lt;button&gt; tags when JS loads. The hamburger works as a modal dialog which traps the user within it by default. The last option escape the modal via the last focusable item. </small>

<small> <strong>David's note:</strong> some years back I used &lt;dialog&gt; to [imitate a mega-menu ](https://affinitycentre.co.uk/). Until this year, I have not seem anyone using this for navigation menus. It seems to work with only a few lines of JS, but I have not tested it emough to cover here. </small>



## [Simpler Navigation](https://intrinsicframework.here24.co/simple-navigation/)

Even with HTML and CSS there are few things than can be done to make the experience better for all. 

- [Example with code](https://intrinsicframework.here24.co/simple-navigation/)