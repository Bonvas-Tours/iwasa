import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, Search, ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: "The Ultimate Guide to Landing Your Dream International Internship in 2024",
    excerpt:
      "Discover the strategies, tips, and insider secrets that successful candidates use to secure competitive international internships. From application preparation to interview success.",
    content:
      "In today's competitive global job market, international internships have become more valuable than ever. They offer unique opportunities to gain cross-cultural experience, develop language skills, and build international networks that can transform your career trajectory...",
    author: "Sarah Mitchell",
    authorRole: "Career Development Specialist",
    authorImage: "/placeholder.svg?height=40&width=40",
    publishDate: "December 15, 2024",
    readTime: "8 min read",
    category: "Career Advice",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["Internships", "Career Development", "International Experience"],
  }

  const blogPosts = [
    {
      id: 2,
      title: "Top 10 Countries for Software Engineering Internships",
      excerpt:
        "Explore the best destinations for tech internships, from Silicon Valley alternatives to emerging tech hubs in Europe and Asia.",
      author: "David Chen",
      authorRole: "Tech Industry Expert",
      authorImage: "/placeholder.svg?height=40&width=40",
      publishDate: "December 12, 2024",
      readTime: "6 min read",
      category: "Technology",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Technology", "Software Engineering", "Global Opportunities"],
    },
    {
      id: 3,
      title: "Cultural Adaptation: Your First 30 Days Abroad",
      excerpt:
        "Essential tips for adjusting to a new culture, overcoming homesickness, and making the most of your international experience.",
      author: "Maria Rodriguez",
      authorRole: "Cultural Integration Specialist",
      authorImage: "/placeholder.svg?height=40&width=40",
      publishDate: "December 10, 2024",
      readTime: "5 min read",
      category: "Cultural Exchange",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Cultural Adaptation", "International Living", "Personal Growth"],
    },
    {
      id: 4,
      title: "Visa Requirements and Application Process: A Complete Guide",
      excerpt:
        "Navigate the complex world of visa applications with our comprehensive guide covering requirements for major destinations.",
      author: "James Wilson",
      authorRole: "Immigration Consultant",
      authorImage: "/placeholder.svg?height=40&width=40",
      publishDate: "December 8, 2024",
      readTime: "10 min read",
      category: "Legal & Visa",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Visa", "Legal Requirements", "Immigration"],
    },
    {
      id: 5,
      title: "Building Your Global Network: Networking Strategies That Work",
      excerpt:
        "Learn how to build meaningful professional relationships during your international program and maintain them long-term.",
      author: "Lisa Thompson",
      authorRole: "Networking Coach",
      authorImage: "/placeholder.svg?height=40&width=40",
      publishDate: "December 5, 2024",
      readTime: "7 min read",
      category: "Professional Development",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Networking", "Professional Growth", "Career Building"],
    },
    {
      id: 6,
      title: "Financial Planning for Your International Program",
      excerpt:
        "Budget effectively for your international experience with our comprehensive financial planning guide and money-saving tips.",
      author: "Robert Kim",
      authorRole: "Financial Advisor",
      authorImage: "/placeholder.svg?height=40&width=40",
      publishDate: "December 3, 2024",
      readTime: "9 min read",
      category: "Finance",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Financial Planning", "Budgeting", "International Living"],
    },
    {
      id: 7,
      title: "Remote Work Opportunities: The Future of International Careers",
      excerpt:
        "Explore how remote work is changing the landscape of international careers and creating new opportunities for global professionals.",
      author: "Emma Davis",
      authorRole: "Future of Work Analyst",
      authorImage: "/placeholder.svg?height=40&width=40",
      publishDate: "November 30, 2024",
      readTime: "6 min read",
      category: "Future of Work",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Remote Work", "Future Trends", "Digital Nomad"],
    },
  ]

  const categories = [
    "All Posts",
    "Career Advice",
    "Technology",
    "Cultural Exchange",
    "Legal & Visa",
    "Professional Development",
    "Finance",
    "Future of Work",
  ]

  const trendingTags = [
    "International Internships",
    "Career Development",
    "Cultural Adaptation",
    "Visa Requirements",
    "Networking",
    "Remote Work",
    "Study Abroad",
    "Professional Growth",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">IWaS Abroad Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Insights, tips, and stories to help you succeed in your international journey. Stay updated with the
              latest trends in global careers and education.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search articles..." className="pl-10" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.slice(0, 5).map((category) => (
                <Button key={category} variant={category === "All Posts" ? "default" : "outline"} size="sm">
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Featured Post */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <Badge className="bg-blue-600">Featured Article</Badge>
              </div>

              <Card className="overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="relative">
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-blue-600">{featuredPost.category}</Badge>
                  </div>
                  <div className="p-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {featuredPost.publishDate}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {featuredPost.readTime}
                        </div>
                      </div>

                      <h2 className="text-2xl font-bold leading-tight">{featuredPost.title}</h2>

                      <p className="text-gray-600 leading-relaxed">{featuredPost.excerpt}</p>

                      <div className="flex items-center gap-3">
                        <Image
                          src={featuredPost.authorImage || "/placeholder.svg"}
                          alt={featuredPost.author}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div>
                          <p className="font-medium text-sm">{featuredPost.author}</p>
                          <p className="text-xs text-gray-600">{featuredPost.authorRole}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {featuredPost.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button className="w-full" asChild>
                        <Link href={`/blog/${featuredPost.id}`}>
                          Read Full Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Recent Posts */}
            <section>
              <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-blue-600">{post.category}</Badge>
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {post.publishDate}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight hover:text-blue-600 transition-colors">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </CardTitle>
                      <CardDescription className="leading-relaxed">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Image
                            src={post.authorImage || "/placeholder.svg"}
                            alt={post.author}
                            width={32}
                            height={32}
                            className="rounded-full"
                          />
                          <div>
                            <p className="font-medium text-sm">{post.author}</p>
                            <p className="text-xs text-gray-600">{post.authorRole}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {post.tags.length > 2 && (
                            <Badge variant="secondary" className="text-xs">
                              +{post.tags.length - 2}
                            </Badge>
                          )}
                        </div>

                        <Button variant="outline" className="w-full" asChild>
                          <Link href={`/blog/${post.id}`}>Read More</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Newsletter Signup */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Stay Updated</CardTitle>
                <CardDescription>Get the latest insights and opportunities delivered to your inbox.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Enter your email" type="email" />
                <Button className="w-full">Subscribe to Newsletter</Button>
                <p className="text-xs text-gray-600">Join 10,000+ professionals who get our weekly insights.</p>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button key={category} variant="ghost" className="w-full justify-start text-sm" asChild>
                      <Link href={`/blog/category/${category.toLowerCase().replace(" ", "-")}`}>{category}</Link>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trending Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Trending Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {trendingTags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs cursor-pointer hover:bg-blue-50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Popular This Week</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post, index) => (
                    <div key={post.id} className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium leading-tight mb-1">
                          <Link href={`/blog/${post.id}`} className="hover:text-blue-600">
                            {post.title}
                          </Link>
                        </h4>
                        <p className="text-xs text-gray-600">{post.readTime}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
