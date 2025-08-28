import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plane, CheckCircle, FileCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { TestimonialCard } from "@/components/testimonial-card"

export default function VisaImmigrationPage() {
    const services = [
        "Visa application preparation and submission",
        "Document verification and authentication",
        "Embassy appointment scheduling",
        "Interview preparation and coaching",
        "Travel insurance guidance",
        "Immigration law consultation",
        "Status tracking and updates",
        "Emergency visa processing support",
    ]

    const testimonials = [
        {
            name: "Priya Sharma",
            role: "Graduate Student",
            program: "Student Visa to Canada",
            image: "/testimonial/visa/1.jpg",
            rating: 4,
            text: "The visa team made the complex process so simple. They handled everything and kept me informed at every step. Got my visa approved on the first try!",
        },
        {
            name: "Ahmed Hassan",
            role: "Software Engineer",
            program: "Work Visa to Germany",
            image: "/testimonial/visa/2.jpg",
            rating: 5,
            text: "Professional and efficient service. They knew exactly what documents were needed and helped me prepare a strong application. Highly recommended!",
        },
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">
                            <Plane className="h-4 w-4 mr-2" />
                            Visa & Immigration
                        </Badge>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Navigate Visa Requirements
                            <span className="text-purple-600 block lg:inline lg:ml-2">With Confidence</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Expert guidance through complex visa and immigration processes, ensuring smooth approval and travel
                            arrangements for your international journey.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                                <Link href="contact" >
                                    <FileCheck className="h-5 w-5 mr-2" />
                                    Start Visa Application
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
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Complete Visa Support Services</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                From initial consultation to visa approval, we provide comprehensive support throughout your entire visa
                                application process.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                {services.map((service, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle className="h-6 w-6 text-purple-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{service}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="relative">
                                <Image
                                    src="/visa.jpg"
                                    alt="Visa processing"
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
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Visa Success Stories</h2>
                            <p className="text-xl text-gray-600">Read about successful visa approvals with our expert assistance.</p>
                        </div>

                       <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                testimonial={testimonial}
                                serviceType="visa-immigration"
                            />
                        ))}
                    </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-purple-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your Visa Application?</h2>
                        <p className="text-xl text-purple-100 mb-8">
                            Let our visa experts guide you through the process and maximize your chances of approval.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100" asChild>
                                <Link href="contact" >
                                    <FileCheck className="h-5 w-5 mr-2" />
                                    Start Visa Application
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
