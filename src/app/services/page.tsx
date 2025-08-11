import { FuturisticBg, GlassPanel } from "@/components/glass"
import Link from "next/link"
import { ArrowRight, Code, Palette, Smartphone, Search, Share2, Zap } from "lucide-react"

const services = [
  {
    id: "web-design",
    title: "Web Design",
    description:
      "Creating visually stunning and user-friendly interfaces that captivate your audience and drive engagement.",
    fullDescription:
      "Our web design services focus on creating beautiful, intuitive, and conversion-optimized designs that reflect your brand identity and provide exceptional user experiences.",
    icon: Palette,
    features: ["UI/UX Design", "Responsive Design", "Brand Integration", "User Research"],
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Building robust, scalable web applications using modern technologies like Next.js, React, and TypeScript.",
    fullDescription:
      "We develop high-performance web applications with clean code, optimal SEO, and seamless user experiences using the latest web technologies.",
    icon: Code,
    features: ["Next.js Development", "React Applications", "API Integration", "Performance Optimization"],
  },
  {
    id: "web-application",
    title: "Web Application",
    description:
      "Developing complex web applications with advanced functionality, real-time features, and database integration.",
    fullDescription:
      "Custom web applications tailored to your business needs, featuring advanced functionality, secure authentication, and scalable architecture.",
    icon: Smartphone,
    features: ["Custom Applications", "Database Design", "User Authentication", "Real-time Features"],
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    description:
      "Comprehensive social media strategy, content creation, community management, and performance analytics.",
    fullDescription:
      "Complete social media management including content calendars, community engagement, brand consistency, and detailed analytics reporting.",
    icon: Share2,
    features: ["Content Strategy", "Community Management", "Analytics & Reporting", "Brand Consistency"],
  },
  {
    id: "seo-content",
    title: "SEO & Content",
    description:
      "Technical SEO optimization, content strategy, keyword research, and on-page optimization for better search rankings.",
    fullDescription:
      "Comprehensive SEO services including technical audits, content optimization, keyword strategy, and ongoing performance monitoring.",
    icon: Search,
    features: ["Technical SEO", "Content Strategy", "Keyword Research", "Performance Monitoring"],
  },
  {
    id: "automation",
    title: "Automation",
    description:
      "Workflow automation for social media posting, reporting, asset management, and business process optimization.",
    fullDescription:
      "Custom automation solutions to streamline your business processes, from social media scheduling to automated reporting and workflow optimization.",
    icon: Zap,
    features: ["Workflow Automation", "Social Media Scheduling", "Automated Reporting", "Process Optimization"],
  },
]

export default function ServicesPage() {
  return (
    <FuturisticBg className="bg-gradient-to-b from-neutral-100 to-white dark:from-neutral-900 dark:to-black">
      <main className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <GlassPanel>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Our Services</h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the modern landscape
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <div
                  key={service.id}
                  className="group rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur hover:bg-white/10 dark:bg-black/20 hover:dark:bg-black/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-50 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="ml-4 p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10">
                      <IconComponent className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.slice(0, 2).map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 text-xs rounded-full bg-white/10 text-neutral-700 dark:text-neutral-300 border border-white/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group-hover:gap-3"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              )
            })}
          </div>
        </GlassPanel>
      </main>
    </FuturisticBg>
  )
}
