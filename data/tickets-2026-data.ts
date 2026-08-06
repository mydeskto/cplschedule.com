/** Exact copy from: SEO Title_ NPL Tickets 2026_ How to Buy Nepal Premier League Season 3 Tickets Online.pdf */

export const ticketsSeo = {
  title: "NPL Tickets 2026: How to Buy Nepal Premier League Season 3 Tickets Online",
  description:
    "Buy NPL Tickets 2026 online for the Nepal Premier League Season 3. Check ticket prices, booking dates, the official ticket website, match venues, and the booking guide.",
  canonical: "https://nplschedule.com/tickets",
} as const

export const ticketsIntro = [
  'Nepal Premier League Season 3 throws open its gates at Tribhuvan University (TU) International Cricket Ground, Kirtipur, on November 17, 2026—and if you\'ve searched "NPL ticket" hoping for a straight answer on where to buy, what it costs, and how the booking flow actually works, this guide covers all three, plus the details most ticket pages skip: what CAN has and hasn\'t confirmed yet for this season, how pricing has moved across NPL\'s first two editions, and what to expect at the gate.',
  "NPL Season 3 tickets are sold exclusively through the Khalti app (or khalti.com), CAN's official ticketing partner. Book via Entertainment → Events, choose your match and general or VIP stand, and pay in-app for an instant QR-code e-ticket. Limited walk-up tickets are also available at TU Ground, Kirtipur, on match day, subject to availability.",
]

export const quickFactsRows: { detail: string; information: string }[] = [
  { detail: "Tournament", information: "Nepal Premier League (NPL) 2026 — Season 3" },
  { detail: "Dates", information: "November 17 – December 13, 2026" },
  {
    detail: "Teams",
    information:
      "8 (Biratnagar Kings, Chitwan Rhinos, Janakpur Bolts, Kathmandu Gorkhas, Karnali Yaks, Lumbini Lions, Pokhara Avengers, Sudurpaschim Royals)",
  },
  { detail: "Matches", information: "32 (league stage, qualifiers, eliminator, final)" },
  {
    detail: "Venue",
    information: "Tribhuvan University International Cricket Ground, Kirtipur",
  },
  { detail: "Organizer", information: "Cricket Association of Nepal (CAN)" },
  { detail: "Official ticketing partner", information: "Khalti app" },
  { detail: "Broadcast", information: "Star Sports Network (South Asia)" },
  { detail: "Streaming", information: "FanCode: select matches on DishHome" },
]

export const expectedPriceRows: {
  matchType: string
  general: string
  vip: string
}[] = [
  { matchType: "League stage", general: "Rs 500 – 600", vip: "Rs 1,000 – 1,200" },
  { matchType: "Opening day / weekend", general: "Rs 500 – 700", vip: "Rs 1,500 – 1,800" },
  { matchType: "Playoffs", general: "Rs 800 – 1,000", vip: "Rs 1,800 – 2,200" },
  { matchType: "Final", general: "Rs 1,000 – 1,200", vip: "Rs 2,000 – 2,500" },
  { matchType: "Season pass (all-access)", general: "Rs 15,000 – 18,000", vip: "—" },
]

export const expectedPriceNote =
  "This is a projection, not a CAN announcement — built by applying the same rate of increase seen between Season 1 (2024) and Season 2 (2025) to Season 2's prices. In both prior years, CAN released official pricing only 2–3 days before the tournament opener, so a genuinely confirmed Season 3 number won't exist until mid-November 2026. Treat this table as a budgeting guide, and check the live price in the Khalti app at checkout for the actual figure once sales open."

export const whereToBuySection = {
  title: "Where to Buy NPL Tickets",
  intro:
    "Khalti, Nepal's digital wallet platform, has been NPL's exclusive ticketing partner since the league's first season in 2024 and has continued in that role for Season 2 and now Season 3. There is no other authorized online channel—CAN has not sold NPL tickets through a separate box-office website in any prior season, though limited walk-up counters typically open at the ground itself on match day for fans without the app.",
  thatMeans: "That means:",
  bullets: [
    "Khalti app or khalti.com—the only verified online booking route.",
    "Stadium gate counters—available on match days, subject to availability; expect queues and no guarantee of stock for high-demand fixtures (opening night, derbies, playoffs, final).",
    'Third-party resale or "agent" links — not endorsed by CAN or Khalti. Tickets bought this way carry no refund protection and have been flagged as a scam risk in past seasons; stick to the official app.',
  ],
}

