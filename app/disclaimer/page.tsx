import { Link } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer - CPL T20 | Coastal Premier League',
  description: 'Disclaimer for CPLT20League.com - Important information about the use of our website and content accuracy.',
  alternates: {
    canonical: 'https://CPLt20league.com/disclaimer',
  },
}

export default function Disclaimer() {

  return (
    <>
    <div className="min-h-screen bg-[#122754] font-inter ">

      <div className="max-w-full mx-auto pt-20">
        <div className=" rounded-lg  p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 text-left">
            Disclaimer
          </h1>
          <p className="text-sm text-white mb-6 leading-relaxed">
            Last Updated: October 2025
          </p>

          <div className="prose prose-lg max-w-none">

            <p className="text-md text-white mb-6 leading-relaxed">
              The information provided on NPL Schedule <Link href="/" className="underline font-bold">CPLT20League.com</Link> is published in good faith and for general informational purposes only. We aim to offer accurate and timely updates about the National Premier League (NPL), but we make no guarantees regarding the completeness, reliability, or accuracy of any information found on this website.
            </p>

           

            <ol className="text-white mt-8">
              <li className="text-3xl font-bold">
                1. No Professional Advice
              </li>
              <p className="pl-3 my-3 text-md">
                The content on this site is not intended to substitute for professional advice, whether sports-related, legal, or otherwise. Any action you take based on the information you find on this website is strictly at your own risk.
              </p>
            
            </ol>

            <ol className="text-white mt-8">
              <li className="text-3xl font-bold">
                2. Third-Party Content and External Links
              </li>
              <p className="pl-3 my-3 text-md">
                Our website may contain links to external sites that are not provided or maintained by us. While we strive to link only to high-quality, reputable sources, we have no control over the content and nature of those sites. These links do not imply a recommendation or endorsement of the views expressed within them.
              </p>
              <p className="pl-3 mb-3 text-md">
                Please note that other sites may have different privacy policies and terms which are beyond our control. Be sure to check their policies before engaging in any business or uploading any personal information.
              </p>
            </ol>

            <ol className="text-white mt-8">
              <li className="text-3xl font-bold">
                3. Match Schedule and Updates
              </li>
              <p className="pl-3 my-3 text-md">
                While we work hard to provide accurate NPL match schedules and updates, we are not responsible for any changes made by the league organizers. Match timings, venues, or formats may change without prior notice.
              </p>
              
            </ol>

            <ol className="text-white mt-8">
              <li className="text-3xl font-bold">
                4. Copyright and Fair Use
              </li>
              <p className="pl-3 my-3 text-md">
                All logos, team names, and tournament-related content belong to their respective owners. NPL Schedule does not claim ownership of any copyrighted materials unless explicitly stated. Any use of such material is done under “fair use” for informational and educational purposes.
              </p>
              
            </ol>

            <ol className="text-white mt-8">
              <li className="text-3xl font-bold">
                5. Your Consent
              </li>
              <p className="pl-3 my-3 text-md">
                By using our website, you hereby consent to our disclaimer and agree to its terms.
              </p>
              
            </ol>

            <ol className="text-white mt-8">
              <li className="text-3xl font-bold">
                8. Contact Us
              </li>
              <p className="pl-3 my-3 text-md">
                If you have any questions or concerns regarding this Disclaimer, please contact us at:
              </p>
              <p className="pl-3 mb-3 text-md">
                📧 contactnplschedule@gmail.com
              </p>
              
            </ol>


          </div>
        </div>
      </div>

    </div>
    </>
  )
}


