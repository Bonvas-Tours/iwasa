import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, CheckCircle, Edit} from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { TestimonialCard } from "@/components/testimonial-card"

export default function ApplicationSupportPage() {
    const services = [
        "Complete application review and optimization",
        "Personal statement and essay writing assistance",
        "Resume/CV enhancement for international standards",
        "Letter of recommendation guidance",
        "Application timeline management",
        "Document verification and formatting",
        "Interview preparation and mock sessions",
        "Application tracking and follow-up support"
    ]

   
    const testimonials = [
        {
            name: "Emma Thompson",
            role: "Graduate Student",
            program: "Master's in Environmental Science",
            image: "/testimonial/application-support/1.jpg",
            rating: 5,
            text: "The application support team helped me craft compelling essays that truly reflected my passion. I got accepted to my dream program!"
        },
        {
            name: "David Kim",
            role: "Software Developer",
            program: "Tech Bootcamp in Amsterdam",
            image: "/testimonial/application-support/2.jpg",
            rating: 5,
            text: "Their attention to detail was incredible. They caught errors I missed and helped me present my experience in the best possible light."
        }
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
                            <FileText className="h-4 w-4 mr-2" />
                            Application Support
                        </Badge>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Perfect Your
                            <span className="text-green-600 block lg:inline lg:ml-2">Application Materials</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Get expert assistance with every aspect of your application process, from essays to interviews, ensuring you present your best self to admissions committees.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                                  <Link href="contact">
                                <Edit className="h-5 w-5 mr-2" />
                                    Start Application Review
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
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Complete Application Support</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Our comprehensive application support covers every element needed for a successful international program application.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                {services.map((service, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{service}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="relative">
                                <Image
                                    src="/application-support.jpg"
                                    alt="Application support"
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
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
                            <p className="text-xl text-gray-600">
                                See how our application support helped students achieve their goals.
                            </p>
                        </div>

                          <div className="grid md:grid-cols-2 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard
                                    key={index}
                                    testimonial={testimonial}
                                    serviceType="application-support"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-green-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Perfect Your Application?</h2>
                        <p className="text-xl text-green-100 mb-8">
                            Let our experts help you create compelling application materials that stand out from the competition.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                                <Edit className="h-5 w-5 mr-2" />
                                Get Started Today
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
