import { useMemo } from "react"
import { useLocation } from "react-router-dom"

import { PaginationInterface } from "./type"

function usePagination({ currentPage, totalData, totalPerPage, paramKey }: PaginationInterface) {
  const location = useLocation();

  const totalPage = useMemo(() => {
    return Math.ceil(totalData / totalPerPage)
  }, [totalData, totalPerPage])



  const getURL = useMemo(() => {
    const { pathname, search } = location

    let params = new URLSearchParams(search);
    params.delete(paramKey)
    const searchRest = params.toString()

    const prev = currentPage <= 1 ? currentPage : currentPage - 1
    const next = currentPage >= totalPage ? currentPage : currentPage + 1
    const initialURL = `${pathname}?${paramKey}=`
    const currentParams = searchRest ? `&${searchRest}` : ''

    return {
      prev: `${initialURL + prev}${currentParams}`,
      next: `${initialURL + next}${currentParams}`,
    }
  }, [currentPage, location, paramKey, totalPage])

  return {
    isDisabledPrev: currentPage <= 1 || !currentPage,
    isDisabledNext: currentPage >= totalPage,
    getURL
  }
}

export default usePagination
