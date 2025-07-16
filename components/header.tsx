"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Badge } from "@/components/ui/badge"
import { Menu, Globe, GraduationCap, Briefcase, Users, Phone, ArrowRight } from "lucide-react"
import Image from "next/image"


export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const programs = [
    {
      title: "Internships",
      description: "Gain hands-on experience with leading companies worldwide",
      icon: Briefcase,
      href: "/programs?type=internship",
    },
    {
      title: "Work Placements",
      description: "Professional work experience in your field of expertise",
      icon: Users,
      href: "/programs?type=work",
    },
    {
      title: "Study Abroad",
      description: "Academic programs at top universities globally",
      icon: GraduationCap,
      href: "/programs?type=study",
    },
  ]

  const resources = [
    {
      title: "Success Stories",
      description: "Read inspiring stories from our alumni",
      href: "/success-stories",
    },
    // {
    //   title: "Blog & Insights",
    //   description: "Latest trends and tips for international careers",
    //   href: "/blog",
    // },
    {
      title: "Application Guide",
      description: "Step-by-step guide to applying for programs",
      href: "/guide",
    },
    {
      title: "Visa Information",
      description: "Comprehensive visa requirements and processes",
      href: "/visa-info",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" width={70} alt="Iwasa Logo" height={50} />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem className="hover:!bg-transparent">
                <NavigationMenuTrigger className="bg-transparent hover:!bg-transparent hover:text-blue-700">Programs</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                    <div className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          // href="Program"
                          href="/"
                          className="relative flex h-full w-full select-none flex-col justify-end rounded-md overflow-hidden p-6 no-underline outline-none focus:shadow-md text-white"
                        >
                          {/* Background image */}
                          <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('/general.jpg')" }}
                          />

                          {/* Blue gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-blue-600 opacity-90" />

                          {/* Foreground content */}
                          <div className="relative z-10">
                            <Globe className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">All Programs</div>
                            <p className="text-sm leading-tight text-blue-100">
                              Explore all our international opportunities across 50+ countries
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    {programs.map((program) => (
                      <NavigationMenuLink key={program.title} asChild>
                        <Link
                          // href={program.href}
                          href="/"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="flex items-center gap-2">
                            <program.icon className="h-4 w-4" />
                            <div className="text-sm font-medium leading-none">{program.title}</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {program.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:!bg-transparent hover:text-blue-700">Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {resources.map((resource) => (
                      <NavigationMenuLink key={resource.title} asChild>
                        <Link
                          // href={resource.href}
                          href="/"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{resource.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {resource.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="bg-transparent hover:bg-transparent hover:text-blue-700"  asChild>
                  <Link
                    href="/about"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="bg-transparent" asChild>
              <Link href="/contact">
                <Phone className="mr-2 h-4 w-4" />
                Consult Now
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link
                // href="/apply"
                href="/"
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-auto">
              <div className="flex flex-col space-y-6 mt-6">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <Image src="/logo.png" width={70} alt="Iwasa Logo" height={50} />
                </Link>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-sm text-gray-900 mb-3">Programs</h3>
                    <div className="space-y-2">
                      {programs.map((program) => (
                        <Link
                          key={program.title}
                          href={program.href}
                          className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <program.icon className="h-4 w-4 text-blue-600" />
                          <div>
                            <div className="font-medium text-sm">{program.title}</div>
                            <div className="text-xs text-gray-600">{program.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-sm text-gray-900 mb-3">Resources</h3>
                    <div className="space-y-2">
                      {resources.map((resource) => (
                        <Link
                          key={resource.title}
                          // href={resource.href}
                          href="/"
                          className="block p-2 rounded-md hover:bg-gray-100 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="font-medium text-sm">{resource.title}</div>
                          <div className="text-xs text-gray-600">{resource.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Link
                      href="/"
                      className="block p-2 rounded-md hover:bg-gray-100 transition-colors font-medium text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      About
                    </Link>
                  </div>
                </div>

                <div className="space-y-3 pt-6 border-t">
                  <Button className="w-full" asChild>
                    <Link href="/" onClick={() => setIsOpen(false)}>
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      <Phone className="mr-2 h-4 w-4" />
                      Consult Now
                    </Link>
                  </Button>
                </div>

                <div className="pt-4 border-t">
                  <Badge variant="outline" className="text-xs">
                    <Globe className="w-3 h-3 mr-1" />
                    50+ Countries Available
                  </Badge>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
