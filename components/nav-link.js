"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// This component is used to create a navigation link
// It highlights the link if the current path matches the href
// This is useful for indicating the active page in the navigation

export default function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <Link href={href} className={path.startsWith(href) ? "active" : undefined}>
      {children}
    </Link>
  );
}
