import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import { MockedProvider } from '@apollo/react-testing';

import App from './App'

test('full app rendering/navigating', async () => {
  render(
    <MockedProvider>
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
