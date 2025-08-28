import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HeadphonesIcon, CheckCircle, Clock, Star, Phone, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { TestimonialCard } from "@/components/testimonial-card"

export default function SupportPage() {
    const supportFeatures = [
        "24/7 emergency hotline access",
        "Multi-language support team",
        "Live chat and video consultations",
        "Regular check-ins and progress tracking",
        "Crisis management and problem resolution",
        "Academic and professional guidance",
        "Mental health and wellness support",
        "Community building and networking",
    ]

    const supportChannels = [
        {
            title: "Emergency Hotline",
            availability: "24/7",
            response: "Immediate",
            description: "Urgent assistance for critical situations",
            icon: Phone,
            color: "red",
        },
        {
            title: "Live Chat Support",
            availability: "Business Hours",
            response: "< 5 minutes",
            description: "Quick answers to your questions",
            icon: MessageCircle,
            color: "blue",
        },
        {
            title: "Video Consultations",
            availability: "Scheduled",
            response: "Same Day",
            description: "Face-to-face guidance sessions",
            icon: HeadphonesIcon,
            color: "green",
        },
    ]

    const testimonials = [
        {
            name: "Anna Kowalski",
            role: "Graduate Student",
            program: "Study in Australia",
            image: "/testimonial/support/1.jpg",
            rating: 5,
            text: "When I faced a visa issue at 2 AM, the emergency hotline was there for me. They resolved everything within hours. Incredible support!",
        },
        {
            name: "Raj Patel",
            role: "Research Fellow",
            program: "Work in Canada",
            image: "/testimonial/support/2.jpg",
            rating: 5,
            text: "The regular check-ins and ongoing support made my transition so much easier. It's like having a friend in every country.",
        },
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-100">
                            <HeadphonesIcon className="h-4 w-4 mr-2" />
                            24/7 Support
                        </Badge>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Never Feel Alone on Your
                            <span className="text-red-600 block lg:inline lg:ml-2">International Journey</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Round-the-clock support and assistance throughout your international experience, ensuring you always have
                            help when you need it most.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
                                <Link href="contact" >
                                <Phone className="h-5 w-5 mr-2" />
                                    Contact Support Now
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
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Comprehensive Support Services</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Our dedicated support team is available around the clock to assist you with any challenges or questions
                                during your international journey.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                {supportFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="relative">
                                <Image
                                    src="/support.jpg"
                                    alt="24/7 support team"
                                    width={500}
                                    height={400}
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Channels */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Multiple Ways to Get Help</h2>
                            <p className="text-xl text-gray-600">
                                Choose the support channel that works best for your situation and urgency level.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {supportChannels.map((channel, index) => {
                                const IconComponent = channel.icon
                                const colorClasses = {
                                    red: "bg-red-50 text-red-600 border-red-200",
                                    blue: "bg-blue-50 text-blue-600 border-blue-200",
                                    green: "bg-green-50 text-green-600 border-green-200",
                                }

                                return (
                                    <Card
                                        key={index}
                                        className={`border-2 ${colorClasses[channel.color as keyof typeof colorClasses].split(" ")[2]} hover:shadow-lg transition-shadow`}
                                    >
                                        <CardHeader className="text-center">
                                            <div
                                                className={`w-16 h-16 ${colorClasses[channel.color as keyof typeof colorClasses]} rounded-full flex items-center justify-center mx-auto mb-4`}
                                            >
                                                <IconComponent className="h-8 w-8" />
                                            </div>
                                            <CardTitle className="text-2xl">{channel.title}</CardTitle>
                                            <CardDescription className="mt-4">{channel.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent className="text-center">
                                            <div className="space-y-2 mb-6">
                                                <div className="flex items-center justify-center gap-2">
                                                    <Clock className="h-4 w-4 text-gray-500" />
                                                    <span className="text-sm text-gray-600">{channel.availability}</span>
                                                </div>
                                                <div className="text-sm font-semibold text-gray-700">Response: {channel.response}</div>
                                            </div>
                                            <Button className="w-full">Get Help Now</Button>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Support When It Matters Most</h2>
                            <p className="text-xl text-gray-600">
                                Real stories from students and professionals who received critical support during their international
                                journey.
                            </p>
                        </div>

                         <div className="grid md:grid-cols-2 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard
                                    key={index}
                                    testimonial={testimonial}
                                    serviceType="support"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-red-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Need Help Right Now?</h2>
                        <p className="text-xl text-red-100 mb-8">
                            Our support team is standing by to assist you with any questions or challenges you're facing.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100" asChild>
                                <Link href="contact" >
                                    <Phone className="h-5 w-5 mr-2" />
                                    Contact Support Now
                                </Link> 
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
