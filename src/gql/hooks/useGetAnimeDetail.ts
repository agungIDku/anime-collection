import { loader } from 'graphql.macro'
import { useQuery } from '@apollo/client'

import { AnimeItemDetailInteface } from '@type/anime';

const QUERY = loader('../query/GET_ANIME_DETAIL.graphql');

export interface UseGetAnimeDetailResInterface {
  Page: {
    media: AnimeItemDetailInteface[]
  }
}

interface UseGetAnimeDetailReqInterface {
  id: number
}

interface UseGetAnimeDetailInterface {
  variables: UseGetAnimeDetailReqInterface
  skip: boolean
}

const useGetAnimeDetail = (params: UseGetAnimeDetailInterface) => {
  const { data } = useQuery<
    UseGetAnimeDetailResInterface,
    UseGetAnimeDetailReqInterface
  >(QUERY, params)

  return {
    data: {
      media: data?.Page.media || []
    }
  }
}

export default useGetAnimeDetail
