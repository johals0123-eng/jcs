"use client";

import { useEffect } from "react";
import { AlertTriangle, ArrowLeft, RefreshCw } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeInScale } from "@/components/ui/motion";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center bg-zinc-950 text-white">
      <Container>
        <div className="relative overflow-hidden py-24 text-center">
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/5 blur-3xl" />

          <FadeInScale>
            <div className="relative z-10">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/10">
                <AlertTriangle className="h-9 w-9 text-yellow-400" />
              </div>

              <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
                Something went wrong
              </p>

              <h1 className="mt-4 text-3xl font-black sm:text-5xl">
                We&apos;re Having Trouble Loading This Page.
              </h1>

              <p className="mx-auto mt-5 max-w-xl leading-7 text-zinc-400">
                An unexpected error occurred while loading this part of the
                website. You can try again or return to the homepage.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  type="button"
                  size="lg"
                  onClick={reset}
                >
                  <RefreshCw className="h-4 w-4" />
                  Try Again
                </Button>

                <Button href="/" variant="outline" size="lg">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Button>
              </div>
            </div>
          </FadeInScale>
        </div>
      </Container>
    </main>
  );
}