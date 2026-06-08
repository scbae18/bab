import { style } from '@vanilla-extract/css'
import { fadeInUpItem } from '../../styles/animations.css'
import { colors, radius, typography } from '../../styles/tokens.css'

export const cardWrapper = style([fadeInUpItem])

export const cover = style({
  position: 'relative',
  minHeight: '72px',
  padding: '14px 16px',
  paddingRight: '88px',
  display: 'flex',
  alignItems: 'flex-start',
  overflow: 'hidden',
})

export const coverCompact = style({
  minHeight: '68px',
  padding: '12px 14px',
  paddingRight: '80px',
})

export const coverEmoji = style({
  position: 'absolute',
  right: '12px',
  bottom: '-8px',
  fontSize: '52px',
  opacity: 0.22,
  lineHeight: 1,
  pointerEvents: 'none',
  userSelect: 'none',
})

export const coverMenu = style({
  position: 'relative',
  zIndex: 1,
  ...typography.headingSm,
  color: colors.white,
  textShadow: '0 1px 4px rgba(0,0,0,0.15)',
  lineHeight: '1.35',
  wordBreak: 'keep-all',
  overflowWrap: 'break-word',
})

export const coverRestaurant = style({
  position: 'relative',
  zIndex: 1,
  ...typography.labelSm,
  color: 'rgba(255,255,255,0.9)',
  marginTop: '4px',
  lineHeight: '1.4',
  wordBreak: 'keep-all',
  overflowWrap: 'break-word',
})

export const coverInfo = style({
  position: 'relative',
  zIndex: 1,
  flex: 1,
  width: '100%',
})

export const statusChip = style({
  position: 'absolute',
  top: '12px',
  right: '12px',
  zIndex: 2,
  flexShrink: 0,
})

export const cardBody = style({
  padding: '14px 16px 16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})

export const cardInner = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})

export const metaRow = style({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '6px',
})

export const metaPill = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  padding: '4px 8px',
  borderRadius: radius.pill,
  backgroundColor: colors.gray50,
  ...typography.labelSm,
  color: colors.gray500,
})

export const progressTrack = style({
  height: '4px',
  borderRadius: radius.pill,
  backgroundColor: colors.gray100,
  overflow: 'hidden',
})

export const progressFill = style({
  height: '100%',
  borderRadius: radius.pill,
  background: `linear-gradient(90deg, #FF9438, #F97316)`,
  transition: 'width 0.3s ease',
})

export const progressLabel = style({
  display: 'flex',
  justifyContent: 'space-between',
  ...typography.labelSm,
  color: colors.gray500,
  marginBottom: '4px',
})

export const bottomRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: '2px',
  borderTop: `1px solid ${colors.gray50}`,
})

export const authorRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})

export const authorName = style({
  ...typography.labelSm,
  color: colors.gray700,
  fontWeight: '600',
})

export const timeAgo = style({
  ...typography.labelSm,
  color: colors.gray300,
})

export const tagRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '6px',
})

export const popularBadge = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '3px',
  padding: '2px 7px',
  borderRadius: radius.pill,
  backgroundColor: colors.primary50,
  ...typography.labelSm,
  color: colors.primary500,
  fontWeight: '700',
})
