export function parseRgb(color: string): [number, number, number] | null {
  const match = color.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/)
  if (!match) return null
  return [parseInt(match[1], 10), parseInt(match[2], 10), parseInt(match[3], 10)]
}

export function clamp(value: number): number {
  return Math.max(0, Math.min(255, value))
}
