export const colors = {
  primary50: '#FFF8F1',
  primary100: '#FFE9D0',
  primary200: '#FFD0A0',
  primary300: '#FFB366',
  primary400: '#FF9130',
  primary500: '#F97316',
  primary600: '#EA6C10',
  primary700: '#C75C0D',
  primary800: '#9C470A',

  accent50: '#FFFBEB',
  accent200: '#FEF08A',
  accent500: '#EAB308',

  white: '#FFFFFF',
  background: '#FFFAF6',
  gray50: '#F5F5F0',
  gray100: '#E8E8E0',
  gray300: '#B0AFA8',
  gray500: '#8A8880',
  gray700: '#5C5A55',
  gray900: '#2E2C28',

  success50: '#EDFCF5',
  success500: '#1DAA7F',
  warning50: '#FFF9EB',
  warning500: '#FDAD22',
  error50: '#FFF1F1',
  error500: '#EF4453',
} as const

export const typography = {
  fontFamily: 'Pretendard, sans-serif',
  lineHeight: '140%',
  letterSpacing: '-0.03em',

  display: { fontSize: '28px', fontWeight: '700' },
  headingLg: { fontSize: '24px', fontWeight: '600' },
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
  cardGap: '12px',
  tabBarHeight: '64px',
} as const

export const radius = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  pill: '999px',
} as const

export const elevation = {
  card: '0 2px 12px rgba(249, 115, 22, 0.08)',
  modalOverlay: 'rgba(0, 0, 0, 0.3)',
  toast: '0 4px 16px rgba(0, 0, 0, 0.15)',
} as const

export const layout = {
  maxWidth: '430px',
} as const
