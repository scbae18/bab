import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Avatar } from '../../components/Avatar/Avatar'
import { Button } from '../../components/Button/Button'
import { CategoryIcon } from '../../components/CategoryIcon/CategoryIcon'
import { Icon } from '../../components/Icon/Icon'
import { PostCard } from '../../components/PostCard/PostCard'
import { Tag } from '../../components/Tag/Tag'
import { useApp } from '../../context/AppContext'
import { staggerDelay } from '../../utils/animation'
import { formatBudget } from '../../utils/format'
import {
  animateSection,
  applicantAvatars,
  applicantText,
  applicantsRow,
  backButton,
  footerSpacer,
  guidelineCard,
  guidelineCardCollapsed,
  guidelineList,
  guidelineTitle,
  guidelineToggle,
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
  similarList,
  similarSection,
  speechBubble,
  speechBubbleTail,
  speechBubbleText,
  stickyFooter,
  stickyFooterActions,
  tagRow,
  titleSection,
  topBar,
} from './PostDetailPage.css'

export function PostDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { posts, matches, profile, applyMatch, closePost, showToast } = useApp()
  const navigate = useNavigate()
  const [guidelineOpen, setGuidelineOpen] = useState(false)

  const post = posts.find((p) => p.id === Number(id))
  const hasApplied = matches.some((m) => m.postId === post?.id)
  const isMyPost = post?.nickname === profile.nickname

  const similarPost = useMemo(() => {
    if (!post) return null
    return (
      posts.find(
        (p) =>
          p.id !== post.id &&
          p.category === post.category &&
          p.status === 'waiting',
      ) ?? null
    )
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

  const handleClosePost = () => {
    closePost(post.id)
    showToast('모집글이 마감됐어요')
    navigate('/my')
  }

  return (
    <div>
      <div className={topBar}>
        <button className={backButton} onClick={() => navigate(-1)}>
          <Icon name="arrowLeft" size={16} />
          돌아가기
        </button>
      </div>

      <div
        className={`${titleSection} ${animateSection}`}
        style={{ animationDelay: staggerDelay(0) }}
      >
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

      <div
        className={`${restaurantCard} ${animateSection}`}
        style={{ animationDelay: staggerDelay(1) }}
      >
        <p className={restaurantAddress}>{post.address}</p>
        <span className={minOrderBadge}>{post.minOrder}</span>
      </div>

      <div
        className={`${hostCard} ${animateSection}`}
        style={{ animationDelay: staggerDelay(2) }}
      >
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

      <div
        className={`${infoGrid} ${animateSection}`}
        style={{ animationDelay: staggerDelay(3) }}
      >
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
        <div
          className={`${speechBubble} ${animateSection}`}
          style={{ animationDelay: staggerDelay(4) }}
        >
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

      <div className={guidelineCardCollapsed}>
        <button
          type="button"
          className={guidelineToggle}
          onClick={() => setGuidelineOpen((v) => !v)}
          aria-expanded={guidelineOpen}
        >
          <span className={guidelineTitle}>
            <Icon name="info" size={16} />
            안전하게 이용하기
          </span>
          <Icon name="chevronRight" size={16} />
        </button>
        {guidelineOpen && (
          <div className={guidelineCard}>
            <ul className={guidelineList}>
              <li>첫 만남은 사람 많은 곳에서 만나요</li>
              <li>약속 시간을 꼭 지켜주세요</li>
              <li>비용은 각자 부담 (더치페이) 기본이에요</li>
            </ul>
          </div>
        )}
      </div>

      {similarPost && (
        <div className={similarSection}>
          <p className={guidelineTitle}>비슷한 모집글</p>
          <div className={similarList}>
            <PostCard
              post={similarPost}
              compact
              onClick={() => navigate(`/post/${similarPost.id}`)}
            />
          </div>
        </div>
      )}

      <div className={footerSpacer} />

      <div className={stickyFooter}>
        {isMyPost && post.status === 'waiting' ? (
          <div className={stickyFooterActions}>
            <Button
              size="lg"
              variant="secondary"
              fullWidth
              onClick={handleClosePost}
            >
              모집 마감
            </Button>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  )
}
