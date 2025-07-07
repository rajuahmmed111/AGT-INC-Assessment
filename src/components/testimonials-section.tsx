// "use client";

// import {
//   Quote,
//   Star,
//   ArrowLeft,
//   ArrowRight,
//   Users,
//   Award,
//   TrendingUp,
// } from "lucide-react";
// import { useState } from "react";
// import ContactModal from "./common/ContactModal";

// export default function Testimonials() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const testimonials = [
//     {
//       id: 1,
//       text: "Pallet went in and out in one day with HexPrep's Chicago warehouse! Phenomenal rates and Khai was able to quickly report issues with how the supplier sent the goods. Will continue to work with these gentlemen for the foreseeable future.",
//       name: "Morgan",
//       title: "FBA & FBM | HexPrep Member",
//       rating: 5,
//       location: "Chicago",
//       orderVolume: "500+",
//     },
//     {
//       id: 2,
//       text: "So far the staff at Hex-Prep have been beyond helpful and friendly! They're quick to respond to any of my questions or concerns about my orders and the turnaround time for my FBM shipments is crazy fast. Their owners are very knowledgeable and kind! If you go with hex prep you won't ever need another prep center again!",
//       name: "Quinn",
//       title: "FBA | HexPrep Member",
//       rating: 5,
//       location: "Oregon",
//       orderVolume: "1000+",
//     },
//     {
//       id: 3,
//       text: "Great communication and fast turnaround time. One of the best smaller prep centers I've worked with! I had no issues and will continue working with these guys again!",
//       name: "Brody",
//       title: "FBA & FBM | HexPrep Member",
//       rating: 5,
//       location: "Texas",
//       orderVolume: "750+",
//     },
//     {
//       id: 4,
//       text: "HexPrep has been a game changer for my Amazon business. Their clear communication keeps me informed every step of the way. I highly recommend HexPrep to any seller looking for reliable and efficient prep services!",
//       name: "Hector",
//       title: "FBM | HexPrep Member",
//       rating: 5,
//       location: "California",
//       orderVolume: "2000+",
//     },
//     {
//       id: 5,
//       text: "Started using Hexprep about 2 months ago, the team has super quick communication and always makes a effort to make sure orders go out on time! Super helpful this Q4 pushing out all my orders. Prices are reasonable and the Oregon warehouse being tax free is a huge bonus!",
//       name: "Henry",
//       title: "FBA & FBM | HexPrep Member",
//       rating: 5,
//       location: "Oregon",
//       orderVolume: "1500+",
//     },
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(
//       (prev) => (prev - 1 + testimonials.length) % testimonials.length
//     );
//   };

//   return (
//     <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0">
//         {/* Floating Orbs */}
//         <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>

//         {/* Grid Pattern */}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
//         {/* Hero Section */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center gap-2 bg-red-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-red-500/20 mb-8">
//             <Award className="w-5 h-5 text-red-400" />
//             <span className="text-red-300 font-medium">
//               Customer Success Stories
//             </span>
//           </div>

//           <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-6 leading-tight">
//             Trusted by
//             <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">
//               Industry Leaders
//             </span>
//           </h2>

//           <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
//             Join thousands of successful businesses who have transformed their
//             operations with our solutions
//           </p>
//         </div>

//         {/* Stats Bar */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
//           <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-red-400/30 transition-all duration-500 group">
//             <div className="flex items-center gap-4">
//               <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
//                 <Users className="w-8 h-8 text-white" />
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-white mb-1">50+</div>
//                 <div className="text-gray-400">Happy Clients</div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-red-400/30 transition-all duration-500 group">
//             <div className="flex items-center gap-4">
//               <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
//                 <Star className="w-8 h-8 text-white" />
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-white mb-1">5.0★</div>
//                 <div className="text-gray-400">Average Rating</div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-red-400/30 transition-all duration-500 group">
//             <div className="flex items-center gap-4">
//               <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
//                 <TrendingUp className="w-8 h-8 text-white" />
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-white mb-1">48hrs</div>
//                 <div className="text-gray-400">Avg Response</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Testimonial Slider */}
//         <div className="relative mb-16">
//           <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-12 border border-white/20 shadow-2xl">
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               {/* Testimonial Content */}
//               <div className="space-y-8">
//                 <div className="flex items-center gap-4">
//                   <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
//                     <Quote className="w-10 h-10 text-white" />
//                   </div>
//                   <div className="flex items-center gap-1">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className="w-6 h-6 fill-yellow-400 text-yellow-400"
//                       />
//                     ))}
//                   </div>
//                 </div>

//                 <blockquote className="text-2xl lg:text-3xl text-white leading-relaxed font-light">
//                   &quot;{testimonials[currentSlide].text}&quot;
//                 </blockquote>

//                 <div className="flex items-center gap-6">
//                   <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
//                     <span className="text-white font-bold text-xl">
//                       {testimonials[currentSlide].name.charAt(0)}
//                     </span>
//                   </div>
//                   <div>
//                     <div className="text-xl font-bold text-white">
//                       {testimonials[currentSlide].name}
//                     </div>
//                     <div className="text-gray-400">
//                       {testimonials[currentSlide].title}
//                     </div>
//                     <div className="flex items-center gap-4 mt-2">
//                       <span className="text-sm text-red-400 bg-red-500/10 px-3 py-1 rounded-full">
//                         📍 {testimonials[currentSlide].location}
//                       </span>
//                       <span className="text-sm text-green-400 bg-green-500/10 px-3 py-1 rounded-full">
//                         📦 {testimonials[currentSlide].orderVolume} orders/month
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Visual Element */}
//               <div className="relative">
//                 <div className="w-full h-80 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
//                   <div className="text-center">
//                     <div className="text-6xl font-black text-white/20 mb-4">
//                       {currentSlide + 1}
//                     </div>
//                     <div className="text-white/60">
//                       of {testimonials.length} stories
//                     </div>
//                   </div>
//                 </div>

