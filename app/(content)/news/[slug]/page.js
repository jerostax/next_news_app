import Link from "next/link";
import { notFound } from "next/navigation";

import { getNewsItem } from "@/lib/news";

// This page will display a single news item based on the slug
// The slug is passed as a parameter in the URL
// Example: /news/some-news-item-slug

export default async function NewsDetailPage({ params }) {
  const newsSlug = params.slug;
  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound(); // This will trigger the not-found page
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
