import type { Post } from '../../data/mockData'
import { formatBudget, formatRelativeTime } from '../../utils/format'
import { Avatar } from '../Avatar/Avatar'
import { Card } from '../Card/Card'
import { CategoryIcon } from '../CategoryIcon/CategoryIcon'
import { Chip } from '../Chip/Chip'
import { Icon } from '../Icon/Icon'
import { Tag } from '../Tag/Tag'
import { staggerDelay } from '../../utils/animation'
import {
  authorName,
  authorRow,
  bottomRow,
  cardInner,
  cardWrapper,
  menuInfo,
  menuName,
  menuRow,
  metaDivider,
  metaItem,
  metaRow,
  popularBadge,
  restaurant,
  tagRow,
  timeAgo,
  topRow,
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
  return (
    <div
      className={cardWrapper}
      style={{ animationDelay: staggerDelay(animationIndex) }}
    >
    <Card onClick={onClick}>
      <div className={cardInner}>
        <div className={topRow}>
          <div className={menuRow}>
            <CategoryIcon category={post.category} />
            <div className={menuInfo}>
              <p className={menuName}>{post.menu}</p>
              <p className={restaurant}>{post.restaurant}</p>
            </div>
          </div>
          <Chip variant={post.status === 'waiting' ? 'waiting' : 'done'}>
            {post.status === 'waiting' ? '모집중' : '마감'}
          </Chip>
        </div>

        <div className={metaRow}>
          <span className={metaItem}>
            <Icon name="mapPin" size={12} />
            {post.distance}
          </span>
          <span className={metaDivider}>·</span>
          <span className={metaItem}>
            {post.date} {post.time}
          </span>
          <span className={metaDivider}>·</span>
          <span className={metaItem}>{formatBudget(post.budget)}</span>
          {!compact && (
            <>
              <span className={metaDivider}>·</span>
              <span className={metaItem}>
                {post.currentApplicants}/{post.maxPeople}명
              </span>
            </>
          )}
        </div>

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
