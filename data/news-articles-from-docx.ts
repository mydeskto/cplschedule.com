import news20 from "@/public/images/news/news2.jpeg"
import news21 from "@/public/images/news/news3.jpeg"
import news22 from "@/public/images/news/news22.jpeg"
import news23 from "@/public/images/news/news23.jpeg"

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
<p>All 32 matches of NPL Season 3 are scheduled to run from October 26 to November 21, 2026 at Kirtipur. (Note: this window differs from an earlier CAN calendar reference pointing to an October-November slot - treat the Oct 26-Nov 21 dates as the currently reported schedule pending final CAN confirmation.)</p>
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
  content: `<p>Nepal Premier League Season 3 has its tournament window locked in - 32 matches, one venue, and a compressed 27-day calendar that will test squad depth as much as talent. Here's what's confirmed, what's still provisional, and how the eight franchises stack up heading into the October 26 start.</p>
<h2>Format at a Glance</h2>
<table class="w-full border-collapse border border-gray-600 my-6"><thead><tr><th class="border border-gray-600 px-4 py-3 text-left">Stage</th><th class="border border-gray-600 px-4 py-3 text-left">Matches</th><th class="border border-gray-600 px-4 py-3 text-left">Structure</th></tr></thead><tbody><tr><td class="border border-gray-600 px-4 py-3">Group Stage</td><td class="border border-gray-600 px-4 py-3">28</td><td class="border border-gray-600 px-4 py-3">Single round-robin - each of the 8 teams plays 7 matches</td></tr><tr><td class="border border-gray-600 px-4 py-3">Playoffs</td><td class="border border-gray-600 px-4 py-3">4</td><td class="border border-gray-600 px-4 py-3">Top 4 by net run rate advance</td></tr><tr><td class="border border-gray-600 px-4 py-3">Total</td><td class="border border-gray-600 px-4 py-3">32</td><td class="border border-gray-600 px-4 py-3">Nov 17 - Dec 13, 2026, all at TU Ground, Kirtipur</td></tr></tbody></table>
<h2>Reported Playoff Schedule</h2>
<table class="w-full border-collapse border border-gray-600 my-6"><thead><tr><th class="border border-gray-600 px-4 py-3 text-left">Fixture</th><th class="border border-gray-600 px-4 py-3 text-left">Date</th><th class="border border-gray-600 px-4 py-3 text-left">Teams</th></tr></thead><tbody><tr><td class="border border-gray-600 px-4 py-3">Qualifier 1</td><td class="border border-gray-600 px-4 py-3">Dec 9</td><td class="border border-gray-600 px-4 py-3">1st vs 2nd</td></tr><tr><td class="border border-gray-600 px-4 py-3">Eliminator</td><td class="border border-gray-600 px-4 py-3">Dec 10</td><td class="border border-gray-600 px-4 py-3">3rd vs 4th</td></tr><tr><td class="border border-gray-600 px-4 py-3">Qualifier 2</td><td class="border border-gray-600 px-4 py-3">Dec 11</td><td class="border border-gray-600 px-4 py-3">Qualifier 1 loser vs Eliminator winner</td></tr><tr><td class="border border-gray-600 px-4 py-3">Final</td><td class="border border-gray-600 px-4 py-3">Dec 13</td><td class="border border-gray-600 px-4 py-3">Qualifier 2 winner vs Qualifier 1 winner</td></tr></tbody></table>
<p>Editorial flag: These are more specific playoff dates than CAN has publicly confirmed to date - earlier CAN communications indicated the full match-by-match fixture list (Season 2 precedent: released roughly a week before the opener) hadn't gone out yet. Treat these exact dates as provisional until they appear on an official CAN release.</p>
<h2>An Original Look at the Calendar Math</h2>
<p>Squeezing 28 group matches into the 22 days between October 26 and the November 17 playoff start (before playoffs begin) works out to roughly 1.27 matches per day on average. Since a single ground can't host two live matches in one afternoon, that pace only holds if a meaningful chunk of those days are doubleheaders. Running the numbers: covering 28 matches across 22 days requires about 6 doubleheader days (with the other 16 as single-match days) - which lines up with the weekend-doubleheader model reported elsewhere for this venue, since 6 doubleheader days maps neatly onto roughly three weekends within that window. This is our own calculation, not a figure carried over from any source.</p>
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

/** Exact copy — wording unchanged */
export const nplDatesConfirmedNews: DocxNewsArticle = {
  id: "24",
  slug: "npl-2026-dates-confirmed-nepal-premier-league",
  title: "NPL 2026 Dates Confirmed: Nepal Premier League to Start October 26",
  date: "August 9, 2026",
  summary:
    "NPL 2026 dates are officially confirmed by CAN. Nepal Premier League's third edition runs October 26 to November 21, clashing with Dashain and Tihar festivals.",
  imageTitle: "NPL 2026 Dates Confirmed: Nepal Premier League to Start October 26",
  imageAlt: "NPL 2026 dates confirmed Nepal Premier League to start October 26",
  imageCaption:
    "NPL 2026 dates are officially confirmed by CAN. Nepal Premier League's third edition runs October 26 to November 21, clashing with Dashain and Tihar festivals.",
  image: news22,
  keywords: [
    "NPL 2026 dates",
    "Nepal Premier League October 26",
    "CAN confirms NPL 2026",
    "NPL 2026 start date",
    "Dashain Tihar NPL",
    "Kirtipur NPL 2026",
  ],
  content: `<p>The third season of the Nepal Premier League is set to return on <strong>October 26, 2026</strong>, with the competition scheduled to continue until <strong>November 21</strong>. The Cricket Association of Nepal (CAN) has confirmed the dates as preparations begin for another season of franchise T20 cricket.</p>
