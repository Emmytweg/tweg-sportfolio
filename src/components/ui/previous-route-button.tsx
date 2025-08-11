"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const ROUTE_ORDER = ["/", "/about", "/services", "/projects",  "/resume", "/testimonials", "/contact"] as const

const TITLES: Record<(typeof ROUTE_ORDER)[number], string> = {
  "/": "Home",
  "/about": "About",
  "/services": "Services",

  "/projects": "Projects",
  "/resume": "Resume",

  "/testimonials": "Testimonials",

  "/contact": "Contact",

}


export function PreviousRouteButton({ className }: { className?: string }) {
    const pathname = (usePathname() || "/") as (typeof ROUTE_ORDER)[number] | string

    // Don't render on homepage
    if (pathname === "/") return null

    const currentIndex = ROUTE_ORDER.indexOf(pathname as (typeof ROUTE_ORDER)[number])
    const prevIndex = currentIndex === -1 ? ROUTE_ORDER.length - 1 : (currentIndex - 1 + ROUTE_ORDER.length) % ROUTE_ORDER.length
    const prevPath = ROUTE_ORDER[prevIndex]
    const prevLabel = TITLES[prevPath]

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className={cn("fixed bottom-6 left-6 z-50 md:bottom-8 md:left-8", className)}
        >
            <Link
                href={prevPath}
                aria-label={`Go to previous page: ${prevLabel}`}
                className={cn(
                    "group inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-semibold text-black",
                    "bg-gradient-to-r from-cyan-400 to-purple-400 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]",
                    "transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300",
                )}
            >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                <span>Previous: {prevLabel}</span>
            </Link>
        </motion.div>
    )
}
