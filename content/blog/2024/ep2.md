---
title: The big picture.
description: How this show tries to follow the development of the web.
date: 2024-01-17
tags: ["chat"]
permalink: "/2/{{slugify }}/"
videoid: DYhaggDCBmM
---
 
Show notes
----------

This episode looks at future topics and how they're interconnected and better understood within a historical context. It's to save us from getting overwhelmed and paralysed by all the new options.

### Talking points

Web tech is exhilarating, but can leave us feeling lost and burned out. How do we:

*   Know what to learn.
*   Know who to learn from.
*   Find a direction.
*   Gain perspective.

### How our next episodes tell a story

Below is the order to the subjects we are covering next. We are using them here to show how web tech has evolved and what is coming in the near future.

*   CSS layouts.
*   Intrinsic design.
*   Component based design.
*   Container queries.
*   CSS interactivity.
*   Web typography.
*   Web Images.
*   Web colours.
*   User preferences.

<details>
<summary>Transcript</summary>

\[00:00:06\] **Nathan Wrigley:**:Hello there and welcome to this the second episode of the No Script Show, a brand new chat, which is gonna be all about modern front end web design, where we look at what we can build today with minimal dependencies and skills. I'm joined as I always will be by David Waumsley. Hi David.

\[00:00:06\] **Nathan Wrigley:**:Hello there and welcome to this the second episode of the No Script Show, a brand new chat, which is gonna be all about modern front end web design, where we look at what we can build today with minimal dependencies and skills. I'm joined as I always will be by David Waumsley. Hi David.

Hello. As I said, this is the second episode. In the first episode, we just orientated you a little bit about who we are and what our background is. This episode will be a little bit different, but I still feel orientation is the right word because we're gonna spend a moment or two just thinking about what we're gonna be doing in the episodes to come.

Like I said, we talked in the first episode about what prompted this show, and really that was all about the overwhelm in the things that are becoming. We'll be coming in the web platform in the near future. We've both been users of WordPress, heavily reliant upon WordPress over the last decade, and I think David got the intuition first that, that maybe we'd become a little bit de-skilled.

And there were things going on in the background, innovations happening, especially with browsers and what they're capable of. and we've got left a little bit behind. So this show is an exploration. Of that and trying to relearn or learn for the first time what we may have missed out on over the last decade.

But rather than dive into every single standalone topic, we decided to do an overview in this episode about the next few episodes that are gonna be coming. And the reason for that is we, hope to. In your mind, dear listener, be able to connect all of the different bits and pieces and give you some historical context.

And there is historical context and so that's important. So we'll be talking a little bit about that. In short, we're trying to see the big picture behind what's coming. From the W three C, in recent, what has been coming and what will be coming in the future? mostly to save ourselves from getting overwhelmed and paralyzed by it all.

yeah, that's the, beginning and I'll pass over to David.

\[00:02:10\] **David Waumsley**: Yeah, nicely put. And it was you really who said, we started to try and list out the topics we'd talk about and there was a kind of a developing story over the last sort of five years about what new stuff is coming on. And it leads on because it's all, as we're focusing mostly on the sort of simple stuff, the HML and CSS, there's a lot really coming to that, which we haven't seen until recently.

And it was me trying to, explain why I've put 'em in a certain order. I realized that we were telling the. The kind of history, won't we, of what's coming and, it gives you a sort of. A philosophical, aspect to the whole thing. you can see direction and that if you bring up, actually for those people watching on YouTube, the website.

We have got our talking points where we will just chat first a little bit before we introduce the next episodes. A little bit about, that problem that I know I have or certainly suffered it recently is knowing, what to learn next. Who from. And the direction of that, getting some kind of perspective, if you like, on what I'm learning next.

And, so I thought even if, let us, shall we start with the, what to learn. So we have limited our choices for this show, haven't we? We, yeah. Are just sticking with mostly with HTML and CSS and we are for that purpose, we are ignoring frameworks and platforms. So in theory, it should be a little bit easier.

