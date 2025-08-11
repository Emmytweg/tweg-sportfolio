import { FuturisticBg, GlassPanel } from "@/components/glass"
import Link from "next/link"
import { ArrowLeft, Star, Quote, CheckCircle } from "lucide-react"
import Image from "next/image"
import { notFound } from "next/navigation"

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
      "Working with Emmanuel was an absolute game-changer for our business. His attention to detail and professional approach exceeded all our expectations. The website he delivered not only looks stunning but performs exceptionally well. Every aspect of the project was handled with care, from the initial consultation to the final deployment. The level of communication throughout the process was outstanding, and Emmanuel always made sure we were informed about progress and any decisions that needed to be made.",
    rating: 5,
    project: "E-commerce Platform",
    date: "December 2023",
    duration: "8 weeks",
    budget: "$1,000 - $2,000",
    results: ["300% increase in conversions", "50% faster load times", "95% client satisfaction score"],
    challenges:
      "Our existing platform was outdated and couldn't handle our growing customer base. We needed a complete overhaul that would scale with our business.",
    solution:
      "Emmanuel designed and developed a modern, scalable e-commerce platform with advanced features like real-time inventory management, automated email marketing, and comprehensive analytics.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Vercel"],
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
      "From our initial consultation to the final launch, every step of the process was smooth and well-coordinated. Emmanuel's expertise in both design and development made our vision come to life perfectly. The collaborative approach meant we were always part of the decision-making process, yet we never felt overwhelmed by technical details. The final result exceeded our expectations and has become a cornerstone of our marketing efforts.",
    rating: 5,
    project: "Brand Website Redesign",
    date: "November 2023",
    duration: "6 weeks",
    budget: "$1,000 - $2,000",
    results: ["200% increase in engagement", "40% more qualified leads", "Enhanced brand recognition"],
    challenges:
      "Our old website didn't reflect our creative capabilities and was difficult to maintain. We needed a fresh, modern design that would showcase our work effectively.",
    solution:
      "A complete brand website redesign with a focus on visual storytelling, portfolio showcase, and lead generation optimization.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Sanity CMS", "Netlify"],
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
      "Emmanuel took care of everything from social media automation to SEO optimization. His reliable service and trustworthy approach gave me peace of mind to focus on growing my business while he handled the technical aspects. The automation systems he set up have saved me countless hours each week, and the SEO improvements have significantly increased our organic traffic. I can't imagine running my business without these systems now.",
    rating: 4,
    project: "Social Media Automation",
    date: "October 2023",
    duration: "4 weeks",
    budget: "$700 - $2,000",
    results: ["80% time saved on social media", "150% growth in followers", "Automated reporting system"],
    challenges:
      "Managing social media across multiple platforms was taking up too much time, and our SEO rankings were poor.",
    solution:
      "Implemented comprehensive social media automation tools and SEO optimization strategies to streamline operations and improve online visibility.",
    technologies: ["Zapier", "Buffer", "Google Analytics", "SEMrush", "WordPress"],
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
      "Emmanuel's technical expertise is unmatched. He solved complex integration challenges that other developers couldn't handle, and delivered a solution that exceeded our technical requirements while maintaining excellent user experience. His ability to understand complex business logic and translate it into efficient code is remarkable. The application he built has become the backbone of our operations.",
    rating: 5,
    project: "Custom Web Application",
    date: "September 2023",
    duration: "12 weeks",
      budget: "$1,000 - $2,000",

    results: ["99.9% uptime achieved", "50% reduction in processing time", "Seamless third-party integrations"],
    challenges:
      "We needed a complex web application with multiple integrations and real-time data processing capabilities.",
    solution:
      "Developed a robust, scalable web application with advanced features including real-time analytics, API integrations, and automated workflows.",
    technologies: ["Node.js", "React", "MongoDB",  "Docker"],
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
      "Our e-commerce platform was completely transformed. Emmanuel's strategic approach to UX design and conversion optimization resulted in a significant boost in sales and customer satisfaction. The new design is not only beautiful but also highly functional, making it easy for customers to find and purchase products. The mobile experience is particularly impressive.",
    rating: 5,
    project: "E-commerce Optimization",
    date: "August 2023",
    duration: "10 weeks",
    budget: "$3,000 - $5,000",
    results: ["400% increase in online sales", "60% improvement in user retention", "Mobile-first responsive design"],
    challenges:
      "Our e-commerce platform had poor conversion rates and wasn't mobile-friendly, resulting in lost sales.",
    solution:
      "Complete e-commerce platform optimization with focus on conversion rate optimization, mobile responsiveness, and user experience improvements.",
    technologies: ["Shopify Plus", "React", "GraphQL", "Klaviyo", "Google Analytics"],
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
      "As a startup founder, I needed someone who could understand our vision and execute it flawlessly. Emmanuel delivered exactly that - a robust platform that scaled with our growth and impressed our investors. His understanding of startup needs and ability to work within tight deadlines was crucial to our success. The platform he built became a key factor in securing our Series A funding.",
    rating: 5,
    project: "Startup Platform Development",
    date: "July 2023",
    duration: "16 weeks",
    budget: "$3,000 - $5,000",
    results: ["Successful product launch", "Investor-ready platform", "Scalable architecture implemented"],
    challenges:
      "We needed to build a complex platform from scratch with limited time and budget, while ensuring it could scale rapidly.",
    solution:
      "Developed a comprehensive startup platform with scalable architecture, investor-ready features, and rapid deployment capabilities.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Vercel", "Stripe"],
  },
]

