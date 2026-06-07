import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Chip } from '../../components/Chip/Chip'
import { Logo } from '../../components/Logo/Logo'
import { Icon } from '../../components/Icon/Icon'
import { PostCard } from '../../components/PostCard/PostCard'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { SectionHeader } from '../../components/SectionHeader/SectionHeader'
import { useApp } from '../../context/AppContext'
import { CATEGORIES } from '../../data/mockData'
import {
  bellBadge,
  bellButton,
  filterRow,
  filterSection,
  filterSectionAnimated,
  header,
  headerRight,
  location,
  popularCard,
  popularScroll,
  postCount,
  postList,
  searchSection,
  sectionBlock,
  sortRow,
  sortSelect,
  statsBanner,
  statsCount,
  statsText,
} from './HomePage.css'

const FILTERS = ['전체', ...CATEGORIES] as const
type Filter = (typeof FILTERS)[number]
type Sort = 'latest' | 'distance' | 'soon'

export function HomePage() {
  const { posts, profile, unreadCount } = useApp()
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState<Filter>('전체')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<Sort>('latest')

  const waitingCount = posts.filter((p) => p.status === 'waiting').length

  const popularPosts = useMemo(
    () => posts.filter((p) => p.isPopular && p.status === 'waiting'),
    [posts],
  )

  const filteredPosts = useMemo(() => {
    let result = [...posts]

    if (activeFilter !== '전체') {
      result = result.filter((p) => p.category === activeFilter)
    }

    if (search.trim()) {
      const q = search.trim().toLowerCase()
      result = result.filter(
        (p) =>
          p.menu.toLowerCase().includes(q) ||
          p.restaurant.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q),
      )
    }

    if (sort === 'distance') {
      result.sort(
        (a, b) =>
          parseFloat(a.distance) - parseFloat(b.distance),
      )
    } else if (sort === 'soon') {
      result.sort((a, b) => a.time.localeCompare(b.time))
    } else {
      result.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      )
    }

    return result
  }, [posts, activeFilter, search, sort])

  return (
    <div>
      <header className={header}>
        <Logo size="sm" />
        <div className={headerRight}>
          <span className={location}>
            <Icon name="mapPin" size={14} />
            {profile.neighborhood}
          </span>
          <button
            type="button"
            className={bellButton}
            onClick={() => navigate('/notifications')}
            aria-label="알림"
          >
            <Icon name="bell" size={18} />
            {unreadCount > 0 && <span className={bellBadge} />}
          </button>
        </div>
      </header>

      <div className={searchSection}>
        <SearchBar value={search} onChange={setSearch} />
      </div>

      <div className={statsBanner}>
        <p className={statsText}>
          <span className={statsCount}>{waitingCount}건</span>의 모집이 진행 중
        </p>
        <span className={statsText}>오늘도 맛있는 한 끼</span>
      </div>

      {popularPosts.length > 0 && (
        <div className={sectionBlock}>
          <SectionHeader titleText="지금 인기" subtitleText="빠르게 마감될 수 있어요" />
          <div className={popularScroll}>
            {popularPosts.map((post, i) => (
              <div key={post.id} className={popularCard}>
                <PostCard
                  post={post}
                  compact
                  animationIndex={i}
                  onClick={() => navigate(`/post/${post.id}`)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className={`${filterSection} ${filterSectionAnimated}`}>
        <SectionHeader titleText="모집 둘러보기" />
        <div className={filterRow}>
          {FILTERS.map((filter) => (
            <Chip
              key={filter}
              variant={activeFilter === filter ? 'filterActive' : 'filter'}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Chip>
          ))}
        </div>
        <div className={sortRow}>
          <span className={postCount}>{filteredPosts.length}개의 모집글</span>
          <select
            className={sortSelect}
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
          >
            <option value="latest">최신순</option>
            <option value="distance">가까운 순</option>
            <option value="soon">곧 만나요</option>
          </select>
        </div>
      </div>

      <div className={postList}>
        {filteredPosts.length === 0 ? (
          <p className={postCount} style={{ textAlign: 'center', padding: '40px 0' }}>
            조건에 맞는 모집글이 없어요
          </p>
        ) : (
          filteredPosts.map((post, i) => (
            <PostCard
              key={post.id}
              post={post}
              animationIndex={i}
              onClick={() => navigate(`/post/${post.id}`)}
            />
          ))
        )}
      </div>
    </div>
  )
}
