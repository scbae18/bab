import { style } from '@vanilla-extract/css'
import { colors, radius, spacing, typography } from '../../styles/tokens.css'

export const page = style({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  padding: spacing.contentPadding,
  backgroundColor: colors.background,
})

export const heroSection = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  gap: spacing.sectionGap,
  paddingTop: '40px',
})

export const logoMark = style({
  width: '72px',
  height: '72px',
  borderRadius: radius.lg,
  background: `linear-gradient(135deg, ${colors.primary100} 0%, ${colors.accent50} 100%)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: colors.primary500,
  fontSize: '32px',
  fontWeight: '700',
})

export const title = style({
  ...typography.display,
  color: colors.gray900,
})

export const description = style({
  ...typography.bodyLg,
  color: colors.gray500,
  lineHeight: typography.lineHeight,
  maxWidth: '280px',
})

export const formSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing.sectionGap,
  paddingBottom: '32px',
})

export const stepLabel = style({
  ...typography.labelSm,
  color: colors.primary500,
  marginBottom: '4px',
})

export const fieldLabel = style({
  ...typography.titleSm,
  color: colors.gray900,
  display: 'block',
  marginBottom: '8px',
})

export const neighborhoodGrid = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
})
