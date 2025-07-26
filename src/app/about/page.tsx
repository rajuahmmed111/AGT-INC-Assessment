import AboutSection from "@/components/about/about-section";
import OurMissionSection from "@/components/about/our-mission";
import OurVisionSection from "@/components/about/our-service";
import ProcessSection from "@/components/about/process-section";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer-section";
import Navbar from "@/components/navbar";
import React from "react";

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutSection />
      <ProcessSection />
      <OurVisionSection />
      <OurMissionSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default About;