Say, if you were in WordPress, you've got a lot of builders to possibly choose from and lots of different tools. If you are a JavaScript developer, you've got lots of different frameworks to choose from or going in their own direction. In theory, what we're covering should be easy because H two ml and CSS, but.

It isn't always that easy because I think there's lots of places where you can fall down different rabbit holes because the W three C tell you what is available, what can browsers can do, but they don't necessarily tell you how you should do it. And. Nathan, you are. When you started learning, as we did in those early days, just trying to build with HML and CSS, did you find there was lots of, even though you found experts then, that there was a lot of division between certain things that would be, I remember arguments about whether you should be coding everything up to be fixed or whether it should be fluent. yeah, there

\[00:04:42\] **Nathan Wrigley:**:was, there were definitely different debates going on at the time, but I feel that it's much more difficult if you're making a start now, I feel it's, there's, more overwhelm, there's more differences of opinion, there's more different directions you could go in. So as an example, when I began, really, nobody was using JavaScript at all for.

More or less anything. It came along after the fact. So at least that part of the, jigsaw was out of the question, it just simply didn't exist. It was HTML and then after that CSS came along and it, so it was fairly straightforward to, for me at least, to figure out what to do. But then as you say, those, little things crept in, like fluid design and responsive design later, all, crept in there were.

There were differences and people started to argue about, which was the air quotes, the correct way to do it. And I think because there was no clear direction, all sorts of things broke out. frameworks came along and ways to do things and what have you, but also just rewinding a little bit back then, I think it was easier.

I. To gain knowledge because really all you had to do was buy a book. And that book meant that the person who'd written the book had obviously risen to the top in some area. there was that editorial control. Whereas now, I think especially with the advent of platforms like Facebook and YouTube, anybody can put any content out there and in some cases they may be entirely, and again, air quotes.

But also they may be putting out just half the story or telling you things, which really ultimately you don't want to be doing. So yeah, I think the endeavor here is just to, is to reset a little bit. you've found a, list of people that you trust and you've got in, you've got intuitions as to why you can trust them.

But I do think going back to the W three C is now a really good option and, I, dunno if it's done a really great way of. Advertising itself, particularly as the, source of authority, because it feels like that's not what its purpose is. But that's, what we're making this chat about.

Really. We're putting them the W three C right in the center front and center and, all of the different things are being, being talked about in this chat

\[00:07:06\] **David Waumsley**: will be related to that. So yeah, it all got a bit

\[00:07:10\] **Nathan Wrigley:**:shattered. I think it's become more shattered. And your genius, I think, really about putting this chat together was the idea that, let's just brush aside all those shattered bits and let's just concentrate on the bit in the middle, the W three C and we will get into all of the knots and the bolts, the CSS and the h tmm l and a whole range of other subjects.

But today is more about what are we trying to learn? Who are we trying to learn from? And if you're watching the screen, finding a direction and gaining some perspective.

\[00:07:41\] **David Waumsley**: Yeah, and I think, you know what's really interesting is we just decided that we'll try and stick to people that are closest to the W3C.

The people who are writing or who are in the working groups are writing some of the spec and those people who are, also publish the books as well. I think interestingly when we, I. When we were doing it, people who were publishing the books still had different ideas. So there was well-known books by people who told you how to code with tables.

And then competing with that, there were other, well-known books by people say, we need web standards and you need to be, yeah, using floats and you still were stuck. But I think what's really. Interesting to me now because I, came out, a year ago if you like, trying to relearn CSS, doing it through, as you mentioned, YouTube videos.

And it didn't help me. And what helped me was starting to listen and the free online, most of 'em, the sort of conference talks that will be given by people in the working groups, people will be mentioning as we go through this. Jen Simmons, Rachel Andrews, Miriam, Suzanne, All people that look to, and there's people from, way back as well who are still doing things.

Jeffrey Zeldman, Bruce Lawson. Yeah. And yeah, Eric Meyer was probably the first person I ever came across as a name in CSS. They're still influenced in today. So all those people who are very invested in the web platform and contribute in some ways, even if it's just through their blog writing, that influences the people in the working groups.

