"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

import { SERVICES } from "@/lib/constants";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitted(false);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      service: formData.get("service"),
      location: formData.get("projectLocation"),
      craneType: formData.get("craneType"),
      requirement: formData.get("requirement"),
      timeline: formData.get("timeline"),
      company: formData.get("company"),
    };

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to submit your enquiry."
        );
      }

      /*
       * Clear the form ONLY after the database confirms
       * that the enquiry was successfully saved.
       */
      form.reset();

      setSubmitted(true);
    } catch (err) {
      console.error("Form submission error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Unable to submit your enquiry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8 lg:p-10"
      onSubmit={handleSubmit}
    >
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
          Project Enquiry
        </p>

        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
          Request a Quotation
        </h2>

        <p className="mt-3 text-sm leading-6 text-zinc-500">
          Fill in the details below and our team will review your enquiry.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* FULL NAME */}
        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-sm font-semibold text-zinc-300"
          >
            Full Name *
          </label>

          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 transition focus:border-yellow-400"
          />
        </div>

        {/* PHONE */}
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-semibold text-zinc-300"
          >
            Phone Number *
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="Enter phone number"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 transition focus:border-yellow-400"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-zinc-300"
          >
            Email Address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email address"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 transition focus:border-yellow-400"
          />
        </div>

        {/* SERVICE */}
        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-semibold text-zinc-300"
          >
            Required Service *
          </label>

          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3.5 text-sm text-white transition focus:border-yellow-400"
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

        {/* PROJECT LOCATION */}
        <div>
          <label
            htmlFor="projectLocation"
            className="mb-2 block text-sm font-semibold text-zinc-300"
          >
            Project Location *
          </label>

          <input
            id="projectLocation"
            name="projectLocation"
            type="text"
            required
            placeholder="City / project site"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 transition focus:border-yellow-400"
          />
        </div>

        {/* CRANE TYPE */}
        <div>
          <label
            htmlFor="craneType"
            className="mb-2 block text-sm font-semibold text-zinc-300"
          >
            Crane Type
          </label>

          <select
            id="craneType"
            name="craneType"
            defaultValue=""
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3.5 text-sm text-white transition focus:border-yellow-400"
          >
            <option value="">Select if known</option>

            <option value="Mobile Crane">Mobile Crane</option>
            <option value="Telescopic Crane">Telescopic Crane</option>
            <option value="Crawler Crane">Crawler Crane</option>
            <option value="Tyre Mounted Crane">Tyre Mounted Crane</option>
            <option value="Not Sure">Not Sure</option>
          </select>
        </div>

        {/* REQUIREMENT */}
        <div className="sm:col-span-2">
          <label
            htmlFor="requirement"
            className="mb-2 block text-sm font-semibold text-zinc-300"
          >
            Project / Lifting Requirement *
          </label>

          <textarea
            id="requirement"
            name="requirement"
            required
            rows={6}
            placeholder="Describe the lifting requirement, approximate load, lifting height, site conditions, timeline or any other useful information."
            className="w-full resize-y rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3.5 text-sm leading-6 text-white placeholder:text-zinc-600 transition focus:border-yellow-400"
          />
        </div>

        {/* TIMELINE */}
        <div>
          <label
            htmlFor="timeline"
            className="mb-2 block text-sm font-semibold text-zinc-300"
          >
            Expected Timeline
          </label>

          <select
            id="timeline"
            name="timeline"
            defaultValue=""
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3.5 text-sm text-white transition focus:border-yellow-400"
          >
            <option value="">Select timeline</option>

            <option value="Immediate">Immediate</option>
            <option value="Within 1 week">Within 1 week</option>
            <option value="Within 1 month">Within 1 month</option>
            <option value="Future project">Future project</option>
          </select>
        </div>

        {/* COMPANY */}
        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-semibold text-zinc-300"
          >
            Company / Organization
          </label>

          <input
            id="company"
            name="company"
            type="text"
            placeholder="Company name"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 transition focus:border-yellow-400"
          />
        </div>
      </div>

      <div className="mt-8 border-t border-zinc-800 pt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-4 text-sm font-bold text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : submitted ? (
            <>
              Enquiry Received
              <ArrowRight className="h-4 w-4" />
            </>
          ) : (
            <>
              Submit Enquiry
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>

        {submitted && (
          <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/5 px-4 py-3 text-sm text-yellow-300">
            Thank you. Your enquiry has been received successfully. Our team
            will review the details and contact you.
          </div>
        )}

        {error && (
          <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <p className="mt-4 text-xs leading-5 text-zinc-600">
          Your enquiry details are securely submitted to our website enquiry
          system.
        </p>
      </div>
    </form>
  );
}