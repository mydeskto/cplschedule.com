import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ClientLayout } from "./components/ClientLayout";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700', '800'], // Weight variants for headings
  adjustFontFallback: true,
  fallback: ['system-ui', 'arial'],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'], // Weight variants for body text
  adjustFontFallback: true,
  fallback: ['system-ui', 'arial'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'CPL 2026 – Live Scores, Schedule & Points Table | Today’s Match Updates',
  description: 'Stay updated with CPL 2026! Get live scores, full match schedule, points table, and today’s match updates. Follow Coastal Premier League action.',
  metadataBase: new URL('https://CPLt20league.com'),
  alternates: {
    canonical: 'https://CPLt20league.com/',
  },
  keywords: [
    "CPL 2026",
    "Coastal Premier League",
    "CPL live score",
    "CPL schedule",
    "CPL points table"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'X-Robots-Tag': 'index, follow',
  },
  verification: {
    google: 'x90NCjSnxugpZh7YX9GWlgUjF-OUMCxRlokDIvxHd0Y',
  },
  publisher: 'CPLt20league.com',
  authors: [
    {
      name: 'CPLteam',
      url: 'https://CPLt20league.com',
    },
  ],
  icons: [
    { rel: 'icon', url: '/images/CPL-logo.avif', sizes: 'any' },
    { rel: 'icon', url: '/images/CPL-logo.avif', sizes: '32x32', type: 'image/png' },
    { rel: 'icon', url: '/images/CPL-logo.avif', sizes: '16x16', type: 'image/png' },
    { rel: 'apple-touch-icon', url: '/images/CPL-logo.avif', sizes: '180x180' },
    { rel: 'icon', url: '/images/CPL-logo.avif', sizes: '192x192', type: 'image/png' },
    { rel: 'icon', url: '/images/CPL-logo.avif', sizes: '512x512', type: 'image/png' },
  ],
}

// Pre-compute JSON schemas outside component to avoid re-rendering
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://CPLt20league.com/#organization",
  "name": "CPL T20 League",
  "alternateName": "Coastal Premier League",
  "url": "https://CPLt20league.com/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://CPLt20league.com/images/CPL-logo-white.webp",
    "width": 400,
    "height": 200
  },
  "sameAs": [
    "https://www.youtube.com/channel/UCsin34Ns_3LDsvyQnBv73mw",
    "https://www.facebook.com/profile.php?id=61582279622646",
    "https://x.com/CPLt20league",
    "https://www.instagram.com/CPLt20league/",
  ],
  "description": "Official website for Coastal Premier League (CPL) T20 2026 - Live scores, match schedules, points table, team information, player stats, and latest news."
};

const sportsOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "SportsLeague",
  "@id": "https://CPLt20league.com/#SportsLeague",
  "name": "Coastal Premier League (CPL) T20 2026",
  "alternateName": "CPL T20",
  "sport": "Cricket",
  "url": "https://CPLt20league.com/",
  "memberOf": {
    "@type": "SportsLeague",
    "name": "Bangladesh Cricket Board",
    "alternateName": "BCB"
  }
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CPL T20 League",
  "url": "https://CPLt20league.com",
  "description": "Latest news, match reports, points table, Live Score, teams and schedule for the Coastal Premier League (CPL) T20.",
  "publisher": {
    "@type": "Organization",
    "name": "CPL T20 League",
    "logo": {
      "@type": "ImageObject",
      "url": "https://CPLt20league.com/logo.png"
    }
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://CPLt20league.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// Pre-stringify JSON to avoid runtime JSON.stringify calls
const organizationSchemaJson = JSON.stringify(organizationSchema);
const sportsOrganizationSchemaJson = JSON.stringify(sportsOrganizationSchema);
const webSiteSchemaJson = JSON.stringify(webSiteSchema);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <head>
        {/* Mobile Performance Optimizations */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        {/* Resource Hints for Performance - Critical for LCP */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Use dns-prefetch for non-critical resources to save connection slots on mobile */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://fundingchoicesmessages.google.com" />
        <link rel="dns-prefetch" href="https://forfrogadiertor.com" />

        {/* Preconnect only for critical resources to reduce DNS lookup time */}

        {/* Favicon - Fix 404 error */}
        <link rel="icon" href="/images/CPL-logo.avif" type="image/png" />
        <link rel="shortcut icon" href="/images/CPL-logo.avif" type="image/png" />

        {/* Preload critical resources - Only truly critical above-the-fold content */}
        {/* Preload LCP element - First hero image for optimal LCP */}
        <link
          rel="preload"
          as="image"
          href="/images/hero/hero1.avif"
          fetchPriority="high"
          imageSizes="100vw"
        />

        {/* Preload additional hero images only on larger screens (saves mobile bandwidth) */}
        {/* Note: Media queries in preload may cause warnings - only preload if critical */}

        {/* Critical CSS - Next.js optimizes CSS automatically, but we preload to reduce blocking */}
        {/* Fonts are already optimized via next/font */}

        {/* Google tag (gtag.js) - Load lazily to reduce blocking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9HXKDY7FZL"
          strategy="lazyOnload"
        />
        
        <Script id="google-analytics-init" strategy="lazyOnload">
          {`
           window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-9HXKDY7FZL');
        `}
        </Script>

         {/* Google Ads - Must use regular script tag (not Next.js Script) to avoid data-nscript attribute */}
         <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3169729065573671"
          crossOrigin="anonymous"
        />

        {/* Google Consent Messages - Load lazily */}
        <Script
          src="https://fundingchoicesmessages.google.com/i/pub-3169729065573671?ers=1"
          strategy="lazyOnload"
        />


        <meta
          name="google-site-verification"
          content="x90NCjSnxugpZh7YX9GWlgUjF-OUMCxRlokDIvxHd0Y"
        />

        <link
          rel="preload"
          href="/images/AnimatedChevronWhite.svg"
          as="image"
          type="image/svg+xml"
        />


        {/* Schema.org Structured Data - Pre-stringified for performance */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: organizationSchemaJson }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sportsOrganizationSchemaJson }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: webSiteSchemaJson }}
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${manrope.variable} ${inter.variable} antialiased`}
      >
        <ClientLayout>
          {children}
        </ClientLayout>

        {/* Non-critical scripts loaded at bottom of body for better performance */}
      </body>
    </html>
  );
}





