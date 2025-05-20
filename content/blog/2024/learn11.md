---
title: Finally, a delightful free accessibility tool. Silktide 
description: A new and free accessibility checker by Silktide, which includes a simple screen reader simulator.
date: 2024-06-01
tags: ["learn"]
permalink: "/learn/11{{slugify }}/"
videoid: FLAAs6upFj8
---

This is not my planned follow-up, but in my [last video](/learn/10) I ended up testing the accessibility of a light and dark theme toggle using NVDA's screen reader.

Out of my frustration with that, I discovered a fabulous new and free [accessibility checker by Silktide](https://silktide.com/toolbar/) that includes a simple screen reader simulator. I think it's the only checker to include this.

As the W3C defines accessibility testing as a subset of usability testing, I'm particularly pleased to find a user-friendly accessibility tool that I genuinely look forward to using.

It's comprehensive enough to allow me to lose some other accessibility add-ons (accumulated, but hardly used) and is designed so well that I can imagine using it on client calls to demonstrate the unseen work done on their behalf.

I recommend the [10-Minute Web Accessibility Audit webinar](https://www.youtube.com/watch?v=tFMY8cLubD4) by Silktide's eloquent and knowledgeable CEO Oliver Emberton. He can explain his tool better than I can.

The screen reader alone makes it praiseworthy
---------------------------------------------

I am writing this to spread the word because I don't have to be so modest about its value to users like me, particularly the screen reader.

This screen reader is not fully fledged and only works on the page you are testing, but that's its strength.

They rightly highlight its ease of use, but the real joy for me is that it's just where I need it and that its functionality is confined to the website page we are testing.

I found running the NVDA desktop app, as a sighted user, difficult. As soon as I start the reader for testing I want to go into my code editor to make changes, run other tests, or look things up. It comes with me because its real job is to assist me with everything I do on the computer.

It could be my lack of experience, and there are extensions or settings to help, but having watched some demos by experienced blind people I suspect this will never feel easy for me. I'm also lazy when it comes to firing up desktop applications for quick tasks.

That said, it's important to read the limitations of this screen reader. They have applied the 80/20 rule, so it won't entirely remove the need to test with a full screen reader.

**For example:** In my [last video](/learn/10) I was unsure about the poor results with aria-live on a light/dark theme toggle. I did not know whether it was a user error on my part, the inappropriate use of this code, or just a screen reader bug.

This screen reader will not help with that as aria-live is not supported. Neither can I hover and have the alt text read to me as CSS hover will not work.

If we have `<select>, <details>, and <summary>` in our HTML, it will not work. I suspect anything where the browser treats the elements as a component could be tricky.

Limitations aside, I think this is a great way to introduce more designers to screen readers. I've often thought I should use one regularly so it naturally becomes a part of my design thinking.

**👋 Note:** I contacted Silktide thinking there could be a bug as my selected Google voices were falling silent at about 280 characters. It seemed only to be with Google voices. No problems with the Microsoft one. I need to test more, but don't think it is an issue for Silktide, but let me know if you encounter the same.

How to get the accessibility checker
------------------------------------

It is a [Chrome extension](https://chromewebstore.google.com/detail/mpobacholfblmnpnfbiomjkecoojakah) which allows you to add it to Microsoft Edge (and perhaps other Chromium browsers). As of May 2024, there is no Firefox extension, but it is in their sights.

Other additions are likely to come, but I suspect much will depend on how much attention this receives. To justify the time, I imagine it also needs to work as a good marketing tool for Silktide's business, where they have more sophisticated premium checkers that monitor and report on full sites and go beyond accessibility.

I tend to avoid endorsing businesses, but I don't think this is any different from using WebAIM's Wave, IBM's Equal Access Toolkit, or Google's Lighthouse.

I have had a positive awareness of Silktide since 2011 when I was despairing at how the UK was going to implement the "Cookie Law".

They really stood out as a voice of reason who were not afraid to hold the bureaucratic power of the ICO to account. The BBC [covered them](https://www.bbc.com/news/technology-19505835). They were right. It did nothing to protect users and made web usability worse until it was quietly abandoned.

I've seen quite a bit of their public content and I connect with their approach. Perhaps because I lived close to their UK base, but equally I like the way the US side of their company does their training videos too.

These are a part of the tool and although incomplete at the moment of this recording, they are short, clear, and to me, "spot on".

I feel their focus leans more toward making us better designers by helping us find empathy rather than the dull legislative finger-wagging side of accessibility.

Overview
--------

### Accessibility checker

It's not the best way to think about accessibility, but the first thing I want to know with any checker is do I pass?

This does an automated test looking at WCAG 2.1 AA, the present "good" standard that will become a legal requirement for many serving the EU next year. You can easily swap that to AAA, the "excellent" standard.

Apparently, this runs over 200 tests, but of course no accessibility test is definitive. What I quite like is you can switch to the Assisted mode where it will prompt you to look further and use some judgment. Even so, there are limits to how a tool like this can help.

For example, with help from this checker I can easily get the No Script Show's presently basic site to pass on 2.1 AAA, but I can't pat myself on the back for this accessibility excellence. We have video content that does not include a sign language version, which the checker cannot know.

Interestingly, where our site fails is with a decision I discussed before in an earlier video regarding links opening in a new tab.

This is something I did all the time before, but I decided that breaking the back button was really only justifiable on pages where there was media that would be disrupted if the user clicked to a new page. To hint that the link is to an external resource, I added an icon which was a suggestion from an article from the Wave accessibility tool.

Silktide's accessibility checker made me realize I completely forgot non-sighted users and gave me some options, handy code snippets, and a link to the relevant WC3 document.

### Empathy building simulators

There are three simulators that help us empathize with the experience of others: dyslexia (which some thought I had), color blindness, and impaired vision. I like that the color blindness simulator gives the percentage of those affected (I had an extension for this but it never added that).

### Heading order

The next section is heading order. Setting these up in a sensible hierarchy is now drummed into me, but it easily slips up in a large document and this is easier to see than in code. Also, as screen reader users may navigate with the "h" key, you get a sense of whether the header text alone explains the page (as a sighted user, I often do a quick scan over the header sections before committing).

### Landmarks

Screen readers automatically assign these, so we don't see them in the code unless we specifically assign them with roles. We can check if they have got it right against the W3C definition example the tool links to.

Even though I have gotten familiar with NVDA announcing these, I was not really familiar with the concept and we'll certainly be looking to use these where needed from here on.

I won't say who, but I used this to look at a well-known site that is going through a redesign and has plenty of accessibility-focused followers.

They had not made use of specific landmarks to separate content into "regions" and sometimes "complementary" sections where to me that would have made sense.

### Focus order

This gives us an order map of a tabbing order. The site I thought might be approved with the use of regions certainly has quite a disorientating tabbing order where the user jumps sharply up and down the page.

It is probably worth testing with Silktide's fake Uni site that has numerous accessibility issues baked in [fake-university.com](https://fake-university.com)

On its homepage, the focus order looks OK at first glance until we see what comes first.

### Alt text

This offers a nice overlay of the alt text tags on a page. Those with empty alt tags get labeled as "decorative".

A nice touch was seeing that in the sidebar it had picked up on hidden images.

It is worth watching the short video that warns of over or under-describing images. With AI tools starting to automate this, I can see limited or non-sighted users getting the contextual information they require replaced with irrelevant flowery prose.

### Screen Reader Extras

With NVDA we can blank out the visual screen. It is just quicker to do here. Certainly, I am going to challenge myself to do this more often as it is quite a different experience when you can't see how to navigate the screen reader.

Having mostly worked with WebAim's Wave checker, I like that I can see and check dark and light modes which can be structurally different. I think that has brought me full circle to my last video. It's almost as if I planned these.

If you do use it, please try to show your appreciation to Silktide with reviews. Helping them is likely to see this tool getting even more love.