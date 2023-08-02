import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import Pagination from './Pagination'

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/example/path",
    search: "?page=1"
  })
}));

describe('PAGINATION - Test', () => {
  it('pagination page 1', () => {
    render(
      <BrowserRouter>
        <Pagination currentPage={1} totalData={500} totalPerPage={10} paramKey='TEST_PARAM'  />
      </BrowserRouter>

    )

    expect(screen.getByTestId('pagination__container')).toBeInTheDocument()

    // Prev will disabled
    expect(screen.getByTestId('pagination__prev')).toHaveStyle(`cursor: not-allowed; background-color: #d3d3d3`)

    // next will enabled
    expect(screen.getByTestId('pagination__next')).toHaveStyle(`cursor: pointer`)
  })

  it('pagination page 2', () => {
    render(
      <BrowserRouter>
        <Pagination currentPage={2} totalData={500} totalPerPage={10} paramKey='TEST_PARAM'  />
      </BrowserRouter>

    )

    expect(screen.getByTestId('pagination__container')).toBeInTheDocument()

    // Enabled both
    expect(screen.getByTestId('pagination__prev')).toHaveStyle(`cursor: pointer`)
    expect(screen.getByTestId('pagination__next')).toHaveStyle(`cursor: pointer`)
  })

  it('pagination page 50', () => {
    render(
      <BrowserRouter>
        <Pagination currentPage={50} totalData={500} totalPerPage={10} paramKey='TEST_PARAM'  />
      </BrowserRouter>

    )

    expect(screen.getByTestId('pagination__container')).toBeInTheDocument()

    // Next will disabled
    expect(screen.getByTestId('pagination__next')).toHaveStyle(`cursor: not-allowed; background-color: #d3d3d3`)

    // Prev will enabled
    expect(screen.getByTestId('pagination__prev')).toHaveStyle(`cursor: pointer`)
  })
})
