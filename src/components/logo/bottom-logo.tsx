
import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid } from '@material-ui/core'
import React, { Component, Fragment } from 'react'

import { version, name } from '../../../package.json'

export class BottomLogo extends Component {
  render () {
    return (
      <Fragment>
        <Grid container direction="column" justify="center" alignItems="center">
          <span>
            <Grid direction="row" justify="center" alignItems="center">
              <FontAwesomeIcon icon={faTerminal} className="push-5-r text-logo" />
              <span className="font-w400">{name}</span>
            </Grid>
          </span>
          <small className="text-muted">
            v{version}
          </small>
        </Grid>
      </Fragment>
    )
  }
}
