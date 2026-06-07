import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { colors, radius, typography } from '../../styles/tokens.css'

export const buttonBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
  borderRadius: radius.sm,
  fontWeight: '600',
  border: 'none',
  cursor: 'pointer',
  transition:
    'background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease, transform 0.15s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.15s ease',
  ':disabled': {
    cursor: 'not-allowed',
    backgroundColor: colors.gray300,
    color: colors.gray100,
  },
})

export const buttonRecipe = recipe({
  base: buttonBase,
  variants: {
    variant: {
      primary: {
        backgroundColor: colors.primary500,
        color: colors.white,
        boxShadow: '0 2px 8px rgba(249, 115, 22, 0.25)',
        ':hover:not(:disabled)': {
          backgroundColor: colors.primary600,
          boxShadow: '0 4px 14px rgba(249, 115, 22, 0.35)',
          transform: 'translateY(-1px)',
        },
        ':active:not(:disabled)': {
          backgroundColor: colors.primary700,
          transform: 'scale(0.97) translateY(0)',
          boxShadow: '0 1px 4px rgba(249, 115, 22, 0.2)',
        },
      },
      secondary: {
        backgroundColor: colors.primary100,
        color: colors.primary500,
      },
      ghost: {
        backgroundColor: colors.gray50,
        color: colors.gray500,
      },
      outlined: {
        backgroundColor: colors.white,
        color: colors.gray700,
        border: `1px solid ${colors.gray100}`,
        ':hover:not(:disabled)': {
          backgroundColor: colors.primary50,
          color: colors.primary500,
          borderColor: colors.primary500,
        },
      },
      danger: {
        backgroundColor: colors.error500,
        color: colors.white,
      },
    },
    size: {
      sm: {
        padding: '8px 12px',
        fontSize: typography.bodyMd.fontSize,
      },
      md: {
        padding: '12px 24px',
        fontSize: typography.bodyMd.fontSize,
      },
      lg: {
        padding: '16px 24px',
        fontSize: typography.bodyLg.fontSize,
        borderRadius: radius.md,
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
