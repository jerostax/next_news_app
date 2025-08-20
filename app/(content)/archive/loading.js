// This file is used to display a loading state for the archive page
// It shows a message while the archive data is being fetched

export default function ArchiveLoading() {
  return (
    <div className="loading">
      <h1>Loading Archive...</h1>
      <p>Please wait while we fetch the latest archive updates.</p>
    </div>
  );
}
