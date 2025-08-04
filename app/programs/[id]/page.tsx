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

const programData = {
  1: {
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
  2: {
    title: "UK Schools Bronze Package",
    location: "United Kingdom",
    duration: "3 months validity",
    type: "Study Package",
    rating: 4.6,
    reviews: 45,
    image: "/program/bronze.jpg",
    description:
      "Essential support for UK university applications with professional guidance and assistance. Perfect for students seeking basic application support for their UK education journey.",
    longDescription:
      "The Bronze Package provides fundamental support for students applying to UK universities. This package includes professional application assistance for up to 2 universities, covering over 20 countries for international students. Our experienced team will guide you through the application process, ensuring your applications meet UK university standards and requirements.",
    benefits: [
      "2 university applications",
      "Professional application support",
      "Coverage for 20+ countries",
      "3 months package validity",
      "80% down payment option",
      "2% discount on flight tickets",
      "Expert guidance throughout process",
      "Application review and optimization",
    ],
    requirements: [
      "High school diploma or equivalent",
      "English language proficiency (IELTS/TOEFL)",
      "Academic transcripts",
      "Personal statement",
      "Letters of recommendation",
      "Valid passport",
      "Financial documentation",
    ],
    applicationProcess: [
      {
        step: 1,
        title: "Package Selection",
        description: "Choose Bronze package and make payment",
        completed: false,
      },
      {
        step: 2,
        title: "Document Collection",
        description: "Gather all required academic documents",
        completed: false,
      },
      {
        step: 3,
        title: "University Selection",
        description: "Choose 2 universities with our guidance",
        completed: false,
      },
      {
        step: 4,
        title: "Application Preparation",
        description: "Prepare and review applications",
        completed: false,
      },
      {
        step: 5,
        title: "Application Submission",
        description: "Submit applications to universities",
        completed: false,
      },
      { step: 6, title: "Follow-up Support", description: "Track applications and provide updates", completed: false },
    ],
    deadline: "Rolling admissions",
    startDate: "Immediate start upon enrollment",
    cost: "$1,800",
    paymentOptions: [
      {
        option: "Down Payment",
        percentage: "80%",
        amount: "$1,440",
        description: "Pay 80% upfront, remaining 20% before application submission",
      },
    ],
    included: [
      "2 university applications",
      "Application support and guidance",
      "Document review and optimization",
      "University selection assistance",
      "Application tracking",
      "2% flight ticket discount",
    ],
    testimonials: [
      {
        name: "Ahmed Hassan",
        role: "University of Manchester Student",
        image: "/placeholder.svg?height=60&width=60",
        quote:
          "The Bronze package was perfect for my needs. The team helped me with my applications to two great universities, and I got accepted to both! The process was smooth and professional.",
      },
    ],
  },
  3: {
    title: "UK Schools Silver Package",
    location: "United Kingdom",
    duration: "6 months validity",
    type: "Study Package",
    rating: 4.7,
    reviews: 62,
    image: "/program/silver.jpg",
    description:
      "Comprehensive UK university application support with visa assistance and documentation help. Ideal for students who need additional support beyond basic applications.",
    longDescription:
      "The Silver Package offers enhanced support for UK university applications, including visa assistance and comprehensive documentation support. This package covers 3 university applications with professional guidance, visa application assistance, and a robust refund policy. Perfect for students who want additional security and support throughout their application journey.",
    benefits: [
      "3 university applications",
      "Professional application support",
      "Coverage for 20+ countries",
      "Visa application assistance",
      "Documentation support",
      "6 months package validity",
      "Active refund policy",
      "60% down payment option",
      "3% discount on flight tickets",
    ],
    requirements: [
      "High school diploma or equivalent",
      "English language proficiency (IELTS/TOEFL)",
      "Academic transcripts",
      "Personal statement",
      "Letters of recommendation",
      "Valid passport",
      "Financial documentation",
      "Visa application documents",
    ],
    applicationProcess: [
      {
        step: 1,
        title: "Package Selection",
        description: "Choose Silver package and make payment",
        completed: false,
      },
      {
        step: 2,
        title: "Document Collection",
        description: "Gather all required academic and visa documents",
        completed: false,
      },
      {
        step: 3,
        title: "University Selection",
        description: "Choose 3 universities with our expert guidance",
        completed: false,
      },
      {
        step: 4,
        title: "Application Preparation",
        description: "Prepare and review applications and documents",
        completed: false,
      },
      {
        step: 5,
        title: "Application Submission",
        description: "Submit applications to universities",
        completed: false,
      },
      { step: 6, title: "Visa Assistance", description: "Support with visa application process", completed: false },
    ],
    deadline: "Rolling admissions",
    startDate: "Immediate start upon enrollment",
    cost: "$2,550",
    paymentOptions: [
      {
        option: "Down Payment",
        percentage: "60%",
        amount: "$1,530",
        description: "Pay 60% upfront, remaining 40% before application submission",
      },
    ],
    included: [
      "3 university applications",
      "Application support and guidance",
      "Visa application assistance",
      "Documentation support",
      "University selection assistance",
      "Application tracking",
      "Active refund policy",
      "3% flight ticket discount",
    ],
    testimonials: [
      {
        name: "Maria Santos",
        role: "King's College London Student",
        image: "/placeholder.svg?height=60&width=60",
        quote:
          "The Silver package was exactly what I needed. The visa assistance was invaluable, and having 3 application options gave me confidence. I'm now studying at my dream university in London!",
      },
    ],
  },
  4: {
    title: "UK Schools Gold Package",
    location: "United Kingdom",
    duration: "12 months validity",
    type: "Study Package",
    rating: 4.9,
    reviews: 78,
    image: "/program/gold.jpg",
    description:
      "Premium UK university application package with guaranteed admissions and comprehensive support. The ultimate package for students who want maximum support and guaranteed results.",
    longDescription:
      "The Gold Package is our premium offering, providing comprehensive support for UK university applications with guaranteed admissions. This package includes 5 university applications, financial aid and scholarship support, travel insurance, accommodation search assistance, and much more. With 12 months validity and extensive benefits, this package ensures your success in securing admission to a UK university.",
    benefits: [
      "5 university applications",
      "Guaranteed admissions",
      "Professional application support",
      "Coverage for 20+ countries",
      "Visa application assistance",
      "Documentation support",
      "Financial aid support",
      "Scholarship support",
      "12 months package validity",
      "Active refund policy",
      "Travel insurance included",
      "Accommodation search support",
      "1-month valid bus pass",
      "40% down payment option",
      "5% discount on flight tickets",
    ],
    requirements: [
      "High school diploma or equivalent",
      "English language proficiency (IELTS/TOEFL)",
      "Academic transcripts",
      "Personal statement",
      "Letters of recommendation",
      "Valid passport",
      "Financial documentation",
      "Visa application documents",
    ],
    applicationProcess: [
      {
        step: 1,
        title: "Package Selection",
        description: "Choose Gold package and make payment",
        completed: false,
      },
      {
        step: 2,
        title: "Comprehensive Assessment",
        description: "Complete academic and career assessment",
        completed: false,
      },
      {
        step: 3,
        title: "University Selection",
        description: "Choose 5 universities with guaranteed admission strategy",
        completed: false,
      },
      {
        step: 4,
        title: "Application Preparation",
        description: "Prepare optimized applications and documents",
        completed: false,
      },
      {
        step: 5,
        title: "Scholarship Applications",
        description: "Apply for financial aid and scholarships",
        completed: false,
      },
      {
        step: 6,
        title: "Visa & Travel Support",
        description: "Complete visa process and travel arrangements",
        completed: false,
      },
    ],
    deadline: "Rolling admissions",
    startDate: "Immediate start upon enrollment",
    cost: "$3,700",
    paymentOptions: [
      {
        option: "Down Payment",
        percentage: "40%",
        amount: "$1,480",
        description: "Pay 40% upfront, remaining 60% in installments",
      },
    ],
    included: [
      "5 university applications",
      "Guaranteed admissions",
      "Application support and guidance",
      "Visa application assistance",
      "Documentation support",
      "Financial aid support",
      "Scholarship application support",
      "Travel insurance",
      "Accommodation search support",
      "1-month bus pass",
      "Active refund policy",
      "5% flight ticket discount",
    ],
    testimonials: [
      {
        name: "David Kim",
        role: "Oxford University Student",
        image: "/placeholder.svg?height=60&width=60",
        quote:
          "The Gold package exceeded all my expectations. Not only did I get into my top choice university, but I also received a scholarship that covered most of my tuition. The comprehensive support was incredible!",
      },
      {
        name: "Priya Patel",
        role: "Imperial College London Student",
        image: "/placeholder.svg?height=60&width=60",
        quote:
          "The guaranteed admission promise was fulfilled perfectly. The team helped me with everything from applications to finding accommodation. The Gold package is worth every penny for the peace of mind it provides.",
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
