import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import { Chip } from '../../components/Chip/Chip'
import { Input } from '../../components/Input/Input'
import { useApp } from '../../context/AppContext'
import { generateNickname } from '../../data/mockData'
import { NEIGHBORHOODS } from '../../data/restaurants'
import {
  description,
  fieldLabel,
  formSection,
  heroSection,
  neighborhoodGrid,
  page,
  stepLabel,
  title,
} from './OnboardingPage.css'

export function OnboardingPage() {
  const { completeOnboarding, onboardingComplete } = useApp()
  const navigate = useNavigate()

  useEffect(() => {
    if (onboardingComplete) navigate('/', { replace: true })
  }, [onboardingComplete, navigate])
  const [nickname, setNickname] = useState(generateNickname())
  const [neighborhood, setNeighborhood] = useState<string | null>('영통구')

  const handleStart = () => {
    if (!neighborhood) return
    completeOnboarding(nickname.trim() || generateNickname(), neighborhood)
    navigate('/', { replace: true })
  }

  return (
    <div className={page}>
      <div className={heroSection}>
        <h1 className={title}>밥친구</h1>
        <p className={description}>
          혼자 가기 애매한 식당,
          <br />
          같이 먹어줄 사람을 찾아보세요
        </p>
      </div>

      <div className={formSection}>
        <div>
          <p className={stepLabel}>STEP 1</p>
          <Input
            labelText="닉네임"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="어떻게 불러드릴까요?"
          />
        </div>

        <div>
          <p className={stepLabel}>STEP 2</p>
          <span className={fieldLabel}>주로 활동하는 동네</span>
          <div className={neighborhoodGrid}>
            {NEIGHBORHOODS.map((n) => (
              <Chip
                key={n}
                variant={neighborhood === n ? 'categoryActive' : 'category'}
                onClick={() => setNeighborhood(n)}
              >
                {n}
              </Chip>
            ))}
          </div>
        </div>

        <Button size="lg" fullWidth disabled={!neighborhood} onClick={handleStart}>
          시작하기
        </Button>
      </div>
    </div>
  )
}
