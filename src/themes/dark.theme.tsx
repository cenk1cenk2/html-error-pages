import { createMuiTheme } from '@material-ui/core/styles'
import { ITheme } from 'interfaces/styles.interface'

import { text } from './default.text'

const colors = {
  primary: '#f02424',
  secondary: '#f01520',
  success: '#46c37b',
  warning: '#f3b760',
  error: '#d26a5c',
  text: '#efefef',
  muted: '#777777',
  logo: '#f02424'
}

const template = {
  body: {
    0: '#121212',
    1: '#1c1c1c',
    2: '#282828'
  }
}

const muiTheme = createMuiTheme({
  spacing: 2,
  palette: {
    type: 'dark',
    background: {
      default: template.body[0],
      paper: template.body[1]
    },
    text: {
      primary: colors.text
    },
    primary: {
      main: colors.primary
    },
    secondary: {
      main: colors.secondary
    },
    success: {
      main: colors.success
    },
    warning: {
      main: colors.warning
    },
    error: {
      main: colors.error
    }
  },
  typography: {
    fontFamily: text.font.default.name,
    fontSize: text.settings.options.fontSize
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          {
            fontFamily: text.font.default.name,
            fontStyle: 'normal',
            fontDisplay: 'swap',
            fontWeight: 400,
            src: `url('/fonts/${text.font.default.path}')`
          }
        ]
      }
    }
  },
  shape: {
    borderRadius: 0
  }
})

export const darkTheme: ITheme = {
  colors,
  text,
  template,
  ...muiTheme
}
