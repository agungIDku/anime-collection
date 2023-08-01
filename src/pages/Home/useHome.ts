import { useSearchParams } from "react-router-dom"

import useGetAnime from "@gql/hooks/useGetAnime"
import { home } from '@constants/config'
import { useMemo } from "react";

function useHome() {
  const [searchParams] = useSearchParams();

  const getPage = useMemo(() => {
    return +(searchParams.get(home.listAnime.paramsPage) || '0') || 1
  }, [searchParams])

  const { data, loading } = useGetAnime({
    variables: {
      page: getPage || home.listAnime.pageInitial,
      perPage: home.listAnime.perPage
    }
  })

  return {
    data,
    currentPage: getPage,
    loading
  }
}

export default useHome
