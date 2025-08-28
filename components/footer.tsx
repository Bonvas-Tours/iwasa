import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Globe, Mail, Phone, MapPin, Facebook,  Instagram, Linkedin,  ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const programs = [
    { name: "Internships", href: "/programs?type=internship" },
    { name: "Work Placements", href: "/programs?type=work" },
    { name: "Study Abroad", href: "/programs?type=study" },
    { name: "All Programs", href: "/programs" },
  ]

  const resources = [
    { name: "Success Stories", href: "/success-stories" },
    { name: "Blog & Insights", href: "/blog" },
    { name: "Application Guide", href: "/guide" },
    { name: "Visa Information", href: "/visa-info" },
    { name: "FAQs", href: "/faq" },
  ]

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Our Mission", href: "/about#mission" },
    { name: "Team", href: "/about#team" },
    { name: "Careers", href: "/careers" },
  ]

  const support = [
    { name: "Contact Us", href: "/contact" },
    { name: "Help Center", href: "/help" },
    { name: "Student Support", href: "/support" },
    { name: "Emergency Contact", href: "/emergency" },
  ]

  const destinations = [
    "Germany",
    "United Kingdom",
    "Canada",
    "Australia",
    "Japan",
    "Singapore",
    "Netherlands",
    "France",
    "Italy",
    "Spain",
    "United States",
    "New Zealand",
    "Switzerland",
    "Thailand",
    "Portugal",
    "Greece",
    "Norway",
    "Sweden",
    "Denmark",
    "Austria",
    "Belgium",
    "Ireland",
    "Iceland",
    "Malaysia",
    "Vietnam",
    "Indonesia",
    "Brazil",
    "Argentina",
    "Chile",
    "Mexico",
    "Costa Rica",
    "Turkey",
    "Qatar",
    "Morocco",
    "India",
    "China",
    "Hong Kong",
    "Taiwan",
    "Philippines",
    "Czech Republic",
    "Hungary",
    "Poland",
    "Croatia",
    "Finland",
    "Tanzania",
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl lg:text-3xl font-bold">Stay Connected with Global Opportunities</h2>
              <p className="text-gray-400 text-lg">
                Get the latest program updates, success stories, and career insights delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button className="bg-blue-600 hover:bg-blue-700">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              Join 10,000+ professionals who get our weekly insights. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo-white.png" width={70} alt="Iwasa Logo" height={50} />
            </Link>

            <p className="text-gray-400 leading-relaxed">
              Empowering global careers through transformative international experiences. We connect ambitious
              individuals with life-changing opportunities worldwide.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>iwasa@bonvastours.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+233 (531) 085-235</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5" />
                <span>
                 Ecocent Road, Ayigya
                </span>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button size="sm" variant="outline" className="bg-transparent border-gray-700 hover:bg-gray-800">
                <Link href="https://facebook.com/bonvastours" target="_blank">
                  <Facebook className="h-4 w-4" /> 
                </Link>
              </Button>
              <Button size="sm" variant="outline" className="bg-transparent border-gray-700 hover:bg-gray-800">
                <Link href="https://instagram.com/bonvastours" target="_blank">
                  <Instagram className="h-4 w-4" />
                </Link>
               
              </Button>
              <Button size="sm" variant="outline" className="bg-transparent border-gray-700 hover:bg-gray-800">
                <Link href="https://linkedin.com/company/bonvas-tours" target="_blank">
                  <Linkedin className="h-4 w-4" />
                </Link>
               
              </Button>

            </div>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Programs</h3>
            <ul className="space-y-2">
              {programs.map((item) => (
                <li key={item.name}>
                  <Link
                    // href={item.href}
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link
                    // href={item.href}
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    // href={item.href}
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    // href={item.href}
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Popular Destinations */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="font-semibold text-lg mb-4">Popular Destinations</h3>
          <div className="flex flex-wrap gap-2">
            {destinations.map((destination) => (
              <Badge
                key={destination}
                variant="outline"
                className="border-gray-700 text-gray-400 hover:bg-gray-800 cursor-pointer"
              >
                {destination}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
              <span>&copy; {currentYear} IWaS Abroad. All rights reserved.</span>
              <span className="hidden md:inline">|</span>
              <span>A proud initiative of Bonvas Tours Limited</span>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
