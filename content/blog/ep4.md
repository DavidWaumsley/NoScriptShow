---
title: What is intrinsic web design?
description: Web layout from a designer's point of view.
date: 2024-02-02
tags: ["podcast"]
permalink: "/4{{slugify }}/"
videoid: gqsU-ysvQF0
---
Show Notes
----------

Intrinsic web design was a term coined by Jen Simmons in her 2018 talk called ["Everything you know about web design just changed"](https://talks.jensimmons.com/GdnO62).

We add our perspective to Jen's history of web layouts and ask what does that mean for us? And do we need to approach projects and client's differently?

### What is Intrinsic Web design?

Perhaps this quote best explains how it is different to responsive design:

> "We're programming a flexibility model, not telling elements exactly where to sit and how to look."  
> \- Jeffrey Zeldman (paraphrasing Jen Simmons)

**Key points:**

*   CSS Grid and letting the browser calculate size and alignment.
*   New creative possibility without disregarding web standards (the web's universal approach to communication).
*   A more abstract approach to visual design.

### The history of web layouts

An overlapping history that loosely goes from flow only to HTML tables to Flash to fluid to fixed to responsive.



<img src="/img/Instrisic-design-history.avif" alt="A chart of Jen Simmon's history of web layouts">


<img src="/public/img/image.png" alt="testing">


### What does this mean for us?

*   Re-educating ourselves (possibly without making a podcast) ?
*   Setting better expectations of the web for clients (ie. HTML/communication first) ?
*   A change in how we organise web projects (reversing the picture to web approach) ?
*   More creatively with space (thinking outside the fixed box)?

### Jen's CSS layout resources

*   [Jen Simmon's web layout experiments](https://labs.jensimmons.com/)
*   [Layout Land on YouTube](https://www.youtube.com/layoutland)


  <details>
<summary>Transcript</summary>

        \[00:00:05\] **Nathan Wrigley**: Hello there. Welcome to this episode four of the No Script web show, which is all about modern front end web design. We'll be looking at what we can build today with minimal dependencies and skills.

Today we're talking about intrinsic web design, a term coined by Jen Simmons in her 2018 talk, which was called Everything You Know about web design Just Changed. She. iss, a graphic designer, educator and speaker, a member of the CSS working group who worked on CSS grid layouts. She worked as a developer advocate at Mozilla and later at Apple.

we'll be adding our perspective to Jen's talks on the history of web layouts and asking what it means for us. I cannot have these conversations by myself. And as always, I'm joined by David Waumsley. How are you doing, David?

\[00:00:53\] **David Waumsley**: I'm very well, thank you. Yeah, that was a good introduction.

\[00:00:58\] **Nathan Wrigley**: Yeah. Thank you. I'm glad that you wrote it for me.

\[00:00:59\] **David Waumsley**: Yeah. Oh, so shall we start? We've got some headers, haven't we? Yeah, we've got that. and was starting with, what the heck is intrinsic design? Which, I do remember on the first episode we was doing for this show where I've mentioned that and then chuck it at you and said, do you have a definition of what is? And the answer

\[00:01:18\] **Nathan Wrigley**: was, I really didn't. and to be honest with you, I'm still a little bit. Hazy on it because there isn't a, an exact dictionary, different definition

\[00:01:27\] **David Waumsley**: is there. no, of course not. And I think, I get from the talk itself that Jen did is that she's just wanting to signify whether you use it or not. I think she even says, just wanted to say that. I think with the technology we have and the approaches we have to web designing that it warrants. Another name other than just a bit more responsive. Yeah, responsive plus. Yeah. Yeah. yeah, I thought there's a good, we've got it actually up on the screen there.

There's a quite a good quote, I think. it's taken from a tweet from Jeffrey Zeldman, who's paraphrasing Jen Simmons, and I quite like that as my way of understanding, Intrinsic design as being something different to responsive design.

\[00:02:16\] **Nathan Wrigley**: I'll read it out for the people who are listening to this.

So Jeffrey, in his tweet said, we're programming a flexibility model, not telling elements exactly where to sit and how to look. So it's very much open-ended.

\[00:02:30\] **David Waumsley**: Yeah, and I think that probably with the technology, with the way that we have with CSS grid particularly, and Flexbox before that, but in a way, when we got Flexbox, we tended to not use it fixed flexibility.

We tended to set the, kind of fixed wits on it, but now all of these kind of ways that the browser can now calculate the size of items and align them for us according to. The user that they find do the calculations first. I think that's what she's getting over, I think with this. And that is slightly different from the responsive designs.

'cause when we got that, we just thought it was a reaction with the media queries, I think to, having the iPhone. So we thought, okay, we need another version of the phone with the iPhone. We'll use the media queries and then we'll just design something and we will fix where things. Exactly are going to sit and look, where they're going to sit and look.

Yeah. Where I think now we're moving away from that. We're now thinking, you know what? We'll never know. There's so many different devices out there. Let's stop trying to do, let's let the content decide that the size that it needs. And I think that's probably the big thing about it. I think

\[00:03:41\] **Nathan Wrigley**: that's quite a hard thing for us to get into our heads as well, because we really have spent a long time, decades on the internet trying to get things to look exactly.

As we wish them to look and to know exactly where every pixel will be with any given device. Yeah, so if you were to open up a tablet and I, you could tell me the dimensions of it, I would be able to predict exactly where this. This div or card or content piece would be, but this is a bit more, this is a bit different, isn't it?

you just generally say, okay, these things will probably be about there, but I'm not entirely sure based upon that device because everything is entirely, and I'm gonna use your word squishy. Yes. Squishy. everything can move in its own way and it will be very hard because the maths is being carried out.

On the fly as opposed to it being based upon viewport. So at some point it, it does exactly this. This is a much more fluid, it's doing whatever it says in a kind of curved way. if it's, if, we move things, if we make the viewport smaller, all of these. Pieces are going to move over, but we're not entirely sure where they're gonna end up. So yeah. Yeah, that's

\[00:04:50\] **David Waumsley**: a new challenge and I think it's very different from the way that we've looked when we've borrowed from print and we've looked at, generally we thought to templates. We make our boxes and then we put the content into those boxes and we think, oh, okay, that box won't sit, there'll have to go underneath on the mobile.

And we do that. But we still think of it as the same fix W box where now this suddenly this idea that. you're gonna say, you want this content to have enough room, but let the browser decide where it is and you'll style this content. And I think it's just a complete mind flip. And I do think there's something that I thought was quite interesting because it, it's eight years on.

When Jen did this talk in 2018 from when the List Apart event talk was done, that really brought in the Ethon Marcotte, brought in the responsive era, but he started that off with a quote, which goes back to 2000. I'll read that one 'cause I've got it on my extra notes, which is we should embrace the fact that the web doesn't have the same constraints as print and designed for this flexibility.

But first we must accept the ebb and flow of things. And I think in a way, you know what? I think what Jen's doing with this one is having another crack at if you like, at the same thing that we have to, with better tools now to be able to do that to, get us to think about content and it becomes A HTML first approach, isn't it?

The, you are styling to the HTML document and the content that you put in there, rather than the kind of reverse where we style things and then made the HTML stuff fit into the boxes we designed right.

\[00:06:31\] **Nathan Wrigley**: Yeah, I think it's gonna be really interesting. I think it's gonna take a whole new generation of people to get into this system.

I don't mean a new generation, as in it has to be the younger people. 'cause obviously you are absolutely fascinated by this at the moment. But you, are, really gonna have to, not unlearn, but just put a completely different layer over what you have already learned and be willing not to know quite where everything is.

But I also think it's quite freeing because you can just put something on the page and be satisfied that it. It'll do something adjacent to what I want, but I won't know exactly where it is. And we've been very much focused on knowing exactly where everything is based upon the device size. And, you only have to look inside the Chrome browser and things like that.

And it's obviously got all the different devices by name. And, maybe that whole process will change because it'll just be, drag it in from the left, drag it in from the right and just see, if it's behaving in the way that you'd anticipated, and if not, rewrite the CSS to, to match exactly what your expectations were.

But none of this is new. Is it 20? What did you say? 2018 was when? Jen did this

\[00:07:33\] **David Waumsley**: talk for that talk. Yes. And then, eight years before for responsive, alluding to this ebb and flow thing that's been going on for ages, going back to 2000. So it's always been there. This I idea, I guess it is just that the technology, because we can not so much have to set size into absolute pixels, and we have a layout tool that does it, it does open up loads of.

I, I think creativity. I think that was her main thing because she's a designer coming at it. And actually we can talk about that. I guess while we talk about the main part. A good part of her talk was about the history of web layout, so maybe we can just chat a little bit for those people watching the YouTube, we have actually borrowed, One of her slides to just show her kind of loose history of overlapping changes in the web. Going from only having flow only in the beginnings in the nineties to H TM L tables to flash to fluid where we would generally. Our sites with percentages ourselves to fix, where we ended up getting a lot of these frameworks in the nine 60 framework was particularly popular.

Yeah. Where we spotted everything into those fixed widths, then moving to responsive and then to the unknown, which I think is catching on as intrinsic as an idea that we are perhaps in a new era. So yeah, it

\[00:09:01\] **Nathan Wrigley**: seems to be the watch word at the moment, doesn't it? The word intrinsic design seems to be popping up more and more.

Yeah. which I think is gonna be the, The future for, the foreseeable future. However, the chart that we're showing on the page, probably does give us some intuition that Intrinsic will be here for a period of time and then will be replaced by something in its turn. But for now, it does feel like, yeah, it's the next evolution.

But she also, there was a little quote, and I can't remember the exact wording, but it was something along the lines of, in, in, evolutionary terms, the internet is that period where the fish. grew legs, the fins became a little bit more rigid and suddenly some of the fish could waddle out onto the land and all land based, Life, which can, which is mobile came from that moment and she was likening where we are to that with the internet. And I think that's a really good point. You get the impression that everything we've got now is the destination. But it isn't, we're just literally beginning the journey and maybe, a hundred years from now, the internet will still be around us.

Probably entirely different in the way it's consumed and the kind of devices that are available. But probably look back on where we are now, and it'll just be one of the, one of the cards on Jen's charts Intrinsic design. Oh, how, oh, how quaint that was.

\[00:10:22\] **David Waumsley**: she was very much on the mission of the web as opposed to just the internet keeping that.

Because the core foundations of that is that, hasty mail, the ability to be able to share information with each other, given to us for free for that and to keep it on board with that. And I dunno what you got from the her account of the history, but for me it was a little bit about, I.

Because she frames it within this idea that you've got the designers who want things to just look pretty like hers and the kind of standards people who just go, we can't lose this thing. Where it's able to communicate with anybody, whatever the device they've got, whether they can't read or not, we need to keep that HDML markup good.

And there's always been this battle. Which she thinks is now solved. And the two points I, suppose in the, story was the HTML tables. Oh yeah. That made stuff pretty, but it ruined the web, didn't it? Yeah. Purpose of it.

\[00:11:14\] **Nathan Wrigley**: you couldn't, can't, can only imagine what the HT ML markup of a tables based layout look like. It would just be a 99% junk that you don't

\[00:11:23\] **David Waumsley**: these days need. Yeah. Exactly, and it couldn't work on all devices. It was useless for a good percentage of people who couldn't read the stuff, but it gave you graphics and pretties, And then of course, from Flash, it almost went entirely off, didn't it?

Because then you've got proprietary code, which was only effectively embedded in the HTML, that it had no relationship to HTML. So it was unusable by basically anybody who wasn't signed up to. to go in this whole proprietary route. So yeah, I think after, that point, I do think then we start to get into the more problems of okay, we have agreed that we, need to keep the HTML clean and readable and serve everybody.

And then the rest of it becomes, how do we make the design work?

\[00:12:08\] **Nathan Wrigley**: That's right. Yeah. That's interesting. if you could stare into the mind of people like, Vince Cert and, oh, who's the other guy that's usually, regarded as one of the founders of the internet. Tim Burners Lee, that's it.

Oh, yes. Tim Burners Lee back in the day when they came up with the, idea of hyperlinks and all of that. Just no intuition that the internet would be anything other than an academic exercise that would probably be connected. With a handful of computers in major universities, and that was it.

And so the idea of moving text around was it, but then it just, it exploded. Suddenly people had this intuition that it could be used for a thousand different things. And everybody got really excited. Modems came along. We all got computers of one fashion or another. And like you say, ht ML tables, suddenly people figured out, oh.

We can make it look a bit like a magazine. Yeah. that was not expected, but it had to be crowbarred in. Then obviously everybody realized, hang on, we've lost the content somewhere. The actual content is just surrounded by a load of junk HDML that we don't need, but we really like it to look pretty.

So who cares? We'll make it look pretty, even though people who can't see it, can't, consume it. Like you said, flash, which is a little black box, a box that nothing could communicate with. And, now we seem to have gotten full gone. Full circle. Yeah. And we're now hopefully at a stage where it can look pretty.

\[00:13:35\] **David Waumsley**: But it's just HTML and it's web standards. It's keeping the web as one. I think the worry with things like Flash was the break off. you go to this propriety thing, suddenly this free tool for communication that we can all use, which at its core is HTML, if that's lost, which it was really with breaking, HTML with tables and, then going off, away from it with flash.

And she does make a little thing, and we'll, address that later a little. There's a. Passing comment is not on there. She's not talking about component based design and the move to JavaScript in CSS Oh, CSS, sorry. In JavaScript getting right way round. Yeah. But she did allude to the fact that they, that complexity, that, it still, always.

Has the potential to produce standards, but it does move it and makes it more complicated and switches the normal route of how the web is built with JavaScript being an addition to the HTML and CSS, so we'll talk about that later because it's quite interesting how there has been a shift back, I think, for those people who came in with JavaScript. Back to the HTML again? I think so. Even since her talk, I think. But that's for later episodes. I think

\[00:14:44\] **Nathan Wrigley**: But it, but yeah, just to reemphasize that point, we really don't know what the destination of this is, but we know that what we're doing at the moment is probably more akin to the spirit. It's got the standards, it's gonna be hopefully consumable by all sorts of different people who can consume things with their eyes or with their ears or whatever it may be. And, and it, does feel like a. we're going back to something which got lost by things like tables and flash

\[00:15:11\] **David Waumsley**: and all of that. Yeah, that's why I think we're always with this stuff where everybody seems to be looking backwards to see where we got to where we are now. But I think interesting because her table of dates on it, doesn't reflect my reality in the real world because it, markets are so much different, aren't they?

when something may have gone out of fashion to those people who technically know, like her, who work on the spec, reality has it become. It can become even more popular. So things like Bootstrap and jQuery, we're still growing up to a year ago and still have a dominance in the market.

And, something like Bootstrap doesn't ha I think it's still experimental when it comes to Grid. So and we're, grid goes back to 2017, so we're catching up. So you see how things probably are 10, I would say in the real world, things are about 10 years out on her. kind of history if you like.

\[00:16:06\] **Nathan Wrigley**: Yeah. She's very much a thought leader though, isn't she? Yes. and I think that's also something which I find remarkable about people like Jen, is just that capacity to stare into a crystal ball and imagine what could be, and then collaborate with other people to build the, spec so that can be, and then communicate with the browser manufacturers so that all of that can be implemented.

All of this stuff going on in the. Background, but just feeling, feeling into the future as to what it can be. And then you and I and people like us, we get the trickle down from that. Once it's been built, we then start to explore what we can do with it. So it really does make people like us seem, almost messianic 'cause they, can build the future and imagine what that would look like and, have the, passion to push, their agenda and their vision

\[00:17:02\] **David Waumsley**: through. it's people like yeah, there's always somebody I think in the working groups on a spec at the time. So we got her and then we got, Rachel Andrew, who we talked about last week, and we'll be talking sooner about Miriam Suzanne, who effectively is the same sort of role in the working groups when it comes to container queries.

And thank it's, I'm so thankful that we've got people like that who can relate it, that they built websites and they can relate what's going on the technical side of the W3C into stuff that we might. Understand how we might put it to use, so

\[00:17:35\] **Nathan Wrigley**: yeah, it's interesting. I wonder what the, and again, we, I'm going off piece a little bit here, but I wonder what the incentive for them is.

So obviously they've got the time to do it, so they, they must have some sort of, job. So in Jen's case, I think you said, worked at Mozilla for a long time and perhaps is at Apple now, although that. I dunno if that's still the case. So these companies, it's may, maybe there's a philanthropic element to it.

So we're talking about, standards based and it'll be able to be viewed by everybody. But maybe also it's just good commercial sense. if Google's Chrome browser, which seems to be. Really the browser of choice for almost any part of the world that you care to go into. If it, all of these things are built in, it makes the, it makes whatever they build more likely to succeed as well.

And if we can convert everything over to the web and rely less on, I don't know, proprietary software sitting on a desktop computer, if it can all be handled online, that works for them. As well, So that kind of philanthropic versus company, discussion is quite interesting.

\[00:18:44\] **David Waumsley**: Yeah, sure. Just, move on a little bit to Yeah, we've put a little section here, just some questions for ourselves on what does this mean for us?

And I put the answers in here as well, which was, we do, I do feel there is a bit of reeducation that's needed going on. we covered it a little bit last time in the sense that we were referring to. Rachel Andrew says It's often easier to teach somebody who doesn't know CSS today because we have to think about it in a very different way because suddenly an outpouring of a load of changes have come to it and, a new mental model.

The intrinsic mental model, I think means that we have to reeducate ourselves, so not everybody can. Set up a podcast, but, that's our way of doing it, isn't it? Yeah. And it,

\[00:19:32\] **Nathan Wrigley**: but there is a lot to, I don't know if unlearn is the right word, but there's a lot, like I said earlier, there's a lot, there's another layer, just a slap on top.

Yeah. But a lot of the layer, which is slapped on top means that the layers beneath, there's bits of that no longer are worth thinking about anymore. And it's figuring out which bits of the new knowledge. Which bits replace the bits that I used to know? and I think that's gonna be the journey that I'm on.

'cause I'm very much at the beginning of all this, and I've got a lot of reeducating to do. And for me it's quite hard because I'm constantly thinking, yeah, but I could do that with, something that, and then you figure out, oh no, but then it wouldn't enable this possibility. Wait a minute. So there is quite a lot of reeducation, and I think, I'm sure you're right.

If you're a, if you're a, a. Person just going into college or just beginning on your web development journey? I think you've pro, you've probably got the, a shot at doing far more learning than I will do because mine is gonna be bundled up with forgetting what

\[00:20:32\] **David Waumsley**: I've already learned. Yes. I, we put down, I put down setting better expectations for the web for clients and, I mean is, I think what this is trying to do is get us a little bit back to that. We are putting out content in HTML and the styling goes over the top of that, where I think for most. Clients their expectation is, and their experiences are pretty sight, which they see in their one particular view and say that I like something like that.

Yeah. 'cause that's their experience. they probably won't understand unless said otherwise, that, the importance of GOOD HTML in terms of helping them to get visitors because it's, search friendly and, being able to reach. Many more people and designing over the top of that. So I often think there's a lot of trying to not only cope with the fact that we're almost flipping the way you design upside down.

Also, I think, if you have to do it for somebody else, they usually come in with an expectation of show me a website and I'll tell you if that's what I like the look of, But there's so much more to it than that, isn't there? Yeah.

\[00:21:50\] **Nathan Wrigley**: Yeah. How much of this do you think you are gonna be, pushing forwards into your client's lap?

Or, are you gonna be talking about any of this? Will the word intrinsic design ever exit your mouth when you're talking to clients? Or is it more about, okay, this is, look, I'll show you roughly what it'll look like when we, use a different variety of browsers. Are you even gonna get into that?

Are you just gonna, I think the word responsive design has landed so well out in the real world that I think even non-technical people understand that. There's some something going on when you look at it on a mobile that's different to a desktop, but do you feel that you need to educate your clients with the technicalities of this?

\[00:22:30\] **David Waumsley**: as I've learned, I think I've started talking about it differently. I do talk about it as in terms of the content that we need, because at the end of the day, it doesn't matter how it's styled to a lot of people. if that content isn't reaching everybody who might want it and that search engines, et cetera, can't see it.

So we always start with the content and then we say how we're going to beautify that content from there. Yeah. Yeah. And I think that's it. And because of that. That approach to it, it makes a lot more sense to them. So usually the first conversation is about how the, how the message is gonna go and reach people, so the content

\[00:23:01\] **Nathan Wrigley**: comes first.The design is a definite

\[00:23:04\] **David Waumsley**: second, right? So I think it's easy to explain to them in that way, if it had no design, it would still do quite well, as many. Badly designed sites, if they've got the fundamentals underneath, can do quite well, it's interesting

\[00:23:18\] **Nathan Wrigley**: though, 'cause that's a profound shift for a lot of people, isn't it?

Because really the, building of websites, it very much felt like the, design was, I. Central to what the client wanted. it's okay, how's it gonna look? And you fill it up with LO and then, you pull the LO out and hope for the best. Whereas this is exactly the opposite.

Let's just start with the content. Let's get the message get the words right, get all the assets right, and then.

\[00:23:49\] **David Waumsley**: you do. You know what I mean? That's it though. So the next point in probably changing how we organize web projects, right? And she alludes to that in the talk, doesn't she? With saying the typical thing is that someone has an idea, then they get a rough draft of that idea, better draft of that idea, and then it goes to the person to turn that into the code.

And that really is the way it's always been done. But in a way, it's the wrong way round because. there is something to know about how that's co the intrinsic bit. I wouldn't use it with clients, but I think the intrinsic is saying that it's still intrinsic to that web standards. HTML means of communication.

The design is a part of the content and that's, in a way, while we're. While she's doing all her clever experiments, which she does, which we put links to on the show notes there to her layout, land where she does experiments. She's coming in from the, I want it pretty and the designer, but knows from a. Standards perspective, she needs to have this good, clear, marked up communication in the HTML, but I think what she's seen is, oh, I can have lots more fun with this. And I think that's the way I'm trying to sell it now on to clients without using intrinsic 'cause It doesn't mean it's just, it sounds like Tech Talk, doesn't it?

\[00:25:04\] **Nathan Wrigley**: interesting because it feels like the workflow. Of a project is amended. rather than the design coming first or at the same time as the content, that the content comes first, the design then comes second. But it doesn't, marginalize the importance of the design.

It just, yeah. and it's not like designers are gonna go out of work. Exactly. In fact, they're gonna have a lot more, to think about. But it just puts it in a different. Position in the Yes, in the project workflow. it, it comes after the content, whereas I feel very often it, it was the other way around.

\[00:25:37\] **David Waumsley**: Yeah. Yes, and exactly because you can't control the devices that people are coming in on their experience. And of course, something that Jen talks about in lots of other things. I'm not sure in that talk. But otherwise, she's very keen to point out that, whatever design you do, if somebody sticks it in reader mode or they decide they have high contrast on their computer or they're on the screen readers, all that, all of what you've designed isn't there.

So the essentials, we all must agree is that everybody can I. Get this content and that's a well marked top HTML. But I think what she's making as a designer is like, wow, there's some of these clever stuff. And actually it's a harder task for the designer now because you can't fix 'em into these boxes any longer.

There's come in different devices, so now you have to be really inventive and imagine lots of different flows for your content. So people will lots. Lots of different experiences, all of which will be great from a designer. So I think the designer's more important now, but I just think the traditional approach of the designer where they would just create something that looked pretty with just their colors, and that's your box where you gotta stick that text in there and this is where you're gonna stick this widget and. That approach to it doesn't work. The, I don't think it'll

\[00:26:48\] **Nathan Wrigley**: be, quite interesting because in the past you had so many conversations with designers where you would get the design and then you would figure out that the content wouldn't fit in the design. Now, it's entirely possible that conversation will go in reverse and you'll give them the content and they'll, the disciples will say. There's too much content. we can't get the content into anything like a reasonable design. So there'll be interesting trailer, your menu is, it's lovely, but there's 97 items in it. we can't deal with that. You've put everything front and center, so there's just, we have to figure out new ways to have these conversations and new workflows to make it, work. I. I think

\[00:27:25\] **David Waumsley**: Nathan, you put on your tab just for those on YouTube. I think I did you put that her labs where she's got lots of little experiments. these are a bit out date 'cause there's so much more you can do. I mean if you make that responsive, I think you should. Yeah. So for those

\[00:27:40\] **Nathan Wrigley**: that are listening to this, we're showing, and I'll give you the, I'll give you the RL it's labs dot Jen Simmons.com.

I'm sure David will put that into the show notes. But what we're staring at is a. Is a, like a desktop ish layout, but everything is on its side, and as I reduce it. You can see that essentially lots of the different pieces. It now looks like it's in two halves where the top half is moving up and the bottom half appears to be moving down a little bit.

Then suddenly everything that was at 45 degrees at some point went to normal orientation. Yeah. And as we can see, it just so smart. So it dramatically changes the way it looks. Yeah, based upon the design and, if you're watching the video, you'll be able to get an, impression of that.

But yeah, go to jen labs dot jen simmons.com and and just play. With the, the widths and the view port and you'll Oh, it's so

\[00:28:40\] **David Waumsley**: clever. I love it. Yeah. And it changes, doesn't it? I think, that idea that you might go, oh, I've had an idea. And every, but 'cause what we've always tried to do with all our designs is when we've said, okay, the visual design is what we want and we want everyone to experience it.

We've been trying to. Bang, these kind of square pegs into round holes with it, trying to make the code underneath work. but that's it. That's, it is that kind of thing, which I think is just clever design I can't do because okay, there isn't one experience for people, but you can't force an experience that's gonna be brilliant.

But what you can do now is you can. Create a range of experiences,

\[00:29:20\] **Nathan Wrigley**: And, it looked every si even if you do a tiny modification to the width of the window that you're looking at it in. I'm just gonna move it by what I consider to be a centimeter on my screen. I know that unit is of no use to anybody, but you get the idea.

Some, it's changed, like you can't predict where it's gonna go. you can roughly predict where it's gonna go, but, and there we go, little tiny change again and another one, and another, and then there's suddenly a dramatic change. Yeah. And then another dramatic change about now. Then we go back out.

Little change. It's just, you're right. I wouldn't have the faintest idea what she's done here, but

\[00:29:58\] **David Waumsley**: it's and she could put all the text on an angle because the space is there big, but it wouldn't work small. So I think it's a great time for design. Sometimes when you talk about the web standards, which I'm very keen on getting the HTML right.

Sounds like you are. Poo-pooing it. And I think that's what Jen's talk does for us, comes in with a designer's perspective where you go, yeah, sure it needs to be good. Everybody needs to be able to access the content you make for the web. That's just a given, isn't it? But then you can still be beautiful with stuff.

You just have to think a little bit differently. I think you have to work from the content rather than the design, and then stick the content in it. You make the, content, flexible and interesting. So it. Only needs, it doesn't have more space than it needs, but has space needs. Yeah. I'm with

\[00:30:45\] **Nathan Wrigley**: you. And I think that, I think it's gonna be interesting for people who, create these websites, especially if their role is, the content, let's say, is encapsulating that to hand it off to a designer to suggest what that design could look like. Yeah. I think there's a whole new set of skills that we're gonna have to get new conversations to get into new ways of figuring out new workflows, but ultimately I think we'll manage it.

\[00:31:09\] **David Waumsley**: I think it translates To I, yeah. I think any client or the type of client I work with, when it's just the solo owner, it's easy to get over the fact you wanna get your message out there. The easiest way is to make sure you get good H ml that Google can read full of that stuff, and then we can have some real adventures about how this content's got the design, which gets us back to the, let's start with the content, Yeah. yeah, it's a great system. I think so, yeah. Different from what we've done, I think in the past. We

\[00:31:38\] **Nathan Wrigley**: should probably plug, Jen Simmons YouTube channel as well. She's got a yes, a channel called Layout Land. The, I imagine you'd be able to Google that, but if you can't, the, it will be in the show notes and it's, it's video after video of her, showing all sorts of interesting, things that you can do.

I haven't consumed even a. 10th of what she's done. But it's all really fascinating and breaks, breaks apart one little problem at a time

\[00:32:04\] **David Waumsley**: and it's, it's lovely. Yeah. Yeah. the only problem with it is that some of the stuff has moved on. You might do some of that stuff differently, but it's still, I think it's a useful, she's. She's good at talking as well, so Yeah.

\[00:32:16\] **Nathan Wrigley**: Yeah, she is. She's very good. How do you feel? Have we, managed to get through that episode or? I think we have. Yeah,

\[00:32:21\] **David Waumsley**: I think we have. Shall I just lead on quickly? 'cause it does lead on from her. Talk a bit into the next one. We'll, we've got two episodes which we'll do next, which we'll really be talking about component based design, which you didn't talk about.

And at the time of our talk in 2018, we didn't have container queries and. I think that's component based design can come outta that. But we've also got something called web component. So I think next time I think we'll talk about component based design, because when you're looking at Jen Simmers, this is really somebody who's making a document.

Look beautiful. Basically, it's how we started with the web and that's all she refers to. But there is this sort of other movement isn't there where we, actually the web is just these little blocks of UI that we build up. Yeah. we'll I think next time we'll be, that's just a little lead in it comes out of a talk.'cause in some way she makes reference to it, but doesn't cover

\[00:33:15\] **Nathan Wrigley**: it. So component based design, container queries, all that kind of stuff. Coming up in episode five, we're taking it. Each episode is just recorded. When it's recorded. we'll get them out as we get them out. So it may be that we manage one every week, or maybe it'll fall into a, shorter cadence or longer cadence, who knows?

But for now, I guess we've wrapped up number four. yeah. And we'll see you. On the no script show next time. For the, for those of you that are listening, the website is being, updated with the bits and pieces that we've talked about, and you can find it at no script show and then you just do forward slash and the number of the episode.

So there'll be no script show forward slash four. And yeah, there we go. I will see

\[00:34:02\] **David Waumsley**: you next time, David. Yeah. Lovely. Bye-Bye. Bye bye.

 </details>