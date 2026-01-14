"use client";

import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, ArrowUpRight } from "lucide-react"
import whiteLogo from "@/public/images/CPLT20_logo.png"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const FOOTER_LINKS = {
  teams: [
    { name: "Sylhet Titans", href: "/teams/sylhet-titans" },
    { name: "Chattogram Royals", href: "/teams/chattogram-royals" },
    { name: "Dhaka Capitals", href: "/teams/dhaka-capitals" },
    { name: "Noakhali Express", href: "/teams/noakhali-express" },
    { name: "Rangpur Riders", href: "/teams/rangpur-riders" },
    { name: "Rajshahi Warriors", href: "/teams/rajshahi-warriors" },
  ],
  sitemap: [
    { name: "Home", href: "/" },
    { name: "Schedule", href: "/schedule" },
    { name: "Teams", href: "/teams" },
    { name: "News", href: "/news" },
    { name: "Points Table", href: "/points-table" },
    { name: "Venues", href: "/CPL-venue" },
  ],
  legal: [
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Disclaimer", href: "/disclaimer" },
  ],
  socials: [
    { name: "YouTube", href: "https://www.youtube.com/@CPLt20league", icon: Youtube },
    { name: "Facebook", href: "https://www.facebook.com/CPLt20league", icon: Facebook },
    { name: "Twitter", href: "https://x.com/CPLt20league", icon: Twitter },
    { name: "Instagram", href: "https://www.instagram.com/CPLt20league/", icon: Instagram },
  ]
}

export default function Footer() {
  return (
    <footer className="bg-[#122754] border-t border-white/5 pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f26522]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="inline-block">
              <Image
                src={whiteLogo}
                alt="CPL Logo"
                width={180}
                height={90}
                className="object-contain"
              />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm font-light">
              CPLT20League.com is your premier destination for high-octane cricket coverage. Experience every boundary, every wicket, and every moment of the Coastal Premier League 2026.
            </p>
            <div className="flex items-center gap-4">
              {FOOTER_LINKS.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#f26522] hover:text-black transition-all duration-500 group"
                >
                  <social.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#f26522]">Tournament</h4>
              <ul className="space-y-4">
                {FOOTER_LINKS.sitemap.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center group">
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all transform translate-y-1 group-hover:translate-y-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#f26522]">Teams</h4>
              <ul className="space-y-4">
                {FOOTER_LINKS.teams.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center group">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#f26522]">Support</h4>
              <ul className="space-y-4">
                {FOOTER_LINKS.legal.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center group">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black tracking-[0.2em] text-white/20 uppercase">
            © 2026 Coastal Premier League. INDEPENDENT COVERAGE.
          </p>
          <div className="flex items-center gap-8">
             <div className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-white/20 uppercase">
                <MapPin className="w-3 h-3" /> Mirpur, Dhaka
             </div>
             <div className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-white/20 uppercase">
                <Mail className="w-3 h-3" /> support@cplt20.com
             </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
