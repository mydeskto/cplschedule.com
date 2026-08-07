interface FAQItem {
  question: string;
  answer: string;
}

interface ForeignPlayer {
  team: string;
  teamLink?: string;
  players: string;
}

interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  imageTitle?: string;
  imageAlt?: string;
  imageCaption?: string;
  image: string | { src: string };
  faq?: FAQItem[];
  foreignPlayers?: ForeignPlayer[];
  keywords?: string[];
}

import news1 from '@/public/images/news/news1.jpeg';

import news20 from "@/public/images/news/news20.jpeg"
import news21 from "@/public/images/news/news21.jpeg"
import { ticketsPricingNews, schedulePreviewNews } from "@/data/news-articles-from-docx"

export const newsArticles: NewsArticle[] = [
  ticketsPricingNews,
  schedulePreviewNews,
  {
    id: "14",
    slug: "npl-t20-2026-can-confirms-third-season-eight-teams",
    title: " Nepal Premier League T20 2026: CAN Confirms Third Season with Eight Teams",
    date: "February 20, 2026",
    summary: "The Cricket Association of Nepal confirms NPL T20 2026 for October-November, featuring eight teams and 32 matches. Lumbini Lions defend their title as fans await full fixtures and venues.",
    imageTitle: " Nepal Premier League T20 2026: CAN Confirms Third Season with Eight Teams",
    imageAlt: "Nepal Premier League T20 2026 confirmed by Cricket Association of Nepal with eight teams",
    imageCaption: "CAN confirms NPL T20 2026 for October-November with eight teams and 32 matches.",
    image: news1.src,
    keywords: [
      "NPL T20 2026",
      "Nepal Premier League 2026",
      "Cricket Association of Nepal",
      "NPL T20 third season",
      "Lumbini Lions",
      "Nepal cricket 2026",
      "NPL fixtures 2026",
      "TU Cricket Ground Kirtipur"
    ],
    content: `<p>Kathmandu, February 20, 2026 – The Cricket Association of Nepal (CAN) has officially confirmed the third season of the Nepal Premier League (NPL) T20, set for October-November 2026. This season marks a major milestone in Nepal's domestic cricket, highlighting the country's growing talent and ambition on the international stage.</p>

<h2>Key Announcements</h2>

<p>CAN has finalized the <a href="/" class="text-[#f26522] underline transition-colors">NPL 2026 schedule</a> for late October to November, shifting slightly earlier than previous seasons to avoid colder weather. The tournament will feature eight teams competing in a double round-robin format followed by playoffs, culminating in the final at <a href="/npl-venue/tribhuvan-university-cricket-ground-kirtipur/" class="text-white hover:text-[#c49563] underline transition-colors">TU Cricket Ground, Kirtipur</a>. The league aims to nurture emerging talent while providing high-quality competitive cricket for fans.</p>

<p>The Lumbini Lions enter as defending champions after their 2025 triumph.</p>

<h2>Participating Teams</h2>

<p>The confirmed eight teams for this season are:</p>

<ul>
<li>Janakpur Bolts</li>
<li>Kathmandu Gorkhas</li>
<li>Chitwan Rhinos</li>
<li>Karnali Yaks</li>
<li>Biratnagar Kings</li>
<li>Pokhara Avengers</li>
<li>Sudurpashchim Royals</li>
<li>Lumbini Lions</li>
</ul>

<p>Matches will take place across multiple venues in Nepal, with a total of around 32 games expected. Full fixtures and timings are yet to be released and will be shared on official NPL channels soon. You can check the NPL 2026 schedule or on TU Cricket Ground, Kirtipur.</p>

<h2>Broader Context</h2>

<p>CAN released Nepal's full 2026 cricket calendar on January 4, positioning NPL T20 after an ICC CWC League 2 tri-series in October to ensure maximum participation. This comes following Nepal's international commitments, including the <a href="https://en.wikipedia.org/wiki/Men%27s_T20_World_Cup" target="_blank" rel="noopener noreferrer" class="text-white hover:text-[#c49563] underline transition-colors">T20 World Cup</a> in February-March. The league is part of Nepal's ongoing effort to strengthen domestic cricket, attract Test-playing nations, and provide a platform for young cricketers.</p>

<h2>What Fans Can Expect</h2>

<p>Fans can look forward to high-octane T20 action, combining experienced players with emerging stars. The league promises thrilling contests, team rivalries, and a chance to witness Nepal's cricket talent grow in a competitive environment. Updates on fixtures, venues, and tickets will be available through official NPL platforms.</p>`
  },
{
      id: "20",
      slug: "npl-2026-auction-results-full-player-list-team-squads-biggest-buys",
      title: "NPL 2026 Auction Results: Full Player List, Team Squads & Biggest Buys",
      date: "May 10, 2026",
      summary:
        "Get the complete NPL 2026 auction results, including the full player list, sold and unsold players, team squads, highest bids, and updated Nepal Premier League Season 3 lineups.",
      image: news20,
      keywords: [
        "NPL 2026 auction results",
        "NPL 2026 auction",
        "Nepal Premier League Season 3",
        "NPL player list",
        "team squads NPL 2026",
        "biggest buys NPL 2026",
        "unsold players NPL",
        "15 Lakh NPR",
        "Mohammad Aadil Alam",
        "Kathmandu Gurkhas",
      ],
      faq: [
        {
          question: "When was the NPL 2026 auction held?",
          answer:
            "The auction took place on 9 August 2026 in Kathmandu.",
        },
        {
          question: "Who were the highest-paid players?",
          answer:
            "Arjun Saud, Dev Khanal, Pawan Sarraf, and Mohammad Aadil Alam were the highest-paid players at 15 Lakh NPR.",
        },
        {
          question: "How many teams are playing in NPL 2026?",
          answer: "A total of 8 teams are participating in the tournament.",
        },
        {
          question: "When does the Nepal Premier League 2026 begin?",
          answer:
            "The tournament is scheduled to run from October to November 2026.",
        },
      ],
      content: `
<p class="text-lg mb-4">The Nepal Premier League 2026 auction has added fresh excitement ahead of Season 3, with franchises focusing heavily on squad balance, overseas experience, and proven match-winners. From high-value local stars to international signings, the auction revealed how seriously teams are preparing for what could become the most competitive NPL season so far.</p>
<p class="text-lg mb-4">Several franchises targeted all-rounders and spin options, showing that teams are already planning around the conditions expected at the Tribhuvan University International Cricket Ground in Kirtipur.</p>
<p class="text-lg mb-4">Fans looking for complete auction coverage, player prices, updated squads, and unsold stars can find everything in this guide.</p>
<p class="text-lg mb-4">👉 Related: <a href="/schedule/" target="_blank" class="text-emerald-400 hover:text-emerald-300">NPL 2026 Schedule</a></p>
<h2 class="text-xl font-bold mt-6 mb-4">NPL 2026 Auction Overview</h2>
<p class="text-lg mb-4">The Nepal Premier League continues to grow in popularity, attracting both domestic talent and experienced overseas cricketers. This year’s auction reflected a clear shift toward building deeper squads rather than relying only on star players.</p>
<p class="text-lg mb-4">Every franchise entered the auction with different priorities:</p>
<ul class="list-disc pl-6 my-4 space-y-2 text-slate-200"><li>Some teams strengthened their batting depth</li><li>Others focused on experienced bowlers and finishers</li><li>A few franchises invested heavily in proven all-rounders</li></ul>
<p class="text-lg mb-4">That strategic variation could play a major role once the tournament enters the playoff stage.</p>
<h2 class="text-xl font-bold mt-6 mb-4">Quick Auction Facts</h2>
<ul class="list-disc pl-6 my-4 space-y-2 text-slate-200"><li>Auction Date: 9 August 2026</li><li>Venue: Kathmandu</li><li>Total Registered Players: 458</li><li>Shortlisted Players: 150</li><li>Players Sold: 37</li><li>Highest Bid: 15 Lakh NPR</li></ul>
<p class="text-lg mb-4">The auction showed that franchises were more selective this season, preferring quality signings over large squad additions.</p>
<h2 class="text-xl font-bold mt-6 mb-4">Highest-Paid Players in NPL 2026 Auction</h2>
<p class="text-lg mb-4">A few players attracted major bids after strong domestic performances and consistent recent form.</p>
<h3 class="text-lg font-semibold mt-4 mb-2">Top Buys (15 Lakh NPR)</h3>
<table class="w-full border-collapse border border-gray-600 my-6"><thead><tr><th class="border border-gray-600 px-4 py-3 text-left text-emerald-400 font-semibold">Player</th><th class="border border-gray-600 px-4 py-3 text-left text-emerald-400 font-semibold">Team</th><th class="border border-gray-600 px-4 py-3 text-left text-emerald-400 font-semibold">Price</th></tr></thead><tbody><tr><td class="border border-gray-600 px-4 py-3">Arjun Saud</td><td class="border border-gray-600 px-4 py-3">Chitwan Rhinos</td><td class="border border-gray-600 px-4 py-3">15 Lakh</td></tr><tr><td class="border border-gray-600 px-4 py-3">Dev Khanal</td><td class="border border-gray-600 px-4 py-3">Chitwan Rhinos</td><td class="border border-gray-600 px-4 py-3">15 Lakh</td></tr><tr><td class="border border-gray-600 px-4 py-3">Pawan Sarraf</td><td class="border border-gray-600 px-4 py-3">Karnali Yaks</td><td class="border border-gray-600 px-4 py-3">15 Lakh</td></tr><tr><td class="border border-gray-600 px-4 py-3">Mohammad Aadil Alam</td><td class="border border-gray-600 px-4 py-3">Kathmandu Gurkhas</td><td class="border border-gray-600 px-4 py-3">15 Lakh</td></tr></tbody></table>
<p class="text-lg mb-4">Chitwan Rhinos made one of the strongest statements during the auction by securing both Arjun Saud and Dev Khanal, signaling their intent to build a powerful local core.</p>
<p class="text-lg mb-4">Kathmandu Gurkhas also attracted attention by investing heavily in Mohammad Aadil Alam, who is expected to play an important all-round role this season.</p>
<p class="text-lg mb-4">👉 Also Check: <a href="/points-table/" target="_blank" class="text-emerald-400 hover:text-emerald-300">NPL 2026 Points Table</a></p>
<h2 class="text-xl font-bold mt-6 mb-4">Other Important Auction Picks</h2>
<p class="text-lg mb-4">Several smart mid-range signings could quietly become season-defining additions.</p>
<table class="w-full border-collapse border border-gray-600 my-6"><thead><tr><th class="border border-gray-600 px-4 py-3 text-left text-emerald-400 font-semibold">Player</th><th class="border border-gray-600 px-4 py-3 text-left text-emerald-400 font-semibold">Team</th><th class="border border-gray-600 px-4 py-3 text-left text-emerald-400 font-semibold">Price</th></tr></thead><tbody><tr><td class="border border-gray-600 px-4 py-3">Yuvraj Khatri</td><td class="border border-gray-600 px-4 py-3">Karnali Yaks</td><td class="border border-gray-600 px-4 py-3">10 Lakh</td></tr><tr><td class="border border-gray-600 px-4 py-3">Dilip Nath</td><td class="border border-gray-600 px-4 py-3">Lumbini Lions</td><td class="border border-gray-600 px-4 py-3">10 Lakh</td></tr><tr><td class="border border-gray-600 px-4 py-3">Surya Tamang</td><td class="border border-gray-600 px-4 py-3">Biratnagar Kings</td><td class="border border-gray-600 px-4 py-3">10 Lakh</td></tr><tr><td class="border border-gray-600 px-4 py-3">Santosh Yadav</td><td class="border border-gray-600 px-4 py-3">Kathmandu Gurkhas</td><td class="border border-gray-600 px-4 py-3">10 Lakh</td></tr></tbody></table>
<p class="text-lg mb-4">These players may not have grabbed the biggest headlines, but their versatility and domestic experience could prove valuable during pressure matches.</p>
<h2 class="text-xl font-bold mt-6 mb-4">Unsold Players Who Surprised Fans</h2>
<p class="text-lg mb-4">A few experienced names surprisingly remained unsold during the auction.</p>
<ul class="list-disc pl-6 my-4 space-y-2 text-slate-200"><li>Sharad Vesawkar</li><li>Sunam Gautam</li><li>Pradeep Airee</li><li>Bibek Yadav</li><li>Raju Rijal</li><li>Sandeep Sunar</li></ul>
<p class="text-lg mb-4">However, replacement signings later in the tournament remain possible, especially if injuries affect squad balance.</p>
<h2 class="text-xl font-bold mt-6 mb-4">Updated NPL 2026 Team Squads After Auction</h2>
<p class="text-lg mb-4"><strong>Biratnagar Kings</strong></p>
<p class="text-lg mb-4">Biratnagar Kings have built an experienced squad featuring Faf du Plessis, Martin Guptill, and Sandeep Lamichhane. Their combination of overseas batting strength and spin experience makes them one of the strongest balanced teams on paper.</p>
<p class="text-lg mb-4"><strong>Chitwan Rhinos</strong></p>
<p class="text-lg mb-4">With Dev Khanal, Kushal Malla, Dawid Malan, and Ravi Bopara, Chitwan Rhinos appear well-equipped for different match situations. Their squad depth looks particularly strong in the middle order.</p>
<p class="text-lg mb-4"><strong>Janakpur Bolts</strong></p>
<p class="text-lg mb-4">Janakpur Bolts added international experience through players like Imran Tahir and Wayne Parnell while maintaining a solid local bowling unit.</p>
<p class="text-lg mb-4"><strong>Karnali Yaks</strong></p>
<p class="text-lg mb-4">Karnali Yaks focused heavily on all-round strength around Pawan Sarraf and Sompal Kami, giving them flexibility in both batting and bowling.</p>
<p class="text-lg mb-4"><strong>Kathmandu Gurkhas</strong></p>
<p class="text-lg mb-4">Kathmandu Gurkhas arguably assembled one of the most high-profile squads with Rashid Khan, Karan KC, and Mohammad Aadil Alam leading the lineup.</p>
<p class="text-lg mb-4"><strong>Lumbini Lions</strong></p>
<p class="text-lg mb-4">Lumbini Lions strengthened their middle order with experienced names including Rohit Paudel, Gulbadin Naib, and D'Arcy Short.</p>
<p class="text-lg mb-4"><strong>Pokhara Avengers</strong></p>
<p class="text-lg mb-4">The Pokhara Avengers appear to be backing an aggressive approach to cricket, with attacking players like Kushal Bhurtel and Adam Rossington.</p>
<p class="text-lg mb-4"><strong>Sudurpaschim Royals</strong></p>
<p class="text-lg mb-4">Sudurpaschim Royals added experience through Dipendra Singh Airee and Chris Lynn, giving them proven match-winners for pressure situations.</p>
<p class="text-lg mb-4">👉 Full squads: <a href="https://nplt20league.com/teams/" target="_blank" class="text-emerald-400 hover:text-emerald-300">NPL 2026 Team Squad</a></p>
<h2 class="text-xl font-bold mt-6 mb-4">Latest NPL 2026 Updates</h2>
<ul class="list-disc pl-6 my-4 space-y-2 text-slate-200"><li>Sumit Maharjan replaced injured Bibek Yadav for Lumbini Lions</li><li>Tournament window remains October–November 2026</li><li>All matches will be played in Kirtipur</li></ul>
<p class="text-lg mb-4">👉 Venue details: <a href="/npl-venue/tribhuvan-university-cricket-ground-kirtipur/" target="_blank" class="text-emerald-400 hover:text-emerald-300">Tribhuvan University International Cricket Ground</a></p>
<h2 class="text-xl font-bold mt-6 mb-4">What to Expect This Season</h2>
<p class="text-lg mb-4">The NPL 2026 season looks more balanced than previous editions, which could lead to tighter playoff races and more close finishes.</p>
<p class="text-lg mb-4">A few factors may shape the tournament:</p>
<ul class="list-disc pl-6 my-4 space-y-2 text-slate-200"><li>Spin bowlers could dominate middle overs</li><li>All-rounders may become match-winning assets</li><li>Squad depth will matter during back-to-back fixtures</li><li>Teams handling pressure better could gain a major advantage</li></ul>
<p class="text-lg mb-4">With multiple franchises appearing evenly matched, consistency rather than star power alone may decide the eventual champion</p>
<h2 class="text-xl font-bold mt-6 mb-4">FAQs – NPL 2026 Auction</h2>`,
    },
    {
      id: "21",
      slug: "npl-players-2026-auction-full-squads-top-buys-team-analysis",
      title:
        "NPL Players 2026 Auction: Full Squads, Top Buys & Team Analysis",
      date: "May 10, 2026",
      summary:
        "Explore the complete NPL Players 2026 auction details, including full squads, player prices, top buys, team updates, international stars, and key Nepal Premier League Season 3 insights.",
      image: news21,
      keywords: [
        "NPL Players 2026 auction",
        "NPL 2026 full squads",
        "top buys NPL",
        "team analysis NPL 2026",
        "Mohammad Adil Alam",
        "Kathmandu Gorkhas",
        "Nepal Premier League Season 3",
      ],
      faq: [
        {
          question:
            "How many players were shortlisted for NPL Players 2026?",
          answer:
            "A total of 150 players were shortlisted from 458 registered candidates.",
        },
        {
          question: "When was the NPL Players 2026 auction held?",
          answer:
            "The auction took place on 9 August 2026 in Kathmandu.",
        },
        {
          question: "How many teams are participating in NPL 2026?",
          answer: "A total of 8 teams are competing in the tournament.",
        },
        {
          question: "What were the highest bids in the auction?",
          answer:
            "The highest bids reached 15 Lakh NPR, including players like Arjun Saud and Dev Khanal.",
        },
        {
          question: "Can unsold players still join the tournament?",
          answer:
            "Yes, unsold players may still join later through injury replacements or squad changes during the season.",
        },
      ],
      content: `
<p class="text-lg mb-4">The NPL Players 2026 auction has officially shaped the foundation for another highly competitive Nepal Premier League season. With franchises investing heavily in squad balance, overseas experience, and emerging domestic talent, the tournament now looks stronger and more unpredictable than ever.</p>
<p class="text-lg mb-4">This year’s auction generated major attention across Nepal's cricket circles, especially after several high-profile signings and aggressive bidding wars. Teams focused not only on star players but also on building flexible squads capable of handling pressure situations throughout the tournament.</p>
<p class="text-lg mb-4">From record-breaking bids to surprising unsold names, the auction has already created strong talking points ahead of the upcoming season.</p>
<p class="text-lg mb-4">👉 Related: <a href="/" target="_blank" class="text-emerald-400 hover:text-emerald-300">NPL 2026 Schedule</a></p>
<h2 class="text-xl font-bold mt-6 mb-4">NPL Players 2026 Auction Overview</h2>
<p class="text-lg mb-4">The Nepal Premier League continues to grow rapidly, with stronger organization, international player participation, and increasing fan engagement helping the tournament gain wider recognition.</p>
<p class="text-lg mb-4">The NPL Players 2026 auction took place on 9 August 2026 in Kathmandu and featured a highly competitive selection process.</p>
<h2 class="text-xl font-bold mt-6 mb-4">Quick Auction Facts</h2>
<ul class="list-disc pl-6 my-4 space-y-2 text-slate-200"><li>Total Registered Players: 458</li><li>Shortlisted Players: 150</li><li>Players Sold: 37</li><li>Tournament Teams: 8</li><li>Highest Bid: 15 Lakh NPR</li></ul>
<p class="text-lg mb-4">Unlike previous seasons, franchises appeared more strategic and disciplined during bidding. Teams focused heavily on all-rounders, adaptable players, and squad depth rather than simply chasing big names.</p>
<p class="text-lg mb-4">That approach could become a major factor once the tournament enters the playoff stage.</p>
<h2 class="text-xl font-bold mt-6 mb-4">Highest-Paid Players in NPL 2026 Auction</h2>
<p class="text-lg mb-4">Several players attracted major bids after strong domestic performances and consistent recent form.</p>
<h3 class="text-lg font-semibold mt-4 mb-2">Top Auction Buys (15 Lakh NPR)</h3>
<table class="w-full border-collapse border border-gray-600 my-6"><thead><tr><th class="border border-gray-600 px-4 py-3 text-left text-emerald-400 font-semibold">Player</th><th class="border border-gray-600 px-4 py-3 text-left text-emerald-400 font-semibold">Team</th><th class="border border-gray-600 px-4 py-3 text-left text-emerald-400 font-semibold">Price</th></tr></thead><tbody><tr><td class="border border-gray-600 px-4 py-3">Arjun Saud</td><td class="border border-gray-600 px-4 py-3"><a href="https://nplt20league.com/teams/chitwan-rhinos/" class="text-emerald-400 hover:text-emerald-300" target="_blank">Chitwan Rhinos</a></td><td class="border border-gray-600 px-4 py-3">15 Lakh</td></tr><tr><td class="border border-gray-600 px-4 py-3">Dev Khanal</td><td class="border border-gray-600 px-4 py-3"><a href="https://nplt20league.com/teams/chitwan-rhinos/" class="text-emerald-400 hover:text-emerald-300" target="_blank">Chitwan Rhinos</a></td><td class="border border-gray-600 px-4 py-3">15 Lakh</td></tr><tr><td class="border border-gray-600 px-4 py-3">Pawan Sarraf</td><td class="border border-gray-600 px-4 py-3"><a href="https://nplt20league.com/teams/karnali-yaks/" class="text-emerald-400 hover:text-emerald-300" target="_blank">Karnali Yaks</a></td><td class="border border-gray-600 px-4 py-3">15 Lakh</td></tr><tr><td class="border border-gray-600 px-4 py-3">Mohammad Adil Alam</td><td class="border border-gray-60₀ px-4 py=3"><a href="https://nplt2₀league.com/teams/kathmandu-gorkhas/" class="text-emerald-4₀ hover:text-emerald-three" target="_blank">Kathmandu Gorkhas</a></td><td class="border border-gray-six hundred px-four py-three">15 Lakh</td></tr></tbody></table>
<p class="text-lg mb-four">Chitwan Rhinos made one of the strongest auction statements by securing both Arjun Saud and Dev Khanal. Their aggressive investment suggests a clear focus on building a powerful batting core around proven domestic performers.</p>
<p class="text-lg mb-four">Kathmandu Gorkhas also strengthened significantly with Mohammad Adil Alam, who adds valuable all-around balance to the squad</p>
<h2 class="text-xl font-bold mt-six mb-four">Why NPL Players 2₀₂₆ Is Generating So Much Attention</h2>
<p class="text-lg mb-four">The Nepal Premier League is no longer viewed as just a local domestic tournament. The involvement of overseas players and experienced international cricketers has helped increase regional interest around the competition.</p>
<p class="text-lg mb-four">Players such as Chris Lynn and Faf du Plessis have added extra excitement ahead of the season, while improved tournament organization has also strengthened the league’s reputation.</p>
<p class="text-lg mb-4">Several factors are contributing to the growing attention:</p>
<ul class="list-disc pl-6 my-4 space-y-2 text-slate-200"><li>Stronger and more balanced squads</li><li>International player involvement</li><li>Improved scheduling and tournament structure</li><li>Growing fan engagement across Nepalese cricket</li></ul>
<p class="text-lg mb-4">With 32 matches scheduled from October to November 2026, fans are expecting one of the most competitive NPL editions so far.</p>
<h2 class="text-xl font-bold mt-6 mb-4">Teams With the Strongest Squads After the Auction</h2>
<p class="text-lg mb-4">A few franchises stand out after the auction due to smart squad construction and overall balance.</p>
<table class="w-full border-collapse border border-gray-600 my-6"><thead><tr><th class="border border-gray-600 px-4 py-3 text-left text-emerald-400 font-semibold">Team</th><th class="border border-gray-600 px-4 py-3 text-left text-emerald-400 font-semibold">Key Retentions</th><th class="border border-gray-600 px-4 py-3 text-left text-emerald-400 font-semibold">Top Auction Buys</th></tr></thead><tbody><tr><td class="border border-gray-600 px-4 py-3">Janakpur Bolts</td><td class="border border-gray-600 px-4 py-3">Aasif Sheikh, Lalit Rajbanshi</td><td class="border border-gray-600 px-4 py-3">Mayan Yadav</td></tr><tr><td class="border border-gray-600 px-4 py-3">Kathmandu Gorkhas</td><td class="border border-gray-600 px-4 py-3">Karan KC, Rashid Khan</td><td class="border border-gray-600 px-4 py-3">Mohammad Adil Alam</td></tr><tr><td class="border border-gray-600 px-4 py-3">Karnali Yaks</td><td class="border border-gray-600 px-4 py-3">Sompal Kami</td><td class="border border-gray-600 px-4 py-3">Pawan Sarraf</td></tr><tr><td class="border border-gray-600 px-4 py-3">Chitwan Rhinos</td><td class="border border-gray-600 px-4 py-3">Kushal Malla</td><td class="border border-gray-600 px-4 py-3">Arjun Saud, Dev Khanal</td></tr><tr><td class="border border-gray-600 px-4 py-3">Sudurpaschim Royals</td><td class="border border-gray-600 px-4 py-3">Dipendra Singh Airee</td><td class="border border-gray-600 px-4 py-3">Chris Lynn, Josh Brown</td></tr></tbody></table>
<p class="text-lg mb-4">Chitwan Rhinos arguably built the strongest domestic core, while Sudurpaschim Royals focused heavily on overseas firepower and aggressive batting depth.</p>
<p class="text-lg mb-4">One interesting trend this season is that franchises appear to be prioritizing match-winners and flexible performers over purely star-based signings.</p>
<p class="text-lg mb-4">👉 Full squads: <a href="/teams/" target="_blank" class="text-emerald-400 hover:text-emerald-300">NPL 2026 Team Squads</a></p>
<h2 class="text-xl font-bold mt-6 mb-4">NPL Auction Categories Explained</h2>
<p class="text-lg mb-4">To maintain competitive balance, players were divided into three categories during the auction.</p>
<p class="text-lg mb-4"><strong>Category A</strong></p>
<p class="text-lg mb-4">Top-level national and international players with proven performances and strong experience.</p>
<p class="text-lg mb-4"><strong>Category B</strong></p>
<p class="text-lg mb-4">Reliable domestic performers with consistent recent form and tournament experience.</p>
<p class="text-lg mb-4"><strong>Category C</strong></p>
<p class="text-lg mb-4">Young and emerging players with long-term development potential.</p>
<p class="text-lg mb-4">This category structure allows teams to balance budgets while still building competitive squads.</p>
<p class="text-lg mb-4">In modern T20 cricket, successful teams often depend heavily on emerging talent rather than only established stars. That trend is now becoming increasingly visible in the Nepal Premier League as well.</p>
<p class="text-lg mb-4">The NPL Players 2026 auction has laid the groundwork for a highly competitive season filled with balanced squads, experienced overseas players, and emerging domestic talent.</p>
<p class="text-lg mb-4">While a few teams appear stronger on paper, T20 cricket often rewards adaptability, momentum, and smart decision-making under pressure. With multiple franchises looking evenly matched, fans can expect intense playoff races and closely contested matches throughout the tournament.</p>`,
    }
];
