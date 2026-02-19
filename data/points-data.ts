import SylhetTitans from '@/public/images/teams/Sylhet Titans.jpg';
import ChattogramRoyals from '@/public/images/teams/Chattogram Royals.jpg';
import DhakaCapitals from '@/public/images/teams/Dhaka Capitals.jpg';
import NoakhaliExpress from '@/public/images/teams/Noakhali Express.jpg';
import RajshahiWarriors from '@/public/images/teams/Rajshahi Warriors.jpg';
import RangpurRiders from '@/public/images/teams/Rangpur Riders.png';
import { link } from 'fs';


export const pointsData = [
  {
    position: 1,
    team: "Sudurpaschim Royals",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391989-cqkiosfycHQHEu4PJ2g6C6yhvlVjoB.png",
    matches: 0,
    link: "/teams/sudurpaschim-royals/",
    won: 0,
    loss: 0,
    noResult: 0,
    netRunRate: "0.000",
    points: 0,
    des: "View the Sudurpaschim Royals 2026 squad, key players, and captain details for the NPL 2026 season",
    description: "The Sudurpaschim Royals combine top domestic and selected international players for NPL 2026. Fans can explore the full squad, player roles, captain info, and team updates throughout the season." ,
    quickLinks: [
      { name: "Match Schedule", link: "/schedule" },
      { name: "Points Table", link: "/points-table" },
      { name: "Tickets", link: "/tickets" },
      { name: "Venue Details", link: "/NPL-venue" }
    ] 
  },{
    position: 2,
    team: "Biratnagar Kings",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391936.jpg-jBF9Rx7IFzDMfn7a0tHzDrpXa3WZJX.jpeg",
    matches: 0,
    link: "/teams/biratnagar-kings/",
    won: 0,
    loss: 0,
    noResult: 0,
    netRunRate: "0.000",
    points: 0,
    des:"Explore the Biratnagar Kings squad, player roles, and performance stats for NPL 2026.",
    description: "Biratnagar Kings feature a balanced squad of batters, bowlers, all-rounders, and an experienced captain. Follow squad updates, top performers, and team news during NPL 2026.",
    quickLinks: [
      { name: "Fixtures", link: "/schedule" },
      { name: "Team Standings", link: "/points-table" },
      { name: "Book Tickets", link: "/tickets" },
      { name: "Match Venue Details", link: "/NPL-venue" }
    ]
  },
  {
    position: 3,
    team: "Kathmandu Gurkhas",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392043-kzYjrSVxDd6DR0xeVnAxTYmk4YcOyK.png",
    matches: 0,
    link: "/teams/kathmandu-gurkhas/",
    won: 0,
    loss: 0,
    noResult: 0,
    netRunRate: "0.000",
    points: 0,
    des: "Check the Kathmandu Gurkhas squad, top performers, and captain updates for NPL 2026.",
    description: "Squad Content Example: Kathmandu Gurkhas combine local talent with select international players. Explore captain info, squad breakdown, key performers, and team news for NPL 2026.",
    quickLinks: [
      { name: "Complete Schedule", link: "/schedule" },
      { name: "Points Table", link: "/points-table" },
      { name: "Tickets", link: "/tickets" },
      { name: "University Cricket Ground", link: "/NPL-venue/tribhuvan-university-cricket-ground-kirtipur/" }
    ]
  },
  {
    position: 4,
    team: "Lumbini Lions",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391942.jpg-NIWqkidgZrUmi5kWY0YlovlZifDfNX.jpeg",
    matches: 0,
    link: "/teams/lumbini-lions/",
    won: 0,
    loss: 0,
    noResult: 0,
    netRunRate: "0.000",
    points: 0,
    des:"See the Lumbini Lions squad, emerging talents, and player stats for NPL 2026.",
    description : "The Lumbini Lions bring together top batters, bowlers, and all-rounders. Fans can check the full squad, captain details, and NPL 2026 updates throughout the season",
    quickLinks: [
      { name: "Upcoming Matches", link: "/schedule" },
      { name: "Points Table", link: "/points-table" },
      { name: "Book Tickets", link: "/tickets" },
      { name: "Venue Info", link: "/NPL-venue" }
    ]
  },
  {
    position: 5,
    team: "Pokhara Avengers",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391990-9Q8yVvbgP74aKe7XkmT9RRfMxc1oFh.png",
    matches: 0,
    link: "/teams/pokhara-avengers/",
    won: 0,
    loss: 0,
    noResult: 0,
    netRunRate: "0.000",
    points: 0,
    des:"Discover the Pokhara Avengers squad, key players, and captain information for NPL 2026.",
    description: "Pokhara Avengers feature a balanced squad of domestic and international talent. Follow player roles, captain info, and team updates during NPL 2026.",
    quickLinks: [
      { name: "Match Fixtures", link: "/schedule" },
      { name: "Team Rankings", link: "/points-table" },
      { name: "Book Tickets", link: "/tickets" },
      { name: "NPL 2026 Venue", link: "/NPL-venue" }
    ]
  },
  {
    position: 6,
    team: "Karnali Yaks",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392046-hXfFTHzoq2lnHjeLNwUI7QlTqtocvg.png",
    matches: 0,
    link: "/teams/karnali-yaks/",
    won: 0,
    loss: 0,
    noResult: 0,
    netRunRate: "0.000",
    points: 0,
    des:"View the Karnali Yaks squad, full roster, and performance stats for NPL 2026.",
    description: "The Karnali Yaks squad is built for a strong NPL 2026 campaign. Fans can follow squad lists, captain announcements, and player stats throughout the tournament.",
    quickLinks: [
      { name: "Full Schedule", link: "/schedule" },
      { name: "Points Table", link: "/points-table" },
      { name: "Tickets", link: "/tickets" },
      { name: "Venue Details", link: "/NPL-venue" }
    ]
  },
  {
    position: 7,
    team: "Chitwan Rhinos",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392044.jpg-HICbW76XNQ2F8GccXx3uscx4nuKjo1.jpeg",
    matches: 0,
    link: "/teams/chitwan-rhinos/",
    won: 0,
    loss: 0,
    noResult: 0,
    netRunRate: "0.000",
    points: 0,
    des:"Explore the Chitwan Rhinos squad, player roles, and top performers for NPL 2026.",
    description: "Chitwan Rhinos combine experienced players and emerging talent. Check captain details, squad updates, and player roles for NPL 2026.",
    quickLinks: [
      { name: "Upcoming Matches", link: "/schedule" },
      { name: "Team Rankings", link: "/points-table" },
      { name: "Book Tickets", link: "/tickets" },
      { name: "Official Venue", link: "/NPL-venue" }
    ]
  },
  {
    position: 8,
    team: "Janakpur Bolts",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392045-oYcvhhIZEJam7aCUCN5bQepK0C9sHQ.png",
    matches: 0,
    link: "/teams/janakpur-bolts/",
    won: 0,
    loss: 0,
    noResult: 0,
    netRunRate: "0.000",
    points: 0,
    des:"Check the Janakpur Bolts squad, full roster, and captain details for NPL 2026.",
    description: "Janakpur Bolts feature a balanced team of batters, bowlers, and all-rounders. Follow squad updates, key performers, and captain info during NPL 2026.",
    quickLinks: [
      { name: "Match Fixtures", link: "/schedule" },
      { name: "Points Table", link: "/points-table" },
      { name: "Tickets", link: "/tickets" },
      { name: "University Cricket Ground", link: "/NPL-venue/tribhuvan-university-cricket-ground-kirtipur/" }
    ]
  },
]