So we're trying to stick with those because. I, found a real difficulty going off the, and one example was that when I started to watch some of the developments, particularly from Rachel Andrews talking about layouts a lot, Jen Simmons two, is that I realized that was my sticking point, for everything, if you couldn't lay things out on the page as I wanted to in the correct way.

And I realized when I was getting the YouTube videos, they made sense of what the W three C were tr attempting to do over the last. Decade or more to build up this comprehensive, setup for layout, which we now have, which we didn't have before. yeah, so that's, helped me find a direction and that's really all we wanted to talk about, I think in the first place was the fact that for this show at least, and it's been the direction I've gone in, I've listened to this, people who, if you like, reference the spec, the platform.

In some ways it's an inter, you mentioned about there's not any marketing and it, you just reminded me that there is an interesting thing going on at the moment. It's an aside that, we may be seeing CSS four come out soon. Now no such thing exists in reality because for a long time. Since the nineties, CSS and HTML don't have versions, but the problem is out in the greater world, employers will still look for, what was the last spec for that?

CSS three. Yeah. And even though it's a bit of a nonsense, the grouping, so much has happened since, I think 1999 was when that came out, that they. Probably putting something together for, just really for publicity, I think, and to help people who will hire people to do development, to understand what.

Knowledge they may have. 'cause your knowledge from 1999 as a CSS person's probably not gonna be too useful to anybody. So yeah, there is the, there is all of that. And I think see a move going on, because we've had a, decade of, since React from Facebook, we've had a decade of JavaScript first, and the web platform is A-H-T-M-L first with JavaScript.

There's a, bit of a shift, if you like, as, in the sense that many of the JS frameworks are, using web components and things like that to connect with HTML more. yeah, so I think it's a really exciting time and I, but that's basically the upshot of what we wanted to talk about here, is that this show will be led by us not trying to give an opinion, but really trying to, as best as we can, represent. Ourselves, what the people who write the spec are saying about the future of the web. It just

\[00:11:59\] **Nathan Wrigley:**:occurs to me that if you've dropped in on this second episode and we're uttering words like W three C, that there may be. Really no connection in your head as to what that even is because well, what even is that?

Do, you wanna just get into that for the teeny, tiniest amount of time and just say what the W three C is though? It's the Worldwide Web Consortium. that's the W three C bit, but, yeah, what is it? How is it, how has it got itself at the center and all of that?

\[00:12:34\] **David Waumsley**: Yeah, it's, I dunno if I could do it justice for No, it's okay.

Just a positive history. Yeah. But no, I think, but I can give you a I, you know it, it is the organization we look to for the web and it is still overseen by Tim Burners Lee, who is credited as the inventor of HTML, which is the center of our web journey. And it's. It's had an interest in because at certain points it could have very much lost what it's there to do.

And it has a, foundation of the web being for all and on everything. And that's its mission, And in the past, the organization has been fairly loose with what is expected, how browsers to implement. And of course we get no web without browsers. Particularly in the early days with htm, l nearly went off with a, side group of people creating XHTML because Tim thought HTML was done.

He changed his mind because it's always a division. He is a very good leader in that sense because he is able to, reflect on what's needed. And I think that's the way that this organization has always gone. But I think what's interesting about it today is that now that browsers. Are not working on a loose spec from the W three C on what we'd expect to do.

They are not going their own different routes. They've realized, and only over recent years, which we covered last time, is that if they don't work together. To implement stuff that all developers can use because it will work in all of the browsers. They're only shooting themselves in the foot. So now we have the weight of all the big browser vendors who are also, Microsoft and Apple and Google.

They're also the people who are creating devices as well. So they bring the very best of the people to that organization to work through this. And I think over recent years we've seen this. This thing to not, one example we used before was how we nearly went off a different direction, with flash, Yeah. It was proprietary code, which could have only put in the shell of HTML, and it could have been what we experienced of the web, but the danger with that is that it would've been. It basically the web, effectively owned by Adobe, where the Worldwide Web Consortium is there to make sure that it brings all the commercial aspects of that together, but because they've got the opportunity to.

