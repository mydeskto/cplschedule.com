"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Users, ArrowRight } from "lucide-react"

interface VenueCardProps {
  name: string
  slug: string
  capacity: number
  image: string
}

export function VenueCard({ name, slug, capacity, image }: VenueCardProps) {
  return (
    <Link href={`/CPL-venue/${slug}`} className="group block">
      <div className="relative h-[450px] rounded-sm overflow-hidden border border-white/10 group-hover:border-[#f26522]/50 transition-all duration-500 shadow-2xl">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={90}
          />
          {/* Multi-layered Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 space-y-4">
          <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex items-center gap-2 text-[#f26522]">
              <MapPin className="w-4 h-4" />
              <span className="text-[10px] font-black tracking-[0.3em] uppercase">Stadium Guide</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight uppercase tracking-tighter">
              {name}
            </h3>
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 text-white/70 text-sm">
                <Users className="w-4 h-4 text-[#f26522]" />
                <span className="font-light tracking-wide">{capacity.toLocaleString()} Capacity</span>
              </div>
            </div>
          </div>
          
          <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 pt-4 border-t border-white/10">
            <div className="flex items-center text-[#f26522] text-xs font-black tracking-widest uppercase">
                Explore Venue
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </div>
        </div>

        {/* Status Tag */}
        <div className="absolute top-6 left-6">
            <span className="bg-white/10 backdrop-blur-md text-white text-[9px] font-black tracking-[0.2em] px-3 py-1 uppercase rounded-sm border border-white/20">
                Host City 2026
            </span>
        </div>
      </div>
    </Link>
  )
}
