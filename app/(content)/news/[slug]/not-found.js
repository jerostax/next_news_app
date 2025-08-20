// This file is used to handle the case when a news article is not found
// It displays a message indicating that the article does not exist

export default function NewsNotFoundPage() {
  return (
    <div id="error">
      <h1>Page Not Found</h1>
      <p>Sorry, the article you are looking for does not exist.</p>
    </div>
  );
}
