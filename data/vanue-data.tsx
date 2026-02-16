import ShereStadium from '@/public/images/stadium/Shere Bangla National Stadium.webp'
import SylhetStadium from '@/public/images/stadium/Sylhet International Cricket Stadium.jpeg'
import ZahurStadium from '@/public/images/stadium/Zahur Ahmed Chowdhury Stadium.jpeg'
export interface Venue {
  id: number
  name: string
  slug: string
  alternateName: string
  location: string
  capacity: number
  established: number
  owner?: string
  operator?: string
  pitchType: string
  homeTeam: string
  description: string
  pitchDescription: string
  image: string
  mapEmbed: string
  seoTitle: string
  metaDescription: string
  keywords?: string[]
  address: {
    addressLocality: string
    addressRegion: string
    addressCountry: string
    fullAddress: string
  }
  url: any
  matches: Array<{
    date: string
    time: string
    match: string
    venue?: string
  }>
  ends?: string
  stats?: {
    highestT20Total?: string
    lowestT20Total?: string
    highestIndividualScore?: string
    bestBowlingFigures?: string
    mostMatchesHosted?: string
    recordCrowd?: string
  }
  faqs?: Array<{
    question: string
    answer: string
  }>
}

export const venuesData: { venues: Venue[] } = {
  venues: [
    {
      id: 1,
      name: "Tribhuvan University International Cricket Ground",
      slug: "tribhuvan-university-cricket-ground-kirtipur",
      alternateName: "Kirtipur Cricket Ground",
      location: "Kirtipur, Kathmandu, Nepal",
      capacity: 15000,
      established: 1998,
      owner: "Tribhuvan University",
      operator: "Cricket Association of Nepal (CAN)",
      pitchType: "Balanced - good for both batters and spinners",
      homeTeam: "Kathmandu Knights",
      description:
        "Tribhuvan University International Cricket Ground in Kirtipur is the most iconic cricket venue in Nepal and serves as the main Nepal Premier League 2025 venue. Surrounded by scenic hills and located within the Tribhuvan University campus, it's a favorite spot for both local and international matches. The stadium often hosts Nepal's home games and remains the heart of domestic T20 action.",
      pitchDescription:
        "The pitch at Kirtipur is known for being batting-friendly in the first innings, with spinners coming into play as the game progresses. The outfield is quick, making it ideal for high-scoring matches. Early morning games may see some movement for pacers due to slight moisture in the surface.",
      image: "/images/stadium/trib.webp",
      mapEmbed:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.5755188922662!2d85.28773027425285!3d27.677887226792453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18150060281b%3A0x3480092f29e97741!2sTU%20Cricket%20Stadium!5e1!3m2!1sen!2snp!4v1760977812491!5m2!1sen!2snp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      seoTitle: "Tribhuvan University International Cricket Ground, Kirtipur - NPL 2025 Venue & Match Schedule",
      metaDescription:
        "Tribhuvan University International Cricket Ground, Kirtipur will host key matches of the Nepal Premier League (NPL) 2025, including the Final. View full NPL 2025 fixtures, schedule, and details for this iconic Nepal venue.",
      keywords: [
        "Tribhuvan University Cricket Ground",
        "Kirtipur Cricket Ground",
        "TU Cricket Stadium",
        "NPL 2025 venue Kirtipur",
        "Nepal cricket stadium",
        "Kirtipur cricket ground",
        "NPL final venue",
        "Nepal Premier League venue",
        "TU International Cricket Ground",
        "Kirtipur stadium NPL",
        "Nepal cricket venues",
        "NPL 2025 stadium",
        "Kirtipur match schedule",
        "NPL cricket ground",
        "Nepal T20 venue"
      ],
      address: {
        addressLocality: "Kirtipur",
        addressRegion: "Kathmandu",
        addressCountry: "NP",
        fullAddress: "Tribhuvan University Campus, Kirtipur, Kathmandu, Nepal",
      },
      url: "/NPL-venue/tribhuvan-university-cricket-ground-kirtipur/",
      matches: [
        { date: "2025-11-17", time: "12:00 PM", match: "Biratnagar Kings vs Chitwan Rhinos" },
        { date: "2025-11-18", time: "12:00 PM", match: "Janakpur Bolts vs Karnali Yaks" },
        { date: "2025-11-21", time: "12:00 PM", match: "Chitwan Rhinos vs Janakpur Bolts" },
        { date: "2025-11-22", time: "12:00 PM", match: "Biratnagar Kings vs Kathmandu Gurkhas" },
        { date: "2025-11-25", time: "12:00 PM", match: "Biratnagar Kings vs Karnali Yaks" },
        { date: "2025-11-28", time: "12:00 PM", match: "Biratnagar Kings vs Sudurpaschim Royals" },
        { date: "2025-12-01", time: "12:00 PM", match: "Pokhara Avengers vs Biratnagar Kings" },
        { date: "2025-12-03", time: "12:00 PM", match: "Biratnagar Kings vs Janakpur Bolts" },
        { date: "2025-12-06", time: "12:00 PM", match: "Lumbini Lions vs Sudurpaschim Royals" },
        { date: "2025-12-09", time: "12:00 PM", match: "Pokhara Avengers vs Sudurpaschim Royals" },
        { date: "2025-12-12", time: "12:00 PM", match: "Qualifier 1 (1st vs 2nd)" },
        { date: "2025-12-13", time: "12:00 PM", match: "Eliminator (3rd vs 4th)" },
        { date: "2025-12-14", time: "12:00 PM", match: "Qualifier 2" },
        { date: "2025-12-15", time: "12:00 PM", match: "Final" },
      ],
    },
    {
      id: 2,
      name: "Mulpani Cricket Ground",
      slug: "mulpani-cricket-ground-kathmandu",
      alternateName: "Mulpani International Cricket Ground",
      location: "Kathmandu, Nepal",
      capacity: 5000,
      established: 2019,
      owner: "Cricket Association of Nepal (CAN)",
      operator: "Cricket Association of Nepal (CAN)",
      pitchType: "Balanced – offers assistance to both batters and bowlers",
      homeTeam: "Nepal National Cricket Team, Domestic NPL Franchises",
      description:
        "Mulpani Cricket Ground is one of Nepal's main international cricket venues, located in the eastern part of Kathmandu. The ground has become a key venue for domestic and international tournaments, including the Nepal Premier League (NPL) 2025. Known for its scenic surroundings and balanced pitch, Mulpani offers a great contest between bat and ball. The ground is managed by the Cricket Association of Nepal (CAN) and regularly hosts matches for Nepal's men's and women's teams.",
      pitchDescription:
        "The pitch at Mulpani Cricket Ground offers a balanced contest between bat and ball. In the early overs, seam bowlers usually get some movement off the surface, especially during morning matches. As the day progresses, the wicket tends to flatten out, allowing batters to play their shots more freely. The outfield at Mulpani is well maintained and relatively fast, which rewards timing and placement. Spinners come into play during the middle overs when the surface starts to wear slightly, adding variety to the contest.",
      image: "/images/stadium/mulpani.jpeg",
      mapEmbed:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.471578983446!2d85.38758282546787!3d27.721038126174793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1ba5c056614d%3A0xb5508c113c77b4d1!2sMulpani%20International%20Cricket%20Ground%2C%20Gokarneshwor%2044600!5e1!3m2!1sen!2snp!4v1760979577178!5m2!1sen!2snp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      seoTitle: "Mulpani Cricket Ground, Kathmandu - NPL 2025 Venue & Full Match Schedule",
      metaDescription:
        "Mulpani Cricket Ground, Kathmandu - one of the main venues for the Nepal Premier League (NPL) 2025. Check key details, location, capacity, and full match schedule.",
      keywords: [
        "Mulpani Cricket Ground",
        "Mulpani International Cricket Ground",
        "Mulpani stadium Kathmandu",
        "NPL 2025 venue Mulpani",
        "Kathmandu cricket ground",
        "Mulpani NPL matches",
        "Nepal cricket stadium Mulpani",
        "NPL venue Kathmandu",
        "Mulpani cricket stadium",
        "NPL 2025 Mulpani",
        "Gokarneshwor cricket ground",
        "Nepal Premier League Mulpani",
        "Mulpani match schedule",
        "NPL cricket venue",
        "Kathmandu NPL stadium"
      ],
      address: {
        addressLocality: "Kathmandu",
        addressRegion: "Kathmandu",
        addressCountry: "NP",
        fullAddress: "Mulpani International Cricket Ground, Gokarneshwor, Kathmandu, Nepal",
      },
      url: "/NPL-venue/mulpani-cricket-ground-kathmandu/",
      matches: [
        { date: "2025-11-19", time: "12:00 PM", match: "Kathmandu Gurkhas vs Lumbini Lions" },
        { date: "2025-11-23", time: "12:00 PM", match: "Karnali Yaks vs Sudurpaschim Royals" },
        { date: "2025-11-26", time: "12:00 PM", match: "Chitwan Rhinos vs Lumbini Lions" },
        { date: "2025-11-29", time: "12:00 PM", match: "Karnali Yaks vs Kathmandu Gurkhas" },
        { date: "2025-12-02", time: "12:00 PM", match: "Sudurpaschim Royals vs Chitwan Rhinos" },
        { date: "2025-12-04", time: "12:00 PM", match: "Chitwan Rhinos vs Karnali Yaks" },
        { date: "2025-12-07", time: "12:00 PM", match: "Janakpur Bolts vs Kathmandu Gurkhas" },
        { date: "2025-12-10", time: "12:00 PM", match: "Kathmandu Gurkhas vs Biratnagar Kings" },
      ],
    },
    {
      id: 3,
      name: "Biratnagar Cricket Ground",
      slug: "biratnagar-cricket-ground-biratnagar",
      alternateName: "Biratnagar Stadium",
      location: "Biratnagar, Province No. 1, Nepal",
      capacity: 7000,
      established: 2021,
      owner: "Cricket Association of Nepal (CAN)",
      operator: "Cricket Association of Nepal (CAN)",
      pitchType: "Batting-friendly with even bounce",
      homeTeam: "Biratnagar Kings (NPL)",
      description:
        "Biratnagar Cricket Ground is one of the emerging cricket venues in Nepal, located in the industrial city of Biratnagar, Province No. 1. The ground has hosted several domestic tournaments and is now a proud part of the Nepal Premier League (NPL) 2025 venue lineup. Known for its flat pitch and batting-friendly conditions, Biratnagar Cricket Ground has quickly become a favorite for high-scoring T20 matches. It serves as the home base for the Biratnagar Kings, one of the most popular NPL franchises.",
      pitchDescription:
        "The pitch at Biratnagar Cricket Ground is typically dry and firm, offering plenty of runs for batters. Fast bowlers can extract some movement early on, but once the ball gets older, stroke-making becomes easier. Spinners often come into play during the middle overs, especially under sunny afternoon conditions when the surface slows slightly. The outfield is quick, and the shorter boundaries make it ideal for T20 cricket, ensuring exciting, high-scoring encounters.",
      image: "/images/stadium/birat.jpeg",
      mapEmbed:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45135.60488691443!2d87.24938799856167!3d26.488972712538057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef71f2582761c3%3A0x656eb3a12f1c3e45!2sBiratnagar%20Cricket%20Ground!5e1!3m2!1sen!2snp!4v1760979865594!5m2!1sen!2snp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      seoTitle: "Biratnagar Cricket Ground, Biratnagar - NPL 2025 Venue & Full Match Schedule",
      metaDescription:
        "Explore Biratnagar Cricket Ground, Biratnagar - one of the key venues for the Nepal Premier League (NPL) 2025. Check its location, capacity, pitch report, and complete match schedule.",
      keywords: [
        "Biratnagar Cricket Ground",
        "Biratnagar Stadium",
        "Biratnagar Kings home ground",
        "NPL 2025 venue Biratnagar",
        "Biratnagar cricket stadium",
        "NPL Biratnagar matches",
        "Province No. 1 cricket ground",
        "Nepal Premier League Biratnagar",
        "Biratnagar NPL venue",
        "NPL 2025 Biratnagar",
        "Biratnagar Kings stadium",
        "Nepal cricket venues Biratnagar",
        "Biratnagar match schedule",
        "NPL cricket ground Biratnagar",
        "Nepal T20 venue Biratnagar"
      ],
      address: {
        addressLocality: "Biratnagar",
        addressRegion: "Province No. 1",
        addressCountry: "NP",
        fullAddress: "Biratnagar Cricket Ground, Biratnagar, Province No. 1, Nepal",
      },
        url: "/NPL-venue/biratnagar-cricket-ground-biratnagar/",
      matches: [
        { date: "2025-11-17", time: "12:00 PM", match: "Biratnagar Kings vs Chitwan Rhinos" },
        { date: "2025-11-22", time: "12:00 PM", match: "Biratnagar Kings vs Kathmandu Gurkhas" },
        { date: "2025-11-25", time: "12:00 PM", match: "Biratnagar Kings vs Karnali Yaks" },
        { date: "2025-11-28", time: "12:00 PM", match: "Biratnagar Kings vs Sudurpaschim Royals" },
        { date: "2025-12-01", time: "12:00 PM", match: "Pokhara Avengers vs Biratnagar Kings" },
        { date: "2025-12-03", time: "12:00 PM", match: "Biratnagar Kings vs Janakpur Bolts" },
        { date: "2025-12-10", time: "12:00 PM", match: "Kathmandu Gurkhas vs Biratnagar Kings" },
      ],
    },
  ],
}

