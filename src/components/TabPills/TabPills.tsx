import { tabPill, tabPillActive, tabPills } from './TabPills.css'

interface TabPillsProps<T extends string> {
  tabs: { id: T; label: string }[]
  active: T
  onChange: (id: T) => void
}

export function TabPills<T extends string>({
  tabs,
  active,
  onChange,
}: TabPillsProps<T>) {
  return (
    <div className={tabPills}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={`${tabPill}${active === tab.id ? ` ${tabPillActive}` : ''}`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
