import { Component, Fragment } from 'react'

import { Pulldown } from '@src/components/pulldown'

export default class Root extends Component {
  render () {
    return (
      <Fragment>
        <Pulldown>
          <h1 className="push-20 text-error">404</h1>
          <h4>Can not be found</h4>
        </Pulldown>
      </Fragment>
    )
  }
}
