"use client";

import {
  ClipboardCheck,
  HardHat,
  LifeBuoy,
  MapPin,
  ShieldCheck,
  Siren,
  Users,
  Wrench,
} from "lucide-react";
import { FadeIn, FadeInScale } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { COMPANY } from "@/lib/constants";

const safetyPoints = [
  {
    icon: ClipboardCheck,
    title: "Pre-Operation Planning",
    description:
      "Every lifting requirement begins with understanding the site, equipment, access conditions and project requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Safety-Focused Operations",
    description:
      "Lifting activities are approached with careful attention to operating conditions and safe execution.",
  },
  {
    icon: HardHat,
    title: "Site-Aware Approach",
    description:
      "Our team considers site conditions, working areas and operational surroundings before starting lifting work.",
  },
  {
    icon: Wrench,
    title: "Equipment Readiness",
    description:
      "Crane and equipment readiness is an important part of maintaining dependable lifting operations.",
  },
  {
    icon: Users,
    title: "Professional Coordination",
    description:
      "Clear coordination between operators, site teams and project stakeholders helps keep operations organized.",
  },
  {
    icon: Siren,
    title: "Responsive Support",
    description:
      "For urgent requirements, our team is available to respond to crane and lifting service enquiries.",
  },
];

const operatingSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We first understand the lifting requirement, site conditions and project expectations.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "The appropriate crane solution and operational approach are considered for the requirement.",
  },
  {
    number: "03",
    title: "Coordinate",
    description:
      "Our team coordinates with the customer and site personnel before operations begin.",
  },
  {
    number: "04",
    title: "Execute",
    description:
      "The lifting activity is carried out with a professional, safety-focused approach.",
  },
];

export function SafetyOperations() {
  return (
    <Section
      id="safety"
      background="navy"
      className="relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-yellow-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <Container className="relative">
        {/* Heading */}
        <SectionHeading
          eyebrow="Safety & Operations"
          title="Safety Is Part of Every Lift."
          description="Professional lifting is about more than moving heavy equipment. It requires planning, coordination, equipment readiness and careful execution."
          align="center"
        />

        {/* Safety cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {safetyPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeIn
                key={item.title}
                delay={index * 0.06}
                className="h-full"
              >
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/30 hover:bg-white/[0.05]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 transition-colors duration-300 group-hover:bg-yellow-500 group-hover:text-black">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <span className="text-xs font-semibold tracking-[0.2em] text-zinc-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Operations process */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <FadeIn>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-yellow-400">
                <LifeBuoy size={14} />
                Our Approach
              </div>

              <h3 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                A Structured Approach to Every Lifting Requirement.
              </h3>

              <p className="mt-5 max-w-xl leading-8 text-zinc-400">
                Whether the requirement is for construction, industrial
                equipment, machinery shifting or project-based crane rental,
                we focus on understanding the requirement before beginning
                the work.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300">
                  <MapPin size={16} className="text-yellow-400" />
                  {COMPANY.serviceArea}
                </div>

                <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300">
                  <Siren size={16} className="text-yellow-400" />
                  {COMPANY.availability}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeInScale>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 p-6 sm:p-8">
              {/* Decorative industrial lines */}
              <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 border-l border-b border-yellow-500/10" />

              <div className="space-y-3">
                {operatingSteps.map((step, index) => (
                  <div key={step.number} className="relative">
                    <div className="flex gap-5 rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-colors hover:border-yellow-500/20">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-yellow-500 text-sm font-black text-black">
                        {step.number}
                      </div>

                      <div>
                        <h4 className="font-semibold text-white">
                          {step.title}
                        </h4>

                        <p className="mt-1 text-sm leading-6 text-zinc-500">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {index < operatingSteps.length - 1 && (
                      <div className="ml-[39px] h-3 border-l border-dashed border-zinc-700" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeInScale>
        </div>

        {/* Bottom CTA */}
        <FadeIn>
          <div className="mt-14 overflow-hidden rounded-2xl border border-yellow-500/20 bg-yellow-500/[0.06]">
            <div className="flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow-400">
                  Have a lifting requirement?
                </p>

                <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  Let&apos;s discuss your project requirements.
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
                  Share your location, lifting requirement and project details
                  with our team for a suitable crane service solution.
                </p>
              </div>

              <Button
                href="/contact"
                variant="primary"
                size="lg"
                arrow
                className="shrink-0"
              >
                Discuss Your Requirement
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}