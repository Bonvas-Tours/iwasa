"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface ApplicationFormData {
  fullName: string
  email: string
  phone: string
  programOfInterest: string
  preferredDestination: string
  startDate: string
  currentStatus: string
  city: string
  country: string
  nationality: string
  howDidYouHear: string
  otherSource?: string
}

export async function submitApplication(formData: FormData) {
  try {
    // Debug: Log all form data
    console.log("Form data entries:")
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`)
    }

    const data: ApplicationFormData = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      programOfInterest: formData.get("programOfInterest") as string,
      preferredDestination: formData.get("preferredDestination") as string,
      startDate: formData.get("startDate") as string,
      currentStatus: formData.get("currentStatus") as string,
      city: formData.get("city") as string,
      country: formData.get("country") as string,
      nationality: formData.get("nationality") as string,
      howDidYouHear: formData.get("howDidYouHear") as string,
      otherSource: formData.get("otherSource") as string,
    }

    console.log("Extracted data:", data)

    // Validate required fields
    const requiredFields = [
      { field: "fullName", value: data.fullName },
      { field: "email", value: data.email },
      { field: "phone", value: data.phone },
      { field: "programOfInterest", value: data.programOfInterest },
      { field: "preferredDestination", value: data.preferredDestination },
      { field: "startDate", value: data.startDate },
      { field: "currentStatus", value: data.currentStatus },
      { field: "city", value: data.city },
      { field: "country", value: data.country },
      { field: "nationality", value: data.nationality },
      { field: "howDidYouHear", value: data.howDidYouHear },
    ]

    const missingFields = requiredFields.filter(({ value }) => !value || value.trim() === "")

    if (missingFields.length > 0) {
      console.log(
        "Missing fields:",
        missingFields.map((f) => f.field),
      )
      return {
        success: false,
        error: `Please fill in all required fields. Missing: ${missingFields.map((f) => f.field).join(", ")}`,
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        error: "Please enter a valid email address.",
      }
    }

    // Generate application ID
    const applicationId = `APP-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

    // Create email content for IWaS Abroad team
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2563eb; margin: 0; font-size: 24px;">New Program Application</h1>
            <p style="color: #6b7280; margin: 5px 0 0 0;">IWaS Abroad Website</p>
            <p style="color: #6b7280; margin: 5px 0 0 0; font-weight: bold;">Application ID: ${applicationId}</p>
          </div>
          
          <div style="border-left: 4px solid #2563eb; padding-left: 20px; margin-bottom: 25px;">
            <h2 style="color: #1f2937; margin: 0 0 10px 0; font-size: 18px;">Personal Information</h2>
            <p style="margin: 5px 0; color: #374151;"><strong>Full Name:</strong> ${data.fullName}</p>
            <p style="margin: 5px 0; color: #374151;"><strong>Email:</strong> ${data.email}</p>
            <p style="margin: 5px 0; color: #374151;"><strong>Phone:</strong> ${data.phone}</p>
          </div>

          <div style="border-left: 4px solid #059669; padding-left: 20px; margin-bottom: 25px;">
            <h2 style="color: #1f2937; margin: 0 0 10px 0; font-size: 18px;">Program Details</h2>
            <p style="margin: 5px 0; color: #374151;"><strong>Program of Interest:</strong> ${data.programOfInterest}</p>
            <p style="margin: 5px 0; color: #374151;"><strong>Preferred Destination:</strong> ${data.preferredDestination}</p>
            <p style="margin: 5px 0; color: #374151;"><strong>Preferred Start Date:</strong> ${new Date(data.startDate).toLocaleDateString()}</p>
            <p style="margin: 5px 0; color: #374151;"><strong>Current Status:</strong> ${data.currentStatus}</p>
          </div>

          <div style="border-left: 4px solid #7c3aed; padding-left: 20px; margin-bottom: 25px;">
            <h2 style="color: #1f2937; margin: 0 0 10px 0; font-size: 18px;">Location & Nationality</h2>
            <p style="margin: 5px 0; color: #374151;"><strong>City/Town:</strong> ${data.city}</p>
            <p style="margin: 5px 0; color: #374151;"><strong>Country:</strong> ${data.country}</p>
            <p style="margin: 5px 0; color: #374151;"><strong>Nationality:</strong> ${data.nationality}</p>
          </div>

          <div style="border-left: 4px solid #dc2626; padding-left: 20px; margin-bottom: 25px;">
            <h2 style="color: #1f2937; margin: 0 0 10px 0; font-size: 18px;">Additional Information</h2>
            <p style="margin: 5px 0; color: #374151;"><strong>How did you hear about us:</strong> ${data.howDidYouHear}</p>
            ${data.otherSource ? `<p style="margin: 5px 0; color: #374151;"><strong>Other Source:</strong> ${data.otherSource}</p>` : ""}
          </div>

          <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              This application was submitted from the IWaS Abroad website.<br>
              Please respond directly to the applicant's email address: ${data.email}
            </p>
          </div>
        </div>
      </div>
    `

    const emailText = `
New Program Application - IWaS Abroad
Application ID: ${applicationId}

Personal Information:
- Full Name: ${data.fullName}
- Email: ${data.email}
- Phone: ${data.phone}

Program Details:
- Program of Interest: ${data.programOfInterest}
- Preferred Destination: ${data.preferredDestination}
- Preferred Start Date: ${new Date(data.startDate).toLocaleDateString()}
- Current Status: ${data.currentStatus}

Location & Nationality:
- City/Town: ${data.city}
- Country: ${data.country}
- Nationality: ${data.nationality}

Additional Information:
- How did you hear about us: ${data.howDidYouHear}
${data.otherSource ? `- Other Source: ${data.otherSource}` : ""}

---
This application was submitted from the IWaS Abroad website.
Please respond directly to the applicant's email address: ${data.email}
    `

    // Send email to IWaS Abroad team
    const result = await resend.emails.send({
      from: "IWaS Abroad Applications <iwasa@bonvastours.com>",
      to: ["iwasa@bonvastours.com"],
      replyTo: data.email,
      subject: `New Application: ${data.programOfInterest} - ${data.fullName}`,
      html: emailHtml,
      text: emailText,
    })

    if (result.error) {
      console.error("Resend error:", result.error)
      return {
        success: false,
        error: "Failed to submit application. Please try again or contact us directly.",
      }
    }

    // Send confirmation email to the applicant
    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2563eb; margin: 0; font-size: 24px;">Application Received!</h1>
            <p style="color: #6b7280; margin: 5px 0 0 0;">Thank you for applying to IWaS Abroad</p>
          </div>
          
          <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">
            Dear ${data.fullName},
          </p>
          
          <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">
            Thank you for submitting your application for our <strong>${data.programOfInterest}</strong> program! 
            We have received your application and our team will review it carefully.
          </p>
          
          <div style="background-color: #eff6ff; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #2563eb;">
            <h3 style="color: #1e40af; margin: 0 0 10px 0; font-size: 16px;">Your Application Summary:</h3>
            <p style="margin: 5px 0; color: #374151;"><strong>Program:</strong> ${data.programOfInterest}</p>
            <p style="margin: 5px 0; color: #374151;"><strong>Destination:</strong> ${data.preferredDestination}</p>
            <p style="margin: 5px 0; color: #374151;"><strong>Start Date:</strong> ${new Date(data.startDate).toLocaleDateString()}</p>
            <p style="margin: 5px 0; color: #374151;"><strong>Application ID:</strong> ${applicationId}</p>
          </div>
          
          <div style="background-color: #f0fdf4; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #059669;">
            <h3 style="color: #166534; margin: 0 0 10px 0; font-size: 16px;">What happens next?</h3>
            <ul style="margin: 0; padding-left: 20px; color: #374151;">
              <li style="margin-bottom: 8px;">Our team will review your application within 2-3 business days</li>
              <li style="margin-bottom: 8px;">You'll receive an email to schedule a consultation call</li>
              <li style="margin-bottom: 8px;">We'll discuss program details and answer any questions</li>
              <li style="margin-bottom: 8px;">If accepted, we'll guide you through the next steps</li>
            </ul>
          </div>
          
          <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">
            In the meantime, feel free to explore our website or contact us if you have any questions:
          </p>
          
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; margin: 20px 0;">
            <p style="margin: 5px 0; color: #374151;"><strong>Email:</strong> iwasa@bonvastours.com</p>
            <p style="margin: 5px 0; color: #374151;"><strong>Phone:</strong> +233 (531) 085-235 </p>
            <p style="margin: 5px 0; color: #374151;"><strong>Office Hours:</strong> Mon-Fri, 9AM-5PM GMT</p>
          </div>
          
          <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">
            We're excited about the possibility of helping you achieve your international career goals!
          </p>
          
          <p style="color: #374151; line-height: 1.6;">
            Best regards,<br>
            <strong>The IWaS Abroad Team</strong>
          </p>
          
          <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb; margin-top: 30px;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              This is an automated confirmation email. Please do not reply to this message.
            </p>
          </div>
        </div>
      </div>
    `

    // Send confirmation email
    await resend.emails.send({
      from: "IWaS Abroad <iwasa@bonvastours.com>",
      to: [data.email],
      subject: "Application Received - IWaS Abroad",
      html: confirmationHtml,
    })

    return {
      success: true,
      message:
        "Thank you for your application! We've received it and will contact you within 2-3 business days. Please check your email for confirmation.",
    }
  } catch (error) {
    console.error("Application submission error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again or contact us directly at iwasa@bonvastours.com.",
    }
  }
}
