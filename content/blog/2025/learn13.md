---
title: Building an accessible menu bar
description: We look the code needed for an accessible menu bar 
date: 2025-06-25
tags: ["learn"]
permalink: "/learn/13{{slugify }}/"
videoid: 
draft: true
---
 **Show Notes:**


[Part one](/21)

## Navigation with JS

### Fly-out Menus

This is from the W3C's [Web Accessibility Initiative](https://www.w3.org/WAI/).

- [Examples with code ](https://www.w3.org/WAI/tutorials/menus/flyout/#fly-out-functionality)

Accessible, but not usable on small devices. It not progresively enhanced. If JS fails to load submenu items can not be found.

### Animated nav hidden on mobile 

This is from Manuel Matuzović [Acessibility Cookbook](https://accessibility-cookbook.com/).

- [Example](https://codepen.io/matuzo/pen/pomaLZQ)
- [Code](https://accessibility-cookbook.com/code/chapter7/recipe7_6/1_nav-animated/)

This improves the UX for user with small devices, but if JS fails to load there's no site navigation for them.

### Progressively enhanced navigation 

These come from Sara Soueidan's [Practical Accessibility](https://practical-accessibility.today/).

- [Drop-down navigation](https://codepen.io/SaraSoueidan/pen/eYPVvBo/7bb41d53655af69e44b6cf4a72102097).
- [Mobile navigation (focus trapped)](https://codepen.io/SaraSoueidan/pen/abYgpMG/2aaf9e249122f4619c924bcfc75f450f).
- [Mobile navigation (focus trapped]( https://codepen.io/SaraSoueidan/pen/BaGPOdw/29d8bd26d365b0161c6d0ded9c33e5ef).

 Here &lt;span&gt; tags are changed to &lt;button&gt; tags when JS is loaded. 
 
 The hambuger menus works as a modal dialog which traps the user within it so they need to know how to escape it. Alternatively it closes when the user is on the last focussable item.


## Simpler Navigation

These  example is from 