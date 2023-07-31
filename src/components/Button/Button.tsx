import type { ButtonInterface } from './type'
import { StyledButton } from './_Button'

function Button({ children , ...otherProps }: ButtonInterface) {
  return (
    <StyledButton {...otherProps}>
      {children}
    </StyledButton>
  )
}

export default Button
