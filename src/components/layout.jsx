import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// components
import Header from "./header"

// styled components
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"

// context
import { useGlobalStateContext } from "../context/globalContext"

const GlobalStyle = createGlobalStyle`
${normalize}

* {
  text-decoration: none;
  /* cursor: none; */
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
}

body {
  font-family:  -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: ${props => props.theme.background};
  overscroll-behavior: none;
  overflow-x: hidden;
}

`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const darkTheme = {
    background: "#0a0a0a",
    text: "#ebebeb",
    red: "#a30000",
  }

  const lightTheme = {
    background: "#e0e0e0",
    text: "#1f1f1f",
    red: "#a30000",
  }

  const { currentTheme } = useGlobalStateContext()

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
