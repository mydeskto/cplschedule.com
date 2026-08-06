'use client'

import { Suspense } from 'react'
import NPLSchedule from '../../components/SchedulePage'
import { Breadcrumb } from '@/components/breadcrumb'
import { useSearchParams } from 'next/navigation'
import { matchesData } from '@/data/matches-data'
import { buildScheduleSportsEventsGraph } from '@/lib/sports-event-jsonld'
import { PageHero } from '@/components/Hero/PageHero'


function ScheduleContent() {
    const searchParams = useSearchParams()
    const teamFromUrl = searchParams.get('team') || undefined
    // Define breadcrumb items
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'NPL Schedule 2026', href: '/schedule', isCurrent: true }
    ];

    const scheduleSportsEventsSchema = buildScheduleSportsEventsGraph(matchesData.matches)

    // JSON-LD Schema for SEO
    const schedulePageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://nplschedule.com/schedule#webpage",
        "name": "NPL 2026 Schedule, Fixtures, Dates & Match List",
        "description": "Complete NPL 2026 schedule with match dates, fixtures, venues, timings, playoffs, and final details for Nepal Premier League Season 3.",
        "url": "https://nplschedule.com/schedule",
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
                name: "NPL Schedule 2026",
                item: "https://nplschedule.com/schedule"
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Which teams are playing in NPL 2026?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Nepal Premier League Season 3 features eight teams: Biratnagar Kings, Janakpur Bolts, Kathmandu Gurkhas, Chitwan Rhinos, Sudurpaschim Royals, Pokhara Avengers, Karnali Yaks, and Lumbini Lions."
                }
            },
            {
                "@type": "Question",
                name: "When does the Nepal Premier League 2026 take place?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The NPL 2026 Season 3 is expected in October–November 2026, with fixtures at Tribhuvan University International Cricket Ground, Kirtipur."
                }
            },
            {
                "@type": "Question",
                name: "Where can I find the NPL 2026 schedule?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The full NPL 2026 schedule is available on nplschedule.com with match fixtures, venues, timings, and playoff dates."
                }
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
            
            <div className="min-h-screen bg-transparent font-inter">
                <PageHero
                    title="NPL"
                    accent="Schedule"
                    sub="Full fixtures, match dates, and timings for Nepal Premier League Season 3 — every league and playoff match at Kirtipur."
                    ctas={[
                        { label: "View fixtures", href: "#schedule", primary: true },
                        { label: "Buy tickets", href: "/tickets" },
                    ]}
                />
                {/* Breadcrumb */}
                <div className="px-5 md:px-10">
                    <Breadcrumb items={breadcrumbItems} />
                </div>
                <NPLSchedule initialTeam={teamFromUrl} />
            </div>
        </>
    )
}

export default function ScheduleHome() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-transparent" />}>
            <ScheduleContent />
        </Suspense>
    )
}
