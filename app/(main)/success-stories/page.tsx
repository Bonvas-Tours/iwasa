import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Calendar, Quote, ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SuccessStoriesPage() {
  const stories = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Software Developer at Spotify",
      program: "Software Engineering Internship",
      location: "Berlin, Germany",
      year: "2023",
      image: "/placeholder.svg?height=300&width=300",
      quote:
        "The Berlin internship completely transformed my career. I learned more in 6 months than I did in my entire university program. The mentorship was incredible, and I'm now working full-time at one of Europe's top tech companies.",
      fullStory:
        "When I first applied to the IWaS Abroad program, I was a computer science student with limited real-world experience. The Berlin internship placed me at a cutting-edge fintech startup where I worked on their mobile payment platform. The experience was challenging but incredibly rewarding. My mentor, a senior engineer, guided me through complex projects and helped me develop both technical and soft skills. The cultural immersion was equally valuable - living in Berlin opened my eyes to different perspectives and approaches to problem-solving. After completing the internship, I received multiple job offers, including one from Spotify where I now work as a full-stack developer.",
      achievements: [
        "Secured full-time position at Spotify",
        "Contributed to 3 major product releases",
        "Mentored 5 junior developers",
        "Fluent in German",
      ],
      rating: 5,
      videoUrl: "#",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Investment Analyst at Goldman Sachs",
      program: "Finance Work Experience",
      location: "Singapore",
      year: "2022",
      image: "/placeholder.svg?height=300&width=300",
      quote:
        "The Singapore program gave me exposure to Asian markets that I never would have gotten elsewhere. The networking opportunities were incredible, and the skills I developed landed me my dream job on Wall Street.",
      fullStory:
        "My journey with IWaS Abroad began when I was looking to gain international finance experience. The Singapore program exceeded all my expectations. I worked at a leading investment bank, analyzing market trends and supporting senior analysts on major deals. The fast-paced environment pushed me to excel, and I quickly learned to navigate complex financial instruments and market dynamics. The multicultural aspect of Singapore's financial district was fascinating - I worked with colleagues from over 20 countries, each bringing unique perspectives to our team. The program also included professional development workshops and networking events that connected me with industry leaders.",
      achievements: [
        "Promoted to Senior Analyst within 1 year",
        "Led analysis for $500M+ deals",
        "CFA Level 2 candidate",
        "Expanded network across 3 continents",
      ],
      rating: 5,
      videoUrl: "#",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Marketing Manager at Unilever",
      program: "Digital Marketing Internship",
      location: "Sydney, Australia",
      year: "2023",
      image: "/placeholder.svg?height=300&width=300",
      quote:
        "Australia taught me so much about global marketing strategies. The hands-on experience with international campaigns and the mentorship I received were game-changers for my career.",
      fullStory:
        "As a marketing student, I wanted to understand how global brands operate in different markets. The Sydney internship at a top digital agency was perfect for this. I worked on campaigns for major Australian and international brands, learning about cultural nuances in marketing and how to adapt strategies for different audiences. The agency's collaborative culture encouraged creativity and innovation. I led a social media campaign that increased client engagement by 150%, which became a case study for the agency. The experience also taught me about work-life balance - Australians have a great approach to maintaining productivity while enjoying life.",
      achievements: [
        "Campaign increased engagement by 150%",
        "Certified in Google Ads and Analytics",
        "Managed $100K+ advertising budgets",
        "Fluent in digital marketing tools",
      ],
      rating: 5,
      videoUrl: "#",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Research Scientist at Toyota",
      program: "Engineering Research Program",
      location: "Tokyo, Japan",
      year: "2022",
      image: "/placeholder.svg?height=300&width=300",
      quote:
        "Working in Japan's automotive industry was a dream come true. The precision, innovation, and attention to detail I learned there have made me a better engineer and researcher.",
      fullStory:
        "The opportunity to work at Toyota's research facility in Tokyo was incredible. I was part of a team developing next-generation battery technology for electric vehicles. The Japanese work culture emphasized continuous improvement (kaizen) and attention to detail, which significantly improved my research methodology. I learned to approach problems systematically and collaborate effectively in a multicultural team. The language barrier was initially challenging, but the company provided Japanese lessons, and I became conversational by the end of my program. The experience also included cultural activities and visits to other automotive facilities, giving me a comprehensive understanding of Japan's industrial excellence.",
      achievements: [
        "Co-authored 2 research papers",
        "Patent application filed",
        "Conversational in Japanese",
        "Expertise in battery technology",
      ],
      rating: 5,
      videoUrl: "#",
    },
    {
      id: 5,
      name: "Priya Patel",
      role: "Healthcare Administrator at NHS",
      program: "Healthcare Work Placement",
      location: "London, UK",
      year: "2023",
      image: "/placeholder.svg?height=300&width=300",
      quote:
        "The UK healthcare system taught me so much about patient care and healthcare management. The experience shaped my understanding of global health challenges and solutions.",
      fullStory:
        "My placement with the NHS was both challenging and rewarding. I worked in hospital administration, learning about healthcare delivery in one of the world's most comprehensive health systems. The experience exposed me to different approaches to patient care, resource management, and healthcare policy. I was involved in quality improvement projects and learned about evidence-based healthcare practices. The multicultural environment of London's hospitals was fascinating - treating patients from diverse backgrounds taught me about cultural sensitivity in healthcare. The program also included rotations through different departments, giving me a holistic view of healthcare operations.",
      achievements: [
        "Led quality improvement initiative",
        "Reduced patient wait times by 20%",
        "Certified in healthcare management",
        "Published in healthcare journal",
      ],
      rating: 5,
      videoUrl: "#",
    },
    {
      id: 6,
      name: "Alex Thompson",
      role: "UX Designer at Shopify",
      program: "Design Internship",
      location: "Toronto, Canada",
      year: "2022",
      image: "/placeholder.svg?height=300&width=300",
      quote:
        "Canada's tech scene is incredible. The collaborative culture and focus on user-centered design principles I learned there have been fundamental to my success as a UX designer.",
      fullStory:
        "The Toronto design internship introduced me to Canada's thriving tech ecosystem. I worked at a design agency that specialized in e-commerce platforms, where I learned about user research, prototyping, and design thinking. The Canadian approach to design emphasized inclusivity and accessibility, which broadened my perspective on creating products for diverse users. I worked on projects for clients ranging from startups to Fortune 500 companies, each with unique challenges and requirements. The mentorship program paired me with a senior designer who helped me develop both technical skills and design intuition. Toronto's multicultural environment also influenced my design thinking, teaching me to consider global perspectives in user experience.",
      achievements: [
        "Designed award-winning mobile app",
        "Increased user engagement by 40%",
        "Certified UX professional",
        "Built portfolio of 15+ projects",
      ],
      rating: 5,
      videoUrl: "#",
    },
  ]

  const stats = [
    { number: "2,500+", label: "Alumni Worldwide" },
    { number: "95%", label: "Career Advancement" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "50+", label: "Countries Represented" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">Success Stories That Inspire</h1>
            <p className="text-xl text-blue-100">
              Discover how our alumni have transformed their careers through international experiences. Their journeys
              could be your roadmap to success.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-1">{stat.number}</div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Featured Story</Badge>
              <h2 className="text-3xl font-bold mb-4">From Student to Industry Leader</h2>
            </div>

            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative">
                  <Image
                    src={stories[0].image || "/placeholder.svg"}
                    alt={stories[0].name}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <Button
                    size="lg"
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
                  >
                    <Play className="h-6 w-6 text-white ml-1" />
                  </Button>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <Quote className="h-8 w-8 text-blue-600 mb-4" />
                      <blockquote className="text-lg text-gray-600 italic mb-6">&quot;{stories[0].quote}&quot;</blockquote>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{stories[0].name}</h3>
                      <p className="text-blue-600 font-medium">{stories[0].role}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {stories[0].location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {stories[0].year}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {stories[0].achievements.slice(0, 3).map((achievement, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full" asChild>
                      <Link href={`/success-stories/${stories[0].id}`}>
                        Read Full Story
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* All Stories Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">More Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every story is unique, but they all share one thing in common: the transformative power of international
              experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.slice(1).map((story) => (
              <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600">{story.program}</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{story.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{story.role}</CardDescription>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {story.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {story.year}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-sm text-gray-600 italic mb-4 line-clamp-3">&quot;{story.quote}&quot;</blockquote>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {story.achievements.slice(0, 2).map((achievement, index) => (
                          <li key={index} className="text-xs text-gray-600 flex items-center gap-2">
                            <div className="w-1 h-1 bg-blue-600 rounded-full" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full" variant="outline" asChild>
                      <Link href={`/success-stories/${story.id}`}>Read Full Story</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-blue-100">
              Join thousands of professionals who have transformed their careers through our programs. Your journey to
              international success starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold" asChild>
                <Link href="/programs">
                  Explore Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                asChild
              >
                <Link href="/apply">Start Application</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
