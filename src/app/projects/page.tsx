"use client"

import { useRef } from "react"
import Link from "next/link"
import { FuturisticBg, GlassPanel } from "@/components/glass"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

// Demo data: replace video URL, title, skills, and href with your real projects
const projects: {
  title: string
  skills: string[]
  href: string
  video: string
  poster?: string
}[] = [
  {
    title: "Travel Website",
    skills: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://tweg-travel-app.vercel.app/",
    video: "/travel.mp4",
  },
  {
    title: "TWEG's Cometica Fashion Store",
    skills: ["Next.js", "React", "Tailwind", "SEO"],
    href: "https://cometica.vercel.app/",
    video: "/cometica.mp4",
  },
  {
    title: "Syncta Agency Website",
   skills: ["Next.js", "React", "Tailwind", "SEO"],
    href: "https://syncta-agency-template-by-tweg.vercel.app/",
    video: "/syncta.mp4",
  },
  {
    title: "IP - Address/Location Tracker",
    skills: ["ReactJS", "Axios", "CSS3"],
    href: "https://emmytweg.github.io/ip-address-/",
    video: "/iptracker.mp4",
  },
  {
    title: "Mini Galaxy Website",
    skills: ["ReactJS", "CSS3", "JavaScript"],
    href: "https://emmytweg.github.io/galaxy-landing/",
    video: "/galaxy.mp4",
  },
   {
    title: "Election Website",
    skills: ["NextJs", "TailwindCSS", "MongoDB", "NodeJS"],
    href: "https://election-website-xi.vercel.app/",
    video: "/election.mp4",
  },
   {
    title: "Jewellery Website",
    skills: ["Shopify", "Stripe"],
    href: "https://enchante-bijoux.myshopify.com/",
    video: "/enchante.mp4",
  },
  {
    title: "TechGlam",
    skills: ["Shopify", "Stripe"],
    href: "https://techglam-boutique.myshopify.com/",
    video: "/techglam.mp4",
  },
]

export default function AboutPage() {
  return (
    <FuturisticBg className="bg-gradient-to-b from-neutral-100 to-white dark:from-neutral-900 dark:to-black">
      <main className="mx-auto max-w-7xl px-4 py-10 md:py-16">
        <GlassPanel>
          {/* Hero copy */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-wider text-neutral-500 dark:text-neutral-400">
              Emmanuel Ayanfeoluwa
            </p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl">
              From Vision To Reality,
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
               Take A Look Into My Previous Worlds
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600 dark:text-neutral-300 sm:text-base">
              I build fast, accessible web experiences and run growth‑ready social campaigns. Explore selected projects
              below — hover to view skills, click to open the live build. <b> For Locked Websites Access With Password 1234 </b>
            </p>
          </div>

          {/* Curved video gallery */}
          <section className="relative mx-auto mt-8 w-full sm:mt-10">
            {/* On small screens: horizontal scroll row */}
            <div className="flex gap-4 overflow-x-auto pb-2 md:hidden">
              {projects.map((p, i) => (
                <ProjectVideoCard key={`m-${i}`} project={p} className="min-w-[70%]" />
              ))}
            </div>

            {/* On md+: 7-card arc with tilt/scale transforms */}
            <div
              className="relative hidden grid-cols-8 gap-4 md:grid"
              style={{
                perspective: "1600px",
                perspectiveOrigin: "50% 40%",
              }}
            >
              {projects.map((p, i) => {
                // Layout math for the arc
                const index = i - 3 // center around 0
                const rotateZ = index * 6 // degrees left/right tilt
                const rotateY = -Math.sign(index) * Math.min(Math.abs(index) * 6, 18) // slight Y tilt
                const translateY = Math.abs(index) * 6 // push edges down a bit
                const scale = 1 - Math.abs(index) * 0.04 // smaller toward edges

                return (
                  <div
                    key={`d-${i}`}
                    className="relative"
                    style={{
                      transform: `translateY(${translateY}px) rotateZ(${rotateZ}deg) rotateY(${rotateY}deg) scale(${scale})`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <ProjectVideoCard project={p} />
                  </div>
                )
              })}
            </div>
          </section>

          {/* Feature blurb row (optional, matches reference style) */}
           <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Websites That Attract Clients",
                desc: "Get a clean, modern site that showcases your value and speaks to the problems your audience cares about. Clear messaging and UX turn visitors into enquiries from day one.",
              },
              {
                title: "Designed to Boost Sales",
                desc: "Conversion‑focused layouts, persuasive copy, and strong CTAs guide users to take action—book a call, request a quote, or buy now. Every section is built to grow revenue.",
              },
              {
                title: "Traffic That’s Ready to Buy",
                desc: "SEO, fast performance, and social content funnels bring qualified visitors and build trust. Analytics reveal what’s working so we keep improving and scaling results.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur dark:bg-black/20"
              >
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">{f.title}</h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </main>
    </FuturisticBg>
  )
}

function ProjectVideoCard({
  project,
  className,
}: {
  project: { title: string; skills: string[]; href: string; video: string; poster?: string }
  className?: string
}) {
  const ref = useRef<HTMLVideoElement | null>(null)

  const onEnter = () => {
    const v = ref.current
    if (!v) return
    try {
      v.currentTime = 0
      void v.play()
    } catch {}
  }
  const onLeave = () => {
    const v = ref.current
    if (!v) return
    try {
      v.pause()
    } catch {}
  }

  return (
    <Link
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block aspect-[3/4] w-full overflow-hidden rounded-3xl ring-1 ring-black/5 transition-transform hover:-translate-y-1 hover:shadow-2xl dark:ring-white/10 ${className ?? ""}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* subtle gradient bg behind video */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-400/10" />
      {/* video */}
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover"
        src={project.video}
        poster={project.poster}
        muted
        playsInline
        loop
        preload="metadata"
      />
      {/* glass overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-black/10 backdrop-blur-[1px] transition-opacity group-hover:opacity-0 dark:bg-black/20" />
      {/* hover reveal content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end rounded-3xl p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div className="w-full rounded-2xl border border-white/20 bg-black/50 p-3 text-white backdrop-blur">
          <div className="flex items-center justify-between gap-3">
            <h4 className="text-sm font-semibold">{project.title}</h4>
            <ExternalLink className="h-4 w-4 opacity-80" />
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.skills.map((s) => (
              <Badge key={s} variant="secondary" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
                {s}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      {/* neon edge on hover */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 blur transition-opacity duration-200 group-hover:opacity-100"
        style={{ background: "linear-gradient(120deg, rgba(34,211,238,.5), rgba(168,85,247,.5))" }}
      />
    </Link>
  )
}
