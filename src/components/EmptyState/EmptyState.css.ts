import { style } from '@vanilla-extract/css'
import { colors, typography } from '../../styles/tokens.css'

export const emptyState = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: '48px 20px',
  gap: '8px',
})

export const iconWrap = style({
  width: '56px',
  height: '56px',
  borderRadius: '50%',
  backgroundColor: colors.primary50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: colors.primary400,
  marginBottom: '8px',
})

export const title = style({
  ...typography.titleMd,
  color: colors.gray700,
})

export const description = style({
  ...typography.bodyMd,
  color: colors.gray500,
})
