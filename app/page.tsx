import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import HowWeHelp from "@/components/sections/HowWeHelp";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Innovation from "@/components/sections/Innovation";
import Testimonial from "@/components/sections/Testimonial";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <HowWeHelp />
        <Services />
        <Process />
        <Innovation />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
