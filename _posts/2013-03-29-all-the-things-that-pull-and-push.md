---
title: Blog >> All The Things That Pull And Push
layout: post
---

*A guest post by [Tyler](https://twitter.com/abolishme). Spring Break Of Code, Day Five*


<img src="/blog/images/feet.png" class="nice" />

I know very well that each and every crisis of modernity is concentrating, concatenating, and seating more deeply into 
everyday life. I know the struggles of the world's unseen and unheard are being subsumed -- appropriated -- under and 
into the framework of a liberal democracy, leaving those at the periphery still under the yoke of capital. The Right further 
entrenches itself into political discourse, both in the [United States](http://www.alecexposed.org/), and (more extremely) 
abroad ([Finland](http://yle.fi/uutiset/book_racism_becoming_more_acceptable_in_finland/6360055), 
[Greece](http://www.economist.com/blogs/charlemagne/2013/03/greek-politics), ... et al.). The Left is no less problematic: 
reiterating the petty values of social democracy, negotiating the terms of our entrapment within capitalism. Every season, 
new horrors fall from the clouds and rise from the seas as industrial civilization demonstrates that terraforming can also 
work in reverse. The world's genetic library -- the most prime commons, if ever one existed -- is rapidly contracting via 
extinction, privatization, and engineering. The colossal failure of ideology in the twentieth century has left the radicals 
of today no other choice but to see themselves as "post-ideological". This is a deeply concerning conundrum, as ideology 
survives in post-ideology, different only to the extent that it is less apparent. Yes, it seems like we are living in end 
times -- an entire era of Apocalypse -- made only more insidious by our optimism in its shadow.

XXXXX

Although I know *epistemologically* that these are end times, *tacitly* it's harder to grasp. I'm in Hawaii. The sun shines 
as the Pacific rolls in, each respectively constant and warm. The breeze is gentle, clicking through the palm fronds. The 
roosters gloat in the blue light of the early morning hours. Entire pods of whales breach in our backyard, cavalier and 
ambivalent. I'm working with some of the most intelligent people I've ever met. How could any of this ever go away? It's 
all very unspeakable and horrifying.

In times like these, it's hard to be serious. The schizophrenic dance between the panic-inducing terror of the consequences 
of modern life, and the horrific pleasantness of modern life itself can really erode one's psyche. As difficult as seriousness 
is, it can be even harder to be *absurd*. Here we are, trying to make "a new normal"; trying to make phone calls and SMS's 
more secure, not as some self-interested career decision, but as an open-source project: a sort of volunteerism to force 
others to adopt these standards for their communication apps. Our group is part entrepreneur and part anarchist, our labor 
is part social work, part social war ... when I think about it, it's completely absurd. 

But what is a great work of satire without elements of both grave seriousness and wanton absurdity? 

Our focal depth is acute. We're craftspeople -- we want to build something with utility and panache. The wide-angle of our 
work, as with most open-source projects, cannot be engineered from the terrace of a beach house. So it is with some synthesis 
of seriousness *and* absurdity that a great work of satire is made. 

Personally, I've tried to live according to that principle -- right now, I'm a high-school dropout sitting amongst current 
and former employees of Twitter, an MIT-educated theoretical physicist, globe-trotting journalists, renown mathematicians, 
and emerging prodigy developers. I'm always deprecating my own qualifications (damn you, scandi-minnesotan morality), but the 
truth is I've barely survived a very real sequence of mishaps in the world of anarchist-influenced creative- and 
[knowledge-based work](http://en.wikipedia.org/wiki/Knowledge_worker) that have spanned a decade of more than a dozen 
David v. Goliath scale forays into the production and maintenance of media, technology, design, and lifestyle products 
and projects. 

As my skepticism of activism -- the notion that our actions can produce consequent shifts in some total structure of daily 
life -- grows wildly out of control, I'm struck by how much consolation I derive from the micro-activisms of productivity 
tricks. Using the Getting Things Done methodology to approach not-doing-anything is the perfect irony to complete my satire, 
so here goes:

> For Jacques Lacan, an idiot is someone who believes in their immediate identity with their self; "like a king who believes he is a king."

## Two tips for the idiots.

### Installing Ruby on OS X 10.8, Mountain Lion

The second after I arrived, I opened up this shiny new MacBook Air, and realized that I had forgotten to install a current 
version of Ruby. Amidst the nerds, many of whom have spent the vacation essentially working on black screens of streaming 
zeros and ones, I immediately felt what I believe is referred to as 
[Symbolic Castration Anxiety](http://en.wikipedia.org/wiki/Castration_complex). Without Ruby, I was unable to test my 
[responsive web design](http://mediaqueri.es/) rewrites of the whispersystems.org CSS and HTML files buried in the 
[JEKYLL](http://jekyllrb.com/) generator. I was left with no choice but to "figure it out, *idiot*." Turns out, it's a 
little more complicated on OS X 10.8 than on previous versions of Apple's operating system: 

1. [Install Homebrew](http://mxcl.github.com/homebrew/) in Terminal: `ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"`.
2. Unlike in previous versions of OS X, Ruby Version Manager (RVM) requires xCode's command line tools, so you'll need to install xCode.
3. In xCode, navigate to `preferences >  downloads > components`, install "Command Line Tools".
4. [Install RVM](https://rvm.io/rvm/install/) in Terminal: `user$ \curl -L https://get.rvm.io | bash -s stable`. Check install link for clarifying instructions.
5. Install Ruby via RVM in Terminal: `rvm install 2.0.0`.

### Wireless Mirroring w/ Photoshop's Remote Connections & xScope

I've been using Iconfactory's suite of design tools, [xScope](http://xscopeapp.com/), for years now. If you do design work 
in OS X, give it a try. When I first got it, it totally changed how I designed, and what I was capable of doing -- setting 
screen-wide guides *a la* photoshop, copying the color of a single pixel via loupe, a device-specific overlay window framing 
your design, an x-y pixel ruler for measuring the distance between objects of a different color, etc. In a recent update, 
they added support for many different forms of mirroring on-screen work to a iOS device. This feature has proved indispensable 
in that it enables real-time retina testing on my phone, so I can get immediate feedback regarding changes to the pixel-perfect 
photoshop mockup of TextSecure's interface. Here's how to do it:

1. Spring for xScope, you'll thank me later.
2. Launch the app, and navigate to `Preferences > Mirror > "Allow iOS Devices on Local Network to Connect with deny/allow prompt"`.
3. Launch Photoshop. Navigate to `Edit > Remote Connections ...`, choose a password and enable a remote connection.
5. Enter this password in the mirror tab of xScope's preferences.
6. Install the free [xScope mirror app](https://itunes.apple.com/app/xscope-mirror/id488819289) on your iOS device, and launch it. 
7. On the iOS device with the xScope mirror, just select your computer and allow the connection when prompted in OS X. From there you can choose to view the screen (to compare windows), the clipboard, the area around your cursor, or the photoshop document itself. This is especially convenient because it is otherwise impossible to preview a pixel-for-pixel mockup at 100% on most non-retina laptops, because the retina display on the iPhone has more vertical pixels than most displays.

<img src="/blog/images/waves.png" class="nice" />

*Tyler Reinhard* also writes [http://abolish.me](http://abolish.me), a clearing house for thoughts on the design of systems and things, and 
tweets [@abolishme](https://twitter.com/abolishme).