import type { Category } from '../../data/mockData'
import { Icon } from '../Icon/Icon'
import { categoryIconRecipe } from './CategoryIcon.css'

const CATEGORY_ICON: Record<Category, 'meat' | 'intestine' | 'chicken' | 'other'> = {
  고기: 'meat',
  곱창: 'intestine',
  찜닭: 'chicken',
  기타: 'other',
}

interface CategoryIconProps {
  category: Category
  size?: 'md' | 'lg'
}

export function CategoryIcon({ category, size = 'md' }: CategoryIconProps) {
  const iconSize = size === 'lg' ? 24 : 18
  return (
    <span className={categoryIconRecipe({ category, size })}>
      <Icon name={CATEGORY_ICON[category]} size={iconSize} />
    </span>
  )
}
