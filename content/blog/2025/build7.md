---
title:  Building with an 11ty starter sites and headless WordPress
description: Building with the 11ty base blog.
date: 2025-02-07
tags: ["build"]
permalink: "build/7{{slugify }}/"
---
# Building with an 11ty starter sites and headless WordPress



## Starter Sites
----------------------------------------
11ty has something similar to WordPress themes called starter sites. It also has plugins.

**Some places to look for themes:**

*   [11ty Bundle](https://11tybundle.dev/starters/). A fabulous place for all things 11ty by [Bob Monsour](https://bobmonsour.com/).
*   [JamStack Themes](https://jamstackthemes.dev/#ssg=eleventy).
*   [The 11ty site](https://www.11ty.dev/docs/starter/).

Starter sites are typically plain for us to add our own CSS, but there are [exceptions](https://github.com/CloudCannon/campus-spark-bookshop-template). Some are created around Tailwind or Bootstrap or include javaScript framework intergration.

**3 considered suited to the show's website:**

*   [The 11ty Base Blog](https://github.com/11ty/eleventy-base-blog).
    
*   [Eleventy Excellent](https://github.com/madrilene/eleventy-excellent).
    
*   [Elva](https://github.com/scottsweb/elva).
    
<small>*Eventy Excellent by [Lene Saile](https://www.lenesaile.com/en/) was the closest fit as it used CUBE CSS, Paul Irish's Lite YouTube Embed and has a strew of great features.*</small>


## 11ty as a static frontend for WordPress.
----------------------------------------


Andy Bell has a couple of articles on [hooking 11ty to WordPress](https://bell.bz/i-hooked-up-eleventy-to-wordpress-api/) and [importing 11ty content to WordPress](https://bell.bz/importing-eleventy-content-into-wordpress/).

These talk about using WordPress plugins to tell hosts to rebuild 11ty.

*   [Using Wordpress as a headless CMS for Eleventy by Mike Aparicio](https://www.mikeaparicio.com/posts/2023-11-07-using-wordpress-as-a-headless-cms-for-eleventy/)
*   [How to use 11ty with Headless WordPress and deploy to Netlify by Dave Davies](https://davedavies.dev/post/how-to-use-11ty-with-headless-wordpress/)

<small>The mentioned WordPress plugins have not been updated in 4 years. We also have to consider the number concurrent builds our static hosting plan allow if letting clients update. Netlify only allows one on the free plan.</small>

### An alternative

The 11ty [importer](https://www.11ty.dev/docs/migrate/wordpress/#use-@11ty/import) that can graps WordPress posts from the WordPress REST API. It works out of the box with the 11ty base blog.

### Early conclusion:

- A WP notify plugin could be used as a prompt to devs to do a manual update, but imagine someone repeatedly publishing to correct typos.

- Automated updates require WP plugin dependencies and or skills to manage that. For a simple blog setting up Decap's free CMS seem easier.


With the cost, technical complexity and maintenance overhead of headless along with the growth of static and uncertaintly in WordPress it seem this is likey to be in decline. 



## Building with the 11ty base blog
----------------------------------------
Learning more about 11ty by using the starter site from its author [Zach Leatherman](https://www.zachleat.com/).

### The Pros

- Preconfigured 11ty plugins: [RSS](https://www.11ty.dev/docs/plugins/rss/), [Image Transform](https://www.11ty.dev/docs/plugins/image/), [Navigation](https://www.11ty.dev/docs/plugins/navigation/),  [Syntax Highlighting](https://www.11ty.dev/docs/plugins/syntaxhighlight/), [Id Attribute ](https://www.11ty.dev/docs/plugins/id-attribute/) and [HTML `<base>`](https://www.11ty.dev/docs/plugins/html-base/).

- Simple Stylesheet to extend or replace.
- Updated and well documented.

If using AI tell it you are extending the 11ty base blog and it adjusts it's solution! 

### The Cons

- You need time to understand how the plugins work and how it is configured.

## Missed last time

- Using slugs.
- Adding conditionals.
- [WebC](https://www.11ty.dev/docs/languages/webc/) (web components).