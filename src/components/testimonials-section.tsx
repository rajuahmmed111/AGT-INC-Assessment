/* eslint-disable @typescript-eslint/no-unused-vars */
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
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";
import type React from "react";
import { useState, useRef, useEffect } from "react";
import ContactModal from "./common/ContactModal";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [playingCardVideo, setPlayingCardVideo] = useState<number | null>(null);
  // Initialize all videos as muted to comply with browser autoplay policies
  const [mutedVideos, setMutedVideos] = useState<Set<number>>(
    new Set([1, 2, 3, 4, 5])
  );
  const [mutedCardVideos, setMutedCardVideos] = useState<Set<number>>(
    new Set([1, 2, 3, 4, 5])
  );

  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const cardVideoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  // Your actual video from public folder
  const reviewVideo = "/review.mp4";

  const testimonials = [
    {
      id: 1,
      text: "Pallet went in and out in one day with HexPrep's Chicago warehouse! Phenomenal rates and Khai was able to quickly report issues with how the supplier sent the goods. Will continue to work with these gentlemen for the foreseeable future.",
      name: "Morgan",
      rating: 5,
      videoUrl: reviewVideo,
      hasVideo: true,
    },
    {
      id: 2,
      text: "So far the staff at Hex-Prep have been beyond helpful and friendly! They're quick to respond to any of my questions or concerns about my orders and the turnaround time for my FBM shipments is crazy fast.",
      name: "Quinn",
      rating: 5,
      videoUrl: reviewVideo,
      hasVideo: true,
    },
    {
      id: 3,
      text: "Great communication and fast turnaround time. One of the best smaller prep centers I've worked with! I had no issues and will continue working with these guys again!",
      name: "Brody",
      rating: 5,
      videoUrl: reviewVideo,
      hasVideo: true,
    },
    {
      id: 4,
      text: "HexPrep has been a game changer for my Amazon business. Their clear communication keeps me informed every step of the way. I highly recommend HexPrep to any seller looking for reliable and efficient prep services!",
      name: "Hector",
      rating: 5,
      videoUrl: reviewVideo,
      hasVideo: true,
    },
    {
      id: 5,
      text: "Started using Hexprep about 2 months ago, the team has super quick communication and always makes a effort to make sure orders go out on time! Super helpful this Q4 pushing out all my orders.",
      name: "Henry",
      rating: 5,
      videoUrl: reviewVideo,
      hasVideo: true,
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

  const toggleVideo = async (testimonialId: number) => {
    const video = videoRefs.current[testimonialId];
    if (!video) return;

    try {
      if (playingVideo === testimonialId) {
        await video.pause();
        setPlayingVideo(null);
      } else {
        // Pause any currently playing video
        if (playingVideo !== null) {
          const currentVideo = videoRefs.current[playingVideo];
          if (currentVideo && !currentVideo.paused) {
            await currentVideo.pause();
          }
        }

        // Pause any currently playing card video
        if (playingCardVideo !== null) {
          const currentCardVideo = cardVideoRefs.current[playingCardVideo];
          if (currentCardVideo && !currentCardVideo.paused) {
            await currentCardVideo.pause();
          }
          setPlayingCardVideo(null);
        }

        // Ensure video is properly loaded
        if (video.readyState < 2) {
          await new Promise((resolve) => {
            const handleLoadedData = () => {
              video.removeEventListener("loadeddata", handleLoadedData);
              resolve(void 0);
            };
            video.addEventListener("loadeddata", handleLoadedData);
            video.load();
          });
        }

        // Set mute state before playing
        video.muted = mutedVideos.has(testimonialId);

        await video.play();
        setPlayingVideo(testimonialId);
      }
    } catch (error) {
      console.log("Video operation failed:", error);
      setPlayingVideo(null);
    }
  };

  const toggleCardVideo = async (
    testimonialId: number,
    event: React.MouseEvent
  ) => {
    event.stopPropagation();
    const video = cardVideoRefs.current[testimonialId];
    if (!video) return;

    try {
      if (playingCardVideo === testimonialId) {
        await video.pause();
        setPlayingCardVideo(null);
      } else {
        // Pause any currently playing card video
        if (playingCardVideo !== null) {
          const currentVideo = cardVideoRefs.current[playingCardVideo];
          if (currentVideo && !currentVideo.paused) {
            await currentVideo.pause();
          }
        }

        // Pause main video if playing
        if (playingVideo !== null) {
          const mainVideo = videoRefs.current[playingVideo];
          if (mainVideo && !mainVideo.paused) {
            await mainVideo.pause();
          }
          setPlayingVideo(null);
        }

        // Ensure video is properly loaded
        if (video.readyState < 2) {
          await new Promise((resolve) => {
            const handleLoadedData = () => {
              video.removeEventListener("loadeddata", handleLoadedData);
              resolve(void 0);
            };
            video.addEventListener("loadeddata", handleLoadedData);
            video.load();
          });
        }

        // Set mute state before playing
        video.muted = mutedCardVideos.has(testimonialId);

        await video.play();
        setPlayingCardVideo(testimonialId);
      }
    } catch (error) {
      console.log("Card video operation failed:", error);
      setPlayingCardVideo(null);
    }
  };

  const toggleMute = (testimonialId: number) => {
    const video = videoRefs.current[testimonialId];
    if (!video) return;

    const newMutedVideos = new Set(mutedVideos);
    if (mutedVideos.has(testimonialId)) {
      newMutedVideos.delete(testimonialId);
      video.muted = false;
    } else {
      newMutedVideos.add(testimonialId);
      video.muted = true;
    }
    setMutedVideos(newMutedVideos);
  };

  const toggleCardMute = (testimonialId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    const video = cardVideoRefs.current[testimonialId];
    if (!video) return;

    const newMutedCardVideos = new Set(mutedCardVideos);
    if (mutedCardVideos.has(testimonialId)) {
      newMutedCardVideos.delete(testimonialId);
      video.muted = false;
    } else {
      newMutedCardVideos.add(testimonialId);
      video.muted = true;
    }
    setMutedCardVideos(newMutedCardVideos);
  };

  // Initialize video properties when refs are set
  useEffect(() => {
    const initializeVideos = () => {
      // Initialize main videos
      Object.entries(videoRefs.current).forEach(([id, video]) => {
        if (video) {
          const testimonialId = Number.parseInt(id);
          video.muted = mutedVideos.has(testimonialId);
          video.playsInline = true;
          video.preload = "metadata";
        }
      });

      // Initialize card videos
      Object.entries(cardVideoRefs.current).forEach(([id, video]) => {
        if (video) {
          const testimonialId = Number.parseInt(id);
          video.muted = mutedCardVideos.has(testimonialId);
          video.playsInline = true;
          video.preload = "metadata";
        }
      });
    };

    initializeVideos();
  }, [mutedVideos, mutedCardVideos]);

  useEffect(() => {
    const handleVideoEnd = (testimonialId: number) => {
      setPlayingVideo(null);
    };

    const handleCardVideoEnd = (testimonialId: number) => {
      setPlayingCardVideo(null);
    };

    const handleVideoError = (testimonialId: number, error: Event) => {
      console.log(`Video ${testimonialId} error:`, error);
      setPlayingVideo(null);
    };

    const handleCardVideoError = (testimonialId: number, error: Event) => {
      console.log(`Card video ${testimonialId} error:`, error);
      setPlayingCardVideo(null);
    };

    const videoCleanupFunctions: (() => void)[] = [];
    const cardVideoCleanupFunctions: (() => void)[] = [];

    Object.entries(videoRefs.current).forEach(([id, video]) => {
      if (video) {
        const testimonialId = Number.parseInt(id);
        const endHandler = () => handleVideoEnd(testimonialId);
        const errorHandler = (e: Event) => handleVideoError(testimonialId, e);

        video.addEventListener("ended", endHandler);
        video.addEventListener("error", errorHandler);

        videoCleanupFunctions.push(() => {
          video.removeEventListener("ended", endHandler);
          video.removeEventListener("error", errorHandler);
        });
      }
    });

    Object.entries(cardVideoRefs.current).forEach(([id, video]) => {
      if (video) {
        const testimonialId = Number.parseInt(id);
        const endHandler = () => handleCardVideoEnd(testimonialId);
        const errorHandler = (e: Event) =>
          handleCardVideoError(testimonialId, e);

        video.addEventListener("ended", endHandler);
        video.addEventListener("error", errorHandler);

        cardVideoCleanupFunctions.push(() => {
          video.removeEventListener("ended", endHandler);
          video.removeEventListener("error", errorHandler);
        });
      }
    });

    return () => {
      videoCleanupFunctions.forEach((cleanup) => cleanup());
      cardVideoCleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
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

        {/* Main Testimonial Slider with Video */}
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
                  </div>
                </div>
              </div>

              {/* Video Player */}
              <div className="relative">
                {testimonials[currentSlide].hasVideo ? (
                  <div className="relative w-full h-80 bg-black rounded-3xl overflow-hidden border border-white/10">
                    <video
                      ref={(el) => {
                        if (el)
                          videoRefs.current[testimonials[currentSlide].id] = el;
                      }}
                      className="w-full h-full object-cover"
                      muted={mutedVideos.has(testimonials[currentSlide].id)}
                      playsInline
                      preload="metadata"
                    >
                      <source
                        src={testimonials[currentSlide].videoUrl}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                    {/* Video Controls Overlay */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center group hover:bg-black/40 transition-all">
                      <button
                        onClick={() =>
                          toggleVideo(testimonials[currentSlide].id)
                        }
                        className="w-20 h-20 bg-red-500/80 hover:bg-red-500 rounded-full flex items-center justify-center transition-all hover:scale-110"
                      >
                        {playingVideo === testimonials[currentSlide].id ? (
                          <Pause className="w-8 h-8 text-white" />
                        ) : (
                          <Play className="w-8 h-8 text-white ml-1" />
                        )}
                      </button>
                    </div>
                    {/* Mute Button */}
                    <button
                      onClick={() => toggleMute(testimonials[currentSlide].id)}
                      className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all"
                    >
                      {mutedVideos.has(testimonials[currentSlide].id) ? (
                        <VolumeX className="w-5 h-5 text-white" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-white" />
                      )}
                    </button>
                    {/* Video Badge */}
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      📹 Video Review
                    </div>
                  </div>
                ) : (
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
                )}
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

        {/* Testimonial Grid with Video Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 ${
                index === currentSlide
                  ? "bg-gradient-to-br from-red-500/20 to-red-600/20 border-2 border-red-400/50"
                  : "bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-white/30"
              }`}
            >
              {/* Video Card or Regular Card */}
              {testimonial.hasVideo ? (
                <div className="relative">
                  <div className="h-48 bg-black rounded-t-2xl overflow-hidden relative">
                    <video
                      ref={(el) => {
                        if (el) cardVideoRefs.current[testimonial.id] = el;
                      }}
                      className="w-full h-full object-cover"
                      muted={mutedCardVideos.has(testimonial.id)}
                      playsInline
                      preload="metadata"
                      onClick={(e) => toggleCardVideo(testimonial.id, e)}
                    >
                      <source src={testimonial.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    {/* Video Controls Overlay */}
                    <div
                      className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/60 transition-all"
                      onClick={(e) => toggleCardVideo(testimonial.id, e)}
                    >
                      <div className="w-16 h-16 bg-red-500/80 hover:bg-red-500 rounded-full flex items-center justify-center transition-all hover:scale-110">
                        {playingCardVideo === testimonial.id ? (
                          <Pause className="w-8 h-8 text-white" />
                        ) : (
                          <Play className="w-8 h-8 text-white ml-1" />
                        )}
                      </div>
                    </div>
                    {/* Mute Button for Card Video */}
                    <button
                      onClick={(e) => toggleCardMute(testimonial.id, e)}
                      className="absolute top-3 right-3 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all z-10"
                    >
                      {mutedCardVideos.has(testimonial.id) ? (
                        <VolumeX className="w-4 h-4 text-white" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-white" />
                      )}
                    </button>
                    {/* Video Badge */}
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                      📹 Video
                    </div>
                  </div>
                  <div
                    className="p-6 cursor-pointer"
                    onClick={() => setCurrentSlide(index)}
                  >
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
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="p-8 cursor-pointer"
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className="flex items-center justify-between mb-6">
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
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-4">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="space-y-2">
                    <div className="font-semibold text-white text-sm">
                      {testimonial.name}
                    </div>
                  </div>
                </div>
              )}
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-600/0 group-hover:from-red-500/10 group-hover:to-red-600/10 transition-all duration-500 pointer-events-none"></div>
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
