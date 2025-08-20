import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

// This file is used to display the full-screen image of a news item

export default async function ImagePage({ params }) {
  const { slug } = params;
  const newsItem = await getNewsItem(slug);

  if (!newsItem) {
    notFound(); // This will trigger the not-found page
  }
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
