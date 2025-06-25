"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  Globe,
  Users,
  BookOpen,
  Briefcase,
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    inquiry: "",
    message: "",
    preferredContact: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Contact form submitted:", formData)
  }

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "iwasa@bonvastours.com",
      description: "Get a response within 24 hours",
      action: "Send Email",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+233 (531) 085-235",
      description: "Mon-Fri, 9AM-5PM GMT",
      action: "Call Now",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Ecocent Road, Ayigya",
      description: "Schedule an appointment",
      action: "Get Directions",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      details: "Available 24/7",
      description: "Instant support for urgent queries",
      action: "Start Chat",
    },
  ]

  const departments = [
    {
      name: "Admissions Team",
      email: "admissions@iwasabroad.com",
      phone: "+1 (555) 123-4567",
      specialties: ["Program Applications", "Eligibility Requirements", "Application Process"],
    },
    {
      name: "Student Support",
      email: "support@iwasabroad.com",
      phone: "+1 (555) 123-4568",
      specialties: ["Visa Assistance", "Housing Support", "Emergency Help"],
    },
    {
      name: "Career Services",
      email: "careers@iwasabroad.com",
      phone: "+1 (555) 123-4569",
      specialties: ["Job Placement", "Career Counseling", "Alumni Network"],
    },
    {
      name: "Finance Team",
      email: "finance@iwasabroad.com",
      phone: "+1 (555) 123-4570",
      specialties: ["Payment Plans", "Scholarships", "Financial Aid"],
    },
  ]

  const faqs = [
    {
      question: "How long does the application process take?",
      answer:
        "The typical application process takes 2-4 weeks from submission to decision, depending on the program and time of year.",
    },
    {
      question: "Do you provide visa assistance?",
      answer:
        "Yes, we provide comprehensive visa support including document preparation, application guidance, and interview preparation.",
    },
    {
      question: "What are the age requirements for programs?",
      answer:
        "Most programs are open to participants aged 18-35, though specific requirements may vary by program and destination country.",
    },
    {
      question: "Are scholarships available?",
      answer:
        "We offer various scholarship opportunities based on academic merit, financial need, and program-specific criteria.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">Get in Touch</h1>
            <p className="text-xl text-blue-100">
              Have questions about our programs? Need guidance on your application? Our expert team is here to help you
              every step of the way.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Badge className="bg-white/20 text-white border-white/30">
                <Clock className="w-4 h-4 mr-2" />
                24/7 Support Available
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30">
                <Globe className="w-4 h-4 mr-2" />
                Global Reach
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30">
                <Users className="w-4 h-4 mr-2" />
                Expert Advisors
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => updateFormData("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                      <Select
                        value={formData.preferredContact}
                        onValueChange={(value) => updateFormData("preferredContact", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select preference" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Phone</SelectItem>
                          <SelectItem value="either">Either</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="inquiry">Inquiry Type *</Label>
                      <Select value={formData.inquiry} onValueChange={(value) => updateFormData("inquiry", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Information</SelectItem>
                          <SelectItem value="programs">Program Details</SelectItem>
                          <SelectItem value="application">Application Process</SelectItem>
                          <SelectItem value="visa">Visa & Legal</SelectItem>
                          <SelectItem value="finance">Financial & Scholarships</SelectItem>
                          <SelectItem value="support">Student Support</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => updateFormData("subject", e.target.value)}
                        placeholder="Brief subject line"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => updateFormData("message", e.target.value)}
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm">{info.title}</h3>
                        <p className="text-sm text-gray-900 font-medium whitespace-pre-line">{info.details}</p>
                        <p className="text-xs text-gray-600 mt-1">{info.description}</p>
                        <Button variant="link" className="p-0 h-auto text-xs mt-1">
                          {info.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Office Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-xs text-gray-600">Emergency support available 24/7 for current participants</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions. Can't find what you're looking for? Contact us directly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View All FAQs
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
