import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Construction,
  Factory,
  MapPin,
  Phone,
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

const strengths = [
  {
    icon: ShieldCheck,
    title: "Safety-Focused Operations",
    description:
      "Lifting requirements are approached with attention to the load, site conditions, equipment requirements and operational planning.",
  },
  {
    icon: Clock3,
    title: "Available 24/7",
    description:
      "Crane and lifting requirements can arise outside regular working hours. Johal Crane Services is available around the clock.",
  },
  {
    icon: Truck,
    title: "Multiple Crane Options",
    description:
      "Mobile, telescopic, crawler and tyre mounted crane options provide flexibility for different lifting environments.",
  },
  {
    icon: MapPin,
    title: "Local Area Coverage",
    description:
      "Based in Jharsuguda, the business serves Jharsuguda and nearby areas for crane and lifting requirements.",
  },
  {
    icon: Construction,
    title: "Project-Focused Approach",
    description:
      "Each requirement can be discussed based on project location, load, lifting conditions, access and expected timeline.",
  },
  {
    icon: Factory,
    title: "Industrial & Construction Support",
    description:
      "Services can support construction, infrastructure, industrial, mining and heavy equipment handling requirements.",
  },
];

const capabilities = [
  "Crane rental",
  "Heavy lifting",
  "Industrial equipment shifting",
  "Machinery installation",
  "Construction lifting",
  "Structural lifting",
  "Heavy equipment transportation",
  "Industrial plant operations",
  "Crane operator services",
  "Emergency crane services",
];

const process = [
  {
    number: "01",
    title: "Tell Us Your Requirement",
    description:
      "Share your project location, lifting requirement and expected timeline.",
  },
  {
    number: "02",
    title: "Requirement Discussion",
    description:
      "Discuss the load, lifting height, reach, access and site conditions.",
  },
  {
    number: "03",
    title: "Crane Planning",
    description:
      "Identify a suitable crane category and operational requirements.",
  },
  {
    number: "04",
    title: "Project Support",
    description:
      "Coordinate the required crane support for the planned lifting activity.",
  },
];

export const metadata = {
  title: "Why Choose Us",
  description:
    "Discover the service strengths, crane options and project-focused approach of Johal Crane Services in Jharsuguda and nearby areas.",
};

