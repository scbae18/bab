import { style } from '@vanilla-extract/css'
import { colors, radius } from '../../styles/tokens.css'

export const categoryIcon = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  borderRadius: radius.sm,
  backgroundColor: colors.primary100,
  color: colors.primary500,
  flexShrink: 0,
})

export const categoryIconLg = style({
  width: '44px',
  height: '44px',
  borderRadius: radius.md,
  backgroundColor: colors.primary50,
})
