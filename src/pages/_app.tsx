import { AvailableDesigns, AvailablePalettes, generateTheme, GlobalStyles, Theme } from '@cenk1cenk2/react-template-base'
import { CssBaseline, StylesProvider, ThemeProvider } from '@material-ui/core'
import '@themes/utils.scss'
import { NextComponentType } from 'next'
import { AppContext, AppInitialProps, AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import React, { Fragment, useEffect } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')

    if (jssStyles?.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
    const progressOverlay = document.querySelector('#page-loader')

    if (progressOverlay?.parentNode) {
      progressOverlay.parentNode.removeChild(progressOverlay)
    }
  })

  const theme = generateTheme({ palette: AvailablePalettes.DARK, design: AvailableDesigns.DEFAULT })

  return (
    <Fragment>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles />
            <Component {...pageProps} />
          </StyledThemeProvider>
        </ThemeProvider>
      </StylesProvider>
    </Fragment>
  )
}

export default MyApp
