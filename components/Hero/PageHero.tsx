import Link from "next/link"
import type { ReactNode } from "react"

export type PageHeroCta = {
  label: string
  href: string
  primary?: boolean
  external?: boolean
}

type PageHeroProps = {
  eyebrow?: string
  /** Plain title before the accent, e.g. "NPL" */
  title: string
  /** Accent word rendered in crimson <em>, e.g. "Teams" */
  accent: string
  sub: string
  ctas?: PageHeroCta[]
  children?: ReactNode
}

function StadiumSvg() {
  return (
    <svg
      className="npl-hero-stadium"
      viewBox="0 0 800 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <ellipse
        cx="400"
        cy="190"
        rx="380"
        ry="40"
        fill="none"
        stroke="#f2ede1"
        strokeWidth="2"
      />
      <ellipse
        cx="400"
        cy="190"
        rx="300"
        ry="26"
        fill="none"
        stroke="#f2ede1"
        strokeWidth="1.5"
      />
      <path
        d="M20,190 Q400,60 780,190"
        fill="none"
        stroke="#f2ede1"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export function PageHero({
  eyebrow = "Season 3 · Nov 17 – Dec 13, 2026",
  title,
  accent,
  sub,
  ctas,
  children,
}: PageHeroProps) {
  return (
    <section className="npl-hero">
      <StadiumSvg />

      <div className="npl-eyebrow">{eyebrow}</div>
      <h1>
        {title} <em>{accent}</em>
      </h1>
      <p className="npl-hero-sub">{sub}</p>

      {ctas && ctas.length > 0 ? (
        <div className="npl-hero-cta">
          {ctas.map((cta) => {
            const className = `npl-btn ${cta.primary ? "npl-btn-primary" : "npl-btn-secondary"}`
            if (cta.external) {
              return (
                <a
                  key={cta.href + cta.label}
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {cta.label}
                </a>
              )
            }
            return (
              <Link key={cta.href + cta.label} href={cta.href} className={className}>
                {cta.label}
              </Link>
            )
          })}
        </div>
      ) : null}

      {children}
    </section>
  )
}
