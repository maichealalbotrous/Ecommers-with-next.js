"use client";

import { usePathname } from "next/navigation";
import NavBar from "./NavBar";

export default function NavBarWrapper() {
  const pathname = usePathname();


  const hideNavbarPaths = ["/Auth"];

  const shouldHideNavbar = hideNavbarPaths.some((path) =>
    pathname.startsWith(path)
  );

  if (shouldHideNavbar) return null;

  return <NavBar />;
}
