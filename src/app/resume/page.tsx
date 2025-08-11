import { FuturisticBg, GlassPanel } from "@/components/glass"

export default function ResumePage() {
  return (
    <FuturisticBg className="bg-gradient-to-b from-neutral-100 to-white dark:from-neutral-900 dark:to-black">
      <main className="mx-auto max-w-4xl px-4 py-10 md:py-16">
        <GlassPanel>
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">Resume</h1>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">
            Snapshot of skills and experience. Download on request.
          </p>
          <ul className="mt-4 grid gap-2 text-neutral-700 dark:text-neutral-300">
            <li>• Next.js, React, TypeScript, Shopify Tailwind</li>
            <li>• Content strategy, SEO, analytics, paid social</li>
            <li>• CI/CD, performance, accessibility</li>
          </ul>
          <button className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-purple-400 px-5 py-3 font-semibold text-black hover:opacity-90">
        <a href='/my main resume (1).pdf' download='myresume.pdf'>    Download PDF</a>
          </button>
          
        </GlassPanel>
      </main>
    </FuturisticBg>
  )
}
