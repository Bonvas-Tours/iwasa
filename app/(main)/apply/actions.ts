"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitApplication(formData: FormData) {
    try {
        // Extract form data
        const fullName = formData.get("fullName") as string
        const email = formData.get("email") as string
        const phone = formData.get("phone") as string
        const programOfInterest = formData.get("programOfInterest") as string
        const preferredDestination = formData.get("preferredDestination") as string
        const startDate = formData.get("startDate") as string
        const currentStatus = formData.get("currentStatus") as string
        const city = formData.get("city") as string
        const country = formData.get("country") as string
        const nationality = formData.get("nationality") as string
        const howDidYouHear = formData.get("howDidYouHear") as string
        const otherSource = formData.get("otherSource") as string

        console.log("Form data received:", {
            fullName,
            email,
            phone,
            programOfInterest,
            preferredDestination,
            startDate,
            currentStatus,
            city,
            country,
            nationality,
            howDidYouHear,
            otherSource,
        })

        // Validate required fields
        const requiredFields = {
            fullName,
            email,
            phone,
            programOfInterest,
            preferredDestination,
            startDate,
            currentStatus,
            city,
            country,
            nationality,
            howDidYouHear,
        }

        const missingFields = Object.entries(requiredFields)
            .filter(([, value]) => !value || value.trim() === "")
            .map(([key]) => key)

        if (missingFields.length > 0) {
            console.log("Missing fields:", missingFields)
            return {
                success: false,
                message: `Please fill in all required fields: ${missingFields.join(", ")}`,
            }
        }

        // Generate application ID
        const applicationId = `IWAS-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

        // Send email to company
        await resend.emails.send({
            from: "IWaS Abroad <noreply@bonvastours.com>",
            to: ["iwasa@bonvastours.com"],
            subject: `New Application Submission - ${fullName}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">New Application Received</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Application ID: ${applicationId}</p>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <h2 style="color: #333; margin-bottom: 20px;">Personal Information</h2>
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p><strong>Name:</strong> ${fullName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Nationality:</strong> ${nationality}</p>
              <p><strong>Country:</strong> ${country}</p>
              <p><strong>City:</strong> ${city}</p>
            </div>

            <h2 style="color: #333; margin-bottom: 20px;">Program Preferences</h2>
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p><strong>Program of Interest:</strong> ${programOfInterest}</p>
              <p><strong>Preferred Destination:</strong> ${preferredDestination}</p>
              <p><strong>Preferred Start Date:</strong> ${startDate}</p>
              <p><strong>Current Status:</strong> ${currentStatus}</p>
            </div>

            <h2 style="color: #333; margin-bottom: 20px;">Additional Information</h2>
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p><strong>How did you hear about us:</strong> ${howDidYouHear}${otherSource ? ` - ${otherSource}` : ""}</p>
            </div>
          </div>
          
          <div style="background: #333; color: white; padding: 20px; text-align: center;">
            <p style="margin: 0;">IWaS Abroad - International Career Advancement</p>
            <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.8;">Application submitted on ${new Date().toLocaleDateString()}</p>
          </div>
        </div>
      `,
        })

        // Send confirmation email to applicant
        await resend.emails.send({
            from: "IWaS Abroad <noreply@bonvastours.com>",
            to: [email],
            subject: "Application Received - IWaS Abroad",
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">Application Received!</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Thank you for applying to IWaS Abroad</p>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <p style="font-size: 16px; color: #333;">Dear ${fullName},</p>
            
            <p style="color: #666; line-height: 1.6;">
              Thank you for submitting your application to IWaS Abroad. We have successfully received your application and our team will review it carefully.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
              <h3 style="margin: 0 0 10px 0; color: #333;">Application Details</h3>
              <p style="margin: 5px 0;"><strong>Application ID:</strong> ${applicationId}</p>
              <p style="margin: 5px 0;"><strong>Program:</strong> ${programOfInterest}</p>
              <p style="margin: 5px 0;"><strong>Preferred Destination:</strong> ${preferredDestination}</p>
              <p style="margin: 5px 0;"><strong>Submission Date:</strong> ${new Date().toLocaleDateString()}</p>
            </div>
            
            <h3 style="color: #333; margin-top: 30px;">What happens next?</h3>
            <ol style="color: #666; line-height: 1.8;">
              <li>Our admissions team will review your application within 2-3 business days</li>
              <li>We may contact you for additional information or to schedule an interview</li>
              <li>You will receive updates on your application status via email</li>
              <li>If accepted, we will guide you through the next steps including visa processing</li>
            </ol>
            
            <div style="background: #e8f4fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #1e40af;">
                <strong>Important:</strong> Please save your Application ID (${applicationId}) for future reference. You can use this ID to track your application status.
              </p>
            </div>
            
            <p style="color: #666; line-height: 1.6;">
              If you have any questions or need to update your application, please don&apos;t hesitate to contact us at iwasa@bonvastours.com or call +233 (531) 085-235.
            </p>
            
            <p style="color: #666; margin-top: 30px;">
              Best regards,<br>
              <strong>The IWaS Abroad Team</strong>
            </p>
          </div>
          
          <div style="background: #333; color: white; padding: 20px; text-align: center;">
            <p style="margin: 0;">IWaS Abroad - International Career Advancement</p>
            <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.8;">www.iwasabroad.com | iwasa@bonvastours.com</p>
          </div>
        </div>
      `,
        })

        return {
            success: true,
            message: `Application submitted successfully! Your application ID is ${applicationId}. Please check your email for confirmation.`,
            applicationId,
        }
    } catch (error) {
        console.error("Error submitting application:", error)
        return {
            success: false,
            message: "There was an error submitting your application. Please try again later.",
        }
    }
}
