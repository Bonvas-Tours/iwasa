import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Globe,
    Users,
    Target,
    Heart,
    Lightbulb,
    ArrowRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {


    const values = [
        {
            icon: Target,
            title: "Excellence",
            description: "We maintain the highest standards in everything we do, from program selection to ongoing support.",
            color: "bg-blue-50 text-blue-600",
        },
        {
            icon: Heart,
            title: "Integrity",
            description: "Honest, transparent communication and ethical practices guide all our interactions.",
            color: "bg-green-50 text-green-600",
        },
        {
            icon: Lightbulb,
            title: "Innovation",
            description: "We continuously evolve our services to meet the changing needs of global education and careers.",
            color: "bg-purple-50 text-purple-600",
        },
        {
            icon: Users,
            title: "Empowerment",
            description: "We believe in empowering individuals to achieve their dreams through international experiences.",
            color: "bg-orange-50 text-orange-600",
        },
    ]

 

    const milestones = [
        {
            year: "2018",
            title: "Iwasa Initiative Launch",
            description: "Began with four internship applicants, laying the foundation for future international programs.",
        },
        {
            year: "2019",
            title: "Study Abroad Expansion",
            description: "Officially launched dedicated study abroad application services for students.",
        },
        {
            year: "2021",
            title: "Work Abroad Consultation",
            description: "Expanded services to include career-focused overseas work and internship opportunities.",
        },
        {
            year: "2022",
            title: "Formalized as Outbound Department",
            description: "Established as an official division and initiated global partnership discussions.",
        },
        {
            year: "2023",
            title: "Partnership Growth",
            description: "Collaborated with 4 international institutions and 1 local partner to broaden opportunities.",
        },
        {
            year: "2025",
            title: "Strategic Partnership",
            description: "Established a strategic partnership with leading global firms, including major multimedia and international corporations.",
        },
    ];


    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge variant="outline" className="mb-4">
                            <Globe className="w-3 h-3 mr-1" />
                            About IWaS Abroad
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Transforming Lives Through Global Opportunities
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            For over 5 years, we&apos;ve been the bridge between ambitious individuals, institutions and life-changing international
                            experiences. Our mission is to make global education and career opportunities accessible to everyone.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild>
                                <Link href="/contact">
                                    Get Started Today
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <Link href="/">Explore Programs</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>


            {/* Our Story Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <Badge variant="outline" className="mb-4">
                                Our Story
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">From Vision to Global Impact</h2>
                            <p className="text-xl text-gray-600">
                                What started as a simple idea has grown into a global movement, connecting thousands of students and
                                professionals to opportunities that transform their lives.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">IWAS ABROAD: EMBRACE YOUR GLOBAL POTENTIAL</h3>
                                <p className="text-gray-600 mb-6">
                                    IWaS Abroad stands for Internship, Work, and Study Abroad. We are a dedicated initiative by Bonvas Tours Limited, designed to empower individuals with the tools and opportunities to navigate international career pathways. IWaS Abroad empowers individuals to elevate their careers and broaden their horizons through immersive international experiences.
                                </p>
                                <p className="text-gray-600">
                                    What started as a small consultancy has grown into a comprehensive platform
                                    serving students and professionals in over 20 countries, with partnerships spanning the globe.
                                </p>
                            </div>
                            <div className="relative">
                                <Image
                                    src="/general.jpg"
                                    alt="IWaS Abroad founding story"
                                    width={600}
                                    height={400}
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <Badge variant="outline" className="mb-4">
                                Our Values
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Drives Us Forward</h2>
                            <p className="text-xl text-gray-600">
                                Our core values shape every interaction, decision, and service we provide.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => (
                                <Card
                                    key={index}
                                    className="shadow-none hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                >
                                    <CardContent className="p-8 text-center">
                                        <div
                                            className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${value.color}`}
                                        >
                                            <value.icon className="h-8 w-8" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                                        <p className="text-gray-600">{value.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <Badge variant="outline" className="mb-4">
                                Our Journey
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Milestones</h2>
                            <p className="text-xl text-gray-600">A timeline of our growth and achievements over the years.</p>
                        </div>

                        <div className="relative">
                            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-blue-200"></div>

                            {milestones.map((milestone, index) => (
                                <div
                                    key={index}
                                    className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                                >
                                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                                        <Card className="shadow-lg">
                                            <CardContent className="p-6">
                                                <div className="text-blue-600 font-bold text-lg mb-2">{milestone.year}</div>
                                                <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
                                                <p className="text-gray-600">{milestone.description}</p>
                                            </CardContent>
                                        </Card>
                                    </div>

                                    <div className="absolute md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                        <div className="w-3 h-3 bg-white rounded-full"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Global Journey?</h2>
                        <p className="text-xl mb-8 opacity-90">
                            Join thousands of successful students and professionals who have transformed their careers through our
                            programs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" asChild>
                                <Link href="/contact">
                                    Schedule Free Consultation
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                                asChild
                            >
                                <Link href="/programs">Browse Programs</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
