import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, CheckCircle, Target } from "lucide-react"
import Image from "next/image"
import { TestimonialCard } from "@/components/testimonial-card"
import Link from "next/link"

export default function CareerCoachingPage() {
    const services = [
        "Personalized career assessment and planning",
        "International resume and LinkedIn optimization",
        "Interview skills training and mock sessions",
        "Professional networking strategies",
        "Industry-specific guidance and insights",
        "Salary negotiation coaching",
        "Personal branding development",
        "Long-term career roadmap creation",
    ]

    const testimonials = [
        {
            name: "Lisa Wang",
            role: "Marketing Manager",
            program: "Career Transition to Europe",
            image: "/testimonial/career-coaching/1.jpg",
            rating: 5,
            text: "The career coaching program transformed my approach to job searching. I landed my dream role in Amsterdam within 3 months!",
        },
        {
            name: "Carlos Rodriguez",
            role: "Data Scientist",
            program: "Tech Career in Silicon Valley",
            image: "/testimonial/career-coaching/2.jpg",
            rating: 5,
            text: "My coach helped me understand the US tech market and position myself effectively. The interview preparation was invaluable.",
        },
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-100">
                            <Users className="h-4 w-4 mr-2" />
                            Career Coaching
                        </Badge>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Accelerate Your
                            <span className="text-orange-600 block lg:inline lg:ml-2">International Career</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Get personalized coaching from industry experts to maximize your international experience and advance your
                            career in the global marketplace.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
                                <Link href="contact" >
                                <Target className="h-5 w-5 mr-2" />
                                    Start Coaching Program
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
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Comprehensive Career Development</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Our career coaching program covers all aspects of professional development to help you succeed in the
                                international job market.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                {services.map((service, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{service}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="relative">
                                <Image
                                    src="/career-coaching.jpg"
                                    alt="Career coaching session"
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
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Career Success Stories</h2>
                            <p className="text-xl text-gray-600">
                                See how our coaching helped professionals achieve their international career goals.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard
                                    key={index}
                                    testimonial={testimonial}
                                    serviceType="career-coaching"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-orange-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Advance Your Career?</h2>
                        <p className="text-xl text-orange-100 mb-8">
                            Start your personalized career coaching journey and unlock your potential in the global job market.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
                                <Link href="contact" >
                                    <Target className="h-5 w-5 mr-2" />
                                    Start Coaching Program
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
