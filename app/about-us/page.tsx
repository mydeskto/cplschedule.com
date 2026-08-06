import Link from 'next/link'
import { PageHero } from '@/components/Hero/PageHero'

export default function AboutUs() {

  return (
    <>
    <div className="min-h-screen bg-transparent font-inter">
      <PageHero
        title="About"
        accent="Us"
        eyebrow="NPL Schedule"
        sub="Your trusted source for Nepal Premier League schedules, fixtures, results, team details, and cricket news."
        ctas={[
          { label: "View fixtures", href: "/", primary: true },
          { label: "Contact", href: "/contact-us" },
        ]}
      />

      <div className="max-w-full mx-auto">
        <div className=" rounded-lg  p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-md text-white mb-6 leading-relaxed">
              Welcome to NPL Schedule, your trusted source for comprehensive Nepal Premier League (NPL) information. We provide schedules, fixtures, results, team details, and cricket news in a clear, reliable format.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Our Mission</h2>
            <p className="text-md text-white mb-6 leading-relaxed">
              To deliver accurate, timely, and user-friendly information so that fans never miss NPL action.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Who We Are</h2>
            <p className="text-md text-white mb-6 leading-relaxed">
              We are a team of sports enthusiasts, writers, and analysts dedicated to compiling reliable cricket data. With years of experience in sports publishing, we ensure all information is verified and current.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">What We Offer</h2>
            <ul className="text-white space-y-2 list-disc pl-6 mb-6">
              <li>Up-to-date Match Fixtures – dates, times, and venues</li>
              <li>Team & Player Profiles – squads, stats, and key players</li>
              <li>News & Analysis – match previews, reviews, and highlights</li>
              <li>Mobile-Friendly Design – fast and responsive browsing</li>
              <li>Regular Updates – continuous content review for accuracy</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Why Trust Us</h2>
            <p className="text-md text-white mb-6 leading-relaxed">
              We maintain transparency, credibility, and accuracy. All content is reviewed and updated regularly to provide fans with reliable information.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Advertising Transparency</h2>
            <p className="text-md text-white mb-6 leading-relaxed">
              This website uses Google AdSense to display ads in accordance with Google&apos;s publisher and content policies. Ads support website maintenance and are shown safely for users.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Contact Us</h2>
            <p className="text-md text-white mb-2 leading-relaxed">
              📧 contactnplschedule@gmail.com
            </p>
            <p className="text-md text-white mb-8 leading-relaxed">
              Or reach us via our <Link href="/contact-us" className="text-[#c8102e] hover:underline">Contact Page</Link>.
            </p>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}
