import news20 from "@/public/images/news/news2.jpeg"
import news21 from "@/public/images/news/news3.jpeg"

type DocxNewsArticle = {
  id: string
  slug: string
  title: string
  date: string
  summary: string
  content: string
  imageTitle?: string
  imageAlt?: string
  imageCaption?: string
  image: string | { src: string }
  keywords?: string[]
}

/** Exact copy from DOCX — wording unchanged */
export const ticketsPricingNews: DocxNewsArticle = {
  id: "22",
  slug: "npl-2026-tickets-price-guide-kir",
  title:
    "NPL 2026 Tickets: Full Pricing Guide, Fan Zone Details and Booking Steps for Kirtipur",
  date: "August 6, 2026",
  summary:
    "Full NPL Season 3 ticket guide - General Parapet, Grandstand & VIP Pavilion pricing, season pass options, fan zone details, gate times and booking steps for Kirtipur.",
  imageTitle:
    "NPL 2026 Tickets: Full Pricing Guide, Fan Zone Details and Booking Steps for Kirtipur",
  imageAlt:
    "NPL 2026 Tickets Full Pricing Guide Fan Zone Details and Booking Steps for Kirtipur",
  imageCaption:
    "Full NPL Season 3 ticket guide - General Parapet, Grandstand & VIP Pavilion pricing, season pass options, fan zone details, gate times and booking steps for Kirtipur.",
  image: news20,
  keywords: [
    "NPL 2026 Tickets",
    "NPL ticket price",
    "Kirtipur tickets",
    "General Parapet",
    "Premium Grandstand",
    "VIP Pavilion",
    "NPL season pass",
    "fan zone Kirtipur",
  ],
  content: `<p>Nepal Premier League Season 3 arrives at the Tribhuvan University International Cricket Ground in Kirtipur this November, and organizers have laid out how fans will buy in - three seating tiers, two season-pass options, and a fan zone built to keep the excitement going outside the boundary rope. Here's a complete breakdown of what's confirmed so far.</p>
<h2>Tournament Window</h2>
<p>All 32 matches of NPL Season 3 are scheduled to run from November 17 to December 13, 2026 at Kirtipur. (Note: this window differs from an earlier CAN calendar reference pointing to an October-November slot - treat the Nov 17-Dec 13 dates as the currently reported schedule pending final CAN confirmation.)</p>
<h2>Ticketing Goes Fully Digital</h2>
<p>Season 3 drops paper tickets entirely. Every seat is sold as a QR-coded digital pass, bought through official ticketing partners and authenticated at entry via scanning turnstiles. Organizers say the switch is meant to speed up gate entry and cut down on scalping around the stadium perimeter. Fans will need a mobile banking or digital wallet account to complete purchases once booking opens in October.</p>
<h2>Ticket Pricing by Enclosure</h2>
<table class="w-full border-collapse border border-gray-600 my-6"><thead><tr><th class="border border-gray-600 px-4 py-3 text-left">Enclosure</th><th class="border border-gray-600 px-4 py-3 text-left">Single Match</th><th class="border border-gray-600 px-4 py-3 text-left">Weekend Doubleheader</th><th class="border border-gray-600 px-4 py-3 text-left">What You Get</th></tr></thead><tbody><tr><td class="border border-gray-600 px-4 py-3">General Parapet</td><td class="border border-gray-600 px-4 py-3">NPR 300</td><td class="border border-gray-600 px-4 py-3">NPR 500</td><td class="border border-gray-600 px-4 py-3">Unreserved open embankment seating, east/west boundary</td></tr><tr><td class="border border-gray-600 px-4 py-3">Premium Grandstand</td><td class="border border-gray-600 px-4 py-3">NPR 700</td><td class="border border-gray-600 px-4 py-3">NPR 1,200</td><td class="border border-gray-600 px-4 py-3">Reserved bucket seats, covered canopy, assigned row/seat</td></tr><tr><td class="border border-gray-600 px-4 py-3">VIP Hospitality Pavilion</td><td class="border border-gray-600 px-4 py-3">NPR 2,000</td><td class="border border-gray-600 px-4 py-3">-</td><td class="border border-gray-600 px-4 py-3">AC lounge, catering, private balcony, souvenir pack</td></tr></tbody></table>
<p>Figures above are as reported by a competitor site and have not yet been cross-verified against an official CAN or NPL ticketing announcement. Treat as provisional until confirmed on the official portal.</p>
<h2>Season Passes</h2>
<table class="w-full border-collapse border border-gray-600 my-6"><thead><tr><th class="border border-gray-600 px-4 py-3 text-left">Pass</th><th class="border border-gray-600 px-4 py-3 text-left">Price</th><th class="border border-gray-600 px-4 py-3 text-left">Coverage</th></tr></thead><tbody><tr><td class="border border-gray-600 px-4 py-3">Full Season Pass</td><td class="border border-gray-600 px-4 py-3">NPR 10,000</td><td class="border border-gray-600 px-4 py-3">All 28 round-robin matches + 4 playoff fixtures (Qualifier 1, Eliminator, Qualifier 2, Final)</td></tr><tr><td class="border border-gray-600 px-4 py-3">Group Stage Pass</td><td class="border border-gray-600 px-4 py-3">NPR 7,500</td><td class="border border-gray-600 px-4 py-3">All 28 round-robin matches only</td></tr></tbody></table>
<p>Editorial flag - pricing math doesn't hold up: the source claims the Group Stage Pass saves fans "over 25 percent" versus buying single tickets. Running the numbers on the cheapest single-match option (28 x NPR 300 General Parapet tickets = NPR 8,400) against the NPR 7,500 Group Stage Pass gives a saving of roughly 10.7 percent, not 25+. Unless the comparison is meant to be against Grandstand-tier single tickets (28 x NPR 700 = NPR 19,600, which would make the group pass a much bigger saving), the 25 percent figure as stated looks inflated or ambiguously benchmarked. Flagging this rather than repeating the claim uncritically.</p>
<h2>Fan Zone (Outside the Eastern Gate)</h2>
<p>A dedicated fan zone runs alongside every match day, featuring:</p>
<ul class="list-disc pl-6 my-4 space-y-2"><li>Official merchandise stalls for all eight franchises - Biratnagar Kings, Chitwan Rhinos, Janakpur Bolts, Karnali Yaks, Kathmandu Gorkhas, Lumbini Lions, Pokhara Avengers, Sudurpaschim Royals</li><li>Food courts mixing local Nepali cuisine with international fast-food vendors (non-alcoholic beverages only)</li><li>40x20 ft LED screens broadcasting live Kantipur Max coverage for fans without stadium tickets</li><li>Interactive zones: speed-gun bowling cages, batting simulators, and skill challenges for youth fans during breaks</li></ul>
<h2>Gate Times</h2>
<table class="w-full border-collapse border border-gray-600 my-6"><thead><tr><th class="border border-gray-600 px-4 py-3 text-left">Match Slot</th><th class="border border-gray-600 px-4 py-3 text-left">Kickoff</th><th class="border border-gray-600 px-4 py-3 text-left">Gates Open</th></tr></thead><tbody><tr><td class="border border-gray-600 px-4 py-3">Afternoon fixture</td><td class="border border-gray-600 px-4 py-3">11:45 AM</td><td class="border border-gray-600 px-4 py-3">9:45 AM</td></tr><tr><td class="border border-gray-600 px-4 py-3">Evening fixture (floodlit)</td><td class="border border-gray-600 px-4 py-3">4:00 PM / 5:30 PM</td><td class="border border-gray-600 px-4 py-3">2:00 PM</td></tr></tbody></table>
<p>Standard security screening applies - bag checks, metal detectors, and a ban on sharp objects, glass containers, fireworks, and unauthorized banners.</p>
<h2>Getting There</h2>
<p>Free electric shuttles are planned between designated parking zones (Balkhu and the TU main gate area) and the stadium entry points, aimed at easing congestion along Kirtipur's narrower access roads on match days.</p>
<h2>Accessibility and Medical Support</h2>
<p>Wheelchair ramps and reserved viewing platforms are planned in the Premium Grandstand tier, with usher assistance from shuttle drop-off to seating. On the medical side, two mobile clinics and four standby ambulances are slated to be staffed on-site by paramedics from Kathmandu hospitals, alongside hydration points along the parapet concourse.</p>
<h2>Booking Timeline</h2>
<p>Ticket sales and customer support are expected to open roughly six weeks before the tournament opener - Janakpur Bolts vs. Kathmandu Gorkhas on November 17 - through the official NPL portal and authorized booking apps.</p>`,
}

