"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Calendar,
  Globe,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react"

import { countries, nationalities } from "@/lib/countries-data"
import { submitApplication } from "./actions"

export default function ApplicationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message?: string; error?: string } | null>(null)
  const [showOtherSource, setShowOtherSource] = useState(false)
  const [howDidYouHear, setHowDidYouHear] = useState("")

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    setSubmitResult(null)

    // Add the howDidYouHear value to formData
    formData.set("howDidYouHear", howDidYouHear)

    try {
      const result = await submitApplication(formData)
      setSubmitResult(result)

      if (result.success) {
        // Reset form on success
        const form = document.getElementById("application-form") as HTMLFormElement
        if (form) {
          form.reset()
          setShowOtherSource(false)
          setHowDidYouHear("")
        }
      }
    } catch {
      setSubmitResult({
        success: false,
        error: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleHowDidYouHearChange = (value: string) => {
    setHowDidYouHear(value)
    setShowOtherSource(value === "Other")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Apply for a Program</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take the first step towards your international career journey. Fill out the application form below and we&apos;ll
            get back to you within 2-3 business days.
          </p>
        </div>


        {/* Application Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Program Application Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form id="application-form" action={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <User className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-semibold">Personal Information</h3>
                </div>

                <div className="grid md:grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Enter your full name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+233 531 085 235"
                        className="pl-10"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Program Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="h-5 w-5 text-green-600" />
                  <h3 className="text-lg font-semibold">Program Details</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="programOfInterest">Program of Interest *</Label>
                    <Select name="programOfInterest" required disabled={isSubmitting}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="internship">Internship Program</SelectItem>
                        <SelectItem value="work-placement">Work Placement</SelectItem>
                        <SelectItem value="study-abroad">Study Abroad</SelectItem>
                        <SelectItem value="language-immersion">Language Immersion</SelectItem>
                        <SelectItem value="professional-training">Professional Training</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredDestination">Preferred Destination *</Label>
                    <Select name="preferredDestination" required disabled={isSubmitting}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select destination" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="germany">Germany</SelectItem>
                        <SelectItem value="united-kingdom">United Kingdom</SelectItem>
                        <SelectItem value="canada">Canada</SelectItem>
                        <SelectItem value="australia">Australia</SelectItem>
                        <SelectItem value="japan">Japan</SelectItem>
                        <SelectItem value="singapore">Singapore</SelectItem>
                        <SelectItem value="netherlands">Netherlands</SelectItem>
                        <SelectItem value="france">France</SelectItem>

                        {/* Additional popular destinations */}
                        <SelectItem value="united-states">United States</SelectItem>
                        <SelectItem value="sweden">Sweden</SelectItem>
                        <SelectItem value="switzerland">Switzerland</SelectItem>
                        <SelectItem value="ireland">Ireland</SelectItem>
                        <SelectItem value="denmark">Denmark</SelectItem>
                        <SelectItem value="norway">Norway</SelectItem>
                        <SelectItem value="spain">Spain</SelectItem>
                        <SelectItem value="italy">Italy</SelectItem>
                        <SelectItem value="belgium">Belgium</SelectItem>
                        <SelectItem value="south-korea">South Korea</SelectItem>
                        <SelectItem value="china">China</SelectItem>
                        <SelectItem value="uae">UAE (Dubai & Abu Dhabi)</SelectItem>
                        <SelectItem value="qatar">Qatar</SelectItem>
                        <SelectItem value="hong-kong">Hong Kong</SelectItem>
                        <SelectItem value="new-zealand">New Zealand</SelectItem>

                        {/* Remote/Flexible options */}
                        <SelectItem value="digital-nomad">Digital Nomad Visa Countries</SelectItem>
                        <SelectItem value="remote-work">Remote Work Programs</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="startDate">Preferred Start Date *</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="startDate"
                        name="startDate"
                        type="date"
                        className="pl-10"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentStatus">Current Educational/Work Status *</Label>
                    <Select name="currentStatus" required disabled={isSubmitting}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your current status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high-school-student">High School Student</SelectItem>
                        <SelectItem value="university-student">University Student</SelectItem>
                        <SelectItem value="recent-graduate">Recent Graduate</SelectItem>
                        <SelectItem value="working-professional">Working Professional</SelectItem>
                        <SelectItem value="career-changer">Career Changer</SelectItem>
                        <SelectItem value="unemployed">Currently Unemployed</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Location & Nationality */}

              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="h-5 w-5 text-purple-600" />
                  <h3 className="text-lg font-semibold">Location & Nationality</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="city">City/Town *</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="city"
                        name="city"
                        placeholder="Your city"
                        className="pl-10"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                    <Select name="country" required disabled={isSubmitting}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent className="max-h-60">
                        {countries.map((country) => (
                          <SelectItem key={country.value} value={country.value}>
                            {country.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nationality">Nationality *</Label>
                    <Select name="nationality" required disabled={isSubmitting}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select nationality" />
                      </SelectTrigger>
                      <SelectContent className="max-h-60">
                        {nationalities.map((nationality) => (
                          <SelectItem key={nationality.value} value={nationality.value}>
                            {nationality.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>


              {/* Other Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="h-5 w-5 text-orange-600" />
                  <h3 className="text-lg font-semibold">Other Information</h3>
                </div>

                <div className="space-y-4">
                  <div className="space-y-3">
                    <Label>How did you hear about us? *</Label>
                    <RadioGroup
                      value={howDidYouHear}
                      onValueChange={handleHowDidYouHearChange}
                      disabled={isSubmitting}
                      className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Social Media" id="social-media" />
                        <Label htmlFor="social-media" className="text-sm font-normal">
                          Social Media
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Friend/Family" id="friend-family" />
                        <Label htmlFor="friend-family" className="text-sm font-normal">
                          Friend/Family
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Website" id="website" />
                        <Label htmlFor="website" className="text-sm font-normal">
                          Website
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Other" id="other" />
                        <Label htmlFor="other" className="text-sm font-normal">
                          Other
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {showOtherSource && (
                    <div className="space-y-2">
                      <Label htmlFor="otherSource">Please specify:</Label>
                      <Input
                        id="otherSource"
                        name="otherSource"
                        placeholder="Please tell us how you heard about us"
                        disabled={isSubmitting}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t">
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Submit Application
                    </>
                  )}
                </Button>
                <p className="text-sm text-gray-600 text-center mt-3">
                  By submitting this application, you agree to our terms and conditions. We&apos;ll contact you within 2-3
                  business days.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Success/Error Alert */}
        {submitResult && (
          <Alert
            className={`mt-6 ${submitResult.success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}
          >
            {submitResult.success ? (
              <CheckCircle className="h-4 w-4 text-green-600" />
            ) : (
              <AlertCircle className="h-4 w-4 text-red-600" />
            )}
            <AlertDescription className={submitResult.success ? "text-green-800" : "text-red-800"}>
              {submitResult.success ? submitResult.message : submitResult.error}
            </AlertDescription>
          </Alert>
        )}

      </div>
    </div>
  )
}
