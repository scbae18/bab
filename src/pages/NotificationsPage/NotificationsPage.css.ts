import { style } from '@vanilla-extract/css'
import { fadeInUpItem } from '../../styles/animations.css'
import { colors, elevation, radius, spacing, typography } from '../../styles/tokens.css'

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: spacing.sectionGap,
})

export const pageTitle = style({
  ...typography.headingLg,
  color: colors.gray900,
  fontWeight: '800',
})

export const backButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  ...typography.bodyMd,
  color: colors.gray500,
  marginBottom: '16px',
  fontWeight: '600',
  padding: '6px 10px',
  marginLeft: '-10px',
})

export const markAllButton = style({
  ...typography.bodyMd,
  color: colors.primary500,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontWeight: '700',
})

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})

export const notifItem = style([
  fadeInUpItem,
  {
    display: 'flex',
    gap: '12px',
    padding: '16px',
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
    border: `1px solid ${colors.gray100}`,
    cursor: 'pointer',
    boxShadow: elevation.card,
    transition: 'transform 0.15s ease, box-shadow 0.15s ease',
    ':active': {
      transform: 'scale(0.98)',
    },
  },
])

export const notifUnread = style({
  backgroundColor: colors.primary50,
  borderColor: colors.primary200,
})

export const notifIcon = style({
  width: '40px',
  height: '40px',
  borderRadius: radius.md,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  backgroundColor: colors.primary100,
  color: colors.primary600,
})

export const notifContent = style({
  flex: 1,
  minWidth: 0,
})

export const notifTitle = style({
  ...typography.titleSm,
  color: colors.gray900,
  fontWeight: '700',
})

export const notifMessage = style({
  ...typography.bodyMd,
  color: colors.gray500,
  marginTop: '3px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

export const notifTime = style({
  ...typography.labelSm,
  color: colors.gray300,
  marginTop: '6px',
  fontWeight: '600',
})
