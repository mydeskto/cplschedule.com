import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions - NPL Schedule | Nepal Premier League',
  description: 'Terms and conditions for using NPL Schedule website. Read our terms of use, content accuracy, and user conduct guidelines.',
  alternates: {
    canonical: 'https://nplschedule.com/terms-and-conditions',
  },
}

export default function TermsAndConditions() {

  return (
    <div className="min-h-screen bg-[#122754] font-inter pt-20">
      <div className="max-w-full mx-auto">
        <div className="rounded-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 text-left">
            Terms & Conditions
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-md text-white mb-6 leading-relaxed">
              Welcome to NPL Schedule. By accessing or using this website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
            </p>

            <ol className="text-white mt-8 space-y-6 list-decimal pl-6">
              <li>
                <span className="text-2xl font-bold block mb-2">Use of the Website</span>
                <ul className="list-disc pl-6 space-y-1 my-3">
                  <li>You may access and use this website for personal, non-commercial purposes only.</li>
                  <li>You agree not to use the website for any unlawful or prohibited activity.</li>
                  <li>Unauthorized use of this website may give rise to a claim for damages or be a criminal offense.</li>
                </ul>
              </li>

              <li>
                <span className="text-2xl font-bold block mb-2">Content Accuracy</span>
                <ul className="list-disc pl-6 space-y-1 my-3">
                  <li>We strive to provide accurate and up-to-date information regarding the Nepal Premier League (NPL).</li>
                  <li>Match dates, timings, venues, or tournament details may change without notice.</li>
                  <li>NPL Schedule does not guarantee the accuracy, completeness, or reliability of content.</li>
                </ul>
              </li>

              <li>
                <span className="text-2xl font-bold block mb-2">Intellectual Property</span>
                <ul className="list-disc pl-6 space-y-1 my-3">
                  <li>All content, including text, logos, graphics, and images, is the property of their respective owners.</li>
                  <li>No part of this website may be copied, reproduced, or distributed without prior written consent unless explicitly stated for fair use.</li>
                </ul>
              </li>

              <li>
                <span className="text-2xl font-bold block mb-2">User Conduct</span>
                <p className="pl-0 my-3 text-md font-normal mb-2">
                  By using this website, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-1 my-3">
                  <li>Avoid posting harmful, offensive, or illegal content</li>
                  <li>Respect the intellectual property rights of others</li>
                  <li>Refrain from interfering with website functionality</li>
                </ul>
              </li>

              <li>
                <span className="text-2xl font-bold block mb-2">Third-Party Links and Services</span>
                <ul className="list-disc pl-6 space-y-1 my-3">
                  <li>This website may contain links to third-party websites.</li>
                  <li>We are not responsible for content, accuracy, or policies of external websites.</li>
                </ul>
              </li>

              <li>
                <span className="text-2xl font-bold block mb-2">Limitation of Liability</span>
                <ul className="list-disc pl-6 space-y-1 my-3">
                  <li>NPL Schedule is not liable for any direct, indirect, or incidental damages arising from the use of this website.</li>
                  <li>Your use of the site is at your own risk.</li>
                </ul>
              </li>

              <li>
                <span className="text-2xl font-bold block mb-2">Advertising</span>
                <ul className="list-disc pl-6 space-y-1 my-3">
                  <li>This website uses Google AdSense to display advertisements.</li>
                  <li>Ads are shown in compliance with Google's policies.</li>
                </ul>
              </li>

              <li>
                <span className="text-2xl font-bold block mb-2">Privacy</span>
                <p className="pl-0 my-3 text-md font-normal">
                  Your use of this website is also governed by our <Link href="/privacy-policy" className="text-[#f26522] hover:underline">Privacy Policy</Link>.
                </p>
              </li>

              <li>
                <span className="text-2xl font-bold block mb-2">Changes to Terms</span>
                <p className="pl-0 my-3 text-md font-normal">
                  We may update these Terms & Conditions at any time. Changes will be posted here with a revised "Last Updated" date.
                </p>
              </li>

              <li>
                <span className="text-2xl font-bold block mb-2">Contact Us</span>
                <p className="pl-0 my-3 text-md font-normal mb-2">
                  For questions regarding these Terms & Conditions:
                </p>
                <p className="pl-0 my-3 text-md font-normal">
                  📧 contactnplschedule@gmail.com
                </p>
              </li>
            </ol>

          </div>
        </div>
      </div>
    </div>
  )
}
