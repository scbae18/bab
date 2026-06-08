import { style } from '@vanilla-extract/css'
import { colors, gradients, layout, spacing } from '../../styles/tokens.css'

export const shell = style({
  maxWidth: layout.maxWidth,
  margin: '0 auto',
  minHeight: '100%',
  backgroundColor: colors.background,
  position: 'relative',
  boxShadow: '0 0 60px rgba(28, 28, 26, 0.12)',
  overflow: 'hidden',
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '220px',
    background: gradients.hero,
    pointerEvents: 'none',
    zIndex: 0,
  },
})

export const main = style({
  position: 'relative',
  zIndex: 1,
  padding: spacing.contentPadding,
  paddingBottom: `calc(${spacing.tabBarHeight} + ${spacing.contentPadding} + env(safe-area-inset-bottom, 0px))`,
  minHeight: '100dvh',
})
