import { ReactNode } from 'react'

export interface LayoutContentInterface {
  isFullWidth?: boolean
}

export interface LayoutInterface extends LayoutContentInterface {
  children: ReactNode
}
