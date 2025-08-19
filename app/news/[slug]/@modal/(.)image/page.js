import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

export default function InterceptedImagePage({ params }) {
  const { slug } = params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);

  if (!newsItem) {
    notFound(); // This will trigger the not-found page
  }
  return (
    <>
      <div className="modal-backdrop" />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
