export function staggerDelay(index: number, step = 0.07): string {
  return `${index * step}s`
}
