import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - CPL T20 | Coastal Premier League',
  description: 'Learn about CPL T20 - your go-to source for everything related to the Coastal Premier League T20. Get match schedules, team updates, player stats and more.',
  alternates: {
    canonical: "https://CPLt20league.com/about-us/"
  },
}

export default function AboutUs() {

  return (
    <>
    <div className="min-h-screen bg-[#122754] font-inter ">

      <div className="max-w-full mx-auto pt-20">
        <div className=" rounded-lg  p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-left">
            About Us
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-md text-white mb-6 leading-relaxed font-semibold">
              Welcome to NPL Schedule – your trusted source for all things related to the Nepal Premier League (NPL). Whether you’re a die-hard fan, a casual viewer, or someone looking for reliable updates, we’ve got you covered with the latest NPL schedules, fixtures, match timings, and team details – all in one place.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Our Mission</h2>
            <p className="text-md text-white mb-6 leading-relaxed">
              At NPL Schedule, our mission is simple:
            </p>
            <p className="text-md text-white mb-8 leading-relaxed">
To deliver accurate, timely, and easy-to-understand information about the National Premier League so fans never miss a moment of the action.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Who We Are</h2>
            <p className="text-md text-white mb-8 leading-relaxed">
              We are a team of passionate cricket enthusiasts, writers, and sports data analysts who believe in creating a one-stop hub for cricket fans. With years of experience in sports content creation and digital publishing, we ensure our readers always get the most up-to-date and genuine information.
            </p>
            

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">What We Offer</h2>
            <ul className='text-white ml-10 space-y-5 list-disc mb-8'>
              <li>
                <span className='font-bold text-2xl'>Updated NPL Fixtures </span>– Match, dates, times, and venues
              </li>
              <li>
                <span className='font-bold text-2xl'>Team Overviews</span> – Detailed info on all participating teams and players
              </li>
              <li>
               <span className='font-bold text-2xl'> News & Insights </span>– Real-time updates, pre-match analysis, and post-match reviews
              </li>
              <li>
                <span className='font-bold text-2xl'>Mobile-Friendly Experience </span>– Fast, responsive design for browsing on any device
              </li>
            </ul>

            <p className="text-md text-white mb-8 leading-relaxed">
              We regularly review and update our content to maintain accuracy. If you notice any error or outdated information, feel free to contact us. We value feedback.
            </p>

            

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Why Trust Us</h2>
            <p className="text-md text-white mb-4 leading-relaxed">
              We are committed to accuracy, transparency, and user satisfaction. All our content is reviewed and updated regularly to maintain high standards of reliability. Our goal is to be your go-to source for cricket schedules without clutter or confusion.
            </p>


            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Contact Us</h2>
            <p className="text-md text-white mb-4 leading-relaxed">
              For questions, suggestions, or collaboration requests, email us at:
            </p>
            <p className="text-md text-white mb-4 leading-relaxed">
              contactnplschedule@gmail.com
            </p>
            <p className="text-md text-white mb-8 leading-relaxed">
              or reach out through our <a href="/contact-us" className="text-blue-400 hover:text-blue-300 underline">Contact Page</a>.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Transparency Note</h2>
            <p className="text-md text-white mb-4 leading-relaxed">
              This website displays Google AdSense advertisements to support hosting and website maintenance.
            </p>
            <p className="text-md text-white mb-8 leading-relaxed">
              All ads shown on our platform comply with Google's content, publisher, and user-safety policies.
            </p>

          </div>
        </div>
      </div>

    </div>
    </>
  )
}


