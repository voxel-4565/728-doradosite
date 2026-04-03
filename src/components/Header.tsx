"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Welcome to Dorado", href: "/" },
  { label: "The Residences", href: "/residences" },
  { label: "Amenities", href: "/amenities" },
  { label: "Wellness", href: "#wellness" },
  { label: "Retail", href: "#retail" },
  { label: "Neighborhood", href: "#neighborhood" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const hamburgerLines = (color: string) => (
    <div className="flex flex-col gap-[5px] w-8">
      <span className={`h-[2px] ${color}`} />
      <span className={`h-[2px] ${color}`} />
      <span className={`h-[2px] ${color}`} />
    </div>
  );

  return (
    <>
      {/* Original transparent header over hero */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[240px] flex items-start justify-between pt-2">
          {/* Left - Inquire button + email */}
          <div className="hidden lg:flex items-center gap-10 pt-1">
            <Link
              href="#contact"
              className="border border-white rounded-full px-6 py-2 text-white text-[13px] capitalize tracking-wide hover:bg-white/10 transition-colors"
            >
              Inquire
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
            className="text-white pt-4 lg:pt-5 ml-auto relative z-10"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            {hamburgerLines("bg-white")}
          </button>
        </div>
      </header>

      {/* Sticky header - appears on scroll */}
      <div
        className={`fixed top-0 left-0 right-0 z-[99] bg-white border-b border-[#707070]/20 transition-all duration-500 ${
          scrolled && !menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[240px] h-[94px] flex items-center justify-between relative">
          {/* Left - Inquire + email */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="#contact"
              className="border border-[#51575d] rounded-full px-6 py-2 text-[#51575d] text-[13px] capitalize tracking-wide hover:bg-[#51575d] hover:text-white transition-colors"
            >
              Inquire
            </Link>
            <span className="text-[#51575d] text-[13px] capitalize">
              bt@doradogrove.com
            </span>
          </div>

          {/* Center - Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/images/logo.png"
              alt="Dorado Grove"
              width={258}
              height={132}
              className="w-[120px] sm:w-[140px] lg:w-[162px] h-auto brightness-0 opacity-70"
            />
          </div>

          {/* Right - Hamburger */}
          <button
            className="ml-auto relative z-10"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            {hamburgerLines("bg-[#51575d]")}
          </button>
        </div>
      </div>

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-[200] transition-opacity duration-500 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Left side - image */}
        <div className="hidden lg:block absolute inset-0 right-[33.33%]">
          <Image
            src="/images/hero.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="66vw"
          />
        </div>

        {/* Right side - navigation panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-full lg:w-[33.33%] bg-white flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close button */}
          <div className="flex justify-end pt-8 pr-8 lg:pt-10 lg:pr-10">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-[#51575d] hover:text-black transition-colors"
              aria-label="Close menu"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.2">
                <line x1="1" y1="1" x2="21" y2="21" />
                <line x1="21" y1="1" x2="1" y2="21" />
              </svg>
            </button>
          </div>

          {/* Nav content - centered vertically */}
          <div className="flex-1 flex flex-col justify-center px-10 lg:px-12">
            {/* Logo */}
            <div className="mb-10">
              <Image
                src="/images/logo.png"
                alt="Dorado Grove"
                width={258}
                height={132}
                className="w-[120px] h-auto brightness-0 opacity-60"
              />
            </div>

            {/* Nav links with separator lines */}
            <nav className="flex flex-col">
              {navLinks.map((link, i) => (
                <div key={link.label}>
                  {i > 0 && (
                    <div className="h-[1px] bg-[#e0dcd8]" />
                  )}
                  <Link
                    href={link.href}
                    className={`block py-[14px] text-[22px] lg:text-[24px] font-light tracking-[1.2px] uppercase transition-colors hover:text-black leading-[1.2] ${
                      i === 0 ? "text-black font-normal" : "text-[#51575d]"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Click outside to close (on the image area) */}
        <div
          className="hidden lg:block absolute inset-0 right-[33.33%] cursor-pointer"
          onClick={() => setMenuOpen(false)}
        />
      </div>
    </>
  );
}
