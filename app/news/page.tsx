import { NewsCard } from "@/components/news-card"
import { newsArticles } from "@/data/news-data"
import { Metadata } from "next"
import { Breadcrumb } from "@/components/breadcrumb"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "CPL 2026 News | Latest Updates, Match Reports & Headlines from Coastal Premier League",
    description: "Stay updated with the latest CPL 2026 news, match reports, team updates, and player stories. Get real-time coverage from the Coastal Premier League T20 only on CPLT20.",
    keywords: ["CPL News", "CPL 2026 News", "Coastal Premier League News", "CPL Updates", "CPL 2026"],
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
      canonical: "https://CPLt20league.com/news"
    },
    openGraph: {
      title: "CPL 2026 News | Latest Updates & Headlines",
      description: "Stay updated with the latest CPL 2026 news, match reports, team updates, and player stories.",
      url: "/news",
      siteName: "CPLt20league",
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
            "@id": "https://CPLt20league.com/#blog",
            "name": "CPL T20 League Blog",
            "description": "Latest CPL T20 news, match reports, fixtures updates, team analysis, player stats, and fantasy cricket tips.",
            "publisher": {
              "@id": "https://CPLt20league.com/#organization"
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
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2 uppercase tracking-tighter">Latest News</h2>
          <div className="w-20 h-1 bg-[#f26522] rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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


