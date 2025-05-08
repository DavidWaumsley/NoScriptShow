---
title: What is component based web design?
description: Making websites with reusable UI building bricks. What the web platform offers us and do we need it?
date: 2024-02-29
tags: ["chat"]
permalink: "/5{{slugify }}/"
videoid: f7VUb-7bF28
---

Show Notes
----------

Somewhen in the 2010's the people on the web had a shared epiphany. Building websites was no longer about our ability to style HTML documents (to show off in the [CSS Zen Garden](https://csszengarden.com/) ).

It was about our ability to identify and create reusable blocks of UI to build (brick by brick) our websites. When we say sites we mean apps. Sites were just so 2009!

### What do we mean by component based web design?

We are simplifying, but...

*   The shift from styled pages to design systems of reusable UI building blocks.
*   The impact of Atomic Design by Brad Frost and Facebook's React in 2013.
*   A different type of "separation of concerns".
*   Bootstrap, Google Material design, Page Builders and Gutenberg.
*   In CSS the BEM (Block Element Modifier) component approach.

Brad Frost's 2023 talk called [Is Atomic Design dead?](https://www.youtube.com/watch?v=PK_PICNTgAg) gives a good historical account (from a design systems point of view) of the fast change of tools, approaches and terminology over this decade.

![Diagram of Atomic design.](/images/atomic-design.webp) Borrowed from Brad Frost's Atomic Design.

### Do we need component based web design?

The "don't repeat yourself" (DRY) principle behind component based design is sound. Even better, you can steal from others. But it has not been without issue:

*   Scores of complex design systems. Not very agile.
*   Many JS frameworks reinventing the browser.
*   A division between frontend devs and with the web platform.
*   An overkill of cool, but user unfriendly widgets.
*   JS Burnout and extra mark-up for CSS (BEM).

The pendulum swings, but ultimately we have to decide ourselves based on the type of work we do. The human tendency is to follow the pack.

### What are our component options?

React JS a decade ago allowed for CSS encapsulated components, but it was a 3rd party framework dependency.

If we want to purely stick with web standards (that will last for as long as we have browsers) we have recently been given some new options:

*   (HTML) Web Components.
*   Container Queries (combined with the :has() selector and subgrid).
*   Web Assembly.

### (HTML) Web components

We'll talk about Container Queries in the next episode.

*   Custom Elements (Light DOM).
*   Shadow DOM.
*   Declarative Shadow DOM.
*   Declarative Custom Elements - specification not ready yet.

@scope is here to CSS which allows for allows for modular CSS.We hate to say it, but it could be a game changer!

### Related Links

