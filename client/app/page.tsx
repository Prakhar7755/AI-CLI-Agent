import type { Metadata } from 'next'
import HomeClient from './home-client'

export const metadata: Metadata = {
  title: 'AI CLI Agent | Web Dashboard',
  description: 'Authenticate and manage your AI CLI Agent via seamless device-flow authorization.',
  keywords: ['AI CLI Agent', 'Dashboard', 'Authentication', 'Next.js', 'Vercel AI SDK', 'Workspace'],
}

export default function Page() {
  return <HomeClient />
}
