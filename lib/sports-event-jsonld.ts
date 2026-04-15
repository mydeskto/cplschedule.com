/**
 * SportsEvent JSON-LD for NPL matches (schema.org).
 * https://schema.org/SportsEvent
 */

export const NPL_SCHEDULE_URL = "https://nplschedule.com/schedule";
const SITE_WWW = "https://www.nplschedule.com";

const VENUE_PLACE = {
  "@type": "Place",
  name: "Tribhuvan University International Cricket Ground",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kirtipur",
    addressCountry: "NP",
  },
} as const;

/** Standard schema.org status; EventUpcoming is not a valid EventStatusType member. */
const EVENT_STATUS_SCHEDULED = "https://schema.org/EventUpcoming";

const SUPER_EVENT = {
  "@type": "SportsEvent",
  name: "Nepal Premier League 2026 Season 3",
  url: `${SITE_WWW}/`,
  startDate: "2026-10-17",
  organizer: {
    "@type": "Organization",
    name: "nplschedule.com",
  },
} as const;

const teamSlugMap: Record<string, string> = {
  "Biratnagar Kings": "biratnagar-kings",
  "Janakpur Bolts": "janakpur-bolts",
  "Kathmandu Gurkhas": "kathmandu-gurkhas",
  "Kathmandu Gorkhas": "kathmandu-gurkhas",
  "Kathmandu Gurkha": "kathmandu-gurkhas",
  "Chitwan Rhinos": "chitwan-rhinos",
  "Sudurpaschim Royals": "sudurpaschim-royals",
  "Pokhara Avengers": "pokhara-avengers",
  "Karnali Yaks": "karnali-yaks",
  "Lumbini Lions": "lumbini-lions",
};

function teamUrl(teamName: string): string | undefined {
  const slug =
    teamSlugMap[teamName] ??
    teamName.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  if (!slug) return undefined;
  return `${SITE_WWW}/teams/${slug}`;
}

const MONTHS: Record<string, number> = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

function pad2(n: number): string {
  return n.toString().padStart(2, "0");
}

function parseTimeTo24h(timeStr: string): { h: number; m: number } {
  const m = timeStr.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!m) return { h: 12, m: 0 };
  let h = parseInt(m[1], 10);
  const min = parseInt(m[2], 10);
  const ap = m[3].toUpperCase();
  if (ap === "PM" && h !== 12) h += 12;
  if (ap === "AM" && h === 12) h = 0;
  return { h, m: min };
}

function formatNepalISO(d: Date): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kathmandu",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(d);
  const get = (t: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === t)?.value ?? "00";
  return `${get("year")}-${get("month")}-${get("day")}T${get("hour")}:${get("minute")}:${get("second")}+05:45`;
}

function startDateNepalISO(dateStr: string, timeStr: string, year: number): string {
  const [monthName, dayPart] = dateStr.trim().split(/\s+/);
  const day = parseInt(dayPart, 10);
  const monthIndex = MONTHS[monthName];
  if (monthIndex === undefined || Number.isNaN(day)) {
    return `${year}-10-17T12:00:00+05:45`;
  }
  const { h, m } = parseTimeTo24h(timeStr);
  const rough = `${year}-${pad2(monthIndex + 1)}-${pad2(day)}T${pad2(h)}:${pad2(m)}:00+05:45`;
  return rough;
}

function endDateFromStart(startIso: string, hoursLater: number): string {
  const d = new Date(startIso);
  if (Number.isNaN(d.getTime())) return startIso;
  const end = new Date(d.getTime() + hoursLater * 3600000);
  return formatNepalISO(end);
}

function phaseFromMatchType(matchType: string): string {
  const t = matchType.toLowerCase();
  if (t.includes("final") && !t.includes("semi")) return "Final";
  if (t.includes("eliminator")) return "Eliminator";
  if (t.includes("qualifier")) return "Qualifier";
  return "Group Stage";
}

export type MatchLike = {
  id: number;
  matchNumber: string;
  date: string;
  time: string;
  venue: string;
  status?: string;
  matchType: string;
  team1: { name: string };
  team2: { name: string };
};

const SEASON_YEAR = 2026;
const MATCH_DURATION_HOURS = 5;

export function matchToSportsEvent(match: MatchLike): Record<string, unknown> {
  const startIso = startDateNepalISO(match.date, match.time, SEASON_YEAR);
  const endIso = endDateFromStart(startIso, MATCH_DURATION_HOURS);
  const phase = phaseFromMatchType(match.matchType);
  const homeUrl = teamUrl(match.team1.name);
  const awayUrl = teamUrl(match.team2.name);

  const name = `${match.team1.name} vs ${match.team2.name}, ${match.matchType}, NPL`;
  const description = `T20, ${phase} — ${match.team1.name} vs ${match.team2.name}`;

  const homeTeam: Record<string, unknown> = {
    "@type": "SportsTeam",
    name: match.team1.name,
  };
  if (homeUrl) homeTeam.url = homeUrl;

  const awayTeam: Record<string, unknown> = {
    "@type": "SportsTeam",
    name: match.team2.name,
  };
  if (awayUrl) awayTeam.url = awayUrl;

  return {
    "@type": "SportsEvent",
    "@id": `${NPL_SCHEDULE_URL}#match-${match.id}`,
    name,
    description,
    sport: "Cricket",
    startDate: startIso,
    endDate: endIso,
    eventStatus: EVENT_STATUS_SCHEDULED,
    url: NPL_SCHEDULE_URL,
    homeTeam,
    awayTeam,
    location: { ...VENUE_PLACE },
    superEvent: { ...SUPER_EVENT },
  };
}

export function buildScheduleSportsEventsGraph(matches: MatchLike[]) {
  return {
    "@context": "https://schema.org",
    "@graph": matches.map((m) => matchToSportsEvent(m)),
  };
}
