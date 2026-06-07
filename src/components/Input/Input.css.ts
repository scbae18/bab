import { style } from '@vanilla-extract/css'
import { colors, radius, typography } from '../../styles/tokens.css'

export const inputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
})

export const label = style({
  ...typography.titleSm,
  color: colors.gray900,
})

export const input = style({
  height: '48px',
  padding: '10px 16px',
  borderRadius: radius.sm,
  border: `1px solid ${colors.gray100}`,
  backgroundColor: colors.white,
  fontSize: typography.bodyMd.fontSize,
  fontWeight: typography.bodyMd.fontWeight,
  color: colors.gray700,
  outline: 'none',
  transition: 'border-color 0.15s ease',
  '::placeholder': {
    color: colors.gray300,
  },
  ':focus': {
    borderColor: colors.primary500,
  },
})

export const textarea = style([
  input,
  {
    height: 'auto',
    minHeight: '96px',
    resize: 'vertical',
    lineHeight: typography.lineHeight,
  },
])
