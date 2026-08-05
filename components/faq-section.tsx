"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "When will NPL 2026 start?",
    answer:
      "Nepal Premier League Season 3 is scheduled to begin on November 17, 2026, with Janakpur Bolts vs Kathmandu Gurkhas.",
  },
  {
    question: "When is the NPL 2026 final?",
    answer:
      "The final is scheduled for December 13, 2026, at Tribhuvan University International Cricket Ground.",
  },
  {
    question: "Where can I check the NPL 2026 schedule?",
    answer:
      "The full match-by-match schedule, with dates, times, and venue, is listed on this page and updated as CAN confirms official fixtures.",
  },
  {
    question: "How many teams are participating in NPL 2026?",
    answer:
      "Eight: Biratnagar Kings, Chitwan Rhinos, Janakpur Bolts, Karnali Yaks, Kathmandu Gurkhas, Lumbini Lions, Pokhara Avengers, and Sudurpaschim Royals.",
  },
  {
    question: "Which venue will host NPL 2026 matches?",
    answer:
      "All 32 matches are played at the Tribhuvan University International Cricket Ground in Kirtipur, which has hosted every match of all three NPL seasons.",
  },
  {
    question: "What is the NPL 2026 format?",
    answer:
      "A single round-robin league stage (28 matches, each team plays every other team once) followed by a 4-team playoff: Qualifier 1, Eliminator, Qualifier 2, and the Final.",
  },
  {
    question: "Who won the previous NPL seasons?",
    answer:
      "Janakpur Bolts won the inaugural 2024 season, defeating Sudurpaschim Royals in the final. Lumbini Lions won their maiden title in 2025, also beating Sudurpaschim Royals in the final.",
  },
  {
    question: "Who is the most successful team in NPL history?",
    answer:
      "Janakpur Bolts and Lumbini Lions are tied with one title each. Sudurpaschim Royals have finished runner-up in both seasons so far.",
  },
  {
    question: "Who has scored the most runs in NPL history?",
    answer:
      "Rohit Paudel (Lumbini Lions) leads with 555 runs across the first two seasons.",
  },
  {
    question: "Who has taken the most wickets in NPL history?",
    answer: "Scott Kuggeleijn (Sudurpaschim Royals) leads with 27 wickets.",
  },
  {
    question: "How can I watch NPL 2026 live?",
    answer:
      "Previous seasons were broadcast on Star Sports and Kantipur Max in Nepal, with DishHome Go and FanCode as OTT/streaming options. Confirm the 2026 broadcast partners closer to the tournament.",
  },
  {
    question: "How can I book NPL 2026 tickets?",
    answer:
      "Ticket sales, pricing, and the official ticketing partner will be announced closer to the tournament. Check the Tickets page for updates.",
  },
  {
    question: "How does the NPL points table work?",
    answer:
      "Teams earn 2 points for a win, 0 for a loss, and 1 each for a no-result. Net Run Rate (NRR) is used to break ties in the standings.",
  },
  {
    question: "What is the prize money for NPL 2026?",
    answer:
      "In prior seasons, the winning team received रू 1.1 crore, with runner-up, third, and fourth place also receiving a share of the prize pool. Confirm 2026 figures once officially announced.",
  },
  {
    question: "Who is the title sponsor of NPL?",
    answer:
      "Siddhartha Bank is the title sponsor under a five-year agreement (2024–2029), and the tournament is officially known as the Siddhartha Bank Nepal Premier League.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0) // First question open by default

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (

    <section className="py-2 px-4 sm:px-6 lg:px-8 bg-[#122754] relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-sm bg-[#f26522] text-black mb-4 shadow-lg shadow-[#f26522]/20"
          >
            <HelpCircle className="w-8 h-8" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase"
          >
            Frequently Asked <span className="text-[#f26522]">Questions</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1 w-24 bg-[#f26522] mx-auto rounded-full"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/60 text-lg font-light max-w-2xl mx-auto"
          >
            Everything you need to know about the Nepal Premier League 2026
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div
                className={`
                  rounded-sm overflow-hidden transition-all duration-500
                  ${openIndex === index
                    ? 'bg-white/10 border border-[#f26522]/50 shadow-lg shadow-[#f26522]/10'
                    : 'bg-white/5 border border-white/10 hover:border-white/20'
                  }
                `}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 transition-all duration-300"
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`
                      flex-shrink-0 w-8 h-8 rounded-sm flex items-center justify-center text-xs font-black transition-all duration-300
                      ${openIndex === index
                        ? 'bg-[#f26522] text-black'
                        : 'bg-white/10 text-white/60 group-hover:bg-white/20'
                      }
                    `}>
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <h3 className={`
                      text-lg md:text-xl font-bold transition-colors duration-300
                      ${openIndex === index
                        ? 'text-white'
                        : 'text-white/80 group-hover:text-white'
                      }
                    `}>
                      {faq.question}
                    </h3>
                  </div>

                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      className={`
                        w-6 h-6 transition-colors duration-300
                        ${openIndex === index
                          ? 'text-[#f26522]'
                          : 'text-white/40 group-hover:text-white/60'
                        }
                      `}
                    />
                  </motion.div>
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-[72px]">
                        <motion.div
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          exit={{ y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="h-[1px] w-full bg-white/10 mb-4" />
                          <p className="text-white/70 leading-relaxed text-base font-light">
                            {faq.answer}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Help Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-white/50 text-sm font-light">
            Still have questions? Contact us through our support channels.
          </p>
        </motion.div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f26522]/5 blur-[120px] rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f26522]/5 blur-[120px] rounded-full -ml-48 -mb-48" />
    </section>
  )
}

FAQSection.displayName = 'FAQSection'
