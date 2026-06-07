export interface RestaurantSuggestion {
  name: string
  location: string
  address: string
  category: string
  rating: number
  minOrder: string
  avgBudget: number
}

export const RESTAURANT_SUGGESTIONS: RestaurantSuggestion[] = [
  {
    name: '연돈',
    location: '망포동',
    address: '경기 수원시 영통구 망포로 123',
    category: '고기',
    rating: 4.8,
    minOrder: '삼겹살 2인분 이상',
    avgBudget: 35000,
  },
  {
    name: '곱창골목',
    location: '수원역',
    address: '경기 수원시 팔달구 수원역로 45',
    category: '곱창',
    rating: 4.5,
    minOrder: '곱창 2인분 이상',
    avgBudget: 28000,
  },
  {
    name: '안동찜닭',
    location: '영통',
    address: '경기 수원시 영통구 영통로 78',
    category: '찜닭',
    rating: 4.3,
    minOrder: '찜닭 1마리 이상',
    avgBudget: 22000,
  },
  {
    name: '이차돌',
    location: '광교',
    address: '경기 수원시 영통구 광교호수공원로 12',
    category: '고기',
    rating: 4.6,
    minOrder: '소고기 2인분 이상',
    avgBudget: 45000,
  },
  {
    name: '망원곱창',
    location: '망포동',
    address: '경기 수원시 영통구 망포중앙로 56',
    category: '곱창',
    rating: 4.4,
    minOrder: '곱창 2인분 이상',
    avgBudget: 30000,
  },
  {
    name: '영통고기집',
    location: '영통',
    address: '경기 수원시 영통구 봉영로 234',
    category: '고기',
    rating: 4.2,
    minOrder: '고기 2인분 이상',
    avgBudget: 32000,
  },
]

export const NEIGHBORHOODS = [
  '영통구',
  '망포동',
  '광교',
  '수원역',
  '인계동',
  '정자동',
] as const
