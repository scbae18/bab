import { style } from '@vanilla-extract/css'
import {
  fadeInDownItem,
  fadeInUp,
  fadeInUpItem,
  pulseItem,
} from '../../styles/animations.css'
import { colors, elevation, gradients, radius, spacing, typography } from '../../styles/tokens.css'

export const header = style([
  fadeInDownItem,
  {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
])

export const greeting = style({
  ...typography.labelSm,
  color: colors.gray500,
  marginBottom: '8px',
})

export const greetingName = style({
  marginLeft: '4px',
  color: colors.primary600,
  fontWeight: '700',
})

export const headerRight = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  paddingTop: '4px',
})

export const location = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  padding: '6px 10px',
  borderRadius: radius.pill,
  backgroundColor: colors.surface,
  border: `1px solid ${colors.gray100}`,
  boxShadow: elevation.card,
  ...typography.labelSm,
  color: colors.gray700,
  fontWeight: '600',
})

export const bellButton = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: radius.pill,
  backgroundColor: colors.surface,
  border: `1px solid ${colors.gray100}`,
  boxShadow: elevation.card,
  color: colors.gray700,
  cursor: 'pointer',
})

export const bellBadge = style([
  pulseItem,
  {
    position: 'absolute',
    top: '6px',
    right: '6px',
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
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  background: gradients.primary,
  borderRadius: radius.lg,
  padding: '16px 18px',
  marginBottom: spacing.sectionGap,
  boxShadow: '0 6px 20px rgba(249, 115, 22, 0.3)',
  animation: `${fadeInUp} 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
  animationDelay: '0.1s',
  opacity: 0,
})

export const statsIcon = style({
  width: '40px',
  height: '40px',
  borderRadius: radius.sm,
  backgroundColor: 'rgba(255,255,255,0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '20px',
  flexShrink: 0,
})

export const statsText = style({
  ...typography.bodyMd,
  color: 'rgba(255,255,255,0.95)',
  fontWeight: '500',
})

export const statsCount = style({
  ...typography.headingSm,
  color: colors.white,
  fontWeight: '800',
})

export const filterSection = style({
  marginBottom: '12px',
})

export const sortSection = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12px',
  marginTop: '14px',
  marginBottom: '14px',
})

export const postCount = style({
  ...typography.labelSm,
  color: colors.gray500,
  fontWeight: '600',
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
  scrollSnapType: 'x mandatory',
  '::-webkit-scrollbar': { display: 'none' },
})

export const popularCard = style({
  minWidth: '300px',
  flexShrink: 0,
  scrollSnapAlign: 'start',
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
