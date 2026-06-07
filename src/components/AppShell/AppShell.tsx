import { AnimatedOutlet } from '../AnimatedOutlet/AnimatedOutlet'
import { TabBar } from '../TabBar/TabBar'
import { main, shell } from './AppShell.css'

export function AppShell() {
  return (
    <div className={shell}>
      <main className={main}>
        <AnimatedOutlet />
      </main>
      <TabBar />
    </div>
  )
}
