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
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return { success: false, error: "Email configuration is missing." }
  }

  const data: ContactFormData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    company: formData.get("company") as string,
    service: formData.get("service") as string,
    budget: formData.get("budget") as string,
    message: formData.get("message") as string,
  }

  if (!data.name || !data.email || !data.message) {
    return { success: false, error: "Please fill in all required fields." }
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      to: "emmanuelolamide706@gmail.com",
      subject: `New message from ${data.name}`,
      html: `<p>${data.message}</p>`,
      replyTo: data.email,
    })

    return { success: true, message: "Your message has been sent successfully!" }
  } catch (error) {
    console.error(error)
    return { success: false, error: "Failed to send email. Please try again later." }
  }
}
