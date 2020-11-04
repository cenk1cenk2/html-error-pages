import { Pulldown } from '@cenk1cenk2/react-template-components'
import { faArrowLeft, faRedo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Grid } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import httpStatus from 'http-status'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import Loading from '../../assets/imgs/logo/logo.svg'

type Props = Partial<RouteComponentProps>

const Page: React.FC<Props> = () => {
  const router = useRouter()

  const errCode = router.query.code as string
  const parsedErrMsg = parseErrMsg(errCode)
  const from = router.query.from as string

  return (
    <Fragment>
      <Head>
        <title key="title">kilic.dev!error</title>
      </Head>
      <Pulldown logo={Loading} package={{ name: 'test', version: 'teest' }}>
        <Grid container direction="column" alignItems="center" alignContent="center" spacing={1}>
          <Grid item>
            <h1 className="text-error">{errCode ? errCode : <Skeleton variant="text" width={100} />}</h1>
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
            {from ? (
              <Link href={from} passHref prefetch={false}>
                <Button variant="contained" color="primary">
                  <FontAwesomeIcon icon={faRedo} className="font-s3" />
                </Button>
              </Link>
            ) : null}
          </Grid>
        </Grid>
      </Pulldown>
    </Fragment>
  )
}

export default Page

function parseErrMsg (code: string) {
  return <Fragment>{httpStatus[code] ?? 'Unknown server error'}</Fragment>
}
