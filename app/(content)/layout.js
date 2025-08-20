import MainHeader from "@/components/main-header";
import "../globals.css";

// This is the root layout for the application
// It includes the main header and wraps the children components
// The metadata for the page is also defined here

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="page">
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
