interface FAQItem {
  question: string;
  answer: string;
}

interface ForeignPlayer {
  team: string;
  teamLink?: string;
  players: string;
}

interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  image: string | { src: string };
  faq?: FAQItem[];
  foreignPlayers?: ForeignPlayer[];
  keywords?: string[];
}

import blog1 from '@/public/images/blog/blog1.jpeg'
import news1 from '@/public/images/news/BPL Tickets 2026.webp';
import blog3 from '@/public/images/blog/blog-3.jpeg'
import blog4 from '@/public/images/blog/blog4.jpeg'


export const blogArticles: BlogArticle[] = [
//   {
//     id: "7",
//     slug: "how-to-watch-CPL-2026-live-worldwide-tv-channels-streaming-guide",
//     title: "How to Watch CPL 2026 Live Worldwide | TV Channels & Streaming Guide",
//     date: "December 26, 2025",
//     summary: "Watch CPL 2026 live from anywhere in the world. Find country wise TV channels and online streaming options for Bangladesh, Pakistan, India, USA, Middle East, and more.",
//     image: blog4,
//     keywords: [
//       "CPL 2026 live streaming",
//       "watch CPL 2026 online",
//       "CPL TV channels",
//       "CPL streaming worldwide",
//       "CPL 2026 broadcast"
//     ],
//     content: `<p class="text-white my-2">The Coastal Premier League 2026 begins today, December 26, and runs until January 23, bringing a full month of T20 action. With top local stars and international players in action, fans around the world have plenty of ways to follow every match live. Below is a clear, country wise guide on where and how to watch CPL 2026 on TV and online, written for easy access and reliability.</p>

// <h2 class="text-xl font-bold text-white mt-6 mb-4">Watch CPL 2026 Live in Bangladesh</h2>

// <p class="text-white my-2">Cricket fans in Bangladesh can watch all matches live on television through T Sports and Nagorik TV, both broadcasting directly from the venues.</p>

// <p class="text-white my-2">For online viewing, live streaming is available on Tapmad and the Akash Go app, making it easy to watch on mobile or smart devices.</p>

// <h2 class="text-xl font-bold text-white mt-6 mb-4">Watch CPL 2026 Live in Pakistan</h2>

// <p class="text-white my-2">The CPL continues to enjoy strong interest in Pakistan due to the presence of Pakistani players. Matches will be shown live on A Sports HD (ARY Sports).</p>

// <p class="text-white my-2">For digital viewers, streaming options include ARY Zap, Tamasha, Tapmad, and MYCO, covering the full tournament.</p>

// <h2 class="text-xl font-bold text-white mt-6 mb-4">Watch CPL 2026 Live in India</h2>

// <p class="text-white my-2">Indian fans can stream all Coastal Premier League matches exclusively on FanCode, available via app and web.</p>

// <h2 class="text-xl font-bold text-white mt-6 mb-4">Watch CPL 2026 Live in Sri Lanka</h2>

// <p class="text-white my-2">Viewers in Sri Lanka can follow the tournament live on Dialog TV and PEO TV.</p>

// <h2 class="text-xl font-bold text-white mt-6 mb-4">Watch CPL 2026 Live in Nepal</h2>

// <p class="text-white my-2">In Nepal, CPL 2026 matches will be available through Dish Home.</p>

// <h2 class="text-xl font-bold text-white mt-6 mb-4">Watch CPL 2026 Live in Afghanistan</h2>

// <p class="text-white my-2">Afghan cricket fans can watch the tournament live on Solh TV.</p>

// <h2 class="text-xl font-bold text-white mt-6 mb-4">Watch CPL 2026 Live in North America (USA, Canada, Mexico)</h2>

// <p class="text-white my-2">In North America, CPL matches will be broadcast on Willow TV.</p>

// <p class="text-white my-2">For digital streaming, viewers can use Willow TV's digital platform and DRM services.</p>

// <h2 class="text-xl font-bold text-white mt-6 mb-4">Watch CPL 2026 Live in the Caribbean</h2>

// <p class="text-white my-2">Fans across 27 Caribbean countries, including Jamaica, Guyana, Barbados, Trinidad & Tobago, and others, can watch all matches live on RUSH Sports.</p>

// <h2 class="text-xl font-bold text-white mt-6 mb-4">Watch CPL 2026 Live in Middle East & North Africa (MENA)</h2>

// <p class="text-white my-2">Viewers across the Middle East and North Africa, including UAE, Saudi Arabia, Qatar, Egypt, Morocco, and neighboring regions, can watch CPL 2026 free of charge via the official T Sports YouTube channel, making access simple and global.</p>

// <h2 class="text-xl font-bold text-white mt-6 mb-4">Final Note</h2>

// <p class="text-white my-2">Broadcast and streaming availability may vary slightly by region or device, so viewers are advised to check local listings or official apps before match time. With wide global coverage, CPL 2026 ensures fans won't miss a single ball, no matter where they are watching from.</p>

// <p class="text-white my-2">For ongoing match updates, schedules, and breaking news, follow trusted cricket platforms and official league broadcasters throughout the season.</p>`
//   },
 



];
