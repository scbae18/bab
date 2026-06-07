import { getAvatarInitial } from '../../data/mockData'
import { avatarRecipe } from './Avatar.css'

interface AvatarProps {
  nickname: string
  size?: 'sm' | 'md' | 'lg'
}

export function Avatar({ nickname, size = 'md' }: AvatarProps) {
  return (
    <span className={avatarRecipe({ size })} aria-hidden>
      {getAvatarInitial(nickname)}
    </span>
  )
}
