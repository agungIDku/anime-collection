import { useMemo } from "react"

import type { ExistingAnimeInterface } from "@pages/AnimeDetail/ModalAddCollection/type"
import { getLS } from "@utils/localStorage"
import { decrypt } from "@utils/hash"
import { home } from "@constants/config"
import { convertJsonString } from "@utils/json"

function useGetPersistAnime({ countReload = 0 }: { countReload?: number }) {
  const collection = useMemo((): ExistingAnimeInterface => {
    // get existing anime in collection stored in local storage
    const persistObjStr = getLS(home.collection.keyPersist)
    return convertJsonString(decrypt(persistObjStr))
      || { collection: [], animeCollectionMap: {}, animeNameMap: {}} as ExistingAnimeInterface
  }, [countReload])

  return { collection }
}

export default useGetPersistAnime
