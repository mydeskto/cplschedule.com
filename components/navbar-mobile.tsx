"use client"

import { Search, Menu, X, ArrowRight } from "@/lib/icons"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "@/lib/motion"
import whiteLogo from "@/public/images/newlogo.png"
import Image from "next/image"
import { FaYoutube, FaFacebook, FaXTwitter, FaInstagram } from "@/lib/icons"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function NavbarMobile({ isScrolled, isMobileMenuOpen, toggleMobileMenu }: { 
  isScrolled: boolean
  isMobileMenuOpen: boolean
  toggleMobileMenu: () => void
}) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") return pathname === path
    return pathname === path || pathname.startsWith(path + "/")
  }

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/points-table", label: "POINTS TABLE" },
    // { to: "/schedule", label: "SCHEDULE" },
    { to: "/teams", label: "TEAMS" },
    { to: "/news", label: "NEWS" },
    { to: "/NPL-venue", label: "VENUES" },
    { to: "/contact-us", label: "CONTACT" },
  ]

  return (
    <>
      {/* Mobile Navigation Bar */}
      <motion.div
        className={cn(
          "flex items-center justify-between py-3 px-6 w-full transition-all duration-700",
          isScrolled
            ? "bg-black/90 backdrop-blur-2xl border-b border-white/5 py-2"
            : "bg-transparent"
        )}
      >
        {/* Mobile Left Side - Menu Button */}
        <div className="flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-[#f26522] transition-all hover:scale-105 active:scale-95"
          >
            <div
              className={`transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </div>
          </button>
        </div>

        <div className="flex-1" />

        {/* Mobile Right Side - Buy Ticket Short Button */}
        <div className="flex items-center">
          <Link href="/tickets/">
            <Button className="bg-[#f26522] hover:bg-white text-black font-black py-4 px-4 rounded-sm text-[9px] tracking-[0.1em] whitespace-nowrap shadow-xl shadow-[#f26522]/20">
              TICKETS
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              onClick={toggleMobileMenu}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 w-[85vw] max-w-[400px] h-screen bg-[#122754] shadow-2xl flex flex-col border-r border-white/10"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                <Link className="relative h-8 w-32" href="/" onClick={toggleMobileMenu}>
                  <Image
                    src={whiteLogo}
                    alt="NPL Logo"
                    fill
                    className="object-contain"
                  />
                </Link>
                <button
                  onClick={toggleMobileMenu}
                  className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto pt-6 px-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={link.to}
                      className={cn(
                        "flex items-center justify-between py-4 text-[11px] font-black tracking-[0.2em] transition-all duration-300",
                        isActive(link.to) ? "text-[#f26522]" : "text-white/70 hover:text-white"
                      )}
                      onClick={toggleMobileMenu}
                    >
                      {link.label}
                      {isActive(link.to) && (
                        <div className="w-1.5 h-1.5 rounded-full bg-[#f26522] shadow-lg shadow-[#f26522]/50" />
                      )}
                    </Link>
                    <div className="h-[1px] w-full bg-white/5" />
                  </motion.div>
                ))}
              </div>

              {/* Bottom Section */}
              <div className="p-8 space-y-8 bg-black/20">
                {/* Buy Ticket CTA in Sidebar */}
                <Link href="/tickets/" onClick={toggleMobileMenu}>
                  <Button className="w-full bg-[#f26522] hover:bg-white text-black font-black py-7 rounded-sm text-[11px] tracking-[0.2em] group transition-all duration-500 shadow-2xl shadow-[#f26522]/10">
                    BOOK TICKETS 2026
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
                  </Button>
                </Link>

                {/* Socials */}
                <div className="space-y-4">
                  <p className="text-[10px] font-black tracking-[0.3em] text-white/30 text-center uppercase">Follow Us</p>
                  <div className="flex items-center justify-center gap-6">
                    {[
                      { Icon: FaYoutube, url: "https://www.youtube.com/@NPLSchedule" },
                      { Icon: FaFacebook, url: "https://www.facebook.com/profile.php?id=61588296753073" },
                      { Icon: FaXTwitter, url: "https://x.com/nplschedule" },
                      { Icon: FaInstagram, url: "https://www.instagram.com/nplschedule//" },
                    ].map(({ Icon, url }, index) => (
                      <a
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#f26522] hover:border-[#f26522]/50 transition-all duration-300"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
