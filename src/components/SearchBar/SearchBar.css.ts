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
  transition:
    'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)',
  ':focus-within': {
    borderColor: colors.primary300,
    boxShadow: `0 0 0 3px ${colors.primary50}`,
    transform: 'translateY(-1px)',
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
  color: colors.gray700,
  '::placeholder': {
    color: colors.gray300,
  },
})
