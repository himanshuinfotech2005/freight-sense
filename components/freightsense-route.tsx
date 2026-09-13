'use client'

import FREIGHTSENSEDashboard from '@/components/voyageiq-dashboard'
import { usePathname } from 'next/navigation'

type RoutePage =
  | 'Command center'
  | 'Voyage planner'
  | 'Freight forecast'
  | 'Vessel intelligence'
  | 'Risk analysis'
  | 'Optimization'
  | 'AI recommendation'
  | 'What-If simulator'
  | 'Decision history'
  | 'Reports'
  | 'Settings'

export function FreightsenseRoute({ page }: { page: RoutePage }) {
  const pathname = usePathname()
  const segment = pathname.split('/')[1] as keyof typeof routePages
  const activePage = routePages[segment] ?? page

  return <FREIGHTSENSEDashboard initialPage={activePage} />
}

export const routePages = {
  overview: 'Command center',
  'voyage-planner': 'Voyage planner',
  'freight-forecast': 'Freight forecast',
  'vessel-intelligence': 'Vessel intelligence',
  'risk-analysis': 'Risk analysis',
  optimization: 'Optimization',
  'ai-recommendation': 'AI recommendation',
  'what-if-simulator': 'What-If simulator',
  'decision-history': 'Decision history',
  reports: 'Reports',
  settings: 'Settings',
} as const satisfies Record<string, RoutePage>
