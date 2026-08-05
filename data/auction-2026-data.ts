/** Exact copy from: SEO Title_ NPL Auction 2026_ Full Results & Squad List.pdf */

export const auctionSeo = {
  title: "NPL Auction 2026: Full Results & Squad List",
  description:
    "NPL Season 3 auction 2026 results: retained players, sold prices, Aasif Sheikh's top buy, and every team's full squad so far.",
  slug: "/npl-auction-2026-full-squads",
} as const

export const auctionIntro =
  'The Nepal Premier League Season 3 auction was held on July 6, 2026, in Kathmandu. Eight franchises had already retained 52 players in June, then bid on a 155-player shortlist split into Category A, B and C. Wicketkeeper-batsman Aasif Sheikh, released beforehand by Janakpur Bolts, became the auction\'s top buy at NPR 20 lakh when Lumbini Lions won him in a lucky draw. In total, 37 of the 155 players were sold before the eight squads moved into the post-auction "wish list" phase to fill out their 16-man rosters ahead of the November 17 season opener.'

export const keyFactsRows: { detail: string; information: string }[] = [
  { detail: "Auction date", information: "July 6, 2026" },
  { detail: "Venue", information: "Kathmandu, Nepal" },
  { detail: "Organiser", information: "Cricket Association of Nepal (CAN)" },
  { detail: "Franchises", information: "8, each building toward a 16-player squad" },
  { detail: "Total registrations", information: "347 players" },
  { detail: "Shortlisted auction pool", information: "155 players" },
  { detail: "Category split (A / B / C)", information: "5 / 27 / 123" },
  { detail: "Players retained pre-auction", information: "52 across 8 teams" },
  { detail: "Players sold", information: "37 (118 went unsold)" },
  {
    detail: "Domestic squad quota",
    information: "Raised from 12 to 14 players per team for Season 3",
  },
  { detail: "Top buy", information: "Aasif Sheikh — NPR 20 lakh (Lumbini Lions)" },
  { detail: "Season window", information: "November 17 – December 13, 2026" },
  { detail: "Main venue", information: "TU International Cricket Ground, Kirtipur" },
]

export const auctionDatesSection = {
  title: "Auction Dates",
  paragraphs: [
    "If you've searched around for this topic, you've probably noticed a mismatch: several sites report the <a href=\"https://nplt20league.com/npl-auction/\" class=\"text-[#f26522] underline underline-offset-2 hover:opacity-90\">NPL 2026 auction</a> as an August 9 event with 150 shortlisted players and a top bid of NPR 15 lakh. That figure set matches the Season 2 (2025) auction, not Season 3. The confirmed Season 3 auction — reported live and covered the next morning by Kathmandu-based news outlets — took place on July 6, 2026, involved a 155-player shortlist (not 150), and produced a top sale of NPR 20 lakh for Aasif Sheikh, not 15 lakh. That 15 lakh figure was the Category A ceiling for standard players; Sheikh sold above it because he entered the pool under a special marquee-release price band (10 lakh base, 20 lakh ceiling) rather than the normal Category A range. If a page you're reading cites August 9 or a 15 lakh top price for Season 3, it's almost certainly recycled from last year's auction. This article uses only the July 6, 2026 figures, cross-checked across two independently reported sources.",
  ],
  /** paragraphs that contain HTML (e.g. <a>) and must be rendered with dangerouslySetInnerHTML */
  htmlParagraphIndexes: [0] as number[],
}

export const retentionSection = {
  title: "How the Retention Window Worked (June 2026)",
  paragraphs: [
    "Before any bidding started, each of the eight franchises could retain up to seven players from its Season 2 roster, with one of those seven designated as the team's marquee player. Retentions were announced on a rolling basis through June, starting with Janakpur Bolts on June 11 and wrapping up over the following days as the remaining seven clubs revealed their picks.",
    "Retention counts varied by team:",
  ],
  bullets: [
    "Seven players retained: Lumbini Lions, Sudurpaschim Royals, Karnali Yaks, Chitwan Rhinos",
    "Six players retained: Kathmandu Gorkhas, Biratnagar Kings, Pokhara Avengers",
    "Five players retained: Janakpur Bolts",
  ],
  closing: [
    "Janakpur's decision is the storyline that shaped the entire auction day. As the only Season 1 champions still searching for form, the Bolts opted for change and released their own marquee, wicketkeeper-batsman Aasif Sheikh, keeping only five of a possible seven players. That single call freed up the league's largest pre-auction purse (NPR 66.25 lakh) but also forced Janakpur to rebuild its wicketkeeping stocks from the auction floor.",
  ],
}

