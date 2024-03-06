import { sizes } from '@/components/_types/Html.types'

export type TAccordionProps = TAccordionPropData

export type TAccordionVariants = 'horizontal' | 'vertical'

export type TAccordionOptions = {
  variant: TAccordionVariants
  withIcon?:
    | false
    | {
        Icon: React.ReactNode
        size: sizes
        pos: 'start' | 'end'
      }
}

export type TAccordionItems = {
  label: string
  dropdownContent: React.ReactNode
}

export type TAccordionPropData = {
  options?: TAccordionOptions
  items: TAccordionItems[]
}
