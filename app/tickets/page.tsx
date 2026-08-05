import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import {
  ticketsSeo,
  ticketsIntro,
  quickFactsRows,
  expectedPriceRows,
  whereToBuySection,
  howToBookSection,
  confirmedPricingSection,
  priceHistoryRows,
  priceHistoryNote,
  seasonPassSection,
  teamsScheduleSection,
  stadiumSection,
  ticketsFaqs,
  ticketsFaqSchema,
} from "@/data/tickets-2026-data"

export const metadata: Metadata = {
  title: ticketsSeo.title,
  description: ticketsSeo.description,
  alternates: {
    canonical: ticketsSeo.canonical,
  },
  openGraph: {
    title: ticketsSeo.title,
    description: ticketsSeo.description,
    url: ticketsSeo.canonical,
    type: "article",
  },
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-2xl md:text-4xl font-black text-white tracking-tighter uppercase">
        {children}
      </h2>
      <div className="h-1 w-24 bg-[#f26522] mx-auto rounded-full mt-4" />
    </div>
  )
}

function Prose({ children }: { children: ReactNode }) {
  return (
    <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4 last:mb-0">
      {children}
    </p>
  )
}

function DataTable({
  headers,
  rows,
}: {
  headers: string[]
  rows: ReactNode[][]
}) {
  return (
    <div className="w-full overflow-x-auto rounded-sm border border-white/10 bg-white shadow-md shadow-[#122754]/8 mb-6">
      <table className="w-full border-collapse text-left min-w-[560px]">
        <thead>
          <tr className="bg-[#122754]">
            {headers.map((h) => (
              <th
                key={h}
                className="px-3 sm:px-4 py-3 text-[10px] sm:text-xs font-black uppercase tracking-widest text-white border-r border-white/10 last:border-r-0"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-[#122754]">
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-t border-[#122754]/12 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
            >
              {row.map((cell, j) => (
                <td
                  key={`${i}-${j}`}
                  className={`px-3 sm:px-4 py-3 text-xs sm:text-sm align-top border-r border-[#122754]/12 last:border-r-0 leading-relaxed ${
                    j === 0 ? "font-bold" : "font-medium"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mb-4 list-none">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-white/80 text-sm sm:text-base leading-relaxed"
        >
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f26522]"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function TicketsPage() {
  return (
    <div className="min-h-screen bg-[#122754] text-white pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ticketsFaqSchema) }}
      />

      <section className="relative px-4 sm:px-6 lg:px-8 pt-8 pb-6 text-center overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          
          {ticketsIntro.map((p) => (
            <Prose key={p.slice(0, 48)}>{p}</Prose>
          ))}
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f26522]/5 blur-[120px] rounded-full -mr-48 -mt-48 pointer-events-none" />
      </section>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 relative z-10">
        {/* Quick Facts */}
        <section>
          <SectionHeading>
            NPL Season 3 <span className="text-[#f26522]">Quick Facts</span>
          </SectionHeading>
          <DataTable
            headers={["Detail", "Information"]}
            rows={quickFactsRows.map((r) => [r.detail, r.information])}
          />
        </section>

        {/* Expected prices */}
        <section>
          <SectionHeading>
            Expected NPL 2026 <span className="text-[#f26522]">Ticket Price</span>
          </SectionHeading>
          <DataTable
            headers={["Match Type", "Projected General", "Projected VIP"]}
            rows={expectedPriceRows.map((r) => [r.matchType, r.general, r.vip])}
          />
        </section>

        {/* Where to buy */}
        <section>
          <SectionHeading>
            Where to Buy <span className="text-[#f26522]">NPL Tickets</span>
          </SectionHeading>
          <Prose>{whereToBuySection.intro}</Prose>
          <Prose>{whereToBuySection.thatMeans}</Prose>
          <BulletList items={whereToBuySection.bullets} />
          <p className="text-white/80 text-sm sm:text-base mb-4">
            Official booking:{" "}
            <a
              href="https://khalti.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f26522] underline underline-offset-2"
            >
              khalti.com
            </a>
            {" / "}
            <a
              href="https://events.khalti.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f26522] underline underline-offset-2"
            >
              Khalti Events
            </a>
          </p>
        </section>

        {/* How to book */}
        <section>
          <SectionHeading>
            How to Book NPL Tickets on Khalti:{" "}
            <span className="text-[#f26522]">Step-by-Step</span>
          </SectionHeading>
          <ol className="space-y-4 mb-6 list-none">
            {howToBookSection.steps.map((step, i) => (
              <li
                key={i}
                className="flex gap-3 sm:gap-4 rounded-sm border border-white/10 bg-white/5 px-4 py-4"
              >
                <span className="shrink-0 w-8 h-8 rounded-sm bg-[#f26522] text-black text-xs font-black flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed pt-1">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Confirmed vs not */}
        <section>
          <SectionHeading>
            NPL Ticket Prices: What&apos;s Confirmed and{" "}
            <span className="text-[#f26522]">What Isn&apos;t</span>
          </SectionHeading>
          {confirmedPricingSection.paragraphs.map((p) => (
            <Prose key={p.slice(0, 40)}>{p}</Prose>
          ))}
          <BulletList items={confirmedPricingSection.bullets} />
        </section>

        {/* Price history */}
        <section>
          <SectionHeading>
            NPL Ticket Price History{" "}
            <span className="text-[#f26522]">(Season 1 vs Season 2)</span>
          </SectionHeading>
          <DataTable
            headers={[
              "Match Type",
              "Season 1 (2024) General / VIP",
              "Season 2 (2025) General / VIP",
            ]}
            rows={priceHistoryRows.map((r) => [r.matchType, r.season1, r.season2])}
          />
          <Prose>{priceHistoryNote}</Prose>
        </section>

        {/* Season passes */}
        <section>
          <SectionHeading>
            Season Passes <span className="text-[#f26522]">Explained</span>
          </SectionHeading>
          {seasonPassSection.paragraphs.map((p) => (
            <Prose key={p.slice(0, 40)}>{p}</Prose>
          ))}
        </section>

        {/* Teams & schedule */}
        <section>
          <SectionHeading>
            NPL Season 3 Teams and{" "}
            <span className="text-[#f26522]">Schedule Snapshot</span>
          </SectionHeading>
          <Prose>{teamsScheduleSection.intro}</Prose>
          <BulletList items={teamsScheduleSection.teams} />
          {teamsScheduleSection.paragraphs.map((p) => (
            <Prose key={p.slice(0, 40)}>{p}</Prose>
          ))}
          <div className="flex justify-center pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#f26522] hover:bg-[#f26522]/90 text-black rounded-sm font-black transition-all"
            >
              Check full NPL 2026 schedule <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Stadium */}
        <section>
          <SectionHeading>
            At the Stadium: Gates, Seating, and{" "}
            <span className="text-[#f26522]">What to Bring</span>
          </SectionHeading>
          <BulletList items={stadiumSection.bullets} />
        </section>

        {/* FAQs */}
        <section id="faqs" className="scroll-mt-24">
          <SectionHeading>
            Frequently Asked <span className="text-[#f26522]">Questions</span>
          </SectionHeading>
          <div className="space-y-3">
            {ticketsFaqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-sm border border-white/10 bg-white/5 open:border-[#f26522]/50 open:bg-white/10 transition-colors"
                open={index === 0}
              >
                <summary className="cursor-pointer list-none px-4 sm:px-6 py-4 flex items-start gap-3">
                  <span className="shrink-0 w-8 h-8 rounded-sm bg-[#f26522] text-black text-xs font-black flex items-center justify-center">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-bold text-white text-sm sm:text-base pt-1">
                    {faq.question}
                  </span>
                </summary>
                <div className="px-4 sm:px-6 pb-5 pl-[3.75rem] sm:pl-[4.25rem]">
                  <div className="h-px w-full bg-white/10 mb-3" />
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