*   [Talk: Is Atomic Design Dead? - Brad Frost](https://www.youtube.com/watch?v=PK_PICNTgAg)
*   [Talk: The Good, The Bad, and The Web Components - Zach Leatherman](https://www.youtube.com/watch?v=R4Ri4ft7bXY)
*   [Light Youtube Embed Web Component -Paul Irish](https://github.com/paulirish/lite-youtube-embed?tab=readme-ov-file#pro-usage-load-w-js-deferred-aka-progressive-enhancement)
*   [chat Player Web Component - Dave Rupert](https://htmlwithsuperpowers.netlify.app/using/examples/chat-player.html)

<details>
<summary>Transcript</summary>

\[00:00:06\] **Nathan Wrigley**: Welcome to the No Script web show about modern frontend web design, where we look at what we can build today with minimal dependencies and skills.

Today we're asking ourselves, what is component-based web design? Do we need it? And if we do, how do we get it? My name's Nathan Wrigley, and I'm joined as always. David Waumsley. How are you doing, David?

\[00:00:28\] **David Waumsley**: Oh, you pointed in the right direction. Yeah, I'm good, and you are not so good. You're a little bit deaf in one ear.

\[00:00:34\] **Nathan Wrigley**: I'm definitely a little bit deaf in one ear. I've had a, I've had a bout of poorliness, but thankfully I'm out the other side and raring to get into the topic of component based web design. As always, you've put the show notes up, I dunno if you want me to share them on the screen right at the outset.

\[00:00:50\] **David Waumsley**: I think so, so you've broken it up in the beginning with the three things. Here's, the difficulty with components. We say components and it means so many different things to so many different people in different contexts. So we're gonna have to oversimplify what we're talking about here and and we have, we've done it with a few bullet points. If you scroll down for those YouTube watchers, we're really referring to this kind of idea that seemed to arrive, I think somewhere in the 2010s. Particularly about, 2013 when we got atomic design, a really influential, book by Brad Foster and also within the same month, we got Facebook's React coming out, which allowed us to do things that we couldn't do before.

And it seemed that we were moving to this idea, this epiphany that everybody seemed to share. And that's my experience as well with it, where you suddenly thought. Websites are like these apps with these reusable UI bits components that we build up how to blocks, and we really should do a lot more that shouldn't we?

That's a sensible way to build instead of doing things the way that we used to do before where we were styling these documents. Independently. So whatever the HTML you marked up on the content, then you just went about and styled it. What if we just created these little blocks and put them all together?

We'll save loads of time and stop repeating ourselves all the time with that. And j. Nathan, my experience, I feel like I went through that myself. That's because when I started with initially with HTML and CSS, it was all about. the CSSN garden and all of that. It was about styling those documents, and then by the time I got into WordPress and then page builders came in, that seemed to be all component based design.

\[00:02:57\] **Nathan Wrigley**: Yeah, I guess the, whole page builder, and I suppose this would be true of WordPress page builders, but also SaaS based apps, it's funneling you down the idea that the whole document is made up of a bunch of individual little components, these little blocks, so I don't know, hero section or a. A little card, which has an image and some text and perhaps a button or something like that.

And, you style it once and then you duplicate it and that styling gets transferred over to that new one and then you duplicate it again and, maybe turn it into something global so that if you want to use that somewhere else on the website, you can just do that again and change it all in one place.

There's so many things that make sense about it. Because it, it is quite nice in a project, especially, I guess if you're working with a team, which I never really did, to have that shared understanding of what it is that you are doing. So every time we create this card, it's gonna look exactly like that.

And there's all of the styling that goes with it. It's encapsulated in that one thing. it's not the same as this other hero section, it's just for that card. it definitely makes sense and yeah, you're right. Page builders encouraged that way of thinking. For a long time. It made perfect sense to me. But you are, I think you are moving away from that a little bit now. Back to the, air quotes, the old way

\[00:04:22\] **David Waumsley**: of doing things. the old ways of coming back, I think to a certain degree, at least where we thought we were, was challenged before. And that's my experience, the page builder side of it.

But of course, it made perfect sense, Brad. frost whole atomic design at the time, and it. Things that we know, bootstrap, Google Material Design, all of these kind of things came outta this idea. Of course that makes sense. And it made sense to me. And I think in the page builder tradition of doing stuff, I realized that, all I wanted when I got into page builders was more modules, gimme more stuff.

More bricks I can put into my designs. and then it turned over time without knowing any of these debates, just through practice itself where I came back to the fact, actually most of the time for most of the work I do, it's about getting this message over, which is mostly text with a few images to and I need to style those and arrange them in the best way.

And actually, I. I didn't need a slider. I didn't need a little block for frequently asked questions that were dropping down just for one line or something like that. We didn't need to create all those things. So I shifted without knowing these debates. But now having looked, and I know you looked at, Brad Foss, talk, which is a recent one where is. Is atomic design dead? And that's something I obviously, in our show notes, there is a link to that and it's worth watching 'cause it gives such a sort of whirlwind, hi historical account of how the technology for designing webpages from a designer's point of view, rather than a coder's point of view, doesn't he? And how we've changed to all these. Different kind of tools over the time and different approaches.

\[00:06:07\] **Nathan Wrigley**: really interesting being Brad Frost though, because obviously you were leading this charge of this component based, or as he calls it, atomic. Yeah, and it's definitely served his purposes quite well.

He's become a sort of minor celebrity in the web design world and it, and, but this talk in 2023 is a decade after he launched this idea and gained a lot of success out of it. and I think his. I think his position is that, it still has utility. He didn't seem to be saying, look, abandon a abandon ship.

There's no hope here. but it is interesting going back because I'd forgotten a lot of the components that made up his atomic design. And, broadly, if you are looking at the YouTube video of this, then you can see it on the screen. But if you are not, he Encapsulates the, idea of atomic design is, that everything is made of atoms.

And so the sort of smallest part is an atom. And then if you, gather up a bunch of. Atoms. So the smallest parts of the, dom, if you like the page that you can, then you get these molecules, and then if you gather those molecules together, so that's a slightly bigger part. And then if you gather those together, then you get an organism.

To be honest with you, the nomenclature, the wording at this point has lost all meaning for me. Atoms, works molecules, works organisms.

\[00:07:38\]**David Waumsley**: Suddenly that doesn't work for me. 'cause it's got this

\[00:07:43\] **Nathan Wrigley**: notion of being

\[00:07:44\] **David Waumsley**: alive or something. And, but it's really, he's just

\[00:07:47\] **Nathan Wrigley**: saying, okay, it's a bigger thing than a collection of atoms and a collection of molecules. And then it steps outside of that. Biological frame reference. And then he talks about, templates and ultimately pages. And it is, it's a neat way of encapsulating it. And when in 2013 everybody was scrambling around for a way to make design easier, and the web at that point was starting to get complicated.

Rou could, you really were seeing, think of Facebook. There were bits of Facebook, which just repeated it. Itself all over the place. Yeah. you'd have hundreds of this thing and hundreds of this thing. Yeah. and so I guess it made sense to start thinking about it in this way.

And maybe it still really does, maybe it still does work. If you're on a giant project and you've got a hundred people working on, excuse me, one thing, and they all need to share that understanding of what that one thing looks like and what's an easy way to distill it. Make it a component, make it so that's the card, that's what the timeline view looks like, and a aspects of the timeline will look like this.

And then another one will look just the same. Here's where everything is, here's the atom, here's the molecule, here's the organism, and so on and so forth. So I, guess if you're not you, David working, freelancer working by yourself, there's robably still utility in this,

\[00:09:06\] **David Waumsley**: I would've thought. Yeah, and I think the whole thing goes with the development of the app as well, with the The mobile was fit, where there's a slightly different expectation of how an app might work as it recognizable components as opposed to the website. And really they're on a continuum in reality. And I think we've readjust our thinking there, but it comes in with that. There was a, I wrote down a little example to make sense of the atoms and molecules.

So an atom might be a button which you would define, and then a molecule might be an input field that has a button in front of a form and an organism may be the whole footer that contains all of those things they could be in, in there. And it builds up in that way. And I think a lot of it was about working in teams to create this kind of design system, which we've no experience of that. we're taking customers one at a time, working on our own and we really didn't need to worry too much about the naming of our button 'cause Yeah. It's just for us.

\[00:10:18\] **Nathan Wrigley**: But I guess if your team has complete buy-in to this, component based process, and let's say that you go with the atomic way of describing it, atom, molecule, organism, I can see a, I can see a moment where everybody's just got that hardwired.

In their head and they all know, okay, the here's, the atom. Like you say it might be a button and, here's the associated molecule and this is what our organic or organism footer looks like, or hero section or whatever it may be. very soon. I can imagine that just becomes embedded and people start to talk about it and it makes perfect sense.

Getting me into that would take. There'd be a lot of onboarding, and I'd have to really wrangle, my head around it because I'm not using those, not using those, terms, but in effect, having used the page builder for years, I am using those terms, but I'm just not giving them the same name. yes.But yeah,

\[00:11:16\] **David Waumsley**: so there you go. And I I think the importance of something like React at that time when you've got atomic design and React coming out. React was this thing that solved this issue because it's a cascading style sheet. So we were used to defining the look of a page and a document at the top of, most of your rules were created.

If you were going for these individual blocks, they had to be encapsulated. And that's really what. Facebook React brought, which wasn't available. If you wanted to work in teams and you wanted to isolate your button to be a certain style, then you could make it a component through React in a way that was difficult to do if you worked in a team with CSS and those people who did still work with CSS has to come up with kind of ways of being able to modularize.

CSS itself. And that became quite complex. So we got Bem, which is the block mod, element modifier, way of elective stuff. And I think it's fascinating because what shifted was this. What is often referred to as separation of concerns where you used to try and when we were learning h TML to CSS in the first place, I came across this term and it was about separating your HTML document from what was in your CSS.

You, made reference. From, you need to put some classes sometimes in your htm l although admittedly, the first, when I went back to html, the first site I did, I tried to avoid using any classes to see if I could keep that separation of concern. And I was able to do it with the CSSI was really, I was able to select Nth Child of things. Okay, so

\[00:12:57\] **Nathan Wrigley**: you did it that way, so you were Yeah. In effect using.

\[00:13:02\] **David Waumsley**: but yeah, they, but they were separated from the html, it wasn't in the document. So there was always that concern about keeping those things separate. And when we shifted to this, the separation of concern was keeping the. Units, the individual, the button separate from the input that was separate, and it's a complete shift. And that's obviously where we get things like Ben in CSS and we get, react and all of those libraries come out there. But I think we'll move on to the next question we asked ourselves, do we need it?

\[00:13:36\] **Nathan Wrigley**: Yeah, I think I made the case just then that it definitely. I think it definitely had a moment in time where it, for the broadening scope of what the web could do.

web apps and complicated web applications and, mobile phone apps and all of that kind of thing. The, I think it probably really useful and probably continues to be useful. I guess the question really relies on what kind of work it is that you are doing. do you need a component based web design?

Maybe not. Would a team still need component based web design? I, can certainly see why it would be handy to have. but do you wanna go, should we go through the, the bullet points that

\[00:14:22\] **David Waumsley**: you listed? Yeah, so the, sense is still there today, isn't it? Don't repeat yourself the dry method, you know that is still there, it's not without problems with going for components for, one of those is that there were just scores of complex design systems out there, which, you spend more time trying to come up with design systems and you do design in anything I think is. I think that's where Brad was quite apologetic in his atomic design about that because he knows in a lot of organizations this becomes problematic in itself, doesn't it?

\[00:14:58\] **Nathan Wrigley**: I wonder how many teams there are out there where, when they onboard somebody new, they have to teach them their design system, which, it might be popular throughout the world.

Each employee might have been using something entirely different when they arrive. And so there's that moment where they've got to be onboarded and taught how it works and, okay, this is what we do for this is what we do for that. And maybe we lose thousands of hours each year just to that process.

\[00:15:26\] **David Waumsley**: Yeah. And I think his job was to, To try and explain how you can create your own in-house design system and people can spend more time on that. And my point on that, I think, I've no experience of it, but it feels like it's not very agile. It doesn't mean that you can kind, you have to define how your button's going to look for this design system or how you name this.

You can't change things as you move along with the project as real. feedback comes in from the site, so you fixed yourself early. So I think that's a problem. Oh, and then also

\[00:15:58\] **Nathan Wrigley**: that's interesting. Yeah. So you mean not agile in that sense? Not, it's not agile, amongst the employees, you mean?

It's not particularly agile to change, should you discover that certain things need, a complete overhaul. Okay. Alright. I'd mis I'd

\[00:16:12\] **David Waumsley**: misunderstood that. Alright. I, think you just, you and in a way there's great examples of how you can. spend a lot of time creating a design system, then you make a mistake and you replicate that mistake over and over again.

There are a couple of examples of that in material design it, they removed the labels for your inputs and, decided because it looks stylish and then put placeholders above. And there's a great video by Hayden Picker in, on that one what happened to inputs, but obviously they realized that this is a usability problem for people and, misusing, how HML works for their design system, but it looked cool. But because it's Google and it's their material design, lots of people jumped on it. the dry don't repeat yourself, can also end up repeating lots of mistakes which are difficult to correct.

And if you spend a long time, you're not very agile, are you? If you define how. Everybody has to work in putting something together in these blocks. You can't, as, I can just change, if I want my naming convention in my CSS to change, I can just do it. because you've got a find a replace and it's done, right?

\[00:17:24\] **Nathan Wrigley**: yeah. You've gotta notify your team and make sure that not only do the team know it, but they've implemented it across the entire project. Okay. Okay. Yeah. That's interesting. I'd misunderstood your point there, but I get it now. Yeah.

\[00:17:36\] **David Waumsley**: when you realize you made a mistake on all of your forms, to have to go back over that design system and get everybody on a meeting, you can't, you're just say, oh, that's a, and I'll just change it.

but yeah. And I think also that the. CSS in JavaScript is also those frameworks is difficult because effectively you're reinventing the browser. Most of the time you're telling the browser how to behave to do CSS. So it's, there's a lot of complexities with that and, that some of the downsides, What else did I put in here? Yeah, so you could, but obviously that leads to JavaScript burnout, which a lot of people have been experiencing as they have to, work with different frameworks which keep changing all the time, or feel they have to learn a new framework, which seems to do something a bit better than the last one.

\[00:18:28\] **Nathan Wrigley**: yeah, it must be fairly demoralizing if you are. Literally, moving from job to job and you are moving from framework to framework and you never coincide with the same framework twice. And just to imagine the, the joy that would bring.

\[00:18:45\] **David Waumsley**: Yeah. Yeah. And I think, Obviously stepping out and going back to HTML myself, I very quickly worked out that I didn't want to use things like bem, which was very popular as a way of modularizing your CSS and because it just didn't have that separation and concern. Suddenly your HTML was full of so many instructions that you needed so many selectors that affected your, CSS.

Same with Tailwind again, which is, Being very useful for a lot of people who've been working with component based design who are JavaScript based developers, mostly working with that. It's quite useful for them. But if you stand back for someone like me who could you know and has managed to learn enough CSS and HDML to feel confident with sites, you realize that this is just such an overload.

Just so much extra code and no separation of concerns. So it depends who you are, but I can see there's a bit of a, shift away from the last decade where we were Yeah. Components because it didn't it make perfect sense?.

\[00:19:49\] **Nathan Wrigley**: Is there anything in your recent forays into CSS and HTML. That you have been defeated by. Is there anything that you've wished to achieve or some sort of little stretch goal on a project where you thought that would be a nice thing to implement, where you realized that the only way to achieve that would've been through something like a JavaScript framework, but you just said to yourself, no, forget it. We'll just, we'll pair back the design, we'll do the, more straightforward thing.

\[00:20:15\] **David Waumsley**: Yeah. I think you've just led onto the next topic, actually, the last thing we were gonna cover, which is, what are our component options? Because yes, in a way, we need it for this site. but yeah, we, I listed out some things here where we now have more options.

Once really, if you wanted this component based design. And to encapsulate something that you were reusing, and in our case, we've needed it. We probably need a chat player or not. We'll talk about this later. Yeah. But that's a component where we'd probably want to be able to take this one component and move it to wherever you needed an audio player without having to reinvent the wheel all the time with it.

And before, really, there wasn't much option you would've to use something like a React library to do something like that. Where now we have got some new options, they're not new, but we have what is called web components. do you wanna explain that

\[00:21:10\] **Nathan Wrigley**: a little bit? 'cause I think it might be interesting for it. Maybe use the use case of the, the air, what is it? Even the MP three player? That's what I'm after. The audio player. yeah, just go into that a

\[00:21:23\] **David Waumsley**: little bit. I mean with web components, really, I mean it's just using, it's actually predates React. It goes back to, 2011. It's taken different forms and it's different APIs if you like, but essentially it is just linking your JavaScript to your HTML.

So at the simplest level, it is a custom element that you create. So we've actually got a couple of them acting on the site, which I'll do videos on later. so we've actually got the videos going through a web component. I. Which effectively is just within, I borrowed it from somebody else's library, and all it is a custom element that says, I forgot what it's called actually on it.

It says Light YouTube embed or whatever, and we're putting that in there. And then this JavaScript created by somebody else is acting on this custom element. Stopping YouTube from loading all of its things until this, image has been clicked. And we have another one where it is, taken from Dave Rupert, which I haven't shown to anybody yet.

But, we'll do a video on this one, which is a chat player, designed around the existing. audio tag the element itself, but add it on through JavaScript around another custom element called a chat player. it adds to that and adds in some extra functionality through JavaScript and also the Stein in that goes with it.

And this is what's considered as the shadow dom because. The styling isn't, so it's very portable. We can take that and move it anywhere else. So we have got that option in there. there's a lot to talk about this because it's done at the end of last year, 2000 and, 23. There were so many people, if you like, who were standard space people talking about this and whether they need it.

that it's gained a lot of attention and for me. I don't know if I fully understand what we're talking about. 'cause some people talk about the shadow dom, which is a way of using JavaScript to add in to your browser, some extra slots if you like. Yeah. With functionality in it. And it allows you to encapsulate your CSS, which used to be a problem for everybody before.

But it also has a slight issue with it in the sense that, as you saw, I was showing you the demo of the chat player when you. Load the page. There's a, flash of un styled content that happens 'cause the JavaScript then has to load the, CSS. so there's a lot of people who are just looking towards the light dom.

But effectively, when you're talking about light dom, all you're talking about is putting a custom element. So you create your own instead of having a diviv. Between your angle brackets, you put a name, so it could be Pod, and it has to have a dash player in between that, and you've got your own custom element and you can attach JavaScript or CSS to it, or you can create within that.

So that, that's the, I think more people are moving that way. certainly when you look at, it's not the case with React at the moment, but you can, through another service, you can convert a lot of the. Libraries that are created Views library, they've got one as well. And React Libraries, they can be converted into, web components, HTML, web components as well.

So we, I think there's a lot of moving that way or moving both directions. So if you are a. JavaScript library person who wants to stay would react? I think you can. There's a, bit of a, getting back to standards without React, being something with JavaScript, people being off on a entirely different planet to the web standards people who put JavaScript as the third language, which you need to call upon.

So I think there's a emerging going on and I'm talking too much. no. I

\[00:25:21\] **Nathan Wrigley**: was just gonna say, I'll probably. Paraphrase what you've just said in order to Encapsulate my understanding of it as well, but also to say that if you want to see this in action now, I don't know if this will be the correct url, but the show notes for this episode will be at no script show slash five.

there'll be an audio player there or whether it'll be this, Web component version of it is as yet to be decided. But if you, see something with, I don't know, a non-standard player, then you'll know that David has implemented it on that particular page. But is so what you're saying is this web component for, let's take the example of the audio player you, load in the.

The, audio file in the normal way the browser takes control and says, okay, I'm gonna show it with the default browser, version of an audio player, which is, pretty uninteresting to look at. But in order to make that more potentially usable, to add in elements, take away elements or just style elements, you've, there's a little bit of JavaScript which hijacks that and.

Makes it into a web component so you can make, I dunno, the play button be in the center rather than at the far left. You can make the, the, scrubber, the way you find where you want to go in the audio. You can stretch that across the whole element. You can add, jump 30 seconds, go back 30 seconds, you can put the speed up, play it two times and all of that.

you can style it, you can make it go wherever you want, but a drawback of that. Is that the JavaScript takes a moment to load. So you get this kind of content, a cumulative layout shift problem where you get a flash of the old one, the new one comes in and it looks nice when it's done, but maybe you're storing up problems in terms of Google and SERP and all that.

But I dunno, but is that what you're saying? This is the web component that you've played with here. You've hijacked the audio. The default audio player and you've just made it look different, but you can imagine that being played out across any aspect of the website. It could be the video, it could be the buttons, it could be anything.

\[00:27:26\] **David Waumsley**: Yeah, I mean it's obviously, I haven't done it. It's somebody much cleverer than me, Dave Rupert, who's actually has created a chat player for their show, which is Shop Talk. Which is, excellent. so they created that and I've just been able to literally just take their files and do that. And it's on style.

if I put the styling on, I have to take the sty in and put it in the JavaScript itself, and it's loading it through the shadow dom. But yes, it's creating all of the things that through JavaScript they've added in, which isn't in the default audio, but if somebody turns JavaScript off, the interesting thing is that we're still putting the audio, tag within.

The custom element tags that we've got, and if I turn JavaScript off the audio. Player is still there, the default one that's in your browser and will still play if you turn off your JavaScript. So as wonderful fallback. Yeah. So

\[00:28:21\] **Nathan Wrigley**: the JavaScript hijacks the already loaded audio tag and then just disrupts that and replaces it, what have you.

Yeah. rewrites that bit of the dom, and inserts it. And you were saying that the styling in there, if you don't put any styling inside of that little, shadow dom.

\[00:28:39\] **David Waumsley**: It just, it's default styling, is it? Or, how does it look? Yeah, that's it. You have to put the, any styling you want has to be registered within the JavaScript under the shadow dom, where the light dom, which is what I'm using for the videos on the learn tab, is just preventing, that's light dom.

So the. Effectively, it's nothing more as I understand it, other than putting this custom element that we've put of light YouTube and connecting any JavaScript that you want to do to it. So it's no different for something I did before I even understood about web components. So I used to do that with JavaScript.

The only difference is now that it's relating to a particular custom element, right? But I've got my CSS separate to that, so it loads before, so there's no flash. there's none of that kind of cumulative shift in nonsense or un styled stuff, which you do get with the shadow dom. Okay. It's the interesting thing though, is I think actually we skipped over a couple of things.We should,

\[00:29:38\] **Nathan Wrigley**: yeah, I was just gonna say, should we go back and finish that list?

\[00:29:41\] **David Waumsley**: Yeah, Because we're saying that our options to us, when we'll talk about the next option, which changes component based. if you do want component-based design, we've got container queries, which came out at the end of last year, supported by all the major browsers, which, combined with some other new stuff does allow us to effectively, control the styling so we, we can set our component up to.

Style itself according to the space available to it. which means that you can move it as a component in and out of other places. And we also have something which really we don't understand, but it's very clever, which is web assembly. Again, this is all standard stuff. This is, part of the web standards.

it's, E extra to, H-T-M-L-C-S-S, JavaScript, and then we've got kind of web assembly components where we can effectively translate through that. Any other, most other technologies like might be something made. A program that might be made for making a game can be turned into html. So that's probably something we'll never get into, but we'll talk about container queries next week.

So that's caught us up on that. But web components yeah, is interesting because we'll need it. But I think what's, we're in the middle of a debate about this. So shadow dom was this wonderful way to be able to create. Components and B standards compliant. So it's gonna last as long as your browser lasts, which you can't say the same with something like React.

It's gonna last as long as React lasts. No. Yeah. but something that standards will be there. While there are browsers, while we have the web, so that's its benefit. But now you know, the shadow done was a way of being able to encapsulate your CSS, so you can keep it as a separate module, which you can take and put it in your different project without being affected by the cascade of your.

Page and the stars there. That was a big plus. But I think what's throwing everything out now, and it's not here yet fully, and that is at scope, which is going to be something you can do with your CSS, where you can define which elements you want to start in their particular way. And there will be outside of the cascade.

So I think we're on. Because a scope I think is supported by chromium browsers at the moment. So that's okay. That's all. Is it? Okay? yeah, It's 60% of the web, but I think by the end of the year this will be here. So it does throw, the big question up at the moment, if you do need these components.

The big reason for needing something like Views or React or something like that was if you worked in teams and you needed to encapsulate your style so you can move those elements into your new design and have them, work independently. App Scope really throws the cat among the pigeons there, doesn't it?

It says, here's another way of being able to achieve that, and it's just within CSS. Do you think that's

\[00:32:45\] **Nathan Wrigley**: gonna be the beginning of a shift away from a lot of these JavaScript endeavors towards doing it natively in CSS? I genuinely don't have any intuition on that, but it sounds like it's gonna enable you to do a lot of the heavy lifting that the JavaScript, it has been deployed to do.

And if that's the case, this is much more. I guess modular, understandable. Probably much more readable. Certainly. you don't have to rely on loading a boatload of JavaScript to get it to work if it's already, shipped with all the browsers, 60% at the moment. But like you say, by the end of the year, maybe 90 something percent.

\[00:33:26\] **David Waumsley**: Yeah, the pendulum just swing, isn't it? The, our standards didn't, HTML and CSS didn't give what people wanted when they wanted component based design. When that mentality of how we design thing was there, it just didn't give you what you want, which is why things like React, I think took off and, which I think led to the split of.

People who maybe just create, regular static sites of some people, they just thought you only need JavaScript. You don't really need to learn all this other stuff. Stick to tailwind in there, or something like that. And you can sort out the CSS, it's a bit quirky, but we can do that. And these other people who would be in the old style of H TM L documents start it garden style.

And I think there's a, move back. The problem has been the technology. So I think there'll be a shift back. There'll be perhaps less people who will feel like they, JavaScript is all they need to learn, and more people will say, JavaScript as needed, which is my approach with everything for what I need to do.

The CSS and the HTML is there to achieve almost everything I need. Yeah. With a minimum of, for these components where I'll need some JavaScript and somebody else's, someone who's cleverer than me, put something together that I could insert into my. My stuff, but at scope of course means that I think the light dom will be, effectively at scope, takes care of the problem.

If you, I think. If you need to encapsulate your CSS around certain elements, you can do that within regular CSS or will be able to, I think, before the end of the year. yeah. Nice. We'll see. Yeah.

\[00:35:02\] **Nathan Wrigley**: Yeah. it's a, it's a, moving feast, isn't it? Or a movable feast. Yeah. The whole thing is definitely moving, but fascinating, what, was true 10 years ago is becoming untrue now, maybe.

And, I guess my, hope with all of this is that it just becomes. Much more straightforward to learn because JavaScript is, for the vast majority of all of that, it's been beyond me and and I'm hoping that a lot of these technologies will bring. an easier way to implement that, a more understandable way.

And I'm not getting any younger and learning's getting harder. So, yeah, that's

\[00:35:41\] **David Waumsley**: my hope. The declarative language are the easiest. The browser already understands you just tell it what to do. But with the, when you get to JavaScript, it's I'm going to tell you browser what to do. Yeah. And if you take all those responsibilities and you have to have a mindset, which we don't have, I don't think, we're not, it's. Some people do, but I, do feel there's, over this period, I feel like there's a coming together in a way of this. It felt like everything went, it was JavaScript first CSS within it that's shifting back.

But there will still be JavaScript developers, but there's that kind of, because I think. That integration with web components that they can work or you can move things from one place to the other. if you want to work in one way, you can, but for people like us who generally creating those sort of 80% of websites that small businesses need out there, it's not really a path we need to go down, I don't think.

\[00:36:37\] **Nathan Wrigley**: No, indeed. I feel like we've covered that particular topic. What do you

\[00:36:40\] **David Waumsley**: think? Yeah, I think, yeah, we mumbled our way through it. Yeah.

\[00:36:45\] **Nathan Wrigley**: Do we want to. Do we wanna talk about what's coming up next time? I know you've written something in the show notes there. Yeah.

\[00:36:52\] **David Waumsley**: Yeah. It's, just, we mentioned it, we'll just have a chat a bit further about the same topic really, but just talking a little bit about, container queries, 'cause that's new, bit of CSS and, we'll try and do our best to explain where we may or may not want to use it.

It's such a big thing, something that we couldn't do. And everybody was very excited about it. But honestly, we'll talk about it next week, but I'm thinking, where will I use it?

\[00:37:19\] **Nathan Wrigley**: Yeah. Yeah. okay, that's for next time. don't forget, if you want to follow along with what we're doing, the website is being updated episode by episode.

no script show is the website. This is episode five. So no script show slash epi, sorry, not slash episode. Anything just slash five. So no script show. Slash five. and we will see you next time. If you watch this on YouTube, please give us a comment that would really help. That's really nice to, to hear what it is that you've got to say.

And obviously keep an eye on the, that channel as well, because David will be, updating it with his own content in between these episodes. Okay. That's it for now. Thanks, David. Done. I'll,

\[00:38:02\] **David Waumsley**: I'll see you next time. Yeah. Thanks for listening everyone. Bye.

</details>