//                 {/* Floating Elements */}
//                 <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
//                   <Star className="w-6 h-6 text-yellow-900" />
//                 </div>
//                 <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center animate-pulse">
//                   <Quote className="w-8 h-8 text-white" />
//                 </div>
//               </div>
//             </div>

//             {/* Navigation */}
//             <div className="flex items-center justify-between mt-12">
//               <button
//                 onClick={prevSlide}
//                 className="w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:border-red-400/50 transition-all group"
//               >
//                 <ArrowLeft className="w-6 h-6 text-white group-hover:text-red-400 transition-colors" />
//               </button>

//               <div className="flex items-center gap-3">
//                 {testimonials.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentSlide(index)}
//                     className={`w-3 h-3 rounded-full transition-all ${
//                       index === currentSlide
//                         ? "bg-red-500 w-8"
//                         : "bg-white/30 hover:bg-white/50"
//                     }`}
//                   />
//                 ))}
//               </div>

//               <button
//                 onClick={nextSlide}
//                 className="w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:border-red-400/50 transition-all group"
//               >
//                 <ArrowRight className="w-6 h-6 text-white group-hover:text-red-400 transition-colors" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Testimonial Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={testimonial.id}
//               className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 cursor-pointer ${
//                 index === currentSlide
//                   ? "bg-gradient-to-br from-red-500/20 to-red-600/20 border-2 border-red-400/50"
//                   : "bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-white/30"
//               }`}
//               onClick={() => setCurrentSlide(index)}
//             >
//               <div className="p-8">
//                 <div className="flex items-center justify-between mb-6">
//                   <div className="flex items-center gap-1">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className="w-4 h-4 fill-yellow-400 text-yellow-400"
//                       />
//                     ))}
//                   </div>
//                   <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
//                     <span className="text-white font-bold text-sm">
//                       {testimonial.name.charAt(0)}
//                     </span>
//                   </div>
//                 </div>

//                 <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-4">
//                   &quot;{testimonial.text}&quot;
//                 </p>

//                 <div className="space-y-2">
//                   <div className="font-semibold text-white text-sm">
//                     {testimonial.name}
//                   </div>
//                   <div className="text-xs text-gray-400">
//                     {testimonial.title}
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <span className="text-xs text-red-400 bg-red-500/10 px-2 py-1 rounded">
//                       {testimonial.location}
//                     </span>
//                     <span className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded">
//                       {testimonial.orderVolume}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Hover Effect */}
//               <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-600/0 group-hover:from-red-500/10 group-hover:to-red-600/10 transition-all duration-500"></div>
//             </div>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className="text-center mt-20">
//           <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
//             <h3 className="text-3xl font-bold text-white mb-4">
//               Ready to join our success stories?
//             </h3>
//             <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
//               Experience the same level of service and results that our clients
//               rave about
//             </p>
//             <button
//               onClick={() => setIsModalOpen(true)}
//               className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
//             >
//               Get Started Today
//             </button>
//           </div>
//         </div>
//       </div>

//       <ContactModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//       />
//     </section>
//   );
// }

