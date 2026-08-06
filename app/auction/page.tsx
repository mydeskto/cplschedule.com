import type { Metadata } from "next"
import type { ReactNode } from "react"
import {
  auctionSeo,
  auctionIntro,
  keyFactsRows,
  auctionDatesSection,
  retentionSection,
  retainedPlayersRows,
  retainedNote,
  categoriesSection,
  soldPlayersRows,
  unsoldSection,
  squadsSection,
  purseSection,
  seasonCompareSection,
  expertReadSection,
  auctionFaqs,
  auctionFaqSchema,
} from "@/data/auction-2026-data"
import { PageHero } from "@/components/Hero/PageHero"

export const metadata: Metadata = {
  title: auctionSeo.title,
  description: auctionSeo.description,
  alternates: {
    canonical: `https://nplschedule.com${auctionSeo.slug}`,
  },
  openGraph: {
    title: auctionSeo.title,
    description: auctionSeo.description,
    url: `https://nplschedule.com${auctionSeo.slug}`,
    type: "article",
  },
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-2xl md:text-4xl font-black text-white tracking-tighter uppercase">
        {children}
      </h2>
      <div className="h-1 w-24 bg-[#c8102e] mx-auto rounded-full mt-4" />
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

function ProseHtml({ html }: { html: string }) {
  return (
    <p
      className="text-white/80 text-sm sm:text-base leading-relaxed mb-4 last:mb-0 [&_a]:text-[#c8102e] [&_a]:underline [&_a]:underline-offset-2"
      dangerouslySetInnerHTML={{ __html: html }}
    />
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
    <div className="w-full overflow-x-auto rounded-sm border border-white/10 bg-white shadow-md shadow-[#111528]/8 mb-6">
      <table className="w-full border-collapse text-left min-w-[640px]">
        <thead>
          <tr className="bg-[#111528]">
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
        <tbody className="text-[#111528]">
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-t border-[#111528]/12 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
            >
              {row.map((cell, j) => (
                <td
                  key={`${i}-${j}`}
                  className={`px-3 sm:px-4 py-3 text-xs sm:text-sm align-top border-r border-[#111528]/12 last:border-r-0 leading-relaxed ${
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
        <li key={item} className="flex gap-3 text-white/80 text-sm sm:text-base leading-relaxed">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c8102e]" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function NplAuction2026Page() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(auctionFaqSchema) }}
      />

      <PageHero
        title="NPL"
        accent="Auction"
        sub="Full NPL Season 3 auction results, retained players, sold lists, squads, and purse analysis for Nepal Premier League 2026."
        ctas={[
          { label: "Key facts", href: "#key-facts", primary: true },
          { label: "Full squads", href: "#squads" },
        ]}
      />

      <section className="relative px-4 sm:px-6 lg:px-8 pb-6 text-center overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <Prose>{auctionIntro}</Prose>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 relative z-10">
        {/* Key Facts */}
        <section id="key-facts">
          <SectionHeading>
            NPL Season 3 Auction: <span className="text-[#c8102e]">Key Facts</span>
          </SectionHeading>
          <DataTable
            headers={["Detail", "Information"]}
            rows={keyFactsRows.map((r) => [r.detail, r.information])}
          />
        </section>

        {/* Auction Dates */}
        <section>
          <SectionHeading>
            Auction <span className="text-[#c8102e]">Dates</span>
          </SectionHeading>
          {auctionDatesSection.paragraphs.map((p, i) =>
            auctionDatesSection.htmlParagraphIndexes?.includes(i) ? (
              <ProseHtml key={i} html={p} />
            ) : (
              <Prose key={i}>{p}</Prose>
            )
          )}
        </section>

        {/* Retention */}
        <section>
          <SectionHeading>
            How the Retention Window <span className="text-[#c8102e]">Worked (June 2026)</span>
          </SectionHeading>
          {retentionSection.paragraphs.map((p) => (
            <Prose key={p.slice(0, 40)}>{p}</Prose>
          ))}
          <BulletList items={retentionSection.bullets} />
          {retentionSection.closing.map((p) => (
            <Prose key={p.slice(0, 40)}>{p}</Prose>
          ))}
        </section>

        {/* Team-Wise Retained */}
        <section>
          <SectionHeading>
            Team-Wise <span className="text-[#c8102e]">Retained Players</span>
          </SectionHeading>
          <DataTable
            headers={["Team", "Retained", "Marquee", "Other Retained Names"]}
            rows={retainedPlayersRows.map((r) => [
              <a
                key={r.team}
                href={r.teamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#111528] hover:text-[#c8102e] underline underline-offset-2"
              >
                {r.team}
              </a>,
              r.retained,
              r.marquee,
              r.other,
            ])}
          />
          <Prose>{retainedNote}</Prose>
        </section>

        {/* Categories */}
        <section>
          <SectionHeading>
            Auction Categories and <span className="text-[#c8102e]">Price Bands</span>
          </SectionHeading>
          <Prose>{categoriesSection.intro}</Prose>
          <DataTable
            headers={["Category", "Players in pool", "Base price", "Standard ceiling"]}
            rows={categoriesSection.rows.map((r) => [
              r.category,
              r.players,
              r.base,
              r.ceiling,
            ])}
          />
          {categoriesSection.paragraphs.map((p) => (
            <Prose key={p.slice(0, 40)}>{p}</Prose>
          ))}
        </section>

        {/* Sold players */}
        <section>
          <SectionHeading>
            Full List of Players Sold at the{" "}
            <span className="text-[#c8102e]">NPL Season 3 Auction</span>
          </SectionHeading>
          <DataTable
            headers={["Player", "Team", "Category", "Sold Price (NPR lakh)"]}
            rows={soldPlayersRows.map((r) => [
              r.player,
              r.team,
              r.category,
              r.price,
            ])}
          />
        </section>

        {/* Unsold / wish-list */}
        <section>
          <SectionHeading>
            Unsold Players and the <span className="text-[#c8102e]">Wish-List Process</span>
          </SectionHeading>
          {unsoldSection.paragraphs.map((p) => (
            <Prose key={p.slice(0, 40)}>{p}</Prose>
          ))}
          <BulletList items={unsoldSection.bullets} />
          {unsoldSection.closing.map((p) => (
            <Prose key={p.slice(0, 40)}>{p}</Prose>
          ))}
        </section>

        {/* Full squads */}
        <section id="squads">
          <SectionHeading>
            NPL 2026 Full Squads <span className="text-[#c8102e]">by Team</span>
          </SectionHeading>
          <Prose>{squadsSection.intro}</Prose>
          <DataTable
            headers={[
              "Team",
              "Retained",
              "Auction Buys Logged",
              "Squad Filled So Far",
              "Notable New Signing",
            ]}
            rows={squadsSection.rows.map((r) => [
              r.team,
              r.retained,
              r.auctionBuys,
              r.squadFilled,
              r.notable,
            ])}
          />
          {squadsSection.closing.map((p) => (
            <Prose key={p.slice(0, 40)}>{p}</Prose>
          ))}
        </section>

        {/* Purse */}
        <section>
          <SectionHeading>
            Purse Analysis: Who Spent Big,{" "}
            <span className="text-[#c8102e]">Who Held Back</span>
          </SectionHeading>
          <DataTable
            headers={["Team", "Purse Spent (NPR lakh)", "Purse Left (NPR lakh)"]}
            rows={purseSection.rows.map((r) => [r.team, r.spent, r.left])}
          />
          {purseSection.paragraphs.map((p) => (
            <Prose key={p.slice(0, 40)}>{p}</Prose>
          ))}
        </section>

        {/* Season compare */}
        <section>
          <SectionHeading>
            Season 2 vs Season 3 Auction:{" "}
            <span className="text-[#c8102e]">What Changed</span>
          </SectionHeading>
          <DataTable
            headers={["Factor", "Season 2 (2025)", "Season 3 (2026)"]}
            rows={seasonCompareSection.rows.map((r) => [
              r.factor,
              r.season2,
              r.season3,
            ])}
          />
          {seasonCompareSection.closing.map((p) => (
            <Prose key={p.slice(0, 40)}>{p}</Prose>
          ))}
        </section>

        {/* Expert read */}
        <section>
          <SectionHeading>
            Team-by-Team <span className="text-[#c8102e]">Expert Read</span>
          </SectionHeading>
          {expertReadSection.paragraphs.map((p) => (
            <Prose key={p.slice(0, 40)}>{p}</Prose>
          ))}
        </section>

        {/* FAQs */}
        <section id="faqs" className="scroll-mt-24">
          <SectionHeading>
            Frequently Asked <span className="text-[#c8102e]">Questions</span>
          </SectionHeading>
          <div className="space-y-3">
            {auctionFaqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-sm border border-white/10 bg-white/5 open:border-[#c8102e]/50 open:bg-white/10 transition-colors"
                open={index === 0}
              >
                <summary className="cursor-pointer list-none px-4 sm:px-6 py-4 flex items-start gap-3">
                  <span className="shrink-0 w-8 h-8 rounded-sm bg-[#c8102e] text-black text-xs font-black flex items-center justify-center">
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
