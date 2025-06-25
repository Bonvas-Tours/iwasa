"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Clock, Star, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProgramsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedDuration, setSelectedDuration] = useState("all")

  const programs = [
    {
      id: 1,
      title: "Software Engineering Internship",
      location: "Berlin, Germany",
      country: "germany",
      duration: "6 months",
      durationType: "medium",
      type: "internship",
      rating: 4.9,
      reviews: 127,
      image: "/placeholder.svg?height=200&width=300",
      description: "Gain hands-on experience in cutting-edge software development with leading tech companies.",
      benefits: ["Paid internship", "Visa support", "Housing assistance", "Mentorship program"],
      deadline: "March 15, 2024",
    },
    {
      id: 2,
      title: "International Business Studies",
      location: "London, UK",
      country: "uk",
      duration: "1 year",
      durationType: "long",
      type: "study",
      rating: 4.8,
      reviews: 89,
      image: "/placeholder.svg?height=200&width=300",
      description: "Master global business strategies at world-renowned universities.",
      benefits: ["Scholarship opportunities", "Industry connections", "Career placement", "Cultural immersion"],
      deadline: "April 30, 2024",
    },
    {
      id: 3,
      title: "Healthcare Work Placement",
      location: "Toronto, Canada",
      country: "canada",
      duration: "12 months",
      durationType: "long",
      type: "work",
      rating: 4.9,
      reviews: 156,
      image: "/placeholder.svg?height=200&width=300",
      description: "Advance your healthcare career with international experience in top medical facilities.",
      benefits: ["Professional certification", "Competitive salary", "Healthcare benefits", "Immigration pathway"],
      deadline: "February 28, 2024",
    },
    {
      id: 4,
      title: "Digital Marketing Internship",
      location: "Sydney, Australia",
      country: "australia",
      duration: "4 months",
      durationType: "medium",
      type: "internship",
      rating: 4.7,
      reviews: 93,
      image: "/placeholder.svg?height=200&width=300",
      description: "Learn cutting-edge digital marketing strategies with Australia's top agencies.",
      benefits: ["Portfolio development", "Industry certification", "Networking events", "Travel allowance"],
      deadline: "May 15, 2024",
    },
    {
      id: 5,
      title: "Engineering Research Program",
      location: "Tokyo, Japan",
      country: "japan",
      duration: "8 months",
      durationType: "medium",
      type: "study",
      rating: 4.8,
      reviews: 74,
      image: "/placeholder.svg?height=200&width=300",
      description: "Participate in groundbreaking engineering research at leading Japanese institutions.",
      benefits: ["Research stipend", "Language training", "Cultural program", "Publication opportunities"],
      deadline: "January 31, 2024",
    },
    {
      id: 6,
      title: "Finance Work Experience",
      location: "Singapore",
      country: "singapore",
      duration: "6 months",
      durationType: "medium",
      type: "work",
      rating: 4.9,
      reviews: 112,
      image: "/placeholder.svg?height=200&width=300",
      description: "Gain valuable experience in Asia's financial hub with top investment firms.",
      benefits: [
        "Competitive compensation",
        "Professional development",
        "Networking opportunities",
        "Career advancement",
      ],
      deadline: "March 30, 2024",
    },
  ]

  const filteredPrograms = programs.filter((program) => {
    const matchesSearch =
      program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCountry = selectedCountry === "all" || program.country === selectedCountry
    const matchesType = selectedType === "all" || program.type === selectedType
    const matchesDuration = selectedDuration === "all" || program.durationType === selectedDuration

    return matchesSearch && matchesCountry && matchesType && matchesDuration
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">International Programs</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover life-changing opportunities across the globe. Filter by location, type, and duration to find your
              perfect match.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative lg:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search programs or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger>
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Countries</SelectItem>
                <SelectItem value="germany">Germany</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="canada">Canada</SelectItem>
                <SelectItem value="australia">Australia</SelectItem>
                <SelectItem value="japan">Japan</SelectItem>
                <SelectItem value="singapore">Singapore</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Program Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="internship">Internship</SelectItem>
                <SelectItem value="work">Work Placement</SelectItem>
                <SelectItem value="study">Study Abroad</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedDuration} onValueChange={setSelectedDuration}>
              <SelectTrigger>
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Durations</SelectItem>
                <SelectItem value="short">1-3 months</SelectItem>
                <SelectItem value="medium">4-8 months</SelectItem>
                <SelectItem value="long">9+ months</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">
              Showing {filteredPrograms.length} of {programs.length} programs
            </p>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <Card key={program.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600 capitalize">{program.type}</Badge>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-sm font-medium">
                    Deadline: {program.deadline}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg leading-tight">{program.title}</CardTitle>
                    <div className="flex items-center gap-1 ml-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{program.rating}</span>
                      <span className="text-xs text-gray-500">({program.reviews})</span>
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
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Key Benefits:</h4>
                      <div className="flex flex-wrap gap-1">
                        {program.benefits.slice(0, 2).map((benefit, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                        {program.benefits.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{program.benefits.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    <Button className="w-full" asChild>
                      <Link href={`/programs/${program.id}`}>View Details & Apply</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No programs match your current filters.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCountry("all")
                  setSelectedType("all")
                  setSelectedDuration("all")
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
