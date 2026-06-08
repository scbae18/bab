import { getAvatarInitial } from '../../data/mockData'
import { getAvatarGradient } from '../../utils/avatarColor'
import { avatarRecipe } from './Avatar.css'

interface AvatarProps {
  nickname: string
  size?: 'sm' | 'md' | 'lg'
}

export function Avatar({ nickname, size = 'md' }: AvatarProps) {
  return (
    <span
      className={avatarRecipe({ size })}
      style={{ background: getAvatarGradient(nickname) }}
      aria-hidden
    >
      {getAvatarInitial(nickname)}
    </span>
  )
}
