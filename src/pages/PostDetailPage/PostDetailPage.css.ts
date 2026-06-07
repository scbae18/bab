import { style } from '@vanilla-extract/css'
import {
  fadeInUpItem,
  pageEnter,
  slideUpCentered,
} from '../../styles/animations.css'
import { colors, radius, spacing, typography } from '../../styles/tokens.css'

export const topBar = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: spacing.sectionGap,
})

export const backButton = style({
  ...typography.bodyMd,
  color: colors.gray500,
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
})

export const shareButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '36px',
  height: '36px',
  borderRadius: radius.sm,
  border: `1px solid ${colors.gray100}`,
  backgroundColor: colors.white,
  color: colors.gray500,
  cursor: 'pointer',
})

export const titleSection = style({
  marginBottom: '16px',
})

export const menuTitle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  ...typography.display,
  color: colors.gray900,
  marginBottom: '4px',
})

export const restaurantRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})

export const restaurantName = style({
  ...typography.headingMd,
  color: colors.primary500,
})

export const rating = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '3px',
  ...typography.bodyMd,
  color: colors.accent500,
})

export const restaurantCard = style({
  backgroundColor: colors.white,
  border: `1px solid ${colors.gray100}`,
  borderRadius: radius.md,
  padding: '16px',
  marginBottom: spacing.sectionGap,
})

export const restaurantAddress = style({
  ...typography.bodyMd,
  color: colors.gray500,
  marginTop: '4px',
})

export const minOrderBadge = style({
  display: 'inline-flex',
  marginTop: '10px',
  padding: '6px 10px',
  borderRadius: radius.sm,
  backgroundColor: colors.accent50,
  ...typography.labelSm,
  color: colors.accent500,
})

export const hostCard = style({
  display: 'flex',
  gap: '14px',
  backgroundColor: colors.white,
  border: `1px solid ${colors.gray100}`,
  borderRadius: radius.md,
  padding: '16px',
  marginBottom: spacing.sectionGap,
})

export const hostInfo = style({
  flex: 1,
})

export const hostName = style({
  ...typography.titleMd,
  color: colors.gray900,
})

export const hostIntro = style({
  ...typography.bodyMd,
  color: colors.gray500,
  marginTop: '4px',
})

export const hostStats = style({
  display: 'flex',
  gap: '12px',
  marginTop: '8px',
})

export const hostStat = style({
  ...typography.labelSm,
  color: colors.gray500,
})

export const hostStatValue = style({
  color: colors.primary500,
  fontWeight: '600',
})

export const infoGrid = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '10px',
  marginBottom: spacing.sectionGap,
})

export const infoBox = style({
  backgroundColor: colors.white,
  border: `1px solid ${colors.gray100}`,
  borderRadius: radius.md,
  padding: '14px',
})

export const infoBoxLabel = style({
  ...typography.labelSm,
  color: colors.gray500,
  marginBottom: '4px',
})

export const infoBoxValue = style({
  ...typography.titleMd,
  color: colors.gray900,
})

export const tagRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '6px',
  marginBottom: spacing.sectionGap,
})

export const speechBubble = style({
  position: 'relative',
  backgroundColor: colors.primary50,
  borderRadius: radius.md,
  padding: spacing.contentPadding,
  marginBottom: spacing.sectionGap,
})

export const speechBubbleText = style({
  ...typography.bodyLg,
  color: colors.gray700,
  lineHeight: typography.lineHeight,
})

export const speechBubbleTail = style({
  position: 'absolute',
  bottom: '-8px',
  left: '24px',
  width: 0,
  height: 0,
  borderLeft: '8px solid transparent',
  borderRight: '8px solid transparent',
  borderTop: `8px solid ${colors.primary50}`,
})

export const guidelineCard = style({
  backgroundColor: colors.gray50,
  borderRadius: radius.md,
  padding: '16px',
  marginBottom: spacing.sectionGap,
})

export const guidelineTitle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  ...typography.titleSm,
  color: colors.gray700,
  marginBottom: '8px',
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
  gap: '8px',
  marginBottom: spacing.sectionGap,
})

export const applicantAvatars = style({
  display: 'flex',
})

export const applicantText = style({
  ...typography.bodyMd,
  color: colors.gray500,
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

export const stickyFooter = style({
  position: 'fixed',
  bottom: 0,
  left: '50%',
  width: '100%',
  maxWidth: '430px',
  padding: '12px 20px',
  paddingBottom: 'calc(12px + env(safe-area-inset-bottom, 0px))',
  backgroundColor: colors.white,
  borderTop: `1px solid ${colors.gray100}`,
  zIndex: 50,
  boxShadow: '0 -4px 20px rgba(0,0,0,0.06)',
  animation: `${slideUpCentered} 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
})

export const animateSection = style([fadeInUpItem])

export const footerSpacer = style({
  height: '80px',
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
  },
])
