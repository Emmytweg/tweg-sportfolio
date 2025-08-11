"use client"

import { useCallback, useEffect, useMemo, useState, type CSSProperties } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Home, User, Moon, FolderGit2, Mail, FileText, Wrench, Quote, type LucideIcon } from "lucide-react"
import { FuturisticBg, GlassPanel } from "@/components/glass"

type Metric = {
  id: "home" | "aboutMe" | "projects" | "contact" | "resume" | "services" | "testimonials" | "darkMode"
  label: string
  icon: LucideIcon
  color: string
  position: CSSProperties
  link?: string
}
type ThemePref = "auto" | "light" | "dark"

const baseMetrics: Metric[] = [
  { id: "home", label: "Home", link: "/", icon: Home, color: "bg-cyan-500", position: { top: "10%", left: "15%" } },
  {
    id: "aboutMe",
    label: "About Me",
    link: "/about",
    icon: User,
    color: "bg-purple-500",
    position: { top: "30%", left: "8%" },
  },
  {
    id: "projects",
    label: "Projects",
    link: "/projects",
    icon: FolderGit2,
    color: "bg-neutral-800",
    position: { top: "50%", left: "15%" },
  },
  {
    id: "contact",
    label: "Contact",
    link: "/contact",
    icon: Mail,
    color: "bg-teal-600",
    position: { top: "10%", right: "15%" },
  },
  {
    id: "resume",
    label: "Resume",
    link: "/resume",
    icon: FileText,
    color: "bg-neutral-200",
    position: { top: "30%", right: "8%" },
  },
  {
    id: "services",
    label: "Services",
    link: "/services",
    icon: Wrench,
    color: "bg-neutral-300",
    position: { top: "50%", right: "15%" },
  },
  {
    id: "testimonials",
    label: "Testimonials",
    link: "/testimonials",
    icon: Quote,
    color: "bg-neutral-300",
    position: { top: "5%", left: "40%" },
  },
  { id: "darkMode", label: "Mode", icon: Moon, color: "bg-neutral-300", position: { top: "5%", left: "50%" } },
]

// Tailwind dark toggling
function setHtmlDarkClass(enabled: boolean) {
  if (typeof document === "undefined") return
  document.documentElement.classList.toggle("dark", enabled)
}
function getHtmlIsDark(): boolean {
  if (typeof document === "undefined") return false
  return document.documentElement.classList.contains("dark")
}
function isNightNow() {
  const hour = new Date().getHours()
  return hour >= 19 || hour < 6
}

