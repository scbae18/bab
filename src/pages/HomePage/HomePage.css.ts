import { style } from '@vanilla-extract/css'
import { colors, radius, spacing, typography } from '../../styles/tokens.css'

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '16px',
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

export const bellBadge = style({
  position: 'absolute',
  top: '4px',
  right: '4px',
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: colors.primary500,
  border: `2px solid ${colors.white}`,
})

export const searchSection = style({
  marginBottom: '16px',
})

export const statsBanner = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: `linear-gradient(135deg, ${colors.primary100} 0%, ${colors.accent50} 100%)`,
  borderRadius: radius.md,
  padding: '14px 16px',
  marginBottom: spacing.sectionGap,
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

export const filterRow = style({
  display: 'flex',
  gap: '8px',
  overflowX: 'auto',
  marginBottom: '12px',
  paddingBottom: '4px',
  '::-webkit-scrollbar': { display: 'none' },
})

export const sortRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '12px',
})

export const sortSelect = style({
  ...typography.labelSm,
  color: colors.gray500,
  border: 'none',
  backgroundColor: 'transparent',
  outline: 'none',
  cursor: 'pointer',
  fontFamily: 'inherit',
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

export const sectionBlock = style({
  marginBottom: spacing.sectionGap,
})
