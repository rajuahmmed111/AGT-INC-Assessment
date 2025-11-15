import BookingCTA from "@/components/BookCTA";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/Hero";
import LeadForm from "@/components/LeadForm";
import Pricing from "@/components/Pricing";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import SocialProof from "@/components/SocialProof";
import WhyChooseUs from "@/components/WhyChooseUs";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProblemSolution />
      <Services />
      <WhyChooseUs />
      <SocialProof />
      <Pricing />
      <LeadForm />
      <BookingCTA />
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default HomePage;
