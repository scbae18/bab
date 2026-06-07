import { keyframes, style } from '@vanilla-extract/css'
import { colors, spacing, typography } from '../../styles/tokens.css'

const tabPop = keyframes({
  '0%': { transform: 'scale(1)' },
  '40%': { transform: 'scale(1.15)' },
  '100%': { transform: 'scale(1)' },
})

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
  transition: 'color 0.2s ease, transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)',
  ':active': {
    transform: 'scale(0.92)',
  },
})

export const tabIconWrap = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
})

export const tabIconActive = style({
  animation: `${tabPop} 0.35s cubic-bezier(0.22, 1, 0.36, 1)`,
})

export const tabLabel = style({
  fontSize: typography.labelSm.fontSize,
  fontWeight: typography.labelSm.fontWeight,
  transition: 'color 0.2s ease',
})

export const tabActive = style({
  color: colors.primary500,
})

export const tabInactive = style({
  color: colors.gray300,
})

export const tabIndicator = style({
  position: 'absolute',
  top: 0,
  width: '32px',
  height: '3px',
  borderRadius: '0 0 3px 3px',
  backgroundColor: colors.primary500,
  transition: 'left 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s ease',
})
