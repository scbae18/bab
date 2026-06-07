import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Avatar } from '../../components/Avatar/Avatar'
import { Card } from '../../components/Card/Card'
import { CategoryIcon } from '../../components/CategoryIcon/CategoryIcon'
import { Chip } from '../../components/Chip/Chip'
import { EmptyState } from '../../components/EmptyState/EmptyState'
import { Icon } from '../../components/Icon/Icon'
import { TabPills } from '../../components/TabPills/TabPills'
import { useApp } from '../../context/AppContext'
import { formatRelativeTime } from '../../utils/format'
import {
  closeButton,
  list,
  matchCardInner,
  matchFooter,
  matchHeader,
  matchInfo,
  matchMenu,
  matchTime,
  myPostActions,
  profileCard,
  profileInfo,
  profileIntro,
  profileLocation,
  profileName,
  statItem,
  statLabel,
  statsRow,
  statValue,
  tabSection,
} from './MyPage.css'

type MyTab = 'matches' | 'posts'

export function MyPage() {
  const { profile, matches, myPosts, closePost, showToast } = useApp()
  const navigate = useNavigate()
  const [tab, setTab] = useState<MyTab>('matches')

  return (
    <div>
      <div className={profileCard}>
        <Avatar nickname={profile.nickname} size="lg" />
        <div className={profileInfo}>
          <p className={profileName}>{profile.nickname}</p>
          <span className={profileLocation}>
            <Icon name="mapPin" size={14} />
            {profile.neighborhood}
          </span>
          <p className={profileIntro}>{profile.intro}</p>
        </div>
      </div>

      <div className={statsRow}>
        <div className={statItem}>
          <span className={statValue}>{profile.mannerScore}</span>
          <span className={statLabel}>매너 점수</span>
        </div>
        <div className={statItem}>
          <span className={statValue}>{profile.matchCount}</span>
          <span className={statLabel}>매칭 횟수</span>
        </div>
        <div className={statItem}>
          <span className={statValue}>{myPosts.length}</span>
          <span className={statLabel}>올린 글</span>
        </div>
      </div>

      <div className={tabSection}>
        <TabPills
          tabs={[
            { id: 'matches' as const, label: `신청한 매칭 (${matches.length})` },
            { id: 'posts' as const, label: `내가 올린 글 (${myPosts.length})` },
          ]}
          active={tab}
          onChange={setTab}
        />
      </div>

      <div className={list}>
        {tab === 'matches' ? (
          matches.length === 0 ? (
            <EmptyState
              icon={<Icon name="users" size={24} />}
              titleText="아직 신청한 매칭이 없어요"
              descriptionText="마음에 드는 모집글에 같이 먹을래요를 눌러보세요"
            />
          ) : (
            matches.map((match) => (
              <Card
                key={match.id}
                onClick={() => navigate(`/post/${match.postId}`)}
              >
                <div className={matchCardInner}>
                  <div className={matchHeader}>
                    <div className={matchMenu}>
                      <CategoryIcon category={match.post.category} />
                      {match.post.menu}
                    </div>
                    <Chip
                      variant={
                        match.status === 'pending' ? 'pending' : 'confirmed'
                      }
                    >
                      {match.status === 'pending' ? '대기중' : '확정'}
                    </Chip>
                  </div>
                  <p className={matchInfo}>
                    {match.post.restaurant} · {match.post.location} ·{' '}
                    {match.post.date} {match.post.time}
                  </p>
                  <div className={matchFooter}>
                    <span className={matchInfo}>{match.post.nickname}</span>
                    <span className={matchTime}>
                      {formatRelativeTime(match.appliedAt)} 신청
                    </span>
                  </div>
                </div>
              </Card>
            ))
          )
        ) : myPosts.length === 0 ? (
          <EmptyState
            icon={<Icon name="pen" size={24} />}
            titleText="아직 올린 글이 없어요"
            descriptionText="글쓰기 탭에서 첫 모집글을 작성해보세요"
          />
        ) : (
          myPosts.map((post) => (
            <Card key={post.id} onClick={() => navigate(`/post/${post.id}`)}>
              <div className={matchCardInner}>
                <div className={matchHeader}>
                  <div className={matchMenu}>
                    <CategoryIcon category={post.category} />
                    {post.menu}
                  </div>
                  <Chip variant={post.status === 'waiting' ? 'waiting' : 'done'}>
                    {post.status === 'waiting' ? '모집중' : '마감'}
                  </Chip>
                </div>
                <p className={matchInfo}>
                  {post.restaurant} · {post.location} · {post.date} {post.time}
                </p>
                <p className={matchInfo}>
                  신청 {post.currentApplicants}/{post.maxPeople}명
                </p>
                {post.status === 'waiting' && (
                  <div className={myPostActions}>
                    <button
                      type="button"
                      className={closeButton}
                      onClick={(e) => {
                        e.stopPropagation()
                        closePost(post.id)
                        showToast('모집글이 마감됐어요')
                      }}
                    >
                      모집 마감하기
                    </button>
                  </div>
                )}
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
