export interface PaginationInterface {
  currentPage: number
  totalData: number
  totalPerPage: number
  paramKey: string
}

export interface PaginationItemInterface {
  isDisabled: boolean
}
