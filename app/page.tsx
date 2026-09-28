import { AboutPreview } from "@/components/sections/about-preview";
import { EquipmentPreview } from "@/components/sections/equipment-preview";
import { Hero } from "@/components/sections/hero";
import { IndustriesPreview } from "@/components/sections/industries-preview";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { SafetyOperations } from "@/components/sections/safety-operations";
import { ServicesPreview } from "@/components/sections/services-preview";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { TestimonialsPreview } from "@/components/sections/testimonials-preview";
import { FaqPreview } from "@/components/sections/faq-preview";
import { ContactPreview } from "@/components/sections/contact-preview";
import { ClientsPreview } from "@/components/sections/clients-preview";
import { GalleryPreview } from "@/components/sections/gallery-preview";

export default function Home() {
  return (
    <main>
      <Hero />

      <AboutPreview />

      <ServicesPreview />

      <EquipmentPreview />

      <WhyChooseUs />

      <IndustriesPreview />

      <SafetyOperations />

      <ProjectsPreview />

      <TestimonialsPreview />

      <ClientsPreview />

      <GalleryPreview />

      <FaqPreview />

      <ContactPreview />

      {/* More sections will be added here */}
    </main>
  );
}