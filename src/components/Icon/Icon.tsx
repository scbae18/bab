import type { SVGProps } from 'react'
import { icon } from './Icon.css'

export type IconName =
  | 'home'
  | 'pen'
  | 'users'
  | 'mapPin'
  | 'clock'
  | 'user'
  | 'arrowLeft'
  | 'meat'
  | 'intestine'
  | 'chicken'
  | 'other'
  | 'search'
  | 'bell'
  | 'star'
  | 'share'
  | 'flame'
  | 'check'
  | 'chevronRight'
  | 'wallet'
  | 'info'

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName
  size?: number
}

const PATHS: Record<IconName, React.ReactNode> = {
  home: <path d="M4 10.5L12 4l8 6.5V20a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-9.5z" />,
  pen: (
    <>
      <path d="M16.5 4.5l3 3L8 19H5v-3L16.5 4.5z" />
      <path d="M14 7l3 3" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M15 20c.3-2.5 2-4.5 4.5-4.5" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" />
    </>
  ),
  arrowLeft: <path d="M15 6l-6 6 6 6" />,
  meat: (
    <>
      <rect x="5" y="8" width="14" height="10" rx="3" />
      <path d="M8 12h8M8 15h5" />
    </>
  ),
  intestine: (
    <>
      <path d="M6 8c3 0 3 4 6 4s3-4 6-4 3 4 6 4" />
      <path d="M6 14c3 0 3 4 6 4s3-4 6-4 3 4 6 4" />
    </>
  ),
  chicken: (
    <>
      <path d="M8 10c0-2.2 1.8-4 4-4s4 1.8 4 4v2H8v-2z" />
      <path d="M7 12h10v4a3 3 0 01-3 3h-4a3 3 0 01-3-3v-4z" />
      <path d="M10 8V6M14 8V6" />
    </>
  ),
  other: (
    <>
      <circle cx="7" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="17" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="M16 16l4 4" />
    </>
  ),
  bell: (
    <>
      <path d="M18 16H6l1.5-1.5V10a4.5 4.5 0 119 0v4.5L18 16z" />
      <path d="M10 18a2 2 0 004 0" />
    </>
  ),
  star: (
    <path d="M12 3l2.4 5.5L20 9.5l-4 4 1 5.5L12 16.5 7 19l1-5.5-4-4 5.6-1L12 3z" />
  ),
  share: (
    <>
      <path d="M16 8l-8 4 8 4V8z" />
      <path d="M8 6v12" />
    </>
  ),
  flame: (
    <path d="M12 3c-1 3-4 4-4 8a4 4 0 108 0c0-2-1.5-3.5-2.5-5.5C13 6.5 12 4.5 12 3z" />
  ),
  check: <path d="M6 12l4 4 8-8" />,
  chevronRight: <path d="M10 8l4 4-4 4" />,
  wallet: (
    <>
      <rect x="4" y="7" width="16" height="11" rx="2" />
      <path d="M4 11h16M16 14h2" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 11v5M12 8h.01" />
    </>
  ),
}

export function Icon({ name, size = 20, className, ...props }: IconProps) {
  return (
    <svg
      className={`${icon}${className ? ` ${className}` : ''}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {PATHS[name]}
    </svg>
  )
}
