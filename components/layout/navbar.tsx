"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Menu,
  Phone,
  X,
} from "lucide-react";

import { COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Equipment",
    href: "/equipment",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/10 bg-[#07111f]/90 shadow-2xl shadow-black/20 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <div className="flex h-20 items-center justify-between lg:h-24">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="relative block h-12 w-44 shrink-0"
            aria-label="Johal Crane Services"
          >
            <Image
              src="/logo/johal-crane-logo.svg"
              alt="Johal Crane Services"
              fill
              priority
              sizes="176px"
              className="object-contain object-left"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative px-3 py-3 text-sm font-medium text-zinc-300 transition-colors duration-300 hover:text-white xl:px-4"
              >
                {item.name}

                <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-5" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${COMPANY.phone}`}
              className="group flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 text-yellow-400" />

              <span className="hidden xl:inline">
                Call Now
              </span>
            </a>

            <Link
              href="/contact"
              className="group inline-flex min-h-11 items-center gap-2 rounded-lg bg-yellow-500 px-5 text-sm font-bold text-black transition-all duration-300 hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-500/20"
            >
              Get a Quote

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition-colors hover:border-yellow-500/40 hover:text-yellow-400 lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "overflow-hidden border-t border-white/10 bg-[#07111f]/98 backdrop-blur-xl transition-all duration-500 lg:hidden",
          mobileOpen
            ? "max-h-[calc(100vh-5rem)] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        )}
      >
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto px-5 pb-8 pt-4 sm:px-8">
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="flex items-center justify-between border-b border-white/5 py-4 text-base font-medium text-zinc-300 transition-colors hover:text-yellow-400"
              >
                <span>{item.name}</span>

                <ArrowRight className="h-4 w-4 text-zinc-600" />
              </Link>
            ))}
          </nav>

          {/* Mobile Contact Actions */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 text-sm font-semibold text-white transition-colors hover:border-yellow-500/30 hover:text-yellow-400"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>

            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-yellow-500 text-sm font-bold text-black transition-colors hover:bg-yellow-400"
            >
              Get a Quote

              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Availability Panel */}
          <div className="mt-6 rounded-lg border border-yellow-500/10 bg-yellow-500/5 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-yellow-400">
              Available 24/7
            </p>

            <p className="mt-1 text-sm text-zinc-400">
              Crane rental and heavy lifting support in
              Jharsuguda and nearby areas.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}