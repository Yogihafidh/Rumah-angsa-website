// app/_components/MobileNavigation.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function MobileNavigation({ session }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden relative  z-60">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="z-[60] relative"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? (
          <X className="h-8 w-8 text-black" />
        ) : (
          <Menu className="h-8 w-8 text-black" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={toggleMenu} />
      )}

      {/* Mobile Menu */}
      <div
        className={`
          fixed top-0 right-0 w-64 h-full bg-white 
          transform transition-transform duration-300 z-50
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-6 pt-16">
          <ul className="space-y-6 text-xl">
            <li>
              <Link
                href="/cabins"
                className="block hover:text-primary-500 transition-colors"
                onClick={toggleMenu}
              >
                Semua Kabin
              </Link>
            </li>
            <li>
              {session?.user ? (
                <Link
                  href="/account"
                  className="flex items-center gap-4 hover:text-primary-500 transition-colors"
                  onClick={toggleMenu}
                >
                  <Image
                    className="h-8 w-8 rounded-full"
                    width={32}
                    height={32}
                    src={session.user.image || "default-user.jpg"}
                    alt={session.user.name}
                    unoptimized
                  />
                  <span>{session.user.name.split(" ").at(0)}</span>
                </Link>
              ) : (
                <Link
                  href="/account"
                  className="block hover:text-primary-500 transition-colors"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
