"use client"

import type React from "react"
import { cn } from "@/lib/utils"

export function FuturisticBg({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative min-h-[100svh] overflow-hidden", className)}>
      {/* Layer 1: subtle dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12] dark:opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.6) 1px, transparent 0), radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
          backgroundSize: "24px 24px, 24px 24px",
          backgroundPosition: "0 0, 12px 12px",
          mixBlendMode: "overlay",
        }}
      />
      {/* Layer 2: gradient beams */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[35rem] w-[35rem] rounded-full bg-gradient-to-tr from-cyan-500/20 via-teal-400/10 to-purple-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 -bottom-40 h-[35rem] w-[35rem] rounded-full bg-gradient-to-tr from-purple-500/20 via-fuchsia-400/10 to-cyan-500/10 blur-3xl" />

      {/* Layer 3: scanline shimmer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "linear-gradient(transparent 65%, rgba(255,255,255,0.1) 66%, transparent 67%)",
          backgroundSize: "100% 6px",
        }}
      />
      {children}
    </div>
  )
}

export function GlassPanel({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className="relative">
      {/* Outer neon ring */}
      <div className="pointer-events-none absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-cyan-500/40 via-transparent to-purple-500/40 blur-md opacity-60" />
      {/* Panel */}
      <div
        className={cn(
          "relative rounded-3xl border border-white/15 bg-white/10 p-4 sm:p-6 md:p-8",
          "backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_8px_40px_-12px_rgba(0,0,0,0.5)]",
          "dark:bg-black/20 dark:border-white/10",
          className,
        )}
      >
        {/* Inner highlight */}
        <div className="pointer-events-none absolute inset-px rounded-[calc(theme(borderRadius.3xl)-1px)] bg-gradient-to-br from-white/10 via-transparent to-white/5" />
        {children}
      </div>
    </div>
  )
}
