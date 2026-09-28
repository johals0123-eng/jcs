import Link from "next/link";
import { ArrowLeft, ArrowRight, SearchX } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeIn, FadeInScale } from "@/components/ui/motion";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center bg-zinc-950 text-white">
      <Container>
        <div className="relative overflow-hidden py-24 text-center">
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/5 blur-3xl" />

          <FadeInScale>
            <div className="relative z-10">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/10">
                <SearchX className="h-9 w-9 text-yellow-400" />
              </div>

              <p className="mt-8 text-7xl font-black tracking-tight text-yellow-400 sm:text-9xl">
                404
              </p>

              <h1 className="mt-5 text-3xl font-black sm:text-4xl">
                Page Not Found
              </h1>

              <p className="mx-auto mt-4 max-w-xl leading-7 text-zinc-400">
                The page you are looking for may have been moved, renamed or
                may no longer exist.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href="/" size="lg">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Button>

                <Button href="/contact" variant="outline" size="lg">
                  Get a Quote
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-zinc-600">
                <Link
                  href="/services"
                  className="transition hover:text-yellow-400"
                >
                  Services
                </Link>

                <Link
                  href="/equipment"
                  className="transition hover:text-yellow-400"
                >
                  Equipment
                </Link>

                <Link
                  href="/projects"
                  className="transition hover:text-yellow-400"
                >
                  Projects
                </Link>

                <Link
                  href="/gallery"
                  className="transition hover:text-yellow-400"
                >
                  Gallery
                </Link>
              </div>
            </div>
          </FadeInScale>
        </div>
      </Container>
    </main>
  );
}