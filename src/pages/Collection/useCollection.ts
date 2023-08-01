import { useContext, useState } from "react"

import { AnimeCollectionStore } from "@context/animeCollection"
import useGetPersistAnime from "@hooks/useGetPersistAnime"

function useCollection() {
  const [isShowModal, setIsShowModal] = useState(false)
  const {
    animeCollectionState: { countReload },
    animeCollectionDispatch
  } = useContext(AnimeCollectionStore)

  const { collection } = useGetPersistAnime({ countReload })

  const handleToggleModal = () => setIsShowModal(!isShowModal)
  const handleRefresh = () => {
    animeCollectionDispatch({ type: 'SET_RELOAD' })
    handleToggleModal()
  }

  return { collection, handleToggleModal, isShowModal, handleRefresh }
}

export default useCollection
