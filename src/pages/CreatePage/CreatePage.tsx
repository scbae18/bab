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
  suggestionItem,
  suggestionMeta,
  suggestionName,
  suggestions,
  tagRow,
} from './CreatePage.css'

const BUDGET_OPTIONS = [15000, 20000, 25000, 30000, 35000, 40000, 50000]

type PeopleMode = 2 | 3 | 'custom'

export function CreatePage() {
  const { addPost } = useApp()
  const navigate = useNavigate()

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [customCategory, setCustomCategory] = useState('')
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

  const categoryLabel = customCategory.trim() || selectedCategory || ''
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
    setCustomCategory('')
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

  const isValid =
    category !== null &&
    categoryLabel !== '' &&
    menu.trim() !== '' &&
    restaurant.trim() !== '' &&
    location.trim() !== '' &&
    date !== '' &&
    time !== '' &&
    isPeopleValid &&
    maxPeople >= 2

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
    navigate('/')
  }

  return (
    <div>
      <h1 className={pageTitle}>모집글 작성</h1>
      <p className={pageSubtitle}>같이 먹을 밥친구를 찾아보세요</p>

      <form
        className={form}
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <div className={section}>
          <span className={sectionTitle}>메뉴 카테고리</span>
          <div className={categoryRow}>
            {CATEGORIES.map((cat) => (
              <Chip
                key={cat}
                variant={
                  selectedCategory === cat && !customCategory.trim()
                    ? 'categoryActive'
                    : 'category'
                }
                onClick={() => selectCategoryChip(cat)}
              >
                {cat}
              </Chip>
            ))}
          </div>
          <Input
            placeholder="직접 입력 (예) 회, 파스타, 횟집..."
            value={customCategory}
            onChange={(e) => {
              setCustomCategory(e.target.value)
              if (e.target.value.trim()) setSelectedCategory(null)
            }}
          />
          {customCategory.trim() && (
            <span className={helperText}>
              '{customCategory.trim()}' 카테고리로 등록돼요
            </span>
          )}
        </div>

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
              <span className={helperText}>4명 이상 직접 입력해주세요</span>
            </div>
          )}
        </div>

        <div className={section}>
          <span className={sectionTitle}>태그 (선택)</span>
          <div className={tagRow}>
            {CREATE_TAGS.map((tag) => (
              <Chip
                key={tag}
                variant={selectedTags.includes(tag) ? 'categoryActive' : 'category'}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Chip>
            ))}
          </div>
        </div>

        <Textarea
          labelText="한마디 (선택)"
          placeholder="같이 드실 분에게 전하고 싶은 말을 남겨주세요"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        {isValid && (
          <div className={previewCard}>
            <p className={previewLabel}>미리보기</p>
            <p className={previewTitle}>
              {menu} · {restaurant}
            </p>
            <p className={previewMeta}>
              {categoryLabel} · {displayDate} {time} · {location} ·{' '}
              {formatBudget(budget)} · {maxPeople}명
            </p>
          </div>
        )}

        <Button type="submit" size="lg" fullWidth disabled={!isValid}>
          등록하기
        </Button>
      </form>
    </div>
  )
}
