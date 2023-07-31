import { ReactNode } from "react"

interface AlignInterface {
  align?: 'left' | 'center' | 'right'
}

interface ColorInterface {
  color?: 'primary' | 'white' | 'danger' | 'success'
}

interface WeightInterface {
  weight?: 'normal' | 'semi-bold' | 'bold'
}

interface LineHeightInterface {
  lineHeight?: string
}

type CombineInterface = AlignInterface & ColorInterface & WeightInterface & LineHeightInterface

export interface ParagraphInterface extends CombineInterface {
  variant?: 'body3' | 'body2' | 'body1' | 'h4'
}

export interface TextInterface  extends CombineInterface {
  variant?: ParagraphInterface['variant']
  children: ReactNode
}
