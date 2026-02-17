"use client"

import { useState } from "react"
import { Search } from "@/lib/icons"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import whiteLogo from "@/public/images/newlogo.png"
import Image from "next/image"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NAV_LINKS = [
  { href: "/", label: "HOME" },
  // { href: "/schedule", label: "SCHEDULE" },
  { href: "/teams", label: "TEAMS" },
  { href: "/points-table", label: "POINTS TABLE" },
  { href: "/news", label: "NEWS" },
  { href: "/NPL-venue", label: "VENUES", icon: "stadium" },
  { href: "/contact-us", label: "CONTACT US", icon: "mail" },
]

const DROPDOWN_LINKS = [
  { href: "/contact-us", label: "CONTACT US", icon: "mail" },

]

export function NavbarDesktop({ isScrolled }: { isScrolled: boolean }) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") return pathname === path
    return pathname === path || pathname.startsWith(path + "/")
  }

  return (
    <motion.div
      className={cn(
        "flex items-center justify-between py-3 px-12 w-full transition-all duration-700",
        isScrolled
          ? "bg-black/90 backdrop-blur-2xl border-b border-white/5 py-2"
          : "bg-transparent"
      )}
    >
      <Link href="/">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative "
        >
          <Image
            src={whiteLogo}
            alt="NPL Logo"
            height={120}
            width={140}
            className="object-contain"
            priority
          />
        </motion.div>
      </Link>
      <div className="flex items-center gap-12">


        <div className="flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[11px] font-black tracking-[0.2em] transition-all duration-300 relative group py-2",
                isActive(link.href) ? "text-[#f26522]" : "text-white/70 hover:text-white"
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-0.5 bg-[#f26522] transition-all duration-500",
                  isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                )}
              />
            </Link>
          ))}

          {/* <div className="relative group py-2">
            <button className="flex items-center gap-2 text-[11px] font-black tracking-[0.2em] text-white/70 hover:text-white transition-all">
              MORE
              <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[240px]">
              <div className="bg-black/95 backdrop-blur-2xl border border-white/10 rounded-sm p-4 shadow-2xl">
                {DROPDOWN_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between px-4 py-3 text-[10px] font-black tracking-[0.1em] text-white/60 hover:text-[#f26522] hover:bg-white/5 transition-all rounded-sm group/item"
                  >
                    {link.label}
                    <div className="w-4 h-[1px] bg-[#f26522] scale-x-0 group-hover/item:scale-x-100 transition-transform origin-right" />
                  </Link>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="flex items-center gap-6">
        <Link href="/tickets">
          <Button className="bg-[#f26522] hover:bg-white text-black font-black px-8 py-4 rounded-sm text-[11px] tracking-[0.2em] transition-all duration-500 shadow-2xl shadow-[#f26522]/20 hover:scale-105 active:scale-95">
            NPL TICKETS 2026
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}
