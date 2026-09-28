"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Building2,
  Factory,
  HardHat,
  MapPin,
  Pickaxe,
  Truck,
} from "lucide-react";

import { FadeIn } from "@/components/ui/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const projects = [
  {
    title: "Industrial Equipment Lifting",
    category: "Industrial",
    location: "Jharsuguda, Odisha",
    description:
      "Crane support for heavy equipment handling and industrial site operations.",
    image: "/images/projects/project-industrial.jpg",
    icon: Factory,
    featured: true,
  },
  {
    title: "Construction Site Lifting",
    category: "Construction",
    location: "Jharsuguda, Odisha",
    description:
      "Professional lifting support for construction materials and structural work.",
    image: "/images/projects/project-construction.jpg",
    icon: HardHat,
    featured: false,
  },
  {
    title: "Heavy Machinery Shifting",
    category: "Equipment Handling",
    location: "Odisha",
    description:
      "Heavy machinery positioning and shifting support for project requirements.",
    image: "/images/projects/project-machinery.jpg",
    icon: Truck,
    featured: false,
  },
  {
    title: "Infrastructure Project Support",
    category: "Infrastructure",
    location: "Odisha",
    description:
      "Crane services supporting large-scale infrastructure and engineering operations.",
    image: "/images/projects/project-infrastructure.jpg",
    icon: Building2,
    featured: false,
  },
  {
    title: "Mining & Heavy Operations",
    category: "Mining",
    location: "Western Odisha",
    description:
      "Heavy lifting solutions for demanding mining and industrial environments.",
    image: "/images/projects/project-mining.jpg",
    icon: Pickaxe,
    featured: false,
  },
];

export function ProjectsPreview() {
  return (
    <Section
      id="projects"
      background="default"
      className="relative overflow-hidden"
    >
      <Container>
        {/* Header */}
        <FadeIn>
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <Badge>Our Work</Badge>

              <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Supporting Projects That{" "}
                <span className="text-yellow-400">
                  Move Heavy Things.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
                Explore the types of construction, industrial and
                infrastructure projects where professional crane support can
                make a difference.
              </p>
            </div>

            <Button
              href="/projects"
              variant="outline"
              showArrow
              className="w-fit"
            >
              View All Projects
            </Button>
          </div>
        </FadeIn>

        {/* Featured project */}
        <FadeIn delay={0.1}>
          <div className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0f]">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              {/* Image */}
              <div className="relative min-h-[320px] overflow-hidden sm:min-h-[420px] lg:min-h-[500px]">
                <Image
                  src={projects[0].image}
                  alt={projects[0].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <span className="rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                    Featured Work
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400">
                  <Factory className="h-5 w-5" />
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
                  Industrial Project
                </p>

                <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                  {projects[0].title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-500">
                  {projects[0].description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm text-zinc-400">
                  <MapPin className="h-4 w-4 text-yellow-400" />
                  {projects[0].location}
                </div>

                <div className="mt-8 border-t border-white/10 pt-7">
                  <a
                    href="/projects"
                    className="group inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-yellow-400"
                  >
                    Explore Project

                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Smaller project cards */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.slice(1).map((project, index) => {
            const Icon = project.icon;

            return (
              <FadeIn
                key={project.title}
                delay={0.12 + index * 0.07}
                className="h-full"
              >
                <article className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0f]">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-black/50 text-yellow-400 backdrop-blur-md">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-yellow-400">
                      {project.category}
                    </p>

                    <h3 className="mt-2 text-lg font-bold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-600">
                      {project.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                      <span className="flex items-center gap-1.5 text-xs text-zinc-600">
                        <MapPin className="h-3.5 w-3.5" />
                        {project.location}
                      </span>

                      <ArrowUpRight className="h-4 w-4 text-zinc-700 transition-colors group-hover:text-yellow-400" />
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        {/* CTA */}
        <FadeIn delay={0.25}>
          <div className="mt-12 flex flex-col gap-6 rounded-2xl border border-yellow-500/15 bg-yellow-500/[0.04] p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
                Have a Project?
              </p>

              <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                Let's discuss your lifting requirement.
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
                Contact Johal Crane Services to discuss your project scope,
                equipment requirements and lifting needs.
              </p>
            </div>

            <Button
              href="/contact"
              size="lg"
              showArrow
              className="shrink-0"
            >
              Start an Enquiry
            </Button>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}