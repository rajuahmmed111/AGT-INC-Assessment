import Features from "@/components/features-section";
import Footer from "@/components/footer-section";
import Navbar from "@/components/navbar";
import Register from "@/components/register";
import { Metadata } from "next";
// import Testimonials from "@/components/testimonials-section";
// import CtaSection from "@/components/cta-section";

// export const runtime = "edge";

export const metadata: Metadata = {
  title: "Rapid Flow Fulfillment",
  description:
    "Flexible and affordable 3PL fulfillment for ecommerce, retail, and more. Contact Rapid Flow Fulfillment for tailored logistics solutions, real-time tracking, and top-tier service",
  metadataBase: new URL("https://rapidflowfulfillment.com"),
  icons: {
    icon: "/favicon.ico",
  },
};

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Register />
      <Features />
      {/* <Testimonials /> */}
      {/* <CtaSection /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
