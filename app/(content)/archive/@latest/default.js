import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

// This page will display the latest news items
// It fetches the latest news from the database and renders them in a list

export default async function LatestNewsPage() {
  const latestNews = await getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
