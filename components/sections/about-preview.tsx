"use client";

import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  MapPin,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

import { COMPANY } from "@/lib/constants";
import { FadeIn } from "@/components/ui/motion";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Professional Operations",
    text: "Focused on dependable crane rental and heavy lifting support.",
  },
  {
    icon: Wrench,
    title: "Multiple Crane Solutions",
    text: "Solutions for different lifting requirements and site conditions.",
  },
  {
    icon: Factory,
    title: "Industrial Experience",
    text: "Supporting construction and industrial lifting requirements.",
  },
  {
    icon: MapPin,
    title: "Local Service",
    text: "Serving Jharsuguda and nearby areas with responsive support.",
  },
];

export function AboutPreview() {
  return (
    <Section
      id="about"
      background="navy"
      className="relative"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-48 top-20 h-96 w-96 rounded-full bg-yellow-500/[0.04] blur-[120px]" />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Image */}
          <FadeIn>
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
                <Image
                  src="/images/company/about-crane.jpg"
                  alt="Johal Crane Services equipment and heavy lifting operations"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Image label */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="rounded-xl border border-white/10 bg-black/50 p-5 backdrop-blur-md">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
                      Johal Crane Services
                    </p>

                    <p className="mt-2 text-lg font-bold text-white">
                      Heavy lifting support you can rely on.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating experience card */}
              <motion.div
                initial={{ opacity: 0, x: 25, y: 25 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="absolute -bottom-7 -right-4 w-[220px] rounded-xl border border-yellow-500/20 bg-[#0b1422]/95 p-5 shadow-2xl backdrop-blur-xl sm:-right-7"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-yellow-500 text-black">
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">
                      24/7 Support
                    </p>

                    <p className="mt-0.5 text-xs text-zinc-400">
                      Crane service availability
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative corner */}
              <div className="absolute -left-3 -top-3 h-20 w-20 border-l-2 border-t-2 border-yellow-500/50" />
            </div>
          </FadeIn>

          {/* Content */}
          <div>
            <FadeIn>
              <Badge>About Johal Crane</Badge>

              <h2 className="mt-5 max-w-2xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Reliable Lifting Solutions for{" "}
                <span className="text-yellow-400">
                  Demanding Projects.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
                Johal Crane Services provides professional crane rental and
                heavy lifting support for construction, industrial,
                infrastructure and project-based requirements in Jharsuguda
                and surrounding areas.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-500">
                From routine lifting operations to demanding heavy equipment
                handling, our focus is on dependable equipment, responsive
                service and practical solutions for every site requirement.
              </p>
            </FadeIn>

            {/* Highlights */}
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <FadeIn key={item.title} delay={index * 0.08}>
                    <div className="group h-full rounded-xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:border-yellow-500/20 hover:bg-white/[0.045]">
                      <div className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-400 transition-colors group-hover:bg-yellow-500 group-hover:text-black">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <h3 className="font-bold text-white">
                            {item.title}
                          </h3>

                          <p className="mt-1.5 text-sm leading-6 text-zinc-500">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

            {/* Service area */}
            <FadeIn delay={0.35}>
              <div className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">
                      Service Area
                    </p>

                    <p className="mt-1 font-semibold text-white">
                      {COMPANY.serviceArea}
                    </p>
                  </div>
                </div>

                <Button
                  href="/about"
                  variant="outline"
                  showArrow
                >
                  More About Us
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Bottom trust strip */}
        <FadeIn delay={0.2}>
          <div className="mt-20 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div className="grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              <div className="p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                  Availability
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-yellow-400" />

                  <span className="font-bold text-white">
                    24/7 Service
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                  Location
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-yellow-400" />

                  <span className="font-bold text-white">
                    Jharsuguda, Odisha
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                  Service Focus
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <Factory className="h-5 w-5 text-yellow-400" />

                  <span className="font-bold text-white">
                    Heavy Lifting & Crane Rental
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}