import { style } from '@vanilla-extract/css'
import { colors, radius, typography } from '../../styles/tokens.css'

export const tag = style({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '3px 8px',
  borderRadius: radius.pill,
  fontSize: typography.labelSm.fontSize,
  fontWeight: typography.labelSm.fontWeight,
  backgroundColor: colors.gray50,
  color: colors.gray500,
  whiteSpace: 'nowrap',
})

export const tagHighlight = style({
  backgroundColor: colors.accent50,
  color: colors.accent500,
})
