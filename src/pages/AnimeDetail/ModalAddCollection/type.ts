import { AnimeItemDetailInteface } from "@type/anime";

export interface ExistingAnimeInterface {
  collection: {
    name: string
    list: AnimeItemDetailInteface[]
  }[]
  animeCollectionMap: {
    [key: string]: string[]
  }
  animeNameMap: {
    [key: string]: true
  }
}

export interface ModalAddColletion {
  handleRefresh: () => void
  handleClose: () => void
  isEnableExisting?: boolean
}
