

interface Team {
  name: string;
  logo: string;
  score?: string;
}

interface Match {
  id: number;
  matchNumber: string;
  date: string;
  time: string;
  venue: string;
  status: 'upcoming' | 'completed' | 'live';
  matchType: string;
  team1: Team;
  team2: Team;
  winner?: string;
  result?: string;
  keywords: string[];
}

export const matchesData = {
    "matches": [{
            "id": 1,
            "matchNumber": "Match 1",
            "date": "Nov 17",
            "time": "12:00 PM",
            "venue": "Tribhuvan Univ. Int'l Cricket Ground, Kirtipur",
            "status": "completed",
            "matchType": "1st Match (D/N)",
            "team1": {
                "name": "Janakpur Bolts",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392045-oYcvhhIZEJam7aCUCN5bQepK0C9sHQ.png",
                "score": "130/6",
                "overs": "20"
            },
            "team2": {
                "name": "Kathmandu Gurkhas",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392043-kzYjrSVxDd6DR0xeVnAxTYmk4YcOyK.png",
                "score": "131/5",
                "overs": "18",
                "target": "131"
            },
            "result": "Kathmandu Gurkhas won by 5 wickets (with 12 balls remaining)",
            "winner": "Kathmandu Gurkhas",
            "keywords": [
                "NPL 2025 Match 1",
                "Janakpur Bolts vs Kathmandu Gurkhas",
                "NPL match result",
                "Nepal Premier League 2025",
                "NPL live score",
                "Kirtipur cricket match",
                "NPL 2025 results",
                "Nepal T20 match",
                "NPL match summary",
                "Kathmandu Gurkhas vs Janakpur Bolts",
                "NPL 2025 scorecard",
                "Nepal Premier League results",
                "NPL match highlights",
                "NPL 2025 match report",
                "Nepal cricket match result"
            ]
        },
        {
            "id": 2,
            "matchNumber": "Match 2",
            "date": "Nov 18",
            "time": "12:00 AM",
            "venue": "Kirtipur",
            "status": "completed",
            "matchType": "2nd Match",
            "team1": {
                "name": "Karnali Yaks",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392046-hXfFTHzoq2lnHjeLNwUI7QlTqtocvg.png",
                "score": "166/3",
                "overs": "20"
            },
            "team2": {
                "name": "Chitwan Rhinos",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392044.jpg-HICbW76XNQ2F8GccXx3uscx4nuKjo1.jpeg",
                "score": "171/6",
                "overs": "19.1",
                "target": "167"
            },
            "result": "Chitwan Rhinos won by 4 wickets (with 5 balls remaining)",
            "winner": "Chitwan Rhinos",
            "keywords": [
                "NPL 2025 Match 2",
                "Karnali Yaks vs Chitwan Rhinos",
                "NPL match result",
                "Nepal Premier League 2025",
                "NPL live score",
                "Kirtipur cricket match",
                "NPL 2025 results",
                "Nepal T20 match",
                "NPL match summary",
                "Chitwan Rhinos vs Karnali Yaks",
                "NPL 2025 scorecard",
                "Nepal Premier League results",
                "NPL match highlights",
                "NPL 2025 match report",
                "Nepal cricket match result"
            ]
        },
        {
            "id": 3,
            "matchNumber": "Match 3",
            "date": "Nov 18",
            "time": "03:30 PM",
            "venue": "Kirtipur",
            "status": "completed",
            "matchType": "3rd Match (D/N)",
            "team1": {
                "name": "Biratnagar Kings",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391936.jpg-jBF9Rx7IFzDMfn7a0tHzDrpXa3WZJX.jpeg",
                "score": "220/6",
                "overs": "20"
            },
            "team2": {
                "name": "Pokhara Avengers",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391990-9Q8yVvbgP74aKe7XkmT9RRfMxc1oFh.png",
                "score": "167",
                "overs": "18.5",
                "target": "221"
            },
            "result": "Biratnagar Kings won by 53 runs",
            "winner": "Biratnagar Kings",
            "keywords": [
                "NPL 2025 Match 3",
                "Biratnagar Kings vs Pokhara Avengers",
                "NPL match result",
                "Nepal Premier League 2025",
                "NPL live score",
                "Kirtipur cricket match",
                "NPL 2025 results",
                "Nepal T20 match",
                "NPL match summary",
                "Pokhara Avengers vs Biratnagar Kings",
                "NPL 2025 scorecard",
                "Nepal Premier League results",
                "NPL match highlights",
                "NPL 2025 match report",
                "Nepal cricket match result"
            ]
        },
        {
            "id": 4,
            "matchNumber": "Match 4",
            "date": "Nov 19",
            "time": "03:15 AM",
            "venue": "Kirtipur",
            "status": "completed",
            "matchType": "4th Match",
            "team1": {
                "name": "Sudurpaschim Royals",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391989-cqkiosfycHQHEu4PJ2g6C6yhvlVjoB.png",
                "score": "146/4",
                "overs": "20",
                "target": "147"
            },
            "team2": {
                "name": "Kathmandu Gurkha",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392043-kzYjrSVxDd6DR0xefn7a0tHzDrpXa3WZJX.jpeg",
                "score": "118/0",
                "overs": "16.5"
            },
            "keywords": [
                "NPL 2025 Match 4",
                "Sudurpaschim Royals vs Biratnagar Kings",
                "NPL live match",
                "Nepal Premier League 2025",
                "NPL live score",
                "Kirtipur cricket match",
                "NPL 2025 live",
                "Nepal T20 live",
                "NPL live streaming",
                "Biratnagar Kings vs Sudurpaschim Royals",
                "NPL 2025 live scorecard",
                "Nepal Premier League live",
                "NPL live match updates",
                "NPL 2025 live commentary",
                "Nepal cricket live match"
            ]
        },
        {
            "id": 5,
            "matchNumber": "Match 5",
            "date": "Nov 20",
            "time": "12:00 PM",
            "venue": "Kirtipur",
            "status": "completed",
            "matchType": "5th Match (D/N)",
            "team1": {
                "name": "Chitwan Rhinos",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392044.jpg-HICbW76XNQ2F8GccXx3uscx4nuKjo1.jpeg",
                "score": "142/7",
                "overs": "20"
            },
            "team2": {
                "name": "Lumbini Lions",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391942.jpg-NIWqkidgZrUmi5kWY0YlovlZifDfNX.jpeg",
                "score": "146/4",
                "overs": "18.3",
                "target": "143"
            },
            "result": "Lumbini won by 6 wickets (with 9 balls remaining)",
            "winner": "Lumbini Lions"
        },
        {
            "id": 6,
            "matchNumber": "Match 6",
            "date": "Nov 21",
            "time": "03:15 PM",
            "venue": "Kirtipur",
            "status": "completed",
            "matchType": "6th Match (D/N)",
            "team1": {
                "name": "Sudurpaschim Royals",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391989-cqkiosfycHQHEu4PJ2g6C6yhvlVjoB.png",
                "score": "193/7",
                "overs": "20"
            },
            "team2": {
                "name": "Pokhara Avengers",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391990-9Q8yVvbgP74aKe7XkmT9RRfMxc1oFh.png",
                "score": "175/8",
                "overs": "20",
                "target": "194"
            },
            "result": "Sudurpaschim Royals won by 18 runs",
            "winner": "Sudurpaschim Royals"
        },
        {
            "id": 7,
            "matchNumber": "Match 7",
            "date": "Nov 22",
            "time": "12:00 PM",
            "venue": "Kirtipur",
            "status": "completed",
            "matchType": "7th Match",
            "team1": {
                "name": "Lumbini Lions",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391942.jpg-NIWqkidgZrUmi5kWY0YlovlZifDfNX.jpeg",
                "score": "156/8",
                "overs": "20"
            },
            "team2": {
                "name": "Karnali Yaks",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392046-hXfFTHzoq2lnHjeLNwUI7QlTqtocvg.png",
                "score": "161/1",
                "overs": "12.2",
                "target": "157"
            },
            "result": "Karnali won by 9 wickets (with 46 balls remaining)",
            "winner": "Karnali Yaks"
        },
        {
            "id": 8,
            "matchNumber": "Match 8",
            "date": "Nov 22",
            "time": "03:15 PM",
            "venue": "Kirtipur",
            "status": "completed",
            "matchType": "8th Match (D/N)",
            "team1": {
                "name": "Kathmandu Gorkhas",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392043-kzYjrSVxDd6DR0xeVnAxTYmk4YcOyK.png",
                "score": "134/6",
                "overs": "20"
            },
            "team2": {
                "name": "Biratnagar Kings",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391936.jpg-jBF9Rx7IFzDMfn7a0tHzDrpXa3WZJX.jpeg",
                "score": "135/5",
                "overs": "17.1",
                "target": "135"
            },
            "result": "Biratnagar won by 5 wickets (with 17 balls remaining)",
            "winner": "Biratnagar Kings"
        },
        {
            "id": 9,
            "matchNumber": "Match 9",
            "date": "Nov 24",
            "time": "12:00 PM",
            "venue": "Kirtipur",
            "status": "completed",
            "matchType": "9th Match",
            "team1": {
                "name": "Biratnagar Kings",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391936.jpg-jBF9Rx7IFzDMfn7a0tHzDrpXa3WZJX.jpeg",
                "score": "135/7",
                "overs": "20"
            },
            "team2": {
                "name": "Janakpur Bolts",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392045-oYcvhhIZEJam7aCUCN5bQepK0C9sHQ.png",
                "score": "126/9",
                "overs": "20",
                "target": "136"
            },
            "result": "Biratnagar won by 9 runs",
            "winner": "Biratnagar Kings"
        },
        {
            "id": 10,
            "matchNumber": "Match 10",
            "date": "Nov 24",
            "time": "03:15 PM",
            "venue": "Kirtipur",
            "status": "completed",
            "matchType": "10th Match (D/N)",
            "team1": {
                "name": "Sudurpaschim Royals",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391989-cqkiosfycHQHEu4PJ2g6C6yhvlVjoB.png",
                "score": "139/9",
                "overs": "20"
            },
            "team2": {
                "name": "Karnali Yaks",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392046-hXfFTHzoq2lnHjeLNwUI7QlTqtocvg.png",
                "score": "94",
                "overs": "19.2",
                "target": "140"
            },
            "result": "Sudurpaschim Royals won by 45 runs",
            "winner": "Sudurpaschim Royals"
        },
        {
            "id": 11,
            "matchNumber": "Match 11",
            "date": "Nov 25",
            "time": "03:15 PM",
            "venue": "Kirtipur",
            "status": "completed",
            "matchType": "11th Match (D/N)",
            "team1": {
                "name": "Kathmandu Gorkhas",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392043-kzYjrSVxDd6DR0xeVnAxTYmk4YcOyK.png",
                "score": "157/8",
                "overs": "20"
            },
            "team2": {
                "name": "Lumbini Lions",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391942.jpg-NIWqkidgZrUmi5kWY0YlovlZifDfNX.jpeg",
                "score": "135",
                "overs": "19.1",
                "target": "158"
            },
            "result": "Kathmandu won by 22 runs",
            "winner": "Kathmandu Gorkhas"
        },
        {
            "id": 12,
            "matchNumber": "Match 12",
            "date": "Nov 26",
            "time": "03:15 PM",
            "venue": "Kirtipur",
            "status": "completed",
            "matchType": "12th Match (D/N)",
            "team1": {
                "name": "Chitwan Rhinos",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392044.jpg-HICbW76XNQ2F8GccXx3uscx4nuKjo1.jpeg",
                "score": "174/5",
                "overs": "20"
            },
            "team2": {
                "name": "Biratnagar Kings",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391936.jpg-jBF9Rx7IFzDMfn7a0tHzDrpXa3WZJX.jpeg",
                "score": "126",
                "overs": "16.5",
                "target": "175"
            },
            "result": "Chitwan won by 48 runs",
            "winner": "Chitwan Rhinos"
        },
        {
            "id": 13,
            "matchNumber": "Match 13",
            "date": "Nov 27",
            "time": "11:00 AM",
            "venue": "Kirtipur",
            "status": "completed",
            "matchType": "13th Match",
            "team1": {
                "name": "Lumbini Lions",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391942.jpg-NIWqkidgZrUmi5kWY0YlovlZifDfNX.jpeg",
                "score": "143",
                "overs": "20"
            },
            "team2": {
                "name": "Sudurpaschim Royals",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391989-cqkiosfycHQHEu4PJ2g6C6yhvlVjoB.png",
                "score": "145/3",
                "overs": "18.2",
                "target": "144"
            },
            "result": "Sudurpaschim Royals won by 7 wickets (with 10 balls remaining)",
            "winner": "Sudurpaschim Royals"
        },
        {
            "id": 14,
            "matchNumber": "Match 14",
            "date": "Nov 27",
            "time": "03:15 PM",
            "venue": "Kirtipur",
            "status": "completed",
            "matchType": "14th Match (D/N)",
            "team1": {
                "name": "Pokhara Avengers",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391990-9Q8yVvbgP74aKe7XkmT9RRfMxc1oFh.png",
                "score": "155/6",
                "overs": "20"
            },
            "team2": {
                "name": "Janakpur Bolts",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392045-oYcvhhIZEJam7aCUCN5bQepK0C9sHQ.png",
                "score": "130/9",
                "overs": "20",
                "target": "156"
            },
            "result": "Pokhara Avengers won by 25 runs",
            "winner": "Pokhara Avengers"
        },
        {
            "id": 15,
            "matchNumber": "Match 15",
            "date": "Nov 28",
            "time": "11:00 AM",
            "venue": "Kirtipur",
            "status": "completed",
            "matchType": "15th Match",
            "team1": {
                "name": "Chitwan Rhinos",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392044.jpg-HICbW76XNQ2F8GccXx3uscx4nuKjo1.jpeg",
                "score": "89",
                "overs": "17.2",
                "target": "143"
            },
            "team2": {
                "name": "Kathmandu Gorkhas",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392043-kzYjrSVxDd6DR0xeVnAxTYmk4YcOyK.png",
                "score": "142",
                "overs": "20"
            },
            "result": "Kathmandu won by 53 runs",
            "winner": "Kathmandu Gorkhas"
        },
        {
            "id": 16,
            "matchNumber": "Match 16",
            "date": "Nov 28",
            "time": "03:15 PM",
            "venue": "Kirtipur",
            "status": "completed",
            "matchType": "16th Match (D/N)",
            "team1": {
                "name": "Biratnagar Kings",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391936.jpg-jBF9Rx7IFzDMfn7a0tHzDrpXa3WZJX.jpeg",
                "score": "163/7",
                "overs": "19.5",
                "target": "161"
            },
            "team2": {
                "name": "Karnali Yaks",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392046-hXfFTHzoq2lnHjeLNwUI7QlTqtocvg.png",
                "score": "160/3",
                "overs": "20"
            },
            "result": "Biratnagar won by 3 wickets (with 1 ball remaining)",
            "winner": "Biratnagar Kings"
        },
        {
            "id": 17,
            "matchNumber": "Match 17",
            "date": "Nov 29",
            "time": "10:30 AM",
            "venue": "Kirtipur",
            "status": "completed",
            "matchType": "17th Match",
            "team1": {
                "name": "Pokhara Avengers",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391990-9Q8yVvbgP74aKe7XkmT9RRfMxc1oFh.png",
                "score": "150/5",
                "overs": "20"
            },
            "team2": {
                "name": "Lumbini Lions",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391942.jpg-NIWqkidgZrUmi5kWY0YlovlZifDfNX.jpeg",
                "score": "151/7",
                "overs": "19.4",
                "target": "151"
            },
            "result": "Lumbini won by 3 wickets (with 2 balls remaining)",
            "winner": "Lumbini Lions"
        },
        {
            "id": 18,
            "matchNumber": "Match 18",
            "date": "Nov 29",
            "time": "02:45 PM",
            "venue": "Kirtipur",
            "status": "completed",
            "matchType": "18th Match (D/N)",
            "team1": {
                "name": "Janakpur Bolts",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392045-oYcvhhIZEJam7aCUCN5bQepK0C9sHQ.png",
                "score": "145/8",
                "overs": "20"
            },
            "team2": {
                "name": "Sudurpaschim Royals",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391989-cqkiosfycHQHEu4PJ2g6C6yhvlVjoB.png",
                "score": "148/4",
                "overs": "17.4",
                "target": "146"
            },
            "result": "S Paschim won by 6 wickets (with 14 balls remaining)",
            "winner": "Sudurpaschim Royals"
        },
        {
            "id": 19,
            "matchNumber": "Match 19",
            "date": "Nov 30",
            "time": "02:45 PM",
            "venue": "Kirtipur",
            "status": "completed",
            "matchType": "19th Match (D/N)",
            "team1": {
                "name": "Karnali Yaks",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392046-hXfFTHzoq2lnHjeLNwUI7QlTqtocvg.png",
                "score": "149/7",
                "overs": "20"
            },
            "team2": {
                "name": "Kathmandu Gorkhas",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392043-kzYjrSVxDd6DR0xeVnAxTYmk4YcOyK.png",
                "score": "155/5",
                "overs": "18",
                "target": "150"
            },
            "result": "Kathmandu won by 5 wickets (with 12 balls remaining)",
            "winner": "Kathmandu Gorkhas"
        },
        {
            "id": 20,
            "matchNumber": "Match 20",
            "date": "Dec 02",
            "time": "11:00 AM",
            "venue": "Kirtipur",
            "status": "completed",
            "matchType": "20th Match",
            "team1": {
                "name": "Chitwan Rhinos",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392044.jpg-HICbW76XNQ2F8GccXx3uscx4nuKjo1.jpeg",
                "score": "176/4",
                "overs": "20"
            },
            "team2": {
                "name": "Janakpur Bolts",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392045-oYcvhhIZEJam7aCUCN5bQepK0C9sHQ.png",
                "score": "180/4",
                "overs": "17.3",
                "target": "177"
            },
            "result": "Janakpur won by 6 wickets (with 15 balls remaining)",
            "winner": "Janakpur Bolts"
        },
        {
            "id": 21,
            "matchNumber": "Match 21",
            "date": "Dec 02",
            "time": "03:15 PM",
            "venue": "Kirtipur",
            "status": "completed",
            "matchType": "21st Match (D/N)",
            "team1": {
                "name": "Pokhara Avengers",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391990-9Q8yVvbgP74aKe7XkmT9RRfMxc1oFh.png",
                "score": "201/2",
                "overs": "20"
            },
            "team2": {
                "name": "Karnali Yaks",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392046-hXfFTHzoq2lnHjeLNwUI7QlTqtocvg.png",
                "score": "167",
                "overs": "19",
                "target": "202"
            },
            "result": "Pokhara won by 34 runs",
            "winner": "Pokhara Avengers"
        },
        {
            "id": 22,
            "matchNumber": "Match 22",
            "date": "Dec 03",
            "time": "03:15 PM",
            "venue": "Kirtipur",
            "status": "completed",
            "matchType": "22nd Match (D/N)",
            "team1": {
                "name": "Biratnagar Kings",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391936.jpg-jBF9Rx7IFzDMfn7a0tHzDrpXa3WZJX.jpeg",
                "score": "144/8",
                "overs": "20"
            },
            "team2": {
                "name": "Lumbini Lions",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391942.jpg-NIWqkidgZrUmi5kWY0YlovlZifDfNX.jpeg",
                "score": "145/5",
                "overs": "17.4",
                "target": "145"
            },
            "result": "Lumbini won by 5 wickets (with 14 balls remaining)",
            "winner": "Lumbini Lions"
        },
        {
            "id": 23,
            "matchNumber": "Match 23",
            "date": "Dec 04",
            "time": "11:00 AM",
            "venue": "Kirtipur",
            "status": "completed",
            "matchType": "23rd Match",
            "team1": {
                "name": "Kathmandu Gorkhas",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392043-kzYjrSVxDd6DR0xeVnAxTYmk4YcOyK.png",
                "score": "165/8",
                "overs": "20"
            },
            "team2": {
                "name": "Pokhara Avengers",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391990-9Q8yVvbgP74aKe7XkmT9RRfMxc1oFh.png",
                "score": "152",
                "overs": "20",
                "target": "166"
            },
            "result": "Kathmandu won by 13 runs",
            "winner": "Kathmandu Gorkhas"
        },
        {
            "id": 24,
            "matchNumber": "Match 24",
            "date": "Dec 04",
            "time": "03:15 PM",
            "venue": "Kirtipur",
            "status": "completed",
            "matchType": "24th Match (D/N)",
            "team1": {
                "name": "Chitwan Rhinos",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392044.jpg-HICbW76XNQ2F8GccXx3uscx4nuKjo1.jpeg",
                "score": "120",
                "overs": "17.1",
                "target": "170"
            },
            "team2": {
                "name": "Sudurpaschim Royals",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391989-cqkiosfycHQHEu4PJ2g6C6yhvlVjoB.png",
                "score": "169/4",
                "overs": "20"
            },
            "result": "S Paschim won by 49 runs",
            "winner": "Sudurpaschim Royals"
        },
        {
            "id": 25,
            "matchNumber": "Match 25",
            "date": "Dec 05",
            "time": "03:15 PM",
            "venue": "Kirtipur",
            "status": "completed",
            "matchType": "25th Match (D/N)",
            "team1": {
                "name": "Janakpur Bolts",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392045-oYcvhhIZEJam7aCUCN5bQepK0C9sHQ.png",
                "score": "132/6",
                "overs": "20"
            },
            "team2": {
                "name": "Lumbini Lions",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391942.jpg-NIWqkidgZrUmi5kWY0YlovlZifDfNX.jpeg",
                "score": "136/6",
                "overs": "19.1",
                "target": "133"
            },
            "result": "Lumbini won by 4 wickets (with 5 balls remaining)",
            "winner": "Lumbini Lions"
        },
        {
            "id": 26,
            "matchNumber": "Match 26",
            "date": "Dec 06",
            "time": "10:30 AM",
            "venue": "Kirtipur",
            "status": "completed",
            "matchType": "26th Match",
            "team1": {
                "name": "Sudurpaschim Royals",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391989-cqkiosfycHQHEu4PJ2g6C6yhvlVjoB.png",
                "score": "147/6",
                "overs": "20"
            },
            "team2": {
                "name": "Biratnagar Kings",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391936.jpg-jBF9Rx7IFzDMfn7a0tHzDrpXa3WZJX.jpeg",
                "score": "150/4",
                "overs": "11.5",
                "target": "148"
            },
            "result": "Biratnagar won by 6 wickets (with 49 balls remaining)",
            "winner": "Biratnagar Kings"
        },
        {
            "id": 27,
            "matchNumber": "Match 27",
            "date": "Dec 06",
            "time": "02:45 PM",
            "venue": "Kirtipur",
            "status": "completed",
            "matchType": "27th Match (D/N)",
            "team1": {
                "name": "Chitwan Rhinos",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392044.jpg-HICbW76XNQ2F8GccXx3uscx4nuKjo1.jpeg",
                "score": "120/6",
                "overs": "20"
            },
            "team2": {
                "name": "Pokhara Avengers",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391990-9Q8yVvbgP74aKe7XkmT9RRfMxc1oFh.png",
                "score": "121/2",
                "overs": "19.4",
                "target": "121"
            },
            "result": "Pokhara won by 8 wickets (with 2 balls remaining)",
            "winner": "Pokhara Avengers"
        },
        {
            "id": 28,
            "matchNumber": "Match 28",
            "date": "Dec 07",
            "time": "02:45 PM",
            "venue": "Kirtipur",
            "status": "completed",
            "matchType": "28th Match (D/N)",
            "team1": {
                "name": "Karnali Yaks",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392046-hXfFTHzoq2lnHjeLNwUI7QlTqtocvg.png",
                "score": "129/9",
                "overs": "20"
            },
            "team2": {
                "name": "Janakpur Bolts",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392045-oYcvhhIZEJam7aCUCN5bQepK0C9sHQ.png",
                "score": "126/7",
                "overs": "20",
                "target": "130"
            },
            "result": "Karnali won by 3 runs",
            "winner": "Karnali Yaks"
        },
        {
            "id": 29,
            "matchNumber": "Qualifier 1",
            "date": "Dec 09",
            "time": "03:15 PM",
            "venue": "Kirtipur",
            "status": "completed",
            "matchType": "Qualifier 1 (D/N)",
            "team1": {
                "name": "Sudurpaschim Royals",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391989-cqkiosfycHQHEu4PJ2g6C6yhvlVjoB.png",
                "score": "155/7",
                "overs": "20"
            },
            "team2": {
                "name": "Biratnagar Kings",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391936.jpg-jBF9Rx7IFzDMfn7a0tHzDrpXa3WZJX.jpeg",
                "score": "78",
                "overs": "14.1",
                "target": "156"
            },
            "result": "S Paschim won by 77 runs",
            "winner": "Sudurpaschim Royals"
        },
        {
            "id": 30,
            "matchNumber": "Eliminator",
            "date": "Dec 10",
            "time": "03:15 PM",
            "venue": "Kirtipur",
            "status": "completed",
            "matchType": "Eliminator (D/N)",
            "team1": {
                "name": "Kathmandu Gorkhas",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392043-kzYjrSVxDd6DR0xeVnAxTYmk4YcOyK.png",
                "score": "111",
                "overs": "20"
            },
            "team2": {
                "name": "Lumbini Lions",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391942.jpg-NIWqkidgZrUmi5kWY0YlovlZifDfNX.jpeg",
                "score": "112/6",
                "overs": "17.4",
                "target": "112"
            },
            "result": "Lumbini won by 4 wickets (with 14 balls remaining)",
            "winner": "Lumbini Lions"
        },
        {
            "id": 31,
            "matchNumber": "Qualifier 2",
            "date": "Dec 11",
            "time": "03:15 PM",
            "venue": "Kirtipur",
            "status": "completed",
            "matchType": "Qualifier 2 (D/N)",
            "team1": {
                "name": "Lumbini Lions",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391942.jpg-NIWqkidgZrUmi5kWY0YlovlZifDfNX.jpeg",
                "score": "134/8",
                "overs": "20"
            },
            "team2": {
                "name": "Biratnagar Kings",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391936.jpg-jBF9Rx7IFzDMfn7a0tHzDrpXa3WZJX.jpeg",
                "score": "94",
                "overs": "17.5",
                "target": "135"
            },
            "result": "Lumbini won by 40 runs",
            "winner": "Lumbini Lions"
        },
        {
            "id": 32,
            "matchNumber": "Final",
            "date": "Dec 13",
            "time": "02:45 PM",
            "venue": "Kirtipur",
            "matchType": "Final (D/N)",
            "team1": {
                "name": "Sudurpaschim Royals",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/391989-cqkiosfycHQHEu4PJ2g6C6yhvlVjoB.png"
            },
            "team2": {
                "name": "Karnali Yaks",
                "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392046-hXfFTHzoq2lnHjeLNwUI7QlTqtocvg.png"
            }
        }
    ]
}