export const retainedPlayersRows: {
  team: string
  teamUrl: string
  retained: string
  marquee: string
  other: string
}[] = [
  {
    team: "Lumbini Lions",
    teamUrl: "https://nplt20league.com/teams/lumbini-lions/",
    retained: "7",
    marquee: "Rohit Kumar Paudel (c)",
    other:
      "Sher Malla, Dilip Nath, Sundeep Jora, Dinesh Adhikari, Abhisesh Gautam, Tilak Bhandari",
  },
  {
    team: "Sudurpaschim Royals",
    teamUrl: "https://nplt20league.com/teams/sudurpaschim-royals/",
    retained: "7",
    marquee: "Dipendra Singh Airee (c)",
    other:
      "Binod Bhandari, Aarif Sheikh, Ishan Pandey, Abinash Bohara, Hemant Dhami, Hikmat Mahara",
  },
  {
    team: "Chitwan Rhinos",
    teamUrl: "https://nplt20league.com/teams/chitwan-rhinos/",
    retained: "7",
    marquee: "Kushal Malla",
    other:
      "Dev Khanal, Arjun Saud, Kamal Singh Airee, Ranjeet Kumar, Deepak Bohara, Rijan Dhakal",
  },
  {
    team: "Karnali Yaks",
    teamUrl: "https://nplt20league.com/teams/karnali-yaks/",
    retained: "7",
    marquee: "Sompal Kami",
    other:
      "Gulshan Kumar Jha, Nandan Yadav, Deepak Dumre, Pawan Sarraf, Unish Bikram Singh Thakuri, Yuvraj Khatri",
  },
  {
    team: "Kathmandu Gorkhas",
    teamUrl: "https://nplt20league.com/teams/kathmandu-gurkhas/",
    retained: "6",
    marquee: "Karan KC (c)",
    other: "Mohammad Aadil Alam, Rashid Khan, Shahab Alam, Santosh Yadav",
  },
  {
    team: "Biratnagar Kings",
    teamUrl: "https://nplt20league.com/teams/biratnagar-kings/",
    retained: "6",
    marquee: "Sandeep Lamichhane",
    other: "Lokesh Bam, Basir Ahamad, Narayan Joshi, Pratish GC, Subash Bhandari",
  },
  {
    team: "Pokhara Avengers",
    teamUrl: "https://nplt20league.com/teams/pokhara-avengers/",
    retained: "6",
    marquee: "Kushal Bhurtel (c)",
    other: "Arjun Kumal, Dinesh Kharel, Bipin Khatri, Aakash Chand, Kiran Thagunna",
  },
  {
    team: "Janakpur Bolts",
    teamUrl: "https://nplt20league.com/teams/janakpur-bolts/",
    retained: "5",
    marquee: "Anil Kumar Sah (c) — later Lalit Narayan Rajbanshi named marquee",
    other: "Mayan Yadav, Aadity Mahata, Bikash Aagri",
  },
]

export const retainedNote =
  "A few names worth knowing: Sher Malla was Lumbini's joint-highest wicket-taker last season (17 wickets, level with Sandeep Lamichhane and Abinash Bohara). Binod Bhandari finished third on the Season 2 run-scoring list with 264 runs. Rohit Kumar Paudel was Lumbini's top domestic run-scorer with 276 runs, ahead of overseas signings D'Arcy Short (256) and Niroshan Dickwella (137)."

