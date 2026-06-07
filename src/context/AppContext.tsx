import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  generateNickname,
  INITIAL_MATCHES,
  INITIAL_NOTIFICATIONS,
  INITIAL_POSTS,
  type Category,
  type Match,
  type Notification,
  type Post,
  type UserProfile,
} from '../data/mockData'
import {
  getOnboardingComplete,
  getStoredProfile,
  saveProfile,
  setOnboardingComplete,
} from '../utils/storage'

interface CreatePostInput {
  category: Category
  menu: string
  restaurant: string
  location: string
  address: string
  date: string
  time: string
  budget: number
  maxPeople: number
  minOrder: string
  tags: string[]
  comment?: string
  restaurantRating?: number
}

interface AppContextValue {
  posts: Post[]
  matches: Match[]
  notifications: Notification[]
  profile: UserProfile
  onboardingComplete: boolean
  toastMessage: string | null
  unreadCount: number
  myPosts: Post[]
  completeOnboarding: (nickname: string, neighborhood: string) => void
  addPost: (input: CreatePostInput) => void
  applyMatch: (post: Post) => void
  closePost: (postId: number) => void
  markNotificationRead: (id: number) => void
  markAllNotificationsRead: () => void
  showToast: (message: string) => void
  hideToast: () => void
}

const AppContext = createContext<AppContextValue | null>(null)

function buildProfile(nickname: string, neighborhood: string): UserProfile {
  return {
    nickname,
    neighborhood,
    mannerScore: 4.9,
    matchCount: 2,
    postCount: 0,
    intro: '혼밥은 이제 그만, 밥친구와 함께!',
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const stored = getStoredProfile()
  const [onboardingComplete, setOnboardingCompleteState] = useState(
    getOnboardingComplete(),
  )
  const [profile, setProfile] = useState<UserProfile>(() =>
    stored
      ? buildProfile(stored.nickname, stored.neighborhood)
      : buildProfile(generateNickname(), '영통구'),
  )

  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS)
  const [matches, setMatches] = useState<Match[]>(INITIAL_MATCHES)
  const [notifications, setNotifications] =
    useState<Notification[]>(INITIAL_NOTIFICATIONS)
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [nextPostId, setNextPostId] = useState(9)
  const [nextMatchId, setNextMatchId] = useState(3)
  const [nextNotifId, setNextNotifId] = useState(5)

  const showToast = useCallback((message: string) => {
    setToastMessage(message)
  }, [])

  const hideToast = useCallback(() => {
    setToastMessage(null)
  }, [])

  const completeOnboarding = useCallback(
    (nickname: string, neighborhood: string) => {
      const newProfile = buildProfile(nickname, neighborhood)
      setProfile(newProfile)
      saveProfile({ nickname, neighborhood })
      setOnboardingComplete()
      setOnboardingCompleteState(true)
    },
    [],
  )

  const addPost = useCallback(
    (input: CreatePostInput) => {
      const now = new Date().toISOString()
      const newPost: Post = {
        id: nextPostId,
        category: input.category,
        menu: input.menu,
        restaurant: input.restaurant,
        location: input.location,
        address: input.address,
        distance: '0.3km',
        date: input.date,
        time: input.time,
        budget: input.budget,
        maxPeople: input.maxPeople,
        currentApplicants: 0,
        minOrder: input.minOrder,
        tags: input.tags,
        comment: input.comment ?? '',
        nickname: profile.nickname,
        author: {
          nickname: profile.nickname,
          mannerScore: profile.mannerScore,
          matchCount: profile.matchCount,
          intro: profile.intro,
        },
        restaurantRating: input.restaurantRating ?? 4.0,
        status: 'waiting',
        createdAt: now,
      }
      setPosts((prev) => [newPost, ...prev])
      setProfile((p) => ({ ...p, postCount: p.postCount + 1 }))
      setNextPostId((id) => id + 1)
    },
    [profile, nextPostId],
  )

  const applyMatch = useCallback(
    (post: Post) => {
      if (post.nickname === profile.nickname) {
        showToast('내가 올린 글에는 신청할 수 없어요')
        return
      }
      const alreadyApplied = matches.some((m) => m.postId === post.id)
      if (alreadyApplied) {
        showToast('이미 신청한 매칭이에요')
        return
      }
      if (post.status === 'done') {
        showToast('이미 마감된 모집글이에요')
        return
      }

      const now = new Date().toISOString()
      const newMatch: Match = {
        id: nextMatchId,
        postId: post.id,
        post,
        status: 'pending',
        appliedAt: now,
      }
      setMatches((prev) => [newMatch, ...prev])
      setPosts((prev) =>
        prev.map((p) =>
          p.id === post.id
            ? { ...p, currentApplicants: p.currentApplicants + 1 }
            : p,
        ),
      )
      setNotifications((prev) => [
        {
          id: nextNotifId,
          type: 'apply',
          title: '매칭 신청 완료',
          message: `${post.nickname}님의 ${post.menu} 모집에 신청했어요.`,
          time: now,
          read: false,
          postId: post.id,
        },
        ...prev,
      ])
      setNextMatchId((id) => id + 1)
      setNextNotifId((id) => id + 1)
      showToast('매칭 신청 완료! 연락을 기다려봐요')
    },
    [matches, profile.nickname, nextMatchId, nextNotifId, showToast],
  )

  const closePost = useCallback((postId: number) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === postId ? { ...p, status: 'done' as const } : p)),
    )
  }, [])

  const markNotificationRead = useCallback((id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    )
  }, [])

  const markAllNotificationsRead = useCallback(() => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
  }, [])

  const myPosts = useMemo(
    () => posts.filter((p) => p.nickname === profile.nickname),
    [posts, profile.nickname],
  )

  const unreadCount = useMemo(
    () => notifications.filter((n) => !n.read).length,
    [notifications],
  )

  const value = useMemo(
    () => ({
      posts,
      matches,
      notifications,
      profile,
      onboardingComplete,
      toastMessage,
      unreadCount,
      myPosts,
      completeOnboarding,
      addPost,
      applyMatch,
      closePost,
      markNotificationRead,
      markAllNotificationsRead,
      showToast,
      hideToast,
    }),
    [
      posts,
      matches,
      notifications,
      profile,
      onboardingComplete,
      toastMessage,
      unreadCount,
      myPosts,
      completeOnboarding,
      addPost,
      applyMatch,
      closePost,
      markNotificationRead,
      markAllNotificationsRead,
      showToast,
      hideToast,
    ],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}
