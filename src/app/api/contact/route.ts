"use server"

import nodemailer from "nodemailer"

interface ContactFormData {
  name: string
  email: string
  company?: string
  service?: string
  budget?: string
  message: string
}

export async function sendContactEmail(prevState: any, formData: FormData) {
  try {
    // console.log("=== EMAIL DEBUG START ===")
    // console.log("EMAIL_USER:", process.env.EMAIL_USER ? "✓ Set" : "✗ Missing")
    // console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "✓ Set" : "✗ Missing")

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing environment variables!")
      return {
        success: false,
        error: "Email configuration is missing. Please check environment variables.",
      }
    }

    // Extract form data
    const data: ContactFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      service: formData.get("service") as string,
      budget: formData.get("budget") as string,
      message: formData.get("message") as string,
    }

    console.log("Form data received:", {
      name: data.name,
      email: data.email,
      hasMessage: !!data.message,
    })

    // Basic validation
    if (!data.name || !data.email || !data.message) {
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

    console.log("Creating email transporter...")
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      debug: true, // Enable debug logging
      logger: true, // Enable logger
    })

    console.log("Testing email connection...")
    try {
      await transporter.verify()
      console.log("✓ Email connection verified successfully")
    } catch (verifyError) {
      console.error("✗ Email connection failed:", verifyError)
      return {
        success: false,
        error: "Email server connection failed. Please check your email configuration.",
      }
    }

    // Service mapping for better display
    const serviceMap: { [key: string]: string } = {
      "web-design": "Web Design",
      "web-development": "Web Development",
      "web-application": "Web Application",
      "social-media-management": "Social Media Management",
      "seo-content": "SEO & Content",
      automation: "Automation",
      other: "Other",
    }

    const budgetMap: { [key: string]: string } = {
      "under-5k": "Under $5,000",
      "5k-10k": "$5,000 - $10,000",
      "10k-25k": "$10,000 - $25,000",
      "25k-50k": "$25,000 - $50,000",
      "50k-plus": "$50,000+",
    }

    // Email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          <p style="color: #e2e8f0; margin: 10px 0 0 0;">You have received a new message from your website</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #1f2937; margin-top: 0;">Contact Details</h2>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151;">Name:</strong>
            <p style="margin: 5px 0; color: #6b7280;">${data.name}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151;">Email:</strong>
            <p style="margin: 5px 0; color: #6b7280;">
              <a href="mailto:${data.email}" style="color: #3b82f6; text-decoration: none;">${data.email}</a>
            </p>
          </div>
          
          ${
            data.company
              ? `
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151;">Company:</strong>
            <p style="margin: 5px 0; color: #6b7280;">${data.company}</p>
          </div>
          `
              : ""
          }
          
          ${
            data.service
              ? `
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151;">Service Interested In:</strong>
            <p style="margin: 5px 0; color: #6b7280;">${serviceMap[data.service] || data.service}</p>
          </div>
          `
              : ""
          }
          
          ${
            data.budget
              ? `
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151;">Budget Range:</strong>
            <p style="margin: 5px 0; color: #6b7280;">${budgetMap[data.budget] || data.budget}</p>
          </div>
          `
              : ""
          }
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151;">Message:</strong>
            <div style="margin: 10px 0; padding: 15px; background-color: #f3f4f6; border-radius: 8px; color: #374151; line-height: 1.6;">
              ${data.message.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              This message was sent from your website contact form on ${new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px;">
          <a href="mailto:${data.email}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
            Reply to ${data.name}
          </a>
        </div>
      </div>
    `

    // Email options
    const mailOptions = {
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      to: "emmanuelolamide706@gmail.com",
      subject: `New Contact Form Submission from ${data.name}`,
      html: htmlContent,
      replyTo: data.email,
    }

    console.log("Sending notification email...")
    try {
      const info = await transporter.sendMail(mailOptions)
      console.log("✓ Notification email sent successfully:", info.messageId)
    } catch (emailError) {
      console.error("✗ Failed to send notification email:", emailError)
      throw emailError
    }

    // Send confirmation email to the user
    const confirmationMailOptions = {
      from: `"Emmanuel Olamide" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: "Thank you for reaching out!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Reaching Out!</h1>
            <p style="color: #e2e8f0; margin: 10px 0 0 0;">I've received your message and will get back to you soon</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <p style="color: #374151; line-height: 1.6;">Hi ${data.name},</p>
            
            <p style="color: #374151; line-height: 1.6;">
              Thank you for your interest in my services! I've received your message and will review it carefully. 
              You can expect to hear back from me within 24 hours.
            </p>
            
            <p style="color: #374151; line-height: 1.6;">
              In the meantime, feel free to check out my portfolio and recent work on my website.
            </p>
            
            <p style="color: #374151; line-height: 1.6;">
              Best regards,<br>
              <strong>Emmanuel Olamide</strong>
            </p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                This is an automated confirmation email. Please do not reply to this message.
              </p>
            </div>
          </div>
        </div>
      `,
    }

    console.log("Sending confirmation email...")
    try {
      const confirmInfo = await transporter.sendMail(confirmationMailOptions)
      console.log("✓ Confirmation email sent successfully:", confirmInfo.messageId)
    } catch (confirmError) {
      console.error("✗ Failed to send confirmation email:", confirmError)
      // Don't fail the whole process if confirmation email fails
    }

    console.log("=== EMAIL DEBUG END ===")
    return {
      success: true,
      message: "Your message has been sent successfully!",
    }
  } catch (error) {
    console.error("=== EMAIL ERROR ===")
    console.error("Full error details:", error)
    console.error("Error message:", error instanceof Error ? error.message : "Unknown error")
    console.error("=== EMAIL ERROR END ===")

    let errorMessage = "Failed to send message. Please try again or contact me directly at emmanuelolamide706@gmail.com"

    if (error instanceof Error) {
      if (error.message.includes("Invalid login")) {
        errorMessage = "Email authentication failed. Please check your Gmail app password."
      } else if (error.message.includes("ENOTFOUND") || error.message.includes("ECONNREFUSED")) {
        errorMessage = "Unable to connect to email server. Please check your internet connection."
      } else if (error.message.includes("535")) {
        errorMessage = "Gmail authentication error. Please verify your app password is correct."
      }
    }

    return {
      success: false,
      error: errorMessage,
    }
  }
}
