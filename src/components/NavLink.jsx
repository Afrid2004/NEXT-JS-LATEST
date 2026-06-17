import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const activePath =
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    // stylize getting the current pathname
    <Link href={href} className={activePath ? "bg-cyan-600 px-4 py-1" : ""}>
      {children}
    </Link>
  );
};

export default NavLink;
