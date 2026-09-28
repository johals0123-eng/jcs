import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  Factory,
  HardHat,
  Phone,
  ShieldCheck,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";

import { COMPANY, SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, FadeInScale } from "@/components/ui/motion";

const serviceDetails = [
  {
    title: "Crane Rental",
    description:
      "Crane rental solutions for construction, industrial, infrastructure and project-based lifting requirements.",
    icon: Truck,
    image: "/images/cranes/mobile-crane.jpg",
    points: [
      "Project-based crane requirements",
      "Construction site lifting",
      "Industrial lifting support",
      "Flexible service requirements",
    ],
  },
  {
    title: "Heavy Lifting",
    description:
      "Heavy lifting support for machinery, structural components, equipment and other demanding loads.",
    icon: HardHat,
    image: "/images/projects/project-industrial.jpg",
    points: [
      "Heavy equipment lifting",
      "Industrial load handling",
      "Structural lifting support",
      "Site-specific lifting requirements",
    ],
  },
  {
    title: "Industrial Equipment Shifting",
    description:
      "Support for shifting and positioning heavy industrial equipment across project and plant environments.",
    icon: Factory,
    image: "/images/projects/project-machinery.jpg",
    points: [
      "Machinery shifting",
      "Equipment positioning",
      "Industrial site coordination",
      "Heavy material handling",
    ],
  },
  {
    title: "Machinery Installation",
    description:
      "Lifting and handling support for machinery installation and positioning requirements.",
    icon: Wrench,
    image: "/images/projects/project-machinery.jpg",
    points: [
      "Machinery positioning",
      "Equipment handling",
      "Installation lifting support",
      "Project coordination",
    ],
  },
  {
    title: "Construction Lifting",
    description:
      "Crane support for construction sites requiring safe and coordinated lifting operations.",
    icon: Building2,
    image: "/images/projects/project-construction.jpg",
    points: [
      "Construction material lifting",
      "Structural component handling",
      "Site lifting operations",
      "Project-based crane support",
    ],
  },
  {
    title: "Structural Lifting",
    description:
      "Lifting support for structural components and heavy elements used in construction and infrastructure work.",
    icon: ShieldCheck,
    image: "/images/projects/project-infrastructure.jpg",
    points: [
      "Structural component lifting",
      "Infrastructure support",
      "Heavy component handling",
      "Site coordination",
    ],
  },
  {
    title: "Industrial Plant Operations",
    description:
      "Crane and lifting support for industrial plants, manufacturing environments and large-scale operations.",
    icon: Zap,
    image: "/images/projects/project-industrial.jpg",
    points: [
      "Plant equipment handling",
      "Industrial lifting",
      "Machinery movement",
      "Operational support",
    ],
  },
  {
    title: "Emergency Crane Services",
    description:
      "Responsive crane service support for urgent lifting and equipment requirements, subject to availability.",
    icon: Clock3,
    image: "/images/cranes/telescopic-crane.jpg",
    points: [
      "Urgent crane requirements",
      "Responsive communication",
      "Heavy equipment support",
      "24/7 enquiry availability",
    ],
  },
];

export const metadata = {
  title: "Crane Services",
  description:
    "Explore crane rental, heavy lifting, industrial equipment shifting, construction lifting and other crane services from Johal Crane Services in Jharsuguda, Odisha.",
};

