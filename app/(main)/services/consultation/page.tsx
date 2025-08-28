import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, CheckCircle, Calendar, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { TestimonialCard } from "@/components/testimonial-card"

export default function ProgramConsultationPage() {
    const features = [
        "One-on-one personalized consultation session",
        "Comprehensive career assessment and goal analysis",
        "Custom program matching based on your profile",
        "Detailed timeline and roadmap planning",
        "University and employer network insights",
        "Budget planning and financial guidance",
        "Follow-up support and progress tracking",
        "Access to exclusive program opportunities",
    ]

    const testimonials = [
        {
            name: "Sarah Chen",
            role: "Software Engineer",
            program: "Tech Internship in Berlin",
            image: "/testimonial/consultation/1.jpg",
            rating: 5,
            text: "The consultation session was incredibly thorough. My advisor helped me identify programs I never would have considered and created a clear path to achieve my goals.",
        },
        {
            name: "Michael Rodriguez",
            role: "Business Student",
            program: "MBA in London",
            image: "/testimonial/consultation/2.jpg",
            rating: 4,
            text: "The personalized approach made all the difference. They understood my career aspirations and matched me with the perfect program that aligned with my goals.",
        },
    ]

    const process = [
        {
            step: 1,
            title: "Book Your Session",
            description: "Schedule a convenient time for your consultation",
        },
        {
            step: 2,
            title: "Pre-Session Assessment",
            description: "Complete our comprehensive questionnaire",
        },
        {
            step: 3,
            title: "Consultation Meeting",
            description: "Meet with our expert advisor for personalized guidance",
        },
        {
            step: 4,
            title: "Receive Your Roadmap",
            description: "Get your customized plan and next steps",
        },
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
                            <GraduationCap className="h-4 w-4 mr-2" />
                            Program Consultation
                        </Badge>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Find Your Perfect
                            <span className="text-blue-600 block lg:inline lg:ml-2">International Program</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Get personalized guidance from our expert advisors to discover international opportunities that align with
                            your career goals and aspirations.
                        </p>
                  
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                                <Link href="contact" >
                                    <Calendar className="h-5 w-5 mr-2" />
                                    Book Free Consultation
                               </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="tel:+233 531 085 235">
                                    <Phone className="h-5 w-5 mr-2" />
                                    Call Us Now
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                What&apos;s Included in Your Consultation
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Our comprehensive consultation process ensures you get personalized guidance tailored to your unique
                                goals and circumstances.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            <div className="space-y-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="relative">
                                <Image
                                    src="/consultation.jpg"
                                    alt="Consultation session"
                                    width={500}
                                    height={400}
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Process Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">How It Works</h2>
                            <p className="text-xl text-gray-600">
                                Our streamlined consultation process makes it easy to get the guidance you need.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {process.map((item, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl font-bold text-blue-600">{item.step}</span>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
                            <p className="text-xl text-gray-600">
                                Hear from students who found their perfect programs through our consultation service.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard
                                    key={index}
                                    testimonial={testimonial}
                                    serviceType="consultation"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Find Your Perfect Program?</h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Start with a free consultation and take the first step toward your international career goals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                                <Link href="contact" >
                                <Calendar className="h-5 w-5 mr-2" />
                                    Book Free Consultation
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
