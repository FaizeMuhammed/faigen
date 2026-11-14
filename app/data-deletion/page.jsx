import React from "react"
import Link from "next/link"
import LegalShell from "@/components/sb/LegalShell"
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
    <LegalShell narrow badge="Data Deletion" title="Delete your data" sub="You control the data connected to your Instagram account and your Faigen account. Here is how to remove it.">
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
    </LegalShell>
  )
}
