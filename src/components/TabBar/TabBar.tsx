import { NavLink } from 'react-router-dom'
import { Icon } from '../Icon/Icon'
import {
  tabActive,
  tabBar,
  tabInactive,
  tabItem,
  tabLabel,
} from './TabBar.css'

const TABS = [
  { to: '/', label: '홈', icon: 'home' as const },
  { to: '/create', label: '글쓰기', icon: 'pen' as const },
  { to: '/my', label: '마이', icon: 'user' as const },
]

export function TabBar() {
  return (
    <nav className={tabBar}>
      {TABS.map(({ to, label, icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `${tabItem} ${isActive ? tabActive : tabInactive}`
          }
          end={to === '/'}
        >
          <Icon name={icon} size={22} />
          <span className={tabLabel}>{label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
