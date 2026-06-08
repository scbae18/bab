import { style } from '@vanilla-extract/css'
import { colors, radius, typography } from '../../styles/tokens.css'

export const tag = style({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: radius.pill,
  fontSize: typography.labelSm.fontSize,
  fontWeight: '600',
  backgroundColor: colors.gray50,
  color: colors.gray500,
  whiteSpace: 'nowrap',
  border: `1px solid ${colors.gray100}`,
})

export const tagHighlight = style({
  backgroundColor: colors.primary50,
  color: colors.primary600,
  borderColor: colors.primary100,
})
