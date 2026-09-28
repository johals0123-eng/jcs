"use client";

import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { FadeIn, FadeInScale } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { COMPANY, SERVICES } from "@/lib/constants";

export function ContactPreview() {
  return (
    <Section
      id="contact"
      background="navy"
      className="relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-yellow-500/5 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <Container className="relative">
        {/* Heading */}
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
              Get in Touch
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let&apos;s Discuss Your Lifting Requirement.
            </h2>

            <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base">
              Tell us about your project, location and crane requirement.
              Our team can discuss the appropriate service for your needs.
            </p>
          </div>
        </FadeIn>

        {/* Main contact grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact information */}
          <FadeIn>
            <div className="h-full rounded-3xl border border-white/10 bg-zinc-950/70 p-7 sm:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-400">
                  Johal Crane Services
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  Contact Our Team
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  Reach us directly for crane rental, heavy lifting and
                  project-based requirements.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {/* Phone */}
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="group flex items-start gap-4 rounded-2xl border border-zinc-800 bg-white/[0.02] p-4 transition-colors hover:border-yellow-500/30 hover:bg-yellow-500/[0.04]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-500 text-black">
                    <Phone size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.14em] text-zinc-600">
                      Phone
                    </p>

                    <p className="mt-1 font-medium text-white">
                      {COMPANY.phone}
                    </p>

                    <p className="mt-1 text-xs text-yellow-500">
                      Tap to call
                    </p>
                  </div>

                  <ArrowRight
                    size={17}
                    className="ml-auto mt-2 text-zinc-700 transition-transform group-hover:translate-x-1 group-hover:text-yellow-400"
                  />
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-2xl border border-zinc-800 bg-white/[0.02] p-4 transition-colors hover:border-yellow-500/30 hover:bg-yellow-500/[0.04]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400">
                    <MessageCircle size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.14em] text-zinc-600">
                      WhatsApp
                    </p>

                    <p className="mt-1 font-medium text-white">
                      {COMPANY.whatsapp}
                    </p>

                    <p className="mt-1 text-xs text-yellow-500">
                      Send an enquiry
                    </p>
                  </div>

                  <ArrowRight
                    size={17}
                    className="ml-auto mt-2 text-zinc-700 transition-transform group-hover:translate-x-1 group-hover:text-yellow-400"
                  />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="group flex items-start gap-4 rounded-2xl border border-zinc-800 bg-white/[0.02] p-4 transition-colors hover:border-yellow-500/30 hover:bg-yellow-500/[0.04]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400">
                    <Mail size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.14em] text-zinc-600">
                      Email
                    </p>

                    <p className="mt-1 break-all font-medium text-white">
                      {COMPANY.email}
                    </p>
                  </div>

                  <ArrowRight
                    size={17}
                    className="ml-auto mt-2 text-zinc-700 transition-transform group-hover:translate-x-1 group-hover:text-yellow-400"
                  />
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-white/[0.02] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-zinc-600">
                      Address
                    </p>

                    <p className="mt-1 text-sm leading-6 text-zinc-300">
                      {COMPANY.address}
                    </p>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-4 rounded-2xl border border-yellow-500/20 bg-yellow-500/[0.05] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-500 text-black">
                    <Clock3 size={19} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-zinc-600">
                      Availability
                    </p>

                    <p className="mt-1 font-semibold text-yellow-400">
                      {COMPANY.availability}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Quote form */}
          <FadeInScale>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-400">
                    Request a Quote
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-white">
                    Tell Us About Your Project
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    Provide a few details and our team can review your
                    requirement.
                  </p>
                </div>

                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-500 text-black sm:flex">
                  <Send size={20} />
                </div>
              </div>

              <form className="mt-8 space-y-5">
                {/* Name + Phone */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-zinc-300"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                      className="h-12 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 text-sm text-white placeholder:text-zinc-600 transition-colors focus:border-yellow-500/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-zinc-300"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      required
                      className="h-12 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 text-sm text-white placeholder:text-zinc-600 transition-colors focus:border-yellow-500/50"
                    />
                  </div>
                </div>

                {/* Email + Service */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-zinc-300"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter email address"
                      className="h-12 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 text-sm text-white placeholder:text-zinc-600 transition-colors focus:border-yellow-500/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-medium text-zinc-300"
                    >
                      Required Service
                    </label>

                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className="h-12 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 text-sm text-white transition-colors focus:border-yellow-500/50"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      {SERVICES.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label
                    htmlFor="location"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Project Location
                  </label>

                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="Where is the project located?"
                    required
                    className="h-12 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 text-sm text-white placeholder:text-zinc-600 transition-colors focus:border-yellow-500/50"
                  />
                </div>

                {/* Project details */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Project / Lifting Requirement
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about the load, lifting requirement, expected duration, preferred date or any other project details..."
                    required
                    className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm leading-6 text-white placeholder:text-zinc-600 transition-colors focus:border-yellow-500/50"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  <Send size={17} />
                  Send Enquiry
                </Button>

                <p className="text-center text-xs leading-5 text-zinc-600">
                  By submitting this form, you are requesting contact regarding
                  your crane or lifting requirement.
                </p>
              </form>
            </div>
          </FadeInScale>
        </div>

        {/* Map placeholder */}
        <FadeIn>
          <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-zinc-950">
            <div className="flex min-h-[280px] items-center justify-center bg-[radial-gradient(circle_at_center,rgba(245,184,0,0.08),transparent_45%)] p-8 text-center sm:min-h-[340px]">
              <div className="max-w-md">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400">
                  <MapPin size={26} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-white">
                  Find Johal Crane Services
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  {COMPANY.address}
                </p>

                <p className="mt-4 text-xs uppercase tracking-[0.16em] text-zinc-700">
                  Google Maps integration will be connected here
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}