export default function Page() {
  const [greeting, setGreeting] = useState("")
  const [date, setDate] = useState("")
  const [fullTime, setFullTime] = useState("")

  const [temperature, setTemperature] = useState<number | null>(null)
  const [temperatureUnit] = useState<"celsius" | "fahrenheit">("celsius")
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null)
  const [tempLoading, setTempLoading] = useState(true)
  const [tempError, setTempError] = useState<string | null>(null)

  const [themePref, setThemePref] = useState<ThemePref>("auto")
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme-pref")
      if (saved === "auto" || saved === "light" || saved === "dark") setThemePref(saved)
    } catch {}
  }, [])
  useEffect(() => {
    try {
      localStorage.setItem("theme-pref", themePref)
    } catch {}
  }, [themePref])

  const applyThemeForPref = useCallback(() => {
    if (!mounted) return
    if (themePref === "light") setHtmlDarkClass(false)
    else if (themePref === "dark") setHtmlDarkClass(true)
    else setHtmlDarkClass(isNightNow())
    setIsDark(getHtmlIsDark())
  }, [mounted, themePref])

  useEffect(() => {
    applyThemeForPref()
    if (themePref === "auto") {
      const id = setInterval(applyThemeForPref, 60_000)
      return () => clearInterval(id)
    }
  }, [themePref, applyThemeForPref])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hour = now.getHours()
      const mins = now.getMinutes().toString().padStart(2, "0")
      const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long" }
      setFullTime(`${hour}:${mins}`)
      setDate(now.toLocaleDateString("en-US", options))
      if (hour >= 5 && hour < 12) setGreeting("Good Morning")
      else if (hour >= 12 && hour < 17) setGreeting("Good Afternoon")
      else if (hour >= 17 && hour < 20) setGreeting("Good Evening")
      else setGreeting("Good Night")
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      setCoords({ lat: 40.7128, lon: -74.006 })
      return
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => setCoords({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
      () => setCoords({ lat: 40.7128, lon: -74.006 }),
      { enableHighAccuracy: true, maximumAge: 600000, timeout: 10000 },
    )
  }, [])

  useEffect(() => {
    const fetchTemp = async () => {
      if (!coords) return
      try {
        setTempLoading(true)
        setTempError(null)
        const res = await fetch(`/api/weather?lat=${coords.lat}&lon=${coords.lon}&unit=${temperatureUnit}`)
        if (!res.ok) throw new Error("Failed")
        const json = await res.json()
        if (typeof json.temperature === "number") setTemperature(json.temperature)
        else {
          setTemperature(null)
          setTempError("No temperature available")
        }
      } catch {
        setTemperature(null)
        setTempError("Weather unavailable")
      } finally {
        setTempLoading(false)
      }
    }
    fetchTemp()
  }, [coords, temperatureUnit])

  const metrics: Metric[] = useMemo(
    () =>
      baseMetrics.map((m) =>
        m.id === "darkMode"
          ? {
              ...m,
              label: mounted
                ? `${isDark ? "Light Mode" : "Dark Mode"}${themePref === "auto" ? " • Auto" : ""}`
                : "Mode",
            }
          : m,
      ),
    [isDark, mounted, themePref],
  )

  const handleMetricClick = (metricId: Metric["id"]) => {
    if (metricId === "darkMode") {
      if (themePref === "auto") setThemePref(isDark ? "light" : "dark")
      else setThemePref((prev) => (prev === "dark" ? "light" : "dark"))
      setTimeout(applyThemeForPref, 0)
    }
  }

  return (
    <FuturisticBg className="bg-gradient-to-b from-neutral-100 to-white dark:from-neutral-900 dark:to-black">
      <main className="mx-auto max-w-5xl px-4 py-8 md:py-12">
        <GlassPanel className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden">
          <header className="mb-4 sm:mb-6 md:mb-8 flex items-center justify-between">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <h1 className="text-base sm:text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-200">
                {greeting}
              </h1>
              <p className="text-[11px] sm:text-xs md:text-sm text-neutral-600 dark:text-neutral-400">{date}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 md:gap-4 text-neutral-700 dark:text-neutral-300"
            >
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 shadow-[0_0_12px_2px_rgba(34,211,238,0.6)]" />
                <span className="text-sm font-medium tabular-nums">{fullTime}</span>
              </div>
              <span className="text-sm font-medium tabular-nums">
                {tempLoading
                  ? "..."
                  : tempError
                    ? "N/A"
                    : temperature !== null
                      ? `${Math.round(temperature)}°${temperatureUnit === "celsius" ? "C" : "F"}`
                      : "N/A"}
              </span>
            </motion.div>
          </header>

          <section className="relative flex h-full flex-col items-center justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.35, type: "spring", stiffness: 260 }}
            >
              <div className="relative">
                <div className="pointer-events-none absolute -inset-2 rounded-full dark:bg-gradient-to-r from-cyan-500/40 to-purple-500/40 blur-lg" />
                <div className="flex h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 items-center justify-center overflow-hidden rounded-full ring-1 ring-white/30 bg-neutral-900/60">
                  <Image
                    src="/mydp.jpg"
                    alt="Profile headshot"
                    width={192}
                    height={192}
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="mt-4 md:mt-6 text-center px-2"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-neutral-900 dark:text-neutral-50">
                {"Hello, I'm Emmanuel"}
              </h2>
              <p className="mt-1 text-[10px] sm:text-xs md:text-sm font-bold text-neutral-600 dark:text-neutral-400 tracking-wide">
                {"WEBSITE DEVELOPER  •  SOCIAL MEDIA MANAGER  •  TECH ENTHUSIAST"}
              </p>
              {themePref !== "auto" && (
                <button
                  onClick={() => setThemePref("auto")}
                  className="mt-2 rounded px-2 py-1 text-[11px] sm:text-xs text-neutral-700 dark:text-neutral-300 underline underline-offset-2 hover:text-neutral-900 dark:hover:text-white"
                >
                  {"Use Auto (time of day)"}
                </button>
              )}
            </motion.div>

            {/* Mobile grid */}
            <div className="mt-5 w-full h-96 px-1 sm:px-2 md:hidden">
              <div className="grid grid-cols-4 gap-3">
                {metrics.map((metric, index) => {
                  const isLightBg = metric.color.includes("neutral-2") || metric.color.includes("neutral-3")
                  const iconColor = isLightBg ? "text-neutral-800 dark:text-white" : "text-white"

                  const buttonCore = (
                    <motion.button
                      key={`m-mobile-${metric.id}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => handleMetricClick(metric.id)}
                      className={`flex flex-col items-center justify-center rounded-2xl p-2 sm:p-3 shadow-md ring-1 ring-white/20 ${metric.color} bg-opacity-90 backdrop-blur-xl`}
                      aria-label={metric.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.05 }}
                    >
                      <metric.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${iconColor}`} />
                      <span
                        className={`mt-1 text-[10px] sm:text-xs font-medium ${isLightBg ? "text-neutral-900 dark:text-white" : "text-white"}`}
                      >
                        {metric.label.replace(" • Auto", "")}
                      </span>
                    </motion.button>
                  )

                  return metric.id === "darkMode" || !metric.link ? (
                    <div key={`wrap-m-${metric.id}`}>{buttonCore}</div>
                  ) : (
                    <Link key={`wrap-m-${metric.id}`} href={metric.link}>
                      {buttonCore}
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* md+ floating buttons */}
            <div className="hidden md:block">
              {metrics.map((metric, index) => {
                const isLightBg = metric.color.includes("neutral-2") || metric.color.includes("neutral-3")
                const iconColor = isLightBg ? "text-neutral-800 dark:text-white" : "text-white"

                const buttonCore = (
                  <motion.button
                    key={`m-desktop-${metric.id}`}
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleMetricClick(metric.id)}
                    className={`relative flex h-14 w-14 items-center justify-center rounded-full ring-1 ring-white/20 shadow-[0_6px_30px_-10px_rgba(0,0,0,0.5)] transition sm:h-16 sm:w-16 ${metric.color} bg-opacity-90 backdrop-blur-xl`}
                    aria-label={metric.label}
                  >
                    <div className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-400/40 to-purple-400/40 blur-md opacity-60" />
                    <metric.icon className={`relative h-5 w-5 sm:h-6 sm:w-6 ${iconColor}`} />
                  </motion.button>
                )

                return (
                  <motion.div
                    key={metric.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.08, type: "spring", stiffness: 200 }}
                    className="group absolute"
                    style={metric.position}
                  >
                    {metric.id === "darkMode" || !metric.link ? (
                      buttonCore
                    ) : (
                      <Link href={metric.link}>{buttonCore}</Link>
                    )}
                    <div className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-black/70 px-2 py-1 text-[10px] text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                      {metric.label}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </section>
        </GlassPanel>

        {/* base pedestal glows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="mt-4 flex justify-center"
        >
          <div className="h-6 w-28 rounded-full bg-gradient-to-r from-cyan-400/50 via-teal-300/40 to-purple-400/50 blur-[2px]" />
        </motion.div>
      </main>
    </FuturisticBg>
  )
}
