import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'

import Text from './Text'

describe('TEXT - Test', () => {
  test('Text regular test', () => {
    render(
      <Text>This is paragraph</Text>
    )

    // verify navigation to "no match" route
    expect(screen.getByText(/This is paragraph/i)).toBeInTheDocument()
    expect(screen.getByTestId('text')).toBeInTheDocument()
  })

  test('Text bold test', () => {
    render(
      <Text weight="bold">This is paragraph</Text>
    )

    // verify navigation to "no match" route
    expect(screen.getByTestId('text')).toHaveStyle(`font-weight: 700`)
  })
})
