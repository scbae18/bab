import { style } from '@vanilla-extract/css'
import { colors, elevation, radius } from '../../styles/tokens.css'

export const card = style({
  backgroundColor: colors.surface,
  border: `1px solid ${colors.gray100}`,
  borderRadius: radius.lg,
  padding: '16px',
  cursor: 'pointer',
  boxShadow: elevation.card,
  transition:
    'transform 0.2s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.2s ease',
  ':active': {
    transform: 'scale(0.985)',
    boxShadow: elevation.card,
  },
  '@media': {
    '(hover: hover)': {
      ':hover': {
        boxShadow: elevation.cardHover,
        transform: 'translateY(-2px)',
      },
    },
  },
})

export const cardFlush = style({
  padding: 0,
  overflow: 'hidden',
})