Criticize the other work. It doesn't go through unless everybody agrees in these working groups. So it's a, at the moment it's been working well, hasn't it? To, see that the, web is a platform that everybody can build on and be creative on that will work for all and ideally on everything.

That's the idea that Worldwide Web wants to make things that will suit the browsers of the future, or not even browsers, maybe a Siri type. System where the web is read to us. And images from a website are thrown up to us. Who knows? Yeah. But that's, I guess what they're charged with doing is thinking ahead a system that's gonna work that developers can work together in the same direction on. Anyway, that was a

\[00:15:56\] **Nathan Wrigley:**:long, I think, the history of that is really interesting because if you were to rewind to the beginning of the web, but there was no, real notion as to what it was gonna become and it probably felt to Tim Burnley at the beginning that. Maybe a couple of dozen people will hop on this with their giant mainframes in different academic institutions around the world and, may, maybe as many as a thousand people will end up using it.

and then of course it morphed and it became much more popular and it, came down the telephone line and modems and all of that were in use. And then. Commercial enterprises got involved and at that point there was this conflict of what should the web become because it, felt like it, like you said, with a Adobe's flash, it felt like it really could go off in that direction and that technology was so amazing.

There really was an inflection point there where it could suddenly do a lot more than it previously could. you could play videos and animations and games and all sorts of things, which was, whoa, hang on. That can be done. but the idea of wrestling it back and having this, this objective body that can look at things and weigh them up and importantly doesn't really need to be in a rush.

They don't need to do things right now because somebody suggested that we should do it right now. They can pause and, be a bit more reflective. And honestly, we're very lucky that the, founding fathers of the internet had this intuition that something like this needed to be set up. Yeah, because it could have gone entirely down commercial lines and, maybe something like a OL would've taken over and that would've been the mechanism for us all browsing the web.

And we'd have to pay to get access to various different parts of the internet. Who knows, it could have gone in all sorts of different directions, but we are, I. We are where we are now, and it feels like over the last few years, all of the competing factions have decided, okay, it's better if we all just combine our efforts on the basics so that everybody's browser can at least do the basics and then we can. Work on our own stuff. So anyway, sorry that was supposed to be an aside and it ended up being like about a 10 minute aside.

\[00:18:09\] **David Waumsley**: Shall we, scroll down on for the YouTube people to our other point so we can actually go on to and just talk about the episodes and why we think. These might work. this is just the main topic areas. So I might end up going on for some time here, Nathan, so just Okay. I'll go and grab a cup

\[00:18:31\] **David Waumsley**: yeah, the, so the next episode, which is what we said we were gonna do this time, would've been looking at CSS layouts because probably that's. I would think that's probably the reason why we have so many CSS frameworks and WWE editors, because there simply wasn't.

A layout system until recently, until we got Flexbox and really properly, until we got grid, we didn't really have a uniform system. Like you were saying with Tim Burners, Lee's idea was sending these scientific documentation. Yeah. It wasn't a, a layout tool. And it's taken all of this time to get it, but now it's here and I think, in order to understand what is coming out or to understand something like grid and. By, Rachel Andrews, who it goes back to, I think 2090 refactoring the way we talk about CSS because it's got a bad name. I think amongst people have been difficult, which it is when it comes to layout. That's what I wanted to skip, and that's why I went for the WY Wig Builders. I could do the rest of the CSS basic styling and still.

Retain that stuff, but that was difficult and she, and I think why we'll talk about that on that one is because she does a really good job at explaining that there is actually a logical system where we think of CSS, we often think of something complex, difficult to use, and that's simply. Because we didn't have a layout system.

We were using hacks all along the way, inappropriate properties to try and get the layouts we want to achieve. So people wrote different books about how you might want to do it and would disagree. Now there is actually a logical system where everything in the CSS is coming together and for me there was a real big breakthrough moment watching her talk.

She didn't really emphasize it so much, but there is a thing called internationalization. an attempt to make the worldwide web. Actually worldwide to acknowledge that there are different directions for people writing. If you're Arabic, it is going from right to left rather than left to And once you understand that there's writing modes and there's some spec to sort that out.

