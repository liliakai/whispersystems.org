---
title: "Blog >> TextSecure, Now With 10 Million More Users"
layout: post
---

At Open WhisperSystems, we're working to both advance the state of the art for secure communication
and also reduce the friction required for ordinary people to make use of it.  We want everyone to have
access to advanced secure communication methods that are as easy and reliable to use as making a normal phone call or sending 
a normal text message.

With these goals in mind, we've been working with [CyanogenMod](http://www.cyanogenmod.org/) over the past few months.
CyanogenMod is an open source aftermarket Android firmware distribution with [ten million users](http://stats.cyanogenmod.com/) 
and ~20k installs a day. Their rapid growth is beginning to rival Microsoft for the third largest smartphone OS distribution.

As of today, the TextSecure protocol will begin shipping as part of the CyanogenMod OS-level SMS provider, in an effort to provide
completely transparent end-to-end text message encryption between all of their users.

XXXXX

## Integration

We've modified the Cyanogen SMS/MMS provider to speak the 
[TextSecure](https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms) protocol.
If an outgoing SMS message is addressed to another CyanogenMod or TextSecure user, it will be transparently encrypted and sent
over the data channel as a push message to the receiving device.  That device will then decrypt the message and deliver
it to the system as a normal incoming SMS.

The result is a system where a CyanogenMod user can choose to use any SMS app they'd like, and their communication
with other CyanogenMod or TextSecure users will be transparently encrypted end-to-end over the data channel without
requiring them to modify their work flow at all.

Here's how an encrypted conversation looks:

<img src="/blog/images/cyanogenmod-screenshot.png"/>

There's no visible difference. Nothing at all changes for the user, and the entire process is completely transparent.
The user doesn't have to initiate a key exchange and wait for a round trip to complete, or know that the recipient is
"online."  They simply send a message, and it's sent immediately.  Everything works just like the normal asynchronous
SMS experience, even if the recipient doesn't have their device on.

The demo above uses the stock Messaging app, but users could choose to install any other SMS app instead, with the same effect.
We will also be adding some minimal visual feedback to the stock CyanogenMod Messaging app to indicate when the user has an 
expectation of privacy and when they don't, but the base experience won't change at all.

Technical users have the option to verify identity keys, and all users are notified if an identity key changes.

## Technical Details

This project incorporates all of the TextSecure protocol features.  The encryption layer is the 
[TextSecure V2](https://github.com/WhisperSystems/TextSecure/wiki/ProtocolV2) protocol, which employs the 
[Axolotl forward secrecy ratchet](https://www.whispersystems.org/blog/advanced-ratcheting/) for forward secrecy and the 
[3DHE agreement](https://whispersystems.org/blog/simplifying-otr-deniability) for deniable messages.

The TextSecure V2 cryptographic primitives are Curve25519, AES-256, and HmacSHA256.  

The transport protocol is the [TextSecure Push API](https://github.com/WhisperSystems/TextSecure-Server/wiki/API-Protocol),
which makes use of a [prekey system](https://whispersystems.org/blog/asynchronous-security) to obtain forward secrecy
in an asynchronous messaging environment.

The client logic is contained in a CyanogenMod system app called 
[WhisperPush](https://github.com/CyanogenMod/android_external_whispersystems_WhisperPush), which the system hands outgoing SMS
messages to for optional delivery.  The Cyanogen team runs their own TextSecure server for WhisperPush clients, 
which federates with the Open WhisperSystems [TextSecure server](https://github.com/WhisperSystems/TextSecure-Server), so
that both clients can exchange messages with each-other seamlessly.  All of the code involved throughout the entire stack is 
fully Open Source.

## The Future

This effort marks the beginning of our transition to the data channel as a TextSecure transport, which should hopefully open up
a host of ongoing opportunities.  With the [TextSecure iOS client](https://github.com/whispersystems/TextSecure-iOS) nearing 
completion and a TextSecure browser extension about to get underway, soon we will have a truly cross-platform
seamless asynchronous messaging system built on open protocols and open source software, with an already massive user base.

Cyanogen deserves enormous praise for their substantial commitment of time and resources to this development effort. Their
genuine resolve to protect their users from large-scale dragnet surveillance is truly remarkable in a world where most companies
are instead angling to collect as much information about their users as possible.  They've set the bar high for themselves,
but I think we can expect more great things from them in the future.

Want to help support Open WhisperSystems? The Freedom Of The Press Foundation is 
[accepting tax-deductable donations](https://pressfreedomfoundation.org/bundle/encryption-tools-journalists) for us and other 
important projects in this space.

-- [Moxie Marlinspike](https://twitter.com/moxie), 09 December 2013
