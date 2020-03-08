import {
  ColorProps,
  FontFamilyProps,
  FontSizeProps,
  FontWeightProps
} from 'styled-system'

export type IProperties =
  | FontSizeProps
  | FontFamilyProps
  | FontWeightProps
  | ColorProps
  | { as?: keyof JSX.IntrinsicElements | React.ComponentType<any> }

type Items =
  | 'H1'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'H5'
  | 'LargeLead'
  | 'SmallLead'
  | 'Paragraph'
  | 'SmallParagraph'

export type IStyledComponent = Record<Items, IProperties>
