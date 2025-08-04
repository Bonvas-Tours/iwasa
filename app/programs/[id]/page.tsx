import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Clock,
  Star,
  Calendar,
  DollarSign,
  Users,
  CheckCircle,
  ArrowRight,
  Globe,
  Award,
  BookOpen,
  Briefcase,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// This would typically come from a database or API
const programData = {
  1: {
    title: "Software Engineering Internship",
    location: "Berlin, Germany",
    duration: "6 months",
    type: "Internship",
    rating: 4.9,
    reviews: 127,
    image: "/program/studies.jpg",
    description:
      "Immerse yourself in Berlin's thriving tech ecosystem with this comprehensive software engineering internship. Work alongside experienced developers at innovative startups and established tech companies while building real-world applications that impact thousands of users.",
    longDescription:
      "This program offers an unparalleled opportunity to develop your technical skills while experiencing one of Europe's most dynamic tech hubs. You'll work on cutting-edge projects using modern technologies like React, Node.js, Python, and cloud platforms. The program includes mentorship from senior engineers, code reviews, and participation in agile development processes.",
    benefits: [
      "Paid internship (€1,200-1,800/month)",
      "Comprehensive visa support",
      "Housing assistance and recommendations",
      "Personal mentorship program",
      "Technical workshops and training",
      "Networking events with industry professionals",
      "Certificate of completion",
      "Potential for full-time job offers",
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "Proficiency in at least one programming language",
      "Basic understanding of web development",
      "English proficiency (B2 level minimum)",
      "Strong problem-solving skills",
      "Ability to work in a team environment",
    ],
    applicationProcess: [
      {
        step: 1,
        title: "Online Application",
        description: "Submit your application with CV and cover letter",
        completed: false,
      },
      {
        step: 2,
        title: "Online or In-person Interview",
        description: "30-minute interview with our placement team",
        completed: false,
      },
      { step: 3, title: "Company Matching", description: "We match you with suitable companies", completed: false },
      { step: 4, title: "Final Interview", description: "Interview with your potential employer", completed: false },
      { step: 5, title: "Visa & Travel", description: "Visa processing and travel arrangements", completed: false },
    ],
    deadline: "July 15, 2025",
    startDate: "September 1, 2025",
    cost: "€2,500 (program fee)",
    included: [
      "Placement guarantee",
      "Visa application support",
      "Pre-departure orientation",
      "24/7 emergency support",
      "Housing assistance",
      "Cultural integration program",
    ],
    testimonials: [
      {
        name: "Sarah Chen",
        role: "Software Developer at Spotify",
        image: "/placeholder.svg?height=60&width=60",
        quote:
          "The Berlin internship completely transformed my career. I learned more in 6 months than I did in my entire university program. The mentorship was incredible, and I'm now working full-time at one of Europe's top tech companies.",
      },
      {
        name: "Marcus Johnson",
        role: "Full-Stack Developer at N26",
        image: "/placeholder.svg?height=60&width=60",
        quote:
          "IWaS Abroad made the entire process seamless. From visa support to finding accommodation, they handled everything. The technical skills I gained and the professional network I built are invaluable.",
      },
    ],
  },
  2: {
    title: "Hospitality Internship",
    location: "Madrid, Spain",
    duration: "1-6 months",
    type: "Internship",
    rating: 4.8,
    reviews: 84,
    image: "/program/hospitality.jpg",
    description:
      "Experience Spain's vibrant hospitality industry with hands-on training in premium hotels, restaurants, and tourism companies. Immerse yourself in Spanish culture while developing professional skills in one of Europe's most dynamic hospitality markets.",
    longDescription:
      "This comprehensive hospitality internship program offers flexible duration options from 1 to 6 months, allowing you to tailor your experience to your academic and career goals. You'll work in various sectors including luxury hotels, boutique restaurants, event management companies, and tourism agencies across Madrid and other Spanish cities. The program combines practical work experience with cultural immersion and language learning opportunities.",
    benefits: [
      "Flexible duration (1-6 months)",
      "Visa assistance available",
      "Cultural immersion program",
      "Spanish language training",
      "Industry certification",
      "Networking opportunities",
      "Professional mentorship",
      "Accommodation assistance",
    ],
    requirements: [
      "Currently enrolled in higher education or graduated within the last two years",
      "University-level degree (not technical or secondary education)",
      "Educational institution must be officially recognized",
      "Internship must be mandatory component of academic program",
      "Official internship agreement required",
      "Proof of financial means (€600/month minimum)",
      "Clean criminal record from all countries of residence (past 5 years)",
      "Medical insurance coverage",
    ],
    applicationProcess: [
      {
        step: 1,
        title: "Eligibility Check",
        description: "Verify academic and legal requirements",
        completed: false,
      },
      {
        step: 2,
        title: "Online Application",
        description: "Submit application with required documents",
        completed: false,
      },
      {
        step: 3,
        title: "Document Review",
        description: "Academic transcripts and internship agreement review",
        completed: false,
      },
      {
        step: 4,
        title: "Company Matching",
        description: "Match with suitable hospitality companies",
        completed: false,
      },
      { step: 5, title: "Visa Processing", description: "Student visa application and processing", completed: false },
      { step: 6, title: "Pre-Departure", description: "Orientation and travel arrangements", completed: false },
    ],
    deadline: "Rolling admissions",
    startDate: "Flexible start dates",
    cost: "€1,057 - €2,401 (depending on duration and support level)",
    costBreakdown: [
      {
        category: "With Host Company Visa Assistance",
        options: [
          { duration: "1-3 months", price: "€1,057*" },
          { duration: "4-6 months", price: "€1,596*" },
        ],
      },
      {
        category: "Without Host Company Visa Assistance",
        options: [
          { duration: "1-3 months", price: "€1,596*" },
          { duration: "4-6 months", price: "€2,401*" },
        ],
      },
    ],
    additionalCosts: [
      "Medical insurance: approximately €350+",
      "Flight costs: varies by country of origin",
      "Embassy fee: starting at €90",
      "Financial proof: €600/month (€3,600 for 6 months upfront)",
    ],
    included: [
      "Internship placement",
      "Visa application guidance",
      "Pre-departure orientation",
      "Cultural integration support",
      "Spanish language resources",
      "24/7 emergency assistance",
    ],
    testimonials: [
      {
        name: "Isabella Rodriguez",
        role: "Hotel Manager at NH Hotels",
        image: "/placeholder.svg?height=60&width=60",
        quote:
          "My hospitality internship in Madrid was life-changing. I improved my Spanish, gained invaluable industry experience, and built a network that helped me secure my current management position. The cultural immersion was incredible!",
      },
      {
        name: "Thomas Mueller",
        role: "Restaurant Operations Manager",
        image: "/placeholder.svg?height=60&width=60",
        quote:
          "The flexibility of the program duration was perfect for my academic schedule. I completed a 4-month internship that gave me hands-on experience in Spanish hospitality culture and excellent professional references.",
      },
    ],
  },
}

