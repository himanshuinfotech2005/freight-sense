export const freightData = [
  { month: 'Jan', demand: 68, capacity: 74, rate: 84 },
  { month: 'Feb', demand: 72, capacity: 71, rate: 91 },
  { month: 'Mar', demand: 78, capacity: 69, rate: 98 },
  { month: 'Apr', demand: 81, capacity: 72, rate: 106 },
  { month: 'May', demand: 88, capacity: 70, rate: 118 },
  { month: 'Jun', demand: 94, capacity: 68, rate: 126 },
  { month: 'Jul', demand: 91, capacity: 73, rate: 121 },
  { month: 'Aug', demand: 97, capacity: 71, rate: 132 },
  { month: 'Sep', demand: 102, capacity: 69, rate: 141 },
  { month: 'Oct', demand: 108, capacity: 67, rate: 149 },
  { month: 'Nov', demand: 112, capacity: 66, rate: 156 },
  { month: 'Dec', demand: 118, capacity: 64, rate: 164 },
]

export const routeRows = [
  { route: 'AG–EAST', vessel: 'MV Meridian', cargo: 'Iron ore', eta: '12 Oct', days: '18d', confidence: 94, status: 'On track', rate: '$31.40' },
  { route: 'WAF–NORTH', vessel: 'Pacific Dawn', cargo: 'Crude oil', eta: '15 Oct', days: '22d', confidence: 88, status: 'At risk', rate: '$28.75' },
  { route: 'USG–MED', vessel: 'Arctic Gale', cargo: 'Grain', eta: '18 Oct', days: '26d', confidence: 91, status: 'On track', rate: '$24.10' },
  { route: 'BSEA–ASIA', vessel: 'Ocean Crest', cargo: 'Steel coils', eta: '22 Oct', days: '31d', confidence: 76, status: 'Review', rate: '$36.80' },
  { route: 'EC–WAF', vessel: 'Nordic Star', cargo: 'Bauxite', eta: '26 Oct', days: '35d', confidence: 83, status: 'On track', rate: '$21.55' },
]

export const vesselRows = [
  { name: 'MV Meridian', type: 'Capesize', dwt: '182,400', position: 'Singapore', open: '12 Oct', score: 94, fit: 'Ideal' },
  { name: 'Pacific Dawn', type: 'VLCC', dwt: '298,000', position: 'Fujairah', open: '15 Oct', score: 88, fit: 'Strong' },
  { name: 'Arctic Gale', type: 'Panamax', dwt: '76,500', position: 'New Orleans', open: '18 Oct', score: 91, fit: 'Ideal' },
]

export const marketCards = [
  { label: 'Baltic Dry Index', value: '1,842', change: '+8.4%', trend: 'up' },
  { label: 'Brent crude', value: '$78.42', change: '+1.2%', trend: 'up' },
  { label: 'Panamax TCE', value: '$16,840', change: '-2.6%', trend: 'down' },
]
