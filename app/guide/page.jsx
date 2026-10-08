import EmbedPage from '@/components/EmbedPage'

export const metadata = {
  title: 'Dashboard Guide — Faigen',
  description: 'A click-through tour of the Faigen dashboard: Live Inbox, Templates, Broadcasts and more.',
}

export default function GuidePage() {
  return <EmbedPage src="/guide.html" title="Faigen dashboard guide" active="Guide" />
}
