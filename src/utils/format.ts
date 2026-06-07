export function formatBudget(amount: number): string {
  if (amount >= 10000) {
    const man = amount / 10000
    return man % 1 === 0 ? `${man}만원` : `${man.toFixed(1)}만원`
  }
  return `${amount.toLocaleString()}원`
}

export function formatRelativeTime(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime()
  const minutes = Math.floor(diff / 60000)
  if (minutes < 1) return '방금 전'
  if (minutes < 60) return `${minutes}분 전`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}시간 전`
  const days = Math.floor(hours / 24)
  return `${days}일 전`
}
