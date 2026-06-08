import {
  tabPill,
  tabPillActive,
  tabPillCompact,
  tabPillScrollable,
  tabPills,
  tabPillsCompact,
  tabPillsScrollable,
} from './TabPills.css'

interface TabPillsProps<T extends string> {
  tabs: { id: T; label: string }[]
  active: T
  onChange: (id: T) => void
  scrollable?: boolean
  compact?: boolean
}

export function TabPills<T extends string>({
  tabs,
  active,
  onChange,
  scrollable = false,
  compact = false,
}: TabPillsProps<T>) {
  const containerClass = [
    tabPills,
    scrollable ? tabPillsScrollable : '',
    compact ? tabPillsCompact : '',
  ]
    .filter(Boolean)
    .join(' ')

  const pillClass = compact
    ? tabPillCompact
    : scrollable
      ? `${tabPill} ${tabPillScrollable}`
      : tabPill

  return (
    <div className={containerClass}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={`${pillClass}${active === tab.id ? ` ${tabPillActive}` : ''}`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
