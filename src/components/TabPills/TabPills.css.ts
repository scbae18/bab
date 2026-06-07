import { style } from '@vanilla-extract/css'
import { colors, radius, typography } from '../../styles/tokens.css'

export const tabPills = style({
  display: 'flex',
  gap: '0',
  backgroundColor: colors.gray50,
  borderRadius: radius.sm,
  padding: '3px',
})

export const tabPill = style({
  flex: 1,
  padding: '8px 12px',
  borderRadius: '6px',
  border: 'none',
  backgroundColor: 'transparent',
  fontSize: typography.titleSm.fontSize,
  fontWeight: typography.titleSm.fontWeight,
  color: colors.gray500,
  cursor: 'pointer',
  transition: 'background-color 0.15s ease, color 0.15s ease',
  fontFamily: 'inherit',
})

export const tabPillActive = style({
  backgroundColor: colors.white,
  color: colors.gray900,
  boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
})
