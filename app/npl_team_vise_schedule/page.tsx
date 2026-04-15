
import NPLSchedule from '../../components/SchedulePage'
import { Breadcrumb } from '@/components/breadcrumb'
import { matchesData } from '@/data/matches-data'
import { buildScheduleSportsEventsGraph } from '@/lib/sports-event-jsonld'
import NPLScheduleTeamWise from '@/components/teamSchedule'
import { Metadata } from 'next'


export async function generateMetadata(): Promise<Metadata> {

  return {
    title: "NPL 2026 Schedule: Team-Wise Fixtures, Dates & Today Match Updates",
    description: "Check the complete NPL 2026 team-wise schedule, fixtures, and match dates. Get the latest NPL schedule and NPL today match schedule with all upcoming matches and updates.",
    keywords: ["NPL Match Schedule 2026",
      "Nepal Premier League Fixtures",
      "NPL Today Match",
      "npl schedule",
      "NPL 2026 schedule",
      "NPL Match Timetable",
      "npl schedule 2026",
      "npl schedule today",
      "npl match schedule",
      "NPL Cricket Schedule",
      "Nepal T20 League Schedule",
      "NPL Match Calendar",
      "NPL Live Match Schedule",
      "Nepal Premier League Match Dates",
      "NPLT20 Fixtures 2026"],
    robots: {
    index: true, // This will override the root layout robots for this route only
    follow: true,
    googleBot: {
        index: true,
        follow: true,
        noimageindex: false
      },
  }
    , alternates: {
      canonical: 'https://nplt20league.com/npl_team-wise-schedule',
    }
  }
}


export default function ScheduleHome() {
    // Define breadcrumb items
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'NPL Team-Wise Schedule 2026', href: '/npl_team-wise-schedule', isCurrent: true }
    ];

    const scheduleSportsEventsSchema = buildScheduleSportsEventsGraph(matchesData.matches)

    // JSON-LD Schema for SEO
    const schedulePageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://nplschedule.com/schedule#webpage",
        "name": "NPL 2026 Schedule, Fixtures, Dates & Match List",
        "description": "Complete NPL 2026 schedule with match dates, fixtures, venues, timings, playoffs, and final details for Nepal Premier League Season 3.",
        "url": "https://nplschedule.com/npl_team-wise-schedule",
        "inLanguage": "en",
        "isPartOf": {
          "@id": "https://nplschedule.com/#website"
        },
        "about": {
          "@id": "https://nplschedule.com/#sportsleague"
        }
      };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://nplschedule.com/"
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "NPL Team-Wise Schedule 2026",
                item: "https://nplschedule.com/npl_team-wise-schedule"
            }
        ]
    };


    return (
        <>
            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(scheduleSportsEventsSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schedulePageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            
            <div className="min-h-screen bg-[#122754] pt-20 font-inter">
                {/* Breadcrumb */}
                <div className="px-5 md:px-10">
                    <Breadcrumb items={breadcrumbItems} />
                </div>
                <NPLScheduleTeamWise />
            </div>
        </>
    )
}
