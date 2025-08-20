import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

// This page is used to display a full-screen image of a news item
// It intercepts the route to show the image in a modal dialog

export default async function InterceptedImagePage({ params }) {
  const { slug } = params;
  const newsItem = await getNewsItem(slug);

  if (!newsItem) {
    notFound(); // This will trigger the not-found page
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
