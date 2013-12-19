---
title: "Blog >> Highly Unconventional Suggested First Aid"
layout: post
---

*A guest post by [rhodey](http://anhonesteffort.org).  Spring Break Of Code, Day Two*

"I am torn on how best to introduce myself out of context like this, the idea of rattling off facts from my resume is my 
first instinct, but that seems terribly conventional. With the goal of introducing myself and the entirety of my character, 
my second (highly unconventional) instinct is to link you to my online dating profile with the prayer that such an action 
would be taken in the desired context. Through my indecision I hope to explain who I am and why I would like to travel 
across the country to be involved with the Institute for Disruptive Studies. So here goes..."

XXXXX

Looking back, the message reads a bit formal and robotic, but it caught the attention of the Institute for Disruptive Studies 
nonetheless; specifically [Moxie's](https://twitter.com/moxie). I went on to disclose my OkCupid profile, here however I will 
not be so bold.

A couple months passed with sparse contact throughout, until the announcing of Whisper System's Spring Break of Code. I'd had 
more than enough of the Vermont Winter, incompetent college administrators, and silent, eventless nights, so in undeniable 
desperation I sent in my application. Applicants were asked to submit a proposal describing the work they'd be doing while 
in Maui, my idea was something along the lines of [GeoFencing](http://en.wikipedia.org/wiki/Geo-fence).

I arrived at our beach house in Maui around 4:00PM and was almost immediately forced into work on my GeoFencing application.

<img src="/blog/images/instantinjury.jpg" class="nice"/>
*Amateur surfing at low tide.*

With my right foot and left hand out of commission there wasn't much (anything) to do other than familiarize myself with the 
Android development environment and mend my wounds. With future scale in mind, I quickly discovered a brand new class of 
databases, Spatial Databases--databases optimized to store and query data related to objects in space, including points, 
lines and polygons (Wikipedia). Given Android's default database implementation of SQLite, and SpatiaLite's turn-key Android 
support, implementing [SpatiaLite](https://www.gaia-gis.it/fossil/libspatialite/index) was an easy choice.

Eventually I'd like to switch to Open Street Maps, but for now at least, in my lacking Android experience I'm developing on 
the [Google Maps Android V2 API](https://developers.google.com/maps/documentation/android/). The basic idea of my SBoC proposal 
was to define environments as "trusted" or "hostile" and have client phones react accordingly. For example, a phone inside a 
police station may wipe its call and message history, and then, using its microphone, begin espionage.

<img src="/blog/images/hammockfence.jpg" class="nice" />
*Relaxing inside the (presumably) trusted hammock polygon.*

It took me awhile to discover [Action Bar Sherlock](http://actionbarsherlock.com/), and awhile more to switch out my hacked 
together fragment layout. In the end though, there really isn't any better path to take. Now, with my 90% complete UI, what's 
left is to implement a couple POC actions and trigger them on the enter or exit of polygons. Oh, and wait for this super glue 
on my foot to scab off and hopefully give way to sealed skin.

[rhodey](http://anhonesteffort.org)

Lahaina, Maui, Hawaii, United States

25 March 2013
