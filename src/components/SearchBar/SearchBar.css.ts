import { style } from '@vanilla-extract/css'
import { colors, elevation, radius, typography } from '../../styles/tokens.css'

export const searchBar = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  height: '48px',
  padding: '0 16px',
  backgroundColor: colors.surface,
  border: `1px solid ${colors.gray100}`,
  borderRadius: radius.pill,
  boxShadow: elevation.card,
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  ':focus-within': {
    borderColor: colors.primary300,
    boxShadow: `0 0 0 3px ${colors.primary50}, ${elevation.card}`,
  },
})

export const searchIcon = style({
  color: colors.gray300,
  flexShrink: 0,
})

export const searchInput = style({
  flex: 1,
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
  fontSize: typography.bodyMd.fontSize,
  fontWeight: typography.bodyMd.fontWeight,
  color: colors.gray900,
  '::placeholder': {
    color: colors.gray300,
  },
})
