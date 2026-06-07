export type PostStatus = 'waiting' | 'done'
export type Category = '고기' | '곱창' | '찜닭' | '기타'
export type MatchStatus = 'pending' | 'confirmed'
export type NotificationType = 'apply' | 'confirm' | 'system' | 'reminder'

export interface AuthorProfile {
  nickname: string
  mannerScore: number
  matchCount: number
  intro: string
}

export interface Post {
  id: number
  category: Category
  categoryLabel: string
  menu: string
  restaurant: string
  location: string
  address: string
  distance: string
  date: string
  time: string
  budget: number
  maxPeople: number
  currentApplicants: number
  minOrder: string
  tags: string[]
  comment: string
  nickname: string
  author: AuthorProfile
  restaurantRating: number
  status: PostStatus
  createdAt: string
  isPopular?: boolean
}

export interface Match {
  id: number
  postId: number
  post: Post
  status: MatchStatus
  appliedAt: string
}

export interface Notification {
  id: number
  type: NotificationType
  title: string
  message: string
  time: string
  read: boolean
  postId?: number
}

export interface UserProfile {
  nickname: string
  neighborhood: string
  mannerScore: number
  matchCount: number
  postCount: number
  intro: string
}

const hoursAgo = (h: number) => new Date(Date.now() - h * 3600000).toISOString()
const daysAgo = (d: number) => new Date(Date.now() - d * 86400000).toISOString()

export const INITIAL_POSTS: Post[] = [
  {
    id: 1,
    category: '고기',
    categoryLabel: '고기',
    menu: '삼겹살',
    restaurant: '연돈',
    location: '망포동',
    address: '경기 수원시 영통구 망포로 123',
    distance: '0.8km',
    date: '오늘',
    time: '19:00',
    budget: 35000,
    maxPeople: 2,
    currentApplicants: 1,
    minOrder: '삼겹살 2인분 이상',
    tags: ['첫만남 환영', '대화 좋아해요'],
    comment: '고기 진짜 땡기는데 혼자 먹기 아까워요. 편하게 대화 나누면서 드실 분 구해요!',
    nickname: '배고픈수달',
    author: {
      nickname: '배고픈수달',
      mannerScore: 4.8,
      matchCount: 12,
      intro: '고기 없으면 하루가 안 돼요',
    },
    restaurantRating: 4.8,
    status: 'waiting',
    createdAt: hoursAgo(0.05),
    isPopular: true,
  },
  {
    id: 2,
    category: '곱창',
    categoryLabel: '곱창',
    menu: '곱창구이',
    restaurant: '곱창골목',
    location: '수원역',
    address: '경기 수원시 팔달구 수원역로 45',
    distance: '2.1km',
    date: '오늘',
    time: '18:30',
    budget: 28000,
    maxPeople: 2,
    currentApplicants: 0,
    minOrder: '곱창 2인분 이상',
    tags: ['술 한잔 가능'],
    comment: '퇴근하고 곱창 한 점 하실 분! 분위기 좋은 곳이에요.',
    nickname: '야식러버',
    author: {
      nickname: '야식러버',
      mannerScore: 4.5,
      matchCount: 8,
      intro: '야식 전문 자취생',
    },
    restaurantRating: 4.5,
    status: 'waiting',
    createdAt: hoursAgo(1),
    isPopular: true,
  },
  {
    id: 3,
    category: '찜닭',
    categoryLabel: '찜닭',
    menu: '안동찜닭',
    restaurant: '안동찜닭',
    location: '영통',
    address: '경기 수원시 영통구 영통로 78',
    distance: '1.5km',
    date: '오늘',
    time: '12:00',
    budget: 22000,
    maxPeople: 2,
    currentApplicants: 2,
    minOrder: '찜닭 1마리 이상',
    tags: ['점심 메이트'],
    comment: '점심 찜닭 어때요? 같이 나눠 먹으면 딱 좋아요~',
    nickname: '영통자취생',
    author: {
      nickname: '영통자취생',
      mannerScore: 4.9,
      matchCount: 23,
      intro: '영통 동네 밥친구 단골',
    },
    restaurantRating: 4.3,
    status: 'done',
    createdAt: hoursAgo(5),
  },
  {
    id: 4,
    category: '고기',
    categoryLabel: '고기',
    menu: '소고기 구이',
    restaurant: '이차돌',
    location: '광교',
    address: '경기 수원시 영통구 광교호수공원로 12',
    distance: '3.2km',
    date: '오늘',
    time: '20:00',
    budget: 45000,
    maxPeople: 2,
    currentApplicants: 0,
    minOrder: '소고기 2인분 이상',
    tags: ['기분 좋은 날', '여유롭게'],
    comment: '오늘 기분 좋아서 소고기 먹으러 가요. 여유 있게 드실 분!',
    nickname: '광교미식가',
    author: {
      nickname: '광교미식가',
      mannerScore: 4.7,
      matchCount: 15,
      intro: '맛집 탐방이 취미',
    },
    restaurantRating: 4.6,
    status: 'waiting',
    createdAt: hoursAgo(2),
  },
  {
    id: 5,
    category: '곱창',
    categoryLabel: '곱창',
    menu: '대창+막창',
    restaurant: '망원곱창',
    location: '망포동',
    address: '경기 수원시 영통구 망포중앙로 56',
    distance: '1.0km',
    date: '내일',
    time: '19:30',
    budget: 30000,
    maxPeople: 3,
    currentApplicants: 1,
    minOrder: '곱창 2인분 이상',
    tags: ['3인 모집', '캐주얼'],
    comment: '내일 저녁 곱창 파티! 3명이서 가면 딱 좋을 것 같아요.',
    nickname: '곱창덕후',
    author: {
      nickname: '곱창덕후',
      mannerScore: 4.6,
      matchCount: 6,
      intro: '곱창은 사랑입니다',
    },
    restaurantRating: 4.4,
    status: 'waiting',
    createdAt: hoursAgo(3),
    isPopular: true,
  },
  {
    id: 6,
    category: '고기',
    categoryLabel: '고기',
    menu: 'LA갈비',
    restaurant: '영통고기집',
    location: '영통',
    address: '경기 수원시 영통구 봉영로 234',
    distance: '1.8km',
    date: '내일',
    time: '18:00',
    budget: 32000,
    maxPeople: 2,
    currentApplicants: 0,
    minOrder: '고기 2인분 이상',
    tags: ['퇴근 후', '가성비'],
    comment: '퇴근하고 가성비 좋은 고기집 가실 분~',
    nickname: '퇴근러',
    author: {
      nickname: '퇴근러',
      mannerScore: 4.4,
      matchCount: 4,
      intro: '퇴근 = 고기',
    },
    restaurantRating: 4.2,
    status: 'waiting',
    createdAt: hoursAgo(8),
  },
  {
    id: 7,
    category: '기타',
    categoryLabel: '기타',
    menu: '치킨+맥주',
    restaurant: 'BHC 치킨',
    location: '영통',
    address: '경기 수원시 영통구 영통로 156',
    distance: '0.5km',
    date: '오늘',
    time: '21:00',
    budget: 18000,
    maxPeople: 2,
    currentApplicants: 0,
    minOrder: '1마리 이상',
    tags: ['야식', '맥주 한잔'],
    comment: '치맥 하실 분! 집 근처에서 편하게 먹어요.',
    nickname: '치맥러버',
    author: {
      nickname: '치맥러버',
      mannerScore: 4.3,
      matchCount: 3,
      intro: '치킨은 언제나 옳다',
    },
    restaurantRating: 4.1,
    status: 'waiting',
    createdAt: hoursAgo(0.5),
  },
  {
    id: 8,
    category: '찜닭',
    categoryLabel: '찜닭',
    menu: '간장찜닭',
    restaurant: '할머니찜닭',
    location: '망포동',
    address: '경기 수원시 영통구 망포로 89',
    distance: '1.2km',
    date: '6월 10일',
    time: '12:30',
    budget: 20000,
    maxPeople: 2,
    currentApplicants: 0,
    minOrder: '찜닭 1마리 이상',
    tags: ['주말 점심'],
    comment: '주말 점심에 찜닭 드실 분 구해요!',
    nickname: '주말요리사',
    author: {
      nickname: '주말요리사',
      mannerScore: 4.8,
      matchCount: 9,
      intro: '주말엔 밖에서 먹기',
    },
    restaurantRating: 4.5,
    status: 'waiting',
    createdAt: daysAgo(1),
  },
]

