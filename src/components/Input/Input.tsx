import { StyledInput } from './_Input'

import type { InputInterface } from './type'

function Input({ isFullWidth, ...otherProps }: InputInterface) {
  return (
    <StyledInput isFullWidth={isFullWidth} {...otherProps} type="text" />
  )
}

export default Input
