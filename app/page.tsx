import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Globe, Users, Award, MapPin, Clock, Star } from "lucide-react"

import HeroSwiper from "@/components/hero-swiper"
import AnimatedCounter from "@/components/animation-counter"
import ServicesSection from "@/components/services"

export default function HomePage() {
  const featuredPrograms = [
    {
      id: 1,
      title: "Software Engineering Internship",
      location: "Berlin, Germany",
      duration: "6 months",
      type: "Internship",
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=300",
      description: "Gain hands-on experience in cutting-edge software development with leading tech companies.",
    },
    {
      id: 2,
      title: "International Business Studies",
      location: "London, UK",
      duration: "1 year",
      type: "Study Abroad",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=300",
      description: "Master global business strategies at world-renowned universities.",
    },
    {
      id: 3,
      title: "Healthcare Work Placement",
      location: "Toronto, Canada",
      duration: "12 months",
      type: "Work Placement",
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=300",
      description: "Advance your healthcare career with international experience in top medical facilities.",
    },
  ]

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
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Featured Programs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular international opportunities designed to transform your career.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPrograms.map((program) => (
              <Card key={program.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600">{program.type}</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{program.title}</CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{program.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {program.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {program.duration}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{program.description}</CardDescription>
                  <Button className="w-full" asChild>
                    <Link href={`/programs/${program.id}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/programs">
                View All Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  )
}