export const categoriesSection = {
  title: "Auction Categories and Price Bands",
  intro: "CAN carried over the same three-tier pricing structure used in Season 2:",
  rows: [
    {
      category: "A",
      players: "5",
      base: "NPR 10 lakh",
      ceiling: "NPR 15 lakh",
    },
    {
      category: "B",
      players: "27",
      base: "NPR 5 lakh",
      ceiling: "NPR 10 lakh",
    },
    {
      category: "C",
      players: "123",
      base: "NPR 2 lakh",
      ceiling: "NPR 5 lakh (typically closer to 2–4.25 lakh in practice)",
    },
  ],
  paragraphs: [
    "The five Category A names were Aasif Sheikh, Arjun Gharti, Bibek Kumar Yadav, Rupesh Kumar Singh and Trit Raj Das. Sheikh sat outside the normal Category A band: because he was a marquee player released just before the auction, CAN gave him a special base of NPR 15 lakh and ceiling of NPR 20 lakh — which is exactly the price he fetched when the bidding reached its cap and his name went to a lucky draw.",
    "Any player bid up to the maximum price of their category by more than one franchise goes to a lucky draw rather than a straight sale — this happened five times in Category A (all five players) and twice in Category B (Dipak Bohara to Sudurpaschim, Kishore Mahato to Lumbini). No Category C player reached its price ceiling.",
  ],
}

export const soldPlayersRows: {
  player: string
  team: string
  category: string
  price: string
}[] = [
  { player: "Aasif Sheikh", team: "Lumbini Lions", category: "A (special band)", price: "20" },
  { player: "Arjun Gharti", team: "Pokhara Avengers", category: "A", price: "15" },
  { player: "Bibek Kumar Yadav", team: "Chitwan Rhinos", category: "A", price: "15" },
  { player: "Rupesh Kumar Singh", team: "Biratnagar Kings", category: "A", price: "15" },
  { player: "Trit Raj Das", team: "Janakpur Bolts", category: "A", price: "15" },
  { player: "Dipak Bohara", team: "Sudurpaschim Royals", category: "B", price: "10" },
  { player: "Kishore Mahato", team: "Lumbini Lions", category: "B", price: "10" },
  { player: "Shubh Kansakar", team: "Karnali Yaks", category: "B", price: "10" },
  { player: "Aakash Tripathi", team: "Lumbini Lions", category: "B", price: "5" },
  { player: "Abhisekh Tiwari", team: "Janakpur Bolts", category: "B", price: "5" },
  { player: "Amar Singh Rautela", team: "Janakpur Bolts", category: "B", price: "5" },
  { player: "Anil Kharel", team: "Sudurpaschim Royals", category: "B", price: "5" },
  { player: "Bipin Prasad Sharma", team: "Karnali Yaks", category: "B", price: "5" },
  { player: "Bishal Kumar Patel", team: "Janakpur Bolts", category: "B", price: "5" },
  { player: "Dilsad Ali", team: "Biratnagar Kings", category: "B", price: "5" },
  { player: "Rit Gautam", team: "Janakpur Bolts", category: "C", price: "4.25" },
  { player: "Sujan Thapaliya", team: "Biratnagar Kings", category: "C", price: "4.25" },
  { player: "Mausam Dhakal", team: "Chitwan Rhinos", category: "C", price: "3" },
  { player: "Santosh Karki", team: "Janakpur Bolts", category: "C", price: "3" },
  { player: "Sudip Aryal", team: "Pokhara Avengers", category: "C", price: "3" },
  { player: "Bibek Kumar Rana Magar", team: "Pokhara Avengers", category: "C", price: "2.75" },
  { player: "Krishna Poudel", team: "Kathmandu Gorkhas", category: "C", price: "2" },
  { player: "Bishal Susling Rai", team: "Janakpur Bolts", category: "C", price: "2" },
  { player: "Gautam KC", team: "Chitwan Rhinos", category: "C", price: "2" },
  { player: "Pratik Shrestha", team: "Biratnagar Kings", category: "C", price: "2" },
  { player: "Aashutosh Pandey", team: "Janakpur Bolts", category: "C", price: "2" },
  { player: "Sonu Devkota", team: "Kathmandu Gorkhas", category: "C", price: "2" },
  { player: "Dayananda Mandal", team: "Kathmandu Gorkhas", category: "C", price: "2" },
  { player: "Prasiddha Jaisi", team: "Kathmandu Gorkhas", category: "C", price: "2" },
  { player: "Bipin Rawal", team: "Chitwan Rhinos", category: "C", price: "2" },
  { player: "Aparajit Poudel", team: "Biratnagar Kings", category: "C", price: "2" },
  { player: "Surya Tamang", team: "Karnali Yaks", category: "C", price: "2" },
  { player: "Ashok Dhami", team: "Chitwan Rhinos", category: "C", price: "2" },
  { player: "Sachin Bhatta", team: "Sudurpaschim Royals", category: "C", price: "2" },
  { player: "Ayub Chand", team: "Sudurpaschim Royals", category: "C", price: "Not disclosed" },
  {
    player: "Arniko Prasad Yadav",
    team: "Lumbini Lions",
    category: "C",
    price: "Not disclosed",
  },
]

