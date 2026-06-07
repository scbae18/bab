import { style } from '@vanilla-extract/css'
import { fadeInUpItem, scaleInItem } from '../../styles/animations.css'
import { colors, spacing, typography } from '../../styles/tokens.css'

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

export const title = style([
  scaleInItem,
  {
    ...typography.display,
    color: colors.primary500,
    animationDelay: '0.05s',
  },
])

export const description = style([
  fadeInUpItem,
  {
    ...typography.bodyLg,
    color: colors.gray500,
    lineHeight: typography.lineHeight,
    maxWidth: '280px',
    animationDelay: '0.2s',
  },
])

export const formSection = style([
  fadeInUpItem,
  {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.sectionGap,
    paddingBottom: '32px',
    animationDelay: '0.3s',
  },
])

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
