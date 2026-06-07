import { style } from '@vanilla-extract/css'
import { colors, typography } from '../../styles/tokens.css'

export const cardInner = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})

export const topRow = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: '8px',
})

export const menuRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  flex: 1,
  minWidth: 0,
})

export const menuInfo = style({
  minWidth: 0,
})

export const menuName = style({
  ...typography.headingSm,
  color: colors.gray900,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

export const restaurant = style({
  ...typography.bodyMd,
  color: colors.gray500,
  marginTop: '2px',
})

export const metaRow = style({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '6px',
})

export const metaItem = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '3px',
  ...typography.labelSm,
  color: colors.gray500,
})

export const metaDivider = style({
  color: colors.gray100,
})

export const bottomRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const authorRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
})

export const authorName = style({
  ...typography.labelSm,
  color: colors.gray700,
})

export const timeAgo = style({
  ...typography.labelSm,
  color: colors.gray300,
})

export const tagRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '4px',
})

export const popularBadge = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '3px',
  ...typography.labelSm,
  color: colors.primary500,
  fontWeight: '600',
})
