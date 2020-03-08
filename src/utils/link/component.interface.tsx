import React, { ReactNode } from 'react'
import { LinkProps } from 'react-router-dom'

import { IProperties } from '../text/component.interface'

// Link as a different type
export type IComponentProps = IStyledComponent &
  Pick<LinkProps, 'to'> & {
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
    children: ReactNode
  }

export type IStyledComponent = IProperties
