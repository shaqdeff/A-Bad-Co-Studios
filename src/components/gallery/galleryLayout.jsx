import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// components
import GalleryHeader from "./galleryHeader"
import CustomCursor from "../customCursor"
import Navigation from "../navigation"

// styled components
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"

// context
import { useGlobalDispatchContext, useGlobalStateContext } from "../../context"

const GlobalStyle = createGlobalStyle`
${normalize}

* {
  text-decoration: none;
  ${"" /* cursor: none;  */}
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
    text: "#fdfbed",
    red: "#a30000",
    green: "#496f56",
  }

  const lightTheme = {
    background: "#fdfbed",
    text: "#1f1f1f",
    red: "#a30000",
    green: "#496f56",
  }

  const { currentTheme, cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <CustomCursor toggleMenu={toggleMenu} />
      <GalleryHeader
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <Navigation
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        onCursor={onCursor}
      />
      <main>{children}</main>
    </ThemeProvider>
  )
}

GalleryLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GalleryLayout
