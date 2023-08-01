import { useContext } from "react"

import { setLS } from "@utils/localStorage"
import { home } from "@constants/config"
import { encrypt } from "@utils/hash"
import { AnimeCollectionStore } from "@context/animeCollection"
import useGetPersistAnime from "@hooks/useGetPersistAnime"

function useItem() {
  const { animeCollectionDispatch, animeCollectionState: { countReload } } = useContext(AnimeCollectionStore)

  const { collection } = useGetPersistAnime({ countReload })

  const handleRemove = (name: string) => {
    if(window.confirm(`Are you sure to delete collection ${name}`)) {
      const findIndex = collection.collection.findIndex(el => el.name === name)

      if(findIndex >= 0) {
        collection.collection.splice(findIndex, 1)
        delete collection.animeNameMap[name]
      }

      setLS({
        key: home.collection.keyPersist,
        value: encrypt(JSON.stringify(collection))
      })

      animeCollectionDispatch({ type: 'SET_RELOAD' })
    }
  }

  return {
    handleRemove
  }
}

export default useItem
