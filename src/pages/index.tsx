import { faArrowLeft, faRedo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, Button } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import httpStatus from 'http-status'
import Head from 'next/head'
import Link from 'next/link'
import { withRouter, NextRouter } from 'next/router'
import { Component, Fragment } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { Pulldown } from '@components/pulldown'

interface Props extends Partial<RouteComponentProps> {
  router: NextRouter
}

@(withRouter as any)
export default class Root extends Component<Props> {

  render () {
    const errCode = this.props.router.query.code as string
    const parsedErrMsg = this.parseErrMsg(errCode)
    const from = this.props.router.query.from as string
    return (
      <Fragment>
        <Head>
          <title key="title">kilic.dev!error</title>
        </Head>
        <Pulldown>
          <Grid container direction="column" alignItems="center" alignContent="center" spacing={1}>
            <Grid item>
              <h1 className="text-error">
                {
                  errCode ?
                    errCode :
                    <Skeleton variant="text" width={100} />
                }
              </h1>
            </Grid>
            <Grid item>
              <h4>{parsedErrMsg ? parsedErrMsg : <Skeleton variant="text" width={200} />}</h4>
            </Grid>
            <Grid item>
              <Link href="https://kilic.dev" passHref prefetch={false}>
                <Button variant="contained" color="primary">
                  <FontAwesomeIcon icon={faArrowLeft} className="font-s3" />
                </Button>
              </Link>
              {
                from ?
                  <Link href={from} passHref prefetch={false}>
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

  private parseErrMsg (code: string) {
    return (
      <Fragment>
        {httpStatus[code] ? httpStatus[code] : 'Unknown server error'}
      </Fragment>
    )
  }
}
