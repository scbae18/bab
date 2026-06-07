import { Outlet } from 'react-router-dom'
import { TabBar } from '../TabBar/TabBar'
import { main, shell } from './AppShell.css'

export function AppShell() {
  return (
    <div className={shell}>
      <main className={main}>
        <Outlet />
      </main>
      <TabBar />
    </div>
  )
}
