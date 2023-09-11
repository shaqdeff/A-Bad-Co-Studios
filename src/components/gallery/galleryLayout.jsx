import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// styled components
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"

// context
import { useGlobalStateContext } from "../../context"

const GlobalStyle = createGlobalStyle`
${normalize}

* {
  text-decoration: none;
  cursor: none;
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

const GalleryLayout = ({ children }) => {
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
    text: "#f4f4f6",
    red: "#a30000",
    green: "#496f56",
  }

  const lightTheme = {
    background: "#f4f4f6",
    text: "#1f1f1f",
    red: "#a30000",
    green: "#496f56",
  }

  const { currentTheme } = useGlobalStateContext()

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <main>{children}</main>
    </ThemeProvider>
  )
}

GalleryLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GalleryLayout
