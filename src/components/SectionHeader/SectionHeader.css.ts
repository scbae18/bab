import { style } from '@vanilla-extract/css'
import { colors, typography } from '../../styles/tokens.css'

export const sectionHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '12px',
})

export const title = style({
  ...typography.titleMd,
  color: colors.gray900,
})

export const action = style({
  ...typography.bodyMd,
  color: colors.primary500,
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  fontFamily: 'inherit',
})

export const subtitle = style({
  ...typography.labelSm,
  color: colors.gray500,
  marginTop: '2px',
})
