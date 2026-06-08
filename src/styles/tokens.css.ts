export const colors = {
  primary50: '#FFF8F3',
  primary100: '#FFEDD9',
  primary200: '#FFD4A8',
  primary300: '#FFB870',
  primary400: '#FF9438',
  primary500: '#F97316',
  primary600: '#E8650F',
  primary700: '#C4560D',
  primary800: '#9A450A',

  accent50: '#FFFBEB',
  accent200: '#FEF08A',
  accent500: '#EAB308',

  white: '#FFFFFF',
  background: '#FAFAF8',
  surface: '#FFFFFF',
  gray50: '#F4F4F1',
  gray100: '#E8E8E3',
  gray200: '#D4D4CD',
  gray300: '#A8A8A0',
  gray500: '#787870',
  gray700: '#45453F',
  gray900: '#1C1C1A',

  success50: '#EDFCF5',
  success500: '#1DAA7F',
  warning50: '#FFF9EB',
  warning500: '#FDAD22',
  error50: '#FFF1F1',
  error500: '#EF4453',
} as const

export const typography = {
  fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  lineHeight: '145%',
  letterSpacing: '-0.025em',

  display: { fontSize: '28px', fontWeight: '700' },
  headingLg: { fontSize: '24px', fontWeight: '700' },
  headingMd: { fontSize: '20px', fontWeight: '600' },
  headingSm: { fontSize: '18px', fontWeight: '600' },
  titleMd: { fontSize: '16px', fontWeight: '600' },
  titleSm: { fontSize: '14px', fontWeight: '600' },
  bodyLg: { fontSize: '16px', fontWeight: '500' },
  bodyMd: { fontSize: '14px', fontWeight: '500' },
  labelSm: { fontSize: '12px', fontWeight: '500' },
} as const

export const spacing = {
  contentPadding: '20px',
  sectionGap: '24px',
  cardGap: '14px',
  tabBarHeight: '72px',
} as const

export const radius = {
  sm: '10px',
  md: '14px',
  lg: '18px',
  xl: '22px',
  pill: '999px',
} as const

export const elevation = {
  card: '0 2px 16px rgba(28, 28, 26, 0.06)',
  cardHover: '0 8px 28px rgba(28, 28, 26, 0.1)',
  tabBar: '0 -4px 24px rgba(28, 28, 26, 0.08)',
  fab: '0 6px 20px rgba(249, 115, 22, 0.45)',
  modalOverlay: 'rgba(0, 0, 0, 0.35)',
  toast: '0 8px 32px rgba(28, 28, 26, 0.18)',
  inset: 'inset 0 1px 0 rgba(255, 255, 255, 0.6)',
} as const

export const layout = {
  maxWidth: '430px',
} as const

export const gradients = {
  primary: `linear-gradient(135deg, #FF9438 0%, #F97316 50%, #E8650F 100%)`,
  hero: `linear-gradient(180deg, #FFF3E8 0%, #FAFAF8 100%)`,
  surface: `linear-gradient(180deg, #FFFFFF 0%, #FAFAF8 100%)`,
} as const
