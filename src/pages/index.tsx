import { faArrowLeft, faRedo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, Button } from '@material-ui/core'
import httpStatus from 'http-status'
import Link from 'next/link'
import { withRouter, NextRouter } from 'next/router'
import { Component, Fragment } from 'react'

import { Pulldown } from '@src/components/pulldown'

interface Props {
  router: NextRouter
}

class Root extends Component<Props> {

  render () {
    return (
      <Fragment>
        <Pulldown>
          <Grid container direction="column" alignItems="center" alignContent="center" spacing={1}>
            <Grid item>
              <h1 className="text-error">{this.props.router.query.code ? this.props.router.query.code : '502'}</h1>
            </Grid>
            <Grid item>
              <h4>{this.parseErrorCode(this.props.router.query.code as string)}</h4>
            </Grid>
            <Grid item>
              <Link href="https://kilic.dev" passHref prefetch={false}>
                <Button variant="contained" color="primary">
                  <FontAwesomeIcon icon={faArrowLeft} className="font-s3" />
                </Button>
              </Link>
              {
                this.props.router.query.from ?
                  <Link href={this.props.router.query.from as string} passHref prefetch={false}>
                    <Button variant="contained" color="primary">
                      <FontAwesomeIcon icon={faRedo} className="font-s3" />
                    </Button>
                  </Link>
                  : null
              }
            </Grid>
          </Grid>
        </Pulldown>
      </Fragment>
    )
  }

  private parseErrorCode (code: string) {
    return (
      <Fragment>
        {httpStatus[code] ? httpStatus[code] : 'Unknown server error'}
      </Fragment>
    )
  }
}

export default withRouter(Root)