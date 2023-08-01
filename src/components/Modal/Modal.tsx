import { createPortal } from "react-dom"

import { Text } from '@components'
import { IconX } from "@components/Icon"

import { StyledContainer, StyledContainerOverlay, StyledHeader, StyledContent } from './_Modal'
import type { ModalInterface } from './type'

function Modal({ children, title, handleClose }: ModalInterface) {
  return createPortal(
    <StyledContainerOverlay>
      <StyledContainer>
        <StyledHeader>
          <Text variant="h4" weight="semi-bold" lineHeight="24px">{title}</Text>
          <IconX onClick={handleClose} />
        </StyledHeader>
        <StyledContent>
          {children}
        </StyledContent>
      </StyledContainer>
    </StyledContainerOverlay>,
    document.querySelector('#portal')!
  )
}

export default Modal
