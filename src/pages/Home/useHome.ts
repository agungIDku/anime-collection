import { useSearchParams } from "react-router-dom"

import useGetAnime from "@gql/hooks/useGetAnime"
import { home } from '@constants/config'
import { useMemo } from "react";

const PARAM_PAGE = 'page'

function useHome() {
  const [searchParams] = useSearchParams();

  const getPage = useMemo(() => {
    return +(searchParams.get(PARAM_PAGE) || '0') || 1
  }, [searchParams])

  const { data } = useGetAnime({
    variables: {
      page: getPage || home.listAnime.pageInitial,
      perPage: home.listAnime.perPage
    }
  })

  return {
    data,
    currentPage: getPage,
    PARAM_PAGE
  }
}

export default useHome
