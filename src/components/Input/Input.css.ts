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
  height: '50px',
  padding: '12px 16px',
  borderRadius: radius.md,
  border: `1px solid ${colors.gray100}`,
  backgroundColor: colors.surface,
  fontSize: typography.bodyMd.fontSize,
  fontWeight: typography.bodyMd.fontWeight,
  color: colors.gray900,
  outline: 'none',
  transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
  '::placeholder': {
    color: colors.gray300,
  },
  ':focus': {
    borderColor: colors.primary400,
    boxShadow: `0 0 0 3px ${colors.primary50}`,
  },
})

export const textarea = style([
  input,
  {
    height: 'auto',
    minHeight: '100px',
    resize: 'vertical',
    lineHeight: typography.lineHeight,
  },
])
