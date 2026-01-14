import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - CPL T20 | Coastal Premier League',
  description: 'Get in touch with CPLT20League.com. Contact us for inquiries, support, or feedback about the Coastal Premier League.',
  alternates: {
    canonical: 'https://CPLt20league.com/contact-us',
  },
}

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


