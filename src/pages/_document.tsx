import { Theme } from '@cenk1cenk2/react-template-base'
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/styles'
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import React, { Fragment } from 'react'
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components'

import PageLoader from '../themes/page-loader'
import '../polyfills'

export default class MyDocument extends Document<{ theme: Theme }> {
  static async getInitialProps (ctx: DocumentContext) {
    const styledComponentSheet = new StyledComponentSheets()
    const materialUiSheets = new MaterialUiServerStyleSheets()

    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => styledComponentSheet.collectStyles(materialUiSheets.collect(<App {...props} />)),
        enhanceComponent: (Component) => Component
      })

    try {
      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: [
          <Fragment key="styles">
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
          </Fragment>
        ]
      }
    } finally {
      styledComponentSheet.seal()
    }
  }

  render () {
    return (
      <Fragment>
        <Html lang="en">
          <Head>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" type="text/css" href="/styles/pageloader.css" />
            <meta name="description" content="kilic.dev!" />
            <meta name="author" content="cenk.kilic" />
            <meta name="description" content="Web site created using create-react-app" />
            <link rel="manifest" href="manifest.json" />
            <style
              dangerouslySetInnerHTML={{
                // eslint-disable-next-line @typescript-eslint/naming-convention
                __html: 'body{display:block}'
              }}
            />
          </Head>
          <body>
            <PageLoader />
            <Main />
            <NextScript />
          </body>
        </Html>
      </Fragment>
    )
  }
}
