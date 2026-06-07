import { style } from '@vanilla-extract/css'
import { fadeInUpItem } from '../../styles/animations.css'
import { colors, radius, spacing, typography } from '../../styles/tokens.css'

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: spacing.sectionGap,
})

export const pageTitle = style({
  ...typography.headingLg,
  color: colors.gray900,
})

export const backButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  ...typography.bodyMd,
  color: colors.gray500,
  marginBottom: '16px',
})

export const markAllButton = style({
  ...typography.bodyMd,
  color: colors.primary500,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'inherit',
})

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
})

export const notifItem = style([
  fadeInUpItem,
  {
    display: 'flex',
    gap: '12px',
    padding: '14px',
    borderRadius: radius.md,
    backgroundColor: colors.white,
    border: `1px solid ${colors.gray100}`,
    cursor: 'pointer',
    transition:
      'background-color 0.2s ease, transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)',
    ':hover': {
      backgroundColor: colors.primary50,
      transform: 'translateX(4px)',
    },
    ':active': {
      transform: 'scale(0.98)',
    },
  },
])

export const notifUnread = style({
  backgroundColor: colors.primary50,
  borderColor: colors.primary100,
})

export const notifIcon = style({
  width: '36px',
  height: '36px',
  borderRadius: radius.sm,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  backgroundColor: colors.primary100,
  color: colors.primary500,
})

export const notifContent = style({
  flex: 1,
  minWidth: 0,
})

export const notifTitle = style({
  ...typography.titleSm,
  color: colors.gray900,
})

export const notifMessage = style({
  ...typography.bodyMd,
  color: colors.gray500,
  marginTop: '2px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

export const notifTime = style({
  ...typography.labelSm,
  color: colors.gray300,
  marginTop: '4px',
})
