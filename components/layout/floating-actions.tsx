"use client";

import { ArrowUp, Phone } from "lucide-react";
import { useEffect, useState } from "react";

import { COMPANY } from "@/lib/constants";

export function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const whatsappNumber = COMPANY.whatsapp.replace(/\D/g, "");

  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <>
      {/* Desktop Floating Actions */}
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 sm:flex">
        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Johal Crane Services on WhatsApp"
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition-all duration-300 hover:scale-110 hover:shadow-2xl"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 01-1.511-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.986 2.894a9.825 9.825 0 012.893 6.993c-.003 5.45-4.437 9.883-9.884 9.883m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.89c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.881 11.881 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.89a11.815 11.815 0 00-3.479-8.416" />
          </svg>

          <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-zinc-900 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-xl transition-opacity duration-300 group-hover:opacity-100 lg:block">
            WhatsApp Us
          </span>
        </a>

        {/* Call */}
        <a
          href={`tel:${COMPANY.phone}`}
          aria-label="Call Johal Crane Services"
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500 text-black shadow-xl shadow-black/20 transition-all duration-300 hover:scale-110 hover:bg-yellow-400 hover:shadow-2xl"
        >
          <Phone className="h-6 w-6" />

          <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-zinc-900 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-xl transition-opacity duration-300 group-hover:opacity-100 lg:block">
            Call Now
          </span>
        </a>

        {/* Back To Top */}
        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group mt-1 flex h-12 w-12 items-center justify-center self-end rounded-full border border-white/10 bg-zinc-900/90 text-zinc-300 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-yellow-500/40 hover:bg-yellow-500 hover:text-black"
          >
            <ArrowUp className="h-5 w-5" />

            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-zinc-900 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-xl transition-opacity duration-300 group-hover:opacity-100 lg:block">
              Back to Top
            </span>
          </button>
        )}
      </div>

      {/* Mobile Bottom Action Bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#07111f]/95 p-3 shadow-2xl backdrop-blur-xl sm:hidden">
        <div className="grid grid-cols-2 gap-3">
          {/* Mobile Call */}
          <a
            href={`tel:${COMPANY.phone}`}
            className="flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 text-sm font-bold text-white transition-colors hover:border-yellow-500/40 hover:text-yellow-400"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>

          {/* Mobile WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-yellow-500 text-sm font-bold text-black transition-colors hover:bg-yellow-400"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.198-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 01-1.511-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.986 2.894a9.825 9.825 0 012.893 6.993c-.003 5.45-4.437 9.883-9.884 9.883m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.89c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.881 11.881 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.89a11.815 11.815 0 00-3.479-8.416" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}