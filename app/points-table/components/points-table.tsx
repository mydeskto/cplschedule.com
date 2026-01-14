"use client"

import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from "next/image"
import Link from "next/link"
import { pointsData } from "@/data/points-data"
import { motion } from "framer-motion"

const getShortName = (teamName: string) => {
  const shortNames: { [key: string]: string } = {
    "Pokhara Avengers": "POK",
    "Kathmandu Gurkhas": "KTM",
    "Sudurpaschim Royals": "SUD",
    "Janakpur Bolts": "JAN",
    "Lumbini Lions": "LUM",
    "Chitwan Rhinos": "CHI",
    "Biratnagar Kings": "BIR",
    "Karnali Yaks": "KAR",
  }
  return shortNames[teamName] || teamName.substring(0, 3).toUpperCase()
}

export default function PointsTable() {
  return (
    <div className="w-full py-10 px-4 font-inter tracking-wider bg-[#122754] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f26522]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">
            Points <span className="text-[#f26522]">Table</span>
          </h2>
          <div className="h-1 w-24 bg-[#f26522] rounded-full" />
        </motion.div>

        <Card className="bg-white/5 backdrop-blur-md border border-white/10 rounded-sm overflow-hidden">
          <div className="overflow-x-auto scrollbar-none">
            <Table>
              <TableHeader className="bg-white/5">
                <TableRow className="hover:bg-transparent border-b border-white/10">
                  <TableHead className="text-[#f26522] font-black uppercase tracking-widest py-4 px-4 text-[10px] w-12">
                    Pos
                  </TableHead>
                  <TableHead className="text-white font-black uppercase tracking-widest py-4 px-2 text-[10px]">
                    Team
                  </TableHead>
                  <TableHead className="text-white font-black uppercase tracking-widest py-4 px-1 text-[10px] text-center w-8">
                    P
                  </TableHead>
                  <TableHead className="text-white font-black uppercase tracking-widest py-4 px-1 text-[10px] text-center w-8">
                    W
                  </TableHead>
                  <TableHead className="text-white font-black uppercase tracking-widest py-4 px-1 text-[10px] text-center w-8">
                    L
                  </TableHead>
                  <TableHead className="text-white font-black uppercase tracking-widest py-4 px-1 text-[10px] text-center w-8">
                    NR
                  </TableHead>
                  <TableHead className="text-white font-black uppercase tracking-widest py-4 px-1 text-[10px] text-center w-16">
                    NRR
                  </TableHead>
                  <TableHead className="text-[#f26522] font-black uppercase tracking-widest py-4 px-4 text-[10px] text-center w-12">
                    Pts
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pointsData.map((team, index) => (
                  <TableRow
                    key={team.position}
                    className="border-b border-white/5 hover:bg-white/5 transition-all duration-300 group"
                  >
                    <TableCell className="py-3 px-4 font-black text-white/40 text-[10px] group-hover:text-[#f26522] transition-colors">
                      {team.position.toString().padStart(2, '0')}
                    </TableCell>
                    <TableCell className="py-3 px-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 relative flex-shrink-0 bg-black/20 p-1 rounded-sm border border-white/5 group-hover:border-[#f26522]/30 transition-all">
                          <Image
                            src={team.logo || "/placeholder.svg"}
                            alt={`${team.team} logo`}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                        <Link 
                          href={team.link || "#"} 
                          className="text-white font-bold text-xs md:text-sm uppercase tracking-tight group-hover:text-[#f26522] transition-colors whitespace-nowrap"
                        >
                          <span className="md:hidden">{getShortName(team.team)}</span>
                          <span className="hidden md:inline">{team.team}</span>
                        </Link>
                      </div>
                    </TableCell>
                    <TableCell className="text-white font-medium text-center py-3 px-1 text-[10px]">
                      {team.matches}
                    </TableCell>
                    <TableCell className="text-white font-bold text-center py-3 px-1 text-[10px]">
                      {team.won}
                    </TableCell>
                    <TableCell className="text-white/40 font-medium text-center py-3 px-1 text-[10px]">
                      {team.loss}
                    </TableCell>
                    <TableCell className="text-white/40 font-medium text-center py-3 px-1 text-[10px]">
                      {team.noResult}
                    </TableCell>
                    <TableCell
                      className={`text-center py-3 px-1 text-[10px] font-bold ${
                        team.netRunRate.startsWith("+") ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {team.netRunRate}
                    </TableCell>
                    <TableCell className="text-[#f26522] font-black text-center py-3 px-4 text-sm group-hover:scale-110 transition-transform">
                      {team.points}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
        
        {/* Legend */}
        <div className="mt-8 flex flex-wrap gap-6 justify-center">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Top 4 Qualify for Playoffs</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#f26522]" />
                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Updated Live 2026</span>
            </div>
        </div>
      </div>
    </div>
  )
}
