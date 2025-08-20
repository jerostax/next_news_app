// This file is used to show a loading state while the news item data is being fetched

export default function LoadingNewsItem() {
  return (
    <div className="loading">
      <h1>Loading News Item...</h1>
      <p>Please wait while we fetch the news details.</p>
    </div>
  );
}
