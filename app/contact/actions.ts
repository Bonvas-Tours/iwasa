"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  inquiry: string
  message: string
  preferredContact: string
}

export async function sendContactEmail(formData: FormData) {
  try {
    const data: ContactFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      subject: formData.get("subject") as string,
      inquiry: formData.get("inquiry") as string,
      message: formData.get("message") as string,
      preferredContact: formData.get("preferredContact") as string,
    }

    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.inquiry || !data.message) {
      return {
        success: false,
        error: "Please fill in all required fields.",
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

    // Create email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2563eb; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="color: #6b7280; margin: 5px 0 0 0;">IWaS Abroad Website</p>
          </div>
          
          <div style="border-left: 4px solid #2563eb; padding-left: 20px; margin-bottom: 25px;">
            <h2 style="color: #1f2937; margin: 0 0 10px 0; font-size: 18px;">Contact Information</h2>
            <p style="margin: 5px 0; color: #374151;"><strong>Name:</strong> ${data.name}</p>
            <p style="margin: 5px 0; color: #374151;"><strong>Email:</strong> ${data.email}</p>
            ${data.phone ? `<p style="margin: 5px 0; color: #374151;"><strong>Phone:</strong> ${data.phone}</p>` : ""}
            ${data.preferredContact ? `<p style="margin: 5px 0; color: #374151;"><strong>Preferred Contact:</strong> ${data.preferredContact}</p>` : ""}
          </div>

          <div style="border-left: 4px solid #059669; padding-left: 20px; margin-bottom: 25px;">
            <h2 style="color: #1f2937; margin: 0 0 10px 0; font-size: 18px;">Inquiry Details</h2>
            <p style="margin: 5px 0; color: #374151;"><strong>Inquiry Type:</strong> ${data.inquiry}</p>
            <p style="margin: 5px 0; color: #374151;"><strong>Subject:</strong> ${data.subject}</p>
          </div>

          <div style="border-left: 4px solid #7c3aed; padding-left: 20px; margin-bottom: 25px;">
            <h2 style="color: #1f2937; margin: 0 0 10px 0; font-size: 18px;">Message</h2>
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; color: #374151; line-height: 1.6;">
              ${data.message.replace(/\n/g, "<br>")}
            </div>
          </div>

          <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              This email was sent from the IWaS Abroad contact form.<br>
              Please respond directly to the sender's email address: ${data.email}
            </p>
          </div>
        </div>
      </div>
    `

    const emailText = `
New Contact Form Submission - IWaS Abroad

Contact Information:
- Name: ${data.name}
- Email: ${data.email}
${data.phone ? `- Phone: ${data.phone}` : ""}
${data.preferredContact ? `- Preferred Contact: ${data.preferredContact}` : ""}

Inquiry Details:
- Inquiry Type: ${data.inquiry}
- Subject: ${data.subject}

Message:
${data.message}

---
This email was sent from the IWaS Abroad contact form.
Please respond directly to the sender's email address: ${data.email}
    `

    // Send email using Resend
    const result = await resend.emails.send({
      from: "IWaS Abroad Contact Form <noreply@bonvastours.com>",
      to: ["iwasa@bonvastours.com"],
      replyTo: data.email,
      subject: `New Contact: ${data.subject} - ${data.inquiry}`,
      html: emailHtml,
      text: emailText,
    })

    if (result.error) {
      console.error("Resend error:", result.error)
      return {
        success: false,
        error: "Failed to send email. Please try again or contact us directly.",
      }
    }

    // Send confirmation email to the user
    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2563eb; margin: 0; font-size: 24px;">Thank You for Contacting IWaS Abroad!</h1>
          </div>
          
          <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">
            Dear ${data.name},
          </p>
          
          <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">
            Thank you for reaching out to us! We have received your inquiry about <strong>${data.inquiry}</strong> 
            and will get back to you within 24 hours.
          </p>
          
          <div style="background-color: #eff6ff; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #2563eb;">
            <h3 style="color: #1e40af; margin: 0 0 10px 0; font-size: 16px;">Your Inquiry Summary:</h3>
            <p style="margin: 5px 0; color: #374151;"><strong>Subject:</strong> ${data.subject}</p>
            <p style="margin: 5px 0; color: #374151;"><strong>Inquiry Type:</strong> ${data.inquiry}</p>
            ${data.preferredContact ? `<p style="margin: 5px 0; color: #374151;"><strong>Preferred Contact Method:</strong> ${data.preferredContact}</p>` : ""}
          </div>
          
          <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">
            In the meantime, feel free to explore our programs and services on our website, or contact us directly:
          </p>
          
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; margin: 20px 0;">
            <p style="margin: 5px 0; color: #374151;"><strong>Email:</strong> iwasa@bonvastours.com</p>
            <p style="margin: 5px 0; color: #374151;"><strong>Phone:</strong> +233 (531) 085-235</p>
            <p style="margin: 5px 0; color: #374151;"><strong>Office Hours:</strong> Mon-Fri, 8:30AM-5PM GMT</p>
          </div>
          
          <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">
            We look forward to helping you achieve your international career goals!
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
      from: "IWaS Abroad <noreply@bonvastours.com>",
      to: [data.email],
      subject: "Thank you for contacting IWaS Abroad - We'll be in touch soon!",
      html: confirmationHtml,
    })

    return {
      success: true,
      message:
        "Thank you for your message! We've received your inquiry and will get back to you within 24 hours. Please check your email for a confirmation.",
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again or contact us directly at iwasa@bonvastours.com.",
    }
  }
}
