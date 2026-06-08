import type { Category } from '../data/mockData'

export interface CategoryTheme {
  gradient: string
  surface: string
  accent: string
  emoji: string
}

export const CATEGORY_THEME: Record<Category, CategoryTheme> = {
  고기: {
    gradient: 'linear-gradient(135deg, #FF6B4A 0%, #FF9A6C 100%)',
    surface: '#FFF3EE',
    accent: '#E85A35',
    emoji: '🥩',
  },
  곱창: {
    gradient: 'linear-gradient(135deg, #A0714F 0%, #C4956A 100%)',
    surface: '#F7F0EA',
    accent: '#8B5E3C',
    emoji: '🍖',
  },
  찜닭: {
    gradient: 'linear-gradient(135deg, #FFB347 0%, #FFD06B 100%)',
    surface: '#FFF8E8',
    accent: '#D4920A',
    emoji: '🍗',
  },
  기타: {
    gradient: 'linear-gradient(135deg, #8B7CF6 0%, #A99BF8 100%)',
    surface: '#F3F0FF',
    accent: '#6E5AD8',
    emoji: '🍽️',
  },
}

export function getCategoryTheme(category: Category): CategoryTheme {
  return CATEGORY_THEME[category]
}
