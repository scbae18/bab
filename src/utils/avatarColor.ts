const AVATAR_GRADIENTS = [
  'linear-gradient(135deg, #FF8A65 0%, #FF6B4A 100%)',
  'linear-gradient(135deg, #FFB74D 0%, #FF9800 100%)',
  'linear-gradient(135deg, #81C784 0%, #4CAF50 100%)',
  'linear-gradient(135deg, #64B5F6 0%, #42A5F5 100%)',
  'linear-gradient(135deg, #BA68C8 0%, #9C27B0 100%)',
  'linear-gradient(135deg, #F06292 0%, #E91E63 100%)',
  'linear-gradient(135deg, #4DB6AC 0%, #009688 100%)',
  'linear-gradient(135deg, #A1887F 0%, #795548 100%)',
]

function hashString(value: string): number {
  let hash = 0
  for (let i = 0; i < value.length; i += 1) {
    hash = value.charCodeAt(i) + ((hash << 5) - hash)
  }
  return Math.abs(hash)
}

export function getAvatarGradient(nickname: string): string {
  return AVATAR_GRADIENTS[hashString(nickname) % AVATAR_GRADIENTS.length]
}
