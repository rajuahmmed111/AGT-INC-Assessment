import Features from "@/components/features-section";
import Footer from "@/components/footer-section";
import Navbar from "@/components/navbar";
import Register from "@/components/register";
// import Testimonials from "@/components/testimonials-section";
// import CtaSection from "@/components/cta-section";

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
