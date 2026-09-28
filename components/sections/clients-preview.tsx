"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const clients = [
  {
    id: 1,
    name: "Vedanta",
    // category: "Industrial Partner",
    image: "/images/clients/Vedanta.jpeg",
    website: "",
  },
  {
    id: 2,
    name: "JSW",
    // category: "Construction Partner",
    image: "/images/clients/client-02.jpg",
    website: "",
  },
  {
    id: 3,
    name: "Larsen & Toubro",
    // category: "Project Partner",
    image: "/images/clients/L&T.jpeg",
    website: "",
  },
  {
    id: 4,
    name: "Adani Enterprises",
    // category: "Infrastructure Partner",
    image: "/images/clients/Adani.jpeg",
    website: "",
  },
  {
    id: 5,
    name: "Jinal Steel",
    // category: "Manufacturing Partner",
    image: "/images/clients/JindalSteel.jpeg",
    website: "",
  },
  
  {
    id: 6,
    name: "Shyam Metalics and Energy Limited",
    // category: "Industrial Partner",
    image: "/images/clients/Shyam Metallics.jpeg",
    website: "",
  },
  {
    id: 7,
    name: "KEC International Limited",
    // category: "Industrial Partner",
    image: "/images/clients/KEC.jpeg",
    website: "",
  },
  {
    id: 8,
    name: "Orissa Metaliks Pvt Ltd.",
    // category: "Industrial Partner",
    image: "/images/clients/OMPL.jpeg",
    website: "",
  },
  {
    id: 9,
    name: "Global coal and mining private limited",
    // category: "Industrial Partner",
    image: "/images/clients/Global.jpeg",
    website: "",
  },
  {
    id: 10,
    name: "Power Mech Projects Limited",
    // category: "Industrial Partner",
    image: "/images/clients/PowerMech.jpeg",
    website: "",
  },
  {
    id: 11,
    name: "JHAJHARIA NIRMAN LTD.",
    // category: "Industrial Partner",
    image: "/images/clients/Jhaj.jpeg",
    website: "",
  },
  
];

export function ClientsPreview() {
  return (
    <Section
      id="clients"
      background="dark"
      className="relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 industrial-grid opacity-30" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-400/5 blur-3xl" />

      <Container className="relative z-10">
        {/* Heading */}
        <SectionHeading
          eyebrow="Our Clients"
          title="Companies We Work With"
          description="Supporting businesses, contractors and project teams with crane rental, heavy lifting and industrial lifting solutions."
          align="center"
        />

        {/* Client Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:shadow-2xl hover:shadow-yellow-500/5">
                {/* Client Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-800">
                  <Image
                    src={client.image}
                    alt={`${client.name} placeholder`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  {/* Placeholder Badge */}
                  {/* <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      Placeholder
                    </span>
                  </div> */}

                  {/* Icon */}
                  <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/50 text-yellow-400 backdrop-blur-md">
                    <Building2 className="h-5 w-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-yellow-400">
                    {client.category}
                  </p> */}

                  <h3 className="text-lg font-bold text-white transition-colors group-hover:text-yellow-400">
                    {client.name}
                  </h3>

                  <div className="mt-4 flex items-center justify-between border-t border-zinc-800 pt-4">
                    <span className="text-sm text-zinc-500">
                      Client / Project Partner
                    </span>

                    {client.website ? (
                      <a
                        href={client.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${client.name} website`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700 text-zinc-400 transition-colors hover:border-yellow-400 hover:text-yellow-400"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : (
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-zinc-600">
                        <Building2 className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:flex-row sm:p-8"
        >
          <div>
            <p className="text-lg font-bold text-white">
              Looking for reliable lifting support?
            </p>

            <p className="mt-1 text-sm text-zinc-400">
              Discuss your crane rental or heavy lifting requirement with our
              team.
            </p>
          </div>

          <Button href="/contact" variant="primary" size="md" arrow>
            Get a Quote
          </Button>
        </motion.div>

        {/* Disclaimer */}
        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-zinc-600">
          Client names and images shown above are placeholders and should be
          replaced with verified client information and authorized images
          before publishing.
        </p>
      </Container>
    </Section>
  );
}