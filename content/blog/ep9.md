---
title:  Does Baseline solve our browser support problems?
description: Baseline is a Google initiative introduced in 2023 that aims to make it easier for developers and other website stakeholders to understand what might be ready for production.
date: 2024-04-25
tags: ["podcast"]
permalink: "/9{{slugify }}/"
videoid: QhdejyjEr5o
---

## Browser support before Baseline
-------------------------------

*   We used a web platform where increasingly we passed the handing these considerations to third party builders and themes.
*   Most of our local business clients only had bandwidth to care about what their own browser shows.
*   During a build we may have a panel of experts (nieces and nephews who know about computers and study art at school). After that, the chances of being contacted by a visitor are slim.

Evergreen browsers & interoperability
-------------------------------------

*   Core browsers, Chrome, Edge, Safari and Firefox are now automatically updating for users on approximately a monthly basis.
*   Although these updates are up to the vendors that are all signed up to deliver what they jointly agreed to support in terms of the W3C spec for that year.
*   Some chose to run ahead with other spec not included in the last agreement. For example view transitions in Chrome.

Baseline: finding and understanding it
--------------------------------------

*   It is now rolled out in [MDN](https://developer.mozilla.org/en-US/), [Can I Use](https://caniuse.com/) and [Web.dev](https://web.dev/).
*   There are two stages: **Newly available** \- supported by the core browsers and **Widely available**: 30 months has passed. The feature can be used by most sites without worrying about support.

If we look at the MDN for Browser compatibility for [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/grid#browser_compatibility) we can see it also includes information on Opera and Samsung which are not core browsers.

Using Baseline cautiously
-------------------------

There's an interesting [article by Molily](https://molily.de/browser-compatibility-baseline/) from 2023 where she highlights that the @layer rule was showing as "widely available" when actual support on Can I use was only (then) at 90%. Presumably this was an error as the Baseline for @layer is now set at "newly available". Still that was quite a lot of people on a breaking feature.

What most refer to is the Can I use site which pulls its data from [Statcounter](https://gs.statcounter.com/). This data comes from 1.5 million+ sites amounting to 5 billion page views per month. It does its best to exclude bots, but it is not clear how successfully.

It can be interesting filtering the Can I use data by country which most do not do.

The past experience of inconsistent implementation of features, not helped by vendor prefixes (ie -webkit) has probably made the majority cautious.

Even if not so much new CSS has come out that we have started to work out their power when combined. WordPress may be a good example of the original cautiousness and how that may be changing.

Perhaps Baseline partly exists to encourage people to use modern CSS. Who can resist that initial green box full of ticks?

Graceful degradation & progressive enhancement
----------------------------------------------

*   **Graceful degradation:** building for modern browsers, whilst considering the lesser experience for users of older browsers.
*   **Progressive enhancement:** starting with a base level for all and adding extras for those modern browsers that support them (an example is the minor use of subgrid on the episode page of our site).
*   For those who prefer a more graceful degradation approach there are polyfils (JS to add in the missing features in older browsers).
*   For progressive enhancement we have the [@support](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports) "feature query".

Where does this leave us?
-------------------------

For this project where we want to feature new CSS and can assume the audience we want to reach will be using modern browsers, Baseline is a good reference for us.

Still, we may want to employ some more progressive enhancements.

With clients much will depend on budget, the client's relative interest and anything we know about their expected traffic. Perhaps accessibility is the main consideration?

### Links

*   [Web.devs introduction to Baseline](https://web.dev/baseline)
*   [Rachel Andrew's introduction video for Google](https://www.youtube.com/watch?v=eZa3BgGaAeA)


<details>
<summary>Transcript</summary>

\[00:00:05\] **Nathan Wrigley:** Welcome to the No Script web show about modern web design, where we look at what we can build today with minimal software dependencies and skills. With so much new CSS spec coming out, it seemed like a good time to have a chat about how we handle browser support. In particular baseline, which is a Google initiative introduced in 2023 that aims to make it easier for developers and other website stakeholders to understand what might be ready for production.

David, after all these years, I don’t think we’ve ever really had a chat on browser support, have we?

\[00:00:39\] **David Waumsley:** No, it’s because, two reasons I think. One is it’s very boring and secondly I think probably ’cause we’re a bit slack when it comes to this thing. we’ve been, actually we’ve put this on the show notes, so you might as well bring those up now, but let’s do it.

Yeah, talking about kind of the past when it comes to this stuff now, it’s come to the forefront. I think now for us, or at least for me, because I’m back into the hand coding and there’s a whole heap of new stuff, that is coming out from the W three C and it’s hard to keep up with what browsers will support it.

So you can go into production. But, previously, for us in a way we may be, I dunno about you, Nathan, but I mean you started obviously with the hand code back in the days where we had IE six or probably even, going from IE five to IE six. Oh

\[00:01:34\] **Nathan Wrigley:** gosh, yeah. Really that far back. Yeah.

\[00:01:38\] **David Waumsley:** more recently, we’ve just handed over, we did hand that responsibility over increasingly to platforms that we would, as WordPress users for both of us.

Then we’d say, okay, the theme will take care of that kind of stuff for us, or the page builder later.

\[00:01:54\] **Nathan Wrigley:** Yeah, I think you’re right. I think if you are a core participant of this podcast, if you are really listening to this because you want to learn about modern CSS and HT ML, this stuff will matter.

But I think it’s also quite likely that a lot of the people listening to this will never really have ENC encountered this problem. the expectation is that all the browsers are the same. It doesn’t matter whether you are using Firefox or Chrome. They all do. Broadly the same thing, and it’s got lost that in the midst of time, the browsers really, went in their own direction.

Yeah. And then by the time that the, page builders were rising in ascendancy, certainly in the WordPress scene, a lot of that interoperability had been solved. The browser manufacturers began to talk to themselves, and so both you and I. Just handed over the responsibility of what can a browser do to our page builder tool.

And the assumption being that if it’s built into the page builder, the builders of the page builder will have done the work of checking whether or not the things that they ship are possible. can this actually be displayed? And, yeah. and I’m still very much there. It has been a very long time since I’ve looked at this subject.

So for me, this is. Actually, you said it was quite a boring subject for me. It’s really interesting because I genuinely haven’t looked at this for ages, and yet if you think about it, there’s an awful lot of new stuff coming around and if we don’t know what’s possible, then there’s a, I honestly, I think there’s a significant chance that you’ll ship something which simply won’t work for a proportion of the users out there.

\[00:03:31\] **David Waumsley:** Yeah, it’s, it is been a transition, obviously, when I first did it in the early days, hand coding, then you were always waiting. There’s a wonderful, and I’ve put a link actually on the bottom there to the introduction video by Rachel. Andrew for Google, ’cause she’s a Google employee and she actually talks about the kind of old days where you really always were waiting for a browser to finally die, so you could implement some of the new cool stuff that the later browser supported.

So it’s, it is definitely worth watching that one. But, yeah, my own experience of that really was that I handed over this control slowly. in, WordPress I used to. Have a basically a, theme framework and then built my own CSS, so I had to consider it. Then when I moved to a page builder, it used Bootstrap, which had already done the thought about what it can support as a ma massive popular thing.

So no longer did I have to consider it. So it’s come back to the forefront, not only because I’ve got the responsibility now, but also because so much has changed in the way, that we’ve now got ever. Green browsers that are pumping out monthly new features, and we’ve got so many new features coming out for CSS from the pc.

\[00:04:50\] **Nathan Wrigley:** can I ask you a couple of things around that? Firstly, if you are using tooling, so let’s say for example that you’re using a SaaS product like Wix or Squarespace, or if you’re using a page builder inside a CMS like WordPress, do you think you need to be bothered about this subject or do you think it is a fair assumption still?

To be able to hand that off to the developer?

\[00:05:13\] **David Waumsley:** Yeah, I think, I mean, if we’re doing it professionally, I think it was interesting to me, I won’t mention their name, but one page builder that kind of us up, the one that I was using, had I. Much, lower level of support for older browsers than the one that I had.

And for majority of people, perhaps they’re using it for their own personal projects and it’s not so much a worry, but I did notice that some developers there were caught short because it was ruin in the layouts for certain professional clients that they might need to have. So I think it’s still.

Perhaps important to know. Yeah. this is the big problem, isn’t it? how many old browsers do we need to support, that? and I don’t think this conversation’s ever gonna solve that, but baseline does at least help us know what the majority of the main core browsers will accept.

\[00:06:08\] **Nathan Wrigley:** Yeah. But yeah. but yeah, sorry. the other question that I had was, could you explain what an Evergreen browser

\[00:06:14\] **David Waumsley:** is? Because Yeah, we’re going straight up. We put in our notes here, all of these points in order, but we’re just skipping around, but, oh, sorry about, yeah. So yeah, so really, and this also ties in with something which is’ in the notes, which is this whole thing we talked about before, this idea that the key players, the core browsers, the people behind Chrome or chromium browsers.

Edge, Microsoft Safari and Mozilla with Firefox all kind of got together to agree within their roles in the W three C working groups that they would implement within a year with this interoperability where they would all agree, we’re going to achieve this and we’re going to put this feature into our browsers, all of us.

That’s come along and I’ve forgotten what your question was. No, it was

\[00:07:01\] **Nathan Wrigley:** just an explanation of what an evergreen browser is because I expect that, oh yeah. Most people don’t really even need to know ’cause of the nature of how browsers work in the operating system these days. But when, yes, when we were, beginning our journey, there was no such thing.

So it’s just, a contrast of what that’s meant over the years.

\[00:07:18\] **David Waumsley:** Yeah, that’s it. they do update regularly now. they had a bit of an issue with Safaria because it was tied to the operating system that they couldn’t automatically update. But yes, it used to be a case where well updates as, Rachel Andrew mentions, There was like a two year gap or something between, yeah, I think it was IE six and seven, or was it five and six? Anyway, and that could be what you’re, you are waiting on that one to be able to change and people really, you were waiting on people’s computers to die, wouldn’t you, to Yeah. to get the next browser, because people wouldn’t do it for themselves.

They wouldn’t go out and update themselves unless it was. Automated

\[00:07:55\] **Nathan Wrigley:** and the updating process was a manual process, and like you said, it was a big deal. So I remember when, Firefox three came out. So back in the day when, you know, going from three to four to five to six, that was a big moment. Yeah.

And then Google Chrome came along and I, I. I think it was the first one that kind of enforced auto updating. If you use that browser, it was just going to do it in the background so that when you restarted your computer or you switched chrome off and then restarted it, it would update and there was no hint of you need to do anything.

I. And that was a big moment because suddenly it meant that the browser was always up to date. If you switched your computer on and off or you, closed the browser down. And and I use a variant of Chrome. I use Brave a lot. I. And they have this process of alerting you, I suspect it’s the same in Google’s Chrome.

In the top right hand corner, you get this little button, which this little green button, which says update, and you press that and you wait 10 seconds and the browser restarts. And really it’s services normal almost immediately. But that update button comes very frequently. every few weeks I’m hitting that update button.

So it’s a it, there is a real change over time and that’s meant. A lot of important things that can happen on the internet can now happen more or less instantaneously if the browsers support it.

\[00:09:17\] **David Waumsley:** Yeah, I, it’s interesting really because I’ve not seen many people talk about it because when you think about it, it doesn’t have give the.

browser vendors, a whole lot of control that they can just update what you are going to have. And, some of that might be about taking your data as well, with some of them. And, yeah, that’s

\[00:09:37\] **Nathan Wrigley:** a good point. I can’t remember the last time I updated my browser and it offered me an option to decline something or accept something.

It just happens and it. Honestly, it really is, as you’ll know, it’s 10 seconds you wait, and then it’s back to exactly where you were.

\[00:09:52\] **David Waumsley:** Yeah.

\[00:09:53\] **Nathan Wrigley:** And

\[00:09:53\] **David Waumsley:** it’s good for us. there’s people trying to build web pages. it’s, it’s almost impossible to advance the web and make it look good if, people are gonna stay on that old browsers.

from our point of view, it’s a really, it’s a good thing. But, there is that other side where you think, okay. Allowing that much control to update. Yeah, so

\[00:10:15\] **Nathan Wrigley:** sorry about that. I hijacked the conversation by asking what an Evergreen browser was, and we totally skipped out this bit.

So do you wanna describe baseline? I’m guessing David, right? I’m putting my finger in the air here. I’m gonna bet that a significant proportion of people who listen to this won’t know that this exists. I know that for you it’s terribly important, but I’m guessing that baseline will be a new and interesting thing for them.

\[00:10:41\] **David Waumsley:** I’ve just seen it around and it’s only been around, I think it was May, 2023 that they introduced it. We’ll know from that video someone looks at that, but, and so it, it is pretty new. And the key thing is that they’ve been, I. rolling this out over time. So initially I think it was just on, web dev because it’s, it’s a Google thing, but it’s gone and it’s shown now.

So when there’s a feature, a new CSS feature mentioned on the MDN or on Can I use, which is what I think most people I know as. Go to as the website to see what browser support is for feature. It’s also baseline just now been added to all of these places. And it is, and we didn’t set this up really. We should have done so we, we can see what it looks like.

\[00:11:29\] **Nathan Wrigley:** yeah, I can just give you the URLO. it’s a fairly easy thing to find. The, the URL is just, if you go to web. Dev slash baseline. or you can just go to our show notes, which is, no script show slash nine ’cause this is episode nine and you can find a link to it there, but it just explains what it is.

We could put it on the screen, but it just says who’s involved and what it is. But do you wanna just paraphrase that who’s involved and what it is?

\[00:12:01\] **David Waumsley:** Yeah, I did. I just wanna clear something up on that though. It’s just what I meant is where it’s showing because on all of those documentation, so if you go to, can I use, now you’ve got a little bar on the top that says baseline and the a nice tick.

And if you go to the got it MDN records, so it’s gone to these three platforms. So when you arrive to learn about a new feature that you could use. In your websites, suddenly you’ve got this big best line saying, it’s saying two things. So our film, this baseline comes out and it has two stages, which is newly available, which means that it’s supported by those core browsers.

So in theory, we should be able to put it into that, gives you a tick and we should be able to support it. And then we’ve got the other stage, which is widely available, which is. when 30 months have passed, that’s, as I was reading it, the feature now can be used on most sides without worrying about support.

and usually when it gets to widely available, instead of just featuring the core browsers who have agreed under, The interoperability to implement things. What I’ve noticed, if you go to say the MDN records and look for more details, if you take something like Grid, which has been around for some time, you’ll see that it starts to list other.

where it’s implemented in other browsers, say Samsung and, things. So it’s quite interesting. So it does add onto it, but yeah, so baseline in theory is something where we can say, okay, it’s newly available. There might be some bugs with it somewhere else, but I should be able to use this in production ’cause it’s supported by most of the browsers and if it’s widely available.

In theory, we should be able to say, look at a client. this is what this says. This is measuring this. We should be able to use this.

\[00:14:00\] **Nathan Wrigley:** I was just gonna paraphrase everything that you just said, if that’s all right. the baseline is, essentially it’s a place where you can go and you can judge whether some new feature of, I’m gonna put air quotes around this, the web.

So let’s say, I don’t know, something in CSS or something like that, is. Is widely supported or newly available? actually the language is newly available or widely available. Yes. If it’s newly available, then it’s probably going to be usable. But if you, if it then moves to widely available, then that means that, what did you say, 13 months?

I think that’s right. 30 months has passed and you can more or less go to the bank on the fact that’s gonna be supported in the browsers in question. And they are as follows as of this moment. safari on Mac Os and iOS. Interesting. Firefox on desktop and Android also. Interesting ’cause I don’t know if they have an iOS version, but there you go.

Chrome on desktop. And Android. Again, no mention of iOS there and Edge. But only on desktop. And I do know that they have an Android version and it’s, it’s had millions of downloads. So that’s the rules around which baseline is working. It’s not like a philanthropic endeavor to just make it easy to understand what you can start using with confidence.

\[00:15:24\] **David Waumsley:** I think when you get to widely available, usually the, if you go to can I use where we usually get a sort of percentage, you usually find that’s in the high nineties. Yeah. And really you don’t find anything. I don’t, I think there’s almost next to nothing that’s a feature of CSS that’s fully supported to a hundred percent There’s always some something out of that. There is some, I think this is a great incentive and there’s a good reason behind having this baseline because clearly with evergreen browsers and monthly updates or multiple, updates coming in a month, adding new features in some of them, which won’t be in that project with interoperability.

So Chrome has run ahead with some things, which they, all can, they’re all guaranteed to implement. Certain things they agree on within a year, but after that, it’s up to them. When they do that within that year and what they want to focus on outta the spec, they might jump on something which is in the spec as far as the W three C is concerned, but it’s not part of what they’ve agreed to implement altogether as the core browsers.

So I think when you get to a widely available that it’s probably caught on by other browsers and end up being in the 90%. But there is a. there’s an article which was slightly critical back, last year. it’s from, and I put the link in the show notes there. It’s there. If you scroll down there, it’s an article by someone called Molly Lee, where she was, and it looks like things have been changed a little bit on there, but she was just.

Pointing out that, the at layer role, which is fairly new, was showing widely available as baseline as it’s showing in various places. But when she looked at it using, can I use it was still only supporting the. Supported by about 90% of browsers at that point.

\[00:17:18\] **Nathan Wrigley:** so what we need is a new service which combines baseline with, can I use for abstraction?

We, we can have a graph of does it work in baseline? Does it work in, can I use, yeah. Another layer of abstraction? No. you are basically saying there are people challenging whether or not baseline is actually keeping perfectly up to date right.

\[00:17:41\] **David Waumsley:** Yeah. I think it’s, for one thing it was slightly changed when I saw it, so it seems to have been downgraded.

I’m not quite sure if the article has checked everything correctly or I’ve read it correctly, but it was just interesting that you can, in terms of can I use, get a percentage now most people I know. Have you got the tab there, Nathan? With I on? I have, yeah. Let me, let me, it might be worth talking about this.

Put that one on. Okay. Because before baseline, this is pretty much where, and it still is. If I watch a YouTube video, somebody will probably talk about browser support and go straight here as the place to get the statistics. And we were having a play around earlier as well, What, I don’t see many people mention, but there are some in the, under the settings, a way of being able to pull in, import the data for different areas.

So you did that Nathan earlier? Yeah. Give

\[00:18:30\] **Nathan Wrigley:** me audio listener. But, we’re on the, can I use.com website and the button where you can click to, alter the settings and you can add in. the thing that we did is we added in the UK as. And the United States is, data to show. But also we did play around with, the view mode a little bit as well.

But anyway, the settings are just buried here, right at the top in the, in the

\[00:18:54\] **David Waumsley:** header. Yeah. And we was just in enjoying as two Brits, the facts that, Yeah. Often when we’re looking at support for many of the things that we looked at was slightly higher in the UK than it was in the us.

\[00:19:07\] **Nathan Wrigley:** yeah. It’s an interesting way of pausing it though, isn’t it?

Because, we’re all using the exact same browsers. It’s just the, the cocktail of who’s using what in which country, which leads to those numbers to go up. But we’re looking, you can see at the top here, we put in grid. So we’re able to see for example, that grid support is, the further down this chart that you go, the more recent the version of that browser is.

So here’s Chrome’s latest update and edge and so on. So you can see that basically Chrome. and all the other major browsers have a green light on grid, so that is one thing that we can use. Yeah. But if we were to change grid over to something, a bit more air quotes, again, cutting edge, we might find that it’s a bit more patchy as a few more red spots here and there.

\[00:19:55\] **David Waumsley:** Yeah, and it’s, quite interesting. And what also, what we can see on this, for those who are watching on YouTube, is that the baseline is actually written there. So just above the title, let’s say in CSS grid layout level one, then we have, and that, that’s what baseline’s being used, it’s being represented there in all.

Can I use, so you get a quick. Overview of that’s a widely supported in all major

\[00:20:20\] **Nathan Wrigley:** route. So it’s when we’re looking at, can I use, and we’re, like I said, we’re looking at grid. Is it the fact that this looks like a tick? Is it this tick? Is that icon representative of a tick, because it also feels like it’s a logo, like the

\[00:20:38\] **David Waumsley:** No, it’s a tick.

you’re not set up to do this, but it would be interesting to look at the MDN records and that, so you get a slightly more information in the little tick bar on that one. But, so it looks slightly different, but it’s been added in only quite recently that it didn’t come out with this. It too.

can I use. That’s a

\[00:21:01\] **Nathan Wrigley:** very,

quick way of determining, so if that’s a tick, then we can be confident that baseline at least, is saying that there is what did we call it? It’s widely available in Chrome Edge, safari and Firefox. That’s just, you can take that in one quick hit of the eye. yeah, if you’ve got the little tick.

Yeah, that’s actually really useful, isn’t it? You’d have to delve around in here. You can just see straight away if it’s done.

\[00:21:26\] **David Waumsley:** Okay. Alright. Thank you. One of the interesting things, we said we were gonna look into this and I did for this one, I think it was the article by Molly Lee, that actually made me aware, ’cause I often wondered this.

Where did this statistic, where did they get the data for? Can I use Yeah. Where. it’s, it is stat counter, which I’ve often looked at as well for browser support. yeah, but where do they get it from? that’s the thing now what they say, and there’s a lot of frequently asked questions, which does a good job at answering those kind of questions.

So the. I’ve got them in our show notes. The summary is that the data’s coming from, 1.5 million plus sites, which is amounting to 5 billion page views per month. And that’s what is counting

\[00:22:14\] **Nathan Wrigley:** those. It sounds like a lot, but then if you imagine, the internet as a whole, that’s probably chicken feed.

in terms of the actual amount of sites being browsed and the sites available online, it’s still jaw dropping amounts of data, but I do wonder quite how, quite how accurate that is. And it’d be interesting to drill down into that one time to see which 1.5 million sites. ’cause I suppose that would matter, if it was 1000, 1 million, one point, easy for you to say, Nathan, 1.5 million very reputable sites, well great.

But if it’s 1.5 million, very edge case, weirdy old designs from. Geo, perhaps not.

\[00:23:01\] **David Waumsley:** Exactly. And can you imagine if it was a, say we, we looked like we were doing slightly better in the UK for support on some of the newer features, but what if that’s just the fact that there. Partners that they have in the UK are mostly putting them on tech sites where it’s likely to have people who will have modern browsers more than say something else.

So we were talking earlier, and I was mentioning to you this kind of a, with having a bunch of clients who do counseling and psychotherapy. Wow. And looking at some of their stats wowing. Yeah. That there was such an obvious skew towards Apple product products and particularly the Safari browser. Compared to other sites that I was used to.

So I think it’s something to do with that kind of middle class audience who go for, private psychotherapy who might go for that kind of products. And it’s, so I have to, so regardless of baseline. You still end up coming back to what you might know about. Yeah, I think that’s really inter,

\[00:24:06\] **Nathan Wrigley:** so the demographic of that particular audience, but you can imagine that there’s a whole bunch of audiences where the de demographic skews upwards socioeconomically.

They’re probably gonna have a different relationship with their technology. typically an iPhone is more expensive than an Android phone. And you, and actually you do find that in North America, iOS iPhones dominate the, smartphone market. Whereas if you look at other places like South America, and Africa, it’s typically Android that’s winning that battle by a massive margin.

And then you look at Europe, it’s, it’s. Smorgasbord of countries. It’s a bit of a mixture. some countries it appears that iOS and the default, I think, for many on iOS is just to use safari. And then, other countries will be Android. And so it goes. And so it’s really interesting, A, what devices are they using?

B, what’s the sort of socioeconomic impact of the niche that they’re in? And it will all skew, won’t it? So in the case that you are describing. if it’s like psychotherapy or whatever it is. The assumption there, I think that you were making was that it’s probably those people who are browsing those websites have probably got a little bit of disposable income and so on and so forth.

There’s a high likelihood that they’ll have a modern up-to-date device and so on and so forth. It’s really interesting, the psychology of it all.

\[00:25:30\] **David Waumsley:** Yeah,

I think it is as well. effectively it hasn’t made much difference. A baseline would’ve been enough probably to cover me, right? Most of ’em seem to have a more modern browser, and with interoperability, it’s not been such an issue, but sometimes that might, it did concern me a little bit because there is that issue.

I think typically we’re looking for the last two versions of the core browsers. If they’re, if they’ve been supporting it, then we pretty much feel it’s safe to go ahead with it for main production for most of us. but it did make me concerned where there might be a lot of safari knowing that some of the older iPhones cannot update, their browser, not evergreen because it’s baked into the way that the operating system is.

So I wonder to myself whether that might have an impact, whether, but obviously. I have not seen any issue. Obviously these people who can afford psychotherapy can also afford the latest iPhone. Exactly.

\[00:26:26\] **Nathan Wrigley:** Yeah. It really is interesting. Yeah, yeah. Okay. where should we move next? Then we’ve got this other topic here.

or sorry, did you finish everything about Yeah, I, we baseline

\[00:26:37\] **David Waumsley:** cautiously. Yeah. Yeah, you did mention something again, and I don’t know if it’s in our notes. It’s not because it’s a kind of a side that we had and that was, there’s a gap in my knowledge. You were talking about the fact that there was so many other browsers out there.

\[00:26:49\] **Nathan Wrigley:** Ah, yeah. And

\[00:26:51\] **David Waumsley:** most of them we guess are chromium, so we imagine not knowing much about browsers. This is more investigation to do, Yeah. that they would just automatically get the kind of new CSS features that come with chromium. so no issue. Yeah. That is my assumption,

\[00:27:11\] **Nathan Wrigley:** but I don’t know.

\[00:27:13\] **David Waumsley:** But, and this is what I discovered the other day, but it always interested me that they mentioned as one of the core browsers edge, which is chromium. Yep. So you wonder, why do you need to look at that and measure that one? And I, came up with it only yesterday and I’ll be doing a video on it, on, there’s a new CSS, light and dark.

Where you can actually have your light and dark preferences side by side. And I was looking at support, it’s not supportive very well at the moment, but supported in chromium but not in edge. And I thought, okay, so I don’t know anything any longer because yeah, that’s, that is

\[00:27:46\] **Nathan Wrigley:** interesting because some, you would imagine that core feature would ship out of the chromium project, not only to Google’s Chrome, but to Microsoft’s edge and to any.

Derivative of Chrome. Yeah. But there are lots of derivatives of Chrome. just to mention a few. Now actually, I don’t know that these are derivatives of Chrome, but I’m sure that some of them are. But so for example, do Go, has a browser, there’s a browser called Brave. There’s a browser called Bliss.

It’s a browser called Safari. sorry, not Safari, Vivaldi. It ends in an eye. and they are, as far as I’m aware, they’re all chromium derivatives, but they all have a little twist on the ui. one touts itself as more developer, with developer tools baked into it, one touts itself as a bit more secure.

So it’s stripping out. I dunno. third party cookies or ad networks or things like that. And then there are other ones that I’ve heard of, for example, one called Sidekick. There’s a bunch that you can get on the mobile devices as well. And I don’t know whether they’re adding new things in differently. I.

Or taking away things differently. My assumption was that it was always like UI components or things around the edge of the browser, not the edge of the, I do. so things like the security model and the third party cookie model, but not the presentation layer, not what would be shown on the screen, which is of what, which is what is of interest to us.

I don’t know. But if Edge is doing something different with the light dark, Then something’s going on and let’s hope we don’t go back to the good old days of having to inspect every browser for everything.

\[00:29:28\] **David Waumsley:** Oh boy. there, there is notes on that as well. Funny enough, I did actually test it and it, even though it’s saying on baseline that it’s not supported, in fact it actually was actually, it worked okay in my version, but.

But it, my only rationale behind it and I would love somebody to tell me what’s actually happening. I never bother to read the bug note. So is it something that, it does work natively? There’s something that Edge has done with implemented something else which has broken that particular feature. So that’s maybe why it’s listed as not working when Chrome does work anyway.

So we.

I think baseline has come in and helped in many ways ’cause it gives us something we can talk about where we couldn’t before because we could talk to a client Yes. About okay, we just gotta wait for IE five to die. And and we’re almost there. dear client, we can, looks like. We’re building this, it’s gonna be a few months, we can go ahead with this one.

Now we can’t say the same with monthly updates. We can’t know what version we’re on with any of the browsers. We dunno what’s going on. So baseline at least solves that kind of problem first. At least we can say, look, this is some measure of what is probably production ready based on the, the, core browsers that are out there.

Yeah. Now influential they are.

\[00:30:57\] **Nathan Wrigley:** Yeah.

\[00:30:57\] **David Waumsley:** But we still don’t get away from. What do we do about that? And there’s two approaches in a way to dealing with it anyway, if, no. Some of these are mentioned in, W three C called graceful degradation and Progressive Enhancement. Easy for you to say. I wish it was.

yeah. But they, these are kind of terms that are banded around and they’re Two sides of the same coin, really. So grace, graceful degradation is the approach where you might go at building for the modern browsers whilst considering that there’s a less experience for, older browsers, but not so much caring about that.

And then progressive enhancement is perhaps the more favored way of the people who are much cleverer than me. Of going about things where they start with the base level in the way that they built their websites, and then everything else is seen as a, an enhancement. If this browser supports it, then you know this is going to make the, experience better for all.

I actually did it on this site, on our. Episodes, and I think it’s also some, one of the other pages there was a, I put Subgrid in, which has really got enough support. Okay? And this is something that you can at least add in a certain way. It was just to put a little line between texts and separate a sort of subgrid so things were even, so if your browser didn’t support it well, things would just be a bit uneven, but the content would still be there.

Progressive enhancements a little bit like that where you might run ahead with some of the things that might not be fully supported, knowing that they’re not going to break something. Could I

\[00:32:41\] **Nathan Wrigley:** posit a third option as well, which isn’t, hasn’t got an official title, but it’s non-progressive on enhancement, which basically means you only do the things which you know will work.

So you’ll only implement, and I would imagine for most people, that’s gonna be the default, right? You’re not gonna spend time on a client website where money’s tight, deadlines are tight, building in a bunch of features that a tiny subset will use, but that will, swing up over time. Wouldn’t the enterprise for most people simply be to say, okay, I will.

Just build the things that I know are gonna work. So it’s neither graceful degradation nor progressive enhancement. It’s just whatever I want to call it. It’s just build what we know works. Look at baseline, do that, come back in a year’s time, have another run at it.

\[00:33:33\] **David Waumsley:** Yeah. I would argue that’s probably where the progressive enhancement people start.

Let’s make sure that it works for everybody and then

That’s okay. So then it’s

\[00:33:42\] **Nathan Wrigley:** progressive non enhancement, if you just leave it there. You don’t enhance anything. You just do the bare minimum, if

\[00:33:50\] **David Waumsley:** Yeah. The pro, the progressive enhancements people might not enhance much.

Yeah. Exactly. but yeah, but there are, there always have been because you can see how annoying it is, To go back to the past, I think it was from IE five to IE six, you would wait just to have flipping rounded corners on stuff instead of having to cut out little images and put them round things so they look like you’ve got rounded corners.

We’re really showing

\[00:34:20\] **Nathan Wrigley:** our age, aren’t we? And there were things like transparent PNGs. oh,

\[00:34:24\] **David Waumsley:** yeah. Yeah. So all of that stuff, but we still got similar kind of thing happening for us now. and I think view transitions, which is only in chromium at the moment, which will come to all, but it’s not as far as I understand agreed as part of the interoperability.

you might wanna just run ahead for that because it’s so wonderfully cool. And if. Only it’s gonna happen for the people who’ve got Chrome and it seems to be about 60% people. Okay. The rest of ’em will just not get a lovely transition to their page. They’ll just get a regular transition. So that’s progressive enhancement.

I think at its best where it fails is, where you’ve got a feature, and that’s in the article that was looking at layers that were saying that it had less support but was. Put down as widely available. That’s a breaking feature. So effectively with layers, you’ll put in a bunch of CSS in an area, separate to where your main CSS is.

So those browsers who can’t read it. Suddenly won’t have that styling that you’ve put in there. So you really need to be quite smart about using that as a progressive enhancement. Yeah, it’s more of a breakable, thing.

\[00:35:34\] **Nathan Wrigley:** It, interesting what came out of that little paragraph that you said there, the last minute or so is, I guess the progressive enhancement is all about the things which are.

Cool, for want of a better word, the things which really are transformational, you might put the time in because, having rounded corners, as we said, or a transparent image as we said, that was groundbreaking, significantly better. It, the whole experience, just everything looked better.

And the same would be true here. You’re not gonna do those really weirdy edge cases, things that don’t really do a lot for your project, but the ones where. It’s transformational. It will take for those users who can enjoy that progressive enhancement, it will take it from a, a mere experience to, oh gosh, that’s significantly better.

Maybe that’s where you, maybe that’s where you put your time. You just judge what is significant, what will have the most impact, and work on those.

\[00:36:31\] **David Waumsley:** Yeah, I think the graceful degradation approach is the sort of, you you’re just gonna give for the best because you’re not, it’s about the time, isn’t it?

With the new CSS functions, rounding corners, you know how painful that was to try and cut out images. Yeah. And then position them around something to create that, when you could just do it with a line of CSS with border radius, you know, so that, you might just say, okay. I’m gonna go for that.

I’m gonna go for the latest and graceful degradation will be that they won’t get any rounded corners, It doesn’t matter. Doesn’t matter. But I want people to have the best stuff that’s out there. So cost comes into this. I think this is such a big topic, isn’t it? Yeah. But there are two.

I did put in the notes there two things that I suppose. go with the approaches, at least my interpretation. And that is that for those who might prefer a more graceful degradation approach, there’s polyfills, which is Yeah. JavaScript really, which will just, mock up the missing.

features that are in older browsers, so you can get away with that, can’t you? So something’s coming in, it’s coming to W three C. You want that stuff now. You don’t want to do the alternative way of doing it. You stick it in and you find a polyfil and you use that. It doesn’t mean that you rely on JavaScript, which.

The progressive enhancement, people go, yeah, you need JavaScript for this CSS thing. So yeah, so it might not suit those. And then the other thing for progressive enhancement, but really long-winded is to use the at support, right? feature query as it’s called. So it’s a kinda like a media query if you like, which will say, within that you’ll say.

At supports, and then you put in the things, and if the browser supports them, it’ll implement them, and if it doesn’t, it’ll ignore them. So that’s a way of being able to progressively enhance.

\[00:38:30\] **Nathan Wrigley:** and just that is actually really nice, isn’t it? The fact that is even a feature. You don’t have to go through some strange way of detecting it.

That’s lovely. you’ve got this option of putting things in this conditional logic basically of, is this supported? Yes. Great. Go for it. If not, then don’t. That’s nice. That’s neat. so what, so where does this is the, is the question By os do you mean os me and you?

\[00:38:57\] **David Waumsley:** Yeah. yeah, I don’t know.

after summarizing this, I don’t, I do like baseline. I think what it is for this project, which we’re doing at the moment, our website, which is part of the show, I think it’s safe, for us to say anything that comes under baseline is good enough for us.

\[00:39:15\] **Nathan Wrigley:** Widely available. Baseline. You going for that?

\[00:39:19\] **David Waumsley:** No, newly. Newly I think as well. Alright. there might be some bugs with it. I think it’s probably, I. that’s my kind of take on it. and I think we will, as I’ve already done one with the subgrid, use some progressive enhancements. Maybe we’ll use this few transitions before it’s in the other, ’cause it’s an experimental website for people who we expect will probably jump onto modern browsers pretty early on.

I think that’s right. But for

\[00:39:46\] **Nathan Wrigley:** clients maybe it’s a different, with this website you can go. You can go wherever you like, can’t you? Because it’s your project. It’s like a pet project. It’s not, yeah. the basis of anybody’s business relying on this or anything. So you can do what you like.

And actually the fact that the subject matter of the website is exactly this gives you license to do anything you like, really go as crazy as uncut, bleeding edge as you wish, but with clients. You, are you gonna be much more, cautious, not implementing things that might work and might not, is it more widely available from baseline?

\[00:40:24\] **David Waumsley:** Yeah, I mean from, as we mentioned, not having to worry about it, it’s been baked into the. Builder that we’ve had, I’ve suddenly had to think about it. So last few clients I have mentioned it, it’s been one of these things that I’ve said to them, by the way, I’m gonna be building this basically with baseline in mind, almost before it came out actually.

but that kind of level of two b browser support on the core ones, the last two versions was enough. And I’ve been saying that to clients unless there’s other reason that’s what I’m going to do. So it won’t support some of these older browsers because I’m feeling that so much new CSS. It’s come out and that evergreen browsers, people will catch up, that it won’t be a good investment for me to hold back and do things a more complicated way.

so yes, I’ve been largely saying that, but of course it’s always gonna depend, doesn’t it? As I say, if you know something about the client’s existing traffic, if it’s a rebuild, then you’ve got some insight as to what they might need to support, which might not be in keeping with what. I would ideally want to do

\[00:41:29\] **Nathan Wrigley:** yeah. I guess time will tell, but it’s, there. It’s there for you to check out. Now you can go and look at baseline. I guess it’s gonna be important if you’re an agency owner or something, you’re gonna have to have a posture on this. You’re gonna have to be explaining to your clients, like David just said, how many versions back in browser, history do you want to go?

And, you’ll be having those conversations. But do you think we’ve done that one? Is the baseline episode done? Okay. That sounds good.

\[00:41:53\] **David Waumsley:** Yeah, I think that. Yeah, it’s, I just think it’s a very nice thing to be able to say to clients to say, we work to this method, rather than have to make it up.

You can say. Here we run to baseline I, yeah. Oh,

\[00:42:07\] **Nathan Wrigley:** neat. Yeah. That’s a neat way of just pausing it, isn’t it? And then you can just give them the documentation. They can go and see. Oh, okay. That kind of offsets the responsibility. You’d have to name the browsers one at a time. It’s just to work with baseline.

\[00:42:19\] **David Waumsley:** Yeah, exactly. It’s like a credential, isn’t it? There’s what you set, and then anything else is over the top, which might be needed by the client, so that, yeah. Yeah. That’s the key.

\[00:42:28\] **Nathan Wrigley:** That was us. That was the no script show. Number nine. If you want to, find all of the bits and pieces that we’ve been showing on the screen, go to the url, no script show slash nine.

You’ll be able to, find the episode there forward slash subscribe. If you wanna subscribe. And if you wanna find us on YouTube, you probably have, already, but it’s youtube.com/at the at symbol. No script show and and subscribe. Smash that bell, whatever it is that successful YouTubers ask you to do, that.

Do a bunch of those things. I don’t know what they are, but, Okay. Are we done David? We are. Thanks. That was a good chat. Yeah. Perfect. Have a nice day. See you later. Yeah, you do. Bye-Bye bye.
</details>