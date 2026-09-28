import Image from "next/image";
import { Camera, Play } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/motion";

export const metadata = {
  title: "Gallery",
  description:
    "View crane equipment, machinery and project imagery from Johal Crane Services.",
};

const galleryItems = [
  {
    type: "image",
    src: "/images/gallery/gallery-01.jpg",
    alt: "Mobile crane",
  },
  {
    type: "image",
    src: "/images/gallery/gallery-02.jpg",
    alt: "Telescopic crane",
  },
  {
    type: "image",
    src: "/images/gallery/gallery-03.jpg",
    alt: "Crawler crane",
  },
  {
    type: "image",
    src: "/images/gallery/gallery-04.jpg",
    alt: "Tyre mounted crane",
  },
  {
    type: "image",
    src: "/images/gallery/gallery-05.jpg",
    alt: "Industrial crane operation",
  },
  {
    type: "image",
    src: "/images/gallery/gallery-06.jpg",
    alt: "Construction crane operation",
  },
  {
    type: "image",
    src: "/images/gallery/gallery-07.jpg",
    alt: "Heavy machinery handling",
  },
  {
    type: "image",
    src: "/images/gallery/gallery-08.jpg",
    alt: "Infrastructure crane operation",
  },
  {
    type: "image",
    src: "/images/gallery/gallery-09.jpg",
    alt: "Mining and heavy lifting operation",
  },
  {
    type: "image",
    src: "/images/gallery/gallery-10.jpeg",
    alt: "Mobile crane",
  },
  {
    type: "image",
    src: "/images/gallery/gallery-11.jpeg",
    alt: "Telescopic crane",
  },
  {
    type: "image",
    src: "/images/gallery/gallery-12.jpeg",
    alt: "Crawler crane",
  },
  {
    type: "image",
    src: "/images/gallery/gallery-13.jpeg",
    alt: "Tyre mounted crane",
  },
  {
    type: "image",
    src: "/images/gallery/gallery-14.jpeg",
    alt: "Industrial crane operation",
  },
  {
    type: "image",
    src: "/images/gallery/gallery-19.jpeg",
    alt: "Construction crane operation",
  },
  {
    type: "image",
    src: "/images/gallery/gallery-16.jpeg",
    alt: "Heavy machinery handling",
  },
  {
    type: "image",
    src: "/images/gallery/gallery-17.jpeg",
    alt: "Infrastructure crane operation",
  },
  {
    type: "image",
    src: "/images/gallery/gallery-18.jpeg",
    alt: "Mining and heavy lifting operation",
  },
  {
    type: "image",
    src: "/images/gallery/gallery-20.jpeg",
    alt: "Heavy machinery handling",
  },
  {
    type: "image",
    src: "/images/gallery/gallery-21.jpeg",
    alt: "Infrastructure crane operation",
  },
  {
    type: "image",
    src: "/images/gallery/gallery-22.jpeg",
    alt: "Mining and heavy lifting operation",
  },

  // VIDEOS
  {
    type: "video",
    src: "/images/gallery/gallery-23.mp4",
    alt: "Heavy machinery handling",
  },
  {
    type: "video",
    src: "/images/gallery/gallery-24.mp4",
    alt: "Infrastructure crane operation",
  },
  {
    type: "video",
    src: "/images/gallery/gallery-25.mp4",
    alt: "Mining and heavy lifting operation",
  },
];

export default function GalleryPage() {
  return (
    <main className="bg-zinc-950 text-white">
      {/* PAGE HEADER */}
      <section className="relative overflow-hidden border-b border-zinc-800 bg-zinc-950 pt-28">
        <Container>
          <div className="flex min-h-[260px] items-center justify-center py-16 text-center">
            <FadeIn>
              <div>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/10">
                  <Camera className="h-7 w-7 text-yellow-400" />
                </div>

                <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                  Gallery
                </h1>

                <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-yellow-400" />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* GALLERY */}
      <Section background="default">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <FadeIn key={item.src} delay={index * 0.04}>
                <div
                  className={`group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 ${
                    index === 0
                      ? "sm:col-span-2 lg:col-span-2"
                      : ""
                  }`}
                >
                  <div
                    className={`relative w-full overflow-hidden ${
                      index === 0
                        ? "aspect-[16/9]"
                        : "aspect-[4/3]"
                    }`}
                  >
                    {item.type === "video" ? (
                      <video
                        controls
                        playsInline
                        preload="metadata"
                        className="absolute inset-0 h-full w-full object-cover"
                      >
                        <source
                          src={item.src}
                          type="video/mp4"
                        />

                        Your browser does not support HTML5 video.
                      </video>
                    ) : (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes={
                          index === 0
                            ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                            : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        }
                      />
                    )}

                    {/* Video Badge */}
                    {item.type === "video" && (
                      <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/75 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                        <Play className="h-3 w-3 fill-current text-yellow-400" />
                        Video
                      </div>
                    )}

                    {/* Hover overlay */}
                    {item.type === "image" && (
                      <div className="pointer-events-none absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}