So if you need to make, another page that's similar design for another language, it's much easier. You don't have to just reverse everything. You've got a writing mode, which then explains why when we move to something like. Grid or, flexbox, why we're always talking about start and end block and inline and stuff because we've set up a system which is no longer top left, and bottom.

So I, think it's really good to go through her talk next time just to get an understanding that actually there's a system there and, her big claim is, and I, can see how true it is, that it's easier sometimes for her to. To teach somebody who's never seen CSS before than it is for somebody who has a lot of experience and the baggage of.

\[00:21:26\] **Nathan Wrigley:**:I find that absolutely fascinating actually, because the, assumption would be that the more you've learned over the last 20 years, the more likely you are to be able to understand what's coming. But actually maybe it's the other way around, maybe having no baggage of how things are laid out. It means that it's, it is easier. So I'm interested to see how that goes. Yeah, that's good.

\[00:21:48\] **David Waumsley**: Yeah, it's more harmonious I think, as well now because some of the old debates that we'd have, say pixels versus rems, fixed versus, it's got fluid, Adaptive versus responsive? to be honest, we know now that all of these older methods have gone, no one's gonna argue with 'em now because they were looking backwards to a time of design where we were basically mimicking what we would do in print.

Yeah. Now we know we have to have these squishy layouts. So to understand the system that creates these squishy layouts in ways we can understand is that, but that also leads on, and I think we need two episodes and we say intrinsic design. That's basically the, we'll look at the talk. By Jen Simmons, which we talked about./p>

We called, episode roughly after that, where everything had changed in, web design. And we can get another perspective of all the changes, which we've just alluded to. the historical changes of ways that we would do web design with the tools that we got and how she believes that we're in a new period of intrinsic design, this squishy internet and.

What we'll get from her is that historical side, but also she as a designer more than a developer. She's asking more the question, what does it mean to be a designer? today when we are, simply because the spec is thinking about that, where we are designing for. browser devices that don't yet exist for browsers.

That's, yeah. That might be used in different situations. She uses the browser. That might be on your fridge or the Siri type thing. Always talk that way. It talks to you, so it's being that designer and understanding that. So that was good. But she does make a couple of points, in her tilt.

They're little aside. And one of those is about how she felt that we maybe have over complicated just some things with everything wrapped in JavaScript. And we might be making some of the mistakes of flash. and I know why she doesn't go very far because that has been a whole period of the last 10 years where it's gone that way round.

And I think back in 2018 when she was doing that, we didn't have some of the new stuff that were. That we're leading to now because they were there for a reason. She skips over that in her talk. so there was a point, I think you'll agree, where everybody's thought, why are we styling these scientific documents to look like pages?

Why are we not just saying these are all made up? A little blocks of reusable ui. Why are we not component-based designing? And I think that's what's interesting about this. So from her talk onwards, we can now look at component-based design. And I think there's a bit of a debate there about, even in CSS, about how people have tackled that in order of organizing their CSS.

Because what made React so popular in the JavaScript frameworks is that it could do it where CSS couldn't Suddenly. Yeah. Suddenly you want to have little units which are encapsulated. You can style up independently to build as you are building blocks for your website. You couldn't do that. So we'll move on to that into the next one on component-based design and talk a little bit about that.

there is something which is now quite popular, it started even before React, which was web, components, right? Yep. Yep. And, you almost can't say that today because when you say components, everybody simply thinks of JavaScript components. But actually, they still are to an extent.

But this is something that's been building up in the W three C for some time. we'll talk a little bit about that and we might use it for all of these things. We'll try and add to our third guest, which is the website you're looking at. maybe I'll do a video which will just look at some of the coding, which is borrowing from what.

Rachel Andrew is saying. And then when we come to, components, maybe we will stick in our embedded video data using their web component, which is just, yeah, HML with a little bit of JavaScript in there. Okay. yeah, next episode. and then I think this is the biggest change. That's happened just really at the end of 2023, really when it's supported in all the major browsers.

