import Link from "next/link";
import { QuoteForm } from "@/components/forms/quote-form";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import { COMPANY } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, FadeInScale } from "@/components/ui/motion";

export const metadata = {
  title: "Contact & Get a Quote",
  description:
    "Contact Johal Crane Services for crane rental, heavy lifting and industrial equipment support in Jharsuguda and nearby areas.",
};

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    value: COMPANY.phone,
    description: "Speak directly with our team.",
    href: `tel:${COMPANY.phone}`,
    action: "Call Now",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: COMPANY.whatsapp,
    description: "Send your requirement on WhatsApp.",
    href: `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`,
    action: "WhatsApp Us",
    external: true,
  },
  {
    icon: Mail,
    title: "Email",
    value: COMPANY.email,
    description: "Send detailed project requirements.",
    href: `mailto:${COMPANY.email}`,
    action: "Send Email",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Jharsuguda, Odisha",
    description: COMPANY.serviceArea,
    href: "#location",
    action: "View Location",
  },
];

const quickRequirements = [
  "Crane Rental",
  "Heavy Lifting",
  "Industrial Equipment Shifting",
  "Machinery Installation",
  "Construction Lifting",
  "Emergency Crane Service",
];

export default function ContactPage() {
  return (
    <main className="bg-zinc-950 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-800 bg-zinc-950 pt-28">
        <Container>
          <div className="grid min-h-[500px] items-center gap-12 py-16 lg:grid-cols-[1fr_0.8fr] lg:py-20">
            <FadeIn>
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/5 px-4 py-2 text-sm font-medium text-yellow-300">
                  <Send className="h-4 w-4" />
                  Contact Johal Crane Services
                </div>

                <h1 className="text-balance text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                  Let&apos;s Discuss Your
                  <span className="block text-yellow-400">
                    Lifting Requirement.
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                  Need a crane for construction, industrial lifting, machinery
                  shifting or another heavy lifting requirement? Send us your
                  project details and we&apos;ll discuss the requirement with
                  you.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Us
                  </Button>
                </div>

                <div className="mt-9 flex items-center gap-3 text-sm text-zinc-400">
                  <Clock3 className="h-4 w-4 text-yellow-400" />
                  <span>{COMPANY.availability}</span>
                </div>
              </div>
            </FadeIn>

            <FadeInScale>
              <div className="relative overflow-hidden rounded-3xl border border-yellow-400/20 bg-zinc-900">
                <div className="absolute inset-0 industrial-grid opacity-20" />

                <div className="relative p-7 sm:p-9">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/10">
                    <MessageCircle className="h-7 w-7 text-yellow-400" />
                  </div>

                  <h2 className="mt-7 text-2xl font-bold">
                    Need a quick response?
                  </h2>

                  <p className="mt-4 leading-7 text-zinc-400">
                    Call or WhatsApp your requirement directly. For detailed
                    project enquiries, use the quotation form on this page.
                  </p>

                  <div className="mt-7 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
                      Service Area
                    </p>

                    <p className="mt-2 font-semibold">
                      {COMPANY.serviceArea}
                    </p>

                    <p className="mt-1 text-sm text-zinc-500">
                      {COMPANY.location}
                    </p>
                  </div>

                  <div className="mt-5">
                    <Link
                      href="#quote-form"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-400 transition hover:text-yellow-300"
                    >
                      Go to enquiry form
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeInScale>
          </div>
        </Container>
      </section>

      {/* CONTACT METHODS */}
      <Section background="dark">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Get in Touch"
              title="Choose How to Contact Us."
              description="For urgent requirements, calling or WhatsApp can provide a direct way to start the conversation. Use the enquiry form when you want to provide detailed project information."
              align="center"
            />
          </FadeIn>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;

              return (
                <FadeIn key={method.title} delay={index * 0.06}>
                  <div className="group h-full rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/10">
                      <Icon className="h-6 w-6 text-yellow-400" />
                    </div>

                    <h2 className="mt-6 text-lg font-bold">
                      {method.title}
                    </h2>

                    <p className="mt-2 break-words text-sm font-medium text-zinc-300">
                      {method.value}
                    </p>

                    <p className="mt-3 text-sm leading-6 text-zinc-500">
                      {method.description}
                    </p>

                    <div className="mt-6">
                      <Button
                        href={method.href}
                        variant="outline"
                        size="sm"
                        external={method.external}
                        arrow={method.title !== "Location"}
                      >
                        {method.action}
                      </Button>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* QUOTE FORM */}
      <Section background="default" id="quote-form">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            {/* LEFT INFORMATION */}
            <FadeIn>
              <div className="lg:sticky lg:top-32">
                <SectionHeading
                  eyebrow="Get a Quote"
                  title="Tell Us About Your Requirement."
                  description="The more information you provide, the easier it is to understand your project requirement."
                  align="left"
                />

                <div className="mt-8 space-y-4">
                  {quickRequirements.map((requirement) => (
                    <div
                      key={requirement}
                      className="flex items-center gap-3 text-sm text-zinc-400"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-400/10">
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      </span>

                      {requirement}
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
                  <div className="flex items-center gap-3">
                    <Clock3 className="h-5 w-5 text-yellow-400" />

                    <span className="font-semibold">
                      {COMPANY.availability}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    Contact us for current availability and project
                    requirements.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* FORM */}
            <FadeInScale>
                <QuoteForm />
            </FadeInScale>
          </div>
        </Container>
      </Section>

      {/* LOCATION */}
      <Section background="dark" id="location">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Find Us"
              title="Johal Crane Services"
              description={COMPANY.address}
              align="center"
            />
          </FadeIn>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <FadeIn>
              <div className="h-full rounded-2xl border border-zinc-800 bg-zinc-900 p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10">
                  <MapPin className="h-6 w-6 text-yellow-400" />
                </div>

                <h2 className="mt-6 text-xl font-bold">
                  Business Location
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {COMPANY.address}
                </p>

                <div className="mt-6 border-t border-zinc-800 pt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
                    Service Area
                  </p>

                  <p className="mt-2 font-semibold text-zinc-200">
                    {COMPANY.serviceArea}
                  </p>
                </div>

                <div className="mt-6">
                  <Button href={`tel:${COMPANY.phone}`} arrow>
                    Contact Us
                  </Button>
                </div>
              </div>
            </FadeIn>

            {/* MAP PLACEHOLDER */}
            {/* GOOGLE MAP */}
            <FadeInScale>
              <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
                <div className="relative h-[400px] w-full">
                  <iframe
                    title="Johal Crane Services Location"
                    src="https://www.google.com/maps?q=21.8691234,83.9744497&z=17&output=embed"
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />

                  {/* Get Directions Button */}
                  <div className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2">
                    <a
                      href="https://maps.app.goo.gl/4ERVcRnzvuZDqb4g6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-bold text-zinc-950 shadow-lg transition hover:bg-yellow-300 hover:shadow-xl"
                    >
                      <MapPin className="h-4 w-4" />
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </FadeInScale>
          </div>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <Section background="navy">
        <Container>
          <FadeInScale>
            <div className="relative overflow-hidden rounded-3xl border border-yellow-400/20 bg-zinc-900 p-8 text-center sm:p-12 lg:p-16">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-yellow-400/5 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />

              <div className="relative z-10">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
                  24/7 Crane Support
                </p>

                <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">
                  Have a Heavy Lifting Requirement?
                </h2>

                <p className="mx-auto mt-5 max-w-2xl leading-8 text-zinc-400">
                  Call Johal Crane Services or send your requirement through
                  WhatsApp to start the discussion.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
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
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Us
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
