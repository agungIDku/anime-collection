import { loader } from 'graphql.macro'
import { useQuery } from '@apollo/client'

import { AnimeItemInteface } from '@type/anime';

const QUERY = loader('../query/GET_ANIME.graphql');

export interface UseGetAnimeResInterface {
  Page: {
    media: AnimeItemInteface[]
    pageInfo: {
      currentPage: number
      hasNextPage: boolean
      lastPage: number
      perPage: number
      total: number
    }
  }
}

interface UseGetAnimeReqInterface {
  page: number
  perPage: number
}

interface UseGetAnimeInterface {
  variables: UseGetAnimeReqInterface
}

const useGetAnime = ({ variables }: UseGetAnimeInterface) => {
  const { data } = useQuery<
    UseGetAnimeResInterface,
    UseGetAnimeReqInterface
  >(QUERY, { variables })

  return {
    data: {
      media: data?.Page.media || [],
      pageInfo: data?.Page.pageInfo || {
        currentPage: 0,
        hasNextPage: false,
        lastPage: 0,
        perPage: 0,
        total: 0
      }
    }
  }
}

export default useGetAnime
