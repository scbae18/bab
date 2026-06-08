import { style } from '@vanilla-extract/css'
import { fadeInUpItem, scaleInItem } from '../../styles/animations.css'
import { colors, elevation, gradients, radius, spacing, typography } from '../../styles/tokens.css'

export const page = style({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  padding: spacing.contentPadding,
  background: gradients.hero,
  position: 'relative',
  overflow: 'hidden',
  '::before': {
    content: '""',
    position: 'absolute',
    top: '-60px',
    right: '-40px',
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    background: 'rgba(249, 115, 22, 0.12)',
    pointerEvents: 'none',
  },
  '::after': {
    content: '""',
    position: 'absolute',
    bottom: '120px',
    left: '-50px',
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    background: 'rgba(234, 179, 8, 0.1)',
    pointerEvents: 'none',
  },
})

export const heroSection = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  gap: spacing.sectionGap,
  paddingTop: '48px',
  position: 'relative',
  zIndex: 1,
})

export const logoWrap = style([
  scaleInItem,
  {
    animationDelay: '0.05s',
  },
])

export const description = style([
  fadeInUpItem,
  {
    ...typography.bodyLg,
    color: colors.gray500,
    lineHeight: '160%',
    maxWidth: '280px',
    animationDelay: '0.15s',
  },
])

export const featureList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  textAlign: 'left',
  width: '100%',
  maxWidth: '320px',
  backgroundColor: colors.surface,
  borderRadius: radius.lg,
  padding: '16px',
  boxShadow: elevation.card,
  border: `1px solid ${colors.gray100}`,
})

export const featureItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '4px 0',
})

export const featureIcon = style({
  width: '36px',
  height: '36px',
  borderRadius: radius.sm,
  backgroundColor: colors.primary50,
  color: colors.primary500,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
})

export const featureText = style({
  ...typography.bodyMd,
  color: colors.gray700,
  lineHeight: '145%',
})

export const formSection = style([
  fadeInUpItem,
  {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.sectionGap,
    paddingBottom: '32px',
    animationDelay: '0.25s',
    position: 'relative',
    zIndex: 1,
  },
])

export const shuffleButton = style({
  ...typography.labelSm,
  color: colors.primary600,
  marginTop: '8px',
  fontWeight: '600',
})

export const fieldLabel = style({
  ...typography.titleSm,
  color: colors.gray900,
  display: 'block',
  marginBottom: '8px',
  fontWeight: '700',
})

export const neighborhoodGrid = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
})
