"use client";

import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: (isActive) => (
      <HomeIcon className={`h-5 w-5 ${isActive ? "text-primary-600" : ""}`} />
    ),
  },
  {
    name: "Reservasi",
    href: "/account/reservations",
    icon: (isActive) => (
      <CalendarDaysIcon
        className={`h-5 w-5 ${isActive ? "text-primary-600" : ""}`}
      />
    ),
  },
  {
    name: "Profile",
    href: "/account/profile",
    icon: (isActive) => (
      <UserIcon className={`h-5 w-5 ${isActive ? "text-primary-600" : ""}`} />
    ),
  },
];

function SideNavigation() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Tombol hamburger untuk layar kecil */}
      <button
        className="lg:hidden fixed top-30 left-2 z-50 px-2 py-2 bg-white shadow-md rounded-xl"
        onClick={toggleMenu}
      >
        {!isMenuOpen && <MenuIcon className="h-10 w-10" />}
      </button>

      {/* Navigasi untuk desktop */}
      <nav className="hidden lg:block my-10 mx-5">
        <ul className="flex flex-col justify-between gap-2 text-lg h-full border border-gray-200 rounded-2xl overflow-hidden shadow-sm py-5">
          <div>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.name}>
                  <Link
                    className={`py-3 px-5 hover:text-primary-500 transition-colors flex items-center gap-4 font-semibold ${
                      isActive ? "text-primary-600" : ""
                    }`}
                    href={link.href}
                  >
                    {link.icon(isActive)}
                    <span>{link.name}</span>
                  </Link>
                </li>
              );
            })}
          </div>

          <li>
            <SignOutButton />
          </li>
        </ul>
      </nav>

      {/* Menu overlay untuk layar kecil */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={toggleMenu} />
      )}

      {/* Navigasi untuk layar kecil */}
      <nav
        className={`
          fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
          lg:hidden
        `}
      >
        <button
          className="cursor-pointer lg:hidden fixed top-5 right-5 z-50 px-2 py-2 rounded-full bg-white shadow-md"
          onClick={toggleMenu}
        >
          {isMenuOpen && <XIcon className="h-8 w-8" />}
        </button>

        <ul className="flex flex-col justify-between gap-2 text-lg h-full border-r border-gray-200 py-5 pt-20">
          <div>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    className={`py-3 px-5 hover:text-primary-500 transition-colors flex items-center gap-4 font-semibold ${
                      isActive ? "text-primary-600" : ""
                    }`}
                    href={link.href}
                    onClick={toggleMenu}
                  >
                    {link.icon(isActive)}
                    <span>{link.name}</span>
                  </Link>
                </li>
              );
            })}
          </div>
          <li className="px-5">
            <SignOutButton />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SideNavigation;
