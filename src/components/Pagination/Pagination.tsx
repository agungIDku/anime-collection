import { Link } from "react-router-dom"

import { IconCaretLeft, IconCaretRight } from "@components/Icon"

import { StyledContainer, StyledItem } from './_Pagination'
import { PaginationInterface } from "./type"
import usePagination from "./usePagination"

function Pagination(props: PaginationInterface) {
  const { isDisabledPrev, isDisabledNext, getURL } = usePagination(props)

  return (
    <StyledContainer data-testid="pagination__container">
      <Link to={getURL.prev}>
        <StyledItem isDisabled={isDisabledPrev} data-testid="pagination__prev">
          <IconCaretLeft />
        </StyledItem>
      </Link>
      <Link to={getURL.next}>
        <StyledItem isDisabled={isDisabledNext} data-testid="pagination__next">
          <IconCaretRight />
        </StyledItem>
      </Link>
    </StyledContainer>
  )
}

export default Pagination
