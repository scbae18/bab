import { recipe } from '@vanilla-extract/recipes'
import { colors, typography } from '../../styles/tokens.css'

export const avatarRecipe = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    fontWeight: '700',
    flexShrink: 0,
    color: colors.white,
    border: `2px solid ${colors.white}`,
    boxShadow: '0 2px 8px rgba(28, 28, 26, 0.12)',
  },
  variants: {
    size: {
      sm: {
        width: '28px',
        height: '28px',
        fontSize: typography.labelSm.fontSize,
        borderWidth: '1.5px',
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
