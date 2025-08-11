import { FuturisticBg, GlassPanel } from "@/components/glass"
import Link from "next/link"
import { ArrowLeft, Check, Code, Palette, Smartphone, Search, Share2, Zap } from "lucide-react"
import { notFound } from "next/navigation"

const services = [
  {
    id: "web-design",
    title: "Web Design",
    description:
      "Creating visually stunning and user-friendly interfaces that captivate your audience and drive engagement.",
    fullDescription:
      "Our web design services focus on creating beautiful, intuitive, and conversion-optimized designs that reflect your brand identity and provide exceptional user experiences. We combine aesthetic appeal with functional design principles to ensure your website not only looks great but also performs exceptionally.",
    icon: Palette,
    features: [
      "Custom UI/UX Design",
      "Responsive Design for All Devices",
      "Brand Identity Integration",
      "User Research & Testing",
      "Wireframing & Prototyping",
      "Design System Creation",
    ],
    process: [
      "Discovery & Research",
      "Wireframing & Concept",
      "Visual Design",
      "Prototype & Testing",
      "Final Design Delivery",
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Building robust, scalable web applications using modern technologies like Next.js, React, and TypeScript.",
    fullDescription:
      "We develop high-performance web applications with clean, maintainable code, optimal SEO, and seamless user experiences. Our development process emphasizes scalability, security, and performance using cutting-edge technologies and best practices.",
    icon: Code,
    features: [
      "Next.js & React Development",
      "TypeScript Implementation",
      "API Development & Integration",
      "Database Design & Management",
      "Performance Optimization",
      "SEO Implementation",
    ],
    process: [
      "Requirements Analysis",
      "Architecture Planning",
      "Development & Testing",
      "Performance Optimization",
      "Deployment & Monitoring",
    ],
  },
  {
    id: "web-application",
    title: "Web Application",
    description:
      "Developing complex web applications with advanced functionality, real-time features, and database integration.",
    fullDescription:
      "Custom web applications tailored to your specific business needs, featuring advanced functionality, secure user authentication, real-time capabilities, and scalable architecture. We build applications that grow with your business.",
    icon: Smartphone,
    features: [
      "Custom Application Development",
      "Real-time Features & WebSockets",
      "User Authentication & Authorization",
      "Database Design & Optimization",
      "Third-party Integrations",
      "Scalable Architecture",
    ],
    process: [
      "Business Analysis",
      "System Architecture",
      "Development & Integration",
      "Security Implementation",
      "Testing & Deployment",
    ],
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    description:
      "Comprehensive social media strategy, content creation, community management, and performance analytics.",
    fullDescription:
      "Complete social media management services including strategic planning, content creation, community engagement, and detailed analytics. We help build your brand presence across all major social platforms while maintaining consistent messaging and engagement.",
    icon: Share2,
    features: [
      "Content Strategy & Planning",
      "Community Management",
      "Analytics & Reporting",
      "Brand Consistency",
      "Engagement Optimization",
      "Cross-platform Management",
    ],
    process: [
      "Strategy Development",
      "Content Planning",
      "Content Creation",
      "Community Engagement",
      "Performance Analysis",
    ],
  },
  {
    id: "seo-content",
    title: "SEO & Content",
    description:
      "Technical SEO optimization, content strategy, keyword research, and on-page optimization for better search rankings.",
    fullDescription:
      "Comprehensive SEO services including technical audits, content optimization, keyword strategy, and ongoing performance monitoring. We help improve your search engine visibility and drive organic traffic through proven SEO techniques and high-quality content.",
    icon: Search,
    features: [
      "Technical SEO Audits",
      "Keyword Research & Strategy",
      "On-page Optimization",
      "Content Strategy & Creation",
      "Link Building",
      "Performance Monitoring",
    ],
    process: ["SEO Audit", "Keyword Research", "Content Strategy", "Implementation", "Monitoring & Optimization"],
  },
  {
    id: "automation",
    title: "Automation",
    description:
      "Workflow automation for social media posting, reporting, asset management, and business process optimization.",
    fullDescription:
      "Custom automation solutions designed to streamline your business processes and increase efficiency. From social media scheduling to automated reporting and workflow optimization, we help you save time and reduce manual tasks.",
    icon: Zap,
    features: [
      "Workflow Automation",
      "Social Media Scheduling",
      "Automated Reporting",
      "Process Optimization",
      "Integration Solutions",
      "Custom Automation Tools",
    ],
    process: [
      "Process Analysis",
      "Automation Planning",
      "Tool Development",
      "Integration & Testing",
      "Monitoring & Optimization",
    ],
  },
]

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.id === params.slug)

  if (!service) {
    notFound()
  }

  const IconComponent = service.icon

  return (
    <FuturisticBg className="bg-gradient-to-b from-neutral-100 to-white dark:from-neutral-900 dark:to-black">
      <main className="mx-auto max-w-4xl px-4 py-10 md:py-16">
        <GlassPanel>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <div className="flex items-start gap-6 mb-8">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10">
              <IconComponent className="w-8 h-8 text-blue-500 dark:text-blue-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">{service.title}</h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">{service.description}</p>
            </div>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none mb-12">
            <p className="text-base leading-relaxed">{service.fullDescription}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur dark:bg-black/20">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4">What's Included</h3>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur dark:bg-black/20">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4">Our Process</h3>
              <ol className="space-y-3">
                {service.process.map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-neutral-700 dark:text-neutral-300">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur dark:bg-black/20">
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                Let's discuss how we can help bring your project to life with our {service.title.toLowerCase()}{" "}
                services.
              </p>
              <Link
                href="mailto:emmanuelolamide706@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
              >
                Get in Touch
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>
        </GlassPanel>
      </main>
    </FuturisticBg>
  )
}
