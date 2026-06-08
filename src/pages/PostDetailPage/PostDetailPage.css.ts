import { style } from '@vanilla-extract/css'
import {
  fadeInUpItem,
  pageEnter,
  slideUpCentered,
} from '../../styles/animations.css'
import { colors, elevation, radius, spacing, typography } from '../../styles/tokens.css'

export const topBar = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '12px',
})

export const backButton = style({
  ...typography.bodyMd,
  color: colors.gray500,
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  padding: '6px 10px',
  marginLeft: '-10px',
  borderRadius: radius.sm,
  fontWeight: '600',
})

export const heroBanner = style({
  position: 'relative',
  borderRadius: radius.lg,
  padding: '20px',
  marginBottom: spacing.sectionGap,
  overflow: 'hidden',
  minHeight: '120px',
})

export const heroEmoji = style({
  position: 'absolute',
  right: '16px',
  bottom: '-10px',
  fontSize: '72px',
  opacity: 0.2,
  lineHeight: 1,
  pointerEvents: 'none',
})

export const menuTitle = style({
  position: 'relative',
  zIndex: 1,
  ...typography.display,
  color: colors.white,
  marginBottom: '6px',
  textShadow: '0 2px 8px rgba(0,0,0,0.15)',
})

export const restaurantRow = style({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  flexWrap: 'wrap',
})

export const restaurantName = style({
  ...typography.headingMd,
  color: 'rgba(255,255,255,0.95)',
})

export const rating = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  padding: '4px 10px',
  borderRadius: radius.pill,
  backgroundColor: 'rgba(255,255,255,0.2)',
  ...typography.labelSm,
  color: colors.white,
  fontWeight: '700',
})

export const restaurantCard = style({
  backgroundColor: colors.surface,
  border: `1px solid ${colors.gray100}`,
  borderRadius: radius.lg,
  padding: '16px',
  marginBottom: spacing.sectionGap,
  boxShadow: elevation.card,
})

export const restaurantAddress = style({
  ...typography.bodyMd,
  color: colors.gray500,
  marginTop: '4px',
  lineHeight: '150%',
})

export const minOrderBadge = style({
  display: 'inline-flex',
  marginTop: '12px',
  padding: '6px 12px',
  borderRadius: radius.pill,
  backgroundColor: colors.accent50,
  ...typography.labelSm,
  color: colors.accent500,
  fontWeight: '700',
})

export const hostCard = style({
  display: 'flex',
  gap: '14px',
  backgroundColor: colors.surface,
  border: `1px solid ${colors.gray100}`,
  borderRadius: radius.lg,
  padding: '18px',
  marginBottom: spacing.sectionGap,
  boxShadow: elevation.card,
})

export const hostInfo = style({
  flex: 1,
})

export const hostName = style({
  ...typography.titleMd,
  color: colors.gray900,
  fontWeight: '700',
})

export const hostIntro = style({
  ...typography.bodyMd,
  color: colors.gray500,
  marginTop: '4px',
})

export const hostStats = style({
  display: 'flex',
  gap: '12px',
  marginTop: '10px',
})

export const hostStat = style({
  ...typography.labelSm,
  color: colors.gray500,
})

export const hostStatValue = style({
  color: colors.primary500,
  fontWeight: '700',
})

export const infoGrid = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '10px',
  marginBottom: spacing.sectionGap,
})

export const infoBox = style({
  backgroundColor: colors.surface,
  border: `1px solid ${colors.gray100}`,
  borderRadius: radius.md,
  padding: '14px',
  boxShadow: elevation.card,
})

export const infoBoxLabel = style({
  ...typography.labelSm,
  color: colors.gray500,
  marginBottom: '6px',
  fontWeight: '600',
})

export const infoBoxValue = style({
  ...typography.titleMd,
  color: colors.gray900,
  fontWeight: '700',
})

export const tagRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '6px',
  marginBottom: spacing.sectionGap,
})

export const speechBubble = style({
  position: 'relative',
  backgroundColor: colors.surface,
  borderRadius: radius.lg,
  padding: spacing.contentPadding,
  marginBottom: spacing.sectionGap,
  border: `1px solid ${colors.primary100}`,
  boxShadow: elevation.card,
})

export const speechBubbleText = style({
  ...typography.bodyLg,
  color: colors.gray700,
  lineHeight: '160%',
})

export const speechBubbleTail = style({
  display: 'none',
})

export const guidelineCardCollapsed = style({
  marginBottom: spacing.sectionGap,
  borderRadius: radius.lg,
  border: `1px solid ${colors.gray100}`,
  backgroundColor: colors.surface,
  overflow: 'hidden',
  boxShadow: elevation.card,
})

export const guidelineToggle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '16px',
  color: colors.gray700,
})

export const guidelineCard = style({
  backgroundColor: colors.gray50,
  padding: '0 16px 16px',
})

export const guidelineTitle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  ...typography.titleSm,
  color: colors.gray700,
  marginBottom: '8px',
  fontWeight: '700',
})

export const guidelineList = style({
  ...typography.bodyMd,
  color: colors.gray500,
  paddingLeft: '16px',
  lineHeight: '180%',
})

export const applicantsRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: spacing.sectionGap,
  padding: '14px 16px',
  backgroundColor: colors.primary50,
  borderRadius: radius.lg,
  border: `1px solid ${colors.primary100}`,
})

export const applicantAvatars = style({
  display: 'flex',
})

export const applicantText = style({
  ...typography.bodyMd,
  color: colors.primary700,
  fontWeight: '600',
})

export const similarSection = style({
  marginTop: spacing.sectionGap,
  paddingTop: spacing.sectionGap,
  borderTop: `1px solid ${colors.gray100}`,
})

export const similarList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing.cardGap,
})

export const stickyFooterActions = style({
  display: 'flex',
  gap: '8px',
  width: '100%',
})

export const stickyFooter = style({
  position: 'fixed',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  maxWidth: '430px',
  padding: '12px 20px',
  paddingBottom: 'calc(12px + env(safe-area-inset-bottom, 0px))',
  backgroundColor: 'rgba(255, 255, 255, 0.94)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  borderTop: `1px solid ${colors.gray100}`,
  zIndex: 50,
  boxShadow: elevation.tabBar,
  animation: `${slideUpCentered} 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
})

export const animateSection = style([fadeInUpItem])

export const footerSpacer = style({
  height: '88px',
})

export const notFound = style({
  ...typography.bodyLg,
  color: colors.gray500,
  textAlign: 'center',
  padding: '40px 0',
})

export const detailMain = style([
  pageEnter,
  {
    padding: spacing.contentPadding,
    minHeight: '100vh',
    position: 'relative',
    zIndex: 1,
  },
])
