"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Share2, Link as LinkIcon, MapPin, Users, Calendar, ArrowLeft , ArrowRight } from "lucide-react";
import { toast } from "sonner";
import VenueTabs from "@/components/venue-tabs";
import { venuesData } from "@/data/vanue-data";
import { motion } from "framer-motion";

function VenueContent({ venue }: { venue: any }) {
  const handleCopyLink = async () => {
    try {
      const url = window.location.href
      await navigator.clipboard.writeText(url)
      toast.success("Link copied to clipboard!")
    } catch (err) {
      toast.error("Failed to copy link")
    }
  }

  const currentTime = new Date().toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    weekday: 'short'
  })

  return (
    <div className="bg-[#122754] min-h-screen pb-20">
      {/* Dynamic Header/Breadcrumb */}
      <div className="container mx-auto px-4 py-8">
        <Link 
          href="/CPL-venue" 
          className="inline-flex items-center text-[#f26522] text-xs font-black tracking-widest uppercase hover:translate-x-[-8px] transition-transform duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all venues
        </Link>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Venue Info & Image */}
          <div className="lg:col-span-8 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-[#f26522]">
                <MapPin className="w-5 h-5" />
                <span className="text-xs font-black tracking-[0.3em] uppercase">Premium Stadium</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                {venue.name.split(' ').map((word: string, i: number) => (
                  <span key={i} className={i % 2 !== 0 ? "text-transparent stroke-text-gold" : ""}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-sm">
                  <Users className="w-5 h-5 text-[#f26522]" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Capacity</span>
                    <span className="text-white font-bold">{venue.capacity.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-sm">
                  <Calendar className="w-5 h-5 text-[#f26522]" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Matches</span>
                    <span className="text-white font-bold">Host 2026</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-[21/9] w-full rounded-sm overflow-hidden border border-white/10 shadow-2xl"
            >
              <Image 
                src={venue.image || "/placeholder.svg"} 
                alt={venue.name} 
                fill 
                className="object-cover" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>

            <div className="bg-white/5 backdrop-blur-md rounded-sm border border-white/10 p-8">
              <VenueTabs venue={venue} currentTime={currentTime} />
            </div>
          </div>

          {/* Right Column: Sidebar Navigation */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">
              {/* Location Card */}
              <div className="bg-[#f26522] p-8 rounded-sm text-black">
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Location</h3>
                <div className="space-y-4">
                  <p className="font-bold text-lg leading-tight">{venue.address.fullAddress}</p>
                  <p className="text-black/70 text-sm font-medium">{venue.address.addressLocality}, Bangladesh</p>
                  <div className="flex gap-4 pt-4">
                    <button 
                      onClick={handleCopyLink}
                      className="flex-1 py-3 bg-black text-white text-[10px] font-black tracking-widest uppercase rounded-sm hover:bg-white hover:text-black transition-all duration-300"
                    >
                      Share Venue
                    </button>
                  </div>
                </div>
              </div>

              {/* Other Venues List */}
              <div className="bg-white/5 border border-white/10 rounded-sm p-8 space-y-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-black text-white uppercase tracking-widest">Other Venues</h2>
                  <Link href="/CPL-venue" className="text-[#f26522] text-[10px] font-black tracking-widest uppercase hover:underline">See All</Link>
                </div>

                <div className="space-y-4">
                  {venuesData.venues.filter(v => v.slug !== venue.slug).slice(0, 4).map((venueItem) => (
                    <Link
                      key={venueItem.slug}
                      href={`/CPL-venue/${venueItem.slug}`}
                      className="group flex items-center justify-between p-4 bg-white/5 border border-transparent hover:border-[#f26522]/30 hover:bg-white/10 rounded-sm transition-all duration-300"
                    >
                      <div className="space-y-1">
                        <p className="font-black text-white text-sm uppercase tracking-tight group-hover:text-[#f26522] transition-colors">{venueItem.name}</p>
                        <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{venueItem.address.addressLocality}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#f26522] transform group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .stroke-text-gold {
          -webkit-text-stroke: 1px #f26522;
        }
      `}</style>
    </div>
  )
}

export default VenueContent;