export const howToBookSection = {
  title: "How to Book NPL Tickets on Khalti: Step-by-Step",
  steps: [
    "Install the app. Download Khalti from the Google Play Store or Apple App Store, or use khalti.com on desktop.",
    "Log in or register. You'll need a Nepali mobile number to create an account if you don't already have one.",
    'Go to Entertainment → Events. Search for "Siddhartha Bank Nepal Premier League powered by Khalti" (sponsor naming may shift season to season, so search "Nepal Premier League" if the exact title doesn\'t surface).',
    "Pick your match. Select the fixture, date, and stand—general or VIP (some seasons have added intermediate tiers; check what's shown for your chosen match).",
    "Choose quantity. Khalti typically caps how many tickets one account can buy per match to curb bulk resale.",
    "Pay. Use Khalti wallet balance, a linked bank transfer, or another supported payment method.",
    "Get your e-ticket. A QR code lands in your Khalti app instantly — this is what gets scanned at the gate. Screenshot it as backup in case of poor stadium connectivity.",
  ],
  closing:
    "If a match shows as unavailable for booking, it usually means CAN hasn't opened sales for that fixture yet—league organizers have historically released tickets in batches rather than for the full season at once.",
}

export const confirmedPricingSection = {
  title: "NPL Ticket Prices: What's Confirmed and What Isn't",
  paragraphs: [
    "This is the part most other NPL ticket pages get wrong for the current season: several republish Season 1 (2024) pricing—Rs 300–700 general/VIP, with a Rs 4,480/8,240 season pass split—and present it as if it's live Season 3 pricing, without a dated 2026 source. As of this writing, CAN has not issued a public Season 3 price notice the way it did before Season 1 (announced via press statement days before the 2024 opener) and Season 2 (announced by CAN in November 2025). If you're booking now, treat the numbers in the table below as reference points from prior seasons, not confirmed 2026 rates, and check the live price shown in the Khalti app at checkout before assuming a figure from a search result.",
    "What is safe to plan around:",
  ],
  bullets: [
    "Pricing is tiered by match importance (league stage is cheapest, playoffs and final most expensive).",
    "Every season so far has offered a general and a VIP stand at every venue tier.",
    "A discounted season pass has been offered in both prior seasons.",
  ],
}

export const priceHistoryRows: {
  matchType: string
  season1: string
  season2: string
}[] = [
  {
    matchType: "Opening match",
    season1: "Rs 300 / Rs 700",
    season2: "Rs 500 / Rs 1,500",
  },
  {
    matchType: "League stage",
    season1: "Rs 300 / Rs 500",
    season2: "Rs 500 / Rs 1,000",
  },
  {
    matchType: "Playoffs",
    season1: "Rs 500 / Rs 700",
    season2: "Rs 1,000 / Rs 2,000",
  },
  {
    matchType: "Final",
    season1: "Rs 500 / Rs 1,000",
    season2: "Rs 1,000 / Rs 2,000",
  },
  {
    matchType: "Season pass",
    season1: "Rs 4,480 (Gen) / Rs 8,240 (VIP)",
    season2: "Rs 15,000 (all-access)",
  },
]

export const priceHistoryNote =
  "The jump between seasons is significant — roughly 60–100% higher across most tiers in Season 2 — which is the single most useful data point for setting expectations this year. If pricing scales similarly again, budget above Season 2 levels rather than the older Season 1 figures still circulating online."

export const seasonPassSection = {
  title: "Season Passes Explained",
  paragraphs: [
    "A season pass covers all 32 matches at one venue and has been priced at a discount to buying every match individually in both prior seasons (roughly 20% off in Season 1's structure). Season 1 pass holders also received an accreditation card and official merchandise as part of the package — a detail CAN publicized at launch but that doesn't always carry over in short recap articles. Whether merchandise is bundled again for Season 3 hasn't been confirmed; check the pass listing in-app when it goes live.",
    "Season passes are worth it if you're planning to attend more than roughly 8–10 matches — below that, single-match tickets usually work out cheaper given the discount margins seen so far.",
  ],
}

