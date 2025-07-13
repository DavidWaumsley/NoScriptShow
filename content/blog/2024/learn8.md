---
title: Building without WordPress.1 Tools and Tabs (organizing work)
description: About getting used to manually coding websites after many year depending on a CMS.
date: 2024-04-03
tags: ["learn"]
permalink: "/learn/8/{{slugify }}/"
videoid: -RgObYHDwxw
---

The no script show's website has been a place to put our content and implement things we talk about in the chat. It's functional, but not yet designed for a specific audience as we've only just started talking about design on the show.

Nevertheless, it is the first web project I have done since 2007 that has not, in some way, involved WordPress. With that in mind, I thought I'd do a few videos on my experience switching from a dynamic platform to manually building static sites.

I've not found any content on this topic. It is probably there, but overwhelmed by content marketing for web building solutions.

Here, I'll concentrate on what I felt was the biggest loss in the change over.

Tools in one place
------------------

With WordPress I learned to have a starter site already configured with the various addons I might need for a new project. This used to seem an efficient approach, but as change and competition grew in the WordPress space (and so within my own instals) this went into reverse. I lost control of the UI which I never made quick to navigate.

Mostly though, I happily adapted to whatever the platform threw at me because I had become so attached to having one place for everything.

This was so ingrained that when I first thought about hand coding some sites I instantly looked first to new static site generators. Of course, with increased popularity it is not inconceivable that these will attract similar issues.

Bookmarking Tools
-----------------

To avoid "the tail wagging the dog" for as long as I can, I'm trying to recreate a “central location” using saved browser tabs containing the best online tools we have these days.

The idea is to customise these to individual web projects and to what stage they are at. During a design and initial phase there may be more links to graphic design resources and CSS layout code snippets. Presently, we are adding content so SEO and article creation tools are needed most.

I’ve no doubt the list of tools will change, but will at least remain independent to my main working space.

* * *

In case you (like me) didn't know, most browsers have the ability to let you bookmark a range of tabs.

With Chromium browsers you can click on the first tab hold ⇧ shift and click on the last to select all and If you right click elsewhere on the tool there is an option to bookmark these (the Edge browser says "add pages to favourites").

These tabs can be accessed quickly by holding Ctrl or Cmd ⇧ shift and O and then if we can right click on the saved bookmarks and open all.

* * *

My Bookmarked Tools
-------------------

1.  #### The local VS Code live server address.
    
    I can see the site visually in VS Code, but this allows me to use the browser inspector tools and my developer extensions. Like the popular free web developer toolbar for Firefox and chrome. I also have hoverify a commercial extension, but I could live without it.
    
2.  #### The site's "deploy" tab on Netlify's hosting.
    
    I used to upload via github desktop for version control, but the drag and drop upload is so quick and easy. I'll do another video on static hosting. This has been the most positive change I have made and these new services take care of most people's dynamic needs like redirects, pretty URL and form submissions.
    
3.  #### The live site to check what was published.
    
4.  #### [Metatags.io](https://metatags.io/)
    
    his helps with character counting of the page titles and meta descriptions. It does not guide us, but I know I am aiming for 60 with a max of 70 for titles and between 50 and 160 characters.
    
    As we make shareable content an Open Graph and X/twitter image seems to have and we can preview them with this. For speed and ease we are using the Youtube thumbnail url. It keeps down the images to manage locally.
    
    I also have a tab for [Classy Schema](https://classyschema.org/Video?example=single) for Youtube video schema. I mentioned this in my [video on Lite Youtube Embeds](/learn/6/). However, Google have changed how they measure video pages. This could be pointless!
    
5.  #### [xml-sitemaps.com](https://www.xml-sitemaps.com/)
    
    The free version crawls the live site and creates a sitmap.xml file that I download to the site folder and overwrite the previous file periodically.
    
    he defaults are fine. I am exploring the pro version (that has a free allowance), but I am not sure how important constant sitemap updates are after search engines find you and crawl regularly. Google spokespeople have not remained consistent on the merits of XML or HTML sitemaps.
    
6.  #### [Squoosh](https://squoosh.app/) - image optimisation by Google
    
    Optimization to new formats like Webp and AVIF.
    
    A service did this for me in WordPress, but the individual control I have with this is much better and it's free. Often what I want is the same dimensions for images and with something like [ShareX](https://getsharex.com/) I can screenshot and paste directly in to Squoosh and then download to my image folder.
    
7.  #### [Responsive image breakpoints generator](https://www.responsivebreakpoints.com/)
    
    WordPress creates responsive images by default and creating resposive images yourself is time consuming. This is where this tool by Cloudinary comes in. It crops the images you need and gives you the code. You only have to adapt the images paths to where you store the images.
    
    Of course, it not automatic like WordPress, but custom sizing produces better results. In fact, I disabled responsive images in later Wordpress projects. This topic needs it's own video as there is a lot to it and using this [bookmarklet](https://ausi.github.io/respimagelint/) can improve things further.
    
8.  #### Other tabs
    
    These include Google PageSpeed insights (for Core Web Vitals - beyond speed). MDN doc for learning and referencing in content and [FreeFormatter](https://www.freeformatter.com/html-escape.html) for escaping HTML code when used on shared snippets