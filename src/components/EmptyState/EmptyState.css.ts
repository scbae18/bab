import { style } from '@vanilla-extract/css'
import { colors, radius, typography } from '../../styles/tokens.css'

export const emptyState = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: '56px 24px',
  gap: '10px',
})

export const iconWrap = style({
  width: '64px',
  height: '64px',
  borderRadius: radius.lg,
  background: `linear-gradient(135deg, ${colors.primary50} 0%, ${colors.primary100} 100%)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: colors.primary500,
  marginBottom: '4px',
})

export const title = style({
  ...typography.titleMd,
  color: colors.gray900,
})

export const description = style({
  ...typography.bodyMd,
  color: colors.gray500,
  maxWidth: '240px',
  lineHeight: '150%',
})
