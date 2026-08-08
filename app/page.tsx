import Hero from "@/components/sections/Hero";
import TrustBadges from "@/components/sections/TrustBadges";
import PartnerLogos from "@/components/sections/PartnerLogos";
import HowWeHelp from "@/components/sections/HowWeHelp";
import ProcessChains from "@/components/sections/ProcessChains";
import BusinessDiagnosis from "@/components/sections/BusinessDiagnosis";
import Services from "@/components/sections/Services";
import TechnologyAndIndustry from "@/components/sections/TechnologyAndIndustry";
import Process from "@/components/sections/Process";
import WhyVectorWave from "@/components/sections/WhyVectorWave";
import Innovation from "@/components/sections/Innovation";
import Testimonial from "@/components/sections/Testimonial";
import VideoTestimonial from "@/components/sections/VideoTestimonial";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <TrustBadges />
        <PartnerLogos reverse />
        <HowWeHelp />
        <ProcessChains />
        <BusinessDiagnosis />
        <Services />
        <TechnologyAndIndustry />
        <Process />
        <WhyVectorWave />
        <Innovation />
        <Testimonial />
        <VideoTestimonial
          videoSrc="/maxwell-testimonial.mp4"
          poster="/maxwell-poster.jpg"
          quote="VectorWave Technologies streamlined our sales with Zoho CRM and smoothly migrated our accounting from Tally to Zoho Books. Seamless implementation, responsive team - highly recommend!"
          name="Nikhil"
          role="CEO, Maxvill"
        />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