export default function ServicesPage() {
  return (
    <main className="bg-zinc-950 text-white">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative flex min-h-[68vh] items-center overflow-hidden pt-24">
        <Image
          src="/images/projects/project-industrial.jpg"
          alt="Johal Crane Services industrial lifting operation"
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
                  Our Services
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-balance text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                Crane & Heavy Lifting{" "}
                <span className="text-yellow-400">
                  Solutions.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
                Professional crane rental and lifting support for
                construction, industrial, infrastructure and heavy equipment
                requirements in {COMPANY.serviceArea}.
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
                  Request a Quote
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
                  <MapPinIcon />
                  {COMPANY.serviceArea}
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
          SERVICES INTRO
      ========================================================== */}
      <Section background="default">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="What We Do"
              title="Lifting Support Built Around Your Project."
              description="From individual crane requirements to broader industrial lifting operations, our services cover a range of heavy lifting and equipment handling needs."
            />
          </FadeIn>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 9).map((service, index) => (
              <FadeIn key={service} delay={index * 0.05}>
                <a
                  href={`#${service
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "")}`}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-zinc-900/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/30 hover:bg-zinc-900"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-400 transition-colors group-hover:bg-yellow-500 group-hover:text-black">
                    <span className="text-sm font-black">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <span className="text-sm font-semibold text-zinc-200 transition-colors group-hover:text-white">
                    {service}
                  </span>

                  <ArrowRight className="ml-auto h-4 w-4 text-zinc-600 transition-all group-hover:translate-x-1 group-hover:text-yellow-400" />
                </a>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================
          DETAILED SERVICES
      ========================================================== */}
      <Section background="navy">
        <Container>
          <div className="space-y-8">
            {serviceDetails.map((service, index) => {
              const Icon = service.icon;
              const reverse = index % 2 !== 0;

              const sectionId = service.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "");

              return (
                <FadeInScale key={service.title}>
                  <article
                    id={sectionId}
                    className="scroll-mt-28 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/70"
                  >
                    <div
                      className={`grid lg:grid-cols-2 ${
                        reverse ? "lg:[&>*:first-child]:order-2" : ""
                      }`}
                    >
                      {/* Image */}
                      <div className="relative min-h-[280px] lg:min-h-[440px]">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                        <div className="absolute bottom-6 left-6 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500 text-black shadow-xl">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
                        <div className="mb-5 flex items-center gap-3">
                          <span className="text-xs font-black tracking-[0.18em] text-yellow-400">
                            SERVICE {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="h-px w-10 bg-yellow-500/40" />
                        </div>

                        <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                          {service.title}
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
                          {service.description}
                        </p>

                        <div className="mt-7 space-y-3">
                          {service.points.map((point) => (
                            <div
                              key={point}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />

                              <span className="text-sm leading-6 text-zinc-300">
                                {point}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8">
                          <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-yellow-400"
                          >
                            Discuss This Requirement

                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
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
          SERVICE PROCESS
      ========================================================== */}
      <Section background="default">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="How It Works"
              title="A Straightforward Service Process."
              description="Tell us what you need to lift, where the work is located and when the service is required. We can then discuss the suitable crane and service requirements."
            />
          </FadeIn>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Tell Us",
                text: "Share your project location, load and lifting requirement.",
              },
              {
                number: "02",
                title: "Discuss",
                text: "Discuss the site conditions, timeline and equipment requirements.",
              },
              {
                number: "03",
                title: "Coordinate",
                text: "Coordinate the required crane and operational arrangements.",
              },
              {
                number: "04",
                title: "Execute",
                text: "Proceed with the planned lifting operation according to the project requirements.",
              },
            ].map((step, index) => (
              <FadeIn key={step.number} delay={index * 0.08}>
                <div className="relative h-full rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
                  <div className="text-4xl font-black text-yellow-500/30">
                    {step.number}
                  </div>

                  <h3 className="mt-5 text-lg font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {step.text}
                  </p>

                  {index < 3 && (
                    <div className="absolute right-[-22px] top-12 z-10 hidden lg:block">
                      <ArrowRight className="h-5 w-5 text-yellow-500/40" />
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================
          WHY CHOOSE US STRIP
      ========================================================== */}
      <Section background="navy">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Safety-Focused",
                text: "Planning and site awareness remain important parts of our service approach.",
              },
              {
                icon: Truck,
                title: "Multiple Crane Types",
                text: "Mobile, telescopic, crawler and tyre-mounted crane solutions are available subject to requirements.",
              },
              {
                icon: Clock3,
                title: "24/7 Availability",
                text: "Contact Johal Crane Services for planned or urgent crane service requirements.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeIn key={item.title} delay={index * 0.08}>
                  <div className="flex h-full gap-4 rounded-2xl border border-white/10 bg-black/10 p-6">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-zinc-400">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
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
                  Johal Crane Services
                </p>

                <h2 className="mt-2 text-3xl font-black tracking-tight text-black sm:text-4xl">
                  Need crane or heavy lifting support?
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-black/70">
                  Share your requirement and let us discuss the suitable
                  service options for your project.
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

/* =========================================================
   SMALL LOCAL ICON COMPONENT
========================================================= */

function MapPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-yellow-400"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}