"use client"

import { AnimatePresence, motion } from "framer-motion"

export function CrazyRouteTransition({ active }: { active: boolean }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="warp-overlay"
          className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.12 }}
        >
          {/* Scanlines / noise */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.08 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 1px, transparent 2px, transparent 6px)",
            }}
          />

          {/* Flash pulse */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-cyan-300/60 via-white/70 to-fuchsia-300/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.35, times: [0, 0.25, 1], ease: "easeOut" }}
          />

          {/* Staggered skewed stripes sweeping across */}
          <div className="absolute inset-0">
            {Array.from({ length: 7 }).map((_, i) => {
              const delay = 0.05 * i
              const hue = 190 + i * 20 // cyan -> purple
              return (
                <motion.div
                  key={i}
                  className="absolute top-1/2 h-[140vh] w-[22vw] -translate-y-1/2 -skew-x-12 rounded-3xl"
                  style={{
                    left: `${-25 + i * 18}vw`,
                    background: `linear-gradient(180deg, hsl(${hue} 90% 60% / .7), hsl(${hue + 10} 90% 50% / .55))`,
                    boxShadow: "0 0 40px -10px rgba(34,211,238,.6), 0 0 80px -20px rgba(168,85,247,.35)",
                  }}
                  initial={{ x: "-120%", filter: "blur(8px)" }}
                  animate={{ x: "140%", filter: "blur(0px)" }}
                  exit={{ x: "180%", filter: "blur(10px)" }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay }}
                />
              )
            })}
          </div>

          {/* Faint grid rising */}
          <motion.div
            aria-hidden
            className="absolute inset-0 opacity-[0.12]"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 0.12 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
              backgroundSize: "28px 28px, 28px 28px",
              backgroundPosition: "0 0, 0 0",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
