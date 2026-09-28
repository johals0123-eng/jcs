import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  HardHat,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { COMPANY } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, FadeInScale } from "@/components/ui/motion";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Johal Crane Services, providing crane rental, heavy lifting and industrial equipment support in Jharsuguda and nearby areas.",
};

const capabilities = [
  {
    icon: Truck,
    title: "Multiple Crane Solutions",
    description:
      "Access to different crane types for a range of construction, industrial and heavy lifting requirements.",
  },
  {
    icon: HardHat,
    title: "Project-Oriented Service",
    description:
      "Lifting requirements are approached with attention to the project site, equipment needs and operational requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Safety-Focused Approach",
    description:
      "Operations are approached with planning, site awareness and careful coordination as important priorities.",
  },
  {
    icon: Clock3,
    title: "24/7 Availability",
    description:
      "Support is available around the clock for planned requirements as well as urgent crane service enquiries.",
  },
];

const servicePoints = [
  "Crane rental and heavy lifting support",
  "Industrial equipment shifting",
  "Construction and infrastructure lifting",
  "Machinery handling and installation support",
  "Project-based crane requirements",
  "Emergency crane service enquiries",
];

export default function AboutPage() {
  return (
    <main className="bg-zinc-950 text-white">
      {/* =========================================================
          ABOUT HERO
      ========================================================== */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-24">
        {/* Background Image */}
        <Image
          src="/images/company/about-crane.jpg"
          alt="Johal Crane Services heavy lifting operations"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/95 via-[#07111f]/75 to-black/40" />

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/20" />

        {/* Industrial Grid */}
        <div className="industrial-grid absolute inset-0 opacity-30" />

        <Container className="relative z-10 py-20 lg:py-28">
          <div className="max-w-4xl">
            <FadeIn>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-yellow-400" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
                  About Johal Crane Services
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-balance text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                Reliable Lifting Support for{" "}
                <span className="text-yellow-400">
                  Demanding Projects.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
                Johal Crane Services provides crane rental, heavy lifting and
                industrial equipment support for construction, infrastructure
                and industrial requirements in Jharsuguda and nearby areas.
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
                  Get a Quote
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
                  <MapPin className="h-4 w-4 text-yellow-400" />
                  {COMPANY.location}
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
          COMPANY INTRODUCTION
      ========================================================== */}
      <Section background="default">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* Image */}
            <FadeInScale>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/company/about-crane.jpg"
                    alt="Crane equipment used for industrial lifting"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>

                {/* Image Label */}
                <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-md">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
                    Johal Crane Services
                  </p>

                  <p className="mt-1 text-sm text-white">
                    Crane Rental & Heavy Lifting Support
                  </p>
                </div>
              </div>
            </FadeInScale>

            {/* Content */}
            <div>
              <FadeIn>
                <SectionHeading
                  eyebrow="Who We Are"
                  title="Built Around Reliable Lifting Support."
                  description="Johal Crane Services serves customers who require dependable crane and heavy lifting solutions for demanding work environments."
                  align="left"
                />
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="mt-8 space-y-5 text-base leading-8 text-zinc-400">
                  <p>
                    From construction sites and infrastructure projects to
                    industrial operations, lifting work often requires the
                    right equipment, careful coordination and responsive
                    service.
                  </p>

                  <p>
                    Johal Crane Services provides crane rental and lifting
                    support across Jharsuguda and nearby areas, with solutions
                    designed around the requirements of each project.
                  </p>

                  <p>
                    Our equipment offering includes mobile, telescopic,
                    crawler and tyre-mounted crane solutions, subject to
                    availability and project requirements.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {servicePoints.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />

                      <span className="text-sm leading-6 text-zinc-300">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================
          SERVICE AREA
      ========================================================== */}
      <Section background="navy">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <FadeIn>
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2">
                  <MapPin className="h-4 w-4 text-yellow-400" />

                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-400">
                    Service Area
                  </span>
                </div>

                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Serving{" "}
                  <span className="text-yellow-400">
                    {COMPANY.serviceArea}
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
                  Based in Jharsuguda, Odisha, Johal Crane Services supports
                  crane rental and lifting requirements in the local area and
                  nearby locations.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <Link
                href="/contact"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-yellow-500 px-6 font-bold text-black transition-all duration-300 hover:bg-yellow-400 hover:shadow-xl hover:shadow-yellow-500/10"
              >
                Discuss Your Requirement

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* =========================================================
          CORE CAPABILITIES
      ========================================================== */}
      <Section background="default">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Our Approach"
              title="Focused on the Requirements That Matter."
              description="Every lifting requirement is different. Our service approach is built around equipment suitability, project coordination and responsive communication."
            />
          </FadeIn>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeIn key={item.title} delay={index * 0.08}>
                  <div className="group h-full rounded-2xl border border-white/10 bg-zinc-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/30 hover:bg-zinc-900">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 transition-colors duration-300 group-hover:bg-yellow-500 group-hover:text-black">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-lg font-bold text-white">
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
        </Container>
      </Section>

      {/* =========================================================
          WHAT WE SUPPORT
      ========================================================== */}
      <Section background="navy">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <FadeIn>
                <SectionHeading
                  eyebrow="What We Support"
                  title="From Routine Lifting to Challenging Site Requirements."
                  description="Our crane and lifting services can support a broad range of commercial, construction and industrial requirements."
                  align="left"
                />
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Construction lifting",
                    "Industrial machinery shifting",
                    "Infrastructure work",
                    "Heavy equipment handling",
                    "Plant and site operations",
                    "Structural lifting",
                    "Project-based crane rental",
                    "Emergency requirements",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/10 px-4 py-3"
                    >
                      <span className="h-2 w-2 rounded-full bg-yellow-400" />

                      <span className="text-sm text-zinc-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            <FadeInScale>
              <div className="relative overflow-hidden rounded-2xl border border-yellow-500/20 bg-zinc-950 p-8 shadow-2xl shadow-black/20">
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-yellow-500/10 blur-3xl" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-500 text-black">
                    <Phone className="h-6 w-6" />
                  </div>

                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
                    Need a Crane?
                  </p>

                  <h3 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                    Tell us what your project requires.
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    Share your project location, lifting requirement and
                    preferred timeline. Our team can discuss the available
                    crane options with you.
                  </p>

                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="mt-7 inline-flex items-center gap-3 text-lg font-bold text-white transition-colors hover:text-yellow-400"
                  >
                    <Phone className="h-5 w-5 text-yellow-400" />
                    {COMPANY.phone}
                  </a>

                  <div className="mt-7">
                    <Button
                      href="/contact"
                      variant="primary"
                      size="md"
                      arrow
                    >
                      Request a Quote
                    </Button>
                  </div>
                </div>
              </div>
            </FadeInScale>
          </div>
        </Container>
      </Section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="relative overflow-hidden border-t border-white/10 bg-yellow-500">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.05)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.05)_50%,rgba(0,0,0,0.05)_75%,transparent_75%)] bg-[length:80px_80px]" />

        <Container className="relative">
          <div className="flex flex-col items-start justify-between gap-8 py-12 sm:py-14 lg:flex-row lg:items-center">
            <FadeIn>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-black/60">
                  Johal Crane Services
                </p>

                <h2 className="mt-2 text-3xl font-black tracking-tight text-black sm:text-4xl">
                  Have a lifting requirement?
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-black/70">
                  Contact us to discuss your crane rental or heavy lifting
                  requirement.
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