import {
  FileText,
  ShoppingCart,
  Share2,
  Target,
  Headphones,
  Search,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: "Admin Support",
      description:
        "Email management, scheduling, data entry, and document preparation",
    },
    {
      icon: ShoppingCart,
      title: "Ecommerce Support",
      description:
        "Product listings, order processing, inventory management, and customer service",
    },
    {
      icon: Share2,
      title: "Social Media Support",
      description:
        "Content scheduling, community management, and engagement tracking",
    },
    {
      icon: Target,
      title: "Lead Generation",
      description: "Research, prospecting, data entry, and CRM management",
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description:
        "Email support, live chat, ticket management, and client communication",
    },
    {
      icon: Search,
      title: "SEO Assistance",
      description:
        "Keyword research, content optimization, and link building support",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Services We Provide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our virtual assistants are trained across multiple disciplines to
            support your unique business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-200 border border-gray-100 transform hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-blue-100 text-blue-600 mb-4">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
