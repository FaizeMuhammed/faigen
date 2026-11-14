// Single source of truth for plans, rates and FAQ — copied from the live pricing page so facts stay identical.
// Plans follow the design team's pricing layout (Essential / Standard / Custom).
// Each feature is { t: text, tip?: help text shown in the (i) tooltip }.
export const PLANS = [
  { id: "essential", name: "Essential", tagline: "Core AI automation to manage inbound chats & orders.", setup: 3999, monthly: 1499, highlight: false, cta: "Start Free Trial", ctaHref: "/try",
    includes: [
      { t: "Multilingual AI (English, Manglish & Malayalam & more…)" },
      { t: "1 Team Seat for live inbox management" },
      { t: "Trained on your FAQs, product catalog, and brand tone" },
      { t: "Automated order collection", tip: "The AI collects name, product, quantity and address in the chat and creates the order." },
      { t: "Seamless human hand-off", tip: "Take over any chat from the live inbox, and hand it back to the AI when you are done." },
    ] },
  { id: "standard", name: "Standard", tagline: "Advanced outbound campaigns, OTPs, and team scaling.", setup: 5999, monthly: 1999, highlight: true, cta: "Try live demo", ctaHref: "/try",
    includes: [
      { t: "Everything in Essential, plus:" },
      { t: "3 Team Seats for live inbox management" },
      { t: "Broadcast campaigns with delivery & read tracking", tip: "Send bulk offers and updates to your customer list using approved WhatsApp templates, with images or PDFs and Interested / Not interested buttons." },
      { t: "OTP & authentication messaging", tip: "Securely authenticate users and deliver verification codes directly through WhatsApp." },
      { t: "Broadcast, utility & OTP messages at Meta’s price, zero markup", tip: "Meta’s own per-message rates apply. Faigen adds nothing on top." },
      { t: "API keys and developer documentation", tip: "Securely connect Faigen's data to your existing custom software or databases." },
    ] },
  { id: "custom", name: "Custom", tagline: "Enterprise-grade workflows, deep integrations & scaling support.", custom: true, highlight: false, cta: "Contact sales", ctaHref: "/contact",
    includes: [
      { t: "Custom CRM, ERP, and legacy system integrations" },
      { t: "High-volume broadcast infrastructure for mass scaling" },
      { t: "Dedicated onboarding specialist and priority support" },
      { t: "Custom workflow design & visual branching bots", tip: "We design the conversation flows with you, including branching paths, hand-offs and system actions." },
      { t: "Instagram automation with custom workflows", tip: "Everything in the Instagram add-on, shaped around your business." },
    ] },
];

// Launch offer: Instagram automation is included in Essential and Standard at the same price,
// and (when waiveSetup is true) the one-time setup fee is waived.
// Set active to false to switch the whole offer off (Instagram then shows as a paid add-on and setup fees return),
// or fill endsOn (e.g. "30 Nov 2026") to show an end date on the page.
export const LAUNCH_OFFER = {
  active: true,
  waiveSetup: true,
  badge: "Launch offer",
  text: "Instagram automation included, and no setup fee",
  endsOn: null,
};

// Instagram automation: included during the launch offer; otherwise an add-on for Essential and Standard.
export const INSTAGRAM_ADDON = {
  monthly: 1000, setup: 2000,
  includes: [
    { t: "Instagram DM AI agent", tip: "The same AI answers your Instagram messages, in your customer's language." },
    { t: "Comment-to-DM with public replies", tip: "When someone comments a keyword like “price”, they get the details in a DM and a reply under their comment." },
    { t: "Tappable buttons, starters & chat menu", tip: "Customers tap a question or a menu item instead of typing." },
    { t: "AI comment replies you approve", tip: "The AI drafts answers to other comments. You approve, edit or skip each one." },
    { t: "Spam & abuse shield", tip: "Hides spam, links and blocked words from your comments automatically." },
    { t: "Insights & audience analytics", tip: "Reach, followers, best posts, and who your audience is." },
  ],
};

