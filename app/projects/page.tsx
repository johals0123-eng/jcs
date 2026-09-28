import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Factory,
  HardHat,
  MapPin,
  Mountain,
  Truck,
} from "lucide-react";

import { COMPANY } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, FadeInScale } from "@/components/ui/motion";

export const metadata = {
  title: "Projects",
  description:
    "Explore project categories and heavy lifting capabilities supported by Johal Crane Services in Jharsuguda and nearby areas.",
};

const projects = [
  {
    title: "Industrial Equipment Lifting",
    category: "Industrial",
    location: "Jharsuguda, Odisha",
    image: "/images/projects/project-industrial.jpg",
    icon: Factory,
    description:
      "Crane support for industrial equipment lifting, positioning and material handling requirements.",
  },
  {
    title: "Construction Site Lifting",
    category: "Construction",
    location: "Jharsuguda, Odisha",
    image: "/images/projects/project-construction.jpg",
    icon: HardHat,
    description:
      "Flexible lifting support for construction activities, structural work and site material handling.",
  },
  {
    title: "Heavy Machinery Shifting",
    category: "Equipment Handling",
    location: "Odisha",
    image: "/images/projects/project-machinery.jpg",
    icon: Truck,
    description:
      "Heavy machinery shifting and positioning support for demanding industrial and commercial requirements.",
  },
  {
    title: "Infrastructure Project Support",
    category: "Infrastructure",
    location: "Odisha",
    image: "/images/projects/project-infrastructure.jpg",
    icon: Building2,
    description:
      "Crane support for infrastructure-related lifting, installation and material handling activities.",
  },
  {
    title: "Mining & Heavy Operations",
    category: "Mining",
    location: "Western Odisha",
    image: "/images/projects/project-mining.jpg",
    icon: Mountain,
    description:
      "Heavy lifting support for mining environments and other demanding operational requirements.",
  },
];

const projectApproach = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand the lifting requirement, site conditions, load details and project timeline.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Identify a suitable crane solution and coordinate the operational requirements.",
  },
  {
    number: "03",
    title: "Coordinate",
    description:
      "Align equipment, site access, lifting activities and project communication.",
  },
  {
    number: "04",
    title: "Execute",
    description:
      "Support the planned lifting activity with a project-focused operational approach.",
  },
];

const projectCategories = [
  "Industrial Projects",
  "Construction Projects",
  "Infrastructure Projects",
  "Heavy Machinery Handling",
  "Mining Operations",
  "Plant & Equipment Support",
];

