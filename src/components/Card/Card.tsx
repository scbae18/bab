import type { HTMLAttributes, ReactNode } from 'react'
import { card } from './Card.css'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div className={`${card}${className ? ` ${className}` : ''}`} {...props}>
      {children}
    </div>
  )
}
