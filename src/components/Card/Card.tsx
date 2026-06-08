import type { HTMLAttributes, ReactNode } from 'react'
import { card, cardFlush } from './Card.css'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  flush?: boolean
}

export function Card({ children, className, flush = false, ...props }: CardProps) {
  return (
    <div
      className={`${card}${flush ? ` ${cardFlush}` : ''}${className ? ` ${className}` : ''}`}
      {...props}
    >
      {children}
    </div>
  )
}
