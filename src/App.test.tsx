import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import { MockedProvider } from '@apollo/react-testing';
import { loader } from 'graphql.macro';

import App from './App'

const QUERY = loader('./gql/query/GET_ANIME.graphql');

const mocks = [
  {
    request: {
      query: QUERY,
      variables: {
        page: 1,
        perPage: 10
      },
    },
    result: {
      data: {
        Page: {
          Media: {
            id: 1,
            title: { romaji: 'test title' },
            coverImage: { large: 'url-image' },
            episodes: 1,
            averageScore: 90
          },
          PageInfo: {
            total: 500,
            currentPage: 1,
            lastPage: 50,
            hasNextPage: true,
            perPage: 10
          }
        },
      },
    },
  },
];

test('full app rendering/navigating', async () => {
  render(
    <MockedProvider mocks={mocks}>
      <App />
    </MockedProvider>
  , {wrapper: BrowserRouter})
})

test('landing on a bad page', () => {
  const badRoute = '/some/bad/route'

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>
  )

  // verify navigation to "no match" route
  expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument()
})
