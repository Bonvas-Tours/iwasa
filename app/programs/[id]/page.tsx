import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Clock,
  Star,
  Calendar,
  CheckCircle,
  ArrowRight,
  Award,
  BookOpen,
 
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { sanityClient } from "@/lib/sanity.client"
import { programBySlugQuery } from "@/lib/sanity.queries"

type ProgramDetail = {
  title: string
  type: string
  location?: string
  duration?: string
  startDate?: string
  rating?: number
  reviews?: number
  imageUrl?: string
  description?: string
  longDescription?: string
  benefits?: string[]
  requirements?: string[]
  applicationProcess?: { step: number; title: string; description: string; completed: boolean }[]
  deadline?: string
  cost?: string
  excluded?: string[]
  testimonials?: { name: string; role: string; quote: string; imageUrl?: string }[]
}


export default async function ProgramDetailPage({ params }: { params: { id: string } }) {
  const program: ProgramDetail | null = await sanityClient.fetch(programBySlugQuery, { slug: params.id });

  if (!program) {
    return <div>Program not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-96 overflow-hidden">
          <Image src={program.imageUrl || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
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
                  Starts: {program.startDate}
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
                      {(program.benefits as string[]).map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                {program.excluded && program.excluded.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      What&apos;s Excluded
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {program.excluded ? (
                        program.excluded.map((item: string, index: number) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))
                      ) : null}
                    </div>
                  </CardContent>
                </Card>
                )}
              </TabsContent>

              <TabsContent value="requirements" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Eligibility Requirements</CardTitle>
                    <CardDescription>Make sure you meet all requirements before applying</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {(program.requirements as string[]).map((requirement, index) => (
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
                      {(program.applicationProcess as { step: number; title: string; description: string; completed: boolean }[]).map((step, index) => (
                        <div key={index} className="flex items-start gap-4">
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
                {(program.testimonials as { name: string; role: string; quote: string; imageUrl?: string }[]).map((testimonial, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <Image
                          src={testimonial.imageUrl || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-gray-600 italic mb-3"><q>{testimonial.quote}</q></p>
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

                <div className="space-y-3">
                  <Button className="w-full" size="lg" asChild>
                    <Link href="/apply">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

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