export default function ProjectsPage() {
  return (
    <main className="bg-zinc-950 text-white">
      {/* HERO */}
      <section className="relative isolate min-h-[72vh] overflow-hidden pt-28">
        <Image
          src="/images/projects/project-industrial.jpg"
          alt="Industrial crane project"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/20" />

        <div className="absolute inset-0 industrial-grid opacity-20" />

        <Container className="relative z-10 flex min-h-[72vh] items-center">
          <div className="max-w-4xl py-20">
            <FadeIn>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-black/30 px-4 py-2 text-sm font-medium text-yellow-300 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                Projects & Capabilities
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1 className="text-balance text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
                Built to Support
                <span className="block text-yellow-400">
                  Demanding Projects.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.16}>
              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
                From construction and infrastructure to industrial equipment
                handling, Johal Crane Services provides crane and lifting
                support for a wide range of project requirements.
              </p>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" size="lg" arrow>
                  Discuss Your Project
                </Button>

                <Button href="/equipment" variant="outline" size="lg">
                  Explore Crane Fleet
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.32}>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-300">
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
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <FadeIn>
              <SectionHeading
                eyebrow="Project Experience"
                title="Lifting Support Across Multiple Project Environments."
                description="Every lifting requirement can have different load, reach, access and site considerations. Our approach is focused on understanding the requirement and matching it with a practical crane solution."
                align="left"
              />
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">
                <div className="mb-4 h-1 w-16 rounded-full bg-yellow-400" />

                <p className="text-sm leading-7 text-zinc-400">
                  The project examples below are currently{" "}
                  <span className="font-semibold text-white">
                    sample project categories/placeholders
                  </span>
                  . They should be replaced with verified Johal Crane Services
                  project photographs, names and details as the actual project
                  portfolio becomes available.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* FEATURED PROJECT */}
      <Section background="default">
        <Container>
          <FadeIn>
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <SectionHeading
                eyebrow="Featured Capability"
                title="Industrial Equipment Lifting"
                description="A representative project category showing the type of industrial lifting environment the business can support."
                align="left"
              />

              <div className="shrink-0 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-yellow-300">
                Sample Showcase
              </div>
            </div>
          </FadeIn>

          <FadeInScale>
            <div className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
              <div className="grid lg:grid-cols-2">
                <div className="relative min-h-[360px] overflow-hidden lg:min-h-[500px]">
                  <Image
                    src="/images/projects/project-industrial.jpg"
                    alt="Industrial equipment lifting project"
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute bottom-6 left-6 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                    Industrial
                  </div>
                </div>

                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/10">
                    <Factory className="h-6 w-6 text-yellow-400" />
                  </div>

                  <h3 className="text-2xl font-bold sm:text-3xl">
                    Industrial Equipment Lifting
                  </h3>

                  <div className="mt-4 flex items-center gap-2 text-sm text-zinc-400">
                    <MapPin className="h-4 w-4 text-yellow-400" />
                    Jharsuguda, Odisha
                  </div>

                  <p className="mt-6 leading-8 text-zinc-400">
                    Industrial lifting operations may involve heavy machinery,
                    equipment positioning, material handling and site-specific
                    coordination. Crane selection depends on the actual load,
                    lifting height, reach and site conditions.
                  </p>

                  <div className="mt-8">
                    <Button href="/contact" arrow>
                      Discuss Similar Requirement
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </FadeInScale>
        </Container>
      </Section>

      {/* PROJECT GRID */}
      <Section background="dark">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Project Categories"
              title="Solutions for Different Working Environments."
              description="Explore representative project categories that can require crane rental, heavy lifting and equipment handling support."
              align="center"
            />
          </FadeIn>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {projects.slice(1).map((project, index) => {
              const Icon = project.icon;

              return (
                <FadeIn key={project.title} delay={index * 0.06}>
                  <article className="group h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                      <div className="absolute left-4 top-4 rounded-full border border-yellow-400/20 bg-black/60 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-yellow-300 backdrop-blur-md">
                        Sample Category
                      </div>
                    </div>

                    <div className="flex h-full flex-col p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-400">
                            {project.category}
                          </p>

                          <h3 className="mt-2 text-xl font-bold leading-tight">
                            {project.title}
                          </h3>
                        </div>

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800">
                          <Icon className="h-5 w-5 text-yellow-400" />
                        </div>
                      </div>

                      <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
                        <MapPin className="h-3.5 w-3.5 text-yellow-400" />
                        {project.location}
                      </div>

                      <p className="mt-5 flex-1 text-sm leading-7 text-zinc-400">
                        {project.description}
                      </p>

                      <Link
                        href="/contact"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-yellow-400"
                      >
                        Discuss Requirement
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* PROJECT CATEGORIES */}
      <Section background="default">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <FadeIn>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
                  Industries We Support
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                  Different Industries.
                  <span className="block text-zinc-500">
                    One Focus on Lifting.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl leading-8 text-zinc-400">
                  Crane requirements can vary significantly between
                  construction sites, industrial plants, infrastructure
                  projects and heavy equipment operations.
                </p>
              </div>
            </FadeIn>

            <div className="grid gap-3 sm:grid-cols-2">
              {projectCategories.map((category, index) => (
                <FadeIn key={category} delay={index * 0.05}>
                  <div className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 transition hover:border-yellow-400/30 hover:bg-zinc-900">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10 text-xs font-bold text-yellow-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-semibold text-zinc-200">
                      {category}
                    </span>

                    <ArrowRight className="ml-auto h-4 w-4 text-zinc-600 transition group-hover:translate-x-1 group-hover:text-yellow-400" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* APPROACH */}
      <Section background="dark">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Our Project Approach"
              title="From Requirement to Execution."
              description="A straightforward project-focused workflow helps identify the right requirements before lifting operations begin."
              align="center"
            />
          </FadeIn>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {projectApproach.map((step, index) => (
              <FadeIn key={step.number} delay={index * 0.07}>
                <div className="relative h-full rounded-2xl border border-zinc-800 bg-zinc-900 p-7">
                  <span className="text-4xl font-black text-yellow-400/20">
                    {step.number}
                  </span>

                  <h3 className="mt-5 text-xl font-bold">{step.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {step.description}
                  </p>

                  {index < projectApproach.length - 1 && (
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

      {/* CTA */}
      <Section background="navy">
        <Container>
          <FadeInScale>
            <div className="relative overflow-hidden rounded-3xl border border-yellow-400/20 bg-zinc-900 px-7 py-12 sm:px-10 lg:px-16 lg:py-16">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-yellow-400/5 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />

              <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
                    Have a Project?
                  </p>

                  <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                    Let&apos;s Discuss Your Lifting Requirement.
                  </h2>

                  <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
                    Share your project location, lifting requirement and
                    expected timeline. Our team can discuss the available
                    crane options and next steps.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Button href="/contact" size="lg" arrow>
                    Get a Quote
                  </Button>

                  <Button href={`tel:${COMPANY.phone}`} variant="outline" size="lg">
                    Call Now
                  </Button>
                </div>
              </div>
            </div>
          </FadeInScale>
        </Container>
      </Section>
    </main>
  );
}