We have a thing called container queries. Yeah. This is big, isn't it? Yeah, it is. And it's mentioned in Jen Simmons' talk that we talk about earlier as one of our other aside, which is, it, she called it the unicorn. We may or may not get it, and we have got it. And it's one of these things where the browser engines have been.

Three factor to make it possible so we can query. The, container. So it does allow, and that's why I think we need another chat just with H TM L and CSS, we could be able to start to build up nice little components. So this is something that the WC three have been aware of. It's, lacking with this HTML and CSS.

Stye in one document that we could, that would, it hasn't really focused on the needs for people to create these reusable stuff. And I think in our case, mostly what we need is not functionality, but is style. We maybe want a little styled card that we Because Style Up wants and just slot into any design.

And we know that 'cause it's containing its size in it, it will respond appropriately to the design We put it in. so I'm talking a lot here, Nathan, but No, it's, should I just put, should I explain a little bit just about the, I think the example of a container query is the one that's used the most. Yeah,

\[00:27:31\] **Nathan Wrigley:**:I think, that, I think it might be good to just pause a moment there and just explain how it's different from what we've got now. So your card example is a good one. How, would that work on, I don't know, a range of different devices?

\[00:27:43\] **David Waumsley**: Yeah, so you know where before you always had to take the view port as with your media queries as the thing that would controlled the whole layout.

So everything had to be solved. That where you can now take a component. So in your example of a card, let's say you've got a lot of space because in a certain. Thing. This card might need to be the full width of a screen or something. So you might have the big image in that card or something on the left hand side.

Yeah. And the header on the right, and there's some paragraphs under it, and then maybe a button. So you know, a. Third of it will be taken up with the image, but then when you want that same component to slot into a sidebar, you may need it. So the image goes up to the top and then the, and all the font sizes change to that.

So you can with all the sort of responsive calc stuff with your text, you can make the text squishy, but you could start to move around the order of things, so the, image, because you've actually queer. The container by size. So in the, if it's, at 600, it behaves this way. If it's below that, it behaves in a different way.

So you can start to make these reusable components. And I think this is gonna be one of the most exciting things, which we won't get very far on because I think combined with some other things that have come out, has, is one of those things. Oh, yeah, It's the parent selector where you, yeah.

you can select something that's in the card and have it behave differently and later we should get container. We've got container queries, the size format at the moment, so we can change what's in that container based on its size. What's coming soon is. Style. Hopefully at some point we'll be able to change the style based on that container size, which will be it, it is definitely moving towards a component based way, which is really not been accessible to people, I don't think, that's really why the JavaScript frameworks have been so popular, because the, only things they've been able to address that approach to building sites.

\[00:29:47\] **Nathan Wrigley:**:Yeah. So it's almost like you could have these little components, these containers, and they're almost like. A website in themselves in a way, because you can, style just that unique one and then repeat it and just amend it so that the image goes right on a subset of those.

And essentially it's like the view ports that we've got with the media queries at the moment, but inside each of the little components themselves. And so it opens up this world of possibility, although. I, am actually struggling to imagine what will be envisioned by web developers over the next couple of years.

I'm sure it'll go in directions that I, nobody's anticipating, but it opens up the opportunity to really atomize the design and have, each little bit of the design as something separate and unique and repeatable, which will be brilliant.

\[00:30:42\] **David Waumsley**: Yeah, it will. And I think, nobody really knows now we know that things are in place and if you get that early foundations of how, if you like, layout's being set up, I think the combination of something, which again is coming, isn't fully there yet, but Subgrid will be in all the browsers pretty soon.

And Subgrid with has with container queries at the moment will give so many options for component. base styles and stuff, but I think the interesting thing we'll talk about as we go through these episodes is that there is a bit of a push and pull because, we've all gone container ad and we think, oh, building blocks, but is a website, really the sum of it's parts

Yeah, And against that, there's an argument about, and it's something that very much connects with me, this idea that we might want to write little CSS. And in a lot of case, there's only a few components we need, and it might be so much better as we can do now, to use very little code to style our whole pages, our whole sites. right at the top of the document, so the cascade isn't dead, if you like. Yeah. Yep. In css. Yeah. anyway, I think we've gone on. I've gone on. No,

