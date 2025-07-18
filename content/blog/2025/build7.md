---
title:  Building with an Eleventy (11ty) starter sites and headless WordPress
description: Learning the Eleventy base blog and whether It can serve as a static frontend to the WordPress CMS.
date: 2025-02-07
tags: ["build"]
permalink: "build/7/{{slugify }}/"
videoid: cwfIIXtzJRA
---

## Starter Sites

Eleventy has something similar to WordPress themes called starter sites. It also has plugins.

**Some places to look for themes:**

*   [11ty Bundle](https://11tybundle.dev/starters/). A fabulous place for all things 11ty by [Bob Monsour](https://bobmonsour.com/).
*   [JamStack Themes](https://jamstackthemes.dev/#ssg=eleventy).
*   [The 11ty site](https://www.11ty.dev/docs/starter/).

Starter sites are typically plain for us to add our own CSS, but there are [exceptions](https://github.com/CloudCannon/campus-spark-bookshop-template). Some are created around Tailwind or Bootstrap or include javaScript framework intergration.

**3 considered suited to the show's website:**

*   [The Eleventy Base Blog](https://github.com/11ty/eleventy-base-blog).
    
*   [Eleventy Excellent](https://github.com/madrilene/eleventy-excellent).
    
*   [Elva](https://github.com/scottsweb/elva).
    
<small>*Eventy Excellent by [Lene Saile](https://www.lenesaile.com/en/) was the closest fit as it used CUBE CSS, Paul Irish's Lite YouTube Embed and has a strew of great features.*</small>


## 11ty as a static frontend for WordPress.


Andy Bell has a couple of articles on [hooking 11ty to WordPress](https://bell.bz/i-hooked-up-eleventy-to-wordpress-api/) and [importing 11ty content to WordPress](https://bell.bz/importing-eleventy-content-into-wordpress/).

These talk about using WordPress plugins to tell hosts to rebuild 11ty.

*   [Using Wordpress as a headless CMS for Eleventy by Mike Aparicio](https://www.mikeaparicio.com/posts/2023-11-07-using-wordpress-as-a-headless-cms-for-eleventy/)
*   [How to use 11ty with Headless WordPress and deploy to Netlify by Dave Davies](https://dev.to/thedavedavies/how-to-use-11ty-with-headless-wordpress-and-deploy-to-netlify-3i73)

<small>The mentioned WordPress plugins have not been updated in 4 years. We also have to consider the number concurrent builds our static hosting plan allow if letting clients update. Netlify only allows one on the free plan.</small>

### An alternative

The 11ty [importer](https://www.11ty.dev/docs/migrate/wordpress/#use-@11ty/import) that can graps WordPress posts from the WordPress REST API. It works out of the box with the 11ty base blog.

### Early conclusion:

- A WP notify plugin could be used as a prompt to devs to do a manual update, but imagine someone repeatedly publishing to correct typos.

- Automated updates require WP plugin dependencies and or skills to manage that. For a simple blog setting up Decap's free CMS seem easier.


With the cost, technical complexity and maintenance overhead of headless along with the growth of static and uncertaintly in WordPress it seem this is likey to be in decline. 



## Building with the 11ty base blog

Learning more about 11ty by using the starter site from its author [Zach Leatherman](https://www.zachleat.com/).

### The Pros

- Preconfigured 11ty plugins: [RSS](https://www.11ty.dev/docs/plugins/rss/), [Image Transform](https://www.11ty.dev/docs/plugins/image/), [Navigation](https://www.11ty.dev/docs/plugins/navigation/),  [Syntax Highlighting](https://www.11ty.dev/docs/plugins/syntaxhighlight/), [Id Attribute ](https://www.11ty.dev/docs/plugins/id-attribute/) and [HTML base](https://www.11ty.dev/docs/plugins/html-base/).

- Simple Stylesheet to extend or replace.
- Updated and well documented.

If using AI, tell it you are extending the 11ty base blog and it adjusts it's solution! 

### The Cons

- You need time to understand how the plugins work and how it is configured.

## Missed last time

- Using slugs.
- Adding conditionals.
- [WebC](https://www.11ty.dev/docs/languages/webc/) (web components).



<details>
<summary>Transcript</summary>

[00:00:05] ****Nathan Wrigley:**** Hello there. This is the second video looking at the 11 static sites generator from the perspective of WordPress users. In the first episode, we built a simple site from scratch, and in this we are looking at 11 starter sites and some of the more advanced features. David has begun rebuilding the show site using the 11ty base blog and can share this experience of it as well.

And we'll also talk a little bit about using 11ty as a static front. End to WordPress. So I mentioned David. There he is. How are you doing, David? You right? Yeah, I'm 

[00:00:40] **David Waumsley:** really good. we've got a lot to cover with this. We do. I probably, and I'm nervous again because it's outta my depth with this stuff, and, we 

[00:00:49] **Nathan Wrigley:** will forgive 

[00:00:49] **David Waumsley:** you.

[00:00:50] **Nathan Wrigley:** It's a bit of live 

[00:00:51] **David Waumsley:** stuff going on again. yeah. So should we bring up our show notes? 

[00:00:55] **Nathan Wrigley:** Yeah, let's put the bits and pieces on the screen. There we go. So 

[00:01:00] **David Waumsley:** we're actually using here, what we started working on, which you. The place for our, a new site. So it's on my local host at the moment, so I'm using that for the notes and it's coming from the base blog, which we've mentioned over here.

So I've done a, little bit of styling on it, but not much already. I think probably the first thing, just to note for anybody who is coming from WordPress like us is that, Levi to, does have something similar to WordPress themes in that they call these kind of starter sites, and it also has.

plugins as well. but it's different. it hasn't had 20 years of, arguing over what a theme of a plugin should do, but, yeah. but they're quite different on that. So let's quickly talk about where you might be able to get one of these teams. 'cause that was the first thing I thought.

We'll use a starter theme to get us. Go in and effectively I ruled it out and then came back to the idea of using the base blog. So let's talk about other themes that are around. I wanted to mention this one. I'll bring this up, which is the 11 bundle, because honestly I wouldn't have got as far as I have if it wasn't thanks to, and I'll bring his site up as well.

Bob Mons, I think, I hope that's how you say his name. But he does this great job. He's got great articles. Himself. So he's definitely somebody to follow if you're into eleventy. But he does list his own sort of chosen kind of updated list of other things here. And what's nice about is you can see which version of eleventy it's using on this.

but also I just wanted to mention 'cause it's got this fire hose here, which has pretty much all the articles that are coming on about 11 and there's about one a day on these. So definitely worth taking a look at that. And out of interest, actually, the ones that I considered really suitable for our show.

if we were using a starter site, were the ones that are first listed here. So 11ty base blog, 11ty Excellence, and Alva here as well. So that was good. Also, another place which I discovered, which doesn't add much on it, is this. placed JAMstack themes. So you can look at the 11tywo ones. Here we've got Astro, which is more popular, not many.

There's only 19 listed, but Astro, which is very popular at the moment and has 18. So I'm not sure how updated that is. So you get a, screenshot of this and where to go from GitHub to get it and a demo, whether one's available. And finally the last place, and probably the first place for most people to look would be the levity site itself.

Where it has the starter projects here, and this has got a nice feature, as you can see over here. It's. Got, the, oh, it's like a Google Pay spa scores, right? Yeah. So it's, they've got a wonderful thing on here, the leaderboard, where it's actually taking the live data of real users using these themes and stuff, so you can actually see who's doing well.

So you can put your site on it actually, and have it judged to see how it's doing. Excellent. Yeah, it's quite, quite a cool little thing, but there's something like 90 to a hundred or something of the starter themes, which are available here. One that I was looking at before, I can see this here, but you may notice, that most of them look pretty plain.

[00:04:29] **Nathan Wrigley:** yeah, certainly the little thumbnail there does in many cases look quite plain, but not always. It seems te text heavy, if Yeah. 

[00:04:36] **David Waumsley:** Yes it is. And I think really if you were someone, come in as a non coder, non coders do certainly use starter sites. They don't need to know HMO very well or CSS, and they can get started if they stick with it.

But generally, I would think. That it's mostly the audience that attracts the people who are into HML and CSS and will want to build their own. Of course. So you'll do your own styling on top of this. So I think, Really, I, that's what I put as note here is that it's, I would say they're typically played, so you can add your own CSS.

But the other thing is, there is an exception here. Let me just, there's quite a few exceptions, I guess to all of that, as there always is. let me just bring this one up. so you do get, something to contradict that, something which is fully fledged Something Yeah, that looks like a, actually looks like a WordPress site.

Dare I say it? Yeah, it does. And it's got all of these kind of cool things on it, but I think that's the exception to the rule. with these kind of things where they're heavily styled, they're usually left to do, whatever you prefer. Some of them though, what might be useful if you are, somebody uses Tailwind or something, some of 'em are integrated with that, or Bootstrap or they're integrated with some of the JavaScript frameworks as well.

But, as mentioned, there was three, I think. For us, the base blog, which I ended up deciding to use, and 11 Excellence, which, you've seen before. 'cause I said I love, this. Yes. Yeah. It could have saved us a lot of time, I thought. I don't know why I love that. I just do. I think 

[00:06:20] **Nathan Wrigley:** it's lovely.

Yeah. 

[00:06:21] **David Waumsley:** it is really well done. Lena Sael, I think is her name is. German developer who lives in Spain and she does a lot of sort of levity stuff and really a very clever woman and a lot of people, as you can see here, have used this site to build their own. She's listed them out here. These other people, some of 'em are her own projects, but other people have used these and.

In fact, I communicated to her because she was just releasing something new and there was something that came up, which I didn't understand, and she was quick to get back with me, and there's a new version of it and why I like this, why I thought this was good for our needs was the fact that, As we know, I'm a big fan of Cube CSS.

She also is using that and, talks about many of the things I do. She's got, dark and light mode in this, which is something that I wanted to add. We're using YouTube, Embeds. Yeah. Using Paul Iris's light embeds. So you only load the thumbnail image rather than load all the stuff that's all baked into all of this.

And there's some really, she's got pagination, which isn't in the base blog, which we're using at the moment. she's also got, lemme just show you this 'cause I think this is quite full. this graph image is built into this. oh, nice. Where, what it does it, basically what it does is it creates your open graph images for, that you need for it because it prints out on a SVG that you put in, turns it into a jpeg, I think, or a ping image, whatever it is.

and prints out your data and whatever else you put in there. So you have these automatic created. things which we don't actually need. No. Yeah. So I think I'm gonna use it for my own personal blog because I think it's fantastic. But anyway, I just wanted spend, but 

[00:08:10] **Nathan Wrigley:** you decided against it for the no script show option.

Okay. 

[00:08:14] **David Waumsley:** Yes. And there was one other, I think I'll just quickly show it that, and again, 

[00:08:18] **Nathan Wrigley:** I just love this. There's just something about the color. I think it's the color system of this one that I really like, 

[00:08:24] **David Waumsley:** but it's so simple. This Yeah, it's so 

[00:08:26] **Nathan Wrigley:** nice. Yeah. 

[00:08:28] **David Waumsley:** again, we got light and dark on this. what was really nice, and I won't open it up, but it actually integrates with front matter CMS, which I Okay.

Showed in the last episode where it's an extension Yeah. For. vs. Code and it, so you can get a CMS experience if you like, in your VS code thing. So that's it. But yeah, and it's got also, multilanguage. Oh, multi. You can set this up for your, yeah. So you can do that. but anyway, we didn't do that.

We decided to go with the base blog just to learn from all I, I did. 'cause I.

We've got a skim over, so we can talk about that a little bit more. We did say that we will talk about using, 11ty as a static front end for WordPress, which is, headless WordPress is the kind of, been a popular thing. Certainly. I won't go into too much detail here. I have put some articles, it's a Coupled by Andy Bell, on this one.

Looking at it both ways, hooking 11tywo WordPress and importing 11 content into WordPress. So going the other way. 

[00:09:39] **Nathan Wrigley:** am I right in saying though that this is like a bit of an endeavor that's run out of steam a bit? 

[00:09:46] **David Waumsley:** I, don't think so. I. there is, let me just bring this all on this by Mike.

aio, I must say that, right? Yeah, we'll go 

[00:09:57] **Nathan Wrigley:** with that. Cio. I'm gonna say ar reio. Yeah, geo. 

[00:10:00] **David Waumsley:** I dunno. Yeah, I've watched some videos. He does, he has some really great content on, design systems and, he's got a great article here as another one on this where you can set this up using this kind of fetch, node.

that which will fetch all the posts from WordPress and then you bring that into 11 and to make this all work as the client that I had in this particular case that he's talking about, they wanted that for pages and posts and he brought it in and connected it up and all the code is here. The thing is with both of these articles, and I dunno if it's down here, where it shows you I won't find it quickly, is both of 'em are using two different WordPress plugins so that when the client updates and publishes, that sends a communication to the hosting.

one of 'em is actually just for netlify to say rebuild. 11. So it would update the post there. The snag that I found with these is that these articles, I mean they're later than when these plugins came in, but the two plugins that are mentioned by Dave Davis, who's got a very similar, post on this, I looked them up and they've both not been updated for four years and one of them has actually closed any contributions to their GitHub repository, right? so I think this is not for somebody like you and I who haven't got these skills to be able to make sure that this, these people have maybe 

[00:11:27] **Nathan Wrigley:** moved on and maybe they just built it for a particular project that they have.

Maybe they had to just migrate a massive site or something like that, and this was just the most effective way to do it. I don't know. 

[00:11:37] **David Waumsley:** Yeah, but you could do it and if you've got the skills, but I thought it was beyond us. But there is a nice little alternative I think, which will just allow, and I'll, do it.

There's a video by Zach Leatherman, the author of Eleventy who shows this. But I'll, repeat it again just because it, Allow me to show how you might import a starter site Okay. From scratch as well. So we've got the 11ty importer where you can bring in, it'll grab the WordPress posts from this.

So we'll see if this works with this. so what I need to do first, let me get rid of some of this. Yeah. 

[00:12:12] **Nathan Wrigley:** get your, palette clean. Yeah. Is helpful set up. So what, just to be clear, you are gonna use this importer tool. The link is in the no script show, notes, and the endeavor is to import.

Posts, I guess pages as well. How does it work? 

[00:12:28] **David Waumsley:** Yeah. posts on this one is what it set up for you. Okay. The 11 importer, which I, just quickly brought up, actually I've got a link to it here. Yeah. Actually does other stuff here. So there is a nice little video that is done on this one and I dunno if we can find it quickly here.

It will do WordPress 'cause that's the most popular thing. It will also bring in things from YouTube, but it will also bring in things from. there's more migration here. There's another platform. What's the popular platform? that's an alternative to Twitter. Masteron. Oh, Masteron, okay. So it can import stuff on that as well.

Okay. That's interesting. Yeah. So let's see if we can go back here. And now what I need to do is when you go to any of these starter sites, so if I was to go to. The base blog here, what we'll find is that you can just use this template and generally what you might want to do is to, then create a new repository for yourself on this.

I've already got that. So if I just go and click on me, go to my repositories. I've already brought this in and I've got base blog over here. Okay. Got it. Yep. So if I go into that and then, and I mentioned it last time we were talking, that it might be useful to have GitHub desktop. Yes, you did.

Yeah. Like that. Yeah. So if we open that up, then what I can do is take this repository, which I've copied and hopefully. Oh, there we are. We've come in. So it's let's just check that it's going to where I want it to go. So it's coming from where I want and it's going to local path 10th. That's exactly where I want it to go.

Nice. There is a code. Yeah, there is. Whoa. Okay. And that's done actually. And I'm gonna open it up in visual. I've got two of these open now, so we could have problems. It's all No problem. 

[00:14:30] **Nathan Wrigley:** we'll 

[00:14:30] **David Waumsley:** work with you. We'll figure it out. I'll do away with that. And I should bring this up on this screen 'cause you can't see it.

And I should just also increase the size 'cause you can't see much, can you? Is that Yeah, that's fine. We, 

[00:14:42] **Nathan Wrigley:** yeah, we've got lots now We can definitely read that. That's lovely. 

[00:14:46] **David Waumsley:** we may, what we'll need to do first probably go to the read be document because what we've already made. A clone of this one, and we've already set that up, but actually, because it hasn't included all the node stuff there.

Okay. We're gonna have to install all of that ourselves here. So bear with while I just bring up the terminal. Terminal and 

[00:15:09] **Nathan Wrigley:** you're gonna NPM install? Oh no, I'm not gonna do that. Not that one. Oh, this is your short code. Sorry. This is your text expander that you're using to generate the. Yes it is correct code.

Yeah, you maybe just copy and paste In this case 

[00:15:24] **David Waumsley:** it's quite short. 

[00:15:25] **Nathan Wrigley:** There we are. There you go. And now we've got 

[00:15:27] **David Waumsley:** small bit of time. Actually this will allow me, one is just doing that 'cause it's got, loading all the notes. I just wanted to mention something. Let me just bring this up. If you are using some of the starter sites, what might scare somebody new is seeing something like this, which is what I saw, on Elva before.

I think I also saw it on the 11 is. oh gosh. Yeah. That looks terrifying. Yeah, It's because it's a node which is no longer supported. And what you can, it gives you the information. You can just run the NPN Audit fix and it will sort things out, and it's probably okay, and the author will do that.

But I just thought it was worth throwing in that. If you're coming to this for the first time as I was, something like this is quite a scary thing to see if this is not we're used to doing press on regardless. Okay. Yes. Okay. So you do get something there. Anyway, we should have copied all of our 

[00:16:21] **Nathan Wrigley:** Yeah, it says it still watching.

A bit more time to kill here, David. What else can we, no, 

[00:16:26] **David Waumsley:** It's done. It's, the wrong one. I've got it open twice, so I see that and now we can run the 11tyail and I'll do that with my, short. Key and we should have that now. There we go. Yeah. Or 80. 80. 80. There're So I increase, there we go. I increase the size.

So now what we can do here just to show so that's basically installed in it, and then you can work from there. So it's not. Too bigger job to start from the starter site, get it on your local level. Now, once you 

[00:17:00] **Nathan Wrigley:** know what you're doing there, which you clearly now do, I think that was a two minute enterprise for you o of without all the talking and everything that you had to do.

That's probably a couple of minutes, isn't it? Yeah, exactly. Coffee and come back and it's all good to go. So this is the, which starter site is 

[00:17:17] **David Waumsley:** this? What's, this is the base blog. Except the only thing is I've increased the font size on. Now what I wanted to do was just show the importer working. 'cause that was it.

It's quite cool. Yep. so if I just get rid of this again, and we'll go back here and I've got the, what I need to put in already typed out because. Oh, you're 

[00:17:41] **Nathan Wrigley:** prepared. 

[00:17:41] **David Waumsley:** You're a good YouTuber, David. 

[00:17:43] **Nathan Wrigley:** you've got yourself ready. 

[00:17:45] **David Waumsley:** So what I've just pasted in here, this is all we need is something telling that we're going to import WordPress to this particular address that we've got in here.

And what we want to do is to output this content. Sorry, output it into the content and into the blog section. So one thing that we do need to know if we're using one of the starter themes is where we want that stuff to go. And in this case, with the base blog, it's in content, and then our posts go in here.

Okay? So we want that to be the same. And then we, could do a drive run. We can decide where we want to locate the assets, but in this case, the assets want to, set to co-locate. So effectively what this should do. It should put them in a folder with the post themselves. Okay. So the images that go with it.

So let me just run this and let's just see if it works. and we should, oh, it's asking me now because I. I haven't got the import package in there, so I'm just going to say yes. Okay. I want that and it's going to do that as well. The beauty, you probably only needed. Yes, it's because I've opened up a new one and what we're seeing here is it's fetching.

It's fetching the different JSON files, so this is using the WordPress rest, REST API to drag in these posts. And I know there's one error on this and what we should see over here is. In our blog. Okay. Now we have our posts and we should see that with these, they put the assets co-located them with this.

That was the co-locate thing. Okay, got it. Yes. And if I can find the right tab. I will, 

[00:19:26] **Nathan Wrigley:** just show you now. Just, there we go. I was just gonna say, we're looking at a very pink screen there, but we're, back. We, can now see your brow. That great. We should be 

[00:19:34] **David Waumsley:** back, let's see if I'm on the right one.

Fingers crossed. 

[00:19:37] **Nathan Wrigley:** It was definitely 80 82, port 80 82. So why is there some caching 

[00:19:43] **David Waumsley:** going on? Probably. This is the problem when you're doing this. Browser caching is always, what I'll do off screen. You can't see this. I shall just run this again. I. When you say, 

[00:19:54] **Nathan Wrigley:** run this again, are you gonna, I'm just restart.

Yes. 

[00:19:58] **David Waumsley:** I'm 11. Let's just see if that shakes it up. There we are. We've got our post. Yeah. so we've got, yeah. So all been well, yeah, it's brought in the assets. Now. Something to just notice. there are a few little things that you get, so if you've got, as I have in this case, it was built with a page builder and I'm using.

A form of that kind of, all of these had a video on the top there, which was hidden behind this kind of code that I put. So it didn't manage to pick up on that, but otherwise the images and everything, so Set that up. That would work. 

[00:20:32] **Nathan Wrigley:** so you did something quirky in WordPress, which 11? The importer there, it just was on, it 

[00:20:40] **David Waumsley:** was unable to, yeah.

Okay. Is unable to understand what all the, what complexities were going on there. Otherwise it would, picking the JavaScript that was needed, but it was done in such a convoluted way, so it was missing on that. it does this, I read somebody said they had an 8,000 article blog and it took 11.

With the importer, two minutes to, to bring all of that data over. So yeah. 

[00:21:06] **Nathan Wrigley:** To to, the human mind. 8,000 sounds like a lot, but to a machine just pausing text, it's just yeah, bring it on. That's fine. Yeah, exactly. Exactly. 

[00:21:15] **David Waumsley:** Yeah. That bit's done. I'm going to get rid of this. okay, 

[00:21:21] **Nathan Wrigley:** that was successful.

That was a, really nice example of how to do it. So you've, managed to import in a matter of moments, an entire WordPress site. 

[00:21:30] **David Waumsley:** Yes. Oh, the other thing that you might just be interested in, if I go to the site that was, this is the first thing I thought, is the rest API. So if I actually go to the site, it was important.

It's actually blocked off. I've got a maintenance mode on it. I've got everything set, so 

[00:21:48] **Nathan Wrigley:** it's invisible to the human reader. But the rest API just. Very, yeah, exactly. You through all of that. Okay, 

[00:21:54] **David Waumsley:** great. so if I just gave a, client a log into this, it would be fine. And if, because of course it's taking the post data, it's turning that into markdown.

Yeah. So if you had a lot of junk code, which I did on that, it cleans it up. Really. It just takes the Oh, that's nice too. That's a unexpected benefit. 

[00:22:10] **Nathan Wrigley:** Excellent. Yeah. 

[00:22:11] **David Waumsley:** Yeah. So my, got a lot cleaner. Good for moving that over. okay, let's go back to our notes, our article. 

[00:22:21] **Nathan Wrigley:** Where are we now then?

Yeah, I think so. We've done the importer. 

[00:22:25] **David Waumsley:** We have, we've done how to, download us, start a site and get started with that. I think, we were talking about this earlier, I think we share the same conclusion that maybe because of the technical complexities and maintenance with headless and the growth of, static CMS is going around, I think it's probably not something you'll either go one way or the other, won't you?

But I think with it, I think. There'll be less headless solutions. Yeah, it 

[00:22:52] **Nathan Wrigley:** feels like 5, 3, 4, 5 years ago, headless was a real buzzword. It was really an interesting thing. I imagine probably an enterprise, it still might be. Yeah. But it doesn't feel like, your normal freelancer working in the, let's say WordPress space is gonna be too interested.

'cause there's just so many moving parts that could go wrong. And I'm not sure that the, benefits outweigh the. The hassle unless you really are truly an expert and this is all absolute muscle memory. And, I've not really heard anybody talking about headless much in the WordPress space of late. No.

So maybe it's run its course. 

[00:23:32] **David Waumsley:** I never got it at the time because I just thought, I don't, I've not had security issues 'cause I look after. Okay. And caching gives me a face. 

[00:23:39] **Nathan Wrigley:** Yeah. Caching is the sort of the golden bullet there, isn't it? A little bit, yeah. Okay. Yeah, so 

[00:23:45] **David Waumsley:** there 

[00:23:45] **Nathan Wrigley:** was that.

[00:23:46] **David Waumsley:** okay. Should we talk about what we've been doing here as we are using this local version where we're trying to recreate using the 11 blog and the reason why, when you say 

[00:23:55] **Nathan Wrigley:** what we're doing here, do you mean what we're looking at on the screen? This, Yes. Yeah. Okay, great. 

[00:24:00] **David Waumsley:** Sorry. So style wise, we're not there that, we haven't put the logos in here, but we have taken the Eleventy Bog, which is, and I've added in the things that, Might have taken me to another theme to this and taken away some things as well from it. And I did it really because I thought I wanted to know how complex it would be for someone like me, to take a starter site. Would it be the same problem you can have in WordPress where I've done it, where you want to reconfigure some parts of a theme that you've already got?

Yep. Yep. And there's just too much to wade through and there's an element of that as well. But I found it very useful because I've been able to learn by, because the base bog is the one that. Zach Leatherman looks after and created. So probably the best person to learn from if you're gonna get into starter sites.

And it was perfect to a certain degree for what we needed. the only thing we didn't have is I wanted the light and dark. Okay. on this. And we also needed, which I was mentioning before, if I go back to, let's just go into the archive here and go into our last. thing we wanted to have this thing here.

I won't click on it now, but it's just loading the image. It looks like it's the video. It's not loading the stuff right. 

[00:25:17] **Nathan Wrigley:** There's some wizardry going on where it will load the video when you click on that image, that thing that looks like a video. Okay. Exactly. 

[00:25:25] **David Waumsley:** So we're using Paul Iris's light in bed, which will just serve up and hold back YouTube from all of its JavaScript and just serve up the image for quick thing that interestingly enough, there is anyway.

A web component that Zach Lettermans built, which is based on the same thing. But I haven't used that. I've just put it in 'cause I know how to do that myself. Okay. and did that, what else did I need to add in here? There was one other thing that doesn't come with the 11 base blog, which we needed really, I think, and I can just demonstrate it here.

Oh yeah. Okay. Yeah. Is the pagination on the archive pages? Get. 

[00:26:04] **Nathan Wrigley:** So what does it do? Does it just try to load everything all in one go if there's no pagination? 

[00:26:10] **David Waumsley:** Yeah. So on the original blog that you get, it just, it's just the text that it gives you to start with it. Yeah, it's a starter site.

So it can almost go and on endlessly then, because it, browsers will be able to cope with all of that kind of information. But if you want to section it out like this, seem nice to add this in. So that was quite, an adventure for me. AI helped me though. Interesting. So 

[00:26:34] **Nathan Wrigley:** it wasn't straightforward.

There isn't like a, I don't know, something built into the base blog that you can just declare something. You had to go out and find the way to build it. 

[00:26:45] **David Waumsley:** Yeah, there is, PA pagination is something that you can easily add with 11ty. Okay. The way that I needed to add it in this particular case with the base blog, which I'll maybe touch on in a moment.

Okay, yeah, sure, sure. Maybe a bit more complex. But the beauty is, and this is a real tip if anyone wants to do this, what discovered is that ai certainly clawed and I was trying deep seek at the time, so I was asking them both questions where I got stuck with the base bog and it go. it struggled as well, but when I said I'm using the base bug, it goes, ah, this is what you need.

It's configured this way. Interesting. Okay. So shows the documentation's really good for the 11th stuff 'cause it was able to Okay. Yeah, Tell you exactly what it did. yeah, so it, it sorted me out. So that's just the basic stuff that I made some changes. Obviously we need some styling, we sorted this sort of stuff out.

But, shall I bring up, I think I'll bring up the code editor for this. If I. 

[00:27:40] **Nathan Wrigley:** Yeah, it was fairly straightforward for me as a, as somebody watching what you were doing to figure out what you've done. But I imagine it was a bit of a bed of worms to, actually do it the first time. 

[00:27:52] **David Waumsley:** Yes, it was.

So we got a whole bunch of, I. So the, one of the things I think, with a starter site like this for me was the fact that the downside of it all is the fact that you really do need to understand how things have been configured in, something like this. Because there's a lot of great sort of things that been set up.

Some of them I've commented out, which is the images, I won't go into this, but it has a wonderful image plugin where if you upload into an image, it will, you can. If you can set it to do almost anything, but it will, it will turn, if it's a heavy SVG, it will turn it into, whatever the smallest thing is an A VI or something like that.

Okay? It will add in the sizes. It will create a picture tag if it needs to serve a viv, and then a backup of a web p or a backup of a jpeg, right? For those browsers that don't support it, it will do this all automatically. I pulled it out only because of the build time with it, because this would be perfect if you are a CMS person and you've got a client coming in and dragging in any kind of image, right?

It will take care of all of that trouble for you, but that's not us and we're not using many images. In fact, we're using what comes from YouTube, our thumbnail. So you just did it 

[00:29:12] **Nathan Wrigley:** expediency. Given your situation where not many images and the ones that you are using, you've probably got the right format and optimize them anyway.

Exactly. So I thought, okay. 

[00:29:23] **David Waumsley:** Yeah, exactly. So I mean I, I ran a test on it earlier. There's one other, the things that we put in as a little diagram, and you know it on the defaults, it just set me with a different versions in a picture tag. And the smallest was the Avis. That's something like nine kilobytes.

And I just thought, our audience. If I needed that again, I would just put it in without the picture tag as a na, because 

[00:29:48] **Nathan Wrigley:** Yeah, 

[00:29:48] **David Waumsley:** It wouldn't need different sizes. It's so small. Anyway, so I thought that's generally the way we go. So I took that out. Okay. But there are some really cool things and, let me mention first where I got stuck, and AI helped me.

So if I go into the contents, are we still on 

[00:30:10] **Nathan Wrigley:** the, are we still on pagination? We're still. On 

[00:30:13] **David Waumsley:** that I was gonna talk about pagination. Yes, exactly. Yeah. it didn't, it had it on the post. So you've got the next post and the before post, that's automatically in the base blog. But I didn't have it on the archive pages and I created my own additional pages.

So with the example of chat here, what you discover is it uses another plugin called the 11 navigation, which allows you to really construct some, if you wanted to. A mega menu or something like this, okay? Allow you to organize things a lot better. 'cause you can put 'em in the subcategories, but because it does that, and this is something I think I mentioned, gray, gray matter as something that happens.

This isn't gray matter. This is a, an 11tyhing where you can use JavaScript in your front matter area. On this. So suddenly everything I'm doing in my template now, because I've got the navigation now has to be turned into something which is in a JavaScript format. If you'll, gosh, okay. Yeah. Which is where it goes beyond me.

But luckily I was able to add the pagination simply by asking one of the ais, I'm using the base blog. I want to do this. And, it just churned this out for me, which is using the standard code, which you'll see anyway in the documentation, but it just put it in the right syntax or format for the matter area here.

So it's just 

[00:31:37] **Nathan Wrigley:** looking at that and not knowing what I'm talking about, it looks like it's going so reverse. True is newest to oldest, I'm guessing. Yeah, the alias is almost like a custom post out. We're looking for the posts. The size six is how many to show before the, before you need to click the pagination, so there's six on a page, and then there'll be six more on a page and six more.

And exactly. Data collections chat. I don't even know what that is. Not a clue. 

[00:32:07] **David Waumsley:** that's because that's what I've named this particular collection, so it's on the, got it. Page, which we've now called chat at the moment where, okay, some, this is why it's not up at all because we, still sort out some of the naming conventions.

We called it chat and maybe we'll call it chats. I'll reconfigure this. But the beauty of it is, and it's the same with the tagging system of the base blog, is that it's automated for you. So when I need a new page, this is automatically going, yeah. It's not 

[00:32:33] **Nathan Wrigley:** gonna figure it all out for you. Okay. And it's 

[00:32:35] **David Waumsley:** going to, because of 11, it's going to put the.

The big previous and the next and everything can create that, then we can change what we call that, over here. So, we've got that all built in. and it's the same with the tagging system as well. This is built into the base bog. If I create a new tag on one of my posts, it's gonna do it, but that was just one of the little gotchas.

That I got into with that. That's, yeah, 

[00:32:57] **Nathan Wrigley:** in some respects I'm surprised that isn't built into the base of 11. But then again, you might not want, some sort of archive of anything. You might just want a five page website with just, the navigation in the top right of the desktop version.

So it makes sense not to have it in, if you're trying to keep things lean. Makes sense. Yeah, 

[00:33:20] **David Waumsley:** I, think maybe, it's, pagination does seem like something for the base blog because it is designing for blogs, but also we've gone down a different route slightly with this in the sense that you would generally have a blog and then you would have tags.

So I've used the tag. Oh, I see. Okay. 

[00:33:34] **Nathan Wrigley:** Got it. Yeah. Yeah, because 

[00:33:36] **David Waumsley:** still if, I go back into any of these. it doesn't matter. which one, you'll see I've got a tagging system, but it's also running into the tags. It's automatically creating. So any new tags that I put in my front matter will get a new tag separate to the ones that I've created for ourselves and looped here.

Got it. If that makes sense. yeah, that does make sense. Okay. So it's a, it 

[00:33:59] **Nathan Wrigley:** is a different taxonomy structure than, what I'm used to in WordPress, which obviously just handles all this out the box. There's, other ways of doing things in, eleventy with tagging. Okay. All right. 

[00:34:10] **David Waumsley:** Yeah. it's pretty simple.

Let's just go into the blog. One nice thing is that it's set up so contents of the area, so anything in there can get changed and all the posts are in here and I didn't know I could do this, but it's set up. Two, recognize anything in here so I could put a folder in without messing things up and organize our posts over here.

So yeah, a nice thing to do. And if I go over to, let's just go into the one we're looking at the moment we'll do, This is what I'm doing now is I'm able to, it's something I didn't mention last time round, so I put a little note, because when I was, if you met, I was creating a simple site and just to give you an introduction to the idea of collections and how you might create posts, I didn't explain the fact that my post names didn't match what my URL was.

[00:35:02] **Nathan Wrigley:** Okay. So we could, 

[00:35:03] **David Waumsley:** this is how you do it basically. So it'll sify. Nice five. Yeah. So I'm telling it to go into the permalink. Of build and this, and I'll just add to it. I've created a tag here. I could create many more and it will automatically create those tags for me. So if we decide that there's some crossover between the things that we're doing in our categories, or this other ones, I can put them in and they will just tag and create the.

The, pages we need. And the beauty is with the video id, that's how I've connected it up with the Paul Iris's light YouTube embed and bringing forward those images. I've now been able to put that so it goes in the metadata. So if as an open graph image, it could be used on the front page to automatically do it, and it's outputting as well to the individual posts.

So nice. Got it right. Yeah. Yeah. And there's another nice thing as well in there that you can do drafts as well. So if you put this as, I've commented it out the moment, but if I set this to draft true. I can still, I can still, do a build to the hosting work on this. It's not gonna show it until I either remove this or set it to false.

Okay. So it's, not going to, yeah. So it's gonna ignore it. So you can work on that useful, a 

[00:36:19] **Nathan Wrigley:** pending status, but there it is, ready to roll. You just delete that draft. Yeah. I'll just delete that out 

[00:36:24] **David Waumsley:** and then the next time I do an update to got it. As I would do to, it's going to do that. That's it. Let's, let me go back to the notes. Actually, I need to come back here. Okay. What, didn't we cover? Any questions that you've got so far? No, 

[00:36:39] **Nathan Wrigley:** all of it seems, straightforward isn't the word 'cause it's all very new to me and I would probably upend me if I tried to do it myself. But no, that all makes sense.

[00:36:49] **David Waumsley:** there is, the syntax highlighting is quite a nice thing that we wanted to put in, which came in there. If I just go into one of the learns over here and go into. Light and dark toggle here. It's got this wonderful way of, it's, used in somebody else's library, another 11 user.

So 

[00:37:10] **Nathan Wrigley:** this what we are looking at there, the code example that you're looking at. If you would just type that in as marked down, it would just look like. Any old text, you've what? There's a sort of plugin if you like, and that enables you to encapsulate that portion as, show me this as code instead, and then it'll, with a bit of CSS, it'll put it in a darker box and it will make the, it will format CSS so that the bits and pieces which you want to be in different colors, are in different colors.

[00:37:38] **David Waumsley:** Yeah, exactly. And in fact, let me just go over here. If I go to one of the learn examples and let's make sure I've got one with a bit of code in it. I'm sure there is somewhere, I'll probably pick the one. There's a bit of HML there by the looks of it. There's a bit of H ml, so we have these three back ticks and then you put the language that you want it to do that with and Put this in. So it's gonna be there. And that's the format with this. We've got some CSS here. Got it. Feedback ticks. We close 'em with BT ticks as well. And then we just put CSS and then it's gonna display that and what's happening behind the scenes, which allows me just to talk about snake else. I'm going off tangents, but, the CSS, so last time we did a video, we talked about the CSS and I bundled it all.

a Nun Jux file and included all of the different CSS style sheets that had into that one. Now I tried to do something similar, but I got into a mess and I just decided to use what's already set up in the 11 base blog, which I think is pretty cool. If I just go into, let me just open the this up. On the, let's go into our Includes, into our layout and into the base.

Okay. It does it all in the template here, and you have this kind of, there's lots of stuff and I'll probably have to stop 'cause it'll get. Too boring soon, but, there's a lot of stuff that goes on in here. So there's another bit of a sort of plugin if you like, which allows you to get a bundle by the URL here, and you can specify at CSS and then you can put this in here, what you want to include.

It's gonna send it all to one location, which is set up into another folder called the distribution, the dis. Folder and it puts it all together in that way, which is a slightly different way. But the nice thing about this is that you can also, if you wanted to have that as inline CSS on your page, you can just 

[00:39:35] **Nathan Wrigley:** have Oh, print out within the star sheet.

Okay. 

[00:39:38] **David Waumsley:** Yeah. And so it also means as is used as well on the base blog. Naturally it is actually printed in line. I've changed this now, so it puts it in a style sheet, but it does allow you say the syntax highlighting which we were talking about. 

[00:39:54] **Nathan Wrigley:** Yeah. 

[00:39:54] **David Waumsley:** Is one of the things that's, brought in. And in fact, then.

We're just putting that on the post. I think it might be showing here that, 

[00:40:03] **Nathan Wrigley:** So the, if, there's no, so for example, on a post, there's a high probability that you want c syntax highlighting for C-S-S-H-T-M-L, et cetera. and if you're doing it, if you're injecting that in line only when it's needed in this case, in a post, because there's a high opportunity that a post will have that.

But you could do it on a. Page by page basis, or a post by post basis. And yet the CSS file is stored in the same place in that little bundle. that's quite clever actually. I like that. 

[00:40:35] **David Waumsley:** Yeah. it's putting the distribution and then, so in this case it's been automatically set up In fact, it's pulling in that theme is what's given me the, coloring for the syntax highlighting.

Yeah, and actually there's another one in there which I've left as it is there, which just is the difference, the changes made to the original, but it's actually can pull these things in from the node modules themselves, rather than what you've got there. quite cool stuff. 

[00:41:03] **Nathan Wrigley:** Yeah, let me, yeah, I was just gonna say, do you wanna just quickly knit back to your show notes?

'cause there was a few things on that page. yeah, it was the one before. And then scroll down. What have we looked at? Were, no, where's it going? Yeah, so we, you've mentioned syntax just now, so I'm looking underneath the pros. The first bullet point there, pre-configure 11 plugins. So the base theme Comes with. Something to do with RSS. You mentioned image transformation. So you can throw a, an image in like an SVG and it will turn it into an A VI and you can configure all of that navigation enables you to do more complicated navigation syntax we've just seen. Yeah. Highlighting Id attribute an HTML base.

I, they're part of it. I dunno what they are, but Do you want to touch those or is it, you can 

[00:41:51] **David Waumsley:** see it here, although I might take it away. What it's doing is when it's seeing, because it's a good thing for accessibility. Yeah. Be able to link to headers. What this is doing automatically with the ID attribute, it's a kind of, is it a plugin?

I'm not sure quite sure, but it's included and I can remove it with one line. But basically where we see this, if we go into the source code, it's giving us an ID against this header as well. So if I look there, we've got the, it gives me an ID as well. Got it. Got it. Yeah. Okay, so we've got some, so instead of it 

[00:42:24] **Nathan Wrigley:** just being an H three, it's H three, whatever an idea of whatever the H three.

Is, so in this case the comms? Yeah. Oh, that's nice. 

[00:42:33] **David Waumsley:** Yeah. So on. I guess the only issue you might have is if you have the same title on the sec, but you shouldn't really ever have that should you? No. on the same page. That's the only problem with an ID there. Okay. But yeah, it's quite a nice thing, a little accessibility thing or way to be able to link to a part of your article if you are linking someone else to it built in.

You don't have to do anything. It's automated. There was a actually, and I needed to use this a lot and it's even for building a simple site first time round, I didn't really touch on the conditionals else if all the time. Okay. And that's a really easy thing to do with the nun ju. And I just have to now quickly think on my feet where there's an example of where I've done this.

I think I've done it in the base blog where I wanted to, in the base nex. Let me just have a look here. 

[00:43:22] **Nathan Wrigley:** So is this like an inline thing we're looking for? Are we looking for some line? Yes. I want conditional logic of if this the can't see anything. 

[00:43:31] **David Waumsley:** Yes. No you can't. Can you? 'cause I've forgotten where I might have put it.

Let me just have a look. Keep looking 

[00:43:36] **Nathan Wrigley:** on. We're fine. 

[00:43:38] **David Waumsley:** I don't know 

[00:43:39] **Nathan Wrigley:** the, the way it'll look, but I'm keen something. Hopefully. Okay. Oh, there was an end if there, right at the bottom. What was that end? If that was one of them? 

[00:43:49] **David Waumsley:** Yes. Let's have a look. Where are we starting with? You had an end, you had an if 

[00:43:52] **Nathan Wrigley:** right?

Much further up. Oh, no, If collections post. Ah yes. So I think it's not the one I wanted to further down near the bottom of the screen, right near the bottom is an if collections posts, and then obviously there's an end. If so, you've got an, you've got an if within an if here by the look. Oh, no, you don't.

You've just got. 

[00:44:13] **David Waumsley:** Yeah, I'm not sure where I've got to on this one. because you've got, now I can't remember what I've done, but, anyway, with all I wanted to, I, before I get stuck on what I've done here, I think there is my example, this is a perfect example. what I wanted to, when I didn't have, as you could see actually on the, that we're looking at, I don't have a video ID for the thumbnail for the YouTube video 'cause it hasn't gone up yet.

So what I've done is to say. Only if my front matter gives me an id. Will you print out what you need to blank. Oh, and I noticed that 

[00:44:49] **Nathan Wrigley:** was in the, that was in the front matter, that portion of text. at the top of the post you had a, I think it said YouTube ID or something and there was like the 10 characters of the slug Of the URL.

[00:45:00] **David Waumsley:** Yes. Of the YouTube was, it was. It was commented out as well. So that's why it's not, because otherwise it would take up the space of YouTube. Lemme me understand 

[00:45:10] **Nathan Wrigley:** this then if, that wasn't commented out and it was, so if you'd got a YouTube ID in the post Yes. And it wasn't commented out, so it did exist.

That if would say, does it exist? Yes. Okay. Now append it to the end of the YouTube URL and display it. So not only is it doing the job of whether or not to display, but it's also using the same, yeah, there it is. Video id, it's using that to 

[00:45:37] **David Waumsley:** yeah, declare whether 

[00:45:38] **Nathan Wrigley:** it should display or not, but also appending it to the URL.

Yeah. So if I leave this 

[00:45:42] **David Waumsley:** and I leave it below course, and if I take this off so it's there. we needed a conditional to show 'cause what's gonna happen now if I refresh or be, it's not, is it? Oh, 

[00:45:55] **Nathan Wrigley:** you need, yeah. You might need to clear some caches or rebuild the whole thing. The vague, I think I just need to rebuild it.

Yeah. But I trust you. I'm sure it'll work. Yes. 

[00:46:06] **David Waumsley:** Otherwise without that conditional, it would be showing, it would be trying to show, the, in fact, actually, I've hidden the head of one and I use the image to replace it. So generally that's the case. I get it though. That 

[00:46:21] **Nathan Wrigley:** made sense. the syntax of it and all is new to me and.

But I, see what it's doing. That's good. Yeah. It 

[00:46:27] **David Waumsley:** was worth mentioning that you could do, 'cause it was, you'd want that on simple things. And also something I didn't mention as well last time was the fact that there is these web components. So in Eleventy and I, skipped over it. There is something called Web C, which is Zack Leatherman's own language for using, web components.

And in fact, it's a web component which is creating, it puts around the main tag, which is creating these IDs combined with. The other Java script that it has there. So that's another part of 11tywo, which I really haven't got into. Okay. But it's another option for how you might put together your sites with, using web components.

[00:47:06] **Nathan Wrigley:** What I'm learning though, is depending on, so unlike, so Okay. The intention of WordPress was never really to put functionality in the theme, but that kind of did end up happening. Yeah. But in the theme, usually in the customizer, you can switch things on or off. Like I show the. I don't know, the author, show the, metadata for when it was published and what have you.

And what I'm seeing is something akin to that. Here you've got these plugins built inside of a theme, in this case, the base theme that you can switch on, switch off, configure how you like, but obviously it's much more like hands into the code and figuring all that out. But they enable you to add components to your website, your pages, your posts, add if statements around them, so they show or don't show depending on certain conditions.

And so you've got this framework for building. Based upon the exact same data, you can have a different array of things happening on the pages with these plugins. okay. I'm, beginning to get it a bit, I think. 

[00:48:06] **David Waumsley:** Yeah. Yeah. It's, most of the time, it's the, that's the downside of with the starter thing because when you start to remove things, you really need to know how the directories are being set up or what plugins, but I'm probably not.

Entirely there, but I think I've now learned what's there. you're calling in, as you see, these are kind of plugins are called in at the top here, import these kind of plugins. Oh, there's the RSS 

[00:48:30] **Nathan Wrigley:** one and navigation. Yeah, Okay. 

[00:48:33] **David Waumsley:** and yeah, it's wonderful. And then filters have got some other things that're all built into it.

So there is a bit of doing this, but I was surprised how far I've got and how confident I feel. And it's a little bit, saying about that. There's a couple of points where I'm really excited. I got excited about WordPress at the time. One of them was when I first started doing my own themes, and that feels a lot like that.

And then the other time was when CSS got really difficult and I've discovered page builders. So I've got like this kind of, it feels like going back to some old days where I, yeah, made powerful, helped a little bit with ai, but, it does mean we. No JavaScript skills. I've been able to do some quite complex stuff already.

[00:49:15] **Nathan Wrigley:** Nice conditions. Yeah. So it's not, I enjoyed it. How, are we doing with the show notes there? Have we got through what you wanted to say? I think so. Like we had 

[00:49:24] **David Waumsley:** maybe, yeah, I think so. There was a couple of things I just wanted to cover. I think I thanked who I wanted. There's more to show you, on this.

Maybe I'll just do a short video if there's something that's missed out on this. Okay. That I think might be useful. But, otherwise I think we've. Probably, we've done our best to try and cover what, 

[00:49:41] **Nathan Wrigley:** yeah, that, that looks good. So the, endeavor there was to show what a, theme can do, in this case, the base theme inside of 11ty.

But there were loads of options, dozens and dozens of options. Some more minimal looks like, some less minimal. and David showed you where you can get those. As with everything, the, the bits and pieces, the links that you just saw. Will be available for your dilatation, over on the no script show, 1111 based website at some point in the year 2027.

[00:50:15] **David Waumsley:** But there'll be a 

[00:50:15] **Nathan Wrigley:** link to wherever you can get the 

[00:50:17] **David Waumsley:** notes in 

[00:50:18] **Nathan Wrigley:** the 

[00:50:18] **David Waumsley:** YouTube. Yeah. Comments? Okay. Oh yeah, of course. 

[00:50:21] **Nathan Wrigley:** yeah, Thank you. so look in the, description of the YouTube video and go from there. Basically. Yeah. Okay. Is that it? Are we wrapping that up? I think so. 

[00:50:31] **David Waumsley:** I 

[00:50:31] **Nathan Wrigley:** think so.

I think it was useful. Yeah, it was really interesting. Honestly, the more you talk about it, the more convinced I'm that I should give it a go if only I had 50 hours available to meet. Yeah, exactly. It does take some time. Yeah. All right. I'll see you next time, David. Thank you. Bye bye. Thank you. Cheers.

Alright, bye-bye. Bye.

</details>