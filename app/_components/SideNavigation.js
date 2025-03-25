"use client";

import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <nav className="my-10 mx-5">
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
  );
}

export default SideNavigation;
