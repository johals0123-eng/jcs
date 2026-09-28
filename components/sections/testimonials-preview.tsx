"use client";

import {
  Building2,
  CheckCircle2,
  Quote,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import { FadeIn, FadeInScale } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const testimonials = [
  {
    name: "Client Review Placeholder",
    role: "Industrial Project",
    location: "Jharsuguda, Odisha",
    text:
      "Your verified customer review can be displayed here. This section is reserved for genuine feedback from Johal Crane Services customers.",
  },
  {
    name: "Client Review Placeholder",
    role: "Construction Project",
    location: "Jharsuguda, Odisha",
    text:
      "Add a genuine customer testimonial here highlighting the service experience, response time or project support provided by Johal Crane Services.",
  },
  {
    name: "Client Review Placeholder",
    role: "Equipment Handling",
    location: "Odisha",
    text:
      "Replace this sample content with an authentic review once customer feedback is collected and approved for publication.",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Safety-Focused",
    description: "A structured approach to lifting and site operations.",
  },
  {
    icon: Users,
    title: "Professional Support",
    description: "Clear communication throughout your service requirement.",
  },
  {
    icon: Building2,
    title: "Industrial Capability",
    description: "Solutions for construction and industrial requirements.",
  },
  {
    icon: CheckCircle2,
    title: "Project-Oriented",
    description: "Focused on understanding the actual lifting requirement.",
  },
];

export function TestimonialsPreview() {
  return (
    <Section
      id="testimonials"
      background="default"
      className="relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-yellow-500/5 blur-3xl" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Client Trust"
          title="Built on Professional Service & Reliable Support."
          description="Customer feedback will become an important part of the Johal Crane Services website as verified reviews are collected."
          align="center"
        />

        {/* Trust statistics / highlights */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeIn
                key={item.title}
                delay={index * 0.06}
                className="h-full"
              >
                <div className="group h-full rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/30">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 transition-colors group-hover:bg-yellow-500 group-hover:text-black">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-5 font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn
              key={`${testimonial.role}-${index}`}
              delay={index * 0.08}
              className="h-full"
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/30">
                {/* Quote icon */}
                <div className="absolute right-6 top-6 text-zinc-800 transition-colors group-hover:text-yellow-500/20">
                  <Quote size={46} fill="currentColor" />
                </div>

                {/* Stars */}
                <div className="relative flex gap-1 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={15}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                <p className="relative mt-6 flex-1 text-sm leading-7 text-zinc-400">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="mt-7 border-t border-zinc-800 pt-5">
                  <p className="font-semibold text-white">
                    {testimonial.name}
                  </p>

                  <p className="mt-1 text-xs text-yellow-500">
                    {testimonial.role}
                  </p>

                  <p className="mt-1 text-xs text-zinc-600">
                    {testimonial.location}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Google review area */}
        <FadeInScale>
          <div className="mt-14 overflow-hidden rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/[0.08] to-transparent">
            <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500 text-black">
                    <Star size={20} fill="currentColor" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-yellow-400">
                      Google Reviews
                    </p>

                    <p className="mt-1 text-xs text-zinc-500">
                      Verified customer feedback can be connected here.
                    </p>
                  </div>
                </div>

                <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                  Your experience matters.
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
                  After completing a project with Johal Crane Services,
                  customers can share their experience. Genuine reviews will
                  help future customers understand the quality of service and
                  project support.
                </p>
              </div>

              <Button
                href="/contact"
                variant="primary"
                size="lg"
                arrow
                className="shrink-0"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </FadeInScale>
      </Container>
    </Section>
  );
}