export const unsoldSection = {
  title: "Unsold Players and the Wish-List Process",
  paragraphs: [
    "Of the 155-player pool, 118 went unsold on auction day — a reflection of how heavily loaded Category C is relative to actual demand. Verified unsold names include Amit Shrestha, Anuj Kumar Chanara, former Nepal U19 player Dipesh Kandel, and Sunam Gautam. Sharad Vesawkar is another experienced domestic name who went unsold.",
    "Because no franchise had filled its full quota after the auction, CAN ran a wish-list round immediately afterward, letting teams pick unsold players to complete a 13-player domestic count:",
  ],
  bullets: [
    "Requested 3 players: Karnali Yaks, Kathmandu Gorkhas",
    "Requested 2 players: Pokhara Avengers, Biratnagar Kings",
    "Requested 1 player: Janakpur Bolts, Chitwan Rhinos, Lumbini Lions",
  ],
  closing: [
    "Each squad's 14th domestic spot is reserved for a player sourced through the team's own talent-hunt programme, separate from both the retention and auction processes. Unsold Category C players also remain eligible for late replacement signings if a team needs injury or availability cover before November 17.",
  ],
}

export const squadsSection = {
  title: "NPL 2026 Full Squads by Team",
  intro:
    "Combining each retained core with confirmed auction buys gives the clearest available picture of where every squad stands. None of the eight teams had reached the full 16-player mark by auction close — the numbers below reflect confirmed retained-plus-auction signings only, before wish-list and talent-hunt additions are finalised.",
  rows: [
    {
      team: "Janakpur Bolts",
      retained: "5",
      auctionBuys: "8",
      squadFilled: "13",
      notable: "Trit Raj Das (15L)",
    },
    {
      team: "Biratnagar Kings",
      retained: "6",
      auctionBuys: "8",
      squadFilled: "14",
      notable: "Rupesh Kumar Singh (15L)",
    },
    {
      team: "Kathmandu Gorkhas",
      retained: "6",
      auctionBuys: "7",
      squadFilled: "13",
      notable: "Krishna Poudel, Sonu Devkota (2L each)",
    },
    {
      team: "Lumbini Lions",
      retained: "7",
      auctionBuys: "6",
      squadFilled: "13",
      notable: "Aasif Sheikh (20L)",
    },
    {
      team: "Pokhara Avengers",
      retained: "6",
      auctionBuys: "6",
      squadFilled: "12",
      notable: "Arjun Gharti (15L)",
    },
    {
      team: "Karnali Yaks",
      retained: "7",
      auctionBuys: "6",
      squadFilled: "13",
      notable: "Shubh Kansakar (10L)",
    },
    {
      team: "Chitwan Rhinos",
      retained: "7",
      auctionBuys: "6",
      squadFilled: "13",
      notable: "Bibek Kumar Yadav (15L)",
    },
    {
      team: "Sudurpaschim Royals",
      retained: "7",
      auctionBuys: "6",
      squadFilled: "13",
      notable: "Dipak Bohara (10L)",
    },
  ],
  closing: [
    'Each squad still needs wish-list additions, a talent-hunt player and its full complement of overseas signings before it hits 16. Overseas-player announcements for Season 3 hadn\'t been finalised as of the auction date, so treat any "complete" foreign-player squad list you see elsewhere as provisional.',
  ],
}

export const purseSection = {
  title: "Purse Analysis: Who Spent Big, Who Held Back",
  rows: [
    { team: "Lumbini Lions", spent: "44", left: "5.25" },
    { team: "Janakpur Bolts", spent: "41.25", left: "25" },
    { team: "Biratnagar Kings", spent: "37.25", left: "14.25" },
    { team: "Pokhara Avengers", spent: "26.75", left: "18.75" },
    { team: "Karnali Yaks", spent: "26", left: "16" },
    { team: "Chitwan Rhinos", spent: "26", left: "16" },
    { team: "Sudurpaschim Royals", spent: "26", left: "16.5" },
    { team: "Kathmandu Gorkhas", spent: "17", left: "17" },
  ],
  paragraphs: [
    'Only two figures were confirmed for pre-auction purses on the broadcast: Janakpur Bolts entered with the league\'s largest war chest (NPR 66.25 lakh, a direct result of releasing Aasif Sheikh) and Kathmandu Gorkhas entered with the smallest (NPR 34 lakh). CAN hasn\'t published a full pre-auction purse table for all eight teams, so the "spent" and "left" columns above — drawn from confirmed post-auction figures — are a more reliable read on financial standing than trying to back-calculate every team\'s starting purse.',
    "Lumbini's spending is almost entirely explained by the Sheikh bidding war: 20 of their 44 lakh spent went on one player, leaving them with the tightest cushion in the league for late top-ups. Kathmandu Gorkhas sit at the opposite end — seven signings for 17 lakh, all in Category C, and their full remaining purse still intact.",
  ],
}

export const seasonCompareSection = {
  title: "Season 2 vs Season 3 Auction: What Changed",
  rows: [
    {
      factor: "Auction date",
      season2: "August 2025 window",
      season3: "July 6, 2026",
    },
    {
      factor: "Domestic squad quota",
      season2: "12 players per team",
      season3: "14 players per team",
    },
    {
      factor: "Shortlist size",
      season2: "150 players",
      season3: "155 players",
    },
    {
      factor: "Category A ceiling",
      season2: "15 lakh",
      season3: "15 lakh (standard); up to 20 lakh for a released marquee",
    },
    {
      factor: "Top sale",
      season2: "~15 lakh",
      season3: "20 lakh (Aasif Sheikh)",
    },
    {
      factor: "Marquee-release rule",
      season2: "Not a major storyline",
      season3: "Central to the day — Janakpur's Sheikh release reshaped the market",
    },
  ],
  closing: [
    "The bump in domestic quota — from 12 to 14 — is arguably the most consequential rules change for squad-builders to track, since it means more Nepali players get contracted league-wide even though the same eight-team, roughly similar-sized auction pool is in play.",
  ],
}

export const expertReadSection = {
  title: "Team-by-Team Expert Read",
  paragraphs: [
    "Lumbini Lions go into title defence with their spine almost untouched — Rohit Kumar Paudel and Sher Malla both stayed — and added a genuine upgrade behind the stumps in Aasif Sheikh. The trade-off is purse discipline: with only 5.25 lakh left, there's little room to react if an injury hits before November.",
    "Sudurpaschim Royals, runners-up in each of the last two seasons, protected their strongest asset in captain Dipendra Singh Airee and used the auction to add bowling depth rather than chase a headline name — a squad built for consistency rather than a marquee splash.",
    "Biratnagar Kings built around Sandeep Lamichhane's retained presence and used their purse on Rupesh Kumar Singh (15 lakh), continuing a recruitment pattern that has previously brought international names to the franchise.",
    "Kathmandu Gorkhas were the most purse-conscious side of the day, spending just 17 lakh across seven signings — all Category C — while sitting on a full purse relative to what they entered with. Under head coach Monty Desai, that reads as a depth-first strategy rather than star-chasing.",
    "Janakpur Bolts made the day's single biggest structural bet: releasing marquee Aasif Sheikh, then spending aggressively (41.25 lakh, the second-highest outlay) to rebuild around Trit Raj Das. Whether that pays off depends heavily on whether their wish-list and talent-hunt picks can cover the wicketkeeping gap Sheikh's exit created.",
    "Pokhara Avengers, Karnali Yaks and Chitwan Rhinos all took a similar middle path — protecting a settled core (Kushal Bhurtel, Sompal Kami and Kushal Malla respectively remain as marquees) and using moderate, mid-table spending (26–26.75 lakh) to round out squad depth rather than chase Category A names.",
  ],
}

