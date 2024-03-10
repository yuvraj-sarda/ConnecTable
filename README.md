# Project Overview
This is a prototype built for ConnecTable – a simple webapp designed to help people find other people to eat with at eateries. You can see a demo on [YouTube](https://youtu.be/VaOkVgFeOio) and try the live version at www.connectable.vercel.app.

## Concept overview
As cities become increasingly technologically driven, we are observing a rise in the levels of loneliness experienced by residents. In particular, in many developed countries (which often tend to be very individualistic in nature), we often find ourselves eating alone. This is generally not because we don't like meeting new people. Rather, it is because walking up to a stranger to strike a conversation (and directly join them at a meal) goes against social norms. We find ourselves bombarded with questions like "Is it too intrusive?" or "What if this conversation turns out to be a complete disaster?". It is often simpler and less risky to just keep ourselves occupied with our own devices. Said differently, social norms act as a barrier towards meeting new people and maintaining mental wellbeing. 

The concept then is to target popular eateries where people are often to be found eating alone (eg: cafes, food courts, malls, shopping centres, college dining halls, etc). In these eateries, there would be QR codes placed on multiple locations (on a board in the billing queue, in the receipt, on the tables, perhaps suggested by the waiter etc). People would scan these QR codes, and thus arrive at our website, which has routes designated for each eatery. They would answer 3 quick questions, and based on that, if we have someone who seems like a good match, we provide them information like firstName, photo, and general location in the eatery, using which the two people can connect. If we don't have a match yet, we would tell them that we are pairing them and that their screen would update when a new match fills out the form. Eateries should be happy to faciliate all this because it actually helps them: if i met someone at eatery X and had a wonderful time (perhaps even became a long-term friend), then eatery X just got a great spot in my heart and will be remembered by me for a long time – this is a way for these eateries to become more meaningful and memorable for their customers.

## Source of inspiration
I was inspired to pursue this problem because of my own experiences in my first-year at college. Having always lived in tight-knit communities, I was absolutely not used to eating alone. Yet, in this land of strangers, I often found myself (and others) leaning towards that option. However, by choosing to strike up the awkward conversation by saying "Hey, I know we don't really know each other, but I really don't like eating alone. Can I join you?", I gained so many interesting perspectives and heard from so many people whom I would've never encountered otherwise. By solving this problem, I hoped to make it just a little less of a struggle.

# Tech Stack
This project was built using
* [Next.js](https://nextjs.org/) bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It uses the app router.
* Typescript (for the most part; i've been clumsy with it though)
* Tailwind CSS. 
* MongoDB Atlas
* [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Getting Started
First, create a .env file in the root directory and add these these two variables:
* MONGODB_URI=mongodb+srv://<username>:<password>@<project_details>.mongodb.net/Users_DB
* NEXT_PUBLIC_API_URL=http://localhost:3000


Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can make changes as you like. Thereafter, it is really conveniently deployed on Vercel.

## Acknowledgement
Although I had been thinking about this idea for several months, I only really ended up executing it because I was doing a hackathon (Cornell University's Big Red Makeathon) and we only had 12 hours to build something up. Luckily, the judges liked our idea and its implementation, and we won the Best Novice Team Award for the outcome.

I must thus thank the organisers of Big Red Makeathon and my fellow teammates (Daniela Caisaguano, Jean-Luc Shimizu and Julie Nam). Without them, I would not probably not have made this and problably not had as much fun doing it.

## Contributions
There is great scope for further work in this project and I would love to see someone do that work! The tech stack I used in this project was somewhat to me and I was prioritizing speed over accuracy. So, much of this code is far from ideal. For example, the matching algorithm needs to be properly implemented, typescript can be used more thoroughly, some pages can probably be split, some can be reorganised etc... Furthermore, there's a lot of work that one could do outside of the codebase too (namely, user research and actually trying to implement something like this in some places).

Please feel free to fork the repository, make as many changes as you like, and even profit off of it (if you can figure out how to). All I ask is that if anything fruitful comes out of your endeavours, please let me know. I'm excited about this idea and would love to know more about how it fares in the real world!