/** Exact copy from DOCX — wording unchanged */
export const schedulePreviewNews: DocxNewsArticle = {
  id: "23",
  slug: "npl-2026-schedule-32-matches-playoff-dates",
  title: "NPL 2026 Schedule: 32 Matches, Playoff Dates & Full Team Preview",
  date: "August 6, 2026",
  summary:
    "NPL Season 3's confirmed 32-match schedule at Kirtipur - group stage format, playoff dates, floodlit match timings, and a franchise-by-franchise squad preview for all 8 teams.",
  imageTitle: "NPL 2026 Schedule: 32 Matches, Playoff Dates & Full Team Preview",
  imageAlt:
    "NPL 2026 Schedule 32 Matches Playoff Dates and Full Team Preview",
  imageCaption:
    "NPL Season 3's confirmed 32-match schedule at Kirtipur - group stage format, playoff dates, floodlit match timings, and a franchise-by-franchise squad preview for all 8 teams.",
  image: news21,
  keywords: [
    "NPL 2026 Schedule",
    "32 matches",
    "playoff dates",
    "TU Ground Kirtipur",
    "NPL Season 3",
    "franchise preview",
  ],
  content: `<p>Nepal Premier League Season 3 has its tournament window locked in - 32 matches, one venue, and a compressed 27-day calendar that will test squad depth as much as talent. Here's what's confirmed, what's still provisional, and how the eight franchises stack up heading into the November 17 start.</p>
<h2>Format at a Glance</h2>
<table class="w-full border-collapse border border-gray-600 my-6"><thead><tr><th class="border border-gray-600 px-4 py-3 text-left">Stage</th><th class="border border-gray-600 px-4 py-3 text-left">Matches</th><th class="border border-gray-600 px-4 py-3 text-left">Structure</th></tr></thead><tbody><tr><td class="border border-gray-600 px-4 py-3">Group Stage</td><td class="border border-gray-600 px-4 py-3">28</td><td class="border border-gray-600 px-4 py-3">Single round-robin - each of the 8 teams plays 7 matches</td></tr><tr><td class="border border-gray-600 px-4 py-3">Playoffs</td><td class="border border-gray-600 px-4 py-3">4</td><td class="border border-gray-600 px-4 py-3">Top 4 by net run rate advance</td></tr><tr><td class="border border-gray-600 px-4 py-3">Total</td><td class="border border-gray-600 px-4 py-3">32</td><td class="border border-gray-600 px-4 py-3">Nov 17 - Dec 13, 2026, all at TU Ground, Kirtipur</td></tr></tbody></table>
<h2>Reported Playoff Schedule</h2>
<table class="w-full border-collapse border border-gray-600 my-6"><thead><tr><th class="border border-gray-600 px-4 py-3 text-left">Fixture</th><th class="border border-gray-600 px-4 py-3 text-left">Date</th><th class="border border-gray-600 px-4 py-3 text-left">Teams</th></tr></thead><tbody><tr><td class="border border-gray-600 px-4 py-3">Qualifier 1</td><td class="border border-gray-600 px-4 py-3">Dec 9</td><td class="border border-gray-600 px-4 py-3">1st vs 2nd</td></tr><tr><td class="border border-gray-600 px-4 py-3">Eliminator</td><td class="border border-gray-600 px-4 py-3">Dec 10</td><td class="border border-gray-600 px-4 py-3">3rd vs 4th</td></tr><tr><td class="border border-gray-600 px-4 py-3">Qualifier 2</td><td class="border border-gray-600 px-4 py-3">Dec 11</td><td class="border border-gray-600 px-4 py-3">Qualifier 1 loser vs Eliminator winner</td></tr><tr><td class="border border-gray-600 px-4 py-3">Final</td><td class="border border-gray-600 px-4 py-3">Dec 13</td><td class="border border-gray-600 px-4 py-3">Qualifier 2 winner vs Qualifier 1 winner</td></tr></tbody></table>
<p>Editorial flag: These are more specific playoff dates than CAN has publicly confirmed to date - earlier CAN communications indicated the full match-by-match fixture list (Season 2 precedent: released roughly a week before the opener) hadn't gone out yet. Treat these exact dates as provisional until they appear on an official CAN release.</p>
<h2>An Original Look at the Calendar Math</h2>
<p>Squeezing 28 group matches into the 22 days between November 17 and the December 9 playoff start (before playoffs begin) works out to roughly 1.27 matches per day on average. Since a single ground can't host two live matches in one afternoon, that pace only holds if a meaningful chunk of those days are doubleheaders. Running the numbers: covering 28 matches across 22 days requires about 6 doubleheader days (with the other 16 as single-match days) - which lines up with the weekend-doubleheader model reported elsewhere for this venue, since 6 doubleheader days maps neatly onto roughly three weekends within that window. This is our own calculation, not a figure carried over from any source.</p>
<h2>Venue: Kirtipur Gets a Lighting Upgrade</h2>
<p>The report describes six new floodlight towers with 420 individual fixtures enabling day-night matches at Tribhuvan University Ground for the first time - a first for Nepali domestic T20 cricket if accurate. Spectator capacity is described only as "beyond 10,000."</p>
<p>Editorial flag: That "beyond 10,000" figure is vague and lower than the 13,000-capacity figure (2025-present) sourced from Wikipedia in earlier venue research for this site. The two aren't strictly contradictory - 13,000 is technically "beyond 10,000" - but the imprecision here is worth noting rather than repeating as if it were a hard number. Floodlight tower count and fixture specs are single-source and unverified against any CAN engineering release.</p>
<h2>Franchise-by-Franchise Preview</h2>
<table class="w-full border-collapse border border-gray-600 my-6"><thead><tr><th class="border border-gray-600 px-4 py-3 text-left">Franchise</th><th class="border border-gray-600 px-4 py-3 text-left">Captain</th><th class="border border-gray-600 px-4 py-3 text-left">Key Retentions</th><th class="border border-gray-600 px-4 py-3 text-left">Notable Auction Buys</th></tr></thead><tbody><tr><td class="border border-gray-600 px-4 py-3">Lumbini Lions (defending champions)</td><td class="border border-gray-600 px-4 py-3">Rohit Paudel</td><td class="border border-gray-600 px-4 py-3">-</td><td class="border border-gray-600 px-4 py-3">Aasif Sheikh (NPR 20 lakh)</td></tr><tr><td class="border border-gray-600 px-4 py-3">Sudurpaschim Royals</td><td class="border border-gray-600 px-4 py-3">-</td><td class="border border-gray-600 px-4 py-3">-</td><td class="border border-gray-600 px-4 py-3">Back-to-back finalists in prior editions</td></tr><tr><td class="border border-gray-600 px-4 py-3">Janakpur Bolts (Season 1 champions)</td><td class="border border-gray-600 px-4 py-3">-</td><td class="border border-gray-600 px-4 py-3">Anil Kumar Sah, Lalit Narayan Rajbanshi</td><td class="border border-gray-600 px-4 py-3">Trit Raj Das (Category A), Rit Gautam & Santosh Karki (Category C); released Aasif Sheikh</td></tr><tr><td class="border border-gray-600 px-4 py-3">Kathmandu Gorkhas</td><td class="border border-gray-600 px-4 py-3">Karan KC</td><td class="border border-gray-600 px-4 py-3">Rashid Khan, Dipesh Kandel, Bhim Sharki</td><td class="border border-gray-600 px-4 py-3">Mohammad Adil Alam (NPR 15 lakh), Aakash Tripathi (NPR 7 lakh)</td></tr><tr><td class="border border-gray-600 px-4 py-3">Pokhara Avengers</td><td class="border border-gray-600 px-4 py-3">Kushal Bhurtel</td><td class="border border-gray-600 px-4 py-3">-</td><td class="border border-gray-600 px-4 py-3">Arjun Gharti (Category A), Sudip Aryal, Vivek Kumar Ranmagar</td></tr><tr><td class="border border-gray-600 px-4 py-3">Biratnagar Kings</td><td class="border border-gray-600 px-4 py-3">Sandeep Lamichhane</td><td class="border border-gray-600 px-4 py-3">-</td><td class="border border-gray-600 px-4 py-3">Rupesh Kumar Singh (Category A), Sujan Thapaliya (NPR 4.25 lakh)</td></tr><tr><td class="border border-gray-600 px-4 py-3">Karnali Yaks</td><td class="border border-gray-600 px-4 py-3">Sompal Kami</td><td class="border border-gray-600 px-4 py-3">Gulshan Kumar Jha, Nandan Yadav</td><td class="border border-gray-600 px-4 py-3">Pawan Sarraf (Category B, NPR 15 lakh)</td></tr><tr><td class="border border-gray-600 px-4 py-3">Chitwan Rhinos</td><td class="border border-gray-600 px-4 py-3">Kushal Malla</td><td class="border border-gray-600 px-4 py-3">Gautam KC, Rijan Dhakal</td><td class="border border-gray-600 px-4 py-3">Arjun Saud & Dev Khanal (NPR 15 lakh each)</td></tr></tbody></table>
<p>Rashid Khan's retention by Kathmandu Gorkhas is consistent with previously verified international-marquee data for this site. All auction purse figures above remain single-source and haven't been cross-checked against statsnpl.com's official records - flag accordingly if reused elsewhere.</p>
<h2>Match Day Timings</h2>
<table class="w-full border-collapse border border-gray-600 my-6"><thead><tr><th class="border border-gray-600 px-4 py-3 text-left">Slot</th><th class="border border-gray-600 px-4 py-3 text-left">Start Time</th></tr></thead><tbody><tr><td class="border border-gray-600 px-4 py-3">Afternoon fixture</td><td class="border border-gray-600 px-4 py-3">11:45 AM</td></tr><tr><td class="border border-gray-600 px-4 py-3">Evening fixture (floodlit)</td><td class="border border-gray-600 px-4 py-3">4:00 PM or 5:30 PM</td></tr></tbody></table>
<p>Weekend windows carry the doubleheader load, giving Kathmandu-based fans two fixtures on the same day.</p>
<h2>Pitch and Ground Management</h2>
<p>Hosting all 32 matches on one ground means curators will need to rotate across multiple center wickets, balancing moisture for afternoon seam movement against firmer surfaces for evening spin. No official pitch-rotation plan has been published - this is a logistics point worth watching rather than a confirmed detail.</p>
<h2>Broadcast</h2>
<p>Kantipur Max carries domestic TV coverage with bilingual (Nepali/English) commentary; DishHome Go and official YouTube channels carry the digital stream for the diaspora audience - consistent with broadcast details reported elsewhere for this tournament.</p>`,
}
