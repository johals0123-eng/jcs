import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Gauge,
  HardHat,
  Phone,
  Ruler,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

import { COMPANY } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, FadeInScale } from "@/components/ui/motion";

const craneData = [
  {
    name: "Mobile Crane",
    slug: "mobile-crane",
    image: "/images/cranes/mobile-crane.jpg",
    icon: Truck,
    category: "Flexible Lifting",
    description:
      "Mobile crane solutions for construction sites, infrastructure work, industrial operations and general heavy lifting requirements.",
    features: [
      "Flexible site mobility",
      "Construction lifting support",
      "Industrial lifting operations",
      "Project-based requirements",
    ],
  },
  {
    name: "Telescopic Crane",
    slug: "telescopic-crane",
    image: "/images/cranes/telescopic-crane.jpg",
    icon: Ruler,
    category: "Versatile Reach",
    description:
      "Telescopic crane solutions for lifting requirements where reach, positioning and site flexibility are important considerations.",
    features: [
      "Telescopic boom configuration",
      "Versatile lifting applications",
      "Construction support",
      "Industrial project requirements",
    ],
  },
  {
    name: "Crawler Crane",
    slug: "crawler-crane",
    image: "/images/cranes/crawler-crane.jpg",
    icon: Gauge,
    category: "Heavy-Duty Lifting",
    description:
      "Crawler crane solutions for demanding heavy lifting operations and challenging project environments.",
    features: [
      "Heavy-duty lifting applications",
      "Large project support",
      "Industrial operations",
      "Infrastructure requirements",
    ],
  },
  // {
  //   name: "Tyre Mounted Crane",
  //   slug: "tyre-mounted-crane",
  //   image: "/images/cranes/tyre-mounted-crane.jpg",
  //   icon: Truck,
  //   category: "Site Flexibility",
  //   description:
  //     "Tyre-mounted crane solutions for projects requiring mobility and flexible lifting operations across different site conditions.",
  //   features: [
  //     "Mobile site operations",
  //     "Flexible lifting support",
  //     "Construction requirements",
  //     "Industrial applications",
  //   ],
  // },
];

const operatingFactors = [
  {
    icon: Gauge,
    title: "Load Requirement",
    description:
      "The weight and characteristics of the load help determine the suitable crane solution.",
  },
  {
    icon: Ruler,
    title: "Lift Height & Reach",
    description:
      "Required lifting height, radius and positioning are important factors when discussing crane selection.",
  },
  {
    icon: Truck,
    title: "Site Conditions",
    description:
      "Access, ground conditions and available operating space can affect equipment suitability.",
  },
  {
    icon: Clock3,
    title: "Project Timeline",
    description:
      "The duration and schedule of the lifting operation help determine the service arrangement.",
  },
];

export const metadata = {
  title: "Crane Fleet & Equipment",
  description:
    "Explore mobile, telescopic, crawler and tyre-mounted crane solutions from Johal Crane Services in Jharsuguda, Odisha.",
};

