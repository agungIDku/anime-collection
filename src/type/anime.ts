export interface AnimeItemInteface {
  averageScore: number
  episodes: number
  id: number
  title: {
    romaji: string
  }
  coverImage: {
    large: string
  }
}

export interface AnimeItemDetailInteface extends AnimeItemInteface {
  description: string
  bannerImage: string
  season: string
  seasonYear: number
  format: string
  popularity: number
  duration: string
  genres: string[]
  tags: {
    id: number
    name: string
    rank: number
  }[]
}
