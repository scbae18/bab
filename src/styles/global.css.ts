import { globalStyle } from '@vanilla-extract/css'
import { colors, typography } from './tokens.css'

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
})

globalStyle('html, body, #root', {
  height: '100%',
})

globalStyle('body', {
  fontFamily: typography.fontFamily,
  lineHeight: typography.lineHeight,
  letterSpacing: typography.letterSpacing,
  backgroundColor: '#EDECE8',
  color: colors.gray700,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  WebkitTapHighlightColor: 'rgba(249, 115, 22, 0.1)',
  overscrollBehavior: 'none',
})

globalStyle('button', {
  fontFamily: 'inherit',
  cursor: 'pointer',
  border: 'none',
  background: 'none',
  touchAction: 'manipulation',
})

globalStyle('input, textarea, select', {
  fontFamily: 'inherit',
})

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
})

globalStyle('*', {
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animationDuration: '0.01ms !important',
      animationIterationCount: '1 !important',
      transitionDuration: '0.01ms !important',
    },
  },
})
