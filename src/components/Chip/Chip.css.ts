import { recipe } from '@vanilla-extract/recipes'
import { colors, radius, typography } from '../../styles/tokens.css'

export const chipRecipe = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 10px',
    borderRadius: radius.pill,
    fontSize: typography.labelSm.fontSize,
    fontWeight: typography.labelSm.fontWeight,
    whiteSpace: 'nowrap',
    transition:
      'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.15s cubic-bezier(0.22, 1, 0.36, 1)',
    ':active': {
      transform: 'scale(0.95)',
    },
  },
  variants: {
    variant: {
      waiting: {
        backgroundColor: colors.primary50,
        color: colors.primary600,
        fontWeight: '700',
        border: `1px solid ${colors.primary100}`,
      },
      done: {
        backgroundColor: colors.gray50,
        color: colors.gray500,
      },
      pending: {
        backgroundColor: colors.accent50,
        color: colors.accent500,
      },
      confirmed: {
        backgroundColor: colors.success50,
        color: colors.success500,
      },
      filter: {
        backgroundColor: colors.white,
        color: colors.gray500,
        border: `1px solid ${colors.gray100}`,
        cursor: 'pointer',
      },
      filterActive: {
        backgroundColor: colors.primary500,
        color: colors.white,
        border: `1px solid ${colors.primary500}`,
        cursor: 'pointer',
        transform: 'scale(1.02)',
      },
      category: {
        backgroundColor: colors.white,
        color: colors.gray500,
        border: `1px solid ${colors.gray100}`,
        cursor: 'pointer',
      },
      categoryActive: {
        backgroundColor: colors.primary100,
        color: colors.primary600,
        border: `1px solid ${colors.primary200}`,
        cursor: 'pointer',
        transform: 'scale(1.02)',
      },
      onDark: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        color: colors.primary600,
        fontWeight: '700',
        boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
      },
    },
  },
  defaultVariants: {
    variant: 'waiting',
  },
})
