import { CssBaseline, StylesProvider, ThemeProvider } from '@material-ui/core'
import NextApp from 'next/app'
import React, { Fragment } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import '@src/themes/utils.scss'

import { ITheme } from '@src/interfaces/styles.interface'
import Theme, { GlobalStyles } from '@src/themes'

class MyApp extends NextApp<ITheme> {
  componentDidMount () {
    const jssStyles = document.querySelector('#jss-server-side')

    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Fragment>
        <StylesProvider injectFirst>
          <ThemeProvider theme={Theme}>
            <StyledThemeProvider theme={Theme}>
              <CssBaseline />
              <GlobalStyles theme={Theme} />
              <Component {...pageProps} />
            </StyledThemeProvider>
          </ThemeProvider>
        </StylesProvider>
      </Fragment>
    )
  }
}

export default MyApp