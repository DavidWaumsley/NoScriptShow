---
title:  "Styling Quotes with CSS"
description: Styling testimonials, blockquotes and pull quotes.
date: 2025-08-19
tags: ["learn"]
permalink: "/learn/15/{{slugify }}/"
videoid: Ov5Y0Cn_87k

---

 **Show Notes:**

 In [part one](/24/) we attempted to rationalize the HTML mark-up needed for testimonials, regular quotes and pull quotes. Here we are looking quickly at styling them with CSS. 

## Testimonials

It's common for these to be displayed as a carousel, but until this can be achived in an accessible way without JavaScript we (for reasons associated with the show's name) look for simpler and more resilient options like:

- The "Reel" a horizontal scrolling technique used on [Every Layout ](https://every-layout.dev/).
- &lt;details&gt; and &lt;summary&gt; as used on our demo [here](https://band.here24.co/).

An example of a 3 column testimonial can be found on our [intrinsic framework](https://intrinsicframework.here24.co/testimonials/).

The details and summary used on the band website demo combines the RAM technique [shown here](https://intrinsicframework.here24.co/maximum-column-grid/) with the disclosure widget example [shown here](https://intrinsicframework.here24.co/disclosure-widget/).


## Pull Quotes

As mentioned in [part one](/24/) pull quotes don't naturally lend themselves to the web as the effect is complex, lost on smaler devices and is a repeat of content that does not make sense (by default) to those using screen readers.

Interestingly though, Rachel Andrew's CSS Day 2025 presentation called [Multicol and fragmentation](https://youtu.be/NfwDP9shxNQ?t=2445) talks about the idea of the web being more like printed pages going forward. She introduces the idea of "exclusions" (to normal flow). The examples she shows look much like the patterns designers often try to recreate with pull quotes. 

  <div class="popout center-me" >

  <img src="/img/exclusions.webp" loading="lazy" width="1200" height="665" alt="screenshot from Rachel Andrew's talk showing print examples of large text excluded from normal document flow.">

  <small> <em> A screenshot from Rachel Andrew's talk.</em></small>
</div>

The No Script Show uses a [named grid lines technique](https://layout-breakouts-builder.vercel.app/) to allow some content to break out of the narrow (more readable) confines allowed for written text (as seen with the above image). This can be used to create somthing close to a typical pull quote pattern as shown [here](https://band.here24.co/music/street-lights-album) and [here](https://band.here24.co/music/shadow-album).

## Regular Quotes

Over time we will be building up some copy and paste styles, but a good starting point is [this recent post on CSS tricks by Andy Clarke](https://css-tricks.com/getting-creative-with-quotes/).

<details> 
<summary>Transcript</summary>


[00:00:06] **Nathan Wrigley:** Hello there and welcome to the No Script Show. This video is a follow up to our podcast episode called Don't Quote Us On This, where we looked at some of the confusion there is when it comes to writing semantic HTML for testimonials, pull quotes, and regular article quotes.

You can find that at no script show slash 24, so the numerals two, four, and it's worth checking that out before watching this. Here though we're quickly looking at various approaches to styling these things. With CSS and as always, David Waumsley joins me over there with a lovely shirt today. Very nice.

Shall I put the screen on and crack on? 

[00:00:46] **David Waumsley:** Yeah, let's do that. 'cause this one will be quick. Okay. Because I haven't had the time to actually, do many variations of the sales on the things that we were talking about. Sure. But, I've got some things to point out. I think when it comes to testimonials, which we talked about first time, there is, it seems pretty common to me to see those put in carousels of some form or another.

And obviously with us being a no script show, there's reasons why we want to avoid things that require JavaScript. If we can. So we're looking for simpler, resilient options. So there are a couple here that. Thought I'd mention. and the first one is the, what is called the Real by Hayden Pickin because he's getting a mention again and Andy Bell in their every layout, and I use this on our site anyway, but I think it's a really good solution.

So if we go to their. cycle. See, it's been employed over here, so you just put the testimonials in this nice. And, looks nice so you can find it here. Unfortunately, the reel is under their premium thing, but if you want to see how it works, you can just go to the no script show and look at how we're using it.

okay. There you go. Yeah. Yeah. So if you could see the reel is effectively here, you can get the gist of how that is put together. It's horizontal scrolling. So that's one approach, instead of having a carousel when you've got a lot. Yeah. And you don't wanna take up too much, of the vertical space.

And another one, which, I should have brought it up actually. and we'll just show it here in effect. So I've done a little demo, which we'll use at some point. Let me just go to it, show you some reviews. So I've. Lay these out. But another way which I needed to use was to just use the thing which we talked about.

The sort of details. Details and summary. Correct? Yes. And I've got that as an example. And in fact, I'm combining two things, which are on our intrinsic framework. I'm combining this thing of setting a maximum column. So I've got the sort of CSS here where we can just set these up, how many we want, and then it creates this sort of, if I can resize this sort of situation, but it doesn't go beyond three or whatever we set it to, put that inside the same thing.

Let me just go back to. Our homepage where I can see it. And, we've moved on since then. Let me have a look for the disclosure widget. So yeah, so I'm just using the same disclosure widget there, but I'm sticking that ram technique, those, grids within that. I think that works quite well. I did it on a website.

In fact, I can just bring it up. If I can just search for this, earth. Affinity Center. Yeah, you've got the URL there. Yeah. if I just go into there a couple, it was a problem that I had. I don't think the markup is good as I have here, but we had all these different sort of, reviews, which he collected and he collected so many and they were in this carousel.

And I never realized until I had to remake the site how many were, and you could see wow. Yeah. So I thought, that was the best way to deal with that. yeah. So that, so you pushed them 

[00:04:06] **Nathan Wrigley:** into a container there, which has a maximum of whatever it was, six or something like that? 

[00:04:10] **David Waumsley:** Yeah. Yeah. So on this case and then they just, and it's quite nice because responsibly then it will just adjust.

Yeah. and I think, these are better, I dunno what you feel about them. I now hate it when I see a carousel for reviews. 

[00:04:26] **Nathan Wrigley:** I think the beauty of the. the details block is that everything is definitively hidden until you touch the details. you invoke the detail, you open it.

Yes. In fact, you open the accordion and then it's all. Available, whereas the carousel is somewhat available and you have to interact on an ongoing basis. So you have to continue to scroll and then scroll a bit more and then scroll a bit more and then scroll a bit more. If that works with your finger.

That kind of almost feels like on a mobile device that kind of sweepy. Sweepy, yeah, something. Something quite good about that. 'cause we're used to that with all the applications, but I think on a desktop your I Imple implementation with the details is better. Because it's all on. All off.

You toggle them all on, you toggle them all off. If you were to have, let's say that you had 50 on that page You just showed us that scroll bar is gonna be tiny. Maybe it's not 50, but It's a pro. Yes. it's probably not far off, is it? 

[00:05:30] **David Waumsley:** That on this though, I didn't do. So if we look at this one, if I go back to the, that one that I was doing, I limited the space.

[00:05:38] **Nathan Wrigley:** Yeah. You 

[00:05:39] **David Waumsley:** okay? 

[00:05:39] **Nathan Wrigley:** So you carried on with the scroll there. Interesting. Yeah. Okay. Yeah, so there's options. There's options. I actually. Quite like what you did, where you opened it all and then you had that big close button at the end. That seemed to work for me. Yes. Yeah. I think, I'm not a fan of the carousel either.

Basically I, I think it's had its day, it was interesting, but 

[00:05:59] **David Waumsley:** not, yeah, and I think this is why they argue on every layout and that you'll notice on websites that either of these guys have done, that they tend to employ the real quite a lot for their stuff because on a mobile. It does, you can do it with your finger, so it does, Scroll along quite nicely. so anyway, that's just a solution to avoid having to get into JavaScript until, the hope is because we had that initial excitement about, Google managing to put forward some new, HTML that would, give us carousels. Except it didn't, it didn't.

The thing is they called it accessible. And then, There was Susan Suan who Yeah. Did real experiments on it and said, no, actually it's not. So it's still ongoing. It's ongoing. It's not a work, we it's a work in progress. It's not finished. Yeah. Yeah, exactly. So that might get changed over the time.

I'll just, Let's just go over, I did do on a intrinsic framework, I did mock up. If anyone wants the sort of way I've coded this up with these example testimonial here, I'll probably keep adding to these. so I've put in the HTML, which we were talking about in the way that we would do it now, given What we learned in the. The first part of this, and then here there's not much to say on it. so basically if we look at this, so how it works is that we start mobile first. So we just set those up. Yep. And then have them go into the grid past a certain point Into the three, which not that difficult for anyone to set up.

there were a couple of things here that I put in the code, which I thought were quite interesting. and new one was, and, people who are watching this show won't get it. But you had, an accessibility expert look at our site, didn't you? Yeah. Joe Dolson. Yeah. Yeah. Joel Dolson and I, although I saw it, he reminded me how we could use it.

So I'm using it here to put in this sort of. CSS generated content here and then escape it from screen readers by just putting in a blank, which we, which is new CSS Alt that we can have with this. Yeah, that was novel, wasn't it? 

[00:08:17] **Nathan Wrigley:** Yeah. So you had to have a blank for it to work. So like in effect, you think it not being there would be superior, but having a container with nothing in it was in fact what you needed to do, which is curious.

[00:08:33] **David Waumsley:** Yeah, so I'm able to just put this with the little stars just so it's decorative. Yeah, it looks nice. Doesn't mean anything at all. Yeah. But you can do it. And as we can now do it with generated content without, having that read out to screen readers, which is quite nice. The other thing that was just employed on there, which is worth, as I say, we use a media query then to bring in the grids and I've just put three columns on this one.

It could be anything. Yeah. And any other thing that I've put in there. When it does get to that, I wanted to use sub grid. To make sure that whatever size of the quote is here, that the people and their details line up. They all stay the same. Yeah. They all line up at the bottom. Yeah. Yeah. It's in a subgrid related to that, but That's it really. There's lots of different ways. Nice. Yeah. It's just a simple thing, but it's a good starting point when we do our projects or something to say, oh, that's how I coded it up before, 

[00:09:26] **Nathan Wrigley:** just to say, obviously I'm putting the URL on the screen if you want to get. This, if you wanna be able to see where this code is, you can obviously look in the URL bar on our screen, but head to no script show slash learn slash one five number 15, and the links as you can see on the screen are right there.

Just click on them and you'll be able to get to all of these bits and pieces. Sorry to interrupt. 

[00:09:47] **David Waumsley:** no, it's good. so I think that just covers testimonials. So let's go back to pull quotes again, something which I've, I think maybe ever used once in my career. Do you 

[00:09:58] **Nathan Wrigley:** know what, when you see them in a printed magazine, which we can now see on the screen, so we're looking at, I don't know, maybe it's, some magazine, vanity Fair or National Geographic or whatever it may be there, man.

Is it effective? It's like super effective, especially as the, you've got this columned layout of text, like it just jumps at you does, it really stands out. Yeah. Typically in on the web, we're never gonna employ three columns of text like that. So I think the opportunity to make it stand out quite as effectively as that is less.

But there, it's profound. it's like it's the first thing you're gonna look at. You can't escape it. It's brilliant. 

[00:10:38] **David Waumsley:** Yeah, no, design wise, and you can understand why people love these pull quotes. 'cause a lot of the designers who've gone to the web started in print, didn't they? And they want this.

So in contradiction to what we was talking about in the first part with Jeremy, Keith's argument, why do we have these on the web? They don't suit the web at all. because the duplicate content, annoying people, 'cause screen readers can't understand it. And then we have it. Technical difficulties of making these work on all screens.

And there's good reasons not to have poll quotes, but interestingly, just recently, it was released actually on YouTube, so you can actually watch the Talk by Rachel Andrews, for the CSS day. Thousand 25 and later in there, I've actually linked to the timestamp where she shows this and she talks a lot.

She's talking about multi columns, which I use quite a lot, this way of being able to just automatically generate columns and she's working on the spec of that Uhhuh. One of the big problems she has is multicolor and fragmentation. Fragmentation is about how you control what automatically gets shipped over to the next row.

Yeah. Anyway, so that's mainly what it talks about. But she also talks about the idea of exclusions. So it's not there in HTML, but she's asking the basic question, how much do we need it? Because with exclusions, the idea that you could exclude something from the normal flow, Rather than a sort of fragmentation that's excluded from the normal flow, everything can go around it.

And of course when you think about it, that's exactly what we'd want for things like pull quotes like this, Yeah. 

[00:12:14] **Nathan Wrigley:** So does it sit somewhere else then? can you, in this idea, would you specify it would belong at the end? or would it just disappear entirely, if So it'd be presentation.

It'd be there, but you wouldn't be able to see it. For example, on a screen reader, it would just evaporate. 

[00:12:34] **David Waumsley:** I dunno the answer to this. I think if there's a demand for it, they'll start to look into how they can implement this. So the implementations are known at the moment, but while she's looking at it, how much do we want these kind of design patterns?

And she does make a point, updating 'cause generally, and she would be part of that group. We've generally said, look, the web isn't like print, no, forget that. But as she started to look at fragmentation, she started to look at how you might fragment these things. Particularly some people still want to print.

And in fact you can print our articles actually, 'cause I put the code in for that. She's thinking that you now can fragment stuff. So things go into pages. So if we want the web can behave a little bit more Print, Yeah. And 

[00:13:18] **Nathan Wrigley:** honestly looking, okay, this is a curious aside. For the first time in probably 15 years, I subscribed to a magazine last week and it arrived, and I just loved it.

Because the way it was presented and the way it was laid out was just so alien to me. And I did that curious thing where I tried to, I forgot, and I literally tried to pinch and zoom and on a bit of text and then I laughed at myself as I did it, but it was so pleasurable to see. Quirky layouts.

Yes. That obviously at the moment we've pushed against that. It's we just want this one column. why do we want this one column? increasingly, we obviously on a mobile that would be desirable, but on a big screen, which many of us have got the privilege of having something quirky would be interesting.

Columned layouts. Why not? Yeah. it's fascinating and it's artistic. Yes, as much as anything else, it lends some sort of, okay, this, they're credible, they're artistic, this is what they do, vanity Fair or something, or Vogue or whatever. something like that would really be able to lean into that, wouldn't they?

Because that's their whole thing is creativity and artistry and all of that. Yeah. Okay. 

[00:14:41] **David Waumsley:** I would trust Rachel Andrews if she was behind the spec on it. Obviously that's one of her jobs, as she says. 'cause no one else wanted it. 'cause the multi Coles have been around for quite some time. yeah. Up there.

But nobody uses them, right? I do. quite a lot now. Okay. You use them. Okay. But you, it, that's where, the spec isn't as it should be. 'cause there's been lots of ideas and that's around fragmentation about the fact that, when you put something into multi coal, then you have to control what is falling as you change your screen sizes.

Yeah. And sometimes that can be awkward. So you can, that's the fragmentation side, but it does lead onto the question. And the same also, it links into what she's done with grid and the future spec of grid, where now we can. with CSS, we, it, we can control right? how things are read out to screen readers, right?

When our design patterns are going all over the place. 

[00:15:36] **Nathan Wrigley:** so the browser could intelligently apportion the. 3000 words of text into manageable, three column layouts in a grid or something like that. 

[00:15:47] **David Waumsley:** yes, but it's more about just when our layouts, the problem is, if we put something left and right or something and it falls underneath, but it falls the other way.

Yeah, exactly. Yeah. It's gotta be able to, it's gotta read the dom order, but the dom order's going to need to change with the CSS that's moving that around visually. Yeah. that's coming into grid. So I imagine within this, I mean I guess you're thinking ahead, at the moment it's just at the stage of do we want this, is there a big demand for this?

Because obviously there's a lot of work to do, there's a lot of convincing the browsers to get on board with the how to solve this. It's an interesting 

[00:16:22] **Nathan Wrigley:** kind of reversal of the last 10 years of. The internet it feels like, but it's nice. I think it's a brilliant, it's quite refreshing. 

[00:16:30] **David Waumsley:** Yes. Yes. So I think, yes, really interesting.

I think that's, anyway, there's just that. But in terms of, in terms of pull quotes, 'cause they are quite difficult to do. I've done a little cheat, which I think works because we use on the no script show. In fact, I can even do this probably if I just put the inspect on here. I just show it quite easily.

We are, as you can see here, probably just about, we can see the lines so I can have content as I'm, in fact showing here it's breaking it out of the main body without having to open up a new div. So I thought the next thing, and I did it here, let me just bring this up. just on that demo thing, you could use the same, yeah, there you go.

Yeah, so it's a pretty easy thing. We would use that as standard to do that there. And then I did another one, so 

[00:17:23] **Nathan Wrigley:** that's nice. I really like that. 

[00:17:26] **David Waumsley:** Yeah. So it looks okay as it moves to whatever size you've got. 'cause it starts to move a little bit in until it's just that regular old heading it looks like almost, doesn't it?

Yeah. Yeah. And these name line things are easy. And I just did another one. Which one did I open? Let's have a look at this one. This is a bit more awkward. Good. Because then I, and I've had to put the text. So this is what is a sort of pop out size. And then I've had to book Yeah, the text. Yeah, that's a curious, 

[00:17:52] **Nathan Wrigley:** that's a curious demonstration of limitations.

'cause you really want the text to wrap and I suppose it now it suddenly works, but on deck and do you know what it's not. Jankey, but I can see why it might annoy your aesthetics. it might, because a 

[00:18:07] **David Waumsley:** lot of the pull quotes here are often lined up this side and then, yeah. Because I would've to do a lot of work to do that and I'm, and then if it was non left aligned for a right, for a left to right reader, that would be, yeah, that would be a faux part, 

[00:18:19] **Nathan Wrigley:** wouldn't it?

Okay. 

[00:18:20] **David Waumsley:** For anybody who doesn't know about, I think we've mentioned it before, if you want to make these nine, na named grid lines for your pages, then there's a great generator over here, that allows you to do that. So the link is in our show notes, so you can just set up your own grid lines. Yeah, once, once you've got the code for this, it's complex code.

Once you've got the code for this, you can just. Change the numbers you want for the w, is that 

[00:18:45] **Nathan Wrigley:** gonna be in the show notes as well? Will that be, yeah, the 

[00:18:48] **David Waumsley:** link to this generator, and we're using it all the time, it's on our site as well. So you can, again, just look at the code there, but I thought it does allow for that.

okay. We are going to do this quickly. I think that's all I needed to cover there. And then for regular quotes, luckily just as. In this thinking that, oh, I need to do some styling to show Then the lovely Andy Clark came to the rescue Yeah, exactly. With the CSS tricks article. So we'll have a look at that.

and it seems like a good starting point. He, in this article, which I won't go into, just gives a whole load of code for styling these different block quotes. Nice. And it's Andy Clark, so they're always beautiful as always. I. And that's really what they're brilliant 

[00:19:35] **Nathan Wrigley:** as well. Some of them aren't they?

They, I'm particularly drawn to these much more straightforward ones where it's just some sort of separator at the top and the bottom. Yes. I like that. Not quite so into the, I don't know, the icons at top and bottom and the surrounding it with a speech bubble or something. It's less for me.

But they're beautiful. You're right, they're very, they're quite nice actually, now that I've said that, quite like those. 

[00:19:59] **David Waumsley:** The one thing though I will notice here is this little, so we see this sort of really beautiful pull screen on his example here. Yeah. What he doesn't provide us with, maybe there'll be an article following this up because been using this demo site for different articles, but I'd love to know.

If he's actually turned that into a code and how he's done that. Yeah. and I suppose it's similar to what I've been showing there, but I would like to see how he goes about it. Yeah, that's interesting. But it's not there in the article. But otherwise there's, it's a good starting point I think to pick up some CSS to start with this and, yeah.

[00:20:35] **Nathan Wrigley:** So this is, on CSS tricks.com. Again, the link will be in the, the show notes. Yeah. there's the url, no script show slash learn slash 1 5 15. Yes. There we go. And I 

[00:20:49] **David Waumsley:** think I've lost my notes, but I Yeah, There's the end at the end. 

[00:20:55] **Nathan Wrigley:** We're at the end. 

[00:20:56] **David Waumsley:** We are at the end. Actually, if I just go back here, let's just check my notes.

Yeah, we're done. We're done. 

[00:21:02] **Nathan Wrigley:** Okay. In that case, I will, I will take your screen away and, and we'll just mention one more time where you can go and find it. the piece of content which came before this. So if you're curious about what we spoke about and the trials and tribulations from a kind of a technical point of view, but it's all.

Speech. woo. That didn't work. There we go. No script show slash 2 4 24. That's the, the preamble to this episode if you like. And obviously if you want the show notes there, you can find them. But if you want the bits and pieces for this one, no script show slash learn. Slash 1 5 15. So there we go.

That's it. We will see you next time. David, thanks so much for your, for your hard work. I'm riding on your coattails. Thanks a lot. Alright, see you next. Easy. Bye. Yeah, bye.
</details> 

