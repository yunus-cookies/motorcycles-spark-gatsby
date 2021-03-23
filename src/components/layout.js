import * as React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"

import Nav from "./Nav"

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Cabin";
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
