"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="relative flex items-start justify-between px-6 lg:px-10 pt-1">
        {/* Left - Contact button + email */}
        <div className="hidden lg:flex items-center gap-10 pt-2">
          <Link
            href="#contact"
            className="border border-white rounded-full px-6 py-2 text-white text-[13px] capitalize tracking-wide hover:bg-white/10 transition-colors"
          >
            Contact us
          </Link>
          <span className="text-white text-[13px] capitalize">
            bt@doradogrove.com
          </span>
        </div>

        {/* Center - Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0">
          <Image
            src="/images/logo.png"
            alt="Dorado Grove"
            width={258}
            height={132}
            className="w-[160px] sm:w-[200px] lg:w-[258px] h-auto"
            priority
          />
        </div>

        {/* Right - Hamburger */}
        <button
          className="text-white pt-4 lg:pt-6 ml-auto relative z-10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-[5px] w-8">
            <span
              className={`h-[2px] bg-white transition-transform ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`h-[2px] bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-[2px] bg-white transition-transform ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="bg-black/80 backdrop-blur-sm px-8 py-6">
          <div className="flex flex-col gap-4">
            {["Residences", "Amenities", "Wellness", "Retail", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/90 text-sm tracking-[0.2em] uppercase hover:text-white transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
