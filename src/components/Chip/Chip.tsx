import type { HTMLAttributes, ReactNode } from 'react'
import { chipRecipe } from './Chip.css'

type ChipVariant =
  | 'waiting'
  | 'done'
  | 'pending'
  | 'confirmed'
  | 'filter'
  | 'filterActive'
  | 'category'
  | 'categoryActive'
  | 'onDark'

interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: ChipVariant
  children: ReactNode
}

export function Chip({ variant = 'waiting', children, className, ...props }: ChipProps) {
  return (
    <span
      className={`${chipRecipe({ variant })}${className ? ` ${className}` : ''}`}
      {...props}
    >
      {children}
    </span>
  )
}
