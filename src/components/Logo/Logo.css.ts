import { style } from '@vanilla-extract/css'
import { colors, radius, typography } from '../../styles/tokens.css'

export const logoMark = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  borderRadius: radius.sm,
  background: `linear-gradient(145deg, ${colors.primary400} 0%, ${colors.primary600} 100%)`,
  color: colors.white,
  fontSize: '16px',
  fontWeight: '700',
  boxShadow: '0 4px 12px rgba(249, 115, 22, 0.35)',
  flexShrink: 0,
})

export const logoRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
})

export const logoText = style({
  ...typography.headingMd,
  color: colors.gray900,
  letterSpacing: '-0.04em',
})

export const logoTextAccent = style({
  color: colors.primary500,
})
