import { keyframes, style } from '@vanilla-extract/css'
import { colors, elevation, gradients, radius, spacing, typography } from '../../styles/tokens.css'

const tabPop = keyframes({
  '0%': { transform: 'scale(1)' },
  '40%': { transform: 'scale(1.12)' },
  '100%': { transform: 'scale(1)' },
})

export const tabBar = style({
  position: 'fixed',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  maxWidth: '430px',
  height: `calc(${spacing.tabBarHeight} + env(safe-area-inset-bottom, 0px))`,
  paddingBottom: 'env(safe-area-inset-bottom, 0px)',
  paddingLeft: '12px',
  paddingRight: '12px',
  paddingTop: '8px',
  backgroundColor: 'rgba(255, 255, 255, 0.92)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  borderTop: `1px solid ${colors.gray100}`,
  boxShadow: elevation.tabBar,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-around',
  zIndex: 100,
})

export const tabItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3px',
  flex: 1,
  minHeight: '52px',
  textDecoration: 'none',
  transition: 'color 0.2s ease, transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)',
  ':active': {
    transform: 'scale(0.94)',
  },
})

export const tabItemFab = style({
  marginTop: '-18px',
})

export const tabIconWrap = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '28px',
  height: '28px',
  transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
})

export const tabIconFab = style({
  width: '52px',
  height: '52px',
  borderRadius: radius.pill,
  background: gradients.primary,
  color: colors.white,
  boxShadow: elevation.fab,
})

export const tabIconActive = style({
  animation: `${tabPop} 0.35s cubic-bezier(0.22, 1, 0.36, 1)`,
})

export const tabLabel = style({
  fontSize: typography.labelSm.fontSize,
  fontWeight: '600',
  transition: 'color 0.2s ease',
})

export const tabLabelFab = style({
  color: colors.primary600,
  fontWeight: '700',
})

export const tabActive = style({
  color: colors.primary500,
})

export const tabInactive = style({
  color: colors.gray300,
})
