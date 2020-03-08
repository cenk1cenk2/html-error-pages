
import { createGlobalStyle, css } from 'styled-components'

export const GlobalUtils = createGlobalStyle`
${({ theme }) => `
${push()}
${remove()}
${align()}
${fontWeight()}
`}
`

function push () {
  let o = ''
  for (let i = 5; i < 300; i += 5) {
    o += `
    .push-${i} {
      margin-bottom: ${i}px !important;

      &-t {
      margin-top: ${i}px !important;
      }

      &-r {
        margin-right: ${i}px !important;
      }

      &-l {
        margin-left: ${i}px !important;
      }
    }
    `
  }
  return css`${o}`
}

function remove () {
  const o = `
    .remove-margin {
    margin: 0 !important;

    &-t {
      margin-top: 0 !important;
    }

    &-r {
      margin-right: 0 !important;
    }

    &-b {
      margin-bottom: 0 !important;
    }

    &-l {
      margin-left: 0 !important;
    }
  }

  .remove-padding {
    padding: 0 !important;

    &-t {
      padding-top: 0 !important;
    }

    &-r {
      padding-right: 0 !important;
    }

    &-b {
      padding-bottom: 0 !important;
    }

    &-l {
      padding-left: 0 !important;
    }
  }
`
  return css`${o}`
}

function align () {
  const o = `
  .pull {
    &-right {
      float: right;
    }

    &-left {
      float: left;
    }
  }

  .text {
    &-left {
      text-align: left;
    }

    &-right {
      text-align: right;
    }

    &-center {
      text-align: center;
    }
  }
  `
  return css`${o}`
}

function fontWeight () {
  let o = ''
  for (let i = 300; i < 900; i += 100) {
    o += `
    .font-w${i} {
      font-weight: ${i};
    }
    `
  }
  return css`${o}`
}
