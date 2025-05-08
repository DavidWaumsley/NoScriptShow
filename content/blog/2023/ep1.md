---
title: Everything we knew about web design changed!
description: How this chat aims to keep up with a fast changing web platform.
date: 2023-12-13
tags: [ chat ]
permalink: "/1{{slugify }}/"
videoid: MepORS6OHYw
---

## Show Notes
----------

This is our introductory episode. The title is "borrowed" from an influential talk by Jen Simmonds in 2018 called "[Everything You Know About Web Design Just Changed](https://talks.jensimmons.com/GdnO62)". In it she argues that we are moving to a new paradigm of web design.

Since, web specifications have improved and [web browsers can do much more](https://developer.chrome.com/blog/whats-new-css-ui-2023/).

### Talking points

*   The format and frequency of the show.
*   The show's silly name!
*   Who might like this show?
*   This experimental website.

### Changes that prompted this show

*   [Intrinsic Web Design](https://talks.jensimmons.com/GdnO62).
*   [Browser interoperability](https://wpt.fyi/interop-2022?stable).
*   A need for the "one web".
*   The need to embrace [open standards](https://www.w3.org/standards/).
*   [The web for everyone](https://www.w3.org/WAI/fundamentals/accessibility-intro/).

**Others points:** Traditional Front-end development becoming more credible. A shift away from component based thinking. "Progressive enhancement" and user preferences over "pixel perfection."


<details>
<summary>Transcript</summary>

\[00:00:05\] **David Waumsley**: Hello and welcome to the first episode of a new show on modern front end web design. It’s a discussion show, but one where we’ll also be sharing the practical applications of our chats. And to do this, we’ll be live developing the no script. Show website. It’s bare bones as we record this, but we’ll be constantly changing and experimenting with it as part of the show.

And before we introduce ourselves, hello Nathan. I thought I’d quickly summarize the purpose of the show and the hint is in the episode’s title, which is borrowed from a talk by. Jen Simmons and it goes back to 2018 and it’s called Everything You Know About Web Design Just changed. And in it she argues that we’re standing at the threshold of an entirely new era in digital design.

And since then, it’s become more of a reality with a much more improved spec from the W three C, the Worldwide Web Consortium. Great advances in what web browsers can do for us. So we thought it was probably time that we dug into this. And to do that justice, we’re going to put aside web building frameworks and platforms because the impact of what’s going on now will be felt there later and directly concentrate on what’s coming from the.

As early adopters, both of us of low-code page builders, we’ve become quite detached from this. So we are very much going back to school with this, but it’s not coming out of a deep desire to be coding experts. It’s really the tantalizing prospect that we might be able to do a better job with less code.

Use what we’ve learned, the foundations of this knowledge to employ how we use our tools appropriately. So that’s enough for me. Nathan, how are you? I’m

\[00:02:03\] **Nathan Wrigley:** good, thank you. I’m Nathan Wrigley. I have been working with David on WordPress chat for years and years now, but I think I’ll just give a little bit of my backstory.

So I began. Working with the web, I think it was very, late 1990, so 19 99, 19 98, something like that. But back in that time, anybody was really with 10 minutes. If you put your nose into a book for 10 minutes, you could probably be as good as almost anybody else. It was really the very beginnings and I was learning.

About how to put up webpages just purely for my own interest, and discovered that there were pieces of software out there which could handle building webpages and putting the assets into the correct folders. Things like Microsoft Front Page and what have you. And I really got into it on a deep level and OB kind of obsessed about it and kept learning, but there wasn’t a lot to learn except.

Frustration essentially, because back in the day it was all tables based layouts. And if you wanted to mimic something like a magazine layout, which is at that time, what everybody was trying to achieve, there really wasn’t the idea of, okay, the web is its own thing. It was what we’re trying to produce magazines online.

That was really hard to do. So it became very frustrating and then CSS came along and I started to learn that. And then a bit of serendipity. A friend of mine needed a website, so I helped them with that and. had this intuition that, maybe there’s a, maybe there’s a job in this. And sure enough, there was, back in those days, because it was a level playing field, there were no offices where you could go and meet web designers.

There were no web pages, showing off the, portfolio of work that you’d done in the past. I was as good as almost anybody else, those days of long since gone. But I was able to picture myself and in my local community. Became one of the people that did this work. So I’ve been using, those skills for years and years.

Then I discovered CMSs. Drupal Magento and then finally WordPress, which I settled on and started to use that, and that’s where I’ve settled and stayed since probably about 2015. Something along those lines. Very happy with WordPress. I will be continuing to use it, but David spotted that there was a shift and a lot of the things that.

We once would have found very, difficult to implement without complicated knowledge of things like JavaScript have been moved over into the CSS spec, or are going to be moved over into the CSS spec. And the options and the possibilities of CSS are gonna be amazing in the future. So we’re trying to make that the focus of this chat just examining what’s coming, what we know thus far.

I have to say that my knowledge is pretty poor. I. I have let myself become very de-skilled because of platforms like WordPress and the amazing page builders that they provide. So I have let my knowledge stagnate and I’m probably stuck in 2018 or something like that. Things have moved on and I felt that I needed to upskill, and luckily David’s here with his Cape superhero David,

\[00:05:21\] **David Waumsley**  to save the

\[00:05:21\] **Nathan Wrigley:** day, and he’s gonna be teaching me, along the way, and hopefully at some point I’ll be able to teach him a thing or two as well.

\[00:05:28\] **David Waumsley:** Yeah, if only that was the case. Really this show is both of us on a journey of learning. I’ve got a few months ahead of you, so I’ll just give my backstory quickly ’cause it’s very similar to yours. about 2005 I started, playing around with this. ’cause I thought the web seemed very exciting and I.

Got books the same on HTML and CSOs and built, some sites for some friends and family. Then I discovered WordPress in 2007, so a long time I’ve been with that and I really only used that to help me in my work. I had a remote team and it was great for communication with those. About 2012, I took a career break from that, went traveling and an old friend of mine from school was, a web designer, needed some help with WordPress.

She asked me could I help. This was a big job. I got involved in that and then started working on all the other things, didn’t go back to the uk, and I’ve been doing this since with WordPress and then getting into the page builders, and then it’s only recently. since she packed in what she was doing and I’ve got more of my own clients, I’ve realized that most of mine just actually don’t use their builder or got into trouble with ’em or something like that.

So mostly I thought, in their case, I don’t really need to do that. I really should be able to go back and just do it with the HTML and CSS. So that’s what I’ve been doing. So I’ve got a few months on you, but not that much really in terms of catching up. But so much has happened that it’s, Worthy of a show. We think so, yeah. That’s where we’re at. And we’ve got a third guest, haven’t we? we do, we have a third

\[00:06:58\] **Nathan Wrigley:** guest. the third guest is gonna be joining us on most of the episodes, I imagine. And the third guest is. A website. The third guest is the no script show website. That’s a URL no script show.

And, I should probably just point out at this point that if you are looking, at the video, all of this will be obvious. But if you are listening to this on audio, we are recording this. As a video and as audio, and there’ll be a YouTube channel where we’ll put things. So we’ll try to make sure that the audio satisfies all of the requirements and we’ll try to explain things, in words as well as visually.

But if there is something that we say, which you think, oh, I would like to see that. Then no script show will be the website, I’m sure at various points. We’ll clumsily, say something that’s on the screen and forget to point out exactly what it means to the audio listeners, but hopefully you’ll be able to find it, equally on audio and a video.

And what’s the point of this? It looks like a pretty, pretty bare bones website at the moment.

\[00:08:05\] **David Waumsley:** Yeah, it is. And that’s intentional. we thought about this after we did the show that it might be best to demonstrate it because as we know with the chat that you are still reading there, your site has had to change over time.

We thought, we’ll start with something as simple as you possibly can make it, and then we can use this as we learn or explain what we’ve been learning over the time. We can actually put that to practical applications and show it on the site. And maybe, I think when it goes to diving into some of the code, which I’ll.

Take responsibility for, I can do some separate videos perhaps on my own channel, which we can connect to, which will just go into that if anybody wants to get into it. But largely I think it’s just there so we can demonstrate, decisions that we might make about a website in real time, if you like.

So that’s the idea. With that, we may even, I think, because we’ve both got that WordPress thing and I’m still working with it as a sort of CMS to help me build the sites and organize code, we could go off in that direction where, so with that. We’ll get, so we can have global areas like headers and footers in that and manage that kind of stuff.

But the idea of this show is to try and keep it. So whatever we talk about could equally be true if you were using a static site generator like Astro or something like that. So we’re gonna keep the focus on the. The more code side of stuff, although, the aim of this one isn’t really not, we don’t wanna exclude anybody who doesn’t really wanna touch code.

I think we’re heading into a new direction where just knowing what’s going on in code is useful. Even if hand that over to a builder, it might be useful to have the background Yeah, so

\[00:09:39\] **Nathan Wrigley:** we’ll, see how, this website progresses, but I think the intention really is that what we’re talking about in each episode may very well get reflected almost immediately onto the website.

So I can’t say what that’ll be because we haven’t planned that far into the future. But let’s say that we talk about particular thing. The intention is that thing will get displayed on the website soon after the chat episode is released. It may well be that we put show notes or things on that website as well, and who knows, we may have some sort of way back machine type.

Feature where you can look at screenshots of how it was in the past. And if you go to screenshot one, I guess you’ll be looking at what we’ve got today, which is really what we’re looking at today, is a website which you could have built in 1998. It’s images and text and it’s, really bare

\[00:10:27\] **David Waumsley"** bones, isn’t it?

Yeah, so I think your archive is a good thing. I think we’ll do that with this when we make a next change, we’ll, put it somewhere so someone can look at it, and I, can imagine over time that we’ll run out of things that we can do with this site for one particular purpose, and we might just start to explore other things, which we’ve, done together.

In another chat, we did a whole series looking at somebody. And how they might build their site. That’s, so we might do this more practically with this. So yeah, let’s talk a little bit more about then the, format of the show where we intend to go with it. Okay. I, there’s not much to say ’cause you actually covered the fact that it’s going in two forms and that I might do some other videos.

I think frequency of the show, we’re going to just keep that. Wide open. We’re going to do ’em as we want for, so we don’t burden ourselves. But also for me, I think for the quality, if we’re, going to try and. Cover the stuff that we’re gonna cover now, which is big changes there when we’re probably gonna need to represent the experts properly.

And that means catching up as we’re learning. So it might take a bit of time between various episodes. I think so, yeah. We’ll keep on loose

\[00:11:40\] **Nathan Wrigley:** chat episodes that both of us have recorded so far have been on a real regular cadence, but we decided just for the. The purposes of this chat that it, will come out when it comes out.

So if we don’t do an episode for several weeks, that doesn’t mean it’s gone away. Keep it in your. chat player of choice, but it will come round at some point when we manage to get around to doing an episode. I think the intention right at the beginning is to get a few recorded so that they will have a regular cadence.

Sure. Because obviously we have, more inspiration at this point, but, we’ll, see how this goes. So that’s in terms of the frequency, but why the name, why no script show. That’s on you, David.

\[00:12:21\] **David Waumsley:**  you too. we did have some fun with some names there, but, it’s a kind of pun, isn’t it?

Because of the fact that we generally, as you’ll see, I mean as you scroll down for the YouTube people, you’ll see that we’ve got some show notes there, and that’s basically, I. We’re going off. We have no script. We just have a bunch of bullet points, and we hope that we get to the end with something sensible.

But also, it’s a bit of a pun, and it’s not hating on JavaScript, but it’s also using the tag no script where you don’t want, for people who are not running JavaScript. and the thing behind that is that a lot of what’s coming to CSS means that you don’t need so much JavaScript. So hopefully if you’re doing the kind of job stuff.

I will do, maybe less so with you, Nathan, but mostly just like front end stuff. I probably don’t need JavaScript, so it’s just a bit of fun on that really. yeah.

\[00:13:15\] **Nathan Wrigley:** And obviously as we’ve said, the website is gonna be experimental. It’s gonna be in Fluxx, so if it looks really good one week, but terrible, the next, it’s by design.

\[00:13:24\] **David Waumsley:** Yeah. Yeah. It’s fine design.

\[00:13:27\] **Nathan Wrigley:** so who’s, the intended audience for this then? I should probably say, we’re gonna put this into the WP Bills, which is the chat David and I have done for many years. We’re gonna put it into that feed as well. hello to those listeners. are we trying to capture some of those?

Is there an intention that maybe some people that have been using CMSs might be interested in this as well? Yeah, I think

\[00:13:49\] **David Waumsley:** the idea is just to talk about the change in fundamentals of the web. So you know, it should in theory, be relevant to anybody, whatever platform they’re using. And I think still relevant, even if you are using a no code solution.

I think just to know what is there, I think. That might help you make informed decisions about what tools you’re going to use and how you’re going to use ’em, whether you need to use ’em in all situations. So I think it, we’re aiming for everybody, but, and maybe mostly it might be for people who are.

freelancers just starting out who, you know suddenly, which route do you go? Do you go WordPress route, do you go JavaScript, react route? Do you go HTML or CSS? It’s quite hard, so we are taking one side of that, but I think we’ll balance it out and, but I think who it doesn’t suit or won’t suit is going to be the people to do more.

Complex backend apps, stuff with JavaScript libraries and working in large teams because we have no experience of that and we’re not gonna cover that stuff. So probably exclude those people. I

\[00:14:50\] **Nathan Wrigley:** think another audience, which you alluded to would be that the, person that I am, which is the person that’s used a bunch of tools.

But is still interested in what you can do just with a text editor, basically. Yeah. So if you’ve been using a particular, let’s say, page builder or online software, SaaS software that’s enabled you to throw pages and things like that together with point and click interfaces, but you’re curious as to how all that is underpinned and what the technologies are behind it.

then this hopefully will keep you up to date with some of those bits and pieces. And yeah, if you’re just curious about the web in general, you never know. Yeah, we might stray into more slightly opaque topics as well. So I think that’s who it’s for. Then we’re gonna move on to, why, what was the, what were the things in the web, industry going on behind the scenes that made this show as, an idea in your head?

What prompted you to come up with this? Yeah, so

\[00:15:51\] **David Waumsley:**  it is all of these changes, which we’ll talk about more in the next couple of episodes. I think we’ll talk about some of the leading voices if you like, but, a big one is browser interoperability. The idea that the big players now who make our browsers have for the first time, come together.

Couple of years to decide what spec they’re introducing and they been working with css. We’ve got more stuff than we’ve ever had, in a couple of years. It’s speeded up faster than I think, probably the last 20 years in the web, because in the early days it used to be a case that the, web spec was a kind of vague thing, leaving the browsers to go and do.

Their own interpretation of it, and then they’re competing to be the better browser. We get the browser war, but now that’s come to an end. So that’s a huge shift I think. And we’re seeing so much in terms of layout, really exciting stuff that needed JavaScript animation and kind of popups and.

Transitions between pages that you would need some big something like React or something to do. that’s massive there.

\[00:17:07\] **Nathan Wrigley:** I think it’s really, I. Possibly something that you missed. If you’ve only been working on the web for a few years, you, probably didn’t really realize that there was this period of time in which the browsers really fought against each other.

they did. They implemented things in entirely different ways, meaning that websites that you built were a much more frustrating experience than they are now. Because you would have something which would look different depending on the browser that it was viewed in. And so you had to go through all of these hoops that you had to jump through to make it look the same in Firefox and Internet Explorer as was, and Safari and so on.

And now those problems have largely gone away. And it’s for the benefit of everybody really, that these, large browser vendors. So you mentioned, Google and Microsoft and Mozilla and all of that. All of these. These organizations are talking to each other because, it just makes sense for, people designing websites, but it also makes sense for people consuming websites because we can do better things more quickly.

And I think that’s the bit that I missed is because these companies are talking to each other and because these vendors are communicating with each other, the pace of change has really picked up in, yeah, in the last few years. And I missed that. I missed that whole cycle of all the different pieces that have been, made possible.

And that’s the excitement for me about this. So we’re gonna explore what you may have missed. you may not even have known because you just let your tool do the

\[00:18:38\] **David Waumsley:** work for you. Yeah. And I, it’s partly the w three’s fault for not having very clear specification, but now you’ve got all the browser vendors in with the invited experts really, and it’s one of those systems that they have where unless everybody’s happy, it doesn’t go forward.

It doesn’t go into the specs. So you’ve got, the global best minds out there. All looking at problems that could be created by adding something to CSS. So there’s, I don’t think there’s ever been a time like that. So at 30 years old, the web suddenly become very adult and things are happening quickly.

But yeah. The next point we’ve got on there is, oh, I’ve gone out of order, but it’s intrinsic design really, which we mentioned before, which is. it’s not easy to sum up. Do you, have an idea, Nathan, of how that could be summed up in a few words? No. No, I

\[00:19:31\] **Nathan Wrigley:** really don’t, and I’m, keen not to stumble into sort of getting that wrong, but if you haven’t noticed, there is a trend.

there’s always trends. There’s always a. A kind of moniker of what, is current in the web, so it, may have been responsive web design for a period of time. We’re now moving into a period of intrinsic web design. I’ve noticed in the WordPress space that we’ve been both very much involved in that.

This word seems to be. Popping out more and more. the tool that we’ve got is built with intrinsic web design in place. And I guess it’s, just cribbing from the show notes. It’s a reaction to the, mobile web, and the fact that there are, there really isn’t any sensible set of defaults for what.

the screen size or the dimensions are that your viewers will be looking at your website. And so for a long period of time, it was a desktop, it was a tablet, it was a mobile, and those three things fitted really well. And you could have queries, media queries as they’re called in CSS, so that if it’s a mobile will show this.

If it’s a desktop, we’ll show this. And I think it’s trying to bridge the gap. To the point where, we have no idea what people are gonna be looking on. It could be any shape or size, and so it’s more about that we don’t care. Yeah. We’re agnostic to the size of it. We’ll show it beautifully, whatever size, and obviously that requires a little bit of backend engineering to make it work rather than three break points.

You need some technology to say, okay, we don’t care what it is, it’s gonna show beautifully and it’s gonna show fluidly. De no matter what size or shape of device you’re using. Yeah. Would you

\[00:21:11\] **David Waumsley:** say that’s about right? Yeah, I think we’ll do an, we will do an episode actually on this one, and particularly look over Jen Simmons talk, which is now, things have moved on since she made that one.

for her, it’s, she just felt it was coming into this new age. All of this new stuff had come to CSS, particularly for her CSS grid, where you could, as a designer. Suddenly realized that you could use white space, you can move stuff around. You can have things be very fluid in a way. And for her as a designer side of it, she’s, looking at the fact there’s always been this bit of a compromise between things looking pretty and great and reflecting a brand I.

And on the other side, making sure that this is good, usable, reusable, readable code that’s accessible for everybody. And there’s been this compromise. You can’t have both. And she thinks now together, we can have this fluid thing that will adapt and, it deserves its own name whether we choose to take it.

It’s really, I think she mentions it in her talk on it. she could have easily called it, responsive design, but a bit better You. being a adaptive to the that, so that’s definitely, I think this is a, people say it, as you mentioned, I was just listening to, one of the lead developers of WordPress talk about it and how they need to.

Put that into WordPress and think about it. In fact, it holds back certain things that they might do because they need to accommodate and think of the future. So yeah, it’d be good looking at that. and I guess

\[00:22:40\] **Nathan Wrigley:** getting back to the browser piece, the, fact is that the browser can really handle a lot of the heavy lifting of, let’s just call it the math.

That’s going on in the background in order to compute what needs to be done at any particular moment. Yeah. And so the advances in the backend of the browser enable this to happen. And you’ve, it’s not in our show notes, but there was a lovely quote somewhere about actually, maybe it was Jen Simmons that said it, browsers are quite good at maths, so let’s let, or rather, computers are quite good at math, so why don’t we offload all of that stuff to the browser to handle on the fly.

And our experiences will be. broadly better. So yeah, intrinsic web design, that’s the bus that we’re all on at the moment. Whether or not there’ll be another bus just around the corner coming that we’ve got to hop on, but the least at the beginning of this chat, that’s, that’s what, that’s the bandwagon we’re on.

\[00:23:31\] **David Waumsley:** Yeah, exactly. And I’ve put down here I’m probably misusing the term, I’ve heard Jeremy Ke mention this, who’s a, kind of big player on talking about the web. He’s written a lot of books and, UK guy. but, just that recently, I, feel there’s a sort of sense that because everybody’s invested in making sure that the web platform, HTML and CMS.

is what everybody’s using. That’s the idea of the W three C is that it is the web for everybody, for everything as well. That it’s the thing that’s powering all the kind of different devices, not just the websites we build, but the apps and even TV and all that kind of other medium. So there has been a sort of splintering offers in the time, and I think we see that.

Going on. There was a bit of a cold war, if you like, going on. When there was flash and there was web standards, again with Jen Simmers again wouldn’t like it because the flash would’ve given of the pretties and the animation and the web standards would be boring, but more usable. And I think there’s a need to bring that back together.

That’s what’s making, I think the spec get looked at. Even HTML and stuff like that, because everybody’s reinvested in this, and to a certain degree, there’s been a lot splitting up between. what people do, what are frontend developers suddenly split along the lines because everybody, because there was improvements there, went to the JavaScript route.

So now a lot of people went to the single, page application route, which is entirely different. So we’ve got the split. So I feel there’s a, the sense where it’s a, shifting back where you might just wanna start with your h html because that’s, there’s no web without html and there’s no styling without CSS.

It. These two have a hundred percent share of the market. So the other thing’s always. addition. So I can see that moving. that’s another reason for the show to just see that kind of shift. it’s always happening, isn’t it? All the time through the web. Yeah. And the need, oh, sorry.

You carry on. No, I was gonna say about, I. Just bound in with that is that it’s, really the same point. It is just about following the standards and, stuff and getting back to that because there is we’ll talk about this I think later, but the really, the web’s been a series of hacks where we’ve all done our own things.

That’s why we’ve needed more JavaScript because the CSS hasn’t given us what we need. And, it does feel like we’re reaching a point now where. Wow, this is great. Almost everything that you would need to at least do layouts at the moment are much more stuff is there and it’s fully documented and it’s a standard of which we all agree by, which has so many people who can veto it that at any point, and it’s the way the browsers are going, that it’s time to embrace those open standards, start to get to the idea that there is this fully documented, even the meetings are documented that we can look to, and I think that’s good for us if we are doing it professionally, which isn’t, this chat isn’t intended.

Definitely for people who are freelancers. It could be anybody, but I think, if you are doing it for that, it can give you credibility if you have documentation that you look to. yeah. It’s

\[00:26:40\] **Nathan Wrigley:** interesting because you may. You may view the evolution of the web, as a splintering, but I guess it, it, has to splinter in order for it to move forward.

flash came along and honestly, it was the best thing ever when it happened. I know that people hated it and, there were obvious problems with, for example, on mobile phones. It was a complete disaster, but it

\[00:27:04\] **David Waumsley:** showed.

\[00:27:05\] **Nathan Wrigley:** What could be done. And so it made us all aware, we want things to be able to move around.

We want things to be able to, I dunno, show a video. We, that’s a really desirable thing to have on the internet. And, we’ve got it. Flash does it, but it’s not a standards thing. It’s, run entirely by this one company. But it showed, okay, there’s a desire for this, there’s an appetite for this, let’s put it in the spec.

And then, more recently, JavaScript frameworks to, to do animations and things like that. And a whole lot more as well. It shows this is what a modern internet requires. Here’s the things which everybody loves. We, can see, every website is using JavaScript to do this, that, and the other thing.

It must be what we need. And the point about the W three C and the CSS spec is they can’t, they have to be glacial. They have to move at a very slow and careful pace because once it’s in the spec once a particular thing has gone into the spec. You can’t, maybe you can, but you can’t easily remove it.

So it has to glo go at a very glacial speed. and so that’s just a another point. although we look at a lot of these splintering things and tot and worry about the splintering of the internet, I think they are the, way that the evolution of the internet has happened and probably will happen in the future.

\[00:28:31\] **David Waumsley:** Yeah, I think it’s always gonna be that sort of tension on there. Although it’s interesting at the moment, and I think that’s why it’s there. It’s is because there is that, if you like, the way that the W three C is organized and who it has in and the interest that they have, is that enough to provide us everything that we need from there?

And that’s the interesting challenge to it. But up to now, we’ve always needed people who have, I mean it’s the same with tables. We started with those tables and that, and of course, it’s a complete violation. Against what the html, this was designed for scientific documents to be passing around.

Terrible. Using tables for that. And then flash terrible in some ways for what the web is supposed to be. Some of the JavaScripts is an over complication, but not necessarily against it. ’cause the final output is the same. So it’s interesting to see how that’s pulling that way. And I think, also, if you’ve got that under your belt, you’re safe.

There is the element of open source, open standards. If you learn all of that stuff, you at least that’s your basis and stuff. And then you, we, most of us need to use some sort of tool to organize, which is open source and but to have your entire dependency on your open standards on open source is.

Something where I think there’s a sort of need to go back and look at what you can do yourself, without necessarily always relying on a tool. Yeah. So yeah, I think there’s that element and, oh, the general, what, there’s so many different points that we’ve got down here that we could talk about.

I’ve put actually a bullet point web for everyone, but I’ve pretty much covered that. Really. I think that’s just, I think they’re coming together more of people You can see a real excitement about. there’s never been over the last five years, I think for the idea of going back to HTML and css, we thought those days were behind us, didn’t we, Nathan? We thought we just.

\[00:30:21\] **Nathan Wrigley:** Yeah, and it, is interesting because I haven’t tried to deliberately collide with this topic. I haven’t gone out searching for information about this, but I have noticed that my social. Channels, they are beginning to fill up with this. And the more that I look at it, the more I see.

maybe that’s a function of the algorithms at play, but nevertheless, I’m definitely seeing that there’s an appetite for this and why not? why wouldn’t there be? It just makes sense to if the browser can do it. Then use what the browser has. It makes absolute sense and I think that, I could be wrong, but maybe in the next year, two years, three years, I think a lot of the things that we’re gonna be covering in the next few weeks will become foundational to what everybody does.

\[00:31:07\] **David Waumsley:** I’ve also, I’ve just remembered why I wrote. That’s that note. the web for everyone. What I’m talking about is what there has been recently, over recent years, which we’ve not thought about so much, is things about accessibility, performance, green issues, global data costs, reducing dark patterns, security issues, data issues.

All of these things have become much more prominent now. It was just enough to sign and get something out there, but we, have to look into things like accessibility might. Come into European law in the same way that we’re seeing things with, data sharing before that. So I think, that’s a lot of about, these are all the sort of things that are going on as well, and we can explore those, I think a lot better when we’re looking at how the foundations of the web platform, H-M-L-C-S-S, JavaScript and SVGs is made.

So that’s another reason for the show. Yeah, and

\[00:31:58\] **Nathan Wrigley:** you went through that list. You tripped through that list very, quickly. But if you actually. think about each one of those one at a time. There is a, there really is some importance attached to those. So if we just take the green web, just that one in particular, we could probably do episode after episode on that.

this, the whole environmental debate is not going away. It’s getting more and more important, but we seem to be, using our devices more and more rather than less and less and we know what that’s doing. So having solutions or. Having implementations of technology, which allow us to view things on the website with the minimal amount of engineering in the backend to get whatever it is that you are wanting to see in front of your eyeballs.

That’s really important. And so if you can cut by a third or a half or. Three-fifths or whatever it may be, the amount of CPU that’s being used, just that environmental bit alone is really important. And obviously you listed a whole bunch of others there, so we can drill into those, but it’s gonna become more and more important.

Yeah. That’s encapsulated

\[00:33:01\] **David Waumsley:** in this. Yeah. So on our site, we haven’t put this first episode up obviously yet, but we’re going to use the browser’s own player initially, Elise, because, and I think that’s that move with green issues. if the browser can do more for us, then we have to do less work and it’s a lot sensible, more sensible because it’s already on the computer anyway.

So rather than us having to pump out a whole load of code and extra resources to provide that to the viewer. It’s already there in their browser. Yeah. It’s interesting.

\[00:33:31\] **Nathan Wrigley:** So the possibilities, the options for us to play just the player of the audio on the website, that, we could have probably picked a hundred different JavaScript based solutions, but we settled for the one which requires nothing.

It’s just, and what does it do? It does everything that you want it to do. Yeah. It’s not flashy and whizzbang, but it does it. But curiously, interestingly, just that one thing, it displays differently in different browsers, which are, you showed me that in Firefox, it, has a completely different look and feel.

And there’s various things that are available in Chrome that aren’t available in Firefox, for example, play, a speed. You can’t speed it up to one and a half times and all that. So there’s gonna be loads in all this. Oh yeah. But yeah, we’re, going minimal. We’re definitely going minimal using what the browser can do.

Yeah.

\[00:34:14\] **David Waumsley:** Yeah, and I think, just for a while I would’ve thought if you wanted to call yourself a developer, I’ve always felt like this. And now I feel a little bit more, happy about the idea of learning what I’m learning now. Because I think if you thought of developers, I never would dare to call myself that.

I know you, you are the same with safe work. Because front end there hasn’t been that because this CSS and has all been these kind of hacks and tricks and you’re just messing around with what should be actually a very simple language. It’s a declarative language, which is, one of the best things about the web, if you are using HTML and CSS, if you mess it up, the browser will still cope with it.

It’ll just ignore the rubbish that you’ve put in there, which something like JavaScript, all these other. Programmer languages would need to do. But I think it’s now because there’s a sort of system developing that there’s a chance now for us as frontend developers to use what is basically a simple setup, if you like, that’s forgiving and, but still do it in a very creditable way.

So I think there’s a credibility for being a frontend developer in a way that. Ally, there is a very complex system in CSS that didn’t really exist before. It’s a little bit hacky and the proper developers would just do anything to stick tailwind in instead and not have to deal with all that nonsense.

And I think that’s changing. yeah. Yeah, so,

\[00:35:35\] **Nathan Wrigley:** there’s a route to employability really here as well, isn’t there? if you can, work out what, the browser can do for you, you can obviously. Tout that as something that you can do and you can express your green credentials and so on.

But, but yeah. Interesting. How much. Has changed in the recent past and how much I’ve got to learn. but yeah, we’ll see as time goes on. Okay. What’s next?

\[00:35:59\] **David Waumsley:** no, I think that’s probably just, we have got a few other little points, but I think maybe we’ve covered it. But you just said something which just prompted me, something I’m sure we’ll get into later.

which is the power that a front end developer now has with this intrinsic design. I was mentioning this to you before and it relates to again, Jed Simmons. Talk about the fact that. The tradition of web design has always been that someone has the idea, you do a low-fi version of it, then a high-fi version of it, and then you hand it over to the front end developer to code it up or whoever that is.

Whereas now, because there is so much to think about with this performance accessibility, how these will display on different platforms, you’re not got just three devices you’re looking at. Suddenly there’s a power with, the people who are doing the front end. So just learning a bit of HTML and CSS you, you can become quite a powerful person in the whole design process, I think.

\[00:36:53\] **Nathan Wrigley:** Yeah, it’s definitely a route to employability, but as I said, for me at the minute, it’s not because I just simply don’t know it. So if, as you’re listening to this, any of this is, rung a bell and you think, Yeah, maybe there’s some, maybe there’s some learning that’s gonna happen in this chat.

Yeah. Go and visit the site. I don’t know as yet how we’re gonna do things like subscribing. You can obviously do that, in your chat player of choice. Again, give us time to, to get a feed going and all of that. We’ve gotta work all of that out. But the website will be called no Script Show.

\[00:37:29\] **David Waumsley:** Yeah, it’ll have a, it’ll, have a rubbish logo.

’cause we might even talk about that later. Throw it open. ’cause we just wanna cover everything, don’t we? We might do when we’re actually building a site. And the thought process, if we can with this. do you think we’ve probably talked for long enough on this first

\[00:37:43\] **Nathan Wrigley:** episode? I think so. I think we’ve explained really what the premise of the whole show is.

So hopefully, dear listener, you have understood what we’re trying to do. Stay with us. and hopefully we’ll achieve it in the days, weeks, and months to come,

\[00:37:57\] **David Waumsley:** yeah. Yeah. Can I’ve actually got a, bit of a, shall I just say what I think is next up? Yeah. I’ve sent you the, yeah, I think, if we are all agreeing and people are sticking with us, that there is a bit of a paradigm shift on there, the fundamentals, as we’ve said about web design.

Completely changed. So conversations you and I have had on the other chat for seven years can be revisited with a new light again. But I think maybe for next time, the best places to start is with the CSS and what the changes there actually mean for us. And Most, a lot of people are just not author authoring, CSS themselves.

you and I included first yeah, Melvin in again, we use third party platforms, but I think now it’s been massively refactored into something more comprehensive and logical. It’s probably start with, someone who’s better explaining that. So what we’ll try and do is have a look at, Rachel Andrews, who’s.

Somebody who pretty much, almost is a one woman mission, I think to get CSS good to us. she’s a real expert in this. so we’ll look at some of the stuff that she says about that. And even if you are not thinking of getting into CSS or coding it yourself, I still think it’s quite useful because it might allow you to evaluate something like a framework that you want to use.

Which one’s gonna be best for you? That kind of foundational knowledge. ’cause Stephanie, things have changed. So I think that’s what we’ll cover next. We’ll start with the dreaded CSS.

\[00:39:24\] **Nathan Wrigley:** Yeah. And just as a little addendum to that, if, you tune into that episode, I, it’s more or less guaranteed if you haven’t been keeping up to date with it, that you’re, there’s gonna be some little nugget that you didn’t even know, David’s been drip feeding me for months.

Now. All of these little bits and pieces that he’s been discovering and. Honestly they’re buried. You have to go find them. And so it’s it’s fascinating and hopefully we’ll surface some of those. Yeah. So I guess that’s a wrap on the first. It’s no script show. I dunno if we’re even gonna call it that. I think it might be called the no script web show or a variant thereof.

We’ll see. But the URL wants more. No, no script show. That’s it. Episode number one is done. Yeah. Thank you. We’ll be back at some point.

\[00:40:07\] **David Waumsley:** Thanks David. Yep. Bye-Bye.
</details>