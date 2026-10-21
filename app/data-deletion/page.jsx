import React from "react"
import Link from "next/link"
import { Shield, Mail, ArrowLeft, Trash2, Unplug, Clock } from "lucide-react"

export const metadata = {
  title: "Data Deletion | Faigen",
  description: "How to delete your data from Faigen, including data connected to an Instagram account.",
}

const steps = [
  {
    icon: Unplug,
    title: "Option 1: Disconnect Instagram from the Faigen dashboard",
    body: [
      "Sign in to your Faigen dashboard and open Settings.",
      "Under Instagram, choose Disconnect.",
      "We immediately stop accessing your account and delete the stored access token.",
    ],
  },
  {
    icon: Shield,
    title: "Option 2: Remove Faigen from Instagram",
    body: [
      "In Instagram, go to Settings, then Website permissions (or Apps and websites).",
      "Find Faigen and choose Remove.",
      "Instagram notifies us, and we disconnect your account and delete the stored access token.",
    ],
  },
  {
    icon: Mail,
    title: "Option 3: Ask us to delete everything",
    body: [
      "Email info@faigen.in with the subject \"Data deletion request\".",
      "Send it from the email registered with your Faigen account, and include your Instagram username if you connected one.",
      "We confirm by email and complete the deletion within 30 days.",
    ],
  },
]

const deleted = [
  "Instagram account ID, username, and the stored access token",
  "Comments, direct messages, and replies handled through your connected account",
  "Analytics and competitor-tracking data collected for your account",
  "Your conversation history and customer profiles held in Faigen",
]

const retained = [
  "Order and billing records that we are required to keep for legal and accounting purposes (up to 1 year)",
  "Anonymous, aggregated usage statistics that do not identify you",
]

export default function DataDeletion() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-[#1A1A1A]">

      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <ArrowLeft size={18} className="text-gray-400 group-hover:text-[#2563EB] transition-colors" />
            <img src="/logonew.png" alt="Faigen" style={{ height: "32px", width: "auto", objectFit: "contain" }} />
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs font-bold text-gray-400 hover:text-[#2563EB] uppercase tracking-widest transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs font-bold text-gray-400 hover:text-[#2563EB] uppercase tracking-widest transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </nav>

      <header className="pt-20 pb-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-xs font-bold mb-6">
            <Trash2 size={14} /> Data Deletion
          </div>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-gray-900">
            Delete your data
          </h1>
          <p className="text-gray-500 font-medium">
            You control the data connected to your Instagram account and your Faigen account. Here is how to remove it.
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 pb-32">
        <div className="space-y-6 text-gray-600 leading-relaxed text-[15px]">

          {steps.map(({ icon: Icon, title, body }) => (
            <section key={title} className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <Icon size={17} className="text-[#2563EB]" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
              </div>
              <ol className="space-y-2 list-decimal list-inside">
                {body.map(line => <li key={line}>{line}</li>)}
              </ol>
            </section>
          ))}

          <section className="bg-gray-50 rounded-3xl p-7 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">What we delete</h2>
            <ul className="space-y-2">
              {deleted.map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-3">What we may keep</h2>
            <ul className="space-y-2">
              {retained.map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-blue-50/60 rounded-3xl p-7 border border-blue-100">
            <div className="flex items-center gap-3 mb-3">
              <Clock size={18} className="text-[#2563EB]" />
              <h2 className="text-lg font-semibold text-gray-900">If you messaged or commented on a business</h2>
            </div>
            <p>
              If you are a customer who messaged or commented on a business that uses Faigen, email
              {" "}<span className="font-semibold text-gray-800">info@faigen.in</span> with your Instagram username and
              we will delete the conversation data we hold about you. Conversation data is in any case removed
              automatically after 90 days.
            </p>
          </section>

          <p className="text-center text-[13px] text-gray-400 pt-4">
            Questions? Email <span className="font-semibold text-gray-500">info@faigen.in</span> or read our{" "}
            <Link href="/privacy" className="text-[#2563EB] hover:underline">Privacy Policy</Link>.
          </p>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-gray-400 font-medium">© 2026 Faigen Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-[13px] text-gray-400 hover:text-[#2563EB] font-medium transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-[13px] text-gray-400 hover:text-[#2563EB] font-medium transition-colors">Terms of Service</Link>
            <Link href="/" className="text-[13px] text-gray-400 hover:text-[#2563EB] font-medium transition-colors">Back to Home</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
