import { Calendar } from "lucide-react";

export default function BookingCTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 mb-6">
          <Calendar className="w-8 h-8" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Book a Free 15-Minute Consultation
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Let&apos;s discuss your business needs and find the perfect virtual
          assistant solution for you. No commitment required.
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <div className="aspect-video bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
            <div className="text-center text-gray-600">
              <Calendar className="w-16 h-16 mx-auto mb-4 text-blue-600" />
              <p className="text-lg font-semibold mb-2">Calendly Integration</p>
              <p className="text-sm">
                Replace this section with your Calendly embed code
              </p>
              <p className="text-xs mt-4 text-gray-500">
                Add your Calendly URL in the component code
              </p>
            </div>
          </div>
        </div>

        <p className="text-gray-400 mt-8">
          Available Monday - Friday, 9am - 6pm EST
        </p>
      </div>
    </section>
  );
}
