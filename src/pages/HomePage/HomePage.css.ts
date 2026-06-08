import { style } from '@vanilla-extract/css'
import {
  fadeInDownItem,
  fadeInUp,
  fadeInUpItem,
  pulseItem,
  shimmer,
} from '../../styles/animations.css'
import { colors, radius, spacing, typography } from '../../styles/tokens.css'

export const header = style([
  fadeInDownItem,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '16px',
  },
])

export const greeting = style({
  ...typography.labelSm,
  color: colors.gray500,
  marginBottom: '2px',
})

export const greetingName = style({
  marginLeft: '4px',
  color: colors.primary600,
  fontWeight: '600',
})

export const logo = style({
  ...typography.headingMd,
  color: colors.primary500,
})

export const headerRight = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
})

export const location = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  ...typography.bodyMd,
  color: colors.primary600,
})

export const bellButton = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '36px',
  height: '36px',
  borderRadius: radius.sm,
  backgroundColor: colors.white,
  border: `1px solid ${colors.gray100}`,
  color: colors.gray700,
  cursor: 'pointer',
})

export const bellBadge = style([
  pulseItem,
  {
    position: 'absolute',
    top: '4px',
    right: '4px',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: colors.primary500,
    border: `2px solid ${colors.white}`,
  },
])

export const searchSection = style([
  fadeInUpItem,
  {
    marginBottom: '16px',
    animationDelay: '0.05s',
  },
])

export const statsBanner = style({
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: `linear-gradient(135deg, ${colors.primary100} 0%, ${colors.accent50} 100%)`,
  borderRadius: radius.md,
  padding: '14px 16px',
  marginBottom: spacing.sectionGap,
  animation: `${fadeInUp} 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
  animationDelay: '0.1s',
  opacity: 0,
  '::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '50%',
    height: '100%',
    background:
      'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
    animation: `${shimmer} 3s ease-in-out infinite`,
    animationDelay: '1s',
  },
})

export const statsText = style({
  ...typography.bodyMd,
  color: colors.primary700,
})

export const statsCount = style({
  ...typography.titleMd,
  color: colors.primary500,
})

export const filterSection = style({
  marginBottom: '12px',
})

export const sortSection = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12px',
  marginTop: '12px',
  marginBottom: '12px',
})

export const postCount = style({
  ...typography.labelSm,
  color: colors.gray300,
})

export const postList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing.cardGap,
})

export const popularScroll = style({
  display: 'flex',
  gap: spacing.cardGap,
  overflowX: 'auto',
  marginBottom: spacing.sectionGap,
  paddingBottom: '4px',
  '::-webkit-scrollbar': { display: 'none' },
})

export const popularCard = style({
  minWidth: '280px',
  flexShrink: 0,
})

export const sectionBlock = style([
  fadeInUpItem,
  {
    marginBottom: spacing.sectionGap,
    animationDelay: '0.15s',
  },
])

export const filterSectionAnimated = style([
  fadeInUpItem,
  {
    animationDelay: '0.2s',
  },
])
