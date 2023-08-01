import { ReactNode } from "react"

export interface ModalInterface {
  title: string
  handleClose: () => void
  children: ReactNode
}
