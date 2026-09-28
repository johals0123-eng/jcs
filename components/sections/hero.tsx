"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { motion } from "framer-motion";

import { COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05080d]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/johal-crane-hero.jpeg"
          alt="Johal Crane Services mobile crane performing heavy lifting"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#05080d]/95 via-[#05080d]/75 to-[#05080d]/25" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#05080d] via-transparent to-black/30" />

        {/* Industrial grid */}
        <div className="absolute inset-0 industrial-grid opacity-30" />
      </div>

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] items-center px-5 pb-20 pt-32 sm:px-8 lg:px-10 xl:px-12">
        <div className="w-full">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.55fr)]">
            {/* Left Content */}
            <div className="max-w-4xl">
              {/* Location badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-black/30 px-4 py-2 backdrop-blur-md"
              >
                <MapPin className="h-4 w-4 text-yellow-400" />

                <span className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-200 sm:text-sm">
                  Jharsuguda, Odisha
                </span>

                <span className="h-1 w-1 rounded-full bg-yellow-500" />

                <span className="text-xs font-semibold text-yellow-400">
                  24/7
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem]"
              >
                Built for Heavy Lifting.
                <span className="mt-2 block text-yellow-400">
                  Trusted for Critical Work.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.25,
                }}
                className="mt-7 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8"
              >
                Professional crane rental and heavy lifting solutions for
                construction, industrial, infrastructure and project
                requirements across Jharsuguda and nearby areas.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.35,
                }}
                className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              >
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-yellow-500 px-7 text-base font-bold text-black shadow-xl shadow-yellow-500/10 transition-all duration-300 hover:bg-yellow-400 hover:shadow-yellow-500/20"
                >
                  <Phone className="h-5 w-5" />

                  Call Now

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <a
                  href={`https://wa.me/${COMPANY.whatsapp.replace(
                    "+",
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg border border-white/20 bg-black/25 px-7 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-yellow-500/50 hover:bg-white/10 hover:text-yellow-400"
                >
                  WhatsApp Us
                </a>

                <a
                  href="/contact"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg border border-zinc-700 bg-zinc-950/40 px-7 text-base font-bold text-zinc-200 backdrop-blur-md transition-all duration-300 hover:border-yellow-500/40 hover:text-white"
                >
                  Get a Quote

                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>

              {/* Trust points */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.5,
                }}
                className="mt-10 flex flex-wrap gap-x-7 gap-y-4 border-t border-white/10 pt-6"
              >
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="h-5 w-5 text-yellow-400" />

                  <span className="text-sm font-medium text-zinc-300">
                    Professional Service
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Truck className="h-5 w-5 text-yellow-400" />

                  <span className="text-sm font-medium text-zinc-300">
                    Multiple Crane Types
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border border-yellow-500/50">
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                  </div>

                  <span className="text-sm font-medium text-zinc-300">
                    Available 24/7
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right visual information panel */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="hidden justify-end lg:flex"
            >
              <div className="w-full max-w-sm">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
                        Johal Crane
                      </p>

                      <p className="mt-1 text-lg font-bold text-white">
                        Heavy Lifting Solutions
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500 text-black">
                      <Truck className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="space-y-4 pt-5">
                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">
                        Service Area
                      </p>

                      <p className="mt-1 font-semibold text-white">
                        {COMPANY.serviceArea}
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">
                        Crane Fleet
                      </p>

                      <p className="mt-1 font-semibold text-white">
                        Mobile · Telescopic · Crawler · Tyre Mounted
                      </p>
                    </div>

                    <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4">
                      <div className="flex items-center gap-3">
                        <span className="relative flex h-3 w-3">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-50" />
                          <span className="relative inline-flex h-3 w-3 rounded-full bg-yellow-400" />
                        </span>

                        <div>
                          <p className="text-sm font-bold text-white">
                            Available 24/7
                          </p>

                          <p className="text-xs text-zinc-400">
                            Ready for your lifting requirements
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className={cn(
          "absolute bottom-7 left-1/2 hidden -translate-x-1/2",
          "flex-col items-center gap-2 text-zinc-500 transition-colors",
          "hover:text-yellow-400 md:flex"
        )}
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
          Explore
        </span>

        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.a>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-80" />
    </section>
  );
}