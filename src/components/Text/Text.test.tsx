import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'

import Text from './Text'

describe('TEXT - Test', () => {
  it('Text regular test', () => {
    render(
      <Text>This is paragraph</Text>
    )

    expect(screen.getByText(/This is paragraph/i)).toBeInTheDocument()
    expect(screen.getByTestId('text')).toBeInTheDocument()
  })

  it('Text bold test', () => {
    render(
      <Text weight="bold">This is paragraph</Text>
    )

    expect(screen.getByTestId('text')).toHaveStyle(`font-weight: 700`)
  })

  it('Text size test', () => {
    render(
      <Text variant="h4">This is paragraph</Text>
    )

    expect(screen.getByTestId('text')).toHaveStyle(`font-size: 18px`)
  })

  it('Text color test', () => {
    render(
      <Text color="success">This is paragraph</Text>
    )

    expect(screen.getByTestId('text')).toHaveStyle(`color: #46d369`)
  })
})
