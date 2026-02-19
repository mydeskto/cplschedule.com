import type { Metadata } from 'next';
import {
  MapPin,
  Calendar,
  CreditCard,
  Info,
  CheckCircle,
  TrendingUp,
  HelpCircle,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nepal Premier League (NPL) 2026 Tickets: Prices, Online Booking & Schedule',
  description: 'Check NPL 2026 ticket prices, online booking options, match schedule, and venue information. Complete Nepal Premier League 2026 tickets guide for fans',
  keywords: ['NPL tickets 2026', 'NPL ticket price 2026', 'Buy NPL tickets online', 'NPL match schedule', 'Ticket booking guide'],
  alternates: {
    canonical: 'https://nplschedule.com/tickets',
  },
};

export default function TicketsPage() {
  return (
    <div className="min-h-screen bg-[#122754] text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-6 px-6 text-center overflow-hidden">
        <div className=" mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-6">
            NPL 2026 <span className="text-[#f26522]">Tickets</span>
          </h1>
          <h3 className='text-white mb-6 text-xl'>Buy Online, Prices, and Booking Guide</h3>
          <p className="text-xl text-white/70 leading-relaxed max- mx-auto font-light">
            Experience the thrill of live cricket! The Nepal Premier League (NPL) 2026 promises an exciting T20 season featuring Nepal’s top players along with international stars. Fans looking to buy tickets, check prices, and view match schedules will find everything in this complete guide.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f26522]/5 blur-[120px] rounded-full -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f26522]/5 blur-[120px] rounded-full -ml-48 -mb-48" />
      </section>

      <main className="mx-auto px-6 py-12 space-y-20 relative">

        {/* NPL 2026 Tickets Overview */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
              NPL 2026 Tickets <span className="text-[#f26522]">Overview</span>
            </h2>
            <div className="h-1 w-24 bg-[#f26522] mx-auto rounded-full mt-4" />
          </div>
          <div className="bg-white/5 border border-white/10 rounded-sm p-8 backdrop-blur-sm hover:border-[#f26522]/30 transition-colors">
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              The Nepal Premier League continues to grow as one of the most anticipated cricket tournaments in Nepal. Online ticket sales and stadium attendance have increased each year, especially for high-profile matches and playoffs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <h3 className="text-xl font-bold text-white/80 mb-2 col-span-full">Fans typically search for:</h3>
              {[
                "NPL tickets 2026",
                "NPL ticket price 2026",
                "Buy NPL tickets online",
                "NPL match schedule",
                "Ticket booking guide"
              ].map((term) => (
                <div key={term} className="flex items-center gap-3 bg-white/5 p-4 rounded-sm border border-white/10 hover:border-[#f26522]/30 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-[#f26522]" />
                  <span className="text-white/80">{term}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-white/60 font-medium italic">
              This page covers all the key details you need to secure your seats.
            </p>
          </div>
        </section>

        {/* Expected Ticket Categories */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
              Expected Ticket <span className="text-[#f26522]">Categories</span>
            </h2>
            <div className="h-1 w-24 bg-[#f26522] mx-auto rounded-full mt-4" />
          </div>
          <p className="text-white/70 mb-8 text-center">Ticket options usually include:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-sm p-8 hover:border-[#f26522]/50 transition-colors">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <div className="w-10 h-10 rounded-sm bg-[#f26522] flex items-center justify-center text-black">
                  <span className="font-black">G</span>
                </div>
                <span className="text-white">General Admission</span>
              </h3>
              <p className="text-white/70">Affordable seating with a lively match-day atmosphere.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-sm p-8 hover:border-[#f26522]/50 transition-colors">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <div className="w-10 h-10 rounded-sm bg-[#f26522]/80 flex items-center justify-center text-black">
                  <span className="font-black">V</span>
                </div>
                <span className="text-white">VIP / Premium</span>
              </h3>
              <p className="text-white/70">Premium seating with better views and additional amenities.</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-white/60 p-4 bg-white/5 rounded-sm border border-white/10">
            Availability and categories may vary by match. Early-bird deals and season passes may be offered.
          </p>
        </section>

        {/* NPL 2026 Ticket Prices */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
              NPL 2026 Ticket <span className="text-[#f26522]">Prices</span>
            </h2>
            <div className="h-1 w-24 bg-[#f26522] mx-auto rounded-full mt-4" />
          </div>
          <p className="text-white/70 mb-8">
            Official prices for 2026 will be confirmed by organizers, but based on previous seasons, typical pricing is:
          </p>
          <div className="overflow-x-auto rounded-sm border border-white/10">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/10">
                  <th className="p-6 text-white/80">Match Type</th>
                  <th className="p-6 text-white/80">General (Rs)</th>
                  <th className="p-6 text-white/80">VIP (Rs)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-6 font-medium text-white">League Matches</td>
                  <td className="p-6">300–400</td>
                  <td className="p-6">500–600</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-6 font-medium">Playoffs</td>
                  <td className="p-6">500–600</td>
                  <td className="p-6">700–800</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-6 font-medium">Final</td>
                  <td className="p-6">500–700</td>
                  <td className="p-6">1,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-white/70 text-center italic">
            Season passes may include 20% off or special discounts through the official ticket partner.
          </p>
        </section>

        {/* How to Buy Online */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
              how to buy npl ticket online <span className="text-[#f26522]">2026</span>
            </h2>
            <div className="h-1 w-24 bg-[#f26522] mx-auto rounded-full mt-4" />
          </div>
          <p className="text-white/70 mb-6 leading-relaxed text-center text-[18px]">
            Online booking is the fastest and safest method to secure your seats.
          </p>
          <p className="text-white/70 mb-6 leading-relaxed text-center text-[18px]">
          You can easily buy tickets through the <Link href="https://events.khalti.com/" className='underline text-orange-500'>Khalti app</Link>, the official ticket partner.
          </p>
          <h3 className="text-xl font-bold text-white/90 mb-6">Step-by-Step Guide</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              { step: "1️⃣", text: "Visit the official ticketing platform (e.g., Khalti App / NPL Partner)" },
              { step: "2️⃣", text: "Search for Nepal Premier League 2026 / NPL 2026" },
              { step: "3️⃣", text: "Select your preferred match" },
              { step: "4️⃣", text: "Choose ticket type (General / VIP)" },
              { step: "5️⃣", text: "Complete payment securely" },
              { step: "6️⃣", text: "Receive your e-ticket / QR code instantly" }
            ].map((item, idx) => (
              <div key={idx} className=" p-6 rounded-sm relative overflow-hidden group hover:bg-white/10 hover:border-[#f26522]/30 transition-colors">
                <span className="text-3xl mb-4 block">{item.step}</span>
                <p className="font-medium text-white/80">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-[#f26522]/10 border border-[#f26522]/20 rounded-sm text-white/90 flex items-center gap-3">
            <CheckCircle className="w-5 h-5 flex-shrink-0 text-[#f26522]" />
            <span>Booking online avoids long queues and reduces the risk of sold-out matches.</span>
          </div>
        </section>

        {/* Why Book Early */}
        <section className="bg-white/5 rounded-sm p-8 border border-white/10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-8 text-center">
              Why Book Tickets <span className="text-[#f26522]">Early</span>
            </h2>
            <div className="h-1 w-24 bg-[#f26522] mx-auto rounded-full mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Popular matches sell out quickly",
                "Better seat selection",
                "Access to early discounts",
                "Stress-free match-day planning"
              ].map((reason) => (
                <div key={reason} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                  <span className="font-medium">{reason}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-blue-200/80">
              Playoffs and finals usually see the highest demand.
            </p>
          </div>
        </section>

        {/* NPL 2026 Schedule Snapshot */}
        <section className='max-w-screen'>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
              NPL 2026 Schedule <span className="text-[#f26522]">Snapshot</span>
            </h2>
            <div className="h-1 w-24 bg-[#f26522] mx-auto rounded-full mt-4" />
          </div>
          <p className="text-white/70 mb-8">
            The official schedule will be announced by organizers. The season generally includes:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 p-6 rounded-sm border border-white/10 text-center hover:border-[#f26522]/30 transition-colors">
              <h3 className="font-bold text-xl mb-2 text-white">League Stage Matches</h3>
            </div>
            <div className="bg-white/5 p-6 rounded-sm border border-white/10 text-center hover:border-[#f26522]/30 transition-colors">
              <h3 className="font-bold text-xl mb-2 text-white">Playoffs (Eliminator & Qualifiers)</h3>
            </div>
            <div className="bg-white/5 p-6 rounded-sm border border-white/10 text-center hover:border-[#f26522]/30 transition-colors">
              <h3 className="font-bold text-xl mb-2 text-white">Grand Final</h3>
            </div>
          </div>
          <p className="text-white/70 italic mb-8">Match dates and timings will be updated once confirmed.</p>
          <div className='max-w-screen flex items-center justify-center'>
            <Link
              href="/schedule"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#f26522] hover:bg-[#f26522]/90 text-black rounded-sm font-black transition-all transform hover:scale-105"
            >
              Check full NPL 2026 schedule <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Venue Information */}
        <section className='max-w-screen'>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
              Venue <span className="text-[#f26522]">Information</span>
            </h2>
            <div className="h-1 w-24 bg-[#f26522] mx-auto rounded-full mt-4" />
          </div>
          <div className="bg-white/5 border border-white/10 rounded-sm p-8 md:p-12 overflow-hidden relative hover:border-[#f26522]/30 transition-colors">
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Matches are expected at:</h3>
              <p className="text-xl text-[#f26522] font-bold mb-4">TU International Cricket Ground</p>
              <p className="text-lg text-white/80 font-medium mb-6">Kirtipur, Kathmandu</p>
              <p className="text-white/70 leading-relaxed">
                Nepal’s premier cricket venue offering modern facilities and a lively atmosphere for fans.
              </p>
            </div>
            {/* Background design element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          </div>
        </section>

        {/* Smart Ticket Booking Tips */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
              Smart Ticket Booking <span className="text-[#f26522]">Tips</span>
            </h2>
            <div className="h-1 w-24 bg-[#f26522] mx-auto rounded-full mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Always use official platforms for booking",
              "Double-check match date and time before payment",
              "Keep your QR e-ticket ready at stadium entry",
              "Watch for early-bird discounts and flash offers"
            ].map((tip, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-sm hover:bg-white/10 hover:border-[#f26522]/30 transition-all">
                <div className="w-10 h-10 rounded-sm bg-[#f26522] flex items-center justify-center mb-4 text-black">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <p className="text-sm text-white/80 font-medium leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
            <span className="text-[#f26522]">(FAQ)</span>
          </h2>
          <div className="h-1 w-24 bg-[#f26522] mx-auto rounded-full mt-4" />
        </div>
        {/* FAQ Section */}
        <section className='max-w-screen flex items-center justify-center'>

          <div className="space-y-6 max-w-4xl">
            {[
              {
                q: "When will NPL 2026 tickets go on sale?",
                a: "Ticket sales usually open a few weeks before the tournament begins. Stay updated on official announcements."
              },
              {
                q: "What is the best way to book tickets?",
                a: "Online booking through the official ticket partner is recommended for convenience, speed, and security."
              },
              {
                q: "Can tickets sell out quickly?",
                a: "Yes. High-demand matches, especially playoffs and finals, often sell out early."
              },
              {
                q: "Are there discounted passes?",
                a: "Yes. Season passes and early-bird promotions may be available."
              },
              {
                q: "Can I buy tickets at the stadium?",
                a: "Yes, subject to availability. Online booking is safer and ensures your seat."
              }
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-bold mb-3 text-white/90">{faq.q}</h3>
                <p className="text-white/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Get Ready for NPL 2026 */}
        <section className="text-center py-20 px-6 bg-white/5 rounded-sm border border-white/10">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-6">
            Get Ready for <span className="text-[#f26522]">NPL 2026</span>
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Don’t miss out on Nepal’s premier cricket tournament. Secure your tickets early, enjoy live T20 action, and witness the excitement of NPL 2026.
          </p>
          <div className="text-sm text-white/50 font-mono tracking-widest uppercase">
            Last Updated: Feb 2026 – Official ticket prices & schedule subject to confirmation by organizers.
          </div>
        </section>
      </main>
    </div>
  );
}
