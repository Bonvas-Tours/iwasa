"use client"

import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Globe, Briefcase, GraduationCap, Users } from "lucide-react"
import Link from "next/link"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"

export default function HeroSwiper() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const slides = [
        {
            id: 1,
            title: "Your Gateway to Global Opportunities",
            description:
                "Unlock your potential through life-changing international experiences. Join thousands of successful professionals who have transformed their careers with our comprehensive programs across 50+ countries.",
            features: ["50+ Countries", "2,500+ Success Stories", "98% Satisfaction Rate", "5+ Years Experience"],
            ctaText: "Start Your Journey",
            ctaLink: "/programs",
            secondaryCtaText: "Watch Stories",
            secondaryCtaLink: "/success-stories",
            backgroundVideo: "/gateway.mp4",
            backgroundImage: "/gateway.jpg",
            icon: Globe,
            badge: "Bonvas Tours Initiative",
        },
        {
            id: 2,
            title: "Launch Your Career with Global Internships",
            description:
                "Build your professional foundation with hands-on internships at leading companies across the globe. Develop industry-relevant skills, expand your network, and gain the international experience that sets you apart.",
            features: ["Paid Internships", "Mentorship Programs", "Visa Support", "Housing Assistance"],
            ctaText: "Explore Internships",
            ctaLink: "/programs?type=internship",
            secondaryCtaText: "View Success Stories",
            secondaryCtaLink: "/success-stories?type=internship",
            backgroundImage: "/internship.jpg",
            icon: Briefcase,
            badge: "Internship Programs",
        },
        {
            id: 3,
            title: "Advance Your Career with International Work",
            description:
                "Take your career to the next level with professional work placements in dynamic international markets. Gain valuable experience, develop cross-cultural competencies, and build a global professional network.",
            features: ["Competitive Salaries", "Career Advancement", "Immigration Pathways", "Professional Development"],
            ctaText: "Find Work Abroad",
            ctaLink: "/programs?type=work",
            secondaryCtaText: "Read Alumni Stories",
            secondaryCtaLink: "/success-stories?type=work",
            backgroundImage: "/work.jpg",
            icon: Users,
            badge: "Work Abroad Programs",
        },
        {
            id: 4,
            title: "Excel Academically on the Global Stage",
            description:
                "Pursue your academic goals at prestigious universities worldwide. Immerse yourself in diverse learning environments, conduct groundbreaking research, and earn qualifications recognized globally.",
            features: ["Top Universities", "Scholarship Opportunities", "Research Programs", "Cultural Immersion"],
            ctaText: "Discover Study Programs",
            ctaLink: "/programs?type=study",
            secondaryCtaText: "Explore Universities",
            secondaryCtaLink: "/universities",
            backgroundImage: "/study.jpg",
            icon: GraduationCap,
            badge: "Study Abroad Programs",
        },
    ]

    if (!mounted) {
        return (
            <div className="fixed z-50 inset-0 h-screen bg-black flex items-center justify-center">
                <img
                    src="/logo-white.png"
                    alt="Loading logo"
                    className="w-48 h-auto animate-pulse"
                />
            </div>
        )
    }

    return (
        <section className="relative overflow-hidden "
            style={{ height: 'calc(100vh - 4rem)' }} >
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                }}
                pagination={{
                    el: ".swiper-pagination-custom",
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className} custom-bullet"></span>`
                    },
                }}
                autoplay={{
                    delay: 70000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                effect="fade"
                fadeEffect={{
                    crossFade: true,
                }}
                loop={true}
                className="h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative h-full">
                        {/* Video Background with Fallback */}
                        <div className="absolute inset-0 overflow-hidden">
                            <video
                                className="absolute inset-0 w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                onError={(e) => {
                                    // Fallback to image if video fails to load
                                    const target = e.target as HTMLVideoElement
                                    const parent = target.parentElement
                                    if (parent) {
                                        parent.style.backgroundImage = `url(${slide.backgroundImage})`
                                        parent.style.backgroundSize = "cover"
                                        parent.style.backgroundPosition = "center"
                                        parent.style.backgroundRepeat = "no-repeat"
                                        target.style.display = "none"
                                    }
                                }}
                            >
                                <source src={slide?.backgroundVideo} type="video/mp4" />
                                {/* Fallback for browsers that don't support video */}
                                Your browser does not support the video tag.
                            </video>

                            {/* Fallback background image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0"
                                style={{
                                    backgroundImage: `url(${slide.backgroundImage})`,
                                }}
                            />
                        </div>

                        {/* Enhanced Overlays for Video */}
                      
                        <div className="absolute inset-0 bg-black/20" />
                       
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* Content */}
                        <div className="relative h-full flex items-center">
                            <div className="container mx-auto md:px-20">
                                <div className="max-w-4xl">
                                    <div className="space-y-6 text-white">
                                        {/* Badge */}
                                        <div className="flex items-center gap-4">
                                            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                                                <slide.icon className="w-4 h-4 mr-2" />
                                                {slide.badge}
                                            </Badge>
                                        </div>

                                        {/* Title and Subtitle */}
                                        <div className="space-y-4">
                                            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                                                {slide.title}
                                            </h1>
                                        </div>

                                        {/* Description */}
                                        <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl md:block hidden">{slide.description}</p>

                                        {/* Features */}
                                        <div className="flex flex-wrap gap-3">
                                            {slide.features.map((feature, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium"
                                                >
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>

                                        {/* CTAs */}
                                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                            <Button
                                                size="lg"
                                                className="font-semibold text-lg px-8 py-4 h-auto"
                                                asChild
                                            >
                                                <Link
                                                    // href={slide.ctaLink}
                                                    href="/contact"
                                                >
                                                    {slide.ctaText}
                                                    <ArrowRight className="ml-2 h-5 w-5" />
                                                </Link>
                                            </Button>
                                            <Button
                                                size="lg"
                                                variant="outline"
                                                className="border-2 bg-transparent border-white text-white hover:bg-white hover:text-black font-semibold text-lg px-8 py-4 h-auto backdrop-blur-sm"
                                                asChild
                                            >
                                                <Link
                                                    // href={slide.secondaryCtaLink}
                                                    href=""
                                                >
                                                    <Play className="mr-2 h-5 w-5" />
                                                    {slide.secondaryCtaText}
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide Number */}
                        <div className="absolute md:bottom-8 bottom-2 right-8 text-white/60 text-sm font-medium">
                            {String(slide.id).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                        </div>
                    </SwiperSlide>
                ))}

                {/* Custom Navigation */}
                <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all cursor-pointer group">
                    <svg
                        className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
                <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all cursor-pointer group">
                    <svg
                        className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>

                {/* Custom Pagination */}
                <div className="swiper-pagination-custom absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3"></div>
            </Swiper>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-8 text-white/60 hidden lg:flex flex-col items-center gap-2 animate-bounce">
                <span className="text-sm font-medium writing-mode-vertical-rl text-orientation-mixed">Scroll</span>
                <div className="w-px h-8 bg-white/40"></div>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>

            <style jsx global>{`
        .custom-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transition: all 0.3s ease;
          cursor: pointer;
          border: 2px solid transparent;
        }

        .custom-bullet:hover {
          background: rgba(255, 255, 255, 0.5);
          transform: scale(1.1);
        }

        .custom-bullet.swiper-pagination-bullet-active {
          background: #eab308;
          border-color: rgba(255, 255, 255, 0.5);
          transform: scale(1.2);
        }

        .swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .swiper-button-prev-custom,
          .swiper-button-next-custom {
            width: 40px;
            height: 40px;
          }

          .swiper-button-prev-custom {
            left: 16px;
          }

          .swiper-button-next-custom {
            right: 16px;
          }
        }
      `}</style>
        </section>
    )
}
