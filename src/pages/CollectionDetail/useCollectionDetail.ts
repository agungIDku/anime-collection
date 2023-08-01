import { useContext, useMemo } from "react"
import { useParams } from "react-router-dom"

import { AnimeCollectionStore } from "@context/animeCollection"
import useGetPersistAnime from "@hooks/useGetPersistAnime"
import { setLS } from "@utils/localStorage"
import { home } from "@constants/config"
import { encrypt } from "@utils/hash"

function useCollectionDetail() {
  const params = useParams()
  const {
    animeCollectionState: { countReload },
    animeCollectionDispatch
  } = useContext(AnimeCollectionStore)

  const id = useMemo(() => {
    return params?.id || ''
  }, [params])

  const { collection } = useGetPersistAnime({ countReload })

  const getAnimes = useMemo(() => {
    return collection.collection.find(el => el.name === id)
  }, [collection])

  const handleDelete = (name: string, idAnime: number) => {
    if(window.confirm(`Are you sure to remove anime ${name} in ${id} collection`)) {
      const findIndex = collection.collection.findIndex(el => el.name === id)

      if(findIndex >= 0) {
        const findIndexAnime = collection.collection[findIndex].list.findIndex(el => el.id === idAnime)
        if(findIndexAnime >= 0) {
          collection.collection[findIndex].list.splice(findIndexAnime, 1)
        }
      }

      setLS({
        key: home.collection.keyPersist,
        value: encrypt(JSON.stringify(collection))
      })

      animeCollectionDispatch({ type: 'SET_RELOAD' })
    }
  }

  return { getAnimes, id, handleDelete }
}

export default useCollectionDetail
