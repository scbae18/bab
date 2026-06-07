import { Outlet, useLocation } from 'react-router-dom'
import { pageEnter } from '../../styles/animations.css'

export function AnimatedOutlet() {
  const location = useLocation()
  return (
    <div key={location.pathname} className={pageEnter}>
      <Outlet />
    </div>
  )
}
