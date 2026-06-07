import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { buttonRecipe } from './Button.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outlined' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  children: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${buttonRecipe({ variant, size, fullWidth })}${className ? ` ${className}` : ''}`}
      {...props}
    >
      {children}
    </button>
  )
}
