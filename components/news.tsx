"use client"

import { NewsCard } from "@/components/news-card"
import { newsArticles } from "@/data/news-data"
import { motion } from "framer-motion"

export default function NewsPageForHome() {
    return (
        <section className="py-24 bg-[#122754] relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Latest News Heading */}
                <div className="text-center mb-16 space-y-4">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase"
                    >
                        Latest <span className="text-[#f26522]">News</span>
                    </motion.h2>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="h-1 w-24 bg-[#f26522] mx-auto rounded-full"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...newsArticles]
                        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                        .slice(0, 3)
                        .map((article, index) => (
                            <motion.div
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <NewsCard {...article} image={typeof article.image === "string" ? article.image : article.image.src} />
                            </motion.div>
                        ))}
                </div>
            </div>
        </section>
    )
}
