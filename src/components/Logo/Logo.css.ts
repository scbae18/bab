import { recipe } from '@vanilla-extract/recipes'

export const logoRecipe = recipe({
  base: {
    display: 'block',
    objectFit: 'contain',
    flexShrink: 0,
  },
  variants: {
    size: {
      sm: { height: '28px', width: 'auto' },
      md: { height: '36px', width: 'auto' },
      lg: { height: '56px', width: 'auto' },
      xl: { height: '80px', width: 'auto' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
