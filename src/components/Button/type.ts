import type { ReactNode } from "react"

export interface ButtonInterface {
  children: ReactNode
  isFullWidth?: boolean
  onClick: () => void
  variant?: 'primary' | 'secondary'
}
