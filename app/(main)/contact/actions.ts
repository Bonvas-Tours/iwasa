"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const subject = formData.get("subject") as string
    const inquiry = formData.get("inquiry") as string
    const message = formData.get("message") as string
    const preferredContact = formData.get("preferredContact") as string

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return {
        success: false,
        error: "Please fill in all required fields.",
      }
    }

    // Send email to admin
    const adminEmailResult = await resend.emails.send({
      from: "IWaS Abroad <noreply@iwasa.com>",
      to: ["iwasa@bonvastours.com"],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Inquiry Type:</strong> ${inquiry || "Not specified"}</p>
        <p><strong>Preferred Contact:</strong> ${preferredContact || "Not specified"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    // Send confirmation email to user
    const userEmailResult = await resend.emails.send({
      from: "IWaS Abroad <noreply@iwasa.com>",
      to: [email],
      subject: "Thank you for contacting IWaS Abroad",
      html: `
        <h2>Thank you for contacting IWaS Abroad!</h2>
        <p>Dear ${name},</p>
        <p>We have received your message and will get back to you within 24 hours.</p>
        <p><strong>Your message details:</strong></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <br>
        <p>Best regards,</p>
        <p>The IWaS Abroad Team</p>
        <p>Email: iwasa@bonvastours.com</p>
        <p>Phone: +233 (531) 085-235</p>
      `,
    })

    if (adminEmailResult.error || userEmailResult.error) {
      console.error("Email sending error:", adminEmailResult.error || userEmailResult.error)
      return {
        success: false,
        error: "Failed to send email. Please try again later.",
      }
    }

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    }
  }
}
