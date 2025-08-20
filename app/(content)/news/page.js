import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

// This page will display all news items
// It fetches all news from the database and renders them in a list

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
