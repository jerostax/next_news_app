// This file is used to handle the case when a page is not found
// It displays a message indicating that the page does not exist

export default function NotFoundPage() {
  return (
    <div id="error">
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}
