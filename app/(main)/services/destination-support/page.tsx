import { Button } from "@/components/ui/button"

import { Badge } from "@/components/ui/badge"
import { MapPin, CheckCircle, Home } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { TestimonialCard } from "@/components/testimonial-card"

export default function DestinationSupportPage() {
    const services = [
        "Pre-arrival orientation and cultural briefing",
        "Accommodation assistance and housing search",
        "Airport pickup and initial settlement support",
        "Local registration and documentation help",
        "Banking and financial services setup",
        "Healthcare and insurance guidance",
        "Transportation and mobility solutions",
        "Cultural integration and social connections",
    ]

  
    const testimonials = [
        {
            name: "Maria Santos",
            role: "Exchange Student",
            program: "Study in Barcelona",
            image: "/testimonial/destination-support/1.jpg",
            rating: 5,
            text: "The destination support made my transition to Barcelona seamless. From airport pickup to finding the perfect apartment, everything was handled professionally.",
        },
        {
            name: "James Mitchell",
            role: "Software Engineer",
            program: "Work in Berlin",
            image: "/testimonial/destination-support/2.jpg",
            rating: 5,
            text: "Moving to Berlin was stress-free thanks to the amazing support team. They helped with everything from bureaucracy to making local friends.",
        },
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-teal-50 to-green-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="mb-4 bg-teal-100 text-teal-800 hover:bg-teal-100">
                            <MapPin className="h-4 w-4 mr-2" />
                            Destination Support
                        </Badge>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Settle Into Your New
                            <span className="text-teal-600 block lg:inline lg:ml-2">Home Away From Home</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Comprehensive on-ground support to help you settle comfortably into your new country, from arrival to full
                            integration into local life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-teal-600 hover:bg-teal-700" asChild>
                                <Link href="contact" >
                                <Home className="h-5 w-5 mr-2" />
                                Get Settlement Support
                                </Link>
                            </Button>
                         
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Complete Settlement Support</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                From the moment you land to full integration into your new community, we provide comprehensive support
                                for a smooth transition.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                {services.map((service, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle className="h-6 w-6 text-teal-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{service}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="relative">
                                <Image
                                    src="/destination-support.jpg"
                                    alt="Destination support"
                                    width={500}
                                    height={400}
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Settlement Success Stories</h2>
                            <p className="text-xl text-gray-600">
                                Read how our destination support helped students and professionals settle successfully.
                            </p>
                        </div>

                       <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                testimonial={testimonial}
                                serviceType="destination-support"
                            />
                        ))}
                    </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-teal-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready for a Smooth Transition?</h2>
                        <p className="text-xl text-teal-100 mb-8">
                            Let our local experts help you settle into your new destination with confidence and ease.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100" asChild>
                                <Link href="contact" >
                                    <Home className="h-5 w-5 mr-2" />
                                    Get Support Now
                                </Link>
                            </Button>
                           
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
