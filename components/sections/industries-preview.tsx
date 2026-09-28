"use client";

import {
  ArrowRight,
  Building2,
  Factory,
  HardHat,
  Landmark,
  Mountain,
  Pickaxe,
  Power,
  Truck,
} from "lucide-react";

import { INDUSTRIES } from "@/lib/constants";
import { FadeIn } from "@/components/ui/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const industryIcons = [
  HardHat,
  Building2,
  Factory,
  Power,
  Pickaxe,
  Factory,
  Truck,
  Landmark,
  Factory,
  Landmark,
];

const industryDescriptions = [
  "Crane support for residential, commercial and large-scale construction projects.",
  "Heavy lifting solutions for roads, bridges and major infrastructure development.",
  "Equipment handling and lifting support for steel and manufacturing operations.",
  "Crane services for power plants, energy projects and equipment installation.",
  "Heavy-duty lifting support for mining operations and material handling.",
  "Industrial plant lifting, maintenance and equipment shifting requirements.",
  "Heavy equipment movement and lifting support for logistics operations.",
  "Lifting solutions for road, bridge and other major civil engineering projects.",
  "Crane support for fabrication yards, engineering and assembly operations.",
  "Project-based lifting support for government and public infrastructure work.",
];

export function IndustriesPreview() {
  return (
    <Section
      id="industries"
      background="navy"
      className="relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-yellow-500/[0.035] blur-[120px]" />

      <Container>
        {/* Heading */}
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Industries We Serve</Badge>

            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Lifting Support Across{" "}
              <span className="text-yellow-400">
                Multiple Industries.
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-zinc-400 sm:text-lg">
              From construction sites to industrial plants, our crane
              solutions are designed to support a wide range of demanding
              lifting environments.
            </p>
          </div>
        </FadeIn>

        {/* Industry grid */}
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {INDUSTRIES.map((industry, index) => {
            const Icon = industryIcons[index];

            return (
              <FadeIn
                key={industry}
                delay={index * 0.05}
                className="h-full"
              >
                <div className="group relative flex h-full min-h-[190px] flex-col overflow-hidden rounded-xl border border-white/10 bg-black/20 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-yellow-500/30 hover:bg-white/[0.04]">
                  {/* Number */}
                  <span className="absolute right-4 top-4 text-[10px] font-black tracking-[0.15em] text-zinc-700 transition-colors group-hover:text-yellow-500/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-yellow-500/15 bg-yellow-500/[0.07] text-yellow-400 transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-black">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Content */}
                  <div className="mt-auto pt-8">
                    <h3 className="text-base font-bold text-white">
                      {industry}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-zinc-600 transition-colors group-hover:text-zinc-500">
                      {industryDescriptions[index]}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-yellow-500 transition-all duration-500 group-hover:w-full" />
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* B2B CTA */}
        <FadeIn delay={0.25}>
          <div className="relative mt-12 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
            <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-yellow-500/[0.07] to-transparent lg:block" />

            <div className="relative flex flex-col gap-7 p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-yellow-400">
                  <Truck className="h-4 w-4" />

                  <span className="text-xs font-bold uppercase tracking-[0.18em]">
                    Project & B2B Enquiries
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                  Have a challenging lifting requirement?
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-500 sm:text-base">
                  Tell us about your project, equipment or lifting
                  requirement. We can discuss the crane solution that best
                  fits your site.
                </p>
              </div>

              <Button
                href="/contact"
                size="lg"
                showArrow
                className="shrink-0"
              >
                Discuss Your Project
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}