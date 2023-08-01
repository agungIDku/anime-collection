import { createContext, Dispatch, useReducer, FC, ReactNode, useCallback } from "react"

import type { AnimeCollectionCtxAction, AnimeCollectionCtxState } from "./type"

const initialState: AnimeCollectionCtxState = {
  countReload: 0
}

const AnimeCollectionStore = createContext<{
  animeCollectionState: AnimeCollectionCtxState
  animeCollectionDispatch: Dispatch<AnimeCollectionCtxAction>
}>({
  animeCollectionState: initialState,
  animeCollectionDispatch: () => null,
})

const { Provider } = AnimeCollectionStore

const AnimeCollectionProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const memoizedReducer = useCallback((currentState: AnimeCollectionCtxState, action: AnimeCollectionCtxAction) => {
    switch (action.type) {
      case 'SET_RELOAD':
        return {
          ...currentState,
          countReload: currentState.countReload + 1
        }

      default:
        throw new Error()
    }
  }, [])

  const [animeCollectionState, animeCollectionDispatch] = useReducer(memoizedReducer, initialState)

  return (
    <Provider value={{ animeCollectionState, animeCollectionDispatch}}>
      {children}
    </Provider>
  )
}

export { AnimeCollectionStore, AnimeCollectionProvider }