<p>The upcoming campaign will feature eight teams and 32 matches, with all games taking place at the Tribhuvan University International Cricket Ground in Kirtipur.</p>
<h2>Eight Franchises Ready for the New Season</h2>
<p>The 2026 competition will bring together eight established NPL franchises, each led by a prominent Nepalese cricketer and supported by experienced coaching staff.</p>
<p><strong>Kathmandu Gurkhas</strong> will be led by Karan KC, with Monty Desai as head coach. Rohit Paudel will captain <strong>Lumbini Lions</strong>, while Nandan Phadnis takes charge of the coaching role.</p>
<p>The other six teams are:</p>
<ul class="list-disc pl-6 my-4 space-y-2 text-slate-200">
<li><strong><a href="/teams/kathmandu-gurkhas/" class="text-emerald-400 hover:text-emerald-300">Kathmandu Gurkhas</a></strong> — Karan KC, Captain | Monty Desai, Coach</li>
<li><strong><a href="/teams/lumbini-lions/" class="text-emerald-400 hover:text-emerald-300">Lumbini Lions</a></strong> — Rohit Paudel, Captain | Nandan Phadnis, Coach</li>
<li><strong><a href="/teams/biratnagar-kings/" class="text-emerald-400 hover:text-emerald-300">Biratnagar Kings</a></strong> — Sandeep Lamichhane, Captain | Kevin O'Brien, Coach</li>
<li><strong><a href="/teams/chitwan-rhinos/" class="text-emerald-400 hover:text-emerald-300">Chitwan Rhinos</a></strong> — Kushal Malla, Captain | Kalam Ali, Coach</li>
<li><strong><a href="/teams/janakpur-bolts/" class="text-emerald-400 hover:text-emerald-300">Janakpur Bolts</a></strong> — Anil Sah, Captain | Shivnarine Chanderpaul, Coach</li>
<li><strong><a href="/teams/pokhara-avengers/" class="text-emerald-400 hover:text-emerald-300">Pokhara Avengers</a></strong> — Kushal Bhurtel, Captain | Rajiv Kumar, Coach</li>
<li><strong><a href="/teams/karnali-yaks/" class="text-emerald-400 hover:text-emerald-300">Karnali Yaks</a></strong> — Sompal Kami, Captain | Gyanendra Malla, Coach</li>
<li><strong><a href="/teams/sudurpaschim-royals/" class="text-emerald-400 hover:text-emerald-300">Sudurpaschim Royals</a></strong> — Dipendra Singh Airee, Captain | Jagat Tamata, Coach</li>
</ul>
<h2>All Matches to Take Place in Kirtipur</h2>
<p>Unlike multi-venue competitions, the entire NPL 2026 campaign will be played at one ground.</p>
<p>The <strong><a href="/npl-venue/tribhuvan-university-cricket-ground-kirtipur/" class="text-emerald-400 hover:text-emerald-300">Tribhuvan University International Cricket Ground in Kirtipur</a></strong> will host all 32 matches. The stadium has a reported capacity of approximately 13,000 and has become one of the most important cricket venues in Nepal.</p>
<p>Keeping the competition at a single venue will give teams familiar playing conditions throughout the season while also allowing supporters to follow matches at the same location.</p>
<h2>How the NPL 2026 Competition Will Work</h2>
<p>The league will begin with a <strong>single round-robin stage</strong>, followed by the playoff matches that will determine the finalists and eventual champion.</p>
<p>The total prize pool for the competition is <strong>NPR 2.01 crore</strong>. During the player auction, franchises were provided with an overall auction purse of more than <strong>NPR 8.5 crore</strong>.</p>
<p>With eight teams competing over 32 matches, the league stage will provide plenty of opportunities for each franchise to build momentum before the playoffs.</p>
<h2>Previous NPL Champions</h2>
<p>The first NPL championship was won by <strong>Janakpur Bolts in 2024</strong>. Lumbini Lions then became champions in 2025.</p>
<p>Sudurpaschim Royals have also been involved in previous title contests but have yet to secure the championship. The 2026 season gives them another opportunity to challenge for the trophy.</p>
<h2>NPL 2026 Broadcast and Live Streaming</h2>
<p>Fans across the region will have several options for following the tournament.</p>
<p><strong>Star Sports</strong> is set to provide television coverage across India and South Asia, while <strong>Kantipur Max TV</strong> will show the matches in Nepal.</p>
<p>Online viewers in Nepal will be able to follow the action through <strong>DishHome GO</strong>, while <strong>FanCode</strong> will provide streaming coverage for audiences in India.</p>
<h2>When Does NPL 2026 Start?</h2>
<p>The opening match of the third Nepal Premier League season is scheduled for <strong>October 26, 2026</strong>, with the tournament running until November 21.</p>
<p>CAN is expected to provide further details about the individual fixtures, match timings, and ticket arrangements as the season approaches.</p>
<p>For the latest <strong>NPL 2026 fixtures, match dates, results, points table, teams, and playoff information</strong>, follow the latest updates as the tournament schedule is released.</p>`,
}

/** Exact copy — wording unchanged */
export const nplScheduleDatesNews: DocxNewsArticle = {
  id: "25",
  slug: "npl-2026-schedule-season-3-starts-october-26-final-november-21",
  title: "NPL 2026 Schedule: Season 3 Starts October 26, Final November 21",
  date: "August 11, 2026",
  summary:
    "NPL 2026 Schedule: Season 3 starts on October 26 and ends on November 21. Full fixtures are yet to be announced after the domestic auction.",
  imageTitle: "NPL 2026 Schedule: Season 3 Starts October 26, Final November 21",
  imageAlt: "NPL 2026 Schedule Season 3 starts October 26 final November 21",
  imageCaption:
    "NPL 2026 Schedule: Season 3 starts on October 26 and ends on November 21. Full fixtures are yet to be announced after the domestic auction.",
  image: news23,
  keywords: [
    "NPL 2026 Schedule",
    "October 26",
    "November 21",
    "NPL Season 3",
    "CAN announcement",
    "Dashain NPL",
    "Kirtipur",
  ],
  content: `<p>The Cricket Association of Nepal (CAN) has announced the dates for the third season of the Nepal Premier League (NPL), with the tournament set to begin on October 26, 2026.</p>