export const auctionFaqs: { question: string; answer: string }[] = [
  {
    question: "When was the NPL Season 3 auction held?",
    answer:
      "The Nepal Premier League Season 3 auction was held on July 6, 2026, in Kathmandu.",
  },
  {
    question: "Who was the most expensive player at the NPL 2026 auction?",
    answer:
      "Wicketkeeper-batsman Aasif Sheikh, released by Janakpur Bolts before the auction, sold to Lumbini Lions for NPR 20 lakh — the highest price of the day.",
  },
  {
    question: "How many players were retained before the auction?",
    answer:
      "Eight franchises retained 52 players combined in June 2026, ranging from five (Janakpur Bolts) to seven (Lumbini Lions, Sudurpaschim Royals, Karnali Yaks, Chitwan Rhinos) per team.",
  },
  {
    question: "How many players were in the auction pool, and how many sold?",
    answer:
      "155 players were shortlisted from 347 total registrations. 37 were sold across Category A, B and C; 118 went unsold.",
  },
  {
    question: 'Is the "NPL auction August 9, 2026" date correct?',
    answer:
      "No — that date, along with a 150-player pool and 15 lakh top price, matches the Season 2 (2025) auction. The confirmed Season 3 auction took place on July 6, 2026.",
  },
  {
    question: "How big is each NPL 2026 squad?",
    answer:
      "Each franchise is building toward a 16-player squad, made up of retained players, auction buys, wish-list additions, one talent-hunt signing, and overseas players still to be confirmed.",
  },
  {
    question: "Which team had the biggest purse going into the auction?",
    answer:
      "Janakpur Bolts entered with the largest purse (NPR 66.25 lakh), partly because they released marquee Aasif Sheikh. Kathmandu Gorkhas had the smallest at NPR 34 lakh.",
  },
  {
    question: "When does the NPL 2026 season start?",
    answer:
      "The season is scheduled to run from November 17 to December 13, 2026, with matches at the TU International Cricket Ground in Kirtipur.",
  },
  {
    question: "Did any team fail to sign a Category A or B player?",
    answer:
      "Yes — Kathmandu Gorkhas were the only franchise that didn't land a Category A or B player, filling every auction slot from Category C.",
  },
  {
    question: "Are NPL 2026 squads final after this auction?",
    answer:
      "No. Squads remain in progress: no franchise had reached its 16-player quota by auction close, and wish-list, talent-hunt, and overseas additions are still to be finalised.",
  },
]

/** Exact FAQPage JSON-LD text from the PDF schema block */
export const auctionFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When was the NPL Season 3 auction held?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Nepal Premier League Season 3 auction was held on July 6, 2026, in Kathmandu.",
      },
    },
    {
      "@type": "Question",
      name: "Who was the most expensive player at the NPL 2026 auction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wicketkeeper-batsman Aasif Sheikh, released by Janakpur Bolts before the auction, sold to Lumbini Lions for NPR 20 lakh, the highest price of the day.",
      },
    },
    {
      "@type": "Question",
      name: "How many players were retained before the auction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eight franchises retained 52 players combined in June 2026, ranging from five (Janakpur Bolts) to seven (Lumbini Lions, Sudurpaschim Royals, Karnali Yaks, Chitwan Rhinos) per team.",
      },
    },
    {
      "@type": "Question",
      name: "How many players were in the auction pool, and how many sold?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "155 players were shortlisted from 347 total registrations. 37 were sold across Category A, B and C; 118 went unsold.",
      },
    },
    {
      "@type": "Question",
      name: "Is the NPL auction August 9, 2026 date correct?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. That date, along with a 150-player pool and 15 lakh top price, matches the Season 2 (2025) auction. The confirmed Season 3 auction took place on July 6, 2026.",
      },
    },
    {
      "@type": "Question",
      name: "How big is each NPL 2026 squad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each franchise is building toward a 16-player squad, made up of retained players, auction buys, wish-list additions, one talent-hunt signing, and overseas players still to be confirmed.",
      },
    },
    {
      "@type": "Question",
      name: "Which team had the biggest purse going into the auction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Janakpur Bolts entered with the largest purse at NPR 66.25 lakh, partly because they released marquee Aasif Sheikh. Kathmandu Gorkhas had the smallest at NPR 34 lakh.",
      },
    },
    {
      "@type": "Question",
      name: "When does the NPL 2026 season start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The season is scheduled to run from November 17 to December 13, 2026, with matches at the TU International Cricket Ground in Kirtipur.",
      },
    },
    {
      "@type": "Question",
      name: "Did any team fail to sign a Category A or B player?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Kathmandu Gorkhas were the only franchise that did not land a Category A or B player, filling every auction slot from Category C.",
      },
    },
    {
      "@type": "Question",
      name: "Are NPL 2026 squads final after this auction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Squads remain in progress: no franchise had reached its 16-player quota by auction close, and wish-list, talent-hunt, and overseas additions are still to be finalised.",
      },
    },
  ],
}
