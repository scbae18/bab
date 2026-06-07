import { keyframes, style } from '@vanilla-extract/css'
import { colors, elevation, radius, typography } from '../../styles/tokens.css'

const slideDown = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-50%) translateY(-12px)' },
  '100%': { opacity: 1, transform: 'translateX(-50%) translateY(0)' },
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
  animation: `${slideDown} 0.25s ease forwards`,
  maxWidth: 'calc(430px - 40px)',
  textAlign: 'center',
  whiteSpace: 'nowrap',
})
