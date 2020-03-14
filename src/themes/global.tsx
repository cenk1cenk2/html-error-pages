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
  body, #__next {
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
  font-style: normal;
  font-weight: 300;
  src: local('Lato Light'), local('Lato-Light'),
       url('/fonts/${font.path}-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/${font.path}-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
@font-face {
  font-family: ${font.name};
  font-style: normal;
  font-weight: 400;
  src: local('Lato Regular'), local('Lato-Regular'),
       url('/fonts/${font.path}-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/${font.path}-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
@font-face {
  font-family: ${font.name};
  font-style: italic;
  font-weight: 400;
  src: local('Lato Italic'), local('Lato-Italic'),
       url('/fonts/${font.path}-italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/${font.path}-italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
@font-face {
  font-family: ${font.name};
  font-style: normal;
  font-weight: 700;
  src: local('Lato Bold'), local('Lato-Bold'),
       url('/fonts/${font.path}-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/${font.path}-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
@font-face {
  font-family: ${font.name};
  font-style: normal;
  font-weight: 900;
  src: local('Lato Black'), local('Lato-Black'),
       url('/fonts/${font.path}-900.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/${font.path}-900.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
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
    font-size: 0.85em;
  }
  `
  return css`${o}`
}
