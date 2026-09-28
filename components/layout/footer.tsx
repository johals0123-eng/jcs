import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/constants";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Equipment", href: "/equipment" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  "Crane Rental",
  "Heavy Lifting",
  "Industrial Equipment Shifting",
  "Machinery Installation",
  "Construction Lifting",
  "Structural Lifting",
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        {/* Main footer */}
        <div className="grid gap-12 py-14 lg:grid-cols-[1.3fr_0.7fr_1fr_1.2fr] lg:py-16">
          {/* Company */}
          <div>
            <Link href="/" className="inline-flex items-center">
              
              <div className="relative h-12 w-44">
                    <Image
                        src="/logo/johal-crane-logo.svg"
                        alt="Johal Crane Services"
                        fill
                        priority
                        className="object-contain object-left"
                    />
                </div>

              <div>
                <p className="font-bold tracking-tight text-white">
                  Johal Crane
                </p>

                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
                  Services
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-500">
              Professional crane rental, heavy lifting and industrial
              equipment support for construction and industrial requirements
              in Jharsuguda and nearby areas.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-yellow-400">
              <Clock3 size={14} />
              {COMPANY.availability}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-yellow-400"
                  >
                    {link.label}

                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Services
            </h3>

            <ul className="mt-5 space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-zinc-500 transition-colors hover:text-yellow-400"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-4">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex gap-3 text-sm text-zinc-400 transition-colors hover:text-yellow-400"
              >
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-yellow-500"
                />

                <span>{COMPANY.phone}</span>
              </a>

              <a
                href={`mailto:${COMPANY.email}`}
                className="flex gap-3 text-sm text-zinc-400 transition-colors hover:text-yellow-400"
              >
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-yellow-500"
                />

                <span className="break-all">{COMPANY.email}</span>
              </a>

              <div className="flex gap-3 text-sm leading-6 text-zinc-400">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-yellow-500"
                />

                <span>{COMPANY.address}</span>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-yellow-500 px-5 py-3 text-sm font-bold text-black transition-all hover:bg-yellow-400"
            >
              Request a Quote
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        

{/* Bottom bar */}
<div className="relative flex flex-col gap-5 border-t border-zinc-900 py-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
  {/* Copyright */}
  <p>
    © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
  </p>

  {/* Developed by - Center */}
  <p className="sm:absolute sm:left-1/2 sm:-translate-x-1/2">
    Developed by{" "}
    <Link
      href="https://thakurstechnology.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-colors hover:text-zinc-300"
    >
      Thakur&apos;s Technology
    </Link>
  </p>

  {/* Legal Links */}
  <div className="flex flex-wrap gap-5">
    <Link
      href="/privacy"
      className="transition-colors hover:text-zinc-300"
    >
      Privacy Policy
    </Link>

    <Link
      href="/terms"
      className="transition-colors hover:text-zinc-300"
    >
      Terms & Conditions
    </Link>
  </div>
</div>

          {/* <div className="flex flex-wrap gap-5">
            <Link
              href="/privacy"
              className="transition-colors hover:text-zinc-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-zinc-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div> */}
      </div>
    </footer>
  );
}