"use client"

import type React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { CrazyRouteTransition } from "@/components/crazy-transition"
import { NextRouteButton } from "@/components/next-route-button"
import { PreviousRouteButton } from "@/components/ui/previous-route-button"

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [showWarp, setShowWarp] = useState(false)

  // Trigger the "crazy" overlay on every path change
  useEffect(() => {
    setShowWarp(true)
    const t = setTimeout(() => setShowWarp(false), 800) // total overlay time
    return () => clearTimeout(t)
  }, [pathname])

  return (
    <>
      {/* Crazy neon warp overlay */}
      <CrazyRouteTransition active={showWarp} />
<PreviousRouteButton />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          className="min-h-[100svh] overflow-x-clip will-change-transform"
          // exiting page: tilt back, shrink, blur and fade
          exit={{ opacity: 0, scale: 0.92, rotateX: 8, rotateY: -6, filter: "blur(6px)" }}
          // entering page: pop in from slight forward tilt with glow
          initial={{ opacity: 0, scale: 0.98, rotateX: -6, rotateY: 6, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ perspective: 1200 }}
        >
          {children}
          {/* Global floating "Next" button */}
        </motion.div>
          <NextRouteButton />

      </AnimatePresence>
    </>
  )
}
