"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const OPENER = new Date("2026-10-26T16:00:00+05:45").getTime()

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
      <span className="npl-countdown-label">October 26 → November 21</span>

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

        <div className="npl-eyebrow">Season 3 · October 26 – November 21, 2026</div>
        <h1>
          NPL <em>2026</em>
        </h1>
        <p className="npl-hero-sub">
         <b>Follow the complete NPL 2026 | Nepal Premier League Season 3 Schedule,</b>  where every fixture will be played at Tribhuvan University Cricket Ground, Kirtipur, featuring day and night matches as all eight teams compete for a place in the final.
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

        
      </section>

      
    </>
  )
}
