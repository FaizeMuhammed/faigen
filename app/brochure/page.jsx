import EmbedPage from '@/components/EmbedPage'

export const metadata = {
  title: 'Brochure — Faigen',
  description: 'The 24/7 WhatsApp AI agent that takes orders in any language — plus bulk broadcasts and full customisation.',
}

export default function BrochurePage() {
  return <EmbedPage src="/brochure.html" title="Faigen brochure" active="Brochure" />
}
