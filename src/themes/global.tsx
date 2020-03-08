
import { createGlobalStyle, css, DefaultTheme } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
${({ theme }) => `
${body(theme)}
${fonts(theme)}
${headings(theme)}
${textColor(theme)}
${icons(theme)}
`}
`

function body (theme: DefaultTheme) {
  const o = `
  body {
    overflow-x: hidden;
    height: 100%;
    width: 100%;
    margin: 0;
  }
  `
  return css`${o}`
}

function fonts (theme: DefaultTheme) {
  const o = Object.values(theme.text.font).reduce((o, font) => {
    o += `
      @font-face {
        font-family: ${font.name};
        src: url('/fonts/${font.path}');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
      `
    return o
  }, '')
  return css`${o}`
}

function headings (theme: DefaultTheme) {
  const o = Object.entries(theme.text.typography.heading).reduce((o, [ name, value ]) => {
    o += `
    ${name},
    .${name} {
      font-size: ${value.fontSize};
      margin: 0;
      font-family: ${theme.text.font.heading.name};
      font-weight: ${theme.text.settings.heading.fontWeight};
      line-height: ${theme.text.settings.heading.lineHeight};
      color: ${theme.text.settings.heading.color};

      small,
      .small {
        font-size: 85%;
        color: ${theme.text.settings.heading.smallColor};
      }

    }
    `
    return o
  }, '')
  return o
}

function textColor (theme: DefaultTheme) {
  const o = Object.entries(theme.colors).reduce((o, [ name, value ]) => {
    o += `
    .text-${name} {
      color: ${value};
    }
    `
    return o
  }, '')
  return css`${o}`
}

function icons (theme: DefaultTheme) {
  const o = `
  .svg-inline--fa {
    font-size: 0.75em;
  }
  `
  return css`${o}`
}
