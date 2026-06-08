import { recipe } from '@vanilla-extract/recipes'
import { radius } from '../../styles/tokens.css'

export const categoryIconRecipe = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: radius.sm,
    flexShrink: 0,
  },
  variants: {
    category: {
      고기: {
        backgroundColor: '#FFF0EB',
        color: '#E85A35',
      },
      곱창: {
        backgroundColor: '#F7F0EA',
        color: '#8B5E3C',
      },
      찜닭: {
        backgroundColor: '#FFF8E8',
        color: '#D4920A',
      },
      기타: {
        backgroundColor: '#F3F0FF',
        color: '#6E5AD8',
      },
    },
    size: {
      md: {
        width: '36px',
        height: '36px',
      },
      lg: {
        width: '48px',
        height: '48px',
        borderRadius: radius.md,
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