\[00:31:51\] **Nathan Wrigley:**:no, that's great. But like the next four episodes, CSS layout, intrinsic design component-based design and container queiries. That's really, that's all about the Putting the things on the page and how they move around on the page, depending upon the thing that you are viewing it in. But then, we're onto something different. So the next set, if you like, they're not gonna be quite so much about the layout because the next one you've got is CSS interactivity. So this really does get into the wheelhouse of what is currently the domain of JavaScript, doesn't

\[00:32:18\] **David Waumsley**: it? Yeah, I think for that episode we'll end up breaking it into two because we've got so many interesting stuff. That's, stuff that I think we'll use in our website as well when we bring it in as our third guest. I think, we'll, one of the big wow things at the moment only available in Chrome, but it should come to other browsers soon, will be a view transition, which gives you a very app like. Ability to move to your next page as a smooth transition, instead of just, to your next page. and, I think that's really interesting and we'll probably try and do that.

I think with our site. We'll try and make our archive page once we've got a few episodes, we'll need that smoothly. Transitioning into the individual episode pages, perhaps we'll have a crack at that. Nice. yeah. And, but there's so much other stuff. We've got, scroll animation, which is, fabulous stuff./p>

I think with our site. We'll try and make our archive page once we've got a few episodes, we'll need that smoothly. Transitioning into the individual episode pages, perhaps we'll have a crack at that. Nice. yeah. And, but there's so much other stuff. We've got, scroll animation, which is, fabulous stuff.

You, you won't need a library to do most of the things that people are doing with. Items as you're scrolling down could be moving from left to right on your screen and other things being affected by animation as you scroll to a certain point. So that's all the interesting stuff that I used to need a framework for coming.

So I think we'll need two for that. But then also I think before we can start talking about how we might use this and talking about maybe working with clients. There's a whole bunch of other stuff, which is new. Typography changed. We're getting color fonts, we're getting variable fonts. We're getting so much stuff coming to, just HTML in terms of, units that will allow you to, interact with the font itself in a way that somebody who's into type might do.

So I think that'll be a big learning for us, learning how to use. typography better and, and web images, again, we've got, so much coming in the way of new formats, which are more optimized, but not just that. Ways that we can treat again with CSS. The way that images behave. Images have always been a bit of a problem 'cause they're an airline element.

You stick in and then you stick it a hundred percent and then, if you set its boundaries, with the width or the height, you're gonna squid in the wrong way. we've now got things where you can put a cover on it and you can let the. You can let the available space change.

So if you have something in the center of an image, you can be cutting off the sides of that image as it's moving more squishy. So there's a lot of stuff in the CSS to play around with the images and colors. Oh wow. I dunno where to start on that one. We've got some palettes and stuff. yeah. once we just had hex values and And RGB, but now we've got a whole range of, new stuff and a new way of working with color. And finally, and I think this is where we're going with the, with a lot of this spec that's already out there is based on user preferences. And my guess would be, and that's why I think we need to cover it, is that this is the influence of. the browser vendors? Yeah. In the W3C and the fact that they also produce, devices. I, see a much more of an encouragement of people to choose their own experience of the web. So we're seeing things coming in. Where we can set up the user preferences for somebody who wants dark mode, I think that's gonna become common practice.

So you can choose your light or dark and you can see apple's very much promoting that. I was very surprised with the first site I did that at Dark Mode to see just how many people came in 'cause it's not the default. and we've got things like motion as well. Yep. so you. restrict, so you don't have to, you can be experimental with your motion, but if somebody set their device up to say, I don't like motion, please make it stop.

You can code things up so you don't offend those people. And, it's already actually in our site, if you go to the scroll up button on our site, there's a little thing, I've just put it in there, but it's actually behind a motion control. So if you set your device to say, I don't like motion, it'll just.

