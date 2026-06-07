import { style } from '@vanilla-extract/css'
import { colors, radius, typography } from '../../styles/tokens.css'

export const searchBar = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  height: '44px',
  padding: '0 14px',
  backgroundColor: colors.white,
  border: `1px solid ${colors.gray100}`,
  borderRadius: radius.sm,
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
  color: colors.gray700,
  '::placeholder': {
    color: colors.gray300,
  },
})
