import { useMemo } from "react";
import { useParams } from "react-router-dom"

import { firstCharUppercase } from "@utils/textFormatter";
import useGetAnimeDetail from "@gql/hooks/useGetAnimeDetail"

function useAnimeDetail() {
  const params = useParams()

  const getPage = useMemo(() => {
    return +(params?.id || '0')
  }, [params])

  const { data } = useGetAnimeDetail({
    variables: { id: getPage },
    skip: !getPage
  })

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
        : null
  }
}

export default useAnimeDetail
