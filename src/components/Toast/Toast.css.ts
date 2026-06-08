import { keyframes, style } from '@vanilla-extract/css'
import { colors, elevation, radius, typography } from '../../styles/tokens.css'

const toastIn = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(-50%) translateY(-16px) scale(0.95)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(-50%) translateY(0) scale(1)',
  },
})

export const toast = style({
  position: 'fixed',
  top: 'calc(16px + env(safe-area-inset-top, 0px))',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1000,
  backgroundColor: colors.gray900,
  color: colors.white,
  borderRadius: radius.pill,
  padding: '12px 22px',
  fontSize: typography.bodyMd.fontSize,
  fontWeight: '600',
  boxShadow: elevation.toast,
  animation: `${toastIn} 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
  maxWidth: 'calc(430px - 40px)',
  textAlign: 'center',
})
