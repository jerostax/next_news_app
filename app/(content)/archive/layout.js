// This file is used to define the layout for the archive section of the application
// It includes the archive filter and the latest news section

export default function ArchiveLayout({ archive, latest }) {
  return (
    <div>
      <h1>Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
