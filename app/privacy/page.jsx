'use client'

import React from "react"
import { Shield, Mail, MapPin, Globe, ArrowLeft, Lock } from "lucide-react"
import Link from "next/link"
import LegalShell from '@/components/sb/LegalShell'

const sections = [
  "Introduction",
  "Information We Collect",
  "Purpose of Data Collection",
  "AI Agent Communication & Platform Integrations",
  "Data Storage & Security",
  "Data Retention Policy",
  "Third-Party Services",
  "User Rights",
  "Client Responsibilities",
  "Children's Privacy",
  "Limitation of Liability",
  "Payment Terms & Subscription",
  "Service Reliability",
  "Termination of Services",
  "Compliance with Laws",
  "Updates to This Policy",
  "Contact Information",
]

export default function PrivacyPolicy() {
  return (
    <LegalShell badge="Privacy Policy" title="Privacy Policy" sub="Last updated: October 2026 · Kerala, India" contents={sections} prefix="section-">

            <div className="space-y-14 text-gray-600 leading-relaxed text-[15px]">

              {/* 1 */}
              <section id="section-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                <p>
                  Welcome to Faigen ("Company", "we", "us", "our"), a technology agency based in Kerala, India.
                  Faigen specializes in building websites, web applications, and AI-powered automation agents for businesses.
                  This document outlines how we collect, use, store, and protect information when you use our services,
                  interact with AI agents developed or operated by us, or engage with platforms powered by Faigen.
                </p>
                <p className="mt-4">
                  By using our services, you agree to the terms outlined in this policy.
                </p>
              </section>

              {/* 2 */}
              <section id="section-2">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                <div className="space-y-4">
                  {[
                    { title: 'Personal Information', items: ['Name', 'Phone number', 'Email address'] },
                    { title: 'Communication Data', items: ['Messages sent via WhatsApp and Instagram to AI agents operated by Faigen', 'Customer queries, responses, and interaction logs'] },
                    { title: 'Instagram Data (if you connect Instagram)', items: ['Collected only when a business connects its own Instagram account to Faigen', 'Instagram account ID, username, and account type', 'Comments on the business\'s posts and Reels, and the replies we post on its behalf', 'Direct messages sent to the connected business account', 'Post and Reel performance metrics (such as views, reach, and follower counts) for the connected account', 'Publicly available information about other business or creator accounts that the business chooses to track', 'An access token that lets us act for the connected account, stored encrypted'] },
                    { title: 'Transactional Information', items: ['Order details (product, quantity, delivery address)', 'Payment-related references (handled via third-party providers, if applicable)'] },
                    { title: 'Client Business Information', items: ['Business data provided by our clients for service delivery', 'Product/service catalogs, pricing, and operational workflows'] },
                    { title: 'Technical Data', items: ['IP address', 'Browser type and device information', 'Website usage and interaction analytics'] },
                  ].map(group => (
                    <div key={group.title} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                      <p className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-3">{group.title}</p>
                      <ul className="space-y-1.5">
                        {group.items.map(item => (
                          <li key={item} className="flex items-start gap-2 text-[14px] text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* 3 */}
              <section id="section-3">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Purpose of Data Collection</h2>
                <p className="mb-4">We use collected information strictly for the following purposes:</p>
                <ul className="space-y-2">
                  {[
                    'Deliver AI-powered customer interaction services',
                    'Process and manage orders through automated systems',
                    'Improve AI performance, accuracy, and response quality',
                    'Provide support and service communication to clients',
                    'Monitor and analyze system performance and usage trends',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-50 border border-green-100 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 font-semibold text-gray-700">We do not sell personal data to third parties.</p>
              </section>

              {/* 4 */}
              <section id="section-4" className="bg-blue-50/60 p-8 rounded-3xl border border-blue-100">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. AI Agent Communication & Platform Integrations</h2>
                <p>
                  Faigen integrates with third-party platforms, including Meta Platforms Inc. (WhatsApp Business API, Instagram API).
                  All communications processed via these platforms are subject to their respective Terms of Service and
                  handled only for the purpose of delivering contracted services.
                  Faigen does not independently distribute or monetize message data.
                </p>
                <p className="mt-4">
                  <span className="font-semibold text-gray-800">Instagram.</span> A business can connect its Instagram
                  Business or Creator account to Faigen by signing in with Instagram and approving the permissions
                  requested. With that approval, Faigen reads comments and direct messages on that account, sends
                  automated direct replies and public replies to comments, and shows performance analytics to the
                  business. We act only for the connected account, only within the permissions granted, and only to
                  deliver the service the business has set up. Information about other accounts is limited to what is
                  publicly available. We do not use Instagram data for advertising and do not sell or share it with
                  data brokers. A business can disconnect its Instagram account at any time from the Faigen dashboard
                  or through Instagram's settings, after which we stop accessing it.
                </p>
              </section>

              {/* 5 */}
              <section id="section-5">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Storage & Security</h2>
                <p>
                  All data is securely stored on infrastructure hosted by DigitalOcean (Bangalore, India).
                  Security measures include SSL encryption, role-based access control, secure database management,
                  and regular system monitoring and audits. While we implement industry-standard protections,
                  no system is completely immune to risk.
                </p>
              </section>

              {/* 6 */}
              <section id="section-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Retention Policy</h2>
                <p className="mb-5">We retain data only as long as necessary:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: 'Conversation Data', value: 'Up to 90 Days' },
                    { label: 'Order & Transaction Data', value: 'Up to 1 Year' },
                    { label: 'Instagram Comments', value: 'Up to 90 Days' },
                    { label: 'Instagram Insight Numbers', value: 'Up to 13 Months' },
                  ].map(item => (
                    <div key={item.label} className="p-5 rounded-2xl border border-gray-100 bg-white shadow-sm">
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-xl font-black text-gray-900">{item.value}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 italic text-gray-500">
                  Data may be deleted earlier upon written request, subject to operational and legal requirements.
                </p>
              </section>

              {/* 7 */}
              <section id="section-7">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Third-Party Services</h2>
                <p className="mb-4">Faigen relies on the following third-party services:</p>
                <div className="flex flex-wrap gap-2">
                  {['Meta Platforms Inc.', 'Groq', 'Google (Gemini)', 'OpenAI', 'Anthropic', 'DigitalOcean', 'MongoDB'].map(service => (
                    <span key={service} className="px-4 py-2 rounded-xl bg-gray-100 text-gray-700 text-[13px] font-semibold">
                      {service}
                    </span>
                  ))}
                </div>
                <p className="mt-4">
                  <span className="font-semibold text-gray-800">AI providers.</span> Replies are written by AI language
                  models. For each business, Faigen uses one of Groq, Google (Gemini), OpenAI or Anthropic. To write a
                  reply, we send that provider the customer's message, the recent conversation, and the business
                  information the agent needs to answer. We do not send it for any other purpose, and we do not sell it.
                </p>
                <p className="mt-4 text-gray-500">
                  These providers have their own privacy policies governing data usage.
                </p>
              </section>

              {/* 8 */}
              <section id="section-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. User Rights</h2>
                <p className="mb-4">Users have the right to:</p>
                <ul className="space-y-2">
                  {[
                    'Access personal data held by Faigen',
                    'Request correction of inaccurate information',
                    'Request deletion of personal data',
                    'Opt out of automated communication at any time',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-gray-500">
                  Requests can be made via official communication channels provided by Faigen.
                  To delete your data, including data connected to an Instagram account, follow the steps on our{' '}
                  <Link href="/data-deletion" className="text-[#2563EB] font-semibold hover:underline">Data Deletion</Link> page.
                </p>
              </section>

              {/* 9 */}
              <section id="section-9">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Client Responsibilities</h2>
                <p className="mb-4">Businesses using Faigen services agree to:</p>
                <ul className="space-y-2">
                  {[
                    'Provide accurate and lawful data',
                    'Obtain necessary user consent before data collection',
                    'Use AI automation in compliance with applicable laws',
                    'Avoid misuse of the platform for spam, fraud, or illegal activities',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-gray-500">Faigen is not liable for misuse of services by clients.</p>
              </section>

              {/* 10 */}
              <section id="section-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Children's Privacy</h2>
                <p>
                  Faigen's services are not intended for individuals under the age of 18.
                  We do not knowingly collect personal data from children. If we become aware that data has been
                  collected from a minor without verified parental or guardian consent, we will take immediate steps
                  to delete such information. Parents or guardians who believe that their child has provided personal
                  data to Faigen may contact us to request removal.
                </p>
              </section>

              {/* 11 */}
              <section id="section-11">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Limitation of Liability</h2>
                <p>
                  Faigen provides AI systems on a best-effort basis. While we strive for accuracy and reliability,
                  AI-generated responses may not always be perfect. Faigen is not liable for business losses resulting
                  from AI decisions or errors. Clients are responsible for reviewing and approving automation workflows.
                </p>
              </section>

              {/* 12 */}
              <section id="section-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Payment Terms & Subscription</h2>
                <div className="space-y-4">
                  {[
                    { title: 'Subscription Plans', text: 'Clients subscribe to monthly plans with defined usage limits. Subscription fees are billed in advance and plans auto-renew unless cancelled prior to the next billing cycle.' },
                    { title: 'Usage Limits & Add-On Credits', text: 'Each plan includes a fixed usage quota. If usage exceeds the plan limit, clients may purchase additional top-up credits or upgrade to a higher plan.' },
                    { title: 'Payments', text: 'All payments must be completed on time to ensure uninterrupted service. Failure to pay may result in temporary service restriction or suspension of AI agents.' },
                    { title: 'Refund Policy', text: 'Subscription fees are non-refundable once the billing cycle has started, as resources are allocated immediately. Exceptions may be considered at Faigen\'s discretion in genuine cases.' },
                    { title: 'Pricing Changes', text: 'Faigen may update pricing with prior notice. Changes will not affect already billed cycles but will apply to future renewals.' },
                  ].map(item => (
                    <div key={item.title} className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                      <p className="font-bold text-gray-800 mb-1.5">{item.title}</p>
                      <p className="text-[14px] text-gray-500">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 13 */}
              <section id="section-13">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Service Reliability</h2>
                <p className="mb-4">
                  We aim to provide consistent uptime, fast response speeds, and stable integrations.
                  Certain factors may occasionally affect performance, including third-party platform outages
                  (such as Meta Platforms Inc. APIs), network disruptions, or unexpected technical issues.
                </p>
                <p>
                  In the rare event of major service failure directly caused by Faigen, we will investigate promptly
                  and provide fixes, support, or service adjustments where appropriate. Faigen limits liability to
                  the amount paid for the active billing cycle.
                </p>
              </section>

              {/* 14 */}
              <section id="section-14">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Termination of Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                    <p className="font-bold text-gray-800 mb-2">By Faigen</p>
                    <p className="text-[14px] text-gray-500">
                      We may suspend or terminate services if payments are not completed,
                      terms are violated, or the platform is misused.
                    </p>
                  </div>
                  <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                    <p className="font-bold text-gray-800 mb-2">By Client</p>
                    <p className="text-[14px] text-gray-500">
                      Clients may cancel subscriptions anytime before the next billing cycle.
                      No partial refunds for unused time.
                    </p>
                  </div>
                </div>
              </section>

              {/* 15 */}
              <section id="section-15">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Compliance with Laws</h2>
                <p>
                  Faigen operates in accordance with applicable laws in India. Clients are responsible for ensuring
                  their business usage complies with local regulations, industry-specific rules, and data protection
                  requirements. Where legally required, Faigen may cooperate with regulatory authorities.
                </p>
              </section>

              {/* 16 */}
              <section id="section-16">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Updates to This Policy</h2>
                <p>
                  Faigen reserves the right to update this policy at any time. Updates will be reflected with a
                  revised effective date. Continued use of services implies acceptance of the updated terms.
                </p>
              </section>

              {/* 17 — Contact */}
              <section id="section-17" className="pt-8 border-t border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">17. Contact Information</h2>
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8">
                  <div className="flex-1 space-y-4">
                    <p className="font-black text-gray-900 text-[16px]">Faigen</p>
                    <div className="flex items-center gap-3 text-[14px] text-gray-500">
                      <MapPin size={16} className="text-[#2563EB] shrink-0" />
                      BCG Residency Towers 4a1,Kakkanad,ERNAKULAM , Pin 682037
                    </div>
                    <div className="flex items-center gap-3 text-[14px] text-gray-500">
                      <Mail size={16} className="text-[#2563EB] shrink-0" />
                      info@faigen.in
                    </div>
                    <div className="flex items-center gap-3 text-[14px] text-gray-500">
                      <Globe size={16} className="text-[#2563EB] shrink-0" />
                      https://faigen.in
                    </div>
                  </div>
                  <div className="md:w-1/2 flex items-center justify-center p-6 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                    <p className="text-[13px] text-center text-gray-400 leading-relaxed font-medium">
                      For any privacy-related questions or data requests, please reach out via our official email
                      for verified processing.
                    </p>
                  </div>
                </div>
              </section>

            </div>
    </LegalShell>
  )
}
