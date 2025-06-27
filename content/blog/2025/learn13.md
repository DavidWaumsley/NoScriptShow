---
title: Creating accessible navigation
description: We look the code needed for an accessible menu bar 
date: 2025-06-25
tags: ["learn"]
permalink: "/learn/13{{slugify }}/"
videoid: KSpzCCa24x8
---
 **Show Notes:**


## Examples with JS

### Fly-out Menus

From the W3C's [Web Accessibility Initiative](https://www.w3.org/WAI/):

- [Examples with code ](https://www.w3.org/WAI/tutorials/menus/flyout/#fly-out-functionality)

<small>Accessible, but not progressively enhanced or very usable on small devices.</small>

### Animated nav hidden on mobile 

From Manuel Matuzović's  [Acessibility Cookbook](https://accessibility-cookbook.com/):

- [Example](https://codepen.io/matuzo/pen/mdYXxzm)
- [Code](https://accessibility-cookbook.com/code/chapter7/recipe7_6/1_nav-animated/)

<small>Accessible and fine for small devices, but not progressively enhanced.</small>

### progressively enhanced navigation 

From Sara Soueidan's [Practical Accessibility](https://practical-accessibility.today/).

- [Drop-down navigation](https://codepen.io/SaraSoueidan/pen/eYPVvBo/7bb41d53655af69e44b6cf4a72102097).
- [Mobile navigation (focus trapped)](https://codepen.io/SaraSoueidan/pen/abYgpMG/2aaf9e249122f4619c924bcfc75f450f).
- [Mobile navigation (focus NOT trapped)]( https://codepen.io/SaraSoueidan/pen/BaGPOdw/29d8bd26d365b0161c6d0ded9c33e5ef).

<small>Here &lt;span&gt; tags are changed to &lt;button&gt; tags when JS loads. The hamburger works as a modal dialog which traps the user within it by default. The last option escape the modal via the last focusable item. </small>

<small> <strong>David's note:</strong> some years ago I used &lt;dialog&gt; to [imitate a mega-menu ](https://affinitycentre.co.uk/). Until a month ago, I've not seen anyone using this for navigation menus. It seems to work with only a few lines of JS, but I have not tested it emough to cover here. Improvement is needed.</small>



## [Simpler Navigation](https://intrinsicframework.here24.co/simple-navigation/)

Even with HTML and CSS there are few things than can be done to make the experience better for all. 

- [Example with code](https://intrinsicframework.here24.co/simple-navigation/)

<details> 
<summary>Transcript</summary>


[00:00:05] **Nathan Wrigley:** Hello there. This video is a follow up to our podcast episode on website navigation. You can find that at no script show slash 21. The numbers two and one here. We're looking at some examples and their code. And the links for these can be found at no script show slash learn, forward slash 13. And again, the numbers one three joined as always by David Waumlsey.

Hello David. 

[00:00:31] **David Waumsley:** Hello. Oh so this one, we're concentrating on the accessibility on the audio. We were talking about everything really to do with navigation and we concluded that being the no script show. We try and avoid hide and show with JavaScript as much as possible. But I thought for this, I should at least show some examples of accessible ones.

And of course these are by other people because I. I can't write JavaScript, okay. I'll just go through a few examples. So the first one, which we mentioned in the audio, was from the web accessibility initiative. They've got some great examples if anyone does need what they call flyout menus with the JavaScript that you can use for these.

And there are, as you say, there's all these different variations, like somewhere you can get to the sub menu via the, little icon on the side. And as you can see on this, it works if you hover to open up the side menu. So it's a link as well as a sort of hover state on the, yeah. Little icon. Yeah. Okay.

So the, they've got that. when you, if you are a tabbing along, then you'll tab to each and then tab to that one, it'll drop it. So screen readers and, people using keyboards will, treat this differently. So this is a really useful resource, but what I will say about this is I probably wouldn't use it because I think I'm quite a fan of the idea of progressive enhancement.

And if you disabled JavaScript or it doesn't load for people, none of these work. So it's accessible. So 

[00:02:02] **Nathan Wrigley:** basically all of those, yeah, they've gone from the world if you don't have JavaScript. yep, 

[00:02:08] **David Waumsley:** exactly. So they're worth checking out as, examples if that's what you need.

But that's the downside as, as far as I 'cause it. Also, the other downside of it is that there isn't an example if you just want a copy and paste of CSS that makes this good for mobile. So it will just squeeze, I won't, squeeze it in, but as you can imagine, when they squeeze in, so space and bear will just get squashed in.

Yeah. So it's just using flexbox. So there isn't really a, an attractive design element to that. A useful resource. The other thing, and he's brilliant, I've mentioned it before on the show, Manuel, Matovich, he just easy for you to say it's not, and I'm sure I said it wrong, but he's wonderful. And the way he presents stuff, he's done some great CSS day talks and stuff.

He's got a book called Accessibility Cookbook, which is really easy to consume. You can just take different bits out of it on this one. but in a way he is, and I'll go to his examples. Now, you can actually steal these examples without getting the book I've been reading through the book, which is brilliant.

But his examples, let me just see if I can find them here, are all available on his, accessibility cookbook.com site where the code is. And he is got a few examples he builds up on it. So there's this one where you've got all the code that you need, including the JavaScript and CSS for an example, which you can find on Code Pen, which I'll show you now.

Now this looks a bit ugly, you would need to do more with it. But basically when you are there, we are, we've got normal menu and when we yep, click on there, we get ju with CSS, we've got an icon, hamburger icon, and then a menu here. And pretty straightforward JavaScript. And of course this is much better.

it's a little bit janky the animation on this. But it works. Again, it's the progressive enhancement on this side. That means that I probably wouldn't use it. I know he is a big fan of progressive enhancement, but again, it's accessible. But if you are worried about JavaScript not loading or loading slowly, then, that's maybe not the option to go with for that.

So that's that one. Now, okay, now we move into Sarah Sewer. Dan's, if I'm saying her name right as well, I dunno, a practical accessibility course. she's brilliant and she is so meticulous over everything. So of course hers have been progressively enhanced and she goes through the whole process of that.

So I can just show you a few examples of her. So we, she starts off where we look at a, there's a. That's her course. she is brilliant. She's a bit of a, party pooper for those people who just love to do everything with CSS 'cause she points out how things might not be accessible if you don't add in JavaScript under certain circumstances.

Okay. So there's this first, it's clickable, not hover. 'cause she's not a fan of that. And it's a fairly, I'm not gonna go into the details here, but the, JavaScript gets a little bit more because she's progressively enhanced it. So if I were to, I don't know if I'll do it anyway. I, if this will work well because I know that CodePen, we can't see whatever 

[00:05:21] **Nathan Wrigley:** you are 

[00:05:21] **David Waumsley:** doing 

[00:05:21] **Nathan Wrigley:** with that browser extension, but I'm guessing you 

[00:05:23] **David Waumsley:** are disabling JavaScript.

Oh, yes. You can't see that you are. I am doing that Uhhuh. And if I just refresh on this, yeah, code pen requires JavaScript, but I think it work anyway. Ah, yes it does. So we can't see our code now, but what we can see is. The state. Oh, yeah. When JavaScript fails. Yeah. So yeah, so what she does is that she builds progressively.

as she will, instead of using the button as the dropdown for something, she will use a span and then use the JavaScript to add in and change that role to a button. interesting. Yeah. Okay. But of course it makes, and I'm now, which you can't see, I'm now going to turn off my, disabling of JavaScript on this.

So it's a better solution. But then of course everything gets a little bit more complex with this. And let me move on to a next example where she, has the normal menu over here. Yeah. And then a drop down on the navigation for when we get to mobile sizes. Gosh, that's really neat. It is really neat. but again, even when you are as meticulous as she is about getting absolutely everything right and progressively hands it, there are still some like decisions you make.

But she, she's done two here, she's done this, what is called as a design pattern. The draw, where the, overlay comes over the top and she's using changing things to dialogue role. And when you do that, you are trapped. So she calls this trapped and I'm, if I could just show it on there. If I just move around here, you are trapped in that 

[00:06:58] **Nathan Wrigley:** dialogue 

[00:06:59] **David Waumsley:** here.

[00:06:59] **Nathan Wrigley:** So you, you have to, what? You have to click engage, there's no sort of escape functionality in the menu. That's, so 

[00:07:06] **David Waumsley:** you need to have a close here to be able to close this. so there is another alternative that she's made on this one. We're not trapped where if I just go into this again, we are using, it goes into the role of dialogue.

But what happens on this one is you get to the last focusable item. It will take you out automatically. Okay. So 

[00:07:28] **Nathan Wrigley:** there's, 

a bit of swings and roundabouts there. I can see why that's good, but also why that's bad. Yeah. So you have to engage it every time you go through it. So if you miss a link, you've gotta start all over again.

[00:07:40] **David Waumsley:** Okay. Yeah. and I think this is the thing, what she will say on that, it will depend on your pattern and your research on this and, but it just shows you different, as we were talking about on the first thing, when you start to get into this, you can never quite get it right for everybody, can you?

No, Because somebody's gonna be expecting one set of behavior and they won't know as they go to different sites, which is made me, obviously her course is absolutely brilliant. She's really meticulous. But here's the thing. I am not, I. I'm quite happy to do a little bit of JavaScript if I understand it, but I'm not going through, this, rigmarole.

Yeah. Okay. Look at all that. That's a lot. That is a lot. Yeah. Yeah. To change. So I'll avoid it. But these are great examples. And maybe I'll use 'em one day on this. I will, just because of the fact that she puts things into a dialogue role, I will show something, which is, might shame me later, but I did experiment some years back with my own sort of way of imitating, mega menu.

And I'll just, okay. I dunno if I didn't, I don't think I clicked this right. No, you didn't. I just added it at the end 'cause I had it. 'cause I, maybe I'll get into this at some point, but what I've done here is just on a regular menu, but I've created this mega menu. Yeah. With the dialogue. You can have show modal, which is what it's designed for, and you can have just show where it will stick to the element that's near there.

And actually you can still move around, things here, so it actually works. Now, I don't know, this is something where you might want to get a friend of yours, Joe Dawson, to look at and say, how terrible is this? I, know I need to fix some things, but it does actually work. it is enclosed because it's dialogue, but I've gotta close so I can close it.

[00:09:26] **Nathan Wrigley:** okay. may, maybe we need to get Joe on this show and he can we can line up all of the previous websites that you've ever made and be shamed. 

[00:09:35] **David Waumsley:** I know there were things wrong with this, but it's an interesting thing because I have not, I did this a couple of years ago because I was excited by the fact that we now had, dialogue, which we could use a little bit, how we're excited about details and summary.

And I thought, can I use 'em for a menu? I dunno, I could not find a single person until last month. I have not seen a single person use it for a menu. And then you found one Rejoice. Yes. I, found some one, but they made the, actually I could show you on this. I won't show you on, I will actually, let me just do this.

I'm going to disable the JavaScript. 'cause what they didn't do, which at least I did do on this, is if I disabled the JavaScript, I put in a link now which goes to a site map. So you actually get 

[00:10:15] **Nathan Wrigley:** Oh, even, okay. That's 

[00:10:17] **David Waumsley:** neat. 

[00:10:19] **Nathan Wrigley:** Yeah. Yeah. That site is beautiful, by the way. It is a menu, isn't it? It is a kind of mega menu right there, the way you've laid it out with columns.

Yeah. Interesting. 

[00:10:27] **David Waumsley:** You might not wanna get stuck down. No, there's a lot there. Something post. 

[00:10:31] **Nathan Wrigley:** Oh 

[00:10:31] **David Waumsley:** gosh. Yeah. So it might need improving for accessibility if your JavaScript breaks. So honestly, I don't know, it was just a little idea that I had that I wasn't gonna show, but I might work on it and see if there's something that can be done with it as a, if you do feel that you ever need it, if this can be, because it's so easy to do, it's just a few lines of JavaScript to get things to open because you're relying on hasty ml to do most of the work you.

That's really interesting. I like that. That's pretty neat. Yeah. And the CSS is easy 'cause you can just put it in a grid and it automatically moves. Yeah. yeah, I was quite pleased with it, but very nervous to show it to anyone because I just, there it is and it's gone. Yeah. But very easy if you put them in a grid to make it mobile responsive.

So yeah, it really, simple as I like it. Okay. So talk as simple. Should we go on to just talk about what we've used on this site and what I'll be trying to get away with? So I've, can I 

[00:11:23] **Nathan Wrigley:** just say, just for the sake of clarity, what you have used, this is not me. This is you. You've done all this hard work, so don't give me the credit for that.

So yeah, there you go. 

[00:11:33] **David Waumsley:** yeah, you can avoid the shame as well that goes, I dunno about that. Yeah. okay. So there are some things, even when we're keeping it simple with h ml, CSS and Aria, there are some things that we probably need to, so I've used on the intrinsic. Frameworks are the links there on my show notes there, and I'll put our own site in here just so I can show stuff on here.

this is pretty straightforward on this, so I'm just using Flex as most people do, because it, it sizes according to, the item, the menu item. all pretty similar here, but obviously Grid does it the other ways, puts boxes around it. So this is a pretty simple thing. I won't, I haven't put all the CSS code that's going into there, but obviously at a break point it just goes down here.

And if you're sticking to something like five here, this will go down to, before it breaks and wraps again, it will go down to a screen of, I think 3, 7, 5 pixels, maybe three 50 or pretty small, so most, yeah. Yeah. So most mobiles are gonna get this. So without having to bring in a hamburger. We've got that.

And as we showed before, what we have on this is on the mo. it takes you to where we've got more straight to the navigation 

[00:12:47] **Nathan Wrigley:** in the 

[00:12:47] **David Waumsley:** footer. 

[00:12:48] **Nathan Wrigley:** And with some 

[00:12:49] **David Waumsley:** animation that goes on that. So that's it. And here's a couple of things that probably you'll get different information on if you are into accessibility.

So I've put the HTML code up here. Now once we put nav, once we use the nav, which we should to put our ur and, that's an important thing as well. If you're showing and hiding, never hide the whole nav else, otherwise it disappears from the table of contents. So that's really, so that's another thing you could make a mistake with, but we're not doing that.

But even even though we've got nav, we might have more than one nav on a site. So we can use Aria label to say main. So it's, no, it's the main navigation. Got it. And I don't, I haven't written navigation because screen readers will announce that it's navigation. They'll know navigation main. So I put an Aria label of Main on there.

another thing to make things better all the time is to use Aria current for the users who, are without visual clues on what to look. So when you're on that particular page on, that AAG that you are using there, you'll put r current equals page. Yeah. for home on that one. That's a kind of good thing to do.

what I've done here as I'm showing you on our example, is. The names are different on here, but the link to the footer, another key thing to do is if you are an icon, which I'm just using in the HCML, unit over here, put that to Hidden True, if you want that as an indicator, because you don't want that to be read out.

Screen reader would read that out as down, downward triangle. Yeah. most of them would anyway, and then put an Aria label, which explains to them, because it's not so obvious visually for them to see. I've put an Aria label in there saying that we're navigating two links in the foot. Links in the photo.

Yeah. And, likewise, when you are meeting at that other end, there's actually, you're not far away from the get back to the top as well. So hopefully it's good. I've made some quick marks that, NAV is a landmark so you can. that's a way of being able to tell screen readers the structure.

There's eight of 'em that are commonly known, like a banner, which tells 'em it's a header, a nav within that tells 'em what the navs are so they can move around from it. But the interesting thing is, and this is why I've got, I'll, just skip ahead here. Option two is because some people will say, yes, NAV is accessible because it gives them this landmark so they know where they are.

But because they're not often well laid out on most pages, people still use the majority. I think it's closer to 70% of screen reader users will go to headers. Headings rather. Headings. Yeah. Yes. And so another way of doing it is to, in your nav you put, are we labeled by? Give that an ID and then connect that up to a visually hidden.

title which same main navigation on there. So some people sort That makes sense. Yeah. Will do that. Now the experts that I've been following haven't been doing that with their head or text. They've been using what I've used in the first one, which is just used the RRE label. Now mostly they will say, this is better.

Are we? A label buy is better because of translation issues because of the way that screen readers will find things. Aria label is your last resort. If the HTML can say it, that's best if, are we a label buy is your next go-to. And then are we a label last? And the reason why I've gone to Aria label and why I think they have too is because on the main menu you're probably likely to know in the head of that is the main navigation.

But also then you fall foul of the Of the has ml, which is usually in your main, should come first. You put a header before your header one if you like. It's fascinating, 

[00:16:47] **Nathan Wrigley:** like these overlapping and con and slightly conflicting ways of achieving. Yes. It, and it sounds like there's no perfect way to, to implement it.

There's just, slightly better given the proclivities of the website you're working on. Yeah. That is really interesting. I, did not know what you've just explained. Gosh. 

[00:17:09] **David Waumsley:** Yeah. No, I didn't. And I, I got different experts and they told me, oh, you should do this. And then I thought, hang on, I've got a head of two now.

Above my head are one, what's going on? And, Generally, I don't think it matters, it doesn't spoil your dumb order in any way. It's only, that kind of role. It's probably not the biggest thing. But of course if you are, checking some of these things, if you are using checkers, it's really annoying to have this flagged up that you've got your yeah.

Headers in the wrong order, even though it's visually hidden. sorry, so I went off a little bit on this one. One thing to just mention as well, because if you are not up to date, which I wasn't, you'll hear some people say that you need to put the role of list in a nav for Safari users because Safari decided not to feature nut bug, but they thought that lists were overused in design, so they decided not to announce 'em to screen readers.

So if you are. So they discount your role of lists. So an order ordered or ordered list. So discounted them. They've changed this only quite recently. So if it's a list within a nav, they will read out how many items are in that. Okay. Alright. Yeah. So we don't need to do that, but you might see it otherwise.

So I made a point about that. what else? Oh, there was a slight subnote on this and I dunno, I've gone my own route with this one. I dunno how people, I, see people done this differently, but you get an issue like this on this page and it's not so much on this one, but I want this to have some CSS that tells me that this is the current section that I'm in, in my main menu, but I'm actually in an article within the component section.

So you want a breadcrumb soft style thing, don't you? But not probably. Yeah. But I thought there's not many levels here. So what, I've done, and I, won't open up the inspector, but basically what I've done where we've got that, I put Aria, oh, current, not page, but true to say that's where you are.

And an Aria label saying, currently viewing a single post on the components. And that's the same on the no script show as well. So if you go into our chats and you go into an individual chat, it will tell you that it's a, post on the chats. So that was my. Work around. I'm just throwing it out there. 

[00:19:22] **Nathan Wrigley:** No one's given.

And you, sorry to get into the technical weeds of this 11 t, the, CMS management tool that enables you to do that, does it, it can figure out that this is a page under the, tree if you like, the parent of components and then it will build that area label for you. 

[00:19:39] **David Waumsley:** Yeah. I had to put that sort of as a bit of programming in there.

Yeah. To make sure that it did it when it knows which one it's on. So Yeah. Interesting. New 

[00:19:47] **Nathan Wrigley:** idea 

[00:19:47] **David Waumsley:** though. I like it. That's going the extra mile. It feels. Yeah. I did have a look at, Andy Bell's site and I noticed when had a sort of similar situation. He just, it was still the CSS styling was active there, but it was not.

Anyway, I just thought this was a bit of extra information. Yeah. Maybe, I've made it more busy for screen readers. I don't know, but Rather than have breadcrumbs where, they're only going one level deep. I'm not sure if it's that helpful, Okay. Okay. Yeah, it's just my, yeah, I know you get into a lot on this.

there's not. Did I miss anything on there? I don't think I did. I didn't cover the 

[00:20:22] **Nathan Wrigley:** CSS yet. Yeah, there you go. 

[00:20:24] **David Waumsley:** Yeah, there's not much to say. I can't cover it 'cause it's in the context of the header, but we're using Flex with Flex To make then that pretty good for headers in most of the time.

I've just put in some code here, which is showing how I'm styling the underline when we're under that section so it's visually underlined when we're under this. Yep. So you know where you are. And then that's done with the CSS that's over here by picking out the HF and then putting, and I've put it for now, I've had to do it for True as well as page, Okay. Yeah. Yeah. So it's now the a HF Aria current page and True as well. And then we've used these new properties in CSS where we can actually decide the thickness of these ones and offset the underlining as well. To be honest, I might change this. this is a bit off what we were talking about because there's a really cool with view transitions.

If you use a border and you use view transitions, it creates that lovely effect where it feels like the border is moving along to your next 

[00:21:23] **Nathan Wrigley:** Oh, 

[00:21:24] **David Waumsley:** okay. Almost 

[00:21:24] **Nathan Wrigley:** like a Yeah, I know. I know what you mean. Like a little animation of something sliding to the next one kind of thing. Yeah. Yeah. And it doesn't 

[00:21:31] **David Waumsley:** do it on this, so I might change this to a border anyway.

You get really in the weeds. Yeah. But it's a cool thing 'cause it used to take so much Yeah. Programming to create this sort of feeling like things anyway. Yeah. Styling a second target. Where have I put this down on there? Oh, that was just, this is just the script I've put in because as when we hover down to, in that thing where we hovered and I highlighted, yeah, you click on the 

[00:21:55] **Nathan Wrigley:** link and it creates the border around it to Yeah.

Keep it some focused. So I 

[00:22:00] **David Waumsley:** just put, I put the styling in there that was used on that one. So we're using target. So it, that border is only showing to highlight. on the mobile it's fine because you're down to one column and everybody knows where you've navigated to if you are going to the footer and you've got other things in there.

It was just a way of highlighting with a bit of animation. But of course with animation, I've also wrapped it around, no preference here, prefers reduced the amount reduced. Yeah. So if you've, if you don't like motion, it disappears. And that's really it. I, apart from the fact that, did I put where I got it from?

Yeah. There's a really great tool for animation, which is animus.net 

[00:22:40] **Nathan Wrigley:** anim, A-N-I-M-I-S-T a.net. Anim net. I Be sure you can 

[00:22:46] **David Waumsley:** just, get your CSS that you want from that. what else did I want to mention there? There just notes. flex, I've already said that contains the unit, current page we're hiding globally.

Oh yes, a good point actually. Something I failed to on the site I just showed you is that generally globally you might want to add to your A tags and increase, amount of padding by default because of such thing as target size, which is defined for accessibility. So you can hit the thing properly. Yep, When you're on touch mobiles where it's supposed to be, I dunno why in pixels, but 24 pixels, you're supposed to have around your, click the bullying, otherwise it starts to fail and, accessible. Yeah. You have to be very precise and have a perfectly pointy finger. Yes. Yeah. But yeah, if you haven't got that thing and silks two tied pixels that up for me, although I didn't spot it on my other site where I know I didn't have enough.

not always accurate, but I think that's it. Have I covered enough Cody stuff? 

[00:23:43] **Nathan Wrigley:** Gosh, yeah, I think so. just to say that, obviously we're showing this on the screen, but it is available to you. no script show slash learn. Slash 13, the numerals one, three, no script show slash learn slash 13. Yeah, I think that's great.

And obviously we had a companion, podcast episode, which you can find at no script show slash 21, which obviously explains all of the bits and pieces that we've been going through and why David, felt these bits of navigation were important to mention. I think that's it. Have we, captured what you wanted to say?

I think we have. Yeah. That was great. I enjoyed that. Yeah. In which case, I will see you next time. Thank you. So that was all about website navigation. Hope that you enjoyed it and we'll see you next time. Take it easy. Okay. 

</details> 