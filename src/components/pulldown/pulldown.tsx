import { Box, Container, Grid } from '@material-ui/core'
import { BottomLogo } from 'components/logo/index'
import React, { Component } from 'react'
import styled from 'styled-components'

const StyledGrid = styled(Grid)`
  ${({ theme }) => `
  position: absolute;
  top: 25px;

  ${theme.breakpoints.up('sm')} {
   top: 50%;
   transform: translate(0%, -50%)
  }
  `}
`
const StyledBox = styled(Box)`
  ${({ theme }) => `
  margin: 25px 0 25px 0;
  padding: 50px 0 50px 0;
  background: ${theme.template.body[1]};
`};
`

export class Pulldown extends Component {
  render () {
    return (
      <React.Fragment>
        <StyledGrid container direction="column" spacing={10}>
          <Container maxWidth="md">
            <StyledBox boxShadow={5}>
              {this.props?.children}
            </StyledBox>
            <BottomLogo />
          </Container>
        </StyledGrid>
      </React.Fragment>
    )
  }
}
