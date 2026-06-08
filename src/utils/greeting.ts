export function getTimeGreeting(): string {
  const hour = new Date().getHours()
  if (hour < 11) return '좋은 아침이에요'
  if (hour < 14) return '점심은 뭐 먹을까요?'
  if (hour < 17) return '오후도 화이팅'
  if (hour < 21) return '저녁 메뉴 고민 중이신가요?'
  return '야식 각인가요?'
}

export function getMealContext(): string {
  const hour = new Date().getHours()
  if (hour >= 11 && hour < 14) return '점심 모집'
  if (hour >= 17 && hour < 22) return '저녁 모집'
  if (hour >= 22 || hour < 2) return '야식 모집'
  return '밥친구 모집'
}
