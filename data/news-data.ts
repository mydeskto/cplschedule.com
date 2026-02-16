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

import news2 from '@/public/images/news/news2.webp';
import news3 from '@/public/images/news/news3.webp';
import news4 from '@/public/images/news/news4.webp';
import news5 from '@/public/images/news/news5.webp';
import news6 from '@/public/images/news/news6.jpeg';
import news7 from '@/public/images/news/news7.jpeg';
import news8 from '@/public/images/news/news8.jpeg';
import news9 from '@/public/images/news/news9.jpeg';
import news10 from '@/public/images/news/news10.jpeg';
import news11 from '@/public/images/news/news11.jpeg';
import news12 from '@/public/images/news/news12.jpeg';
import news13 from '@/public/images/news/new13.jpeg';


export const newsArticles: NewsArticle[] = [
//   {
//     id: "13",
//     slug: "dhaka-capitals-vs-rajshahi-warriors-warriors-win-7-wickets-CPL-2025-26",
//     title: "Dhaka Capitals vs Rajshahi Warriors: Warriors win by 7 wickets in CPL 2025-26",
//     date: "January 12, 2026",
//     imageTitle: "Dhaka Capitals vs Rajshahi Warriors CPL 2025-26 match result",
//     imageAlt: "Rajshahi Warriors celebrate their 7-wicket victory over Dhaka Capitals in the 24th match of CPL 2025-26",
//     imageCaption: "Rajshahi Warriors sealed a 7-wicket win over Dhaka Capitals in the 24th match of the Coastal Premier League 2025-26 at Sylhet.",
//     summary: "Rajshahi Warriors chased down 132 to beat Dhaka Capitals by 7 wickets in the 24th match of CPL 2025-26 at Sylhet, led by a strong 76 from Tanzid Hasan.",
//     image: news13.src,
//     keywords: [
//       "Dhaka Capitals vs Rajshahi Warriors",
//       "CPL 2025-26 24th match",
//       "Rajshahi Warriors CPL 2025-26",
//       "Dhaka Capitals CPL 2025-26",
//       "Tanzid Hasan 76 runs",
//       "Abdul Gaffar Saqlain 4 wickets",
//       "CPL 2025-26 match result",
//       "Rajshahi Warriors win",
//       "CPL 2025-26 highlights",
//       "Coastal Premier League 2025-26"
//     ],
//     content: `<p>Rajshahi Warriors continued their steady rise in the Coastal Premier League 2025-26 with a composed seven-wicket victory over Dhaka Capitals in the 24th match of the tournament at the Sylhet International Cricket Stadium on Monday. A disciplined bowling effort followed by a controlled chase ensured Rajshahi completed the task with ease and strengthened their position in the points table.</p>

// <p>Batting first after winning the toss, <a href="/teams/dhaka-capitals/" className="text-white hover:text-[#c49563] underline transition-colors">Dhaka Capitals</a> struggled to build momentum and were bowled out for 131 in 20 overs, a total that never quite threatened a confident Rajshahi side. The Warriors responded with a measured batting display, reaching 132 for 3 in 16.1 overs, sealing the win with plenty of deliveries to spare.</p>

// <h2>Dhaka Capitals fail to capitalise after winning the toss</h2>

// <p>Dhaka Capitals began the match with intent after opting to bat, but early wickets disrupted their plans. While there were brief moments of resistance, the innings lacked sustained partnerships, making it difficult for the Capitals to post a competitive total on a surface that offered assistance to bowlers.</p>

// <p>Usman Khan was the standout performer for Dhaka, scoring a brisk 41 off 27 balls, striking the ball cleanly and providing some impetus in the middle overs. However, wickets continued to fall at regular intervals, and the lower order failed to add meaningful runs as the innings lost direction in the final phase.</p>

// <p>Rajshahi’s bowlers kept things tight throughout, applying pressure with disciplined lines and lengths. Abdul Gaffar Saqlain emerged as the pick of the bowlers, claiming four wickets and consistently breaking partnerships. He was well supported by Ripon Mondol, who picked up three wickets, ensuring Dhaka were restricted to a below-par score.</p>

// <h2>Tanzid Hasan anchors comfortable Rajshahi chase</h2>

// <p>In reply, <a href="/teams/rajshahi-warriors/" className="text-white hover:text-[#c49563] underline transition-colors">Rajshahi Warriors</a> approached the chase with clarity and composure. Openers laid a solid foundation, ensuring there was no early damage and keeping the required run rate well under control. The Capitals’ bowlers struggled to find breakthroughs, allowing Rajshahi to dictate terms from the outset.</p>

// <p>The chase was anchored by a confident innings from <a href="https://en.wikipedia.org/wiki/Tanzid_Hasan" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#c49563] underline transition-colors">Tanzid Hasan</a>, who top-scored with an impressive 76 off 43 deliveries. His knock combined timing with calculated aggression, effectively taking the game away from Dhaka during the middle overs. Tanzid found support from Muhammad Waseem, who contributed a quick 22 off 13 balls, further easing the pressure.</p>

// <p>Captain <a href="https://en.wikipedia.org/wiki/Najmul_Hossain_Shanto" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#c49563] underline transition-colors">Najmul Hossain Shanto</a> and the middle order ensured there were no late hiccups, guiding Rajshahi home without any drama and underlining the gap between the two sides on the day.</p>

// <h2>Match summary</h2>

// <p><strong>Dhaka Capitals:</strong> 131 all out (20 overs)</p>

// <p><strong>Rajshahi Warriors:</strong> 132/3 (16.1 overs)</p>

// <p><strong>Result:</strong> Rajshahi Warriors won by 7 wickets</p>

// <p><strong>Player of the Match:</strong> Tanzid Hasan</p>

// <p><strong>Venue:</strong> Sylhet International Cricket Stadium</p>

// <p>The win keeps Rajshahi Warriors firmly in contention as the <a href="/schedule/" className="text-white hover:text-[#c49563] underline transition-colors">CPL 2025-26</a> season progresses, highlighting their balanced combination and growing confidence. For Dhaka Capitals, the defeat exposed familiar batting concerns, and they will need to regroup quickly to remain competitive in the tournament.</p>

// <p>With the league entering a crucial phase, consistency will be key, and performances like this will give Rajshahi momentum heading into their upcoming fixtures.</p>`
//   },
  

];
