import { NextPageContext } from 'next'
import NextError from 'next/error'

import {Pulldown} from '@src/components/pulldown/pulldown'
import { ITheme } from '@src/interfaces/styles.interface'

export default class Error extends NextError<ITheme> {

  static async getInitialProps ({ res, err }: NextPageContext) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }

  render () {
    const { statusCode} = this.props
    return (
      <Pulldown>
        <p>
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </p>
      </Pulldown>
    )
  }
}
