export interface AnimeListDetailCtxState {
  isShowModalCreate: boolean
  encryptedFocusAnime: string
  countReload: number
}

export type AnimeListDetailCtxAction =
  | { type: 'SET_MODAL_TOGGLE' }
  | { type: 'SET_RELOAD' }
  | { type: 'SET_FOCUS_ANIME'; payload: string }
