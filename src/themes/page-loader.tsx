import React, { Component, Fragment } from 'react'
import styled, { css } from 'styled-components'

const PageLoader: React.FC = () => {
  return (
    <Fragment>
      {/* Initial Page Loader */}
      <Loader>
        <div className="base">
          <div className="logo" />
          <div className="spinner">
            <div className="dot" />
            <div className="dots">
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
      </Loader>
      {/* END Initial Page Loader */}
    </Fragment>
  )
}

export default PageLoader

export const Loader = styled.div(
  () => css`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #121212;
    z-index: 9000;
    opacity: 0.9;
    backdrop-filter: blur(6px);

    .base {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .logo,
    .logo::before,
    .logo::after {
      position: relative;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    .logo {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin: auto;
      color: #242424;
      background: url('../assets/imgs/logo/logo.svg') no-repeat 50%/70% #121212;
      box-shadow: inset 0 0 0 2px #404040;
      transform: translate(0, -25%);
    }

    .logo svg {
      fill: #efefef;
    }

    .logo::before {
      content: '';
      box-sizing: border-box;
      position: absolute;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border-top: 2px solid #a0a0a0;
      border-right: 2px solid #a0a0a0;
      animation: logospinner 2.8s ease-in-out infinite;
    }

    @keyframes logospinner {
      25% {
        transform: rotate(-180deg);
      }

      55% {
        transform: rotate(-180deg);
      }

      72% {
        transform: rotate(-275deg);
      }
    }

    .spinner {
      margin: -20px 0 0 -71px;
      width: 142px;
      height: 40px;
      filter: contrast(5);
      -webkit-filter: contrast(5);
      -moz-filter: contrast(5);
      -o-filter: contrast(5);
      -ms-filter: contrast(5);
      z-index: 9025;
      transform: translate(50%, 0);
    }

    .dot {
      position: absolute;
      width: 16px;
      height: 16px;
      left: 15px;
      filter: blur(4px);
      -webkit-filter: blur(4px);
      -moz-filter: blur(4px);
      -o-filter: blur(4px);
      -ms-filter: blur(4px);
      background: #efefef;
      border-radius: 50%;
      transform: translateX(0);
      animation: dot 2.8s infinite;
    }

    .dots {
      transform: translateX(0);
      margin-top: 12px;
      margin-left: 31px;
      animation: dots 2.8s infinite;
    }

    .dots div {
      display: block;
      float: left;
      width: 16px;
      height: 16px;
      margin-left: 16px;
      filter: blur(4px);
      -webkit-filter: blur(4px);
      -moz-filter: blur(4px);
      -o-filter: blur(4px);
      -ms-filter: blur(4px);
      background: #efefef;
      border-radius: 50%;
    }

    @-moz-keyframes dot {
      50% {
        transform: translateX(96px);
      }
    }

    @-webkit-keyframes dot {
      50% {
        transform: translateX(96px);
      }
    }

    @-o-keyframes dot {
      50% {
        transform: translateX(96px);
      }
    }

    @keyframes dot {
      50% {
        transform: translateX(96px);
      }
    }

    @-moz-keyframes dots {
      50% {
        transform: translateX(-31px);
      }
    }

    @-webkit-keyframes dots {
      50% {
        transform: translateX(-31px);
      }
    }

    @-o-keyframes dots {
      50% {
        transform: translateX(-31px);
      }
    }

    @keyframes dots {
      50% {
        transform: translateX(-31px);
      }
    }
  `
)
