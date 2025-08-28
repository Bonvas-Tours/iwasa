
import { Card, CardContent } from "@/components/ui/card"
import {  Globe, Users, Award} from "lucide-react"

import HeroSwiper from "@/components/hero-swiper"
import AnimatedCounter from "@/components/animation-counter"
import ServicesSection from "@/components/services"

import { Suspense } from "react"
import FeaturedProgramsLoading from "@/components/featured-programs-loading"
import FeaturedPrograms from "@/components/featured-programs"


export default async function HomePage() {
  const stats = [
    { rawNumber: 2500, suffix: "+", number: "2,500+", label: "Success Stories" },
    { rawNumber: 20, suffix: "+", number: "20+", label: "Countries" },
    { rawNumber: 98, suffix: "%", number: "98%", label: "Satisfaction Rate" },
    { rawNumber: 5, suffix: "+", number: "5+", label: "Years Experience" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Swiper Section */}
      <HeroSwiper />

      {/* Stats Section with Animated Counters */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                  <AnimatedCounter
                    end={stat.rawNumber}
                    suffix={stat.suffix}
                    duration={2000 + index * 200}
                    className="inline-block"
                  />
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Mission & Mandate</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              IWaS Abroad is dedicated to bridging the gap between academic excellence and professional success through
              transformative international experiences. We empower individuals to develop global perspectives,
              cross-cultural competencies, and professional networks that last a lifetime.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="shadow-none hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Global Network</h3>
                <p className="text-gray-600">
                  Access opportunities across 50+ countries with our extensive partner network.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-none hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Personalized Support</h3>
                <p className="text-gray-600">
                  Dedicated guidance from application to completion of your international journey.
              </p>
                </CardContent>
              </Card>
              <Card className="shadow-none hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold">Career Excellence</h3>
                <p className="text-gray-600">
                  Programs designed to accelerate your professional growth and global competitiveness.
                      </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Featured Programs */}
      <Suspense fallback={<FeaturedProgramsLoading />}>
        <FeaturedPrograms />
      </Suspense> 
    </div>
  )
}
