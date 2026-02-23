import { NewsCard } from "@/components/news-card"
import { newsArticles } from "@/data/news-data"
import { Metadata } from "next"
import { Breadcrumb } from "@/components/breadcrumb"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Nepal Premier League 2026 News | Latest Updates & Match Reports",
    description: "Read the latest Nepal Premier League 2026 news including match reports, squad updates, injuries, points table changes and official announcements.",
    keywords: ["NPL News", "NPL 2026 News", "Nepal Premier League News", "NPL Updates", "NPL 2026"],
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false
      }
    },
    alternates: {
      canonical: "https://nplschedule.com/news"
    },
    openGraph: {
      title: "NPL 2026 News | Latest Updates & Headlines",
      description: "Stay updated with the latest Nepal Premier League 2026 news, match reports, team updates, and player stories.",
      url: "/news",
      siteName: "NPL Schedule",
      locale: "en_US",
      type: "website",
    }
  }
}

const imageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "image": newsArticles.map((article) => ({
    "@type": "ImageObject",
    "contentUrl": article.image,
    "caption": article.imageCaption,
    "width": 1024,
    "height": 768
  }))
};





export default function NewsPage() {
  // Define breadcrumb items for the news page
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'News', href: '', isCurrent: true }
  ];

  return (
    <div className="min-h-screen bg-[#122754] pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": "https://nplschedule.com/#blog",
            "name": "NPL Schedule Blog",
            "description": "Latest Nepal Premier League news, match reports, fixtures updates, team analysis, player stats, and fantasy cricket tips.",
            "publisher": {
              "@id": "https://nplschedule.com/#organization"
            },
            "inLanguage": "en"
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageJsonLd) }}
      />


      <div className="container mx-auto px-4 py-8 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Latest News Heading */}
        {/* <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2 uppercase tracking-tighter">Latest News</h2>
          <div className="w-20 h-1 bg-[#f26522] rounded"></div>
        </div> */}

        <div className="mt-8">
          <h1 className="text-2xl font-bold text-white mb-4">Nepal Premier League 2026 News & Updates</h1>
          <p className="text-gray-400 text-sm">Stay updated with the latest Nepal Premier League 2026 news including match previews, results, squad announcements, injuries, transfers, and official tournament developments.</p>
          <p className="text-gray-400 text-sm">We regularly publish updates to keep fans informed throughout the NPL 2026 season.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[...newsArticles]
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .map((article) => (
              <NewsCard key={article.id} {...article} image={typeof article.image === "string" ? article.image : article.image.src} />
            ))}
        </div>
      </div>
    </div>
  )
}