export default function TestimonialDetailPage({ params }: { params: { slug: string } }) {
  const testimonial = testimonials.find((t) => t.id === params.slug)

  if (!testimonial) {
    notFound()
  }

  return (
    <FuturisticBg className="bg-gradient-to-b from-neutral-100 to-white dark:from-neutral-900 dark:to-black">
      <main className="mx-auto max-w-4xl px-4 py-10 md:py-16">
        <GlassPanel>
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Testimonials
          </Link>

          {/* Header */}
          <div className="flex items-start gap-6 mb-8">
            <Image
              src={testimonial.avatar || "/placeholder.svg"}
              alt={testimonial.name}
              width={80}
              height={80}
              className="rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">{testimonial.name}</h1>
                <div className="flex">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-2">
                {testimonial.role} at {testimonial.company}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">{testimonial.handle}</p>
            </div>
          </div>

          {/* Quote */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur dark:bg-black/20 mb-8">
            <Quote className="w-12 h-12 text-blue-500/60 dark:text-blue-400/60 mb-4" />
            <blockquote className="text-xl leading-relaxed text-neutral-800 dark:text-neutral-200 mb-4">
              "{testimonial.fullQuote}"
            </blockquote>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur dark:bg-black/20">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4">Project Details</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Project:</span>
                  <p className="text-neutral-900 dark:text-neutral-50">{testimonial.project}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Duration:</span>
                  <p className="text-neutral-900 dark:text-neutral-50">{testimonial.duration}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Completed:</span>
                  <p className="text-neutral-900 dark:text-neutral-50">{testimonial.date}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Budget Range:</span>
                  <p className="text-neutral-900 dark:text-neutral-50">{testimonial.budget}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur dark:bg-black/20">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4">Key Results</h3>
              <ul className="space-y-3">
                {testimonial.results.map((result) => (
                  <li key={result} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700 dark:text-neutral-300">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="space-y-6 mb-8">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur dark:bg-black/20">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-3">The Challenge</h3>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">{testimonial.challenges}</p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur dark:bg-black/20">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-3">The Solution</h3>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">{testimonial.solution}</p>
            </div>
          </div>

          {/* Technologies */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur dark:bg-black/20 mb-8">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {testimonial.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur dark:bg-black/20">
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
                Ready to Start Your Success Story?
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                Let's discuss how we can help you achieve similar results for your business.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
              >
                Get Started Today
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>
        </GlassPanel>
      </main>
    </FuturisticBg>
  )
}
