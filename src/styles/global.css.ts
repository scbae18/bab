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
  backgroundColor: colors.gray50,
  color: colors.gray700,
  WebkitFontSmoothing: 'antialiased',
})

globalStyle('button', {
  fontFamily: 'inherit',
  cursor: 'pointer',
  border: 'none',
  background: 'none',
})

globalStyle('input, textarea', {
  fontFamily: 'inherit',
})

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
})
