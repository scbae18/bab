import { NavLink } from 'react-router-dom'
import { Icon } from '../Icon/Icon'
import type { IconName } from '../Icon/Icon'
import {
  tabActive,
  tabBar,
  tabIconActive,
  tabIconFab,
  tabIconWrap,
  tabInactive,
  tabItem,
  tabItemFab,
  tabLabel,
  tabLabelFab,
} from './TabBar.css'

const TABS: { to: string; label: string; icon: IconName; fab?: boolean }[] = [
  { to: '/', label: '홈', icon: 'home' },
  { to: '/create', label: '글쓰기', icon: 'pen', fab: true },
  { to: '/my', label: '마이', icon: 'user' },
]

export function TabBar() {
  return (
    <nav className={tabBar} aria-label="메인 메뉴">
      {TABS.map(({ to, label, icon, fab }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `${tabItem}${fab ? ` ${tabItemFab}` : ''} ${isActive ? tabActive : tabInactive}`
          }
          end={to === '/'}
        >
          {({ isActive }) => (
            <>
              <span
                className={`${tabIconWrap}${fab ? ` ${tabIconFab}` : ''}${isActive && !fab ? ` ${tabIconActive}` : ''}`}
              >
                <Icon name={icon} size={fab ? 24 : 22} />
              </span>
              <span className={`${tabLabel}${fab ? ` ${tabLabelFab}` : ''}`}>
                {label}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}
