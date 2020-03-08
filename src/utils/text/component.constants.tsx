import styled from 'styled-components'
import {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign
} from 'styled-system'
import Theme from 'themes/'

import { IStyledComponent } from './component.interface'

export const StyledComponent = styled.span`
  ${fontSize}
  ${color}
  ${fontFamily}
  ${fontWeight}
  ${lineHeight}
  ${textAlign}
`

export const componentConstants: IStyledComponent = {
  H1: {
    fontSize: 57,
    fontWeight: 700,
    fontFamily: Theme.text.font.heading.name,
    as: 'h1'
  },
  H2: {
    fontSize: 43,
    fontWeight: 700,
    fontFamily: Theme.text.font.heading.name,
    as: 'h2'
  },
  H3: {
    fontSize: 32,
    fontWeight: 700,
    fontFamily: Theme.text.font.heading.name,
    as: 'h3'
  },
  H4: {
    fontSize: 24,
    fontWeight: 700,
    fontFamily: Theme.text.font.heading.name,
    as: 'h4'
  },
  H5: {
    fontWeight: 700,
    fontSize: 21,
    fontFamily: Theme.text.font.heading.name,
    as: 'h5'
  },
  LargeLead: {
    fontWeight: 500,
    fontSize: 24,
    fontFamily: Theme.text.font.heading.name,
    as: 'p'
  },
  SmallLead: {
    fontWeight: 500,
    fontSize: 21,
    fontFamily: Theme.text.font.heading.name,
    as: 'p'
  },
  Paragraph: {
    fontSize: 16,
    fontWeight: 300,
    fontFamily: Theme.text.font.default.name,
    as: 'p'
  },
  SmallParagraph: {
    fontSize: 15,
    fontWeight: 300,
    fontFamily: Theme.text.font.default.name,
    as: 'p'
  }
}
