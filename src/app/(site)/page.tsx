import Hero from "@/components/section/Hero";
import ServicesSection from "@/components/section/ServiceSection";
import AboutSection from "@/components/section/AboutSection";
import ContactForm from "@/components/section/ContactForm";
import Reviews from '@/components/section/Reviews';
import Technology from '@/components/section/Technologies';
import InnovationSection from "@/components/section/InnovationSection";
import ProjectSection from "@/components/section/ProjectSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <Technology />
      <InnovationSection />
      <ProjectSection />
      <Reviews />
      <ContactForm />
    </>
  );
}