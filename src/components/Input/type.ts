import { ChangeEvent } from "react"

export interface InputInterface {
  isFullWidth?: boolean
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
