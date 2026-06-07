import { style } from '@vanilla-extract/css'
import { colors, layout, spacing } from '../../styles/tokens.css'

export const shell = style({
  maxWidth: layout.maxWidth,
  margin: '0 auto',
  minHeight: '100%',
  backgroundColor: colors.background,
  position: 'relative',
  boxShadow: '0 0 40px rgba(0, 0, 0, 0.06)',
})

export const main = style({
  padding: spacing.contentPadding,
  paddingBottom: `calc(${spacing.tabBarHeight} + ${spacing.contentPadding} + env(safe-area-inset-bottom, 0px))`,
  minHeight: '100dvh',
})
