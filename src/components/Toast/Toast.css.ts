import { keyframes, style } from '@vanilla-extract/css'
import { colors, elevation, radius, typography } from '../../styles/tokens.css'

const toastIn = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(-50%) translateY(-20px) scale(0.9)',
  },
  '60%': {
    opacity: 1,
    transform: 'translateX(-50%) translateY(4px) scale(1.02)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(-50%) translateY(0) scale(1)',
  },
})

export const toast = style({
  position: 'fixed',
  top: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1000,
  backgroundColor: colors.gray900,
  color: colors.white,
  borderRadius: radius.md,
  padding: '12px 20px',
  fontSize: typography.bodyMd.fontSize,
  fontWeight: typography.bodyMd.fontWeight,
  boxShadow: elevation.toast,
  animation: `${toastIn} 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
  maxWidth: 'calc(430px - 40px)',
  textAlign: 'center',
})