export const INITIAL_MATCHES: Match[] = [
  {
    id: 1,
    postId: 2,
    post: INITIAL_POSTS[1],
    status: 'pending',
    appliedAt: hoursAgo(0.5),
  },
  {
    id: 2,
    postId: 1,
    post: INITIAL_POSTS[0],
    status: 'confirmed',
    appliedAt: daysAgo(1),
  },
]

export const INITIAL_NOTIFICATIONS: Notification[] = [
  {
    id: 1,
    type: 'confirm',
    title: '매칭이 확정됐어요',
    message: '배고픈수달님과 삼겹살 매칭이 확정됐습니다. 오늘 19:00에 만나요!',
    time: hoursAgo(2),
    read: false,
    postId: 1,
  },
  {
    id: 2,
    type: 'apply',
    title: '새 신청이 도착했어요',
    message: '곱창골목 모집글에 누군가 같이 먹고 싶대요.',
    time: hoursAgo(5),
    read: false,
    postId: 2,
  },
  {
    id: 3,
    type: 'reminder',
    title: '오늘 약속 리마인더',
    message: '오늘 19:00 연돈에서 배고픈수달님과 만나요.',
    time: hoursAgo(8),
    read: true,
    postId: 1,
  },
  {
    id: 4,
    type: 'system',
    title: '밥친구에 오신 걸 환영해요',
    message: '혼자 가기 애매한 식당, 이제 밥친구와 함께 가보세요.',
    time: daysAgo(2),
    read: true,
  },
]

export const CATEGORIES: Category[] = ['고기', '곱창', '찜닭', '기타']

export function resolveCategory(label: string): Category {
  const trimmed = label.trim()
  if ((CATEGORIES as readonly string[]).includes(trimmed)) {
    return trimmed as Category
  }
  return '기타'
}

export const CREATE_TAGS = [
  '첫만남 환영',
  '대화 좋아해요',
  '술 한잔 가능',
  '조용히 먹기',
  '가성비',
  '캐주얼',
] as const

const ANIMALS = [
  '수달',
  '고양이',
  '다람쥐',
  '펭귄',
  '여우',
  '토끼',
  '곰',
  '강아지',
  '햄스터',
  '판다',
]

export function generateNickname(): string {
  const animal = ANIMALS[Math.floor(Math.random() * ANIMALS.length)]
  return `${animal}자취생`
}

export function getAvatarInitial(nickname: string): string {
  return nickname.charAt(0)
}
