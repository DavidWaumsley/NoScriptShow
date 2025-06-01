---
title: Modern CSS layouts
description: The W3C on CSS layout and how it might be easier than we think.
date: 2024-01-22
tags: ["chat"]
permalink: "/3{{slugify }}/"
videoid: Q1g--a_hrXQ
---


 Show notes
----------

Here, we are looking at the principles of modern web layouts and to understand that we are referring a talk by Rachel Andrew from 2019 called ["Refactoring the way we talk about CSS"](https://noti.st/rachelandrew/wuKH4y).

She writes:  

> "We need to look again at what it is to learn CSS. We need to leave our old ideas behind. It is only when we do, that we will stop supporting the idea that CSS is the fragile, broken, quirky language that its detractors would like to believe."

Her talk shows how CSS has become a logical system and if we understand the problems it is solving, it is far easier to understand.

### General Points on CSS layout

Modern CSS layout:

*   Has progressed from a series of hacks to a logically refactored system.
*   Is partly reclaiming the universal and responsive web we started with.
*   Reminds us that "What we see is **NOT** what they will get".
*   Gives us resilient superpowers and creative freedom we have not had before.

### Specific Points on CSS layout

Below are the topic covered in Rachel Andrew's talk:

*   [Flow layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
*   Changing the value of [display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
*   [Out of flow elements](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow)
*   [Writing modes](https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode)
*   [Logical properties and values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values)
*   [(Box) Alignment](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_alignment)
*   [Sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values/Sizing)

We have linked above to the appropriate [MDN web docs](https://developer.mozilla.org/) where Rachel is also a key contributor.

### Useful CSS layout resources

*   [Grid by example](https://gridbyexample.com)
*   [1 line layouts](https://1linelayouts.glitch.me)
*   [Every layout](https://every-layout.dev/)
*   [Video: building this site 1. Layouts simplified.](https://youtu.be/ANg1d8wO3Pc)

<details>
<summary>Transcript</summary>

\[00:00:05\] **Nathan Wrigley**: Hello, and welcome to the third episode of the No Script Show. I'm joined, as always by **David Waumsley**. Hello, David.

\[00:00:13\] **David Waumsley**: Hello Nathan. How are you?

\[00:00:15\] **Nathan Wrigley**: Good, thank you. The No Script web show is all about modern frontend web design, and we're gonna be looking at what we can build today with minimal dependencies and skills. Today we're looking at the principles of modern web layouts and to understand that we are referring to a talk by Rachel Andrews.

It comes from 2019 and, the talk is called refactoring the way we talk about CSS. You'll be able to find links to that in the show notes on our website. Rachel Andrews is a prolific technical writer, editor, and speaker, and an invited expert to the W3C's CSS working group. We'd need a whole episode to do a justice, but she's probably best known for her tireless work on CSS grid.

\[00:00:59\] **David Waumsley**: Over to you, David. Yeah, you might as well bring up the show notes, that we've got. We're gonna start this one by, in a way, recapping what we're going to talk about because. When we're talking about layouts, for me that's always been the most difficult thing of trying to just do something with the web platform alone.

CSS, when it comes to layout, has, been difficult. And if you scroll down a little bit, Nathan, for those Sure. On YouTube, we've got just some bullet points, about. we just wanna sum up, and that is really that modern CSS layout. What's changed really is it's gone from being a series of hacks, to what is now, and it's really in a talk, a logical refactored system.

the main thing we're trying to get over, in this, or what I've needed to learn is that. Web design is so much easier if you're trying to work with just CSS and HML if we understand the actual system and what problems it's trying to solve. So largely that's what we're trying to do.

There's a wonderful quote there. I dunno if you want to read that, Nathan, that. Yeah, I can do that.

\[00:02:17\] **Nathan Wrigley**: this is the quote from the, video of Rachel Andrews and she says, we need to look again at what it is to learn CSS. We need to leave our old ideas behind. It is only when we do that, we will stop supporting the idea that CSS is the fragile, broken, quirky language. That its detractors would like to believe.

\[00:02:36\] **David Waumsley**: That's quite powerful, isn't it? It is, and I think that was, at that time, her focus was to try and get us to not see it as these old, wonky tricks that we would do, hack together our sites and, to look at the system, which of course used to be very much a part of when it comes to layout with.

Her work on, CSS grid. But, and I think that's also one of the main things I take away from this, and not just her and this talk, but other people saying the same about kind of modern CSS is that it's, we see it often as kind of meeting the new challenges of today, the fact that we have so many different devices and we need to have our layouts work on it.

It's a little bit about reclaiming the universal and responsive web that we always had from the start. And I think this is something which a lot of people are trying to get over in the first place. When it came out until we as people who tried to do graphic design on it, it worked already.

It would fit and expand. To, whatever screen somebody had and for me as well. Another point I've put here maybe sounds slightly contentious, it's a bit of a reminder. I think when we talk about layout, that a reminder to the fact that what we see is not what they get. 'cause we used to, and that's our background, isn't it, with you, with builders, is thinking from.

We see the pixels on our screen, and now with modern responsive design, we have to get away from that and particularly if we're gonna learn the new stuff, Flexbox and grid as well, to be able to do that. So that was that. it's, I think it's some ways when we get into that mentality, it allows us to think, and this is where I feel.

All the spec is going is to serve the users of the future. If we set something up where we allow the browser with the spec that we use to do the clever calculations on our behalf, then I. It's it means that we're future proof and we were future proof anyway if you're just using CSS, but it's gonna allow for new devices to come in. So it's a different mindset. So there's that.

\[00:04:56\] **Nathan Wrigley**: Yeah, it was interesting watching that video. There were a couple of occasions where she alluded to that I, can't remember the specifics, but in the video a couple of times she said something about things as yet unimagined. And yes, that's quite a forward-thinking mentality, I think.

\[00:05:12\] **David Waumsley**: Yeah, and it's the way they're going. And fa this is a bit of an aside, but there's a really interesting talk. I, really should put that in the links. It's from a CSS Day conference back in 2017. Where at Comb William Lee, that's how you say his name, I'm never quite sure. He is a. Norwegian, I think actually Abert Boss who were the creators of CSS discussing the kind of, the thought process behind what they were doing.

And one of the, questions at the end were, it was the guy who was talking to him saying that he trains a lot of people's students to have to learn it. And they get frustrated with css. Can't, it's a visual thing. You're trying to create style on stuff, why don't we have an editor and what I didn't.

What I wasn't aware of is that kind of stuff had been thought about, but the argument was that you can't avoid it. You have to, even if you do work visually with something, you still have to understand the underlying code because of simply. What is not what they are going to get. It needs to be entirely responsive.

So what is just what your device is showing you. And that may not be the same for others and other people in the future. so that's, so even if you've no thoughts about ever doing the coding yourself, an author, in it, it's good, I think to know the principles underneath.

\[00:06:38\] **Nathan Wrigley**: Yeah. The, whole thing about devices, it is really interesting because who knows what kind of devices we'll have in the future, and we seem to be, certainly lot the mobile phone manufacturers are launching these kind of flip phones where it's almost like a book and it opens out and the screen interface is actually a square and no, nobody has a square interface until now. So just freeing yourself from the constraints of, okay, it's gonna be viewed in this particular viewport shape is quite interesting. And the endeavor for a lot of the underlying things that we'll be talking about over the weeks to come.

\[00:07:16\] **David Waumsley**: Yeah, and the, final point that I put there was just that modern CSS layouts gives us this kind of superpower really in terms of, again, Designing for the future, programming for a flexible web. So it can be used anywhere. But also I think, and we'll get onto that more I think next week, is the creative freedom that it can give us in the sense that now with a lot of the layout systems we're designing to all four corners of the page.

We're not, we were always top left and working down. Yeah. And we're restricted by that, but now we can design. So if you are. moving your screen horizon, vertically up, you can now have things responding in a different way. So it does really open up a lot of creative freedom that really wasn't there until now.

\[00:08:04\] **Nathan Wrigley**: That's a really interesting observation actually. So yeah, the idea that in the past it's always been, if you're a left to reader, it's from the top left pixel to the bottom right pixel, and that is, that's the layout that you're working with. But with these more modern approaches.

Really anywhere's up for, you can put anything anywhere. You don't have to begin in that top left hand corner. It could be any part of the page. yeah. Because of all of the different ways that you can position things and yeah. We'll be learning about those.

\[00:08:37\] **David Waumsley**: Yeah, we'll get to that. 'cause I think that's, from a designer's point of view, Jen Simmons, who will.

We'll talk about next week from her perspective that she's been doing a lot of that with her layout land. it's quite older stuff, but things where they are just using the design for all corners and we've never really thought like that because the tools haven't been there, Yeah.

We'll talk about next week from her perspective that she's been doing a lot of that with her layout land. it's quite older stuff, but things where they are just using the design for all corners and we've never really thought like that because the tools haven't been there, Yeah Good point. Anyway. Should we move on to Rachel's talk? you might need to scroll down just to get our main points on this. There you go. And this isn't enough to put anyone off, isn't it? Whether the title's there. So Rachel's talk is a bit technical, isn't it?

\[00:09:16\] **Nathan Wrigley**: Yeah, it's about, it's probably about 45 minutes long, maybe 46, 7, something like that. And, it is, fairly technical, but it is not going at breakneck pace. There's plenty of time for breathing and taking it all in, but it's very, powerful. I, warmed to her as an individual during that video. I, thought she was an excellent, proponent of what she was talking about.

It was nice, calmly delivered, easy to understand. But there is. There is a lot in there, so you might need to like, I will need to, I think there's gonna be an awful lot of rewinding and starting again and pausing and taking it all on board and, but it never gets too technical. You've only got one or two lines of things to take in at the same time.

\[00:09:58\] **David Waumsley**: Yeah, and I, and honestly, I watched it a few years back the first time, probably listening to it, a double speed or something as I tend to do with these things. I thought, yeah, I nailed that, I know what that's about. And then I came back again to it and thought, honestly, I missed the main points of it.

So I'm gonna pull out perhaps a little bit more, watching other people talk about the very same thing and also what other things that she's talked about that's added to this. So I think the key thing. About trying to understand modern CSS layout is the first point we've got there, which is understanding flow layout, which is that default that we have because, and a lot of people are making this point, is that we have a good start straight away with HTML and the browser zone style sheet, the user agent style sheet that goes on that, It gives a little bit of minimal styling into our sites. And what we've done in the past is we've generally, as designers, seen this as no layout at all. And yeah. That's interesting. Yeah. Yeah. And and what that's led to is really that we give up, some of this great. Power that it has because it's there, it's designed.

The original, browser that was created by CERN that we're gonna use was a graphical interface. They actually dumb that down to something where the texts would, if you like, squeeze to, depending on the device that was viewing it. So it, the, obviously the text would wrap around And the content would get lower and no one would miss seeing any of the content.

So we have a pretty good start there. And it's only really when we started adding Wister things and sticking stuff in tables that we broke what was already that responsive. web design, Yeah. But obviously we wanted it to look a bit prettier, but I think that's a real good point here.

And I think although she doesn't make this point, it's one that I've come to the conclusion of after listening to her and many people about, because of the fact that so many of us are on small devices these days. Probably about 60% of the web in total are. Probably only going to see something that is very similar to what we had in the first place, which is one column with everything vertically being scrolled to that, we might want to think about how much design we do for.

We might start from that mobile thinking first and only get a little bit more complex from normal flow. As we need to.

\[00:12:30\] **Nathan Wrigley**: Yeah, that is, novel, isn't it? The idea that th 25 plus years ago, whenever that all happened, yeah. Everything was just in this one column layout and now we've got back to the point where I

That most people, I think you said, what did you say? 60% of people are now, viewing the internet on a handheld device, a mobile phone or something equivalent. Where we're back to that. We've just got this one column design that's curious how, that's how that we've come full circle.

\[00:12:58\] **David Waumsley**: I. Yeah. And in some ways, and you could see it on this site, we're on a single column anyway on this. and I did add in a new page. Now for people who are just listening to us, this won't make sense, but I dunno. If you want to, Nathan, just, have a little look at, the, I don't know, take one or the other.

\[00:13:16\] **Nathan Wrigley**: Yeah. If you go to, shall I try this low layout one?

\[00:13:19\] **David Waumsley**: No, if you go to the main menu, that's Oh, I see what you mean.

Yeah. Apologies. So you, okay. Yeah, so all we're doing on this site here is most of this site is just normal flow. basically just centered it with one line of text and the rest of it, and where we needed it to go into multiple columns. then we can use grid just to expand it out. And if you're watching on YouTube, you can see that Nathan showing that this is, again, effectively one line of code introducing grid.

the basic site, which of course we will design as we go on, is really keeping to that simplicity of starting with normal flow on the first page, and then pages that need it or sections that need it. And the same one line of code is being used for this and the resources page, if you ever go to it or the little, SVGs of us, Nathan. that's in two columns.

\[00:14:15\] **Nathan Wrigley**: Where are they? Oh, they're not there. Let me find those. They're on the home page, I think. Yeah, there they are.

\[00:14:21\] **David Waumsley**: Yeah. Yep. And they're on that. Anyway, sorry for the people who are listening to this only, it's not gonna make much sense, but, no, it's a good, it's

\[00:14:28\] **Nathan Wrigley**: a good lesson that this, chat is, partly audio, but also there is gonna be a always, I think, a slight video component to it.

And, we'll be showing things. So you'll be able to look on the, the website, no script show. Yeah. But also you are gonna be doing bits and pieces on video, which. go alongside some of these episodes and maybe, you'll even do one, over here. So go and check out that website if you are listening. And it's confusing you. It is a, is a very visual subject, I'm afraid.

\[00:14:59\] **David Waumsley**: Yeah. And I will do a video just showing just how sticking really to the things that are in this about normal flow. I've tried to use that as much as possible before we've got a design because it's still functional. And then we've needed to add some new pages for the episode.

So I've needed to pull in some grids, some very simple grid. Anyway, let me move on to the, shall I move on to the next point that she's making about, on our notes, which was just display. So display is the property now that gives us access to other things other than normal flow. And the interesting thing about normal flow is it works as its responsive and everything goes back to it.

So if we go to our display property, then we've got some options. The best known are going to be Flexbox and Grid. They, so Flexbox is generally a sort of one dimension, layout things. It works slightly different to Grid, where it's takes the look at the item and arranges that in the best order. In fact, it's there on the menu.

So there's flexbox on that. The easiest way to just get, ordered list, which would run vertically to turn into something that runs across the top is to just stick flex on it. And if there was more of those in there. text wrap and that would send it down to, the next row under there. So it's still working with normal flow and grid, as we've shown here, is two dimensions.

You can work in the grids and the rows. So really our it, our thing is to be using the. Display is the way to now do layouts. That's where everything is changing.

\[00:16:39\] **Nathan Wrigley**: Can I just interrupt there so that I'm clear because I am the poor relation in this, chat series. I'm the, sort of sto who is gonna be trying to keep up with, David as he pushes forwards with all of this.

So forgive me for the interruptions, but just to be clear, the flow layout is the bedrock of. Everything. if, everything is stripped away, flow is gonna work because that's what the browser is instructed to do. It will all work on this flow layout if you want to go away from flow, so one thing going horizontally under another.

If you want to move away from that and have things side by side, we're then into the domain of display. And display has then got, there's a whole variety of ways that you can do that. But the popular, display mindsets, methodologies are flex and grid, which in many ways overlap. But there's different ways that they handle it. But have I broadly got that about right.

\[00:17:40\] **David Waumsley**: Yeah, absolutely. And that's usually what we're moving to. And the interesting thing she makes it in a talk is the fact that we always revert back to normal flow anyway. So when we say put something into a grid of two columns, We do that on say a container element, we'll say display this container element into grid and say we want it into two.

But everything that's within those two element, those, children Yep. Yep. Will then revert back to normal flow. So we're, it's always good to think, understand normal flow, how that works, how that's built. The hub of basically inline and block content, which stacks vertically.

\[00:18:20\] **Nathan Wrigley**: Again, okay, so just to be clear, so if we, if, we don't do anything, we're in flow layout, and flow layout is just, everything's stacked one on top of the other then.

But if, we then have a, component on the page, let's say, two side by side boxes for one of a better word, they're positioned side by side using display and there's a variety of ways that you could do that. But then if you don't do anything. What will be inside the display will immediately revert back to flow.

So if you don't instruct it to do anything, it will automatically, the browser will say, okay, we're back to flow layout. So you've got flow at the top of the tree, then display takes over, and then if you don't tell it to carry on, displaying in a certain way, we're back to flow.

\[00:19:06\] **David Waumsley**: The elements within, so the, you'll put display grid, say, and then you'll put that on the container that will be its child and all the elements of that will fall in line with the grid.

But those within, inside that the grandchildren, if you like, say right ahead of two. And some paragraphs that were in those columns, they will default back to normal flow.

\[00:19:28\] **Nathan Wrigley**: And I suppose that's, a sensible default, isn't it? Because the, typical. Purpose, I suppose at the beginning was just text, more text, gimme some more text and that's how text ought to behave. It just, it flows down the page. yeah. Okay. I'm keeping up so far I think.

\[00:19:46\] **David Waumsley**: I think there's maybe one thing that we should talk about here. 'cause she does allude to it a little bit and I think she's. Since the talk that we were looking at, she's perhaps become a little bit more clear about how if we'll discern learning layout now she, she makes a big point that they're not in competition.

Flex and grid do very similar things, But they are, if you like, not in competition, but just options in the same system, which have their strengths and weaknesses. One, of course is one dimensional, the other one is two dimensional. but I think she, I. As I came in not really knowing either of these, I've now come to the conclusion that it might be easier.

And she mentions this to, to look at grid. Grid in some ways is easier to understand and flex if you try and follow people to learn that, you have to remember that it's had all of these years, maybe eight years before Grid was fully supported for people to build up ways of using Flexbox to create grids.

Yeah, so you can end up learning a lot more about Flex than you might ever need because it's useful in certain circumstances. And I use it, the menu being an obvious one where. It adapts to the elements that you put in. It takes notice what you've got the content and works out. yeah. Anyway.

\[00:21:03\] **Nathan Wrigley**: Yeah. So are you saying that, the two are not mutually exclusive? You can, you could have a page and liberally sp sprinkle it with flex and grid. It's not like you need to pick one over the other, but there are certain scenarios where grid would be a, better choice. And there are certain scenarios where.

Flex would be a better choice. And, in, in this case, a menu, would be good for flex because it's, it's one thing next to another until the viewport collapses, and then it, it immediately is one thing beneath another. Yeah. And that works really well because it's not, so opinionated about where the bits and pieces should be.

\[00:21:40\] **David Waumsley**: It's, I mean there's reasons why you might probably start with Grid now. It would, it'd be nice if they came out at the same time and they do have their differences when you know them. And we won't get into them here. But in some ways, if I was starting, I did start with Grid and it's been easier doing it that way round because Oh, okay.

\[00:21:55\] **Nathan Wrigley**: That's interesting. I was gonna say, is there one which is. Probably more likely to be used more than the other. And I think what you're saying there is grid probably fits the bill for most things. Okay. All right.

\[00:22:08\] **David Waumsley**: Yes, because you can lay out a whole page where you effectively working in one dimension, one row at a time.

Mostly with flex. Yeah. they're both still very useful for different things. she's just doing a talk a little bit about outflow elements, but I'll just skimm over that quickly. But ju really what she's saying is this is what we had in the past. So what we would use as, we didn't have a system for it, we would, for well long time we were using tables, which semantic, that's Htm l tables, although that wasn't correct.

And then we moved to floats and for little time. we were doing a lot with absolute positioning as well. So these two things are outer flow elements, so you end up with a big problem. So floats was the way, only way to do things. You would float things left and right. Yeah, and then you would always have this issue because she shows in her talk about how you don't necessarily see it. If you see an image being floated to the left of some text, it seems the text wraps around it, but in fact it comes out of its box and the text below it moves up to the top. So it goes out, out of, flow.

\[00:23:17\] **Nathan Wrigley**: Yeah. It's hard to describe, but just seeing it once you'll get it. Yeah.

\[00:23:21\] **David Waumsley**: Yeah, exactly. And and for that we always needed all this kind of clear fix stuff and she talks about a modern day solution for that, but really it's. Needed for layout as such. So that's gone absolute positioning. Interestingly enough, it's again, ham Lee, the creator of, CSS admitted if there was one thing that they shouldn't have put into, CSS, it would probably be absolute positioning.

Oh, it's, yeah. Yeah. I agree. Because it takes everything completely outta flow. Yeah. And then you take the whole responsibility for the browser and all it does for making things fit together. Do you remember, I dunno if we never talked about this before, but Dreamweaver Oh yeah. And they had a thing called layers for a while.

\[00:24:11\] **Nathan Wrigley**: Oh, I don't remember that, but okay.

\[00:24:14\] **David Waumsley**: It was the most magical thing to me. I was starting then, it was about 2000, I dunno, five or something, and it came out and you could just move anything around as you wanted to.

\[00:24:23\] **Nathan Wrigley**: And it was just absolutely positioned. Was it? Everything was.

\[00:24:26\] **David Waumsley**: Yeah. Absolutely positioned. Same way as Wix was built in the early days, you could just. Move stuff around. It was like a, an early page builder. But even.

\[00:24:34\] **Nathan Wrigley**: But that, was also back in the day where everybody was looking at things on a desktop. Yeah. And you could rely on the 768 pixels being the minimum.

And so every website was, that big and probably no bigger. Yeah, I remember. I remember. But I don't, remember that tool, but I remember, learning, Dreamweaver and then realizing soon after I'd learned it that I didn't need it anymore.

\[00:24:58\] **David Waumsley**: Yeah. Oh no, it was fabulous. That it seemed fabulous.

And then you realized, of course it wasn't responsive at all. Then you've got stacking issues. Yeah. sorts of stuff. yeah. The next point in talk is really, and this was, I mentioned this before, writing modes. Now, once you've got established flow and the fact that everything is a box of some kind and that things are stacking vertically, as blocks, although elements are blocks, writing modes throw.

Because you could change the direction. These are flowing your blocks and your inline, and the reason for having these kind of routing modes, which most people just use to create special effects where you might have your text, going up and down instead of left and right. Yeah, exactly. But really it's there and it's part of, The thing to have internationalization as the whole group in the W three C that work on that and and talk also to the working groups on CSS about how to do that. And this is, to make the worldwide web worldwide and support all those other kind of languages. And also support that when we write our sites, if we need to put them in another language, that we can actually convert that same.

Layout system easily to the new language mode. And that's where writing mode's become, I think, really important. The, fact that we now use, logical properties, so we stop talking about. Top, bottom, left and right and notice that every element now has got, a new property and value with it, which is starting with block start and end.

Start and end. Yeah. Yeah, And all that. I've moved on to the next point with this, and I think that's really important because if you, if everything is marked up like that, you can retain. The design and have it all tilt another direction for the language. So you can imagine if you, you have to support multi-languages, how difficult that would be if you've marked everything up as left, right?

And then you have to go and create that same design in another language and reverse all of that manually. You, now, you could be able to switch. So I think that's, and that really, informs how everything is working. Grid and Flexbox. So it's been out there for a long time. Flexbox, started with talking, everything in terms of the kind of block inline start and end in some ways.

So it's been growing and definitely a grid is that. So in order to understand that, I think we have to understand that, that we now have these logical properties, which. and values which go, which are flow relative, they change as your writing, writing mode changes.

\[00:28:00\] **Nathan Wrigley**: She does. Rachel Andrews does a fabulous job of, explaining that, but obviously, she's got a video.

yes. and she does it with a bunch of. Basically boxes with little bits of text in. And you can see how when you flip them over onto their side, through 90 degrees. So instead of it being, one way, it's a another way. And she, shows how you can, how, it can then be used for layout.

And it's hard to imagine at the beginning when writing mode was created. It, I'm imagining that there was no. Real sense that it would be used for granular layout properties, more that it was just, that you were writing from right to left or left to right and for top to bottom or whatever the permutations are.

But it's interesting, it gets really complicated and I'm wondering how much I. That is used in the wild in design, because I guess you need, so it can be used purely for design to make things quirky and interesting. But I'm wondering if the actual writing mode is used a, great deal, for its intended purpose, which is, actual writing going in different directions, I guess on multilingual sites. It's used rather a lot.

\[00:29:14\] **David Waumsley**: Yeah, I think it's gonna be important and of course. When Rachel was doing this talk in 2019, at the end of it, she really had to make some reference to support because if you are to be doing things right now, we have to get rid of. And it's, quite a hard habit to get rid of, because I've been using, margin left and right or Yeah.

Yeah. For a long time. And, there still is a slight issue 'cause I think we're roughly at the time of recording this, we're about 98% will support all your kind of logical properties. And values. So that still does leave some people out, right? And she just made reference to the fact that you can at that time introduce it through an app support, feature query where you can, code it up that way, but you would've to code it the normal way for old browsers.

At this point, I've decided that those 2%, and you have to remember actually, if you look at floats, which has been 2002, if you actually look at, can I use for that? It's got, I think something like 97 point something percent. Oh, still? Okay. Okay. Yes. Because you can't really take that as a good figure for stuff and you'll find other things like, Flexbox as well, which of course all of the page builders we've known and loved are, are working basically on flex.

They wouldn't have existed without it, still has a fairly low support. So I've really made the decision that. Okay. If my HTML is marked up and it's a bit of a jumble, they still should be able to read it. We'll still progressively enhance, and I've jumped entirely on board with using multiple properties.

And I think it's probably time to do that. Yes. She moves on to, I think I, that's covered that. We'll move on to box alignment, which I don't think. I have any hope of explaining very well, partly because it confuses me still and I have to look up articles and then play around with dev tools, but it really came in and this idea of being able to justify items and content came in with Flex and it used to be called Flex then same as end and start used to be flex end and start now.

Box alignment now it is its own, module in CSS and so it's, it gets, its sort of properties being shared amongst flex layout and table layout and grid layout. So there's something there that we can understand, but it's, I won't go into great detail on it, but you, anybody you work with Flex will probably know that you can, when you've assigned Flex to.

Say container and you've got some dibs within that, then you could then instruct those how to behave. But you can also instruct them to those contents to align in certain different ways you can put space between them, because all of these are working in the way that we didn't used to design. So when you thought about it, we would design a page with.

Dimensions, and we would say, this box is gonna be this side, that size on this side, and on the left hand side is gonna be this size. And then we're putting our content in there with some space. Now we're really thinking as Flex does and Grid does, it thinks about it provides. As much space as is needed to contain the content there.

And the it will flow and then we have to adjust. So we reverse our logic from, it's the size of the content that matters rather than the box that is in. and often how you can arrange this stuff. So Flex has this way of stretching out too. To fill out the available space that it has, and it's not set in pixels.

It'll just adjust according to what the user comes with. And justify items is great. And align items, solves. One of the biggest problems in web design before we had it, is that you couldn't align items. Vertically, yes. Yeah. To the center. Couldn't to the center.

\[00:33:04\] **Nathan Wrigley**: The center of anything was a nightmare.

\[00:33:06\] **David Waumsley**: Yeah. Center of anything. So they solved this with alignment. So you can choose how they align, whether they are, justifying to the left or the right or the middle, or aligning to the top to the bottom. Why I won't go into this is because there are slightly different ways that a flex and grid work, it's easier to understand with grid.

Than it is with flex, because Flex has a cross axis as well as its main axis. And if you are thinking about writing modes and block, you can easily switch it upside down by going to columns. And then if you are thinking writing mode, just switching it upside down again. Okay. So Grid is probably a lot easier to understand when we come to, justifying items, but that's it really.

\[00:33:48\] **Nathan Wrigley**: But it's another choice, right? It's another quirky way of laying things out. A box alignment. Yes. you can implement this. I dunno. I can't off the top of my head. Imagine a use case right now, but it's there. It's in your arsenal. yeah.

\[00:34:02\] **David Waumsley**: Yeah. it just aligns, you can put space between automatically.

So let the browser, if you want things to move something right over, one example, particularly with Flex or something, you might have a logo on your left and Oh yeah, that's a good example. Yeah. On your right and you can make it so you can justify those items. So something align to left and the right and the space in between will be.

Decided by the browser itself because you set it up with your justify. Yeah. I think one interesting thing on this is, this is because it is a spec now that stands alone and in theory it should come to block layout, normal flow layout. But it hasn't till now, and it's behind as we speak now.

It's behind a flag in Chrome. So it's come in, is the fact that if you wanted to center your actual content in a container in the middle. Which I'm actually doing on some of our content there. on the site, you couldn't do that without throwing Flex in, so you could get that justify the Yeah. The content to the center and have an absolute center.

that's now coming to block layout, so you might not need to do that. So it's something that you have to spend a lot of time with. And if you go to Dev Tools, they've, they're brilliant because they give you a way of just being able to click on things. Yes. Out the settings, so that's fabulous.

Okay, I better move on. sizing Rachel. Andrew says, this is probably the thing that would need to be concentrated on the most, or this is the biggest change. So if we get to. Sizing when it comes to flex and grid. Really they are trying to stop overflow, which is the thing that we broke with normal flow when we started to put fixed widths on things.

Widths on things. Yeah. Yeah. And this is really, if you like, its main job of allowing us to design with grids and different layouts. But not have this overflow. So there is that classic meme everybody must have seen where there is a box with CSS is awesome and some of the awesome is leaking outta the box.

And that's probably most people's experience of working with CSS before flex and grid and understanding it. Yeah. and I think the key point that she's trying to get on is that everything in those is defaulting to auto. It's making it squishy naturally. And in order to do that, we have a whole load of new sizes that we'll use.

So when it comes to grid, we will have a fraction, which isn't like a percent, because if you get percentages and there's some, overlap of padding or margin or something, you have to calculate it to really difficult things. This will just take up the space and. Fr a fraction is the same as what grow would be to flex, and it's something that will adjust.

We have minimum, maximum content. we have autofit and auto content and all of these great new ways of basically being able to lay things out without. Specifying an actual pixel value for things.

\[00:37:01\] **Nathan Wrigley**: Yeah. Which is nice, isn't it? Yeah.

\[00:37:04\] **David Waumsley**: And that's pretty much it, really. So I could just mention when it comes to, if you're looking at the site as it is at the moment, obviously it's not much of a design there, but it has got those layouts and it's simply is making use of what's in this tor on the whole, it's just looking.

Essentially, I've just got a couple of lines. So it's normal flow for most of it, and all we're doing is putting a, margin in line of auto and then we're fixing a minimum width to it and a maximum and a bit of padding, and that is. Most of it. And then when needed, we needed the grid to go into boxes, which went from three to two to one, depending on your device with the boxes.

Then there's a wonderful trick that you get with, grid now where it's called ram. They use it and it's Autofit. MinMax, sorry, it's repeat. AutoFi and MinMax. So basically you say repeat. You keep growing boxes. As they scroll down, the more boxes you have, they'll just keep going down and form in. Other rows.

and then you've got Autofit. So the content's going to automatically fit accordance to the figures you give it. And then what you can do is put a MinMax. So you say it's maximum of this or minimum of that, and everything beautifully responds with no media queries to deal with. So yes. Nice. That's, I don't know. Nathan, do you think I've at all covered modern CSS layout?

\[00:38:30\] **Nathan Wrigley**: Yeah, I think you've laid it out. I think it would be important to, to probably watch the video and then also, if you go to our website, no script show, and you click on the episodes link in the top and then hit. Number three. I think we might change the URL structure of the website at some point to make it easy.

But for now, click on episode number three and there's all these, links here, which will take you to the different documentation for each of the pieces that David talked about. flow, layout, display, all of the other bits that we mentioned. and that's where to explore it. It's hard to explain that stuff because it's so jolly visual.

But the video certainly does that, and the developer docs will definitely help as well. It's a hard subject. Like I said, I watched that video from start to finish. I'm gonna need to watch it several more times before I think I've got a grip of it, because although the concepts have delivered really well, they're a little bit.

With my old brain, they're a little bit difficult for me to, to take on board on a first pass. But, yeah. That's great. There's loads of new stuff in there. Yeah. I'm wondering, if anybody is listening to this, I'd be curious to know. Curious to know which of those bits and pieces A, were you aware of, feel that you've got complete command of, or which of these are just things that you've never explored because you've got a, I don't know, a tool, like a page builder or something like that, which means that you don't have to, but it's gonna make life easier.

All of these things, once you've got your head round them, a lot easier.

\[00:39:57\] **David Waumsley**: I think so, and interestingly for me, because I, as you say, I couldn't really explain a line. I have to play around with it. And I see some of the experts as well do that. They, mix up when it's an aligned content or items, what's the difference?

They, just try both and I think people like. Rachel, Andrew would be the first person to say that, when she's doing something, she might throw flexor in and think, nah, that's a problem. I'll throw grid at it. They don't necessarily know exactly where it might be useful. But here's the interesting thing that might be offputting, and it sounds like you need to learn a lot, but I've done three clients sites doing them with almost no knowledge and just a few of these little tricks that I'm pulling out here, and I think you don't need to get in.

Depth and I think where things will probably go for the future for those people who still want no coding, I think it's very likely that we'll see instead of having the big frameworks like Bootstrap that we have now, where you have to buy into the whole thing there. I think particularly with things like layers come in and and scope a way of being able to separate your CSS out.

I can see many. Frameworks come in, or little snippets that I see. So there are a lot of good resources out there. They're growing all the time. There's something by Rachel Andrews, grid by example.com. Definitely worth checking out. There's another one called, one Line Layouts, dot glitch me, and a whole bunch of stuff.

And, something that I like, which is partly commercial to get all of it you need to pay. But there's, every layout. dev, by Hayden Pickin and Andy Bell. And you can see there's gonna be an accumulation of these kind of things where you can, as I've done on this site with little knowledge, I've been able to copy and paste a couple of one-liners, if you like, and achieve.

And all I needed to know was basically the things I covered here, how things are actually working underneath.

\[00:41:52\] **Nathan Wrigley**: Yeah. Do you have an intuition that in the show notes, you'll paste the links to the resources that you just mentioned, or are they gonna live on our resources page separated out from each of the, episodes.

\[00:42:04\] **David Waumsley**: I don't know. We might have to discuss this later. I think I'll add them there and, yeah, I dunno where to put them. Maybe they should be in the show notes.

\[00:42:12\] **Nathan Wrigley**: Yeah, we'll see. Okay. okay. I feel like we've done our third episode Justice, that's, that was a hard one to cover because everything was so visual.

But if you take a look at our website, no script show, you'll be able to see all of the links and get some intuition as to what David's trying to build here. anything else you felt you wanted to cover or shall we?

\[00:42:34\] **David Waumsley**: No, I think next time, we'll it'll be a bit more conversational 'cause we'll be talking about Jen Simmons.

The same topic, just slightly different perspective, historical and from a designer's point of view.

\[00:42:44\] **Nathan Wrigley**: Okay, I'll enjoy, enjoy doing this one with you, and I looking forward to doing the next one. So I'll, see you next time on the no script show. David, take it easy.

\[00:42:53\] **David Waumsley**: Yeah, thanks a lot. Bye.

\[00:42:55\] **Nathan Wrigley**: Bye.
</details>