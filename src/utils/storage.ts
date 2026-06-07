const ONBOARDING_KEY = 'babchingu_onboarding'
const PROFILE_KEY = 'babchingu_profile'

export interface StoredProfile {
  nickname: string
  neighborhood: string
}

export function getOnboardingComplete(): boolean {
  return localStorage.getItem(ONBOARDING_KEY) === 'true'
}

export function setOnboardingComplete(): void {
  localStorage.setItem(ONBOARDING_KEY, 'true')
}

export function getStoredProfile(): StoredProfile | null {
  const raw = localStorage.getItem(PROFILE_KEY)
  if (!raw) return null
  try {
    return JSON.parse(raw) as StoredProfile
  } catch {
    return null
  }
}

export function saveProfile(profile: StoredProfile): void {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile))
}
