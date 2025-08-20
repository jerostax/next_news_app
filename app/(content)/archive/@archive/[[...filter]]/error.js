"use client";

// This component is used to handle errors that occur during the filtering of news items
// It displays an error message when an invalid filter is applied

export default function FilterError({ error }) {
  return (
    <div id="error">
      <h2>An error occurred!</h2>
      <p>{error.message}</p>
    </div>
  );
}
