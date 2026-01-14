"use client"

import { motion } from 'framer-motion';

interface PlayerCardProps {
    player: {
        name: string;
        image?: string;
        role?: string;
        country?: string;
    };
}

export default function PlayerCard({ player }: PlayerCardProps) {
    return (
        <div className="group relative bg-white/5 backdrop-blur-sm rounded-sm border border-white/10 p-5 transition-all duration-500 hover:border-[#f26522]/50 hover:bg-white/10">
            <div className="relative w-full aspect-[4/5] mb-6 rounded-sm overflow-hidden bg-black/20">
                <img
                    src={player.image || "/placeholder.svg"}
                    alt={player.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                
                {/* Role Badge */}
                <div className="absolute bottom-4 left-4">
                    <span className="bg-[#f26522] text-black text-[10px] font-black tracking-widest px-2 py-0.5 uppercase rounded-sm">
                        {player.role || "Player"}
                    </span>
                </div>
            </div>
            
            <div className="space-y-1">
                <h3 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-[#f26522] transition-colors duration-300">
                    {player.name}
                </h3>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-[1px] bg-[#f26522]/50" />
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">
                        {player.country || "International"}
                    </p>
                </div>
            </div>

            {/* Hover Accent */}
            <div className="absolute top-0 right-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-2 right-2 w-[1px] h-3 bg-[#f26522]" />
              <div className="absolute top-2 right-2 h-[1px] w-3 bg-[#f26522]" />
            </div>
        </div>
    );
}
