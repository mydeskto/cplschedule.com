import anyWhere from "@/public/images/anyWhere.webp"

/** Build nplt20league.com player profile URL from slug */
export function nplPlayerProfile(slug: string) {
  return `https://nplt20league.com/player/${slug}/profile/`
}

export type PlayerEntry = {
  name: string
  role: string
  image: typeof anyWhere | string
  /** NPL matches played (career / prior seasons when known) */
  matches?: string
  /** Profile on nplt20league.com */
  profileLink: string
  country?: string
  slug: string
}

function p(
  name: string,
  slug: string,
  role: string,
  matches?: string,
  country?: string
): PlayerEntry {
  return {
    name,
    slug,
    role,
    image: anyWhere,
    matches,
    country,
    profileLink: nplPlayerProfile(slug),
  }
}

/**
 * Season 3 confirmed squads only — from each team's
 * "Confirmed squad list" on https://nplt20league.com/teams/{slug}/
 * (retained + auction buys). No Key Players / wishlist extras.
 */
export const playersData: Record<
  string,
  { players: PlayerEntry[]; coach: string }
> = {
  "chitwan-rhinos": {
    coach: "Kalam Ali",
    players: [
      p("Kushal Malla", "kushal-malla", "Captain, Batsman", "15", "Nepal"),
      p("Rijan Dhakal", "rijan-dhakal", "Bowler", undefined, "Nepal"),
      p("Deepak Bohara", "deepak-bohara", "Batsman", undefined, "Nepal"),
      p("Ranjeet Kumar", "ranjeet-kumar", "Bowler", undefined, "Nepal"),
      p("Kamal Singh Airee", "kamal-singh-airee", "Bowler", undefined, "Nepal"),
      p("Dev Khanal", "dev-khanal", "Batsman", undefined, "Nepal"),
      p("Arjun Saud", "arjun-saud", "Wicketkeeper-Batsman", undefined, "Nepal"),
      p("Bibek Kumar Yadav", "bibek-kumar-yadav", "All-Rounder", undefined, "Nepal"),
      p("Mausam Dhakal", "mausam-dhakal", "Bowler", undefined, "Nepal"),
      p("Ashok Dhami", "ashok-dhami", "Bowler", undefined, "Nepal"),
      p("Bipin Rawal", "bipin-rawal", "Batsman", undefined, "Nepal"),
      p("Gautam KC", "gautam-kc", "Bowler", undefined, "Nepal"),
      p("Salauddin Khan", "salauddin-khan", "All-Rounder"),
    ],
  },

  "lumbini-lions": {
    coach: "Nandan Phadnis",
    players: [
      p("Rohit Paudel", "rohit-paudel", "Captain", "7", "Nepal"),
      p("Sundeep Jora", "sundeep-jora", "Batsman", "8", "Nepal"),
      p("Sher Malla", "sher-malla", "All-Rounder", undefined, "Nepal"),
      p("Dilip Nath", "dilip-nath", "Wicketkeeper-Batsman", undefined, "Nepal"),
      p("Dinesh Adhikari", "dinesh-adhikari", "Bowler", undefined, "Nepal"),
      p("Abhishesh Gautam", "abhishesh-gautam", "Bowler", undefined, "Nepal"),
      p("Tilak Bhandari", "tilak-bhandari", "Bowler", undefined, "Nepal"),
      p("Aasif Sheikh", "aasif-sheikh", "Wicketkeeper-Batsman", undefined, "Nepal"),
      p("Kishor Mahato", "kishor-mahato", "Bowler", undefined, "Nepal"),
      p("Durgesh Gupta", "durgesh-gupta", "All-Rounder", undefined, "Nepal"),
      p("Aakash Tripathi", "aakash-tripathi", "All-Rounder", undefined, "Nepal"),
      p("Ajay Chauhan", "ajay-chauhan", "All-Rounder", undefined, "Nepal"),
      p("Arniko Prasad Yadav", "arniko-prasad-yadav", "All-Rounder", undefined, "Nepal"),
    ],
  },

  "pokhara-avengers": {
    coach: "Rajiv Kumar",
    players: [
      p("Kushal Bhurtel", "kushal-bhurtel", "Captain, Batsman", undefined, "Nepal"),
      p("Sagar Dhakal", "sagar-dhakal", "Bowler", undefined, "Nepal"),
      p("Arjun Kumal", "arjun-kumal", "All-Rounder", undefined, "Nepal"),
      p("Bipin Khatri", "bipin-khatri", "All-Rounder", undefined, "Nepal"),
      p("Aakash Chand", "aakash-chand", "Bowler", undefined, "Nepal"),
      p("Kiran Thagunna", "kiran-thagunna", "All-Rounder", undefined, "Nepal"),
      p("Dinesh Kharel", "dinesh-kharel", "Batsman", undefined, "Nepal"),
      p("Arjun Gharti", "arjun-gharti", "Bowling all-rounder", undefined, "Nepal"),
      p("Sudeep Aryal", "sudeep-aryal", "Bowler", undefined, "Nepal"),
      p("Bibek Rana Magar", "bibek-rana-magar", "All-Rounder", undefined, "Nepal"),
      p("Pratik Pokharel", "pratik-pokharel", "All-Rounder", undefined, "Nepal"),
      p("Bipin Acharya", "bipin-acharya", "All-Rounder", undefined, "Nepal"),
    ],
  },

  "sudurpaschim-royals": {
    coach: "Jagat Tamata",
    players: [
      p("Dipendra Singh Airee", "dipendra-singh-airee", "Captain", "17", "Nepal"),
      p("Binod Bhandari", "binod-bhandari", "Wicket-Keeper", undefined, "Nepal"),
      p("Aarif Sheikh", "aarif-sheikh", "All-Rounder", undefined, "Nepal"),
      p("Ishan Pandey", "ishan-pandey", "All-Rounder", undefined, "Nepal"),
      p("Abinash Bohara", "abinash-bohara", "Bowler", undefined, "Nepal"),
      p("Hemant Dhami", "hemant-dhami", "Bowler", undefined, "Nepal"),
      p("Hikmat Mahara", "hikmat-mahara", "Bowler", undefined, "Nepal"),
      p("Dipak Bohara", "dipak-bohara", "Batsman", undefined, "Nepal"),
      p("Milan Bohara", "milan-bohara", "Bowler", undefined, "Nepal"),
      p("Tek Rawat", "tek-rawat", "All-Rounder", undefined, "Nepal"),
      p("Sachin Bhatt", "sachin-bhatt", "All-Rounder", undefined, "Nepal"),
      p("Ayush Chand", "ayush-chand", "Batsman", undefined, "Nepal"),
    ],
  },

  "karnali-yaks": {
    coach: "Gyanendra Malla",
    players: [
      p("Sompal Kami", "sompal-kami", "Captain", undefined, "Nepal"),
      p("Gulshan Jha", "gulshan-jha", "Bowler", undefined, "Nepal"),
      p("Nandan Yadav", "nandan-yadav", "Bowler", undefined, "Nepal"),
      p("Deepak Dumre", "deepak-dumre", "Wicket-keeper batsman", undefined, "Nepal"),
      p("Pawan Sarraf", "pawan-sarraf", "Bowling all-rounder", undefined, "Nepal"),
      p(
        "Unish Bikram Singh Thakuri",
        "unish-bikram-singh-thakuri",
        "Bowling all-rounder",
        undefined,
        "Nepal"
      ),
      p("Yuvraj Khatri", "yuvraj-khatri", "Bowler", undefined, "Nepal"),
      p("Shubh Kansakar", "shubh-kansakar", "Batsman", undefined, "Nepal"),
      p("Bipin Sharma", "bipin-sharma", "Bowling all-rounder", undefined, "Nepal"),
      p("Dipendra Rawat", "dipendra-rawat", "Bowler", undefined, "Nepal"),
      p("Surya Tamang", "surya-tamang", "Bowler", undefined, "Nepal"),
      p("Sachin Sharma", "sachin-sharma", "All-rounder", undefined, "Nepal"),
    ],
  },

  "kathmandu-gurkhas": {
    coach: "Monty Desai",
    players: [
      p("Karan KC", "karan-kc", "Captain", "15", "Nepal"),
      p("Bhim Sharki", "bhim-sharki", "Batsman", undefined, "Nepal"),
      p("Mohammad Aadil Alam", "mohammad-aadil-alam", "All-Rounder", undefined, "Nepal"),
      p("Rashid Khan", "rashid-khan", "Bowler", undefined, "Afghanistan"),
      p("Santosh Yadav", "santosh-yadav", "All-Rounder", undefined, "Nepal"),
      p("Shahab Alam", "shahab-alam", "Bowler", undefined, "Nepal"),
      p("Sahil Patel", "sahil-patel", "Batsman/Wicket-keeper", undefined, "Nepal"),
      p("Prasiddha Jaishi", "prasiddha-jaishi", "All-Rounder", undefined, "Nepal"),
      p("Dayanand Mandal", "dayanand-mandal", "All-Rounder", undefined, "Nepal"),
      p("Sonu Devkota", "sonu-devkota", "All-Rounder", undefined, "Nepal"),
      p("Dev Shah", "dev-shah", "Batsman", undefined, "Nepal"),
      p("Suryanshu Koirala", "suryanshu-koirala", "All-Rounder", undefined, "Nepal"),
    ],
  },

  "janakpur-bolts": {
    coach: "Shivnarine Chanderpaul",
    players: [
      p("Anil Sah", "anil-sah", "Captain, Wicketkeeper-Batsman", undefined, "Nepal"),
      p("Lalit Narayan Rajbanshi", "lalit-narayan-rajbanshi", "Bowler", undefined, "Nepal"),
      p("Bikash Aagri", "bikash-aagri", "Batsman", undefined, "Nepal"),
      p("Mayan Yadav", "mayan-yadav", "All-Rounder", undefined, "Nepal"),
      p("Aditya Mehta", "aditya-mehta", "Batsman", undefined, "Nepal"),
      p("Trit Raj Das", "trit-raj-das", "All-Rounder", undefined, "Nepal"),
      p("Abhishek Tiwari", "abhishek-tiwari", "All-Rounder", undefined, "Nepal"),
      p("Bishal Patel", "bishal-patel", "Batsman", undefined, "Nepal"),
      p("Amar Singh Rautela", "amar-singh-rautela", "All-Rounder", undefined, "Nepal"),
      p("Rit Gautam", "rit-gautam", "Batsman", undefined, "Nepal"),
      p("Santosh Karki", "santosh-karki", "Batsman", undefined, "Nepal"),
      p("Ashutosh Pandey", "ashutosh-pandey", "Bowler", undefined, "Nepal"),
      p("Bishal Susling", "bishal-susling", "Bowler", undefined, "Nepal"),
    ],
  },

  "biratnagar-kings": {
    coach: "Kevin O'Brien",
    players: [
      p("Sandeep Lamichhane", "sandeep-lamichhane", "Captain, Bowler", "5", "Nepal"),
      p("Lokesh Bam", "lokesh-bam", "Wicketkeeper-Batsman", undefined, "Nepal"),
      p("Basir Ahamad", "basir-ahamad", "All-rounder", undefined, "Nepal"),
      p("Narayan Joshi", "narayan-joshi", "All-rounder", undefined, "Nepal"),
      p("Pratish GC", "pratish-gc", "Bowling All-rounder", undefined, "Nepal"),
      p("Subash Bhandari", "subash-bhandari", "Bowler", undefined, "Nepal"),
      p("Rupesh Kumar Singh", "rupesh-kumar-singh", "All-Rounder", undefined, "Nepal"),
      p("Naren Saud", "naren-saud", "All-Rounder", undefined, "Nepal"),
      p("Dilsad Ali", "dilsad-ali", "Wicketkeeper-Batter"),
      p("Sujan Thapaliya", "sujan-thapaliya", "Wicketkeeper-Batter", undefined, "Nepal"),
      p("Aparajit Poudel", "aparajit-poudel", "Bowler", undefined, "Nepal"),
      p("Pratik Shrestha", "pratik-shrestha", "All-Rounder", undefined, "Nepal"),
      p("Imran Sheikh", "imran-sheikh", "Batter / All-rounder", undefined, "Nepal"),
    ],
  },
}
