"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const OPENER = new Date("2026-11-17T16:00:00+05:45").getTime()

function Countdown() {
  const [left, setLeft] = useState({ days: 0, hours: 0, mins: 0 })

  useEffect(() => {
    const tick = () => {
      const distance = OPENER - Date.now()
      if (distance <= 0) {
        setLeft({ days: 0, hours: 0, mins: 0 })
        return
      }
      setLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      })
    }
    tick()
    const id = setInterval(tick, 30000)
    return () => clearInterval(id)
  }, [])

  const pad = (n: number) => n.toString().padStart(2, "0")

  return (
    <div className="npl-countdown">
      <div className="npl-countdown-label">Opening match in</div>
      <div className="npl-countdown-units">
        <div className="npl-cd-unit">
          <div className="v">{pad(left.days)}</div>
          <div className="u">Days</div>
        </div>
        <div className="npl-cd-unit">
          <div className="v">{pad(left.hours)}</div>
          <div className="u">Hours</div>
        </div>
        <div className="npl-cd-unit">
          <div className="v">{pad(left.mins)}</div>
          <div className="u">Mins</div>
        </div>
      </div>
    </div>
  )
}

export function SiteHero() {
  return (
    <>
      <section className="npl-hero">
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

        <div className="npl-eyebrow">Season 3 · Nov 17 – Dec 13, 2026</div>
        <h1>
          NPL <em>2026</em>
        </h1>
        <p className="npl-hero-sub">
          Every fixture of the Nepal Premier League&apos;s third season, played
          at Tribhuvan University Cricket Ground, Kirtipur — day and night, one
          venue, eight teams chasing the final.
        </p>

        <div className="npl-hero-cta">
          <a href="#schedule" className="npl-btn npl-btn-primary">
            View fixtures
          </a>
          <Link href="/tickets" className="npl-btn npl-btn-secondary">
            NPL Tickets
          </Link>
        </div>

        <div className="npl-hero-facts">
          <div className="npl-hero-fact">
            <div className="num">8</div>
            <div className="lbl">Teams</div>
          </div>
          <div className="npl-hero-fact">
            <div className="num">28</div>
            <div className="lbl">League matches</div>
          </div>
          <div className="npl-hero-fact">
            <div className="num">1</div>
            <div className="lbl">Venue</div>
          </div>
          <div className="npl-hero-fact">
            <div className="num">27</div>
            <div className="lbl">Days of cricket</div>
          </div>
        </div>

        <Countdown />

        <div className="npl-ridge">
          <span className="npl-ridge-label">Nov 17 → Dec 13</span>
          <svg
            viewBox="0 0 1200 160"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <polygon
              points="0,160 0,110 90,60 170,95 260,40 340,90 430,20 520,80 610,45 700,95 790,55 880,100 970,35 1060,90 1150,60 1200,110 1200,160"
              fill="#171c37"
              stroke="#2c3258"
              strokeWidth="1.5"
            />
            <polygon
              points="0,160 0,125 120,90 230,120 340,75 450,115 560,60 670,110 780,80 900,120 1020,70 1120,110 1200,95 1200,160"
              fill="#111528"
              stroke="none"
              opacity="0.9"
            />
            <circle cx="430" cy="20" r="5" fill="#f2a93b" />
            <line
              x1="430"
              y1="20"
              x2="430"
              y2="0"
              stroke="#f2a93b"
              strokeWidth="1.5"
              strokeDasharray="2 3"
            />
          </svg>
        </div>
      </section>

      <section className="npl-glance" aria-label="Season at a glance">
        <div className="npl-wrap">
          <div className="npl-stats-strip">
            <div className="npl-stat-box">
              <div className="v">28</div>
              <div className="l">League matches</div>
            </div>
            <div className="npl-stat-box">
              <div className="v">8</div>
              <div className="l">Teams</div>
            </div>
            <div className="npl-stat-box">
              <div className="v">1</div>
              <div className="l">Venue</div>
            </div>
            <div className="npl-stat-box">
              <div className="v">56</div>
              <div className="l">Innings</div>
            </div>
            <div className="npl-stat-box">
              <div className="v">1,120</div>
              <div className="l">Overs bowled</div>
            </div>
            <div className="npl-stat-box">
              <div className="v">27</div>
              <div className="l">Days</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
