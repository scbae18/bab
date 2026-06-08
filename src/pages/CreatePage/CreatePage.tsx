import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import { Chip } from '../../components/Chip/Chip'
import { Input, Textarea } from '../../components/Input/Input'
import { useApp } from '../../context/AppContext'
import {
  CREATE_TAGS,
  CATEGORIES,
  resolveCategory,
  type Category,
} from '../../data/mockData'
import { RESTAURANT_SUGGESTIONS } from '../../data/restaurants'
import { formatBudget, formatMeetDate, todayISO } from '../../utils/format'
import {
  categoryRow,
  form,
  helperText,
  navRow,
  optionalSection,
  optionalToggle,
  pageSubtitle,
  pageTitle,
  peopleButton,
  peopleButtonActive,
  peopleCustomWrap,
  peopleRow,
  previewCard,
  previewLabel,
  previewMeta,
  previewTitle,
  section,
  sectionTitle,
  stepDot,
  stepDotActive,
  stepDotDone,
  stepIndicator,
  stepLabel,
  suggestionItem,
  suggestionMeta,
  suggestionName,
  suggestions,
  tagRow,
} from './CreatePage.css'

const BUDGET_OPTIONS = [20000, 30000, 40000, 50000]
const STEPS = ['식당 선택', '일정·인원', '마무리'] as const

type PeopleMode = 2 | 3 | 'custom'

export function CreatePage() {
  const { addPost, showToast } = useApp()
  const navigate = useNavigate()

  const [step, setStep] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [menu, setMenu] = useState('')
  const [restaurant, setRestaurant] = useState('')
  const [location, setLocation] = useState('')
  const [address, setAddress] = useState('')
  const [minOrder, setMinOrder] = useState('')
  const [date, setDate] = useState(todayISO)
  const [time, setTime] = useState('')
  const [budget, setBudget] = useState(30000)
  const [peopleMode, setPeopleMode] = useState<PeopleMode>(2)
  const [customPeople, setCustomPeople] = useState('4')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [comment, setComment] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [showOptional, setShowOptional] = useState(false)

  const categoryLabel = selectedCategory ?? ''
  const category = categoryLabel ? resolveCategory(categoryLabel) : null
  const displayDate = formatMeetDate(date)

  const maxPeople = useMemo(() => {
    if (peopleMode === 'custom') {
      return parseInt(customPeople, 10) || 0
    }
    return peopleMode
  }, [peopleMode, customPeople])

  const isPeopleValid =
    peopleMode !== 'custom' || (maxPeople >= 4 && maxPeople <= 30)

  const restaurantSuggestions = useMemo(() => {
    if (!restaurant.trim()) return []
    return RESTAURANT_SUGGESTIONS.filter((r) =>
      r.name.toLowerCase().includes(restaurant.toLowerCase()),
    ).slice(0, 3)
  }, [restaurant])

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    )
  }

  const selectCategoryChip = (cat: Category) => {
    setSelectedCategory(cat)
  }

  const selectRestaurant = (name: string) => {
    const found = RESTAURANT_SUGGESTIONS.find((r) => r.name === name)
    if (found) {
      setRestaurant(found.name)
      setLocation(found.location)
      setAddress(found.address)
      setMinOrder(found.minOrder)
      setBudget(found.avgBudget)
      selectCategoryChip(found.category as Category)
      if (!menu) setMenu(found.category === '고기' ? '삼겹살' : found.category)
    }
    setShowSuggestions(false)
  }

  const step1Valid =
    category !== null &&
    menu.trim() !== '' &&
    restaurant.trim() !== '' &&
    location.trim() !== ''

  const step2Valid =
    date !== '' && time !== '' && isPeopleValid && maxPeople >= 2

  const isValid = step1Valid && step2Valid

  const handleSubmit = () => {
    if (!isValid || category === null) return

    const rating =
      RESTAURANT_SUGGESTIONS.find((r) => r.name === restaurant)?.rating ?? 4.0

    addPost({
      category,
      categoryLabel,
      menu: menu.trim(),
      restaurant: restaurant.trim(),
      location: location.trim(),
      address: address.trim() || `${location} 일대`,
      date: displayDate,
      time,
      budget,
      maxPeople,
      minOrder: minOrder.trim() || '2인 이상 주문',
      tags: selectedTags,
      comment: comment.trim() || undefined,
      restaurantRating: rating,
    })
    showToast('모집글이 등록됐어요')
    navigate('/')
  }

  return (
    <div>
      <h1 className={pageTitle}>모집글 작성</h1>
      <p className={pageSubtitle}>
        {step === 0 && '어디서 무엇을 먹을지 알려주세요'}
        {step === 1 && '언제, 몇 명이서 만날지 정해요'}
        {step === 2 && '마지막으로 확인하고 등록해요'}
      </p>

      <div className={stepIndicator}>
        {STEPS.map((label, i) => (
          <div key={label} className={stepLabel}>
            <span
              className={`${stepDot}${
                i < step
                  ? ` ${stepDotDone}`
                  : i === step
                    ? ` ${stepDotActive}`
                    : ''
              }`}
            >
              {i < step ? '✓' : i + 1}
            </span>
            {label}
          </div>
        ))}
      </div>

      <form
        className={form}
        onSubmit={(e) => {
          e.preventDefault()
          if (step < 2) {
            if (step === 0 && step1Valid) setStep(1)
            else if (step === 1 && step2Valid) setStep(2)
          } else {
            handleSubmit()
          }
        }}
      >
        {step === 0 && (
          <>
            <Input
              labelText="식당 이름"
              placeholder="가고 싶은 식당을 검색해보세요"
              value={restaurant}
              onChange={(e) => {
                setRestaurant(e.target.value)
                setShowSuggestions(true)
              }}
              onFocus={() => setShowSuggestions(true)}
            />
            {showSuggestions && restaurantSuggestions.length > 0 && (
              <div className={suggestions}>
                {restaurantSuggestions.map((r) => (
                  <button
                    key={r.name}
                    type="button"
                    className={suggestionItem}
                    onClick={() => selectRestaurant(r.name)}
                  >
                    <div>
                      <p className={suggestionName}>{r.name}</p>
                      <p className={suggestionMeta}>
                        {r.location} · {formatBudget(r.avgBudget)} · {r.rating}점
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            )}

            <Input
              labelText="먹고 싶은 메뉴"
              placeholder="예) 삼겹살, 곱창..."
              value={menu}
              onChange={(e) => setMenu(e.target.value)}
            />

            <Input
              labelText="동네/위치"
              placeholder="예) 영통, 망포동..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            {!selectedCategory && (
              <div className={section}>
                <span className={sectionTitle}>메뉴 종류</span>
                <div className={categoryRow}>
                  {CATEGORIES.map((cat) => (
                    <Chip
                      key={cat}
                      variant="category"
                      onClick={() => selectCategoryChip(cat)}
                    >
                      {cat}
                    </Chip>
                  ))}
                </div>
              </div>
            )}
            {selectedCategory && (
              <span className={helperText}>
                {selectedCategory} · 식당 정보에서 자동 선택됐어요
              </span>
            )}
          </>
        )}

        {step === 1 && (
          <>
            <div className={section}>
              <span className={sectionTitle}>언제 만날까요?</span>
              <Input
                labelText="날짜"
                type="date"
                value={date}
                min={todayISO()}
                onChange={(e) => setDate(e.target.value)}
              />
              <Input
                labelText="시간"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>

            <div className={section}>
              <span className={sectionTitle}>1인 예상 비용</span>
              <div className={categoryRow}>
                {BUDGET_OPTIONS.map((b) => (
                  <Chip
                    key={b}
                    variant={budget === b ? 'categoryActive' : 'category'}
                    onClick={() => setBudget(b)}
                  >
                    {formatBudget(b)}
                  </Chip>
                ))}
              </div>
            </div>

            <div className={section}>
              <span className={sectionTitle}>몇 명이서 갈까요?</span>
              <div className={peopleRow}>
                {([2, 3] as const).map((n) => (
                  <button
                    key={n}
                    type="button"
                    className={`${peopleButton}${peopleMode === n ? ` ${peopleButtonActive}` : ''}`}
                    onClick={() => setPeopleMode(n)}
                  >
                    {n}명
                  </button>
                ))}
                <button
                  type="button"
                  className={`${peopleButton}${peopleMode === 'custom' ? ` ${peopleButtonActive}` : ''}`}
                  onClick={() => setPeopleMode('custom')}
                >
                  4명 이상
                </button>
              </div>
              {peopleMode === 'custom' && (
                <div className={peopleCustomWrap}>
                  <Input
                    labelText="인원 수"
                    type="number"
                    min={4}
                    max={30}
                    placeholder="4"
                    value={customPeople}
                    onChange={(e) => setCustomPeople(e.target.value)}
                  />
                </div>
              )}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className={previewCard}>
              <p className={previewLabel}>등록 미리보기</p>
              <p className={previewTitle}>
                {menu} · {restaurant}
              </p>
              <p className={previewMeta}>
                {categoryLabel} · {displayDate} {time} · {location} ·{' '}
                {formatBudget(budget)} · {maxPeople}명
              </p>
            </div>

            <button
              type="button"
              className={optionalToggle}
              onClick={() => setShowOptional((v) => !v)}
            >
              {showOptional ? '추가 옵션 접기' : '태그·한마디 추가 (선택)'}
            </button>

            {showOptional && (
              <div className={optionalSection}>
                <div className={section}>
                  <span className={sectionTitle}>태그</span>
                  <div className={tagRow}>
                    {CREATE_TAGS.map((tag) => (
                      <Chip
                        key={tag}
                        variant={
                          selectedTags.includes(tag) ? 'categoryActive' : 'category'
                        }
                        onClick={() => toggleTag(tag)}
                      >
                        {tag}
                      </Chip>
                    ))}
                  </div>
                </div>

                <Textarea
                  labelText="한마디"
                  placeholder="같이 드실 분에게 전하고 싶은 말을 남겨주세요"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
            )}
          </>
        )}

        <div className={navRow}>
          {step > 0 && (
            <Button
              type="button"
              variant="secondary"
              size="lg"
              onClick={() => setStep((s) => s - 1)}
            >
              이전
            </Button>
          )}
          <Button
            type="submit"
            size="lg"
            fullWidth
            disabled={
              step === 0 ? !step1Valid : step === 1 ? !step2Valid : !isValid
            }
          >
            {step < 2 ? '다음' : '등록하기'}
          </Button>
        </div>
      </form>
    </div>
  )
}
