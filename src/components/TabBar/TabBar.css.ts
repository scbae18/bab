import { style } from '@vanilla-extract/css'
import { colors, spacing, typography } from '../../styles/tokens.css'

export const tabBar = style({
  position: 'fixed',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  maxWidth: '430px',
  height: spacing.tabBarHeight,
  backgroundColor: colors.white,
  borderTop: `1px solid ${colors.primary100}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  zIndex: 100,
})

export const tabItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
  flex: 1,
  height: '100%',
  textDecoration: 'none',
  transition: 'color 0.15s ease',
})

export const tabLabel = style({
  fontSize: typography.labelSm.fontSize,
  fontWeight: typography.labelSm.fontWeight,
})

export const tabActive = style({
  color: colors.primary500,
})

export const tabInactive = style({
  color: colors.gray300,
})
