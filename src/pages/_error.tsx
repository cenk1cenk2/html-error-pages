import NextError from 'next/error'
import Router from 'next/router'

import { ITheme } from '@src/interfaces/styles.interface'

class Error extends NextError<ITheme> {

  componentDidMount () {
    Router.push('/')
  }

}

export default Error