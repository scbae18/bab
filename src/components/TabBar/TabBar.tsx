import { NavLink, useLocation } from 'react-router-dom'
import { Icon } from '../Icon/Icon'
import type { IconName } from '../Icon/Icon'
import {
  tabActive,
  tabBar,
  tabIconActive,
  tabIconWrap,
  tabInactive,
  tabIndicator,
  tabItem,
  tabLabel,
} from './TabBar.css'

const TABS: { to: string; label: string; icon: IconName }[] = [
  { to: '/', label: '홈', icon: 'home' },
  { to: '/create', label: '글쓰기', icon: 'pen' },
  { to: '/my', label: '마이', icon: 'user' },
]

export function TabBar() {
  const location = useLocation()
  const activeIndex = TABS.findIndex(
    (t) =>
      t.to === '/'
        ? location.pathname === '/'
        : location.pathname.startsWith(t.to),
  )

  const indicatorLeft =
    activeIndex >= 0
      ? `calc(${(activeIndex + 0.5) * (100 / TABS.length)}% - 16px)`
      : '0'

  return (
    <nav className={tabBar}>
      <div
        className={tabIndicator}
        style={{ left: indicatorLeft, opacity: activeIndex >= 0 ? 1 : 0 }}
      />
      {TABS.map(({ to, label, icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `${tabItem} ${isActive ? tabActive : tabInactive}`
          }
          end={to === '/'}
        >
          {({ isActive }) => (
            <>
              <span
                className={`${tabIconWrap}${isActive ? ` ${tabIconActive}` : ''}`}
              >
                <Icon name={icon} size={22} />
              </span>
              <span className={tabLabel}>{label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}
