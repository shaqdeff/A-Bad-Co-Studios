import React from "react"
import { Link } from "gatsby"

// components
import Switch from "./switch"

// styled components
import { Container, Flex, Logo, Menu, HeaderNav } from "../styles"

// images
import { lens } from "../images"

// context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

const Header = () => {
  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()

  const toggleTheme = () => {
    if (currentTheme === "light") {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" })
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "light" })
    }
  }

  return (
    <HeaderNav>
      <Container>
        <Flex spaceBetween noHeight>
          <div className="logo-container">
            <Logo>
              <Link to="/">A BAD C</Link>
              <span>
                <Link to="/">
                  <img
                    src={lens}
                    alt="lens"
                    className="lens"
                    // onClick={toggleTheme}
                  />
                </Link>
              </span>
            </Logo>

            <Link to="/" className="studios">
              STUDIOS
            </Link>
          </div>

          <Menu>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>

        <div className="switch-box">
          <Switch />
        </div>
      </Container>
    </HeaderNav>
  )
}

export default Header
