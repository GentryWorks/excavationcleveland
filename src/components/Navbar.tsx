"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo-cleveland-wide-white.webp";
import { siteConfig } from "@/data/config";

const serviceLinks = [
  { href: "/services/grading", label: "Grading & Sitework" },
  { href: "/services/land-clearing", label: "Land Clearing" },
  { href: "/services/gravel-driveways", label: "Gravel Driveways" },
  { href: "/services/pool-excavation", label: "Pool Excavation" },
  { href: "/services/residential-excavation", label: "Residential Excavation" },
  { href: "/services/demolition", label: "Residential Demolition" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const textColor = scrolled ? "#1B2A4A" : "#FFFFFF";
  const hamburgerColor = scrolled ? "#1B2A4A" : "#FFFFFF";

  return (
    <>
      <nav
        className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "#FFFFFF" : "transparent",
          borderBottom: scrolled ? "1px solid #E5E7EB" : "none",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="hover:opacity-90 transition-opacity flex items-center rounded-md px-2 py-1"
            style={{ backgroundColor: "#FFFFFF" }}
            onClick={closeMenu}
          >
            <Image
              src={logo}
              alt="Excavation Cleveland Co."
              height={45}
              width={0}
              style={{ width: "auto", height: "55px" }}
            />
          </Link>

          {/* Nav links — hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium hover:opacity-75 transition-opacity" style={{ color: textColor }}
            >
              Home
            </Link>

            {/* Services dropdown — pure CSS hover */}
            <div className="relative group">
              <span
                className="text-sm font-medium hover:opacity-75 transition-opacity flex items-center gap-1 cursor-pointer" style={{ color: textColor }}
              >
                Services
                <svg className="w-3 h-3 mt-0.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="rounded-lg shadow-xl py-2 min-w-[220px]" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB" }}>
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors" style={{ color: "#1B2A4A" }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="text-sm font-medium hover:opacity-75 transition-opacity" style={{ color: textColor }}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:opacity-75 transition-opacity" style={{ color: textColor }}
            >
              Contact Us
            </Link>
          </div>

          {/* Right side: desktop CTA + mobile controls */}
          <div className="flex items-center gap-3">
            {/* Quote CTA — visible on all breakpoints */}
            <Link
              href={`tel:+1${siteConfig.phoneRaw}`}
              className="text-white font-bold text-sm px-4 py-2 rounded transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C4883A" }}
            >
              Call Now {siteConfig.phone}
            </Link>

            {/* Hamburger button — mobile only */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {/* Top bar */}
              <span
                className="block w-6 h-0.5 transition-all duration-300 origin-center"
                style={{
                  backgroundColor: hamburgerColor,
                  transform: menuOpen ? "translateY(3px) rotate(45deg)" : "none",
                }}
              />
              {/* Middle bar */}
              <span
                className="block w-6 h-0.5 my-1 transition-all duration-300"
                style={{
                  backgroundColor: hamburgerColor,
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              {/* Bottom bar */}
              <span
                className="block w-6 h-0.5 transition-all duration-300 origin-center"
                style={{
                  backgroundColor: hamburgerColor,
                  transform: menuOpen ? "translateY(-5px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {/* Backdrop — tap outside to close */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-40 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
        onClick={closeMenu}
      />

      {/* Slide-down panel */}
      <div
        className="fixed inset-x-0 top-20 z-40 md:hidden overflow-y-auto transition-all duration-300"
        style={{
          backgroundColor: "#1B2A4A",
          maxHeight: menuOpen ? "calc(100vh - 80px)" : "0px",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        aria-hidden={!menuOpen}
      >
        <div className="px-6 py-6 flex flex-col gap-1">
          {/* Home */}
          <Link
            href="/"
            onClick={closeMenu}
            className="block py-3 text-base font-semibold border-b transition-opacity hover:opacity-75"
            style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.12)" }}
          >
            Home
          </Link>

          {/* Services — expanded inline */}
          <div className="border-b" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
            <p
              className="py-3 text-base font-semibold"
              style={{ color: "#C4883A" }}
            >
              Services
            </p>
            <div className="pl-3 flex flex-col gap-1 pb-3">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-2 text-sm font-medium transition-opacity hover:opacity-75"
                  style={{ color: "#FFFFFF" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* About Us */}
          <Link
            href="/about"
            onClick={closeMenu}
            className="block py-3 text-base font-semibold border-b transition-opacity hover:opacity-75"
            style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.12)" }}
          >
            About Us
          </Link>

          {/* Contact Us */}
          <Link
            href="/contact"
            onClick={closeMenu}
            className="block py-3 text-base font-semibold border-b transition-opacity hover:opacity-75"
            style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.12)" }}
          >
            Contact Us
          </Link>

          {/* Call Now */}
          <Link
            href={`tel:+1${siteConfig.phoneRaw}`}
            onClick={closeMenu}
            className="block py-3 text-base font-semibold border-b transition-opacity hover:opacity-75"
            style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.12)" }}
          >
            Call Now {siteConfig.phone}
          </Link>

          {/* CTA button */}
          <div className="pt-5 pb-2">
            <Link
              href={`tel:+1${siteConfig.phoneRaw}`}
              onClick={closeMenu}
              className="block text-center text-white font-bold text-sm px-6 py-3 rounded transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C4883A" }}
            >
              Call Now {siteConfig.phone}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
