import { style } from '@vanilla-extract/css'
import { colors, elevation, radius, typography } from '../../styles/tokens.css'

export const tabPills = style({
  display: 'flex',
  gap: '0',
  backgroundColor: colors.gray50,
  borderRadius: radius.md,
  padding: '4px',
  border: `1px solid ${colors.gray100}`,
})

export const tabPillsScrollable = style({
  overflowX: 'auto',
  flexWrap: 'nowrap',
  '::-webkit-scrollbar': { display: 'none' },
})

export const tabPillsCompact = style({
  flex: '0 0 auto',
  width: 'auto',
  boxShadow: elevation.card,
})

export const tabPill = style({
  flex: 1,
  padding: '9px 12px',
  borderRadius: '10px',
  border: 'none',
  backgroundColor: 'transparent',
  fontSize: typography.titleSm.fontSize,
  fontWeight: '600',
  color: colors.gray500,
  cursor: 'pointer',
  transition: 'background-color 0.15s ease, color 0.15s ease, box-shadow 0.15s ease',
  fontFamily: 'inherit',
})

export const tabPillScrollable = style({
  flex: '0 0 auto',
  minWidth: '52px',
  whiteSpace: 'nowrap',
})

export const tabPillActive = style({
  backgroundColor: colors.white,
  color: colors.gray900,
  boxShadow: '0 2px 8px rgba(28, 28, 26, 0.08)',
})

export const tabPillCompact = style({
  flex: '0 0 auto',
  padding: '7px 12px',
  borderRadius: '10px',
  border: 'none',
  backgroundColor: 'transparent',
  fontSize: typography.labelSm.fontSize,
  fontWeight: '600',
  color: colors.gray500,
  cursor: 'pointer',
  transition: 'background-color 0.15s ease, color 0.15s ease',
  fontFamily: 'inherit',
  whiteSpace: 'nowrap',
})
