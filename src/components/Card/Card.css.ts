import { style } from '@vanilla-extract/css'
import { colors, elevation, radius, spacing } from '../../styles/tokens.css'

export const card = style({
  backgroundColor: colors.white,
  border: `1px solid ${colors.gray100}`,
  borderRadius: radius.md,
  padding: spacing.contentPadding,
  cursor: 'pointer',
  transition:
    'transform 0.22s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.22s ease, background-color 0.15s ease',
  ':hover': {
    backgroundColor: colors.primary50,
    boxShadow: elevation.card,
    transform: 'translateY(-3px)',
  },
  ':active': {
    transform: 'translateY(-1px) scale(0.985)',
    transitionDuration: '0.1s',
  },
})
