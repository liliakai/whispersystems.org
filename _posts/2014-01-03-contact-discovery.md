---
title: "Blog >> The Difficulty Of Private Contact Discovery"
layout: post
---

Building a social network is not easy.  Social networks have value proportional to their size, 
so participants aren't motivated to join new social networks which aren't
already large.  It's a paradox where if people haven't already joined, people aren't motivated to join.

The trouble is that while building a social network is hard, most interesting software today is
acutely "social."  Even privacy enhancing technology, which seems anathema to the aesthetic of 
social networking, is tremendously social.  For people to effectively use private communication software
like TextSecure, they need to be able to know how to contact their friends using TextSecure.

XXXXX

Access to an existing social graph makes building social apps much easier.  Traditionally, social apps turn to 
services like Facebook or Twitter for their social graph.  By using "Facebook connect" (sign in with Facebook)
or "Twitter OAuth" (sign in with Twitter), it's possible to write applications on top of an existing social
graph (owned by Facebook or Twitter) instead of having to create a new one.

## The Mobile Graph

The migration towards mobile devices is in some ways a threat to the traditional monopolies of the social graph.
Mobile devices feature a social graph that isn't controlled by any single entity, and which anyone can
access: the device's "contacts."

If a service uses an identifier already listed in a typical contact card (phone number or email), it's simple
to quickly display which contacts of a user are also registered with the service and immediately
make social features available to that user.  This means friends don't have to "discover" each-other on a service
if they already have each-other as contacts.

The problem is that the simplest way to calculate the intersection of registered users and device contacts
is to upload all the contacts in the address book to the service, index them, reverse index them, send the
client the intersection, and subsequently notify the client when any of those contacts later register.

This is not what you'd call a "privacy preserving" process.  Many people are uncomfortable with their entire
address book being sent to a server somewhere.  Maybe they're worried the server will spam their friends, maybe they 
have some sensitive contacts they don't want to share, or maybe it just doesn't feel right.

## Solutions That Don't Work

Ideally we could come up with a privacy preserving mechanism for achieving the same thing.  The problem becomes:
*How do we determine which contacts are registered with a service, without revealing the contacts to the service?*

### Hash It!

The first instinct is often just to hash the contact information before sending it to the server.  If the server has
the SHA256 hash of every registered user, it can just check to see if those match any of the SHA256 hashes of contacts
transmitted by a client.

Unfortunately, this doesn't work because the "preimage space" (the set of all possible hash inputs) is small enough to
easily calculate a map of all possible hash inputs to hash outputs.  There are only roughly 10^10 phone numbers, and
while the set of all possible email addresses is less finite, it's still not terribly great.  Inverting these hashes
is basically a straightforward dictionary attack.  It's not possible to "salt" the hashes, either (they always have
to match), which makes building rainbow tables possible.

### Bloom Filters and Encrypted Bloom Filters

There's an entire field of study dedicated to problems like this one, known as "private information retrieval" (PIR).
The simplest form of PIR is for the server to send the client the entire list of registered users, which the client
can then query locally.  Basically, if the client has its own copy of the entire database, it won't leak its database
queries to the server.

