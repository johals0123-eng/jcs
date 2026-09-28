"use client";

import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Gauge,
  Truck,
  Weight,
} from "lucide-react";

import { CRANE_TYPES } from "@/lib/constants";
import { FadeIn } from "@/components/ui/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const craneImages: Record<string, string> = {
  "mobile-crane": "/images/cranes/mobile-crane.jpg",
  "telescopic-crane": "/images/cranes/telescopic-crane.jpg",
  "crawler-crane": "/images/cranes/crawler-crane.jpg",
  "tyre-mounted-crane": "/images/cranes/tyre-mounted-crane.jpg",
};

const craneFeatures: Record<string, string[]> = {
  "mobile-crane": [
    "Flexible site mobility",
    "Construction lifting",
    "Industrial applications",
  ],
  "telescopic-crane": [
    "Extended boom reach",
    "Versatile lifting",
    "Project-based operations",
  ],
  "crawler-crane": [
    "Heavy-duty lifting",
    "Stable site operation",
    "Industrial projects",
  ],
  "tyre-mounted-crane": [
    "Quick site movement",
    "Flexible operations",
    "Multiple applications",
  ],
};

export function EquipmentPreview() {
  return (
    <Section
      id="equipment"
      background="navy"
      className="relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-yellow-500/[0.035] blur-[130px]" />

      <Container>
        {/* Heading */}
        <FadeIn>
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <Badge>Our Crane Fleet</Badge>

              <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                The Right Crane for{" "}
                <span className="text-yellow-400">
                  the Right Job.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
                Choose from multiple crane types designed to support
                construction, infrastructure and industrial lifting
                requirements.
              </p>
            </div>

            <Button
              href="/equipment"
              variant="outline"
              showArrow
              className="w-fit"
            >
              View Full Fleet
            </Button>
          </div>
        </FadeIn>

        {/* Fleet cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {CRANE_TYPES.map((crane, index) => {
            const features = craneFeatures[crane.slug] ?? [];

            return (
              <FadeIn
                key={crane.slug}
                delay={index * 0.08}
              >
                <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={craneImages[crane.slug]}
                      alt={`${crane.name} at Johal Crane Services`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Image overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    <div className="absolute left-5 top-5">
                      <span className="rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                        Crane Fleet
                      </span>
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-400">
                          {String(index + 1).padStart(2, "0")}
                        </p>

                        <h3 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                          {crane.name}
                        </h3>
                      </div>

                      <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-yellow-500 text-black transition-transform duration-300 group-hover:rotate-[-45deg] sm:flex">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-7">
                    <p className="leading-7 text-zinc-400">
                      {crane.description}
                    </p>

                    {/* Capacity */}
                    <div className="mt-6 rounded-xl border border-yellow-500/10 bg-yellow-500/[0.04] p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-400">
                          <Weight className="h-5 w-5" />
                        </div>

                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500">
                            Capacity
                          </p>

                          <p className="mt-0.5 text-sm font-semibold text-white">
                            {crane.capacity}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mt-6 grid gap-2 sm:grid-cols-3">
                      {features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" />

                          <span className="text-xs leading-5 text-zinc-500">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                      <a
                        href="/contact"
                        className="group/link inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-yellow-400"
                      >
                        Enquire About This Crane

                        <ChevronRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </a>

                      <span className="hidden items-center gap-1.5 text-xs text-zinc-600 sm:flex">
                        <Gauge className="h-3.5 w-3.5" />
                        Specifications on request
                      </span>
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        {/* Fleet CTA */}
        <FadeIn delay={0.2}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-yellow-500/15 bg-yellow-500/[0.04]">
            <div className="relative flex flex-col gap-6 p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
              {/* Decorative icon */}
              <Truck className="pointer-events-none absolute -right-5 -top-8 h-40 w-40 text-yellow-500/[0.04]" />

              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
                  Need a Specific Crane?
                </p>

                <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  Tell us about your lifting requirement.
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
                  Share your project details, load requirements and site
                  conditions. Our team can help identify a suitable crane
                  solution.
                </p>
              </div>

              <Button
                href="/contact"
                size="lg"
                showArrow
                className="relative w-full shrink-0 sm:w-fit"
              >
                Request a Crane
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}