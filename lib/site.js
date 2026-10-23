// Single source of truth for plans, rates and FAQ — copied from the live pricing page so facts stay identical.
export const PLANS = [
  { id: "starter", name: "Starter", tagline: "The core AI agent, ready to sell and support", setup: 3999, monthly: 1499, highlight: false,
    includes: ["WhatsApp AI agent in English, Manglish and Malayalam", "Unlimited conversations", "Custom AI training and guardrails", "Order collection and product catalog", "Custom services menu", "Admin dashboard"] },
  { id: "complete", name: "Complete", tagline: "Everything, including OTP, broadcasts and API access", setup: 5999, monthly: 1999, highlight: true,
    includes: ["Everything in Starter", "OTP and authentication messages", "Broadcast campaigns with delivery tracking", "Full API access"] },
  { id: "custom", name: "Custom", tagline: "Full WhatsApp commerce or a support system, built for you", custom: true,
    includes: ["Full WhatsApp commerce: browse, cart and checkout in chat", "Support workflows, such as ticketing", "Integrations with your CRM, ERP or any system", "Dedicated onboarding"] },
];

export const RATES = [
  { label: "Utility / OTP message", price: "₹0.20", sub: "per message" },
  { label: "Marketing message", price: "₹1.10", sub: "per message" },
];

export const FAQS = [
  { q: "Is the setup fee really one time?", a: "Yes. You pay the setup fee for your plan once. The monthly fee covers continued service, hosting and support — no surprise charges." },
  { q: "Can the AI reply in Malayalam?", a: "Yes. It auto-detects how the customer writes — Malayalam script, Manglish, or English — and replies the same way. No configuration needed." },
  { q: "What are the broadcast message rates for?", a: "Utility/OTP and marketing messages sent beyond normal conversation are billed per message, shown on the pricing page. Regular customer conversations aren't charged extra." },
  { q: "Does this include Meta's own WhatsApp charges?", a: "No. Meta bills your business directly for its own conversation costs, through the payment method on your Meta Business account. Our pricing is separate — for the AI agent, dashboard and API." },
  { q: "How quickly can I go live?", a: "Most businesses go live within 24–48 hours of setup. We configure the agent — you just share your product and service details." },
  { q: "Is there a free trial?", a: "We offer a live demo where you can see exactly how the AI behaves for a business like yours before you pay anything." },
];

export const NAV = [
  { label: "Features", href: "/features" },
  { label: "Use cases", href: "/use-cases" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const inr = (n) => "₹" + Number(n).toLocaleString("en-IN");
