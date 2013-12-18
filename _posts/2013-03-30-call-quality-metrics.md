---
title: Blog >> Call Quality Metrics
layout: post
---

*Post by [Stuart Anderson](https://twitter.com/emblem__). Spring Break Of Code, Day Six*

Because secure systems aren't valuable if they're not used, WhisperSystems has always focused on delivering strong 
cryptography alongside a great user experience.  That's the reason [call quality](http://www.whispersystems.org/blog/client-side-audio-quality) has always been a priority in RedPhone's development.

We know that, for many users, RedPhone has consistently delivered a call quality experience comparable to commercial 
mobile VoIP solutions.  But we also hear from users who report problems like dropped calls, distracting levels of echo 
and latency, or inaudibly low in-call volume.  While we investigate these reports and attempt to resolve them, we don't 
have a clear view of what situations cause RedPhone's call quality to degrade, or how to prioritize our development efforts.

XXXXX

This week we built a call quality metrics reporting infrastructure for RedPhone.  For the RedPhone Android client this is 
an opt-in feature that allows callers to elect to have anonymized data about RedPhone's performance during each call delivered 
to WhisperSystems for analysis.  A second opt-in feature presents a quality feedback dialog after each call.  This dialog 
gathers feedback about overall call quality and specific problems that may have occurred during the call.

When you upgrade to a version of RedPhone that supports quality metrics you'll be asked at the end of your next call 
whether RedPhone should send anonymized data about each call or ask you to provide call quality ratings after each 
of your calls.  If you ever change your mind, these settings are always available in the main RedPhone preferences activity.

Once enabled, the call metrics system collects the information we need to understand call performance.  The collected 
data includes:

 * Device description (model, manufacturer, carrier, network type, Android version, persistent random UUID)
 * Microphone and codec performance
 * Packet arrival interval histogram 
 * Out of order arrival counts
 * Audio gap fill counts
 * CPU load, memory usage

The call quality user feedback dialog displays an overall quality rating and a small number of specific quality issues 
that will change periodically.

<img src="/blog/images/call-quality-metrics.png" class="nice" />

We wanted to ensure that the anonymized call quality data you send us is never visible to a third party.  We encrypt the 
JSON-encoded data as it streams to the local disk during the call.  That encrypted data is uploaded to a 
[RedPhone Data Collection Server](https://github.com/whispersystems/RedPhone-DCS) running on Heroku, and using AmazonS3 
for persistence.  Because only WhisperSystems has the private key used to encrypt the stream, only we can decrypt the 
metrics data after collecting it from S3.

We look forward to sharing the results of our analysis of the data produced from your feedback, and delivering further 
improvements in RedPhone's call quality in the coming weeks.

[Stuart O. Anderson](https://twitter.com/emblem__)

Lahaina, Maui, Hawaii, United States
