import { ChangeEvent, useState, useContext, useMemo } from "react"

import { decrypt, encrypt } from "@utils/hash"
import { AnimeListDetailStore } from "@context/animeListDetail"
import { convertJsonString } from "@utils/json"
import { setLS } from "@utils/localStorage"
import { home } from "@constants/config"
import type { AnimeItemDetailInteface } from "@type/anime"
import { sanitizeSpecialChar } from "@utils/textFormatter"
import useGetPersistAnime from "@hooks/useGetPersistAnime"

import type { ExistingAnimeInterface, ModalAddColletion } from "./type"

function useModalCollection(props: Omit<ModalAddColletion, 'handleClose'>) {
  const {
    animeListDetailState: { encryptedFocusAnime }
  } = useContext(AnimeListDetailStore)

  const [collectionName, setCollectionName] = useState('')
  const [countReloadAnime, setCountReloadAnime] = useState(0)

  const { collection: getExistingAnime } = useGetPersistAnime({ countReload: countReloadAnime })

  const handleChangeCollectionName = (e: ChangeEvent<HTMLInputElement>) => {
    setCollectionName(sanitizeSpecialChar(e.target.value))
  }

  const getFocusAnime = useMemo(() => {
    // get anime data in detail page
    const focusObjStr = decrypt(encryptedFocusAnime)
    return convertJsonString(focusObjStr) as AnimeItemDetailInteface
  }, [encryptedFocusAnime])

  const handleSaveToStorage = (updatedAnime: ExistingAnimeInterface) => {
    // save to local storage and reload the persist
    setLS({
      key: home.collection.keyPersist,
      value: encrypt(JSON.stringify(updatedAnime))
    })
    setCountReloadAnime(countReloadAnime + 1)
    setTimeout(() => {
      props.handleRefresh()
    }, 100)
  }

  const handleAddToExistingCollection = (index: number) => {
    const indexExistingList =
      getExistingAnime.collection[index].list.findIndex(el => el.id === getFocusAnime.id)

    if(indexExistingList === -1) {
      // add to existing collection name
      getExistingAnime.collection[index].list.push(getFocusAnime)
      handleSaveMappingCollection(getExistingAnime.collection[index].name)
    } else {
      // if collection name was same, and in list already listed the anime with same id, it can't be stored. just show this message
      alert(`${getFocusAnime.title.romaji} is already in ${collectionName} collection`)
    }

    handleSaveToStorage(getExistingAnime)
  }

  // Handle submit with form
  const handleSubmit = () => {
    if(!collectionName) return
    // check if collection name already in collection
    const indexExistingCollection =
      getExistingAnime.collection.findIndex(el => el.name === collectionName)

    const newCollection = {
      name: collectionName,
      list: getFocusAnime ? [getFocusAnime] : []
    }

    if(getFocusAnime && indexExistingCollection >= 0) {
      // if already listed, update the list
      handleAddToExistingCollection(indexExistingCollection)
      return
    } else {
      // if not listed, create a new one
      getExistingAnime.collection.push(newCollection)
      getExistingAnime.animeNameMap[collectionName] = true
      handleSaveMappingCollection()
    }

    handleSaveToStorage(getExistingAnime)
    setCollectionName('')
  }

  const handleSaveMappingCollection = (name?: string) => {
    if(getExistingAnime.animeCollectionMap[getFocusAnime.id]) {
      getExistingAnime.animeCollectionMap[getFocusAnime.id].push(name || collectionName)
    } else {
      getExistingAnime.animeCollectionMap[getFocusAnime.id] = [name || collectionName]
    }
  }

  return {
    collectionName,
    getExistingAnime,
    handleChangeCollectionName,
    handleSubmit,
    handleAddToExistingCollection
  }
}

export default useModalCollection
