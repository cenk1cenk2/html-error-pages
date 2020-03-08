import PropTypes from 'prop-types'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { StyledComponent } from '../text/component.constants'

import { componentConstants } from './component.constants'
import { IComponentProps } from './component.interface'

const Link: React.FC<IComponentProps> = ({
  to,
  onClick,
  children,
  ...props
}) => (
  <RouterLink to={to} onClick={onClick}>
    <StyledComponent {...componentConstants} {...props}>
      {children}
    </StyledComponent>
  </RouterLink>
)

Link.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  to: PropTypes.string
}

export default Link
