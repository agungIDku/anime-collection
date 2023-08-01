export interface AnimeCollectionCtxState {
  countReload: number
}

export type AnimeCollectionCtxAction =
  | { type: 'SET_RELOAD' }
