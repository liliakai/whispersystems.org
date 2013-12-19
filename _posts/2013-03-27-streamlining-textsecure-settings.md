---
title: Blog >> Streamlining TextSecure Settings
layout: post
---

*A guest post by [lilia](https://twitter.com/liliakai). Spring Break Of Code, Day Three*

I am no stranger to Hawaii. Although I've never lived here myself, I've visited
the islands perhaps a dozen times. My grandmother and my father were born and
raised here. My mother attended college here. I have aunts, uncles, and cousins
who've lived on various islands, moved away, came back, moved away and back
again. I even have Native Hawaiian blood in my veins.

But this trip is different. This time it's not about family or heritage. This
time, I have a mission: to make secure text messaging and calling easier, more
accessible, and more prevalent.

XXXXX

The first time I used TextSecure was a bit of a blur. "Hey do you have
TextSecure?", my roommate, Mark, asked one First Friday in Oakland. "Huh? What?
Uh...no?" "Oh, well you should download it so we can exchange keys." Despite
some initial awkwardness concerning session initialization, we were soon
transmitting such covert secrets as "Neat, it's working" and "yay! :)".

At this point my knowledge of cryptography was (is) somewhat rudimentary. I
knew basically what encryption was and how to use RSA key pairs for ssh, but I
thought of encrypted SMS as more of a nerdy novelty than anything else. I
figured it might be a practical precaution for activists, whistle-blowers, and
rebel freedom fighters operating under and against oppressive governments, or
perhaps government agents operating in hostile foreign countries, but for 99% of
people I knew and 99% of their SMS conversations, surely this app would be, as
they say, like wearing a tin foil hat.

Now I see things differently. The truth is, even here in the so-called land of
the free, we are constantly under surveillance, both passive and active, by our
[government](http://www.aclu.org/spy-files), our
[corporations](https://www.eff.org/nsa/hepting), our
[law enforcement](http://www.npr.org/2013/02/22/172696814/as-police-drones-take-off-washington-state-pushes-back),
and [ourselves](http://www.huffingtonpost.com/steven-kurlander/domestic-surveillance-spy_b_2866085.html).

Once you accept these facts, it's easy to see that you should use encryption to
protect your important data and communications. But surely encrypting something
like "yay :)" is overkill, right? The catch here is that encryption is most
effective when everyone uses it all the time. Otherwise the encrypted stuff
sticks out like a sore thumb, announcing to all the world that this data is
special and secret. So even if you have nothing to hide, using encryption as
part of your regular routine will help protect you when you really need it, not
to mention helping to protect others who really need it.

The problem is, the barrier to entry has traditionally been fairly high. Access
to modern encryption used to be restricted to government agencies. This is now
changing as more and more people pick up on PGP for email, HTTPS for the web,
and now TextSecure and RedPhone for mobile, but we still have some work to do
to make encrypted texting and calling as simple and painless as possible.

So back to TextSecure. Hopefully by now you've installed it. If not, go ahead.
I'll wait. Back? Good. Now open the settings menu. You're probably thinking
something like "Oh. My. Glob. Becky. Look at that settings menu. It is so big."
You're right, but don't worry because we have a plan to change that. Some
settings will be removed, others will be reorganized. Whether you're a seasoned
secure texter or freshly installed, keep an eye out for these changes in
upcoming releases.

### On the chopping block

* MMS delivery reports  
Though this option may return in the future, it's not implemented yet, so it
shouldn't be sitting there teasing you in its disabled state.

* Import/Export my identity key  
Due to changes in Android's support of custom contact metadata, these functions
have been rendered mostly useless. We're working on an alternative cloud-based
identity import/export feature, but in the meantime we'll be removing these
options so you can focus on the settings and features that matter.

* Include whitespace tag  
Inherited from the OTR protocol, whitespace tagging is how TextSecure signals
the recipients of your messages that you are a TextSecure user who is willing
and able to have a secure conversation. The motivation for making this signal
optional was the thought that some TextSecure users might not wish to self
identify as such. However, those users are likely in the minority, and once
everyone is using secure SMS, there won't be any reason to hide that fact.

* Sign key exchange  
The use case for this setting had to do with someone using a single identity
key on multiple devices. Again, this is a rare edge case. If you happen to fall
into this category, and don't want to associate your secure sessions on a
particular device with your primary identity key, it is recommended that you
use a different identity key on such devices. As a result of removing this
option, we also remove the need to ever verify a session key rather than an
identity key, and thus greatly simplify the process for protecting against
man-in-the-middle attacks.

### Relocating

A few of these "settings" are more like features or functions. Others are only
needed in rare instances or by advanced users. We'll be doing some reorganizing
to reflect that fact. So if you see these things disappear, don't worry.
They've just moved to a new home.

* Change my password
* Complete key exchanges
* View my identity key
* Manage identity keys
* Enable Fallback MMSC
* MMSC URL
* MMS Proxy Host
* MMS Proxy Port

With these changes, we can essentially cut the settings menu in half, making
your TextSecure configuration experience cleaner, simpler, and more
streamlined.

[lilia](https://twitter.com/liliakai)

Lahaina, Maui, Hawaii, United States

26 March 2013