export default function ProgramDetailPage({ params }: { params: { id: string } }) {
  const program = programData[params.id as unknown as keyof typeof programData];

  if (!program) {
    return <div>Program not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-96 overflow-hidden">
          <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <div className="text-white space-y-4">
              <div className="flex items-center gap-4">
                <Badge className="bg-blue-600">{program.type}</Badge>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{program.rating}</span>
                  <span className="text-sm opacity-80">({program.reviews} reviews)</span>
                </div>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold">{program.title}</h1>
              <div className="flex items-center gap-6 text-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  {program.location}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  {program.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Starts {program.startDate}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="application">Application</TabsTrigger>
                <TabsTrigger value="testimonials">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Program Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">{program.description}</p>
                    <p className="text-gray-600 leading-relaxed">{program.longDescription}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      Program Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {program.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      What's Included
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {program.included.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="requirements" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Eligibility Requirements</CardTitle>
                    <CardDescription>Make sure you meet all requirements before applying</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {program.requirements.map((requirement, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{requirement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="application" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Application Process</CardTitle>
                    <CardDescription>Follow these steps to complete your application</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {program.applicationProcess.map((step, index) => (
                        <div key={step.step} className="flex items-start gap-4">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                              step.completed ? "bg-green-600 text-white" : "bg-blue-600 text-white"
                            }`}
                          >
                            {step.step}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{step.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="testimonials" className="space-y-6">
                {program.testimonials.map((testimonial, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-gray-600 italic mb-3">"{testimonial.quote}"</p>
                          <div>
                            <p className="font-medium">{testimonial.name}</p>
                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="text-center">Ready to Apply?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{program.cost}</div>
                  <div className="text-sm text-gray-500">Program fee</div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Application Deadline:</span>
                    <span className="font-medium">{program.deadline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Program Start:</span>
                    <span className="font-medium">{program.startDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{program.duration}</span>
                  </div>
                </div>

                {/* <div className="space-y-3">
                  <Button className="w-full" size="lg" asChild>
                    <Link href="/apply">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div> */}

                <div className="pt-4 border-t text-center">
                  <p className="text-sm text-gray-600 mb-2">Questions about this program?</p>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href="/contact">Contact our advisors</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  )
}
