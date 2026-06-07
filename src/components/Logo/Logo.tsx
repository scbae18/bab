import logoSrc from '../../assets/logo.png'
import { logoRecipe } from './Logo.css'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function Logo({ size = 'md', className }: LogoProps) {
  return (
    <img
      src={logoSrc}
      alt="밥친구"
      className={`${logoRecipe({ size })}${className ? ` ${className}` : ''}`}
      draggable={false}
    />
  )
}
