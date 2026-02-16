"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export const TeamsGrid = ({
  items,
  className,
}: {
  items: {
    title: string;
    logo: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-8",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item.link}
          key={item.link}
          className="relative group block h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="rounded-sm h-full w-full p-8 overflow-hidden bg-white/5 border border-white/10 group-hover:border-[#f26522]/50 relative z-20 transition-all duration-500 hover:bg-white/10">
            <div className="relative z-50 flex flex-col items-center text-center space-y-6">
                 <div className="w-32 h-32 relative rounded-sm bg-black/20 p-6 ring-1 ring-white/10 group-hover:ring-[#f26522]/50 transition-all duration-500 shadow-xl">
                    <img 
                        src={item.logo} 
                        alt={item.title}
                        className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500" 
                    />
                 </div>
                 <div className="space-y-2">
                    <h4 className="text-2xl font-black text-white uppercase tracking-tighter group-hover:text-[#f26522] transition-colors duration-300">
                        {item.title}
                    </h4>
                    <div className="h-0.5 w-12 bg-[#f26522]/30 mx-auto transition-all duration-500 group-hover:w-20 group-hover:bg-[#f26522]" />
                 </div>
                 <p className="text-white/60 font-light text-sm leading-relaxed">
                    Explore the complete squad, performance statistics, and team history for the NPL 2026 season.
                 </p>
                 <div className="flex items-center text-[#f26522] text-xs font-black tracking-widest uppercase pt-2">
                    View Squad
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                 </div>
            </div>
            
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-2 right-2 w-[1px] h-4 bg-[#f26522]" />
              <div className="absolute top-2 right-2 h-[1px] w-4 bg-[#f26522]" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
