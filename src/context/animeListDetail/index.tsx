import { createContext, Dispatch, useReducer, FC, ReactNode, useCallback } from "react"

import type { AnimeListDetailCtxAction, AnimeListDetailCtxState } from "./type"

const initialState: AnimeListDetailCtxState = {
  encryptedFocusAnime: '',
  isShowModalCreate: false,
  countReload: 0
}

const AnimeListDetailStore = createContext<{
  animeListDetailState: AnimeListDetailCtxState
  animeListDetailDispatch: Dispatch<AnimeListDetailCtxAction>
}>({
  animeListDetailState: initialState,
  animeListDetailDispatch: () => null,
})

const { Provider } = AnimeListDetailStore

const AnimeListDetailProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const memoizedReducer = useCallback((currentState: AnimeListDetailCtxState, action: AnimeListDetailCtxAction) => {
    switch (action.type) {
      case 'SET_MODAL_TOGGLE':
        return {
          ...currentState,
          isShowModalCreate: !currentState.isShowModalCreate
        }

      case 'SET_FOCUS_ANIME':
        return {
          ...currentState,
          encryptedFocusAnime: action.payload
        }

      case 'SET_RELOAD' :
        return {
          ...currentState,
          countReload: currentState.countReload + 1
        }

      default:
        throw new Error()
    }
  }, [])

  const [animeListDetailState, animeListDetailDispatch] = useReducer(memoizedReducer, initialState)

  return (
    <Provider value={{ animeListDetailState, animeListDetailDispatch}}>
      {children}
    </Provider>
  )
}

export { AnimeListDetailStore, AnimeListDetailProvider }
