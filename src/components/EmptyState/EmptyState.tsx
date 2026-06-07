import type { ReactNode } from 'react'
import { description, emptyState, iconWrap, title } from './EmptyState.css'

interface EmptyStateProps {
  icon: ReactNode
  titleText: string
  descriptionText?: string
}

export function EmptyState({
  icon,
  titleText,
  descriptionText,
}: EmptyStateProps) {
  return (
    <div className={emptyState}>
      <div className={iconWrap}>{icon}</div>
      <p className={title}>{titleText}</p>
      {descriptionText && <p className={description}>{descriptionText}</p>}
    </div>
  )
}
