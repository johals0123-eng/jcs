"use client";

import { usePathname } from "next/navigation";

import { FloatingActions } from "@/components/layout/floating-actions";
import { Navbar } from "@/components/layout/navbar";

export function SiteChrome() {
  const pathname = usePathname();

  // Admin pages have their own header/layout.
  const isAdminRoute = pathname.startsWith("/admin");

  if (isAdminRoute) {
    return null;
  }

  return (
    <>
      <Navbar />
      <FloatingActions />
    </>
  );
}