export default function WhyChooseUsPage() {
  return (
    <main className="bg-zinc-950 text-white">
      {/* HERO */}
      <section className="relative isolate min-h-[68vh] overflow-hidden pt-28">
        <Image
          src="/images/company/about-crane.jpg"
          alt="Johal Crane Services lifting operation"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/20" />
        <div className="absolute inset-0 industrial-grid opacity-20" />

        <Container className="relative z-10 flex min-h-[68vh] items-center">
          <div className="max-w-4xl py-20">
            <FadeIn>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-black/30 px-4 py-2 text-sm font-medium text-yellow-300 backdrop-blur-md">
                <ShieldCheck className="h-4 w-4" />
                Why Johal Crane
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1 className="text-balance text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
                Built Around
                <span className="block text-yellow-400">
                  Your Lifting Requirement.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.16}>
              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
                Crane operations require the right equipment, proper
                coordination and an understanding of the project environment.
                Johal Crane Services focuses on these practical requirements
                when supporting customers.
              </p>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" size="lg" arrow>
                  Discuss Your Requirement
                </Button>

                <Button href="/services" variant="outline" size="lg">
                  Explore Services
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.32}>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-300">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-yellow-400" />
                  {COMPANY.serviceArea}
                </span>

                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />
                  {COMPANY.availability}
                </span>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* INTRO */}
      <Section background="dark">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <FadeIn>
              <SectionHeading
                eyebrow="Our Strengths"
                title="Practical Crane Support for Real Project Requirements."
                description="Choosing a crane service provider involves more than selecting a machine. Equipment type, site conditions, lifting requirements, timing and coordination all matter."
                align="left"
              />

              <p className="mt-6 max-w-2xl leading-8 text-zinc-400">
                Johal Crane Services is positioned to support customers across
                Jharsuguda and nearby areas with crane rental, heavy lifting
                and related equipment handling requirements.
              </p>

              <div className="mt-8">
                <Button href="/equipment" arrow>
                  View Crane Fleet
                </Button>
              </div>
            </FadeIn>

            <FadeInScale>
              <div className="relative overflow-hidden rounded-3xl border border-zinc-800">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/cranes/mobile-crane.jpg"
                    alt="Mobile crane equipment"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur-md">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
                        Service Area
                      </p>

                      <p className="mt-2 text-lg font-bold">
                        {COMPANY.serviceArea}
                      </p>

                      <p className="mt-1 text-sm text-zinc-400">
                        {COMPANY.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInScale>
          </div>
        </Container>
      </Section>

      {/* STRENGTHS */}
      <Section background="default">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Why Choose Johal Crane"
              title="Six Practical Reasons to Work With Us."
              description="Our website communicates the areas that matter when evaluating crane and lifting support for a project."
              align="center"
            />
          </FadeIn>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;

              return (
                <FadeIn key={strength.title} delay={index * 0.06}>
                  <article className="group h-full rounded-2xl border border-zinc-800 bg-zinc-900/70 p-7 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/10">
                        <Icon className="h-6 w-6 text-yellow-400" />
                      </div>

                      <span className="text-3xl font-black text-zinc-800">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-7 text-xl font-bold">
                      {strength.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-zinc-400">
                      {strength.description}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* SERVICE CAPABILITIES */}
      <Section background="dark">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <FadeIn>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
                  What We Support
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                  A Broad Range of
                  <span className="block text-zinc-500">
                    Lifting Requirements.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl leading-8 text-zinc-400">
                  Different projects require different combinations of crane
                  equipment, lifting and handling support.
                </p>

                <div className="mt-8">
                  <Button href="/services" variant="outline" arrow>
                    View All Services
                  </Button>
                </div>
              </div>
            </FadeIn>

            <div className="grid gap-3 sm:grid-cols-2">
              {capabilities.map((capability, index) => (
                <FadeIn key={capability} delay={index * 0.04}>
                  <div className="group flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 transition hover:border-yellow-400/30 hover:bg-zinc-900">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10">
                      <Wrench className="h-4 w-4 text-yellow-400" />
                    </div>

                    <span className="text-sm font-medium text-zinc-300">
                      {capability}
                    </span>

                    <ArrowRight className="ml-auto h-4 w-4 text-zinc-700 transition group-hover:translate-x-1 group-hover:text-yellow-400" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* SERVICE APPROACH */}
      <Section background="default">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Our Approach"
              title="A Clear Process From Requirement to Support."
              description="A project becomes easier to coordinate when the lifting requirement is understood before equipment and operations are planned."
              align="center"
            />
          </FadeIn>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <FadeIn key={step.number} delay={index * 0.07}>
                <div className="relative h-full rounded-2xl border border-zinc-800 bg-zinc-900/70 p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-black text-yellow-400/20">
                      {step.number}
                    </span>

                    {index === 0 && (
                      <MapPin className="h-5 w-5 text-yellow-400/70" />
                    )}

                    {index === 1 && (
                      <Wrench className="h-5 w-5 text-yellow-400/70" />
                    )}

                    {index === 2 && (
                      <Truck className="h-5 w-5 text-yellow-400/70" />
                    )}

                    {index === 3 && (
                      <ShieldCheck className="h-5 w-5 text-yellow-400/70" />
                    )}
                  </div>

                  <h3 className="mt-6 text-lg font-bold">{step.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {step.description}
                  </p>

                  {index < process.length - 1 && (
                    <div className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950 text-zinc-600 lg:flex">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* 24/7 PANEL */}
      <Section background="dark">
        <Container>
          <FadeInScale>
            <div className="relative overflow-hidden rounded-3xl border border-yellow-400/20 bg-zinc-900">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-yellow-400/5 blur-3xl" />

              <div className="relative grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-14">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10">
                      <Clock3 className="h-6 w-6 text-yellow-400" />
                    </div>

                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
                      Around the Clock
                    </span>
                  </div>

                  <h2 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl">
                    Crane Support When Your Project Needs It.
                  </h2>

                  <p className="mt-4 max-w-2xl leading-8 text-zinc-400">
                    {COMPANY.availability} for crane and lifting requirements
                    across {COMPANY.serviceArea.toLowerCase()}.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Button href={`tel:${COMPANY.phone}`} size="lg">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </Button>

                  <Button
                    href={`https://wa.me/${COMPANY.whatsapp.replace(
                      /\D/g,
                      "",
                    )}`}
                    variant="outline"
                    size="lg"
                    external
                  >
                    WhatsApp Us
                  </Button>
                </div>
              </div>
            </div>
          </FadeInScale>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <Section background="navy">
        <Container>
          <FadeIn>
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
                Ready to Get Started?
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">
                Let&apos;s Talk About Your Next Lifting Requirement.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-zinc-400">
                Contact Johal Crane Services with your project details and
                discuss the crane support you require.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href="/contact" size="lg" arrow>
                  Get a Quote
                </Button>

                <Button href="/equipment" variant="outline" size="lg">
                  View Equipment
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </main>
  );
}