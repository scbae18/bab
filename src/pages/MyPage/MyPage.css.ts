import { style } from '@vanilla-extract/css'
import { fadeInUpItem, scaleInItem } from '../../styles/animations.css'
import { colors, elevation, gradients, radius, spacing, typography } from '../../styles/tokens.css'

export const pageTitle = style({
  ...typography.headingLg,
  color: colors.gray900,
  marginBottom: spacing.sectionGap,
  fontWeight: '800',
})

export const profileCard = style([
  scaleInItem,
  {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    backgroundColor: colors.surface,
    border: `1px solid ${colors.gray100}`,
    borderRadius: radius.lg,
    padding: '20px',
    marginBottom: spacing.sectionGap,
    boxShadow: elevation.card,
    position: 'relative',
    overflow: 'hidden',
    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: gradients.primary,
    },
  },
])

export const listItemAnimated = style([fadeInUpItem])

export const profileInfo = style({
  flex: 1,
})

export const profileName = style({
  ...typography.headingMd,
  color: colors.gray900,
  fontWeight: '700',
})

export const profileLocation = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  ...typography.bodyMd,
  color: colors.gray500,
  marginTop: '4px',
})

export const profileIntro = style({
  ...typography.bodyMd,
  color: colors.gray500,
  marginTop: '8px',
  lineHeight: '150%',
})

export const statsRow = style({
  display: 'flex',
  gap: '0',
  backgroundColor: colors.surface,
  border: `1px solid ${colors.gray100}`,
  borderRadius: radius.lg,
  marginBottom: spacing.sectionGap,
  overflow: 'hidden',
  boxShadow: elevation.card,
})

export const statItem = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '16px 8px',
  borderRight: `1px solid ${colors.gray100}`,
  ':last-child': {
    borderRight: 'none',
  },
})

export const statValue = style({
  ...typography.headingSm,
  color: colors.primary500,
  fontWeight: '800',
})

export const statLabel = style({
  ...typography.labelSm,
  color: colors.gray500,
  marginTop: '4px',
  fontWeight: '600',
})

export const tabSection = style({
  marginBottom: '16px',
})

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing.cardGap,
})

export const matchCardInner = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
})

export const matchHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const matchMenu = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  ...typography.headingSm,
  color: colors.gray900,
  fontWeight: '700',
})

export const matchInfo = style({
  ...typography.bodyMd,
  color: colors.gray500,
})

export const matchFooter = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const matchTime = style({
  ...typography.labelSm,
  color: colors.gray300,
})