"use client";
import {
  Quote,
  Star,
  ArrowLeft,
  ArrowRight,
  Users,
  Award,
  TrendingUp,
  Play,
} from "lucide-react";
import { useState } from "react";
import ContactModal from "./common/ContactModal";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const testimonials = [
    {
      id: 1,
      text: "Pallet went in and out in one day with HexPrep's Chicago warehouse! Phenomenal rates and Khai was able to quickly report issues with how the supplier sent the goods. Will continue to work with these gentlemen for the foreseeable future.",
      name: "Morgan",
      title: "FBA & FBM | HexPrep Member",
      rating: 5,
      location: "Chicago",
      orderVolume: "500+",
      video: {
        thumbnail: "/placeholder.svg?height=200&width=300",
        duration: "1:24",
        videoUrl: "#",
      },
    },
    {
      id: 2,
      text: "So far the staff at Hex-Prep have been beyond helpful and friendly! They're quick to respond to any of my questions or concerns about my orders and the turnaround time for my FBM shipments is crazy fast. Their owners are very knowledgeable and kind! If you go with hex prep you won't ever need another prep center again!",
      name: "Quinn",
      title: "FBA | HexPrep Member",
      rating: 5,
      location: "Oregon",
      orderVolume: "1000+",
      video: {
        thumbnail: "/placeholder.svg?height=200&width=300",
        duration: "0:58",
        videoUrl: "#",
      },
    },
    {
      id: 3,
      text: "Great communication and fast turnaround time. One of the best smaller prep centers I've worked with! I had no issues and will continue working with these guys again!",
      name: "Brody",
      title: "FBA & FBM | HexPrep Member",
      rating: 5,
      location: "Texas",
      orderVolume: "750+",
      video: {
        thumbnail: "/placeholder.svg?height=200&width=300",
        duration: "1:12",
        videoUrl: "#",
      },
    },
    {
      id: 4,
      text: "HexPrep has been a game changer for my Amazon business. Their clear communication keeps me informed every step of the way. I highly recommend HexPrep to any seller looking for reliable and efficient prep services!",
      name: "Hector",
      title: "FBM | HexPrep Member",
      rating: 5,
      location: "California",
      orderVolume: "2000+",
      video: {
        thumbnail: "/placeholder.svg?height=200&width=300",
        duration: "1:35",
        videoUrl: "#",
      },
    },
    {
      id: 5,
      text: "Started using Hexprep about 2 months ago, the team has super quick communication and always makes a effort to make sure orders go out on time! Super helpful this Q4 pushing out all my orders. Prices are reasonable and the Oregon warehouse being tax free is a huge bonus!",
      name: "Henry",
      title: "FBA & FBM | HexPrep Member",
      rating: 5,
      location: "Oregon",
      orderVolume: "1500+",
      video: {
        thumbnail: "/placeholder.svg?height=200&width=300",
        duration: "0:47",
        videoUrl: "#",
      },
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-red-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-red-500/20 mb-8">
            <Award className="w-5 h-5 text-red-400" />
            <span className="text-red-300 font-medium">
              Customer Success Stories
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-6 leading-tight">
            Trusted by
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful businesses who have transformed their
            operations with our solutions
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-red-400/30 transition-all duration-500 group">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-red-400/30 transition-all duration-500 group">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">5.0★</div>
                <div className="text-gray-400">Average Rating</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-red-400/30 transition-all duration-500 group">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">48hrs</div>
                <div className="text-gray-400">Avg Response</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Testimonial Slider */}
        <div className="relative mb-16">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-12 border border-white/20 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Testimonial Content */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
                    <Quote className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                <blockquote className="text-2xl lg:text-3xl text-white leading-relaxed font-light">
                  &quot;{testimonials[currentSlide].text}&quot;
                </blockquote>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {testimonials[currentSlide].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">
                      {testimonials[currentSlide].name}
                    </div>
                    <div className="text-gray-400">
                      {testimonials[currentSlide].title}
                    </div>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-sm text-red-400 bg-red-500/10 px-3 py-1 rounded-full">
                        📍 {testimonials[currentSlide].location}
                      </span>
                      <span className="text-sm text-green-400 bg-green-500/10 px-3 py-1 rounded-full">
                        📦 {testimonials[currentSlide].orderVolume} orders/month
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Visual Element */}
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-black text-white/20 mb-4">
                      {currentSlide + 1}
                    </div>
                    <div className="text-white/60">
                      of {testimonials.length} stories
                    </div>
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                  <Star className="w-6 h-6 text-yellow-900" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center animate-pulse">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            {/* Navigation */}
            <div className="flex items-center justify-between mt-12">
              <button
                onClick={prevSlide}
                className="w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:border-red-400/50 transition-all group"
              >
                <ArrowLeft className="w-6 h-6 text-white group-hover:text-red-400 transition-colors" />
              </button>
              <div className="flex items-center gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-red-500 w-8"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:border-red-400/50 transition-all group"
              >
                <ArrowRight className="w-6 h-6 text-white group-hover:text-red-400 transition-colors" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 cursor-pointer ${
                index === currentSlide
                  ? "bg-gradient-to-br from-red-500/20 to-red-600/20 border-2 border-red-400/50"
                  : "bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-white/30"
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900">
                <img
                  src={testimonial.video.thumbnail || "/placeholder.svg"}
                  alt={`${testimonial.name} video review`}
                  className="w-full h-full object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-6 h-6 text-white ml-0.5" />
                  </div>
                </div>
                {/* Duration Badge */}
                <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-medium">
                  {testimonial.video.duration}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="space-y-2">
                  <div className="font-semibold text-white text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-400">
                    {testimonial.title}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-red-400 bg-red-500/10 px-2 py-1 rounded">
                      {testimonial.location}
                    </span>
                    <span className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded">
                      {testimonial.orderVolume}
                    </span>
                  </div>
                </div>
              </div>
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-600/0 group-hover:from-red-500/10 group-hover:to-red-600/10 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to join our success stories?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Experience the same level of service and results that our clients
              rave about
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