export const teamsScheduleSection = {
  title: "NPL Season 3 Teams and Schedule Snapshot",
  intro:
    "The Season 3 player auction was held in Kathmandu on July 6, 2026, following retentions finalized in June. All eight franchises return unchanged from Season 2:",
  teams: [
    "Biratnagar Kings",
    "Chitwan Rhinos",
    "Janakpur Bolts",
    "Kathmandu Gorkhas",
    "Karnali Yaks",
    "Lumbini Lions",
    "Pokhara Avengers",
    "Sudurpaschim Royals",
  ],
  paragraphs: [
    "Squad-building was still in progress after the mini-auction closed — not every franchise had filled all 16 roster slots, and further replacement signings were expected before the tournament deadline. Faf du Plessis (Biratnagar Kings), Sandeep Lamichhane, Rohit Paudel, Dipendra Singh Airee, Kushal Bhurtel, and Sompal Kami are among the season's headline names.",
    "One thing to flag for schedule checkers: sources disagree on the opening fixture. Some list Biratnagar Kings vs Chitwan Rhinos as the November 17 opener; others list Janakpur Bolts vs Kathmandu Gorkhas at 4:00 PM the same day. Neither claim currently traces to a single confirmed CAN fixture release at the time of writing—check the official NPL schedule page or Khalti listing directly before booking around a specific opening-night matchup.",
  ],
}

export const stadiumSection = {
  title: "At the Stadium: Gates, Seating, and What to Bring",
  bullets: [
    "Venue: TU International Cricket Ground, Kirtipur — accessible by public transport, taxi, or ride-share; on-site parking is limited, so factor in extra travel time on match days.",
    "Gates: Open roughly 2 hours before the scheduled start.",
    "Match timing: Day matches have historically started around 12:00 PM local time; some fixtures are evening starts — always confirm the time on your specific ticket rather than assuming a standard slot.",
    "Weather: Late November and December in Kathmandu Valley are cool and dry — bring a light jacket for evening fixtures.",
    "Prohibited items: Outside food and drink, alcohol, weapons, and oversized bags are generally not permitted — stick to a small bag if you're bringing one.",
    "What to bring: Sunscreen and a hat for day matches, a reusable water bottle, and a charged phone for your QR code entry.",
  ],
}

export const ticketsFaqs: { question: string; answer: string }[] = [
  {
    question: "Where can I buy NPL Season 3 tickets?",
    answer:
      "Through the Khalti app or khalti.com, the tournament's official ticketing partner. Limited walk-up tickets are usually available at the stadium gate on match day.",
  },
  {
    question: "How much do NPL tickets cost?",
    answer:
      "Pricing hasn't been officially confirmed for Season 3 at time of writing. In Season 2 (2025), general admission ranged from Rs 500 (league stage) to Rs 1,000 (playoffs/final), with VIP from Rs 1,000 to Rs 2,000.",
  },
  {
    question: "Is there a season pass for NPL 2026?",
    answer:
      "CAN has offered a discounted season pass in both prior seasons (Rs 15,000 all-access in Season 2). A Season 3 pass is expected but not yet confirmed as of this writing — check the Khalti listing for current availability.",
  },
  {
    question: "What is the venue for all NPL matches?",
    answer:
      "Tribhuvan University International Cricket Ground, Kirtipur — every match, including the final, is played at this single venue.",
  },
  {
    question: "Can I get a refund if a match is cancelled?",
    answer:
      "Khalti's standard refund policy has applied to cancelled NPL fixtures in past seasons, though CAN has not published NPL-specific refund terms separately from Khalti's general event policy.",
  },
  {
    question: "How many teams and matches are in NPL Season 3?",
    answer:
      "Eight teams play 32 matches across the league stage, qualifiers, eliminator, and final, running November 17 to December 13, 2026.",
  },
  {
    question: "Do I need a Nepali phone number to book on Khalti?",
    answer:
      "Yes — Khalti account registration requires a Nepali mobile number, which can be a hurdle for international fans wanting to book ahead of travel. There is no confirmed alternative international booking channel for NPL at this time.",
  },
]

/** Exact FAQPage JSON-LD from the PDF schema block */
export const ticketsFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where can I buy NPL Season 3 tickets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Through the Khalti app or khalti.com, the tournament's official ticketing partner. Limited walk-up tickets are usually available at the stadium gate on match day.",
      },
    },
    {
      "@type": "Question",
      name: "How much do NPL tickets cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing hasn't been officially confirmed for Season 3 at time of writing. In Season 2 (2025), general admission ranged from Rs 500 to Rs 1,000, with VIP from Rs 1,000 to Rs 2,000.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a season pass for NPL 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CAN has offered a discounted season pass in both prior seasons, priced at Rs 15,000 all-access in Season 2. A Season 3 pass is expected but not yet confirmed.",
      },
    },
    {
      "@type": "Question",
      name: "What is the venue for all NPL matches?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tribhuvan University International Cricket Ground, Kirtipur — every match, including the final, is played at this single venue.",
      },
    },
    {
      "@type": "Question",
      name: "How many teams and matches are in NPL Season 3?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eight teams play 32 matches across the league stage, qualifiers, eliminator, and final, running November 17 to December 13, 2026.",
      },
    },
  ],
}
