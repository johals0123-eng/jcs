"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Images } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const galleryItems = [
   
  {
    id: 1,
    title: "Crane Operations",
    category: "Heavy Lifting",
    image: "/images/cranes/mobile-crane.jpg",
  },
  {
    id: 2,
    title: "Crane Operations",
    category: "Heavy Lifting",
    image: "/images/cranes/telescopic-crane.jpg",
  },
  {
    id: 3,
    title: "Crane Operations",
    category: "Heavy Lifting",
    image: "/images/cranes/crawler-crane.jpg",
  },
  {
    id: 4,
    title: "Crane Operations",
    category: "Heavy Lifting",
    image: "/images/cranes/tyre-mounted-crane.jpg",
  },
  {
    id: 5,
    title: "Mobile Crane",
    category: "Crane Services",
    image: "/images/projects/project-industrial.jpg",
  },
  {
    id: 6,
    title: "Industrial Lifting",
    category: "Industrial",
    image: "/images/projects/project-construction.jpg",
  },
  {
    id: 7,
    title: "Construction Support",
    category: "Construction",
    image: "/images/projects/project-machinery.jpg",
  },
  {
    id: 8,
    title: "Heavy Equipment",
    category: "Equipment Handling",
    image: "/images/projects/project-infrastructure.jpg",
  },
  {
    id: 9,
    title: "Project Operations",
    category: "Project Support",
    image: "/images/projects/project-mining.jpg",
  },
];

export function GalleryPreview() {
  return (
    <Section
      id="gallery"
      background="default"
      className="relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 industrial-grid opacity-30" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Our Gallery"
          title="Our Work in Action"
          description="A visual look at crane operations, heavy lifting and industrial project support."
          align="center"
        />

        {/* Gallery Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              className="group"
            >
              <Link
                href="/gallery"
                className="relative block overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900"
              >
                {/* Actual Photo */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Category */}
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm text-zinc-300">
                          Johal Crane Services
                        </p>
                      </div>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-all duration-300 group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:text-black">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View Full Gallery */}
        <div className="mt-12 flex justify-center">
          <Button href="/gallery" variant="outline" size="lg" arrow>
            <Images className="h-5 w-5" />
            View Full Gallery
          </Button>
        </div>

        {/* Placeholder Notice */}
        <p className="mx-auto mt-7 max-w-2xl text-center text-xs leading-6 text-zinc-600">
          Gallery images are currently placeholders and can be replaced with
          actual Johal Crane Services project photographs.
        </p>
      </Container>
    </Section>
  );
}