import type { Post } from '../../data/mockData'
import { formatBudget, formatRelativeTime } from '../../utils/format'
import { getCategoryTheme } from '../../utils/categoryTheme'
import { Avatar } from '../Avatar/Avatar'
import { Card } from '../Card/Card'
import { Chip } from '../Chip/Chip'
import { Icon } from '../Icon/Icon'
import { Tag } from '../Tag/Tag'
import { staggerDelay } from '../../utils/animation'
import {
  authorName,
  authorRow,
  bottomRow,
  cardBody,
  cardWrapper,
  cover,
  coverCompact,
  coverEmoji,
  coverInfo,
  coverMenu,
  coverRestaurant,
  popularBadge,
  progressFill,
  progressLabel,
  progressTrack,
  statusChip,
  tagRow,
  timeAgo,
  metaPill,
  metaRow,
} from './PostCard.css'

interface PostCardProps {
  post: Post
  onClick: () => void
  compact?: boolean
  animationIndex?: number
}

export function PostCard({
  post,
  onClick,
  compact = false,
  animationIndex = 0,
}: PostCardProps) {
  const theme = getCategoryTheme(post.category)
  const fillPercent = Math.min(
    100,
    Math.round((post.currentApplicants / post.maxPeople) * 100),
  )

  return (
    <div
      className={cardWrapper}
      style={{ animationDelay: staggerDelay(animationIndex) }}
    >
      <Card onClick={onClick} flush>
        <div
          className={`${cover}${compact ? ` ${coverCompact}` : ''}`}
          style={{ background: theme.gradient }}
        >
          <span className={coverEmoji} aria-hidden>
            {theme.emoji}
          </span>
          <span className={statusChip}>
            <Chip variant="onDark">
              {post.status === 'waiting' ? '모집중' : '마감'}
            </Chip>
          </span>
          <div className={coverInfo}>
            <p className={coverMenu}>{post.menu}</p>
            <p className={coverRestaurant}>{post.restaurant}</p>
          </div>
        </div>

        <div className={cardBody}>
          <div className={metaRow}>
            <span className={metaPill}>
              <Icon name="mapPin" size={12} />
              {post.distance}
            </span>
            <span className={metaPill}>
              <Icon name="clock" size={12} />
              {post.date} {post.time}
            </span>
            <span className={metaPill}>
              <Icon name="wallet" size={12} />
              {formatBudget(post.budget)}
            </span>
          </div>

          {!compact && post.maxPeople > 0 && (
            <div>
              <div className={progressLabel}>
                <span>
                  {post.currentApplicants}/{post.maxPeople}명 신청
                </span>
                <span>{fillPercent}%</span>
              </div>
              <div className={progressTrack}>
                <div
                  className={progressFill}
                  style={{ width: `${fillPercent}%` }}
                />
              </div>
            </div>
          )}

          {!compact && post.tags.length > 0 && (
            <div className={tagRow}>
              {post.tags.slice(0, 2).map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          )}

          <div className={bottomRow}>
            <div className={authorRow}>
              <Avatar nickname={post.nickname} size="sm" />
              <span className={authorName}>{post.nickname}</span>
              {post.isPopular && (
                <span className={popularBadge}>
                  <Icon name="flame" size={12} />
                  인기
                </span>
              )}
            </div>
            <span className={timeAgo}>{formatRelativeTime(post.createdAt)}</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
