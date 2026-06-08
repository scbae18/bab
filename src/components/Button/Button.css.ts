import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { colors, gradients, radius, typography } from '../../styles/tokens.css'

export const buttonBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '6px',
  borderRadius: radius.md,
  fontWeight: '700',
  border: 'none',
  cursor: 'pointer',
  letterSpacing: '-0.02em',
  transition:
    'background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease, transform 0.15s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.15s ease',
  ':disabled': {
    cursor: 'not-allowed',
    background: colors.gray200,
    color: colors.gray300,
    boxShadow: 'none',
  },
})

export const buttonRecipe = recipe({
  base: buttonBase,
  variants: {
    variant: {
      primary: {
        background: gradients.primary,
        color: colors.white,
        boxShadow: '0 4px 14px rgba(249, 115, 22, 0.35)',
        ':hover:not(:disabled)': {
          boxShadow: '0 6px 20px rgba(249, 115, 22, 0.45)',
          transform: 'translateY(-1px)',
        },
        ':active:not(:disabled)': {
          transform: 'scale(0.98) translateY(0)',
          boxShadow: '0 2px 8px rgba(249, 115, 22, 0.3)',
        },
      },
      secondary: {
        backgroundColor: colors.primary50,
        color: colors.primary600,
        border: `1px solid ${colors.primary100}`,
      },
      ghost: {
        backgroundColor: colors.gray50,
        color: colors.gray500,
      },
      outlined: {
        backgroundColor: colors.white,
        color: colors.gray700,
        border: `1px solid ${colors.gray200}`,
        ':hover:not(:disabled)': {
          backgroundColor: colors.primary50,
          color: colors.primary600,
          borderColor: colors.primary200,
        },
      },
      danger: {
        backgroundColor: colors.error500,
        color: colors.white,
      },
    },
    size: {
      sm: {
        padding: '8px 14px',
        fontSize: typography.bodyMd.fontSize,
        borderRadius: radius.sm,
      },
      md: {
        padding: '12px 20px',
        fontSize: typography.bodyMd.fontSize,
      },
      lg: {
        padding: '16px 24px',
        fontSize: typography.bodyLg.fontSize,
        borderRadius: radius.lg,
      },
    },
    fullWidth: {
      true: { width: '100%' },
      false: {},
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    fullWidth: false,
  },
})
