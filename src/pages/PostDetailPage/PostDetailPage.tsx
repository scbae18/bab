import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Avatar } from '../../components/Avatar/Avatar'
import { Button } from '../../components/Button/Button'
import { CategoryIcon } from '../../components/CategoryIcon/CategoryIcon'
import { Icon } from '../../components/Icon/Icon'
import { PostCard } from '../../components/PostCard/PostCard'
import { SectionHeader } from '../../components/SectionHeader/SectionHeader'
import { Tag } from '../../components/Tag/Tag'
import { useApp } from '../../context/AppContext'
import { formatBudget } from '../../utils/format'
import {
  applicantAvatars,
  applicantText,
  applicantsRow,
  backButton,
  footerSpacer,
  guidelineCard,
  guidelineList,
  guidelineTitle,
  hostCard,
  hostInfo,
  hostIntro,
  hostName,
  hostStat,
  hostStats,
  hostStatValue,
  infoBox,
  infoBoxLabel,
  infoBoxValue,
  infoGrid,
  menuTitle,
  minOrderBadge,
  notFound,
  rating,
  restaurantAddress,
  restaurantCard,
  restaurantName,
  restaurantRow,
  shareButton,
  similarList,
  similarSection,
  speechBubble,
  speechBubbleTail,
  speechBubbleText,
  stickyFooter,
  tagRow,
  titleSection,
  topBar,
} from './PostDetailPage.css'

export function PostDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { posts, matches, profile, applyMatch, showToast } = useApp()
  const navigate = useNavigate()

  const post = posts.find((p) => p.id === Number(id))
  const hasApplied = matches.some((m) => m.postId === post?.id)
  const isMyPost = post?.nickname === profile.nickname

  const similarPosts = useMemo(() => {
    if (!post) return []
    return posts
      .filter(
        (p) =>
          p.id !== post.id &&
          p.category === post.category &&
          p.status === 'waiting',
      )
      .slice(0, 2)
  }, [posts, post])

  if (!post) {
    return (
      <div>
        <button className={backButton} onClick={() => navigate('/')}>
          <Icon name="arrowLeft" size={16} />
          돌아가기
        </button>
        <p className={notFound}>모집글을 찾을 수 없어요</p>
      </div>
    )
  }

  const handleShare = () => {
    showToast('링크가 복사됐어요')
  }

  return (
    <div>
      <div className={topBar}>
        <button className={backButton} onClick={() => navigate(-1)}>
          <Icon name="arrowLeft" size={16} />
          돌아가기
        </button>
        <button type="button" className={shareButton} onClick={handleShare}>
          <Icon name="share" size={16} />
        </button>
      </div>

      <div className={titleSection}>
        <h1 className={menuTitle}>
          <CategoryIcon category={post.category} size="lg" />
          {post.menu}
        </h1>
        <div className={restaurantRow}>
          <p className={restaurantName}>{post.restaurant}</p>
          <span className={rating}>
            <Icon name="star" size={14} />
            {post.restaurantRating}
          </span>
        </div>
      </div>

      <div className={restaurantCard}>
        <p className={restaurantAddress}>{post.address}</p>
        <span className={minOrderBadge}>{post.minOrder}</span>
      </div>

      <div className={hostCard}>
        <Avatar nickname={post.nickname} size="lg" />
        <div className={hostInfo}>
          <p className={hostName}>{post.nickname}</p>
          <p className={hostIntro}>{post.author.intro}</p>
          <div className={hostStats}>
            <span className={hostStat}>
              매너 <span className={hostStatValue}>{post.author.mannerScore}</span>
            </span>
            <span className={hostStat}>
              매칭 <span className={hostStatValue}>{post.author.matchCount}회</span>
            </span>
          </div>
        </div>
      </div>

      <div className={infoGrid}>
        <div className={infoBox}>
          <p className={infoBoxLabel}>일시</p>
          <p className={infoBoxValue}>
            {post.date} {post.time}
          </p>
        </div>
        <div className={infoBox}>
          <p className={infoBoxLabel}>예상 비용</p>
          <p className={infoBoxValue}>{formatBudget(post.budget)}</p>
        </div>
        <div className={infoBox}>
          <p className={infoBoxLabel}>모집 인원</p>
          <p className={infoBoxValue}>
            {post.currentApplicants}/{post.maxPeople}명
          </p>
        </div>
        <div className={infoBox}>
          <p className={infoBoxLabel}>거리</p>
          <p className={infoBoxValue}>{post.distance}</p>
        </div>
      </div>

      {post.tags.length > 0 && (
        <div className={tagRow}>
          {post.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      )}

      {post.comment && (
        <div className={speechBubble}>
          <p className={speechBubbleText}>{post.comment}</p>
          <div className={speechBubbleTail} />
        </div>
      )}

      {post.currentApplicants > 0 && (
        <div className={applicantsRow}>
          <div className={applicantAvatars}>
            {Array.from({ length: Math.min(post.currentApplicants, 3) }).map(
              (_, i) => (
                <Avatar key={i} nickname={`신청${i}`} size="sm" />
              ),
            )}
          </div>
          <span className={applicantText}>
            {post.currentApplicants}명이 같이 먹고 싶어해요
          </span>
        </div>
      )}

      <div className={guidelineCard}>
        <p className={guidelineTitle}>
          <Icon name="info" size={16} />
          밥친구 이용 안내
        </p>
        <ul className={guidelineList}>
          <li>첫 만남은 사람 많은 곳에서 만나요</li>
          <li>약속 시간을 꼭 지켜주세요</li>
          <li>비용은 각자 부담 (더치페이) 기본이에요</li>
        </ul>
      </div>

      {similarPosts.length > 0 && (
        <div className={similarSection}>
          <SectionHeader titleText="비슷한 모집글" />
          <div className={similarList}>
            {similarPosts.map((p) => (
              <PostCard
                key={p.id}
                post={p}
                compact
                onClick={() => navigate(`/post/${p.id}`)}
              />
            ))}
          </div>
        </div>
      )}

      <div className={footerSpacer} />

      <div className={stickyFooter}>
        <Button
          size="lg"
          fullWidth
          variant={hasApplied ? 'secondary' : 'primary'}
          disabled={post.status === 'done' || isMyPost}
          onClick={() => applyMatch(post)}
        >
          {isMyPost
            ? '내가 올린 글'
            : hasApplied
              ? '신청 완료'
              : post.status === 'done'
                ? '모집 마감'
                : '같이 먹을래요'}
        </Button>
      </div>
    </div>
  )
}