// Feature table: [feature, Essential, Standard, Custom]. Value: true | false | "launch" (included during the launch offer, else an add-on) | a short text.
export const COMPARE = [
  { group: "WhatsApp AI agent", rows: [
    ["Multilingual AI: English, Manglish & Malayalam", true, true, true],
    ["Unlimited conversations", true, true, true],
    ["Trained on your FAQs, catalog and brand tone", true, true, true],
    ["Automated order collection", true, true, true],
    ["Live inbox with human take-over", true, true, true],
    ["Team seats", "1", "3", "Unlimited"],
  ] },
  { group: "Campaigns and messaging", rows: [
    ["Broadcast campaigns with delivery & read tracking", false, true, true],
    ["Images and PDFs in broadcasts", false, true, true],
    ["Interested / Not interested buttons with lead lists", false, true, true],
    ["OTP & authentication messaging", false, true, true],
    ["API keys and developer documentation", false, true, true],
    ["Broadcast, utility & OTP message fees", false, "Meta’s price", "Meta’s price"],
  ] },
  { group: "Instagram", rows: [
    ["DM AI agent", "launch", "launch", true],
    ["Comment-to-DM with public replies", "launch", "launch", true],
    ["Tappable buttons, starters & chat menu", "launch", "launch", true],
    ["AI comment replies you approve", "launch", "launch", true],
    ["Spam & abuse shield", "launch", "launch", true],
    ["Insights & audience analytics", "launch", "launch", true],
  ] },
  { group: "Scale and integrations", rows: [
    ["Custom CRM, ERP and legacy integrations", false, false, true],
    ["Dedicated onboarding specialist", false, false, true],
    ["Custom workflow design & visual branching bots", false, false, true],
  ] },
];

export const COMING_SOON = [
  "Customer stages, tags and notes in the inbox",
  "AI suggestions that fill in contact details from the chat",
  "A weekly AI coach for your Instagram account",
];

// Messaging fees are passed through at Meta's own price: Faigen adds no markup.
export const MESSAGE_FEES = {
  headline: "Meta’s price. Not a rupee more.",
  text: "Broadcast, utility and authentication messages are charged at Meta’s own rates. Faigen adds no markup, and normal customer conversations are never charged extra.",
  items: [
    { label: "Broadcast", sub: "Offers, festival greetings and campaigns", kind: "Marketing messages" },
    { label: "Utility", sub: "Order updates, reminders and confirmations", kind: "Utility messages" },
    { label: "Authentication", sub: "OTPs and verification codes", kind: "Authentication messages" },
  ],
};

export const FAQS = [
  { q: "Is the setup fee really one time?", a: "Yes. You pay the setup fee for your plan once, and during our launch offer it is waived completely. The monthly fee covers continued service, hosting and support — no surprise charges." },
  { q: "Can the AI reply in Malayalam?", a: "Yes. It auto-detects how the customer writes — Malayalam script, Manglish, or English — and replies the same way. No configuration needed." },
  { q: "What do broadcast, utility and OTP messages cost?", a: "Exactly what Meta charges, and nothing more. Broadcast (marketing), utility and authentication messages are charged at Meta's own published rates, with no markup from Faigen. Regular customer conversations aren't charged extra." },
  { q: "What does the plan price cover?", a: "The AI agent, the live inbox and dashboard, your team seats, the API and our support. Message fees are separate and are always at Meta's price, so there is no hidden margin on your messages." },
  { q: "How quickly can I go live?", a: "Most businesses go live within 24–48 hours of setup. We configure the agent — you just share your product and service details." },
  { q: "What does the Instagram part include?", a: "The same AI agent answers your Instagram DMs, turns comments like “price” into a DM with the details, offers tappable buttons and chat menus, hides spam, and shows you insights about your reach and audience. During our launch offer it is included in Essential and Standard at no extra cost." },
  { q: "Do I pay extra for Instagram?", a: "Not during our launch offer. Instagram automation is included in Essential and Standard at the same price as WhatsApp alone." },
  { q: "Do I pay Meta anything extra for Instagram?", a: "Our price is separate from anything Meta may charge. Instagram messaging through Meta's API does not have the per-message marketing charges that WhatsApp broadcasts do." },
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
