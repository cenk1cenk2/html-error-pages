import { ReactComponent as LogoImage } from '@assets/img/logo.svg'
import { faArrowLeft, faRedo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Grid, Typography } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import httpStatus from 'http-status'
import React, { Fragment } from 'react'
import { useLocation } from 'react-router'

import { Pulldown } from '@cenk1cenk2/react-template-components'

const NotFound: React.FC = () => {
  const router = new URLSearchParams(useLocation().search)

  const errCode = router.get('code')
  const parsedErrMsg = parseErrMsg(errCode)
  const from = router.get('from')

  return (
    <Fragment>
      <Pulldown package={{ name: CONFIG.package.name, version: CONFIG.package.version }} logo={LogoImage} maxWidth="md" offset={{ x: 0, y: 0 }}>
        <Grid container direction="column" alignItems="center" alignContent="center" spacing={4}>
          <Grid item>
            {errCode && (
              <Typography variant="h1" color="error">
                {errCode}
              </Typography>
            )}
          </Grid>
          <Grid item>
            <Typography variant="h3">{parsedErrMsg ? parsedErrMsg : <Skeleton variant="text" width={200} />}</Typography>
          </Grid>
          <Grid item>
            <a href={CONFIG.mainPageUrl}>
              <Button variant="outlined" color="primary">
                <FontAwesomeIcon icon={faArrowLeft} size="3x" />
              </Button>
            </a>
            {from && (
              <a href={from}>
                <Button variant="contained" color="primary">
                  <FontAwesomeIcon icon={faRedo} size="3x" />
                </Button>
              </a>
            )}
          </Grid>
        </Grid>
      </Pulldown>
    </Fragment>
  )
}

export default NotFound

function parseErrMsg (code: string) {
  return <Fragment>{httpStatus[code] ?? 'Nothing to see here...'}</Fragment>
}
