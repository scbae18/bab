import { keyframes, style } from '@vanilla-extract/css'

export const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const fadeInUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(16px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

export const fadeInDown = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-10px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

export const scaleIn = keyframes({
  '0%': { opacity: 0, transform: 'scale(0.92)' },
  '100%': { opacity: 1, transform: 'scale(1)' },
})

export const slideUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(100%)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

export const slideUpCentered = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(-50%) translateY(100%)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(-50%) translateY(0)',
  },
})

export const pulse = keyframes({
  '0%, 100%': { transform: 'scale(1)', opacity: 1 },
  '50%': { transform: 'scale(1.15)', opacity: 0.85 },
})

export const shimmer = keyframes({
  '0%': { transform: 'translateX(-100%)' },
  '100%': { transform: 'translateX(100%)' },
})

export const float = keyframes({
  '0%, 100%': { transform: 'translateY(0)' },
  '50%': { transform: 'translateY(-6px)' },
})

export const pop = keyframes({
  '0%': { transform: 'scale(1)' },
  '50%': { transform: 'scale(1.08)' },
  '100%': { transform: 'scale(1)' },
})

export const pageEnter = style({
  animation: `${fadeIn} 0.3s ease forwards`,
})

export const fadeInUpItem = style({
  opacity: 0,
  animation: `${fadeInUp} 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
})

export const fadeInDownItem = style({
  opacity: 0,
  animation: `${fadeInDown} 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
})

export const scaleInItem = style({
  opacity: 0,
  animation: `${scaleIn} 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
})

export const slideUpItem = style({
  animation: `${slideUp} 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
})

export const floatItem = style({
  animation: `${float} 3s ease-in-out infinite`,
})

export const pulseItem = style({
  animation: `${pulse} 2s ease-in-out infinite`,
})
