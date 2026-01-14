"use client";

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"
import AuthorDetails from "@/components/authordetails"
import Image from 'next/image';

interface NewsArticleProps {
  title: string;
  date: string;
  imageTitle: string;
  imageAlt: string;
  imageCaption: string;
  content: string;
  image: string | { src: string };
  summary: string;
  slug?: string;
}

export default function NewsArticle({ title, date, content, image, summary, slug, imageTitle, imageAlt, imageCaption }: NewsArticleProps) {
  const imageUrl = typeof image === 'string' ? image : image.src;

  // Define breadcrumb items for the article page using the actual slug from URL

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'News', href: '/news'  ,  isCurrent: true },
    // { label: title, href: articleUrl, isCurrent: true }
  ];


  return (
    <div className="min-h-screen bg-[#122754] font-inter tracking-wider pt-20">

      <div className="container mx-auto px-4 py-8 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <Breadcrumb items={breadcrumbItems} />

          {/* Back Button */}
          <div className="mb-8 pt-2">
            <Link href="/news">
              <Button
                variant="outline"
                className="mb-6 border-white/30 hover:bg-white/20 hover:text-white bg-transparent text-white hover:border-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to News
              </Button>
            </Link>
          </div>

          {/* Hero Image */}
          <div className="aspect-video relative rounded-lg overflow-hidden mb-8">
          <figure>
            <Image
              src={imageUrl}
              alt={imageAlt}
              title={imageTitle}
              className="w-full h-full object-cover"
              layout="fill"
              objectFit="cover"
              loading='lazy'
            />
            <figcaption>
              {imageCaption}
            </figcaption>
            </figure>
          </div>


          {/* Article Header */}
          <p className="text-xl md:text-3xl font-bold text-white mb-4">
            {title}
          </p>
          <p className="text-white mb-8">{date}</p>

          {/* Article Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            {content.split('\n').map((paragraph: string, index: number) => (
              paragraph.trim() && (
                <div
                  key={index}
                  className="text-slate-200 text-[14px] leading-relaxed mb-6 [&_a]:text-white [&_a:hover]:text-white [&_a]:underline-offset-4 [&_a:hover]:underline [&_h2]:text-white [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-6 [&_h2]:mb-4 [&_h3]:text-white [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-4 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-4 [&_ol]:space-y-2 [&_table]:w-full [&_table]:border-collapse [&_table]:border [&_table]:border-gray-600 [&_table]:my-6 [&_th]:border [&_th]:border-gray-600 [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:text-white [&_th]:font-semibold [&_td]:border [&_td]:border-gray-600 [&_td]:px-4 [&_td]:py-3"
                  dangerouslySetInnerHTML={{ __html: paragraph.trim() }}
                />
              )
            ))}
          </div>

          {/* Author Details */}
          <AuthorDetails />
        </div>
      </div>
    </div>
  )
}
