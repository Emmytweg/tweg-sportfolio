"use client"

import { FuturisticBg, GlassPanel } from "@/components/glass"
import { useActionState } from "react"
import { sendContactEmail } from "../api/contact/route"
import { CheckCircle, AlertCircle, Send } from "lucide-react"

export default function ContactPage() {
  const [state, action, isPending] = useActionState(sendContactEmail, null)

  return (
    <FuturisticBg className="bg-gradient-to-b from-neutral-100 to-white dark:from-neutral-900 dark:to-black">
      <main className="mx-auto max-w-3xl px-4 py-10 md:py-16">
        <GlassPanel>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">Get In Touch</h1>
            <p className="text-neutral-700 dark:text-neutral-300">
              Let's collaborate. Share a few details and I'll get back to you within 24 hours.
            </p>
          </div>

          {/* Success Message */}
          {state?.success && (
            <div className="mb-6 rounded-xl border border-green-500/20 bg-green-500/10 p-4 backdrop-blur">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                <div>
                  <h3 className="font-medium text-green-800 dark:text-green-200">Message Sent Successfully!</h3>
                  <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {state?.error && (
            <div className="mb-6 rounded-xl border border-red-500/20 bg-red-500/10 p-4 backdrop-blur">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                <div>
                  <h3 className="font-medium text-red-800 dark:text-red-200">Failed to Send Message</h3>
                  <p className="text-sm text-red-700 dark:text-red-300 mt-1">{state.error}</p>
                </div>
              </div>
            </div>
          )}

          <form action={action} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur placeholder:text-neutral-500 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur placeholder:text-neutral-500 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
              >
                Company (Optional)
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur placeholder:text-neutral-500 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
              >
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
              >
                <option value="">Select a service</option>
                <option value="web-design">Web Design</option>
                <option value="web-development">Web Development</option>
                <option value="web-application">Web Application</option>
                <option value="social-media-management">Social Media Management</option>
                <option value="seo-content">SEO & Content</option>
                <option value="automation">Automation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Project Budget
              </label>
              <select
                id="budget"
                name="budget"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
              >
                <option value="">Select budget range</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-plus">$50,000+</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
              >
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur placeholder:text-neutral-500 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 resize-none"
                placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-400 px-6 py-4 font-semibold text-black hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isPending ? (
                <>
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white/15">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur dark:bg-black/20">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-50 mb-1">Email</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">emmanuelolamide706@gmail.com</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur dark:bg-black/20">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-50 mb-1">Response Time</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Within 24 hours</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur dark:bg-black/20">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-50 mb-1">Consultation</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Free initial call</p>
              </div>
            </div>
          </div>
        </GlassPanel>
      </main>
    </FuturisticBg>
  )
}
