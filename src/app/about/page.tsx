import type React from "react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Github, Instagram, Twitter, Mail } from "lucide-react"
import { FuturisticBg, GlassPanel } from "@/components/glass"
import {SiUpwork} from 'react-icons/si'
import { Briefcase } from "lucide-react"
export const metadata: Metadata = {
  title: "About – Emmanuel Ayanfeoluwa",
  description:
    "Emmanuel Ayanfeoluwa – Web Developer and Social Media Manager with 3 years of experience building fast sites and growing communities.",
}

export default function AboutPage() {
  return (
    <FuturisticBg className="bg-gradient-to-b from-neutral-100 to-white dark:from-neutral-900 dark:to-black">
      <main className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <GlassPanel className="grid gap-8 md:grid-cols-[1fr_1.3fr] items-center">
          {/* Portrait */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-500/40 via-transparent to-purple-500/40 blur-xl" />
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/20 bg-black/30 backdrop-blur">
              <Image
                src="/mydp.jpg"
                alt="Emmanuel Ayanfeoluwa portrait"
                width={640}
                height={800}
                className="h-[360px] w-full object-cover md:h-[520px]"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative space-y-6">
            <div className="h-1.5 w-16 rounded bg-gradient-to-r from-cyan-400 to-purple-400" aria-hidden="true" />
            <header>
              <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl">
                Emmanuel Ayanfeoluwa
              </h1>
              <p className="mt-1 text-neutral-600 dark:text-neutral-300">Web Developer · Social Media Manager</p>
            </header>

            <p className="max-w-prose leading-relaxed text-neutral-700 dark:text-neutral-200">
              I’m a web developer and social media manager with 3 years of experience turning ideas into fast,
              accessible products and measurable growth. I build with modern stacks like Next.js, TypeScript, and
              Tailwind, and pair that with clear content strategy, SEO, and analytics. From wireframes to deployment, I
              ship end‑to‑end experiences on Vercel, automate content workflows, and run data‑driven campaigns that
              increase reach, retention, and conversions. My focus is simple: clean design, reliable code, and social
              storytelling that moves the needle.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 ">
              <Link
                href="mailto:emmanuelolamide706@gmail.com"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-400 to-purple-400 px-4 py-2 font-medium text-black hover:opacity-90"
              >
                <Mail className="h-4 w-4  " />
                Contact
              </Link>
              <Social href="https://x.com/emmy_tweg" label="Twitter">
                <Twitter className="h-5 w-5 text-neutral-600 dark:text-neutral-300"  />
              </Social>
              <Social href="https://instagram.com/_twegx" label="Instagram">
                <Instagram className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
              </Social>
              <Social href="https://github.com/Emmytweg" label="GitHub">
                <Github className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
              </Social>
              <Social href="https://www.upwork.com/freelancers/~0181316f16e2f72b6c?mp_source=share" label="Upwork">
                <SiUpwork className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
              </Social>
              <Social href="https://contra.com/wifi_wealth_gepbpxdn?referralExperimentNid=SOCIAL_REFERRAL_PROGRAM&referrerUsername=wifi_wealth_gepbpxdn" label="Contra">
                <Briefcase className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
              </Social>
            </div>
          </div>
        </GlassPanel>
      </main>
    </FuturisticBg>
  )
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-white/90 backdrop-blur hover:bg-white/10"
    >
      {children}
    </Link>
  )
}
