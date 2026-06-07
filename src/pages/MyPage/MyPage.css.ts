import { style } from '@vanilla-extract/css'
import { colors, radius, spacing, typography } from '../../styles/tokens.css'

export const profileCard = style({
  display: 'flex',
  gap: '16px',
  alignItems: 'center',
  backgroundColor: colors.white,
  border: `1px solid ${colors.gray100}`,
  borderRadius: radius.md,
  padding: '20px',
  marginBottom: spacing.sectionGap,
})

export const profileInfo = style({
  flex: 1,
})

export const profileName = style({
  ...typography.headingMd,
  color: colors.gray900,
})

export const profileLocation = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  ...typography.bodyMd,
  color: colors.gray500,
  marginTop: '2px',
})

export const profileIntro = style({
  ...typography.bodyMd,
  color: colors.gray500,
  marginTop: '6px',
})

export const statsRow = style({
  display: 'flex',
  gap: '0',
  backgroundColor: colors.white,
  border: `1px solid ${colors.gray100}`,
  borderRadius: radius.md,
  marginBottom: spacing.sectionGap,
  overflow: 'hidden',
})

export const statItem = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '14px 8px',
  borderRight: `1px solid ${colors.gray100}`,
  ':last-child': {
    borderRight: 'none',
  },
})

export const statValue = style({
  ...typography.titleMd,
  color: colors.primary500,
})

export const statLabel = style({
  ...typography.labelSm,
  color: colors.gray500,
  marginTop: '2px',
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

export const myPostActions = style({
  display: 'flex',
  gap: '8px',
  marginTop: '4px',
})

export const closeButton = style({
  ...typography.labelSm,
  color: colors.gray500,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'inherit',
  textDecoration: 'underline',
})
