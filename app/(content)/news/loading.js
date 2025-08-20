// This file is used to show a loading state while the news data is being fetched

export default function NewsLoading() {
  return (
    <div className="loading">
      <h1>Loading News...</h1>
      <p>Please wait while we fetch the latest news updates.</p>
    </div>
  );
}