One can make this slightly more network efficient by transmitting the list of registered users in a
[bloom filter](https://en.wikipedia.org/wiki/Bloom_filter) tuned for a low false positive rate. 

To avoid leaking the list of all registered users, it's even possible to build a "symmetric PIR" system using
"encrypted bloom filters" by doing the following:

1. The server generates an RSA key pair which is kept private.
1. Rather than putting every user into a bloom filter, the server puts the RSA signature of each user
   into the bloom filter instead.
1. The client requests the bloom filter, which contains an RSA signature of each registered user.
1. When the client wishes to query the local bloom filter, it constructs a "blinded" query
   as per David Chaum's [blind signature scheme](https://en.wikipedia.org/wiki/Blind_signature).
1. The client transmits the blinded query to the server.
1. The server signs the blinded query and transmits it back to the client.
1. The client [unblinds the query](https://en.wikipedia.org/wiki/Blind_signature) to reveal 
   the server's RSA signature of the contact it wishes to query.
1. The client then checks its local bloom filter for that value.

It's also possible to compress "updates" to the bloom filter.  The server just needs to calculate the XOR of
the version the client has and the updated version, then run that through 
[LZMA](https://en.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Markov_chain_algorithm) (the input will be mostly zeros), and
transmit the compressed diff to the client.

Unfortunately, for a reasonably large user base, this strategy doesn't work because the bloom filters themselves 
are too large to transmit to mobile clients.  For 10 million TextSecure users, a bloom filter like this would be ~40MB,
requested from the server 116 times a second if every client refreshes it once a day.

### Sharded Bloom Filters

Instead of putting all registered users into a single bloom filter, one could imagine sharding the users into
buckets, each of which contains a bloom filter for that shard of users.

This creates a privacy vs. network overhead trade-off.  At one end of the spectrum, a single big bucket with all registered
users in it provides perfect privacy but high network overhead: the server learns nothing when it's requested, but has to
transmit a lot.  At the other end of the spectrum, many buckets, each of which contains a bloom filter with only a *single*
user provides *zero* privacy but low network overhead: the server learns exactly what the full query is whenever a 
bucket is requested, but only has to transmit very little.

The hope would be that somewhere in the middle there might be an acceptable trade-off.  If there were only two buckets,
for instance, the client would only have to leak one bit of information to the server, but would be able to retrieve
a somewhat smaller bloom filter.

In the end, it's difficult to find an acceptable trade-off here.  The average Android user has approximately
5000 contacts synced to their device.  Ignoring the slight collision rate that kicks in with the birthday paradox,
in the worst case this means the client will end up requesting 5000 different buckets.  In order to make the total
download size add up to something like a reasonable 2MB, this means each bucket can only represent 100 possible
identifiers.

This basically provides very little privacy.  In the case of phone numbers as an identifier, of the 100 possible 
numbers a client could be inquiring about in its request for a bucket, many of the 99 "other" numbers might not be active phone
numbers, or might represent phone numbers located in regions where contacts of that user would be unlikely to be located.

In the end, this strategy seems to provide very little at the cost of fairly substantial complexity.

### That Academic Private Set Intersection Stuff

There are cryptographic protocols for performing privacy-preserving set intersections, but they generally involve transmitting
something which represents the full set of both parties, which is a non-starter when one of the sets contains at least
10 million records.

The academic field of PIR is also quite a disappointment.  It's possible to improve on the network overhead
of transmitting the entire data set, but generally at great computational cost.  Intuitively, for the server not
to learn anything about the query, it will need to at least touch every possible record in its data set when calculating
a response.  With a large number of users, this is potentially cost-prohibitive even if the server only needs to perform
a simple operation (like XOR) for each registered user.  Most PIR protocols are substantially worse, and require things
like performing an RSA operation over *each record* of all registered users *for each client query*.  That would translate
into a client requesting that the server perform 10 million RSA operations, 5000 times!

This includes the small collection of protocols labeled "practical PIR," which unfortunately don't seem to be very practical at all.
Most of them describe protocols that would take *minutes* of CPU-bound work for each client that wants to determine which 
of its contacts are registered users.

## An Unsolved Problem

As far as we can determine, practical privacy preserving contact discovery remains an unsolved problem.  

For RedPhone, our user base is still manageable enough (for now) to use the bloom filter technique.
For TextSecure, however, we've grown beyond the size where that remains practical, so the only thing we
can do is write the server such that it doesn't store the transmitted contact information, inform the user,
and give them the choice of opting out.

This would be a great problem to really solve well.  If anyone develops any insight into a practical privacy preserving
mechanism for achieving this type of contact discovery, or notices something we've missed, please let us know
here, on [twitter](https://twitter.com/whispersystems), or
[on our development mailing list](https://lists.riseup.net/www/subscribe/whispersystems).

-- [Moxie Marlinspike](https://twitter.com/moxie), 03 January 2014
