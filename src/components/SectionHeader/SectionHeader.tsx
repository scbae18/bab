import { action, sectionHeader, subtitle, title } from './SectionHeader.css'

interface SectionHeaderProps {
  titleText: string
  subtitleText?: string
  actionText?: string
  onAction?: () => void
}

export function SectionHeader({
  titleText,
  subtitleText,
  actionText,
  onAction,
}: SectionHeaderProps) {
  return (
    <div>
      <div className={sectionHeader}>
        <h2 className={title}>{titleText}</h2>
        {actionText && onAction && (
          <button type="button" className={action} onClick={onAction}>
            {actionText}
          </button>
        )}
      </div>
      {subtitleText && <p className={subtitle}>{subtitleText}</p>}
    </div>
  )
}
