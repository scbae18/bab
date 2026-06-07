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
  },
  variants: {
    variant: {
      waiting: {
        backgroundColor: colors.primary50,
        color: colors.primary500,
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
        transition: 'background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease',
      },
      filterActive: {
        backgroundColor: colors.primary500,
        color: colors.white,
        border: `1px solid ${colors.primary500}`,
        cursor: 'pointer',
      },
      category: {
        backgroundColor: colors.white,
        color: colors.gray500,
        border: `1px solid ${colors.gray100}`,
        cursor: 'pointer',
        transition: 'background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease',
      },
      categoryActive: {
        backgroundColor: colors.primary100,
        color: colors.primary600,
        border: `1px solid ${colors.primary200}`,
        cursor: 'pointer',
      },
    },
  },
  defaultVariants: {
    variant: 'waiting',
  },
})
