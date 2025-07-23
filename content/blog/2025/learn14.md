---
title:  "Better HTML <head> tags"
description: We look at the HTML head tag and how it can be better structured.
date: 2025-07-15
tags: ["learn"]
permalink: "/learn/14/{{slugify }}/"
videoid: LV6izpLMHGU

---

 **Show Notes:**

 Following our chat with Paul Lacey on [design systems](https://noscript.show/22/) we are looking at the head element on the No Script Show. How it is set up could be the start of our own design system.  Key points:

 - Our site is on [Github](https://github.com/DavidWaumsley/NoScriptShow). You can reach head code [here](https://github.dev/DavidWaumsley/NoScriptShow/blob/main/_includes/partials/head.njk).

 - The site is created with Eleventy ([11ty](https://www.11ty.dev/)) and uses nunjuck templates.
 - We're creating small components containing links to code resources.
 - The aim is to include cut and paste snippets and quality checklists.

 ## Resources 

 - [Optimal head structure](https://intrinsicframework.here24.co/optimized-head/).
 - [Favicons](https://intrinsicframework.here24.co/favicons/).
 - [Social metadata](https://intrinsicframework.here24.co/social-metadata/).

<details> 
<summary>Transcript</summary>



[00:00:05] **Nathan Wrigley:** Hello there and welcome to the No Script Show. This is a video follow up from our podcast, episode 23 that was called Are We Right In the Head? You can find that at no script show slash 2 3 23. Here though we're looking at the code used in the no script shows, head tag and links for what we are showing over at No Script Show slash Learn.

Forward slash 14. So one four. I'll put that link on the screen in a moment. So if you are watching this on YouTube or something like that, you'll be able to get that. But, hello David. How are you doing? Hello? I'm good. Good. 

[00:00:40] **David Waumsley:** yeah, we might as well bring the show notes up on this one straight away.

Okay. 'cause not many of them, we'll just go and look at our head here. in some ways. I think we're following up on that chat that we had last time with Paul Lacey on Design Systems, and we're trying to put something together that's a design system as we go through these components. And here I just thought I'd share this kind of early start of how we're chopping up this site so people can look at it and go, either take inspiration from it or find errors with it and let us know.

Okay, which is, it's more likely to be the latter, but. So what I've done is I've put our site, which is an Eleventy site on GitHub. So I'll just go over there and you can poke around in the code that we have. So our site was taken from the Eleventy base blog, and I've Been messing around with it since there, so lot's changed.

But if you go into, whether is that a link there to our repository and you go into, the include section into layouts and into partials, we'll see we've got a head, nun jugs file over here and. When you're in here, you can actually go in there and use their own editor, which I've done. So I'll go over to the page here and your setup might look slightly different 'cause you can bring in whatever extensions you like.

Okay. But this is a dark mode and this is what I thought we'll try and do with the, as we get into sort of these sort of components, you wouldn't think of the head as a component. 'cause it's not a seam. But I'm treating it like that and I'm thinking. With our other site that we have, which we've called the Intrinsic Framework, it's a jotting pad for bits of code that I might want to copy and paste, or as a way of checking that.

When I build new sites and do stuff. So I thought I would try and combine it and put it all in this one document here, into the section and then put links into it. as we were talking about in the first audio session on this, talking about heads, we were influenced by Harry. Robert's, talk, which was saying how you can structure your header.

So I've got a link here, so anyone can just go and follow the link here and bring up the details here that we've got here. Now, this will just be a. running document as somebody has someone kindly listened to our, episode on, accordions and we had a, an issue that I'd never solved in the CSS, which was about the little triangles on the details.

Details, 

[00:03:22] **Nathan Wrigley:** yeah. 

[00:03:23] **David Waumsley:** Yeah. And that you couldn't hide it from safari. And this person came back with a. The solution. So there was a 

[00:03:29] **Nathan Wrigley:** way of doing it. Very nice. There 

[00:03:30] **David Waumsley:** was, so the same is for anybody else who might wanna listen to this here. as we're learning as we go with all of this. So I've just put in here, I mean it's worth just taking a quick look because we skimmed over in the audio session about Harry Roberts talk.

There is the link so you can listen to him. It's about an hour long, I think. And there is this sort of, Guide here to what you might want. So I only mentioned the certain things that we use, but this is the exact order that you suggest that we put things in. So it includes other things that we, might not have mentioned where you might put pre connect, where you might put a synchronous JavaScript.

we've got none of that running in our site, where we might put the import. So there's all the order there and that's formed the basis of when I'm putting something in the head, I'll look at this first and go, which order is it going to go on? Where we're gonna put it in 

[00:04:23] **Nathan Wrigley:** our head? I, suppose that's immutable as well.

That's not really gonna change over time. That document is it. what you see there is, gonna be until some major thing happens that's gonna be good for a decade or more. 

[00:04:35] **David Waumsley:** I would've thought so. Unless, something changes in there. I, guess things are changing all the time. a lot of these pre connects.

I, I just wonder, I haven't got a policy yet, but I think with all the, I forgot what it's called. Synchronous loading. Is it called that you might remember I just mentioned 

[00:04:53] **Nathan Wrigley:** you, are you talking about the CSF, the acronym of the. And No, 

[00:04:57] **David Waumsley:** I'm talking about the fact that you can preload, pages.

Yes. I think 

[00:05:02] **Nathan Wrigley:** synchronous loading was what we said synchronous. I can't remember. Let's go with that. 

[00:05:06] **David Waumsley:** Yeah, it's the Google thing. It seems it's only in Google at the moment, but it might take off and that might change maybe. 

[00:05:12] **Nathan Wrigley:** Oh no, you are thinking of. Speculative loading. That's the one. Yeah. Okay. 

[00:05:19] **David Waumsley:** Yeah. Yes.

Speculative. I 

[00:05:20] **Nathan Wrigley:** knew it was 

[00:05:20] **David Waumsley:** wrong. Yeah. So that might change things like here, where you mark things up, but otherwise That's a good 

[00:05:25] **Nathan Wrigley:** point. Yeah. Okay. Fair enough. Yeah. Yeah. 

[00:05:27] **David Waumsley:** Yeah. And also, for those who didn't see the, those who did listen to the audio and listening to this, one thing I didn't mention is about schema markup.

'cause I was a little bit, because it's a kind of script in there, but I assumed it would follow. His rule that you generally put all your urgent stuff at the top of your head. At the top. Yeah. Yeah. Those three key things that we need, like the, the page title, that we, need something on our view ports over there and that we need a character set on the top.

And pretty much when we get to the CSS and the JavaScript, there's an order depending on how they load. But the one thing that I hadn't thought about, 'cause it's not mentioned in this talk, was about. Uses schema markup because it's contained in the script. Where does that go? 

[00:06:12] **Nathan Wrigley:** Oh, 

[00:06:13] **David Waumsley:** it, I, double checked it and, I assumed it would go in with your SEO, which should be, that's last, basically.

Okay. Unless it's the title. Everything that's SEO goes last in your head. 

[00:06:24] **Nathan Wrigley:** Okay. 

[00:06:24] **David Waumsley:** Yeah. and that's the case here, because it's not synchronous. Scripting as such, it's, it's not gonna hold anything back, so it can go last, 

[00:06:33] **Nathan Wrigley:** on that. I'm just gonna quickly read into the podcast if you're, watching this, the, the audio podcast that we had the notes for that were at this url, so no script show slash 23 2 3.

I said it at the top, but I'll. Put it on the screen and then the bits and pieces for this one, no script show forward slash learn slash 1 4 14. Okay, 

[00:06:54] **David Waumsley:** there we go. Yeah, so we're just following on there and I've put the key points that we got from this talk over here just as a quick reminder about the important things.

But yeah, his orders really useful. So that is, something that I've put in my document over here, as a way to link to it, just to refresh myself on it. But our own head, in some ways it violates, we were talking about before. I'm using Eleventy here, which allows you to bundle together all of these individual CSS files into one which I'm using here, and I'm using a link tag over here, which is doing that.

So there is an argument that you could use this and. The Eleventy Base blog actually does that. It outputs it by default as it into your head. Okay. The whole CSS goes there, which is interesting because according to Harry Roberts, you could, it could be CSS that you could put in the body in effect, but, as another place to put it, So that was the main thing. So this has structured the order of things that I've put in, but there were other things that we talked about in our audio episode, so I put some links up to this. So something on the fons here. and yeah, we 

[00:08:05] **Nathan Wrigley:** talked about them being SV Gable, didn't we? Yes, exactly. 

[00:08:09] **David Waumsley:** From Safari 26, which is only out in towards the end of June, I think 2025.

Anyone listening to this a lot later and. Because of this. I think it's a, real game changer in the sense that we can now have these SVG icons as I understand it. I dunno if you remember, there was a conversation I was having where I wanted to link to an SVG and put. prefers color scheme within that SVG and for the browsers to honor that.

So I didn't have to put that SVG in line. 

[00:08:41] **Nathan Wrigley:** Yeah. 

[00:08:41] **David Waumsley:** So I could change things. I don't know if this changes that, because it was the only browser safari that didn't do it. So I'm wondering whether we now have to put in line SVGs to build up, to have. It prefers color scheme. You had to, and maybe this is gonna be a change that I haven't looked into it, but I can show you this in action.

So anyway, let me just quickly go over this documentation. let's just have a look here. So there are a few things that we obviously want to still put in here that we've got our SVG that's the most important now supported up to. Roughly 78% of the moment increasing. I think as things change with Safari, we still need our fabric on ICO, which of course a fallback.

yeah. Supported by everything that goes back forever. we may want to include, something for apple touch screens, so ping on that one. I've done that and I haven't bothered with the progressive web app. Link on that one at all with ours. But the light and dark is quite interesting because this is literally the one we're using on our fon at the moment on here.

And just so I can show you it, as you can see within there, we've got, in the Fon we've put a style sheet on here, and then we've got a media query changing the bars and the brackets. Of our icon here. 

[00:10:06] **Nathan Wrigley:** Yep. 

[00:10:07] **David Waumsley:** Now, if you change our scheme here, this isn't working because there has to be a separate setup for this.

This is using, 

[00:10:15] **Nathan Wrigley:** right? Because that's not the fcon. It's not, yeah, 

[00:10:19] **David Waumsley:** it's, this is one of the most awkward things I think about light and dark at moment. We can't just rely on. Having preferred color scheme on CSS, we have to build something in separate to make that work. And we can add this in, but I haven't added it in for preferred color scheme.

Okay. So our is working on other attributes, but if I go, and actually I'll leave it here because I've got this little tool on here, which will change without me having to go into the settings I have. Oh yeah, you've got a little chrome extension. 

[00:10:49] **Nathan Wrigley:** Yeah. Look at 

[00:10:50] **David Waumsley:** that. Yes, I have. So I could see, it's working.

if I set my browser or device, you can see it's changing the colors here. So I think that's pretty cool. So that's pretty neat. 

[00:11:01] **Nathan Wrigley:** yeah. 

[00:11:01] **David Waumsley:** Yeah. So our Fon, which we're using on our site, I dunno if you can see, I'm pointing over here. 

[00:11:06] **Nathan Wrigley:** Yeah, just about. Yeah. 

[00:11:07] **David Waumsley:** Yeah. It's on there. But I needed to make it big. So you can see that there's a really good article actually, on Fons here, but it goes into real depth about, the kind of sizes that you might want for your ICO image.

And I haven't bothered with any of that 'cause I think it's. It's like the, it's some relic of the past, isn't it? it's hopefully it will be soon. I think we'll all be on s vg, so that makes sense. So anyway, it's just some little notes there on that. let me just go back to my head code over here.

Okay. And the next thing that was worth talking about was the social media. I've set up a page as well for that, on the intrinsic framework and just worth mentioning this, I think, Because it's quite a lot of code to have to put in. I think the simplest way, if you're just doing a brochure site, and this is what I've done on some sites where you're not expecting much to get shared on social media, maybe your about page, really, you don't need to replicate all of the options that you've got for open graph and Twitter where you know you're asked for your description and your titles.

If you don't have them, it's gonna take the site's title and description and use that anyway. So the only thing that we want to probably stop is it's showing the first image in the do or whatever image, the social media. because that could be any 

[00:12:29] **Nathan Wrigley:** random thing. 

[00:12:30] **David Waumsley:** Yeah, exactly. Which is inappropriate.

So really, as we talked about before, you could set up one social image if you put enough. Probably about 15% of us border around a, an aspect ratio image of about, 16 nine. 16 nine, something like that. Yeah. Yeah, exactly. And that's gonna work for all of them. I tend to put them, I think at the moment you, need, for sort of the best arrangement, you need something that's over 1200 pixels, but I just tend to use 1920 and use that.

Web P, it's so small, it doesn't make any difference that size difference. They're, 

[00:13:10] **Nathan Wrigley:** they're so close. The Twitter one really just seems to shave a little bit off the top and the bottom. That's on a tiny bit off the side. The aspect ratio is such that if you just add a, like you said, 15% of just white space, for one of a better word, everything will be inside.

Both of them easily. Exactly. 

[00:13:27] **David Waumsley:** I 

[00:13:27] **Nathan Wrigley:** think it's, Facebook's the one that cuts it slightly short of it, and it's, oh, I thought it was the other way round. Okay. Yeah. Yeah. 

[00:13:32] **David Waumsley:** I think it's that way round and it just, yeah. Shakes a little bit off the bottom so you can protect against that. But the full HTML I've put here where you can fit each of these, put your own unique titles that go for each of these.

Now I have, even though I've made this dynamic, I've put that in our head. But it's actually didn't need to be there 'cause it's just a repeat of what's in our default titles and description. But we could, I guess we could add. Hello Facebook user before them. Facebook. Yeah. Don't we just and then I've put in just of interest because this is the same code that's in the dynamic sort of nun jug stuff that I've set up for our site, which, I dunno how much interest that will hold, but I'll go over to, here and look at it 'cause it's the same and.

What we've done on this. And same thing could be done on WordPress. In fact, I'm thinking of replicating this in WordPress. The whole idea of this is that because I, 

[00:14:29] **Nathan Wrigley:** nearly fell off my chair when I heard that in order. Yeah. 

[00:14:32] **David Waumsley:** I just thought, it'd 

[00:14:34] **Nathan Wrigley:** be probably a classic 

[00:14:35] **David Waumsley:** theme 'cause it's, Yes. but yeah, doing exactly the same thing. And also what I like about this, because, something I was mentioning to you earlier is that you can put all these notes in there and they're not going to be outputted into the source code. So if I go to source code, you'll see it's all tightly packed over here.

But actually if we're looking at here, I've got these gaps. So as long as in nun jugs we use this comin system and put a little dash. Buy it takes away the space that it occupies so we can put in as many notes as we like in our system instructions. And so I quite like it. It's the perfect 

[00:15:11] **Nathan Wrigley:** commenting system in that case.

Yeah, exactly. As much as you like. And it's never gonna appear in the 

[00:15:16] **David Waumsley:** Exactly. So all my instructions, idiot. Do this in your head tag is basically, that's one I'm setting up trying to set up quality control and mine 

[00:15:25] **Nathan Wrigley:** is usually the URL where I stole the bit of code that's about to follow it. I 

[00:15:30] **David Waumsley:** write 

[00:15:30] **Nathan Wrigley:** down the, 

[00:15:30] **David Waumsley:** the url.

Yeah, it's basically the same really. I'm just linking out to where the stolen code that I'm putting in there. but yeah, there's quite an interesting conditionals go on here. It may not be so much of interest, but what we have going on here is that, We have something to say in here if what we're using is the YouTube's own thumbnail.

So when we finish this recording, it'll go on YouTube, we'll have a thumbnail with it. And instead of having to provide for social media, for other social media, our own image which we have to store, I'm simply just taking. The one that's already there with Google and output in it. So that 

[00:16:13] **Nathan Wrigley:** little video ID inside the URL there becomes the video ID and thereby therefore, that makes that URL work.

Exactly. It's a web, image, wherever that destination is, and you just need to supply the video ID and the exactly drops in there like a merge tag 

[00:16:31] **David Waumsley:** basically. So the page that we're looking on, the one where we put our notes for today at the moment will, because of the conditionals that we've got here.

So if I put in the video ID something I've made myself in my front matter for this page and given it right the id, then it's going to output the content and that image over here. If I haven't done that, there is another option, which we haven't actually used. But if I've got something which I've called a featured image that could be showing, That would also be showing on our page as well. And if not, and what's presently showing, if someone can see the show notes before we put the video, it will be showing our generic, one that we use for about and homepage, 

[00:17:15] **Nathan Wrigley:** right? So the syntax there is, you've got the, video idea is the preferred way, but then you've got a fallback with your else if, or l if as it's described there, which is gonna be the featured image.

And again, you'll set that somewhere as. Possible fallback, and then if neither of those get us supplied, then it just falls back to some the OG image of the. Site. Yeah. Of the entire site. Got it. Okay. that's really, I like that. Yeah, 

[00:17:41] **David Waumsley:** it's, yeah, so it's quite nice to be able to set these things.

So of course you can do the same thing we were talking as well, about, let me just go back over a few things. There are a few preloads that we've put in over here. one of those actually a little bit complicated unless you saw as. Setting this up before, but we haven't done anything about setting up the site.

But, with Eleventy, if the layout is one of the posts here and it's got the video id, the thing that I've set up, then it will preload that image here. So it on our pages, it shows quickly. So when we go to those episodes page, that image is coming in from Google. But I want it to preload as quickly as possible.

[00:18:24] **Nathan Wrigley:** So that's an, if without a fallback. That one to just, if it's there, great. Yeah. Do something. It's there, preload it. If not, just move, 

[00:18:31] **David Waumsley:** chill out. Yeah, Exactly. And that's, the fonts are being preloaded, that's all. the SEO this, I mentioned this in the audio, that there's, it's, belt and braces really with this one.

So there is a robots, text file that's in there listing all of the. AI that we don't want to come. There was many. There was many. And there's this one which I've put in as well. I dunno how effective it is, but there we are. There's a canonical. I think probably I've covered that. Is there anything else that sort of No, that all seems eye on this, doesn't it?

[00:19:11] **Nathan Wrigley:** Yeah, no. If I'm following that through, that all seems about right. Yeah. I can't see anything that you scroll past that you didn't mention. So that was it. It was just a little, anyway, I 

[00:19:20] **David Waumsley:** just thought it was probably worth just showing our own site and now I've put it public. I'll try and build little sections.

People can follow along and see and take inspiration or find, as I say, if they can find things that we can make better, then great. 

[00:19:39] **Nathan Wrigley:** Yeah, please let us know. I, I think that's the shortest piece of content we've ever made of any kind. we're just over 21 minutes. What the heck? life is not normal.

Yeah. That's interesting. so just a quick reminder. Because I might as well get another minute out of this and get it up to 22 minutes. The, if you want to hear the podcast episode that goes with this, you can probably find it on YouTube as well. But here we go. No script show slash 23. Numbers two, three.

And then if you wanna find the, links, which David has just been demonstrating in this one. No script show slash learn slash 1 4 14. That's it. Is it is. Okay in that 

[00:20:21] **David Waumsley:** I think we might take a small break. Just, we might not be back, because there's a few things that are happening where there's me.

Coming over to your country, Nathan? 

[00:20:29] **Nathan Wrigley:** my country. That's right. Yeah. I very much feel the ownership of that country. It's a heavy burden. I do like to help the king out from time to time and, yeah, that'd be nice. And also you've got nice things happening in your life as well, which, maybe we'll get into at some point in a, an entirely different podcast series, or maybe not.

Thanks, David. Thank you. Take it easy. Bye 

[00:20:51] **David Waumsley:** bye. 



<details> 