import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"

interface NewsCardProps {
  id: string
  slug: string
  title: string
  date: string
  summary: string
  image: string
}

export function NewsCard({ slug, title, date, summary, image }: NewsCardProps) {
  return (
    <Link href={`/news/${slug}`} className="group block h-full">
      <div className="bg-white/5 backdrop-blur-sm rounded-sm border border-white/10 overflow-hidden hover:border-[#f26522]/50 transition-all duration-500 h-full flex flex-col">
        <div className="aspect-[16/9] relative overflow-hidden">
          <Image 
            src={image} 
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-4 left-4 flex items-center gap-2 text-[#f26522] text-[10px] font-black tracking-widest uppercase bg-black/40 backdrop-blur-md px-3 py-1 rounded-sm">
            <Calendar className="w-3 h-3" />
            {date}
          </div>
        </div>
        <div className="p-8 flex-1 flex flex-col space-y-4">
          <h3 className="text-xl font-black text-white group-hover:text-[#f26522] transition-colors duration-300 leading-tight uppercase tracking-tight line-clamp-2">
            {title}
          </h3>
          <p className="text-white/60 text-sm font-light leading-relaxed line-clamp-3 flex-1">
            {summary}
          </p>
          <div className="pt-4 flex items-center text-[#f26522] text-xs font-black tracking-widest uppercase">
            Read Full Story
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </div>
      </div>
    </Link>
  )
}
