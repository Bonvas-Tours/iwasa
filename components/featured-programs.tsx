import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin, Clock, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { sanityClient } from "@/lib/sanity.client"
import { featuredProgramsQuery } from "@/lib/sanity.queries"

export default async function FeaturedPrograms() {
  const featuredPrograms = await sanityClient.fetch(featuredProgramsQuery)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Featured Programs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular international opportunities designed to transform your career.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPrograms.map((program: any) => (
            <Card key={program._id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src={program.imageUrl || "/placeholder.svg"}
                  alt={program.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600">{program.type}</Badge>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{program.title}</CardTitle>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{program.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {program.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {program.duration}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">{program.description}</CardDescription>
                <Button className="w-full" asChild>
                  <Link href={`/programs/${program.slug}`}>View Details & Apply</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/programs">
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
