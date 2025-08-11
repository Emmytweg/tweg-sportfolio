"use client"

import { FuturisticBg, GlassPanel } from "@/components/glass"
import { useActionState } from "react"
import { sendContactEmail } from "@/app/actions/sendContactEmail" // ✅ import directly
import { CheckCircle, AlertCircle, Send } from "lucide-react"

export default function ContactPage() {
  const [state, action, isPending] = useActionState(sendContactEmail, null)

  return (
    <FuturisticBg>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <GlassPanel>
          {state?.success && (
            <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-xl">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <p>{state.message}</p>
            </div>
          )}
          {state?.error && (
            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <p>{state.error}</p>
            </div>
          )}

          <form action={action} className="space-y-6">
            {/* form fields exactly as you have them */}
            <button type="submit" disabled={isPending}>
              {isPending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </GlassPanel>
      </main>
    </FuturisticBg>
  )
}
