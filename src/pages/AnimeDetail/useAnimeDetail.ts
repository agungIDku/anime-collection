import { useMemo, useContext, useEffect } from "react";
import { useParams } from "react-router-dom"

import { firstCharUppercase } from "@utils/textFormatter";
import useGetAnimeDetail from "@gql/hooks/useGetAnimeDetail"
import { AnimeListDetailStore } from "@context/animeListDetail";
import { encrypt } from "@utils/hash";
import useGetPersistAnime from "@hooks/useGetPersistAnime";



function useAnimeDetail() {
  const params = useParams()
  const {
    animeListDetailState: { isShowModalCreate, countReload },
    animeListDetailDispatch
  } = useContext(AnimeListDetailStore)
  const { collection } = useGetPersistAnime({ countReload })

  const getPage = useMemo(() => {
    return +(params?.id || '0')
  }, [params])

  const { data } = useGetAnimeDetail({
    variables: { id: getPage },
    skip: !getPage
  })



  const getCollection = useMemo((): string[] => {
    return ((collection.animeCollectionMap[getPage] || []) as string[])
      .filter(el => collection.animeNameMap?.[el])
  }, [countReload])

  useEffect(() => {
    if(data?.media?.[0]) {
      animeListDetailDispatch({
        type: 'SET_FOCUS_ANIME',
        payload: encrypt(JSON.stringify(data.media[0]))
      })
    }
  }, [data?.media?.[0]])

  const handleToggleModal = () => animeListDetailDispatch({ type: 'SET_MODAL_TOGGLE' })

  return {
    data: data.media?.[0] ?
      {
        ...data.media[0],
        genres: data.media[0].genres.join(', '),
        format: firstCharUppercase(data.media[0].format),
        season: data.media[0].season && data.media[0].seasonYear
          ? `${firstCharUppercase(data.media[0].season) + ' ' + data.media[0].seasonYear}`
          : '-'
      }
        : null,
    handleToggleModal,
    isShowModalCreate,
    getCollection,
    handleRefresh: () => animeListDetailDispatch({ type: 'SET_RELOAD' })
  }
}

export default useAnimeDetail