<p>According to the announcement, the NPL 2026 final will be played on November 21. The tournament is therefore expected to take place during the Dashain festival period, as had been widely anticipated.</p>
<p>The full fixture list has not been released yet, so match-by-match dates and timings are still awaited.</p>
<p>The tournament organisers conducted the domestic player auction on July 6, while franchises are currently working on their overseas player signings ahead of Season 3. <a href="/auction" class="text-[#c8102e] underline underline-offset-2">NPL 2026 Auction</a> provides the latest details on the squads and player selections.</p>
<p>The <a href="/schedule" class="text-[#c8102e] underline underline-offset-2">NPL 2026 Schedule</a> will be updated with the complete fixtures, match timings and venues once the official schedule is released.</p>
<p>The Tribhuvan University International Cricket Ground in Kirtipur is expected to remain the main venue for the third consecutive season, although the final venue arrangements have yet to be officially confirmed.</p>
<p>It is also not yet clear whether NPL matches will continue during the Tihar festival, which is scheduled from November 6 to November 12.</p>
<p><strong>Source:</strong> The Cricket Association of Nepal (CAN), as reported by <a href="https://kathmandupost.com/sports/2026/08/08/npl-season-3-to-begin-on-october-26-final-on-november-21" target="_blank" rel="noopener noreferrer" class="text-[#c8102e] underline underline-offset-2">The Kathmandu Post</a>.</p>`,
}


