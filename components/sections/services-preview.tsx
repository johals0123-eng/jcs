"use client";

import {
  ArrowRight,
  Building2,
  Clock3,
  Factory,
  HardHat,
  Move3d,
  PackageCheck,
  Settings,
  ShieldCheck,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";

import { FadeIn } from "@/components/ui/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const services = [
  {
    number: "01",
    icon: Truck,
    title: "Crane Rental",
    description:
      "Reliable crane rental solutions for construction, industrial and project-based lifting requirements.",
    tags: ["Flexible Rental", "Project Support"],
  },
  {
    number: "02",
    icon: Move3d,
    title: "Heavy Lifting",
    description:
      "Professional lifting support for heavy machinery, structural components and demanding site operations.",
    tags: ["Heavy Loads", "Site Operations"],
  },
  {
    number: "03",
    icon: PackageCheck,
    title: "Industrial Equipment Shifting",
    description:
      "Safe and practical solutions for shifting heavy industrial equipment within and between project sites.",
    tags: ["Equipment", "Industrial"],
  },
  {
    number: "04",
    icon: Settings,
    title: "Machinery Installation",
    description:
      "Crane-assisted machinery positioning and installation support for industrial and engineering projects.",
    tags: ["Installation", "Positioning"],
  },
  {
    number: "05",
    icon: HardHat,
    title: "Construction Lifting",
    description:
      "Lifting solutions for construction sites, structural work, infrastructure projects and material handling.",
    tags: ["Construction", "Infrastructure"],
  },
  {
    number: "06",
    icon: Building2,
    title: "Structural Lifting",
    description:
      "Specialized lifting support for structural components, fabricated sections and large project assemblies.",
    tags: ["Structures", "Fabrication"],
  },
  {
    number: "07",
    icon: Factory,
    title: "Industrial Plant Operations",
    description:
      "Crane support for industrial plants, maintenance activities, equipment handling and shutdown operations.",
    tags: ["Industrial", "Plant Support"],
  },
  {
    number: "08",
    icon: Zap,
    title: "Emergency Crane Services",
    description:
      "Responsive crane support for urgent lifting, recovery and time-critical operational requirements.",
    tags: ["Emergency", "24/7"],
  },
];

export function ServicesPreview() {
  return (
    <Section
      id="services"
      background="default"
      className="industrial-grid"
    >
      <Container>
        {/* Heading */}
        <FadeIn>
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <Badge>Our Services</Badge>

              <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Crane & Heavy Lifting{" "}
                <span className="text-yellow-400">
                  Solutions That Get the Job Done.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
                From routine crane rental to complex industrial lifting
                operations, Johal Crane Services provides practical solutions
                designed around your project requirements.
              </p>
            </div>

            <Button
              href="/services"
              variant="outline"
              showArrow
              className="w-fit"
            >
              View All Services
            </Button>
          </div>
        </FadeIn>

        {/* Services grid */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <FadeIn
                key={service.title}
                delay={index * 0.06}
                className="h-full"
              >
                <Card className="group flex h-full min-h-[330px] flex-col p-6">
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 transition-all duration-500 group-hover:border-yellow-500 group-hover:bg-yellow-500 group-hover:text-black">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-xs font-black tracking-[0.2em] text-zinc-700 transition-colors duration-300 group-hover:text-yellow-500/40">
                      {service.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-7">
                    <h3 className="text-xl font-bold text-white">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-zinc-500">
                      {service.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-auto flex flex-wrap gap-2 pt-7">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Hover arrow */}
                  <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5 text-xs font-bold uppercase tracking-[0.12em] text-zinc-600 transition-colors duration-300 group-hover:text-yellow-400">
                    Explore Service

                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Card>
              </FadeIn>
            );
          })}
        </div>

        {/* Service assurance strip */}
        <FadeIn delay={0.2}>
          <div className="mt-10 grid overflow-hidden rounded-2xl border border-white/10 bg-[#07111f] sm:grid-cols-3">
            <div className="flex items-center gap-4 border-b border-white/10 p-6 sm:border-b-0 sm:border-r">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-400">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <p className="font-bold text-white">
                  Safety Focused
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  Professional lifting approach
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 border-b border-white/10 p-6 sm:border-b-0 sm:border-r">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-400">
                <Clock3 className="h-5 w-5" />
              </div>

              <div>
                <p className="font-bold text-white">
                  24/7 Availability
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  Responsive project support
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-400">
                <Wrench className="h-5 w-5" />
              </div>

              <div>
                <p className="font-bold text-white">
                  Multiple Solutions
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  Different crane requirements covered
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}