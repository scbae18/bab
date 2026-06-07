import { style } from '@vanilla-extract/css'
import { colors, elevation, radius, spacing } from '../../styles/tokens.css'

export const card = style({
  backgroundColor: colors.white,
  border: `1px solid ${colors.gray100}`,
  borderRadius: radius.md,
  padding: spacing.contentPadding,
  transition: 'background-color 0.15s ease, box-shadow 0.15s ease',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: colors.primary50,
    boxShadow: elevation.card,
  },
})
