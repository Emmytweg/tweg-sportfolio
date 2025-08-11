import { FuturisticBg, GlassPanel } from "@/components/glass"
import Link from "next/link"
import { Quote, Star, ArrowRight } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: "guy-hawkins",
    name: "Guy Hawkins",
    role: "CEO",
    company: "TechFlow Solutions",
    handle: "@guyhawkins",
    avatar: "/professional-man-avatar.png",
    quote: "Impressed by the professionalism and attention to detail.",
    fullQuote:
      "Working with Emmanuel was an absolute game-changer for our business. His attention to detail and professional approach exceeded all our expectations. The website he delivered not only looks stunning but performs exceptionally well.",
    rating: 5,
    project: "E-commerce Platform",
    date: "December 2023",
    results: ["300% increase in conversions", "50% faster load times", "95% client satisfaction score"],
  },
  {
    id: "karla-lynn",
    name: "Karla Lynn",
    role: "Marketing Director",
    company: "Creative Studios",
    handle: "@karlalynn",
    avatar: "/professional-woman-avatar.png",
    quote: "A seamless experience from start to finish. Highly recommend!",
    fullQuote:
      "From our initial consultation to the final launch, every step of the process was smooth and well-coordinated. Emmanuel's expertise in both design and development made our vision come to life perfectly.",
    rating: 5,
    project: "Brand Website Redesign",
    date: "November 2023",
    results: ["200% increase in engagement", "40% more qualified leads", "Enhanced brand recognition"],
  },
  {
    id: "jane-cooper",
    name: "Jane Cooper",
    role: "Founder",
    company: "Wellness Co",
    handle: "@janecooper",
    avatar: "/professional-woman-founder-avatar.png",
    quote: "Reliable and trustworthy. Made my life so much easier!",
    fullQuote:
      "Emmanuel took care of everything from social media automation to SEO optimization. His reliable service and trustworthy approach gave me peace of mind to focus on growing my business while he handled the technical aspects.",
    rating: 5,
    project: "Social Media Automation",
    date: "October 2023",
    results: ["80% time saved on social media", "150% growth in followers", "Automated reporting system"],
  },
  {
    id: "robert-chen",
    name: "Robert Chen",
    role: "Product Manager",
    company: "InnovateLab",
    handle: "@robertchen",
    avatar: "/professional-asian-man-avatar.png",
    quote: "Outstanding technical expertise and creative problem-solving skills.",
    fullQuote:
      "Emmanuel's technical expertise is unmatched. He solved complex integration challenges that other developers couldn't handle, and delivered a solution that exceeded our technical requirements while maintaining excellent user experience.",
    rating: 5,
    project: "Custom Web Application",
    date: "September 2023",
    results: ["99.9% uptime achieved", "50% reduction in processing time", "Seamless third-party integrations"],
  },
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    role: "E-commerce Manager",
    company: "Fashion Forward",
    handle: "@sarahjohnson",
    avatar: "/professional-woman-manager-avatar.png",
    quote: "Transformed our online presence and boosted our sales significantly.",
    fullQuote:
      "Our e-commerce platform was completely transformed. Emmanuel's strategic approach to UX design and conversion optimization resulted in a significant boost in sales and customer satisfaction.",
    rating: 5,
    project: "E-commerce Optimization",
    date: "August 2023",
    results: ["400% increase in online sales", "60% improvement in user retention", "Mobile-first responsive design"],
  },
  {
    id: "michael-davis",
    name: "Michael Davis",
    role: "Startup Founder",
    company: "NextGen Apps",
    handle: "@michaeldavis",
    avatar: "/startup-founder-avatar.png",
    quote: "Exceptional service that helped launch our startup successfully.",
    fullQuote:
      "As a startup founder, I needed someone who could understand our vision and execute it flawlessly. Emmanuel delivered exactly that - a robust platform that scaled with our growth and impressed our investors.",
    rating: 5,
    project: "Startup Platform Development",
    date: "July 2023",
    results: ["Successful product launch", "Investor-ready platform", "Scalable architecture implemented"],
  },
]

export default function TestimonialsPage() {
  const featuredTestimonials = testimonials.slice(0, 3)
  const additionalTestimonials = testimonials.slice(3)

  return (
    <FuturisticBg className="bg-gradient-to-b from-neutral-100 to-white dark:from-neutral-900 dark:to-black">
      <main className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <GlassPanel>
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">Testimonials</p>
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              Transformative Client Experiences
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Discover how our services have helped businesses achieve their goals and exceed expectations
            </p>
          </div>

          {/* Featured Testimonials */}
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {featuredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur hover:bg-white/10 dark:bg-black/20 hover:dark:bg-black/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-blue-500/60 dark:text-blue-400/60" />
                </div>

                <blockquote className="mb-6">
                  <p className="text-neutral-800 dark:text-neutral-200 leading-relaxed">"{testimonial.quote}"</p>
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium text-neutral-900 dark:text-neutral-50 text-sm">{testimonial.name}</p>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400">{testimonial.handle}</p>
                    </div>
                  </div>

                  <Link
                    href={`/testimonials/${testimonial.id}`}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowRight className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Happy Clients", value: "30+" },
              { label: "Projects Completed", value: "40+" },
              { label: "Average Rating", value: "5.0" },
              { label: "Client Retention", value: "95%" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur dark:bg-black/20"
              >
                <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-1">{stat.value}</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Additional Testimonials */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 text-center mb-8">
              More Client Stories
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {additionalTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="group rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur hover:bg-white/10 dark:bg-black/20 hover:dark:bg-black/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-neutral-900 dark:text-neutral-50">{testimonial.name}</h3>
                        <div className="flex">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <blockquote className="mb-4">
                    <p className="text-neutral-800 dark:text-neutral-200 leading-relaxed">"{testimonial.quote}"</p>
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-500 dark:text-neutral-500">
                      {testimonial.project} • {testimonial.date}
                    </span>
                    <Link
                      href={`/testimonials/${testimonial.id}`}
                      className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      Read full story
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur dark:bg-black/20">
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
                Let's work together to create something amazing that your customers will love and talk about.
              </p>
              <Link
                href="mailto:emmanuelolamide706@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </GlassPanel>
      </main>
    </FuturisticBg>
  )
}
