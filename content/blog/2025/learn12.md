---
title: Building an accessible accordion with HTML and CSS
description: Building an accessible accordion with HTML and CSS. 
date: 2025-06-11
tags: ["learn"]
permalink: "/learn/12/{{slugify }}/"
videoid: Y_2lbjGu9m0
---
 **Show Notes:**


[Part one](/20/)

## Accordions with JS

Borrowed from Sara Soueidan’s excellent [Practical Accessibility](https://practical-accessibility.today/) course:

-  Typical approach using [HTML buttons](https://codepen.io/SaraSoueidan/pen/yyLQmQZ/26d304b2094c87136a61a0b7cf12de18).
- Accordion with ["interactive headings"](https://codepen.io/SaraSoueidan/pen/raNoXWr/b84fe6faa8823d00347532f428677044) (progressive enhancement).
- In-page search issues may be solved with the new hidden=until-found attribute.


## [Disclosure widget](https://intrinsicframework.here24.co/disclosure-widget/)

- With details the browser has a built-in shadow DOM component.
- details-content has browser styles set to content-visibility: hidden which changes to block.
- Styling the marker is [limited](https://css-tricks.com/using-styling-the-details-element/#aa-style-the-marker).

<a class="btn" href="https://intrinsicframework.here24.co/disclosure-widget/"> See disclosure widget code</a>

## [Exclusive CSS accordion](https://intrinsicframework.here24.co/css-exclusive-accordion/)

- We can use 'open" to keep any panel open.`<details open>` 
- With a matching name attribute we get an exclusive accordion. `<details name="anyname">`
- We can fix the height and allow scroll (Adrian Roselli’s [example](https://codepen.io/aardrian/pen/gOqdaXQ)).
- In our example I have borrowed the mock icon from [web.dev.](https://web.dev/learn/html/details/#toggling_the_summary_marker). 
- In page search works. 

<a class="btn" href="https://intrinsicframework.here24.co/css-exclusive-accordion/"> See accordion code</a>

<details> 
<summary>Transcript</summary>


[00:00:05] **Nathan Wrigley:** Hello there. This video is a follow up to our podcast episode on website accordions. If you want to find that, you can at no script show slash 20. Here though, we're looking at some example accordions and their code.

And the links for these are going to be at no script show slash learn. Forward slash 12. So I should say the 20 in the previous URL was the digits two zero and the 12 in this URL are the digits one zero. So no script show slash learn slash one two. There you go. Hello, David. 

[00:00:42] **David Waumsley:** Hello. Yeah. So yes, we're putting all the links that go to our code on this one page.

So we've just got things we discussed because if you listen to the audio, one, we have a little site where we've got our little code snippets so people can use them and their own projects is they want, which we'll try to. Prick, this library of them. So let me go back. this one should be a fairly quick one, really as we're going through the code.

I, I will just say, 'cause I wanna give a shout out to Sarah Dan, I dunno if I ever say her name correctly. but I am a student doing her practical accessory and I will, I'm gonna look at a bit of code that she's done, but she is, this is. Fabulous. If you want to get into accessibility, it's not cheap, but it, is really good.

And she updates it and she's updated it to talk about accordions recently. So that's how we know end. So I just wanted to, if we were building in with JavaScript, which as we decided earlier when we were talking about it, we probably wouldn't use that and find other patterns. But if we did, she has a couple of great examples, which I've included here.

actually I didn't need to open here 'cause I've got it over here. Where there is this typical, this is a code pen example that she set up here, which is I think how most of the accordions have often been done, where we are using a button. as the header to open up the content on this and JavaScript is then opening those up.

What she's done on this is one of the things that we discussed earlier is that she's got this, that the, it's progressively enhanced, meaning that, it's the CSS. if, sorry, if the JavaScript doesn't load, it's okay. We're going to get covered because these are all gonna be open by default. So that's one of examples and I'll just quickly mention another, because there is a situation where you might, as we talked about before, might want inter interactive headings as such.

You want, because these are in buttons, they're not treated as headings. They are actually buttons with text in it. So if we want a header, she does have another example over here where she's doing exactly the same. So it's progressively enhanced, but the code is in a heading and we can make them what they like.

And, this will work. So it's gonna show up on the table of contents for a site. So that's probably more useful, For a frequently asked questions. Yeah, and you want the headings to be there. There is an interesting thing though, as we mentioned on the sort of audio side of things, is the fact that you can't do in page search to find things with this.

But there is a new thing, which you made me aware of, which I can just find in her code here. Little bit further 

[00:03:34] **Nathan Wrigley:** up, I think go up, up, 

[00:03:36] **David Waumsley:** It's a little bit further. We have something that says, found. 

[00:03:42] **Nathan Wrigley:** now you can't find it, but it is roughly there. You can't find it there. You could probably do eight now.

You've gone too far. I'm pretty sure. I'm 

[00:03:50] **David Waumsley:** sure it's down. da duh. Oh, yes. There we are. So we have what's coming in. She's brought Hidden Until Found, which is a new property, which will allow something to remain hidden where you've put that in to. hidden is in the HTML, which actually is the same as display none.

But then things can't be found. But you've got hidden until found, which solves this problem of in page searches if you wanna go JavaScript route. So I just wanna say that, but that's not what we're looking at mainly today. let's go back to our notes here. I've set up these examples and I thought the best way to understand how to put an accordion together.

Using just HTML and CSS, which we're trying to do on this is, to look at the basic details and summary, which allow us to do that. Good. Yeah. And that is on its own, disclosure, which is, so I've created one, and we're actually using this. If we look at our transcripts now, we'll see that we've actually got this.

Kind of thing going on with scrolling over here. Really nice. and we need to just quickly, so this is what you get out the box if you put in the code of details and summary. In fact, lemme, if I can show you this and we're having some problems with the browser for some reason why we're recording this.

Stopped working and started to complain. But if we look here, we've got the details in our code. Yep. And we've got our summary. But I believe, let's see what happens if I do this, if I delete this element. you see it's done what expected it actually. If you just use details and you forget to put the child in of summary, it will, or the browser will automatically still stick in the information, but it will give you the title of details.

[00:05:39] **Nathan Wrigley:** Okay. that's a fairly decent attempt at. Yeah. Progressive enhancement I guess, if That's not, yeah. if you just forget, you get to do something. Yeah. 

[00:05:48] **David Waumsley:** if your title is details, then you probably then you're fine. Need to bother. You don't. Yeah, you don't need, so it is got that little thing in there.

What I want to do, and I'll need to refresh this again, I think too, just show this is important really what effectively, what the browser now has given us. Is a shadow dom component built in to the page so we don't have to bother with the JavaScript. And hopefully I can show this as it is. So there's no styling on this.

It's just the browser styling, creating the marker there. And as we can see here, it's seeing shadow root here, and this is where things failed when I go into the slot here. Yeah, snapped here. we get to see, what we need to see here is that in these slots we'll see that we've given an. Id of details, dash summary on this one.

And this is quite useful. We've got, as we can see over here, we've got the idea of that. We've also got a pseudo element of details dash content, so we can style that kind of within our details. And we've also got, which we have to build into our CSS. So we also have this content visibility hidden and display block.

So when we're swapping, which we can't show 'cause it's just failed, I. When we are swapping from one position to the other, the JavaScript is going on there and it's swapping from that hidden to display block. Yep. As we need to do with JavaScript. So that gives us our basic element there so we can expand on this.

By now adding in, a little bit of animation to that. So we're able to do this. And if I just go down to my code, actually let me step back one and quickly discuss this because it does look like I've got some animation on my marker. It does. And we get a default marker and we can style this marker.

The spec isn't, is a bit spotty. This is quite new at the moment. In theory, we should be able to replace this by using, marker to something else, but at the moment, we can only really style the color of it and the size of it. And know that's gonna work. you should be able to put in another bullet point list, but it doesn't work.

So to recreate this, what I've done and to put some animation on this 'cause we can't animate the marker, I've actually just put it in here. my own SVG over here. Okay. Okay. Which is mimicking this. and then in that way on the CSS for this one, we can start it now. I'm not going to, it's not on our site actually at the moment.

I'm using the default marker without the, this drop down. The reason being that the moment safari ignores the ability to hide the marker, we, can't do a marker display. None. And if I go down to the CSS on this. Somewhere down here. Have something on the marker there. On the marker there. Yep. So I've given this its own label, I've had to use content and then empty.

Yeah. Empty on that one to get rid of it. Display. None wasn't working for me on this. Any version of that. And the problem is that, as I understand it at the moment far, is ignoring that. So it'll show the default marker. As well, but then I could rotate this. So 

[00:09:13] **Nathan Wrigley:** yeah, it's nice, but 

[00:09:13] **David Waumsley:** that's it. The other thing I suppose to mention on here is that as I was trying to show before, we've got this pseudo element of details dash content on here, and this is the thing that we can now take.

What's the inside the. The details itself and animate this, and this is the really cool thing about this now, is that we can use, although it's only supported in chromium browsers, but will come that we can animate now we can do a transition from this content. So we've got, let's just have a look on here.

I think I need to go up a little bit. you had transition behavior on the. Yeah, so we, here we are. We've got the details, content. I need to go here. Got a block size of zero, so there's no height on the default. 

[00:10:05] **Nathan Wrigley:** Okay. But when 

[00:10:06] **David Waumsley:** we set it to open, open on the, yep. Yes. Then we can set it to a height, which I've restricted at the moment.

But if I put block size of open, it would open to the full extent of the content. But what I've done here is to. Restrict that. It's a little thing that I got from Adrian Rose who's a sort of usability expert, which thinks that's a lot easier sometimes just to, I really like it actually. 

[00:10:29] **Nathan Wrigley:** And the reason that I really like it is firstly, I.

That it just, for something which is not extraordinarily long and you might want to dip into that content, that's perfect. But also the, invocation of the scroll bar, which in this case is stands in real great contrast to the background color. You've got that purple scroll bar. It's so obvious that there's more.

Yeah. so it just works. I think that's a really nice way of doing it. Obviously, if it was like a whole essay that you were supposed to read from start to finish, perhaps not, you'd just want the whole thing to open without the, in your case, REM of 15, the height, but that it works really well. I like it.

[00:11:11] **David Waumsley:** Yeah. So you can set it on individuals if you like, because then you can you can just add in a class really and have it on which ones you want and which you don't. But I've done this on our site, but because it's a progressive enhancement at the moment with, the stuff that you can do, it's not across all the browsers.

So if I was to open this up and it was. Bigger than the content here in Firefox at the moment. It would just behave as you would expect. We wouldn't get the animation at the moment. And we just open up so the fact that it looks okay on arom browser there. It's great, but there is something to mention on this.

The animation that's opening up the panel is not possible unless somewhere we have, and we might as well put this in our reset. We have this interpolate size allow keywords, and this is limited at the moment, again to chromium, but should be, I think by the end of the year it should be available for all of them.

And this allows us to style from a hidden content to an auto size. it, it couldn't be put into all browsers. We have to put it in ourself because it might break some other functionality that's already set up in CSS, I dunno the intricacies of that, but, effectively it's something we could put, I put it against the html, but I could just, put it against the whole, wherever you want to put it, but you might as well put it in your reset there 'cause it'd be useful wherever you want.

so that's it really. That's how it's put together. So we were able to animate, The inside is a progressive enhancement at the moment, and the marker, as I showed was something which I've actually put in line with an SVG, a simple one here. Yeah. Which again, because of this, by default we've got black and white here.

It's quite useful when you've got inline SVGs to be able to do that because then you can set, a fill color. So we can see this is actually slightly changing too. My fill colors because I can now do this via the CSS if I think somewhere down here. Yes. We should see, I've put it to our branding fill color.

I see. Yeah. So the SVG. Yeah. So it's going to adapt to those two colors I've got in there. Okay. Anything I you think I missed on this? No, I think that's, 

[00:13:30] **Nathan Wrigley:** I think that's really useful. just wanna clarify, this will be able to be found at no script show slash learn, and then the number slash the number 12.

Is that where all this code is gonna end up? 

[00:13:43] **David Waumsley:** Yeah. And then to get to the ex no, the, They'll stay on the intrinsic framework, which is a separate site, but the links will be there. Perfect. so you can just go click on this and it'll take you to the right page, because I need the intrinsic framework because there'll be lots of examples for each episode that we do, got it. And it'll get too big. 

[00:14:03] **Nathan Wrigley:** I will, communicate with David and we'll make sure that all the links that need to go are in the show notes, be that on the podcast or be that on the, YouTube videos that come with this. Is there anything you wanted to show before we knock it on the head?

[00:14:17] **David Waumsley:** Yeah, no, we've still got the, we haven't got into the accordion bit yet. Of course we haven't. Apologies. No. Yeah. So we just need to, this is bringing them together. So we mentioned it in the audio that in order to it, for it to be accessible, we can't just dump a whole bunch of these different. Details and summaries together.

we can see it with styling if we have styled it, that they grouped together, but somebody who's on the screen reader can't. So it's pretty much building on the same thing here. We, we need to do something about that. And in this case, on the example that I'm showing here, the first example here, I've put this in a section of group.

Actually, I think there's a mistake in this. Let me just have a look at that. It doesn't actually matter, but I could use this as a diviv and give it a roll of group. Yep. And then I, a label of whatever group name I want, and then against the idea of group names, then I can put in that as hidden. That's using the H TM L version to hide it so you don't see it.

And then whatever I need to save for the screen readers. Now, when it's in a group, when it's in a role of group, that actually should be a div there. So I think I'll change that. It won't be in the table of contents if we want it to show up in a table of content. So this would be good if you are accordion wanted to show, say in another section, and you don't want it to stand out as its own section.

Yeah, you would use the group role, but if we do want it to stand out as its own thing, then we'll put it in a section. Do exactly the same. Are we a label by? With whatever group label we want. Again, connecting this to a header with the idea of that group label. And then what I've done here with CSS is I've visually hidden this and there's a class, which I'll put down on the bottom here, how to hide this.

It's a utility class that I use that hides it from cited, but still reads out to. Non-sighted people. What the lemme just see, go back there what the title is. So it'd be group title, something saying this. I can demonstrate it. I'm not on a Mac 'cause you get this automatically. But you can see, because I've actually used this with a section, we can actually see that this group title that I'm, is coming up under the content.

So a screen reader Yep. Will be able to jump to it quickly. So you, again, we have to decide which one's the most appropriate one for where you're going to use this. so that's the key thing here. There are a couple of things here probably worth mentioning is that you just see on this group of different ones here, I've, combined things, so I've left this one.

When you load the page as open, and if we take a look, it's pretty simple. We can decide which one's going to be open. Yep. By just actually putting it open by the details on here. Yep. And in order to make these work as a unit where one closes as the other's open as an exclusive. Exclusive, there you go.

Yeah. Set up, what I've done is given them a shared matching name, so for each of these details panels, we've got the name, which I've called any name at the moment, but it could be anything you want. And then that makes 'em work as a unit. One closes and the other opens. 

[00:17:34] **Nathan Wrigley:** Okay, perfect. So if you add the name, and you make it the same across all of them, then they behave as one unit and will collapse ones that are no longer required, that are no longer in focus, if you like, that are open.

Exactly. And I've 

[00:17:51] **David Waumsley:** left this, normally I think I'd have them all closed, but I've put the first one as open by doing this, but this is exactly what changes in the browser with the interactivity it puts in open there for you. So I'd probably leave that blank and have a more closed, let me just have a quick scout through this.

CSS here. Make sure that I've covered, in fact, I'll go back to my notes if you don't mind here. No, that's good. Yep. so I've mentioned that opened. If you want to open, I've mentioned that we will just add in any details of the name attribute that we want to put in there. scroll I've mentioned. Yep.

Mock icon. So we were talking about this earlier. You didn't like this pattern, did you? Much So I've put it in as another example. So here we've got another icon. But what's quite nice about this, and I've stolen it from web dev and you'll see it in the CSS here, it's, we've hidden the marker. Although it will reappear and there is a reason for doing this.

So if an Apple user goes in there, they're probably likely to see the triangle as well as this. Okay? If I'd have put the, as I did on the first example with the disclosure and replaced it with my own marker, I probably end up with two markers. And two markers, okay? 

[00:19:08] **Nathan Wrigley:** Does that's only on Safari, right?

So I 

[00:19:11] **David Waumsley:** think so. And it probably is fixed. Probably 

[00:19:12] **Nathan Wrigley:** will get fixed at some point. Yeah. 

[00:19:14] **David Waumsley:** And it may, be, by the time we put this out, I don't know, but it's just something that people have noticed. But, that on here, and I won't go into the details of it particularly, but basically we are just adding a board, a bottom to it, and an animation too.

So we've removed the marker. And we floated it off over here. And essentially this is content zero with a border added to it, which then we rotate to show this. it's in web dev. I've nicked that little icon. So it's a nice way of, 

[00:19:48] **Nathan Wrigley:** that's interesting. Okay. yeah. So makes it like a, makes it look like a plus and a minus symbol.

Very exactly. 

[00:19:55] **David Waumsley:** Yeah. It's, a nice little effect, but there's actually no icon used at all. So when you've got color schemes, it's just gonna match. Whatever the color is in there. And that's included in the code there. But I don't think I can very well explain this one, but it should probably make sense when you look at this, when we're looking at the summary before and after.

It's setting this and there's our transform and it's moving and rotating from 90 degrees. Yeah. Yeah. Interesting. When it opens, it rotates. Yeah. So yeah, so it's a, without an icon, we've managed to get something that looks like an icon. But you are not a fan of that, do you? It doesn't feel instinctive to you.

it's the 

[00:20:33] **Nathan Wrigley:** really, it's the position of it. It's the fact that it's, not really the, I quite like the icon. It's the fact that it's over to the right and the text, which is the indicator of what you want, is over to the left. So for me, I think combining the title, or in this case, the heading one, heading two, heading three, with that icon.

In the same location. Yeah. So in, in our case, if everything's floated left, that just feels like the right place to put it because if I'm going to that, it's hard for me to work out. Okay. It's a heading, but where's, where is it? Oh, I see. There's a, there's an icon over on far on the right and your, viewpoint, there's quite constrained, what is that, 800 pixels or something along those lines?

Yeah. If it was full width, which I think it might be, it would be really easy, especially if you didn't have a background color. if there was nothing to visually indicate this is a whole row or a section I have 

[00:21:25] **David Waumsley:** put Yeah. Interesting. Because I have, when you hover over here, I have put a subtle dark in and actually Oh yeah.

Now that you 

[00:21:31] **Nathan Wrigley:** do that, I see it. Yeah. That makes it a little bit more obvious. And you've got the, hand, icon as well. It's all Oh yeah. Something 

[00:21:37] **David Waumsley:** I forgot to mention that you do. Yes. 'cause it's, horrible. I actually think with the default, unless you put Yes, the. The cursor to pointer is that you have to change that.

There is one other thing I've just mentioned that's in the CSS here 'cause I don't want to go into too much detail. People 'cause it, it's very likely to change. but I have used relative color here, which is getting about, I think about 97% support now at the moment to add the darkening. So whatever was the, The color that I'm using the shade that I'm using here. I've darkened it with relative color, so I split up the channels and darkened it there and for the transition on how that comes in there. that's it really. Yes. The other point was, again, with this, with all of this, you need to make sure you've got that interpolate size on there, and if you're hiding stuff, this is the stuff that you might want for that.

There is also another bit of code on here, which I won't demonstrate at the moment, but if you. With any of these boxes, if someone forces the color scheme or they're on windows and they use one of their themes that you use for high contrast, this will put an outline around it. So your, so they'll look like little boxes around your details.

Yeah. Yeah. That's nice. That's it. That's it. I think that's it. There's a lot. Yeah, so is there, I'll probably change the code as we go along. This would should, I've put it as updated over here because where this intrinsic framework will be as I keep adding to it, there'll be content and we'll discuss it each in turn.

But things change. And obviously I might change the CSS, but it'll be updated and it'll show the date here. So if anyone wants to use it for the projects, they might want to check out when it was last updated. But it might change from when we do the video. 

[00:23:24] **Nathan Wrigley:** Okay, that's perfect. And, where would we be able to find this?

What's the URL for Intrinsic framework? I. 

[00:23:29] **David Waumsley:** Yeah, it's on the intrinsic framework.here. No, is it.no here? 20 four.co. 

[00:23:37] **Nathan Wrigley:** Okay. Yes, 

[00:23:38] **David Waumsley:** that's, but don't worry, you just need to go to our learn on the No Script show and there'll always be links to an examples that are on this, so 

[00:23:46] **Nathan Wrigley:** no script. Show slash learn slash the number 12 in ER rules.

Go and check that out. And that is the space to find it. If that's the case, shall we knock it on the head? That was brilliant. Learned all about new ways of, doing accordions, what they are, how they work. All in css, no JavaScript in site. I've maybe a bit here and there, but, mostly no JavaScript in sight.

Thank you, David. Yeah, thank you. 

[00:24:12] **David Waumsley:** Okay, see you next time. 

</details> 