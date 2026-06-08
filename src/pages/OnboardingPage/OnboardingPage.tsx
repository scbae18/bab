import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import { Chip } from '../../components/Chip/Chip'
import { Icon } from '../../components/Icon/Icon'
import { Input } from '../../components/Input/Input'
import { useApp } from '../../context/AppContext'
import { generateNickname } from '../../data/mockData'
import { NEIGHBORHOODS } from '../../data/restaurants'
import {
  description,
  featureItem,
  featureList,
  featureText,
  fieldLabel,
  formSection,
  heroSection,
  neighborhoodGrid,
  page,
  shuffleButton,
  title,
} from './OnboardingPage.css'

const FEATURES = [
  { icon: 'users' as const, text: '2인 이상 주문이 필요한 식당도 부담 없이' },
  { icon: 'mapPin' as const, text: '내 동네 근처 밥친구를 빠르게 찾기' },
  { icon: 'check' as const, text: '매너 점수로 믿을 수 있는 만남' },
]

export function OnboardingPage() {
  const { completeOnboarding, onboardingComplete } = useApp()
  const navigate = useNavigate()

  useEffect(() => {
    if (onboardingComplete) navigate('/', { replace: true })
  }, [onboardingComplete, navigate])

  const [nickname, setNickname] = useState(generateNickname())
  const [neighborhood, setNeighborhood] = useState<string | null>('영통구')

  const handleShuffleNickname = () => {
    setNickname(generateNickname())
  }

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

        <ul className={featureList}>
          {FEATURES.map(({ icon, text }) => (
            <li key={text} className={featureItem}>
              <Icon name={icon} size={18} />
              <span className={featureText}>{text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={formSection}>
        <div>
          <span className={fieldLabel}>닉네임</span>
          <Input
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="어떻게 불러드릴까요?"
          />
          <button
            type="button"
            className={shuffleButton}
            onClick={handleShuffleNickname}
          >
            다른 닉네임 추천받기
          </button>
        </div>

        <div>
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
