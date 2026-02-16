'use client'

import { Suspense } from 'react'
import NPLSchedule from '../../components/SchedulePage'
import { Breadcrumb } from '@/components/breadcrumb'
import { useSearchParams } from 'next/navigation'


function ScheduleContent() {
    const searchParams = useSearchParams()
    const teamFromUrl = searchParams.get('team') || undefined
    // Define breadcrumb items
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'NPL Schedule 2026', href: '/schedule', isCurrent: true }
    ];

    // JSON-LD Schema for SEO
    const schedulePageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://CPLt20league.com/schedule#webpage",
        "name": "CPL 2026 Schedule, Fixtures, Dates & Match List",
        "description": "Complete CPL 2026 schedule with match dates, fixtures, venues, timings, playoffs, and final details officially updated.",
        "url": "https://CPLt20league.com/schedule",
        "inLanguage": "en",
        "isPartOf": {
          "@id": "https://CPLt20league.com/#website"
        },
        "about": {
          "@id": "https://CPLt20league.com/#sportsleague"
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
                item: "https://CPLt20league.com/"
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "CPL Schedule 2026",
                item: "https://CPLt20league.com/schedule"
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Which teams are playing in CPL 2026?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The CPL 2026 will feature six teams: Sylhet Titans, Chattogram Royals, Dhaka Capitals, Noakhali Express, Rangpur Riders, and Rajshahi Warriors."
                }
            },
            {
                "@type": "Question",
                name: "When does the Coastal Premier League 2026 start and end?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The CPL 2026 will take place from 26 December 2025 to 23 January 2026."
                }
            },
            {
                "@type": "Question",
                name: "Where can I find the CPL 2026 schedule?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The full CPL 2026 schedule is available online with complete match fixtures, venues, timings, and playoff dates."
                }
            }
        ]
    };

    return (
        <>
            {/* JSON-LD Schema */}
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
                <NPLSchedule initialTeam={teamFromUrl} />
            </div>
        </>
    )
}

export default function ScheduleHome() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#122754] pt-20" />}>
            <ScheduleContent />
        </Suspense>
    )
}
