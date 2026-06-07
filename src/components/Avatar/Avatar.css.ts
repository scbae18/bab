import { recipe } from '@vanilla-extract/recipes'
import { colors, typography } from '../../styles/tokens.css'

export const avatarRecipe = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    fontWeight: '600',
    flexShrink: 0,
    color: colors.primary600,
    backgroundColor: colors.primary100,
  },
  variants: {
    size: {
      sm: {
        width: '28px',
        height: '28px',
        fontSize: typography.labelSm.fontSize,
      },
      md: {
        width: '40px',
        height: '40px',
        fontSize: typography.titleSm.fontSize,
      },
      lg: {
        width: '56px',
        height: '56px',
        fontSize: typography.titleMd.fontSize,
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
