import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { EmptyState } from '../../components/EmptyState/EmptyState'
import { Icon } from '../../components/Icon/Icon'
import { Logo } from '../../components/Logo/Logo'
import { PostCard } from '../../components/PostCard/PostCard'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { SectionHeader } from '../../components/SectionHeader/SectionHeader'
import { TabPills } from '../../components/TabPills/TabPills'
import { useApp } from '../../context/AppContext'
import { CATEGORIES } from '../../data/mockData'
import { getMealContext, getTimeGreeting } from '../../utils/greeting'
import {
  bellBadge,
  bellButton,
  filterSection,
  filterSectionAnimated,
  greeting,
  greetingName,
  header,
  headerRight,
  location,
  popularCard,
  statsIcon,
  popularScroll,
  postCount,
  postList,
  searchSection,
  sectionBlock,
  sortSection,
  statsBanner,
  statsCount,
  statsText,
} from './HomePage.css'

const FILTERS = ['전체', ...CATEGORIES] as const
type Filter = (typeof FILTERS)[number]
type Sort = 'latest' | 'distance'

export function HomePage() {
  const { posts, profile, unreadCount } = useApp()
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState<Filter>('전체')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<Sort>('latest')

  const waitingPosts = useMemo(
    () => posts.filter((p) => p.status === 'waiting'),
    [posts],
  )

  const waitingCount = waitingPosts.length

  const popularPosts = useMemo(
    () =>
      waitingPosts
        .filter((p) => p.isPopular)
        .sort((a, b) => b.currentApplicants - a.currentApplicants)
        .slice(0, 3),
    [waitingPosts],
  )

  const popularIds = useMemo(
    () => new Set(popularPosts.map((p) => p.id)),
    [popularPosts],
  )

  const filteredPosts = useMemo(() => {
    let result = waitingPosts.filter((p) => !popularIds.has(p.id))

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
        (a, b) => parseFloat(a.distance) - parseFloat(b.distance),
      )
    } else {
      result.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      )
    }

    return result
  }, [waitingPosts, popularIds, activeFilter, search, sort])

  const showPopular =
    popularPosts.length > 0 && !search.trim() && activeFilter === '전체'

  const displayCount = showPopular
    ? waitingCount
    : filteredPosts.length

  return (
    <div>
      <header className={header}>
        <div>
          <p className={greeting}>
            {getTimeGreeting()}
            <span className={greetingName}>{profile.nickname}님</span>
          </p>
          <Logo />
        </div>
        <div className={headerRight}>
          <span className={location}>
            <Icon name="mapPin" size={14} />
            {profile.neighborhood}
          </span>
          <button
            type="button"
            className={bellButton}
            onClick={() => navigate('/notifications')}
            aria-label={`알림${unreadCount > 0 ? ` ${unreadCount}개` : ''}`}
          >
            <Icon name="bell" size={18} />
            {unreadCount > 0 && <span className={bellBadge} />}
          </button>
        </div>
      </header>

      <div className={searchSection}>
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="메뉴, 식당, 동네 검색"
        />
      </div>

      <div className={statsBanner}>
        <span className={statsIcon} aria-hidden>
          🍚
        </span>
        <p className={statsText}>
          지금 <span className={statsCount}>{waitingCount}건</span>의{' '}
          {getMealContext()}이 열려 있어요
        </p>
      </div>

      {showPopular && (
        <div className={sectionBlock}>
          <SectionHeader titleText="지금 인기" subtitleText="신청이 빠르게 차는 글이에요" />
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
        <TabPills
          tabs={FILTERS.map((f) => ({ id: f, label: f }))}
          active={activeFilter}
          onChange={setActiveFilter}
          scrollable
        />
        <div className={sortSection}>
          <span className={postCount}>{displayCount}개의 모집글</span>
          <TabPills
            tabs={[
              { id: 'latest' as const, label: '최신순' },
              { id: 'distance' as const, label: '가까운 순' },
            ]}
            active={sort}
            onChange={setSort}
            compact
          />
        </div>
      </div>

      <div className={postList}>
        {filteredPosts.length === 0 && !showPopular ? (
          <EmptyState
            icon={<Icon name="search" size={24} />}
            titleText="조건에 맞는 모집글이 없어요"
            descriptionText="필터를 바꾸거나 직접 모집글을 올려보세요"
          />
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
