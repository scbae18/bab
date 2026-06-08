import { style } from '@vanilla-extract/css'
import { colors, radius, spacing, typography } from '../../styles/tokens.css'

export const pageTitle = style({
  ...typography.headingLg,
  color: colors.gray900,
  marginBottom: '4px',
})

export const pageSubtitle = style({
  ...typography.bodyMd,
  color: colors.gray500,
  marginBottom: spacing.sectionGap,
})

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
})

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
})

export const sectionTitle = style({
  ...typography.titleSm,
  color: colors.gray900,
})

export const categoryRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
})

export const tagRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
})

export const suggestions = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  marginTop: '4px',
})

export const suggestionItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 12px',
  borderRadius: radius.sm,
  border: `1px solid ${colors.gray100}`,
  backgroundColor: colors.white,
  cursor: 'pointer',
  transition: 'background-color 0.15s ease',
  ':hover': {
    backgroundColor: colors.primary50,
  },
})

export const suggestionName = style({
  ...typography.bodyMd,
  color: colors.gray900,
})

export const suggestionMeta = style({
  ...typography.labelSm,
  color: colors.gray500,
})

export const peopleRow = style({
  display: 'flex',
  gap: '8px',
})

export const peopleButton = style({
  flex: 1,
  padding: '12px',
  borderRadius: radius.sm,
  border: `1px solid ${colors.gray100}`,
  backgroundColor: colors.white,
  fontSize: typography.bodyMd.fontSize,
  fontWeight: typography.bodyMd.fontWeight,
  color: colors.gray500,
  cursor: 'pointer',
  fontFamily: 'inherit',
  transition: 'all 0.15s ease',
})

export const peopleButtonActive = style({
  backgroundColor: colors.primary50,
  borderColor: colors.primary200,
  color: colors.primary600,
  fontWeight: '600',
})

export const peopleCustomWrap = style({
  marginTop: '8px',
})

export const helperText = style({
  ...typography.labelSm,
  color: colors.gray500,
  marginTop: '4px',
})

export const previewCard = style({
  backgroundColor: colors.primary50,
  borderRadius: radius.md,
  padding: '16px',
  border: `1px solid ${colors.primary100}`,
})

export const previewLabel = style({
  ...typography.labelSm,
  color: colors.primary500,
  marginBottom: '8px',
})

export const previewTitle = style({
  ...typography.headingSm,
  color: colors.gray900,
})

export const previewMeta = style({
  ...typography.bodyMd,
  color: colors.gray500,
  marginTop: '4px',
})

export const stepIndicator = style({
  display: 'flex',
  gap: '16px',
  marginBottom: spacing.sectionGap,
  padding: '12px 0',
  borderBottom: `1px solid ${colors.gray100}`,
})

export const stepLabel = style({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  ...typography.labelSm,
  color: colors.gray500,
  flex: 1,
})

export const stepDot = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '22px',
  height: '22px',
  borderRadius: '50%',
  backgroundColor: colors.gray100,
  color: colors.gray500,
  fontSize: '11px',
  fontWeight: '600',
  flexShrink: 0,
})

export const stepDotActive = style({
  backgroundColor: colors.primary500,
  color: colors.white,
})

export const stepDotDone = style({
  backgroundColor: colors.primary100,
  color: colors.primary600,
})

export const navRow = style({
  display: 'flex',
  gap: '8px',
  marginTop: '8px',
})

export const optionalToggle = style({
  ...typography.bodyMd,
  color: colors.primary600,
  textAlign: 'left',
  padding: '8px 0',
})

export const optionalSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
})
