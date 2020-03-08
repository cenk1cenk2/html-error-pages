import React from 'react'

import { StyledComponent, componentConstants } from './component.constants'
import { IProperties, IStyledComponent } from './component.interface'

// create component for all other elements
const createComponent: (
  displayName: string,
  textStyle: IProperties
) => React.FC<IProperties> = (displayName, textStyle) => {
  const component: React.FC<IProperties> = (props) => (
    <StyledComponent {...textStyle} {...props}>
      {props?.children}
    </StyledComponent>
  )
  component.displayName = displayName
  return component
}

type ComponentProps = Record<keyof IStyledComponent, React.FC<IProperties>>

export default Object.entries(componentConstants).reduce(
  (o, [ name, component ]) => {
    return { [name]: createComponent(name, component), ...o }
  },
  {} as ComponentProps
)
