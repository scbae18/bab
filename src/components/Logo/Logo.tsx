import { logoMark, logoRow, logoText, logoTextAccent } from './Logo.css'

interface LogoProps {
  size?: 'sm' | 'md'
}

export function Logo({ size = 'md' }: LogoProps) {
  const markSize = size === 'sm' ? { width: 28, height: 28, fontSize: 14 } : undefined

  return (
    <div className={logoRow}>
      <span className={logoMark} style={markSize}>
        밥
      </span>
      <span className={logoText}>
        밥<span className={logoTextAccent}>친구</span>
      </span>
    </div>
  )
}