export default function EquipmentPage() {
  return (
    <main className="bg-zinc-950 text-white">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative flex min-h-[68vh] items-center overflow-hidden pt-24">
        <Image
          src="/images/cranes/mobile-crane.jpg"
          alt="Mobile crane equipment at an industrial project"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/95 via-[#07111f]/80 to-black/40" />

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/20" />

        <div className="industrial-grid absolute inset-0 opacity-30" />

        <Container className="relative z-10 py-20 lg:py-28">
          <div className="max-w-4xl">
            <FadeIn>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-yellow-400" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
                  Crane Fleet
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-balance text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                The Right Crane for{" "}
                <span className="text-yellow-400">
                  the Right Job.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
                Explore the crane solutions available through Johal Crane
                Services for construction, infrastructure, industrial and
                heavy lifting requirements.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  arrow
                >
                  Request a Crane
                </Button>

                <Button
                  href={`tel:${COMPANY.phone}`}
                  variant="outline"
                  size="lg"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6">
                <div className="flex items-center gap-2 text-sm text-zinc-300">
                  <HardHat className="h-4 w-4 text-yellow-400" />
                  Multiple Crane Types
                </div>

                <div className="flex items-center gap-2 text-sm text-zinc-300">
                  <Clock3 className="h-4 w-4 text-yellow-400" />
                  {COMPANY.availability}
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================== */}
      <Section background="default">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Our Equipment"
              title="Crane Solutions for Different Lifting Requirements."
              description="Different projects require different combinations of reach, mobility, lifting capability and site access. Johal Crane Services provides access to multiple crane types, subject to availability and project requirements."
            />
          </FadeIn>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Truck,
                title: "Mobility",
                text: "Choose a crane solution according to the movement and access requirements of the project.",
              },
              {
                icon: Gauge,
                title: "Lifting Capability",
                text: "Load characteristics and lifting requirements are considered when discussing equipment suitability.",
              },
              {
                icon: ShieldCheck,
                title: "Site Awareness",
                text: "Site conditions and operating space are important considerations before equipment deployment.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeIn key={item.title} delay={index * 0.08}>
                  <div className="h-full rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-6 text-lg font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {item.text}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* =========================================================
          CRANE FLEET
      ========================================================== */}
      <Section background="navy">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Available Crane Types"
              title="Explore Our Crane Fleet."
              description="Browse the primary crane categories supported by Johal Crane Services. Contact us with your project details so the suitable equipment can be discussed."
            />
          </FadeIn>

          <div className="mt-14 space-y-8">
            {craneData.map((crane, index) => {
              const Icon = crane.icon;
              const reverse = index % 2 !== 0;

              return (
                <FadeInScale key={crane.slug}>
                  <article
                    id={crane.slug}
                    className="scroll-mt-28 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/70"
                  >
                    <div
                      className={`grid lg:grid-cols-2 ${
                        reverse ? "lg:[&>*:first-child]:order-2" : ""
                      }`}
                    >
                      {/* Image */}
                      <div className="relative min-h-[300px] lg:min-h-[460px]">
                        <Image
                          src={crane.image}
                          alt={crane.name}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                        <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/60 px-4 py-2 backdrop-blur-md">
                          <span className="text-xs font-bold uppercase tracking-[0.15em] text-yellow-400">
                            {crane.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-500 text-black">
                          <Icon className="h-7 w-7" />
                        </div>

                        <p className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-yellow-400">
                          Crane Type {String(index + 1).padStart(2, "0")}
                        </p>

                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                          {crane.name}
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base">
                          {crane.description}
                        </p>

                        <div className="mt-7 grid gap-3 sm:grid-cols-2">
                          {crane.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-3"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" />

                              <span className="text-sm text-zinc-300">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                          <Link
                            href="/contact"
                            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-yellow-500 px-5 text-sm font-bold text-black transition-colors hover:bg-yellow-400"
                          >
                            Request This Crane

                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>

                          <a
                            href={`tel:${COMPANY.phone}`}
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 px-5 text-sm font-semibold text-white transition-colors hover:border-yellow-500/30 hover:text-yellow-400"
                          >
                            <Phone className="h-4 w-4" />
                            Discuss Requirement
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                </FadeInScale>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* =========================================================
          CRANE SELECTION FACTORS
      ========================================================== */}
      <Section background="default">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <FadeIn>
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2">
                  <Wrench className="h-4 w-4 text-yellow-400" />

                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-400">
                    Crane Selection
                  </span>
                </div>

                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Which Crane Does Your Project Need?
                </h2>

                <p className="mt-5 text-base leading-8 text-zinc-400">
                  Crane selection depends on several project-specific
                  factors. Share the details of your lifting requirement and
                  our team can discuss the available options with you.
                </p>

                <div className="mt-8">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="lg"
                    arrow
                  >
                    Discuss Your Project
                  </Button>
                </div>
              </div>
            </FadeIn>

            <div className="grid gap-4 sm:grid-cols-2">
              {operatingFactors.map((item, index) => {
                const Icon = item.icon;

                return (
                  <FadeIn key={item.title} delay={index * 0.08}>
                    <div className="h-full rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="mt-5 font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================
          EQUIPMENT INFORMATION
      ========================================================== */}
      <Section background="navy">
        <Container>
          <FadeIn>
            <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/[0.04] p-7 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-400">
                    Equipment Information
                  </p>

                  <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                    Need capacity, reach or equipment specifications?
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
                    Crane capacities, boom configurations, dimensions and
                    other equipment specifications should be confirmed
                    according to the actual machine available for your
                    project. Contact us with your requirement for current
                    equipment information.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-yellow-500 px-6 text-sm font-bold text-black transition-colors hover:bg-yellow-400"
                >
                  Ask for Specifications

                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="relative overflow-hidden border-t border-white/10 bg-yellow-500">
        <Container className="relative">
          <div className="flex flex-col items-start justify-between gap-8 py-12 sm:py-14 lg:flex-row lg:items-center">
            <FadeIn>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-black/60">
                  Crane Rental & Heavy Lifting
                </p>

                <h2 className="mt-2 text-3xl font-black tracking-tight text-black sm:text-4xl">
                  Have a specific lifting requirement?
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-black/70">
                  Tell us about your load, location and project requirements.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-black px-6 text-sm font-bold text-white transition-colors hover:bg-zinc-900"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href={`tel:${COMPANY.phone}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-black/20 bg-white/20 px-6 text-sm font-bold text-black transition-colors hover:bg-white/30"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </main>
  );
}