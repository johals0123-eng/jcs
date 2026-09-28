"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { FadeIn } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { COMPANY } from "@/lib/constants";

const faqs = [
  {
    question: "What crane services does Johal Crane Services provide?",
    answer:
      "Johal Crane Services provides crane rental and lifting support for construction, industrial equipment shifting, machinery handling, structural lifting, plant operations and other heavy lifting requirements.",
  },
  {
    question: "Which types of cranes are available?",
    answer:
      "The current crane fleet categories include mobile cranes, telescopic cranes, crawler cranes and tyre mounted cranes. Specific crane availability and specifications depend on the project requirement.",
  },
  {
    question: "Do you provide crane services in Jharsuguda?",
    answer:
      "Yes. Johal Crane Services is based in Jharsuguda, Odisha and provides services in Jharsuguda and nearby areas, subject to project requirements and equipment availability.",
  },
  {
    question: "Are crane services available 24/7?",
    answer:
      "Johal Crane Services operates with 24/7 service availability. For urgent requirements, customers are encouraged to contact the team directly so the requirement can be discussed.",
  },
  {
    question: "How can I request a crane for my project?",
    answer:
      "You can contact Johal Crane Services by phone, WhatsApp or through the website enquiry form. Share your location, lifting requirement, approximate load details and project timing so the team can understand your requirement.",
  },
  {
    question: "How do I choose the right crane for my project?",
    answer:
      "The appropriate crane depends on factors such as the load, lifting height, working radius, site access, ground conditions, project location and duration. Contact the team with your project details to discuss a suitable crane solution.",
  },
  {
    question: "Do you provide crane operators?",
    answer:
      "Crane operator services are among the services offered by Johal Crane Services. Operator availability and requirements should be confirmed with the team when requesting a quotation.",
  },
  {
    question: "Do you provide emergency crane services?",
    answer:
      "Emergency crane service enquiries are supported. Availability depends on the location, crane requirement, timing and equipment availability at the time of the request.",
  },
  {
    question: "How can I get a quotation?",
    answer:
      "Contact the team with your project location, lifting requirement, expected duration and other relevant details. The team can then discuss the requirement and quotation process with you.",
  },
];

export function FaqPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <Section
      id="faq"
      background="default"
      className="relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-yellow-500/5 blur-3xl" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Questions Before You Book a Crane?"
          description="Here are answers to some common questions about crane rental, lifting services and project requirements."
          align="center"
        />

        <div className="mx-auto mt-14 grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          {/* Left information panel */}
          <FadeIn>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-7 sm:p-8 lg:sticky lg:top-28">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400">
                <HelpCircle size={27} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Need a specific answer?
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                Every lifting project is different. If you have a requirement
                that is not covered here, contact the Johal Crane Services team
                and discuss your project directly.
              </p>

              <div className="mt-7 space-y-3">
                <div className="rounded-xl border border-zinc-800 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-zinc-600">
                    Service Area
                  </p>

                  <p className="mt-1 text-sm font-medium text-zinc-200">
                    {COMPANY.serviceArea}
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-800 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-zinc-600">
                    Availability
                  </p>

                  <p className="mt-1 text-sm font-medium text-yellow-400">
                    {COMPANY.availability}
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  arrow
                >
                  Get a Quote
                </Button>

                <Button
                  href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`}
                  variant="outline"
                  size="md"
                >
                  <MessageCircle size={17} />
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* FAQ accordion */}
          <FadeIn delay={0.08}>
            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? "border-yellow-500/30 bg-zinc-900"
                        : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                    >
                      <span
                        className={`text-sm font-semibold leading-6 sm:text-base ${
                          isOpen ? "text-yellow-400" : "text-white"
                        }`}
                      >
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 border-yellow-500/30 bg-yellow-500 text-black"
                            : "border-zinc-700 bg-zinc-800 text-zinc-400"
                        }`}
                      >
                        <ChevronDown size={17} />
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-zinc-800 px-5 pb-6 pt-4 sm:px-6">
                          <p className="text-sm leading-7 text-zinc-400">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}