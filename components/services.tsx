"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, FileText, Plane, Users, MapPin, HeadphonesIcon, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

const services = [
    {
        id: 1,
        title: "Program Consultation",
        description:
            "Get personalized guidance to find the perfect international program that aligns with your career goals and aspirations.",
        icon: GraduationCap,
        features: ["One-on-one consultation", "Career assessment", "Program matching", "Timeline planning"],
        color: "blue",
        href: "/services/consultation",
    },
    {
        id: 2,
        title: "Application Support",
        description:
            "Complete assistance with your application process, from document preparation to submission and follow-up.",
        icon: FileText,
        features: ["Document review", "Essay assistance", "Application tracking", "Interview preparation"],
        color: "green",
        href: "/services/application-support",
    },
    {
        id: 3,
        title: "Visa & Immigration",
        description:
            "Expert guidance through visa applications and immigration processes to ensure smooth travel arrangements.",
        icon: Plane,
        features: ["Visa application", "Document verification", "Embassy liaison", "Travel planning"],
        color: "purple",
        href: "/services/visa-immigration",
    },
    {
        id: 4,
        title: "Career Coaching",
        description:
            "Professional development support to maximize your international experience and career advancement opportunities.",
        icon: Users,
        features: ["Resume building", "Interview skills", "Networking guidance", "Career planning"],
        color: "orange",
        href: "/services/career-coaching",
    },
    {
        id: 5,
        title: "Destination Support",
        description:
            "Comprehensive assistance for settling into your new country, including accommodation and cultural orientation.",
        icon: MapPin,
        features: ["Accommodation help", "Cultural orientation", "Local connections", "Emergency support"],
        color: "teal",
        href: "/services/destination-support",
    },
    {
        id: 6,
        title: "24/7 Support",
        description:
            "Round-the-clock assistance throughout your journey, ensuring you're never alone in your international experience.",
        icon: HeadphonesIcon,
        features: ["Emergency hotline", "Online chat support", "Regular check-ins", "Problem resolution"],
        color: "red",
        href: "/services/support",
    },
]

const colorClasses = {
    blue: {
        bg: "bg-blue-50",
        icon: "text-blue-600",
        border: "border-blue-200",
        button: "bg-blue-600 hover:bg-blue-700",
    },
    green: {
        bg: "bg-green-50",
        icon: "text-green-600",
        border: "border-green-200",
        button: "bg-green-600 hover:bg-green-700",
    },
    purple: {
        bg: "bg-purple-50",
        icon: "text-purple-600",
        border: "border-purple-200",
        button: "bg-purple-600 hover:bg-purple-700",
    },
    orange: {
        bg: "bg-orange-50",
        icon: "text-orange-600",
        border: "border-orange-200",
        button: "bg-orange-600 hover:bg-orange-700",
    },
    teal: {
        bg: "bg-teal-50",
        icon: "text-teal-600",
        border: "border-teal-200",
        button: "bg-teal-600 hover:bg-teal-700",
    },
    red: {
        bg: "bg-red-50",
        icon: "text-red-600",
        border: "border-red-200",
        button: "bg-red-600 hover:bg-red-700",
    },
}

export default function ServicesSection() {
    return (
        <section className="py-20 bg-white  overflow-hidden">

            <div className="container mx-auto px-4 relative">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <CheckCircle className="h-4 w-4" />
                        Comprehensive Services
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                        Everything You Need for Your
                        <span className="text-blue-600 block lg:inline lg:ml-2">International Journey</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        From initial consultation to ongoing support, we provide end-to-end services to ensure your international
                        experience is successful and transformative.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service) => {
                        const IconComponent = service.icon
                        const colors = colorClasses[service.color as keyof typeof colorClasses]

                        return (
                            <Card
                                key={service.id}
                                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 ${colors.border} hover:border-opacity-50 shadow-none`}
                            >
                                <CardHeader className="pb-4">
                                    <div
                                        className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <IconComponent className={`h-8 w-8 ${colors.icon}`} />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                        {service.title}
                                    </CardTitle>
                                    <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
                                </CardHeader>

                                <CardContent className="pt-0">
                                    {/* Features List */}
                                    <div className="space-y-2 mb-6">
                                        {service.features.map((feature, index) => (
                                            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <Button
                                        className={`w-full ${colors.button} text-white font-medium group-hover:shadow-lg transition-all duration-300`}
                                        asChild
                                    >
                                        <Link href={service.href}>
                                            Learn More
                                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                {/* Bottom CTA Section */}
                <div className="text-center bg-gray-50  rounded-2xl p-8 lg:p-12">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Schedule a free consultation with our experts to discuss your international goals and discover how we can
                        help you achieve them.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8" asChild>
                            <Link href="/contact" >
                                Schedule Free Consultation
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 text-center">
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span className="text-sm font-medium text-gray-700">Certified Consultants</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span className="text-sm font-medium text-gray-700">5+ Years Experience</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span className="text-sm font-medium text-gray-700">98% Success Rate</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span className="text-sm font-medium text-gray-700">24/7 Support</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
