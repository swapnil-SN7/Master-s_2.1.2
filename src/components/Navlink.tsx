"use client";
import Link from "next/link";
import { useState } from "react";
const NavLink = ({ href, title }) => {
  const [navbarOpen, setNavbarOpen] = useState(true);

  return (
    <Link
      href={href}
      className="block font-semibold py-2 pl-3 pr-4 mx-5 text-white sm:text-xl rounded md:p-0 hover:text-orange-500 hover:border-b-2 hover:border-orange-500"
      onClick={() => setNavbarOpen(false)}
    >
      {title}
    </Link>
  );
};

export default NavLink;