Go straight up to the top. So great for accessibility. Yeah, it's that kind of stuff. And there's a lot of things and the idea of themes that you might create. So a lot of people want high contrast. And another big thing that we forget, again with the, a lot of, I think where the web's gone is to make sure that it really is Worldwide. So people are very conscious about, so you've got now got one where you can, if you have a preference for less data, you can as a designer then say, okay, this person doesn't want to use up their data. It costs them much more money on their phone. You can say, okay, I'm not gonna send them this image.

I'm not gonna load a font in. They can have the system font, you can choose those kind of things. So I think we're gonna see a lot more in that direction. And I think. That I think we're viewing the web does very differently, not this sort of image we used to have. It's now this squishy thing that will fit into any device to whatever a user's preference is, if they want it to, not to display so much color, if they want it dark or light.

And I think that's where designers are going and I think that's where all of the stuff that's coming out from the W three C, it is leading us to that way. It'll be really

\[00:37:43\] **Nathan Wrigley:**:interesting to see. So this is a complete aside, but it's, it'd be really interesting to see where the devices go as a result of this. at the moment, we're very used to the paradigm of the home computer with a big CPU in it and the mobile phone, which has a, again, some kind of chip in there to do an awful lot of work. And a lot of the settings are inside the, thing itself. my dark mode can be governed by, the O.S but also I can alter the font size in the oss and it'll be interesting to see if in the future it feels like a lot of this is more orientated to giving an app like experience, if you just flip the device around and suddenly it's changed. But it's changed in a way, which is something that's.

That's better. Not something where you lose sight of what's going on and you'll be able to have control and agency over whether things move or not and how much data you are consuming and all of these kind of things. and it, I really can't predict where it's gonna go, but I have this intuition that for companies like Google and Apple.

This must be an incredibly important moment because they're completely tied up with their, ecosystems, PCs and Android devices and iPhones and all of that. And the more, that this new version of the web, like Jensen said in 2018, how everything's changed, this new changed version of the web.

Really will open up to those device manufacturers a whole set of opportunities, which at the moment were just bound inside a browser and now it feels they can step out of the browser and be a, maybe the browser will be it. That will be all that you need for all the \[00:39:30\] **David Waumsley**: things. Who knows? Yeah, I, and I think that's it.

The web, the web on everything is the mission behind this, which everybody's behind. And I think one thing I didn't mention, and we had a nice conversation. You, interviewed somebody, for the, your other show on this, and that's web assembly. That's another thing which I think comes in too.

This kind of component based design. it. it's really fascinating. It's been used in WordPress, isn't it? I think if I'm, if you correct me if I'm wrong to, to, so you can now go and try out WordPress without installing it Yeah. In your browser, and I think that's really gonna be fascinating. It is.

It is away from what we're doing as. Web designers, but where needed, it's allowing this opportunities for things like games or other apps that are written in completely non-web languages to be able to be converted into a language that will then display and could be sorted into your HTML. I think it's fascinating, Yeah, I think

\[00:40:31\] **Nathan Wrigley:**:it, almost like the capabilities of Flash brought into HTML Exactly. In some respect, which is gonna be quirky. so, I guess maybe we've, exhausted the, the bits and the pieces for this. Episode, but really the endeavor here was to just to lay out what's gonna happen over the next, I don't know, 10, 11, 12 episodes.

And, hopefully if you view those episodes as a whole, it will give you a real good primer on what's coming up and what's available right now. And, that's, the endeavor. I think you've laid that out beautifully, David. Well done.

\[00:41:05\] **David Waumsley**: Okay, let's hope it's not a waste of time for people.

So next time, yes, we'll start with the CSS layouts and we'll be really taking what, Rachel Andrew says on this. And I can think of no better person to, to, reference for this.

\[00:41:21\] **Nathan Wrigley:**:Okay, perfect. in that case, we will knock it on the head, as we say in the UK for episode two of the no script show.

We'll be back with episode three all about CSS. So get your, get your notepads out 'cause there'll be, some notes to take no doubt. And we'll see you next time. Bye.

\[00:41:37\] **David Waumsley**: Okay, bye-Bye.

</details>