import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import { Chip } from '../../components/Chip/Chip'
import { Input, Textarea } from '../../components/Input/Input'
import { useApp } from '../../context/AppContext'
import { CREATE_TAGS, CATEGORIES, type Category } from '../../data/mockData'
import { RESTAURANT_SUGGESTIONS } from '../../data/restaurants'
import { formatBudget } from '../../utils/format'
import {
  categoryRow,
  form,
  pageSubtitle,
  pageTitle,
  peopleButton,
  peopleButtonActive,
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

const DATE_OPTIONS = [
  { value: '오늘', label: '오늘' },
  { value: '내일', label: '내일' },
  { value: '모레', label: '모레' },
]

const BUDGET_OPTIONS = [15000, 20000, 25000, 30000, 35000, 40000, 50000]

export function CreatePage() {
  const { addPost } = useApp()
  const navigate = useNavigate()

  const [category, setCategory] = useState<Category | null>(null)
  const [menu, setMenu] = useState('')
  const [restaurant, setRestaurant] = useState('')
  const [location, setLocation] = useState('')
  const [address, setAddress] = useState('')
  const [minOrder, setMinOrder] = useState('')
  const [date, setDate] = useState('오늘')
  const [time, setTime] = useState('')
  const [budget, setBudget] = useState(30000)
  const [maxPeople, setMaxPeople] = useState(2)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [comment, setComment] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)

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

  const selectRestaurant = (name: string) => {
    const found = RESTAURANT_SUGGESTIONS.find((r) => r.name === name)
    if (found) {
      setRestaurant(found.name)
      setLocation(found.location)
      setAddress(found.address)
      setMinOrder(found.minOrder)
      setBudget(found.avgBudget)
      setCategory(found.category as Category)
      if (!menu) setMenu(found.category === '고기' ? '삼겹살' : found.category)
    }
    setShowSuggestions(false)
  }

  const isValid =
    category !== null &&
    menu.trim() !== '' &&
    restaurant.trim() !== '' &&
    location.trim() !== '' &&
    time !== ''

  const handleSubmit = () => {
    if (!isValid || category === null) return

    const rating =
      RESTAURANT_SUGGESTIONS.find((r) => r.name === restaurant)?.rating ?? 4.0

    addPost({
      category,
      menu: menu.trim(),
      restaurant: restaurant.trim(),
      location: location.trim(),
      address: address.trim() || `${location} 일대`,
      date,
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
                variant={category === cat ? 'categoryActive' : 'category'}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </Chip>
            ))}
          </div>
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
          <div className={categoryRow}>
            {DATE_OPTIONS.map((d) => (
              <Chip
                key={d.value}
                variant={date === d.value ? 'categoryActive' : 'category'}
                onClick={() => setDate(d.value)}
              >
                {d.label}
              </Chip>
            ))}
          </div>
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
            {[2, 3].map((n) => (
              <button
                key={n}
                type="button"
                className={`${peopleButton}${maxPeople === n ? ` ${peopleButtonActive}` : ''}`}
                onClick={() => setMaxPeople(n)}
              >
                {n}명
              </button>
            ))}
          </div>
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
              {date} {time} · {location} · {formatBudget(budget)} · {maxPeople}명
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
