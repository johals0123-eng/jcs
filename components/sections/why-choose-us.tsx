"use client";

import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  HardHat,
  MapPin,
  ShieldCheck,
  Target,
  Wrench,
} from "lucide-react";

import { FadeIn } from "@/components/ui/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Safety-Focused Operations",
    description:
      "Every lifting requirement demands attention to equipment, site conditions and safe execution.",
  },
  {
    icon: Clock3,
    title: "Available 24/7",
    description:
      "Our service model is built to support urgent requirements and time-sensitive project operations.",
  },
  {
    icon: Wrench,
    title: "Multiple Crane Options",
    description:
      "Access different crane types to match the requirements of construction and industrial lifting work.",
  },
  {
    icon: MapPin,
    title: "Local Area Expertise",
    description:
      "Based in Jharsuguda and serving nearby areas with responsive local support.",
  },
  {
    icon: Target,
    title: "Project-Focused Approach",
    description:
      "We focus on understanding the lifting requirement before recommending a practical solution.",
  },
  {
    icon: HardHat,
    title: "Industrial & Construction Support",
    description:
      "Suitable solutions for construction, infrastructure, manufacturing and industrial applications.",
  },
];

const commitments = [
  "Responsive communication",
  "Project-oriented service",
  "Multiple crane solutions",
  "24/7 availability",
  "Local service coverage",
  "Professional approach",
];

export function WhyChooseUs() {
  return (
    <Section
      id="why-choose-us"
      background="default"
      className="relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-500/[0.025] blur-[140px]" />

      <Container>
        {/* Header */}
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Why Johal Crane</Badge>

            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Built Around{" "}
              <span className="text-yellow-400">
                Reliability.
              </span>{" "}
              Focused on Your Project.
            </h2>

            <p className="mt-5 text-base leading-7 text-zinc-400 sm:text-lg">
              When the work involves heavy loads, complex sites and critical
              timelines, choosing the right crane service partner matters.
            </p>
          </div>
        </FadeIn>

        {/* Main content */}
        <div className="mt-14 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Reasons */}
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <FadeIn
                  key={reason.title}
                  delay={index * 0.07}
                  className="h-full"
                >
                  <div className="group h-full rounded-2xl border border-white/10 bg-[#0d0d0f] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-yellow-500/25 hover:bg-[#111113]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-500/15 bg-yellow-500/[0.08] text-yellow-400 transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-black">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-white">
                      {reason.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                      {reason.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Commitment panel */}
          <FadeIn delay={0.2}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-yellow-500/15 bg-[#07111f] p-7 sm:p-9">
              {/* Decorative elements */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-yellow-500/[0.06]" />

              <div className="pointer-events-none absolute -bottom-32 -right-10 h-72 w-72 rounded-full bg-yellow-500/[0.04] blur-3xl" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-500 text-black shadow-lg shadow-yellow-500/10">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
                  Our Commitment
                </p>

                <h3 className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl">
                  Your lifting requirement deserves a dependable partner.
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
                  We aim to provide responsive crane support, practical
                  solutions and professional service for every project we
                  undertake.
                </p>

                {/* Checklist */}
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {commitments.map((commitment) => (
                    <div
                      key={commitment}
                      className="flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-yellow-400" />

                      <span className="text-sm text-zinc-300">
                        {commitment}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-9 border-t border-white/10 pt-7">
                  <p className="text-xs uppercase tracking-[0.15em] text-zinc-600">
                    Ready to discuss your project?
                  </p>

                  <Button
                    href="/contact"
                    size="lg"
                    showArrow
                    className="mt-4 w-full sm:w-fit"
                  >
                    Get a Quote
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Bottom statement */}
        <FadeIn delay={0.25}>
          <div className="mt-12 flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
                Johal Crane Services
              </p>

              <p className="mt-2 text-lg font-bold text-white">
                Crane rental & heavy lifting support in Jharsuguda.
              </p>
            </div>

            <a
              href="tel:1234567890"
              className="group inline-flex items-center gap-2 text-sm font-bold text-zinc-300 transition-colors hover:text-yellow-400"
            >
              Talk to our team

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}