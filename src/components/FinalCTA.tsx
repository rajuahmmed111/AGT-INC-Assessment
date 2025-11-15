import { ArrowRight, Mail, Phone } from "lucide-react";

export default function FinalCTA() {
  const scrollToForm = () => {
    document
      .getElementById("lead-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Ready to Save Time and Grow Faster?
        </h2>

        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Join 150+ businesses that have transformed their operations with our
          virtual assistants.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={scrollToForm}
            className="group bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={scrollToForm}
            className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-blue-600 transition-all duration-200"
          >
            Book a Call
          </button>
        </div>

        <div className="border-t border-blue-400 pt-12">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-blue-100">
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6" />
              <span>support@yourcompany.com</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-blue-400"></div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>

          <p className="text-blue-200 mt-8 text-sm">
            No credit card required • 48-hour setup • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
