import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

// components
import Switch from "./switch"

// styled components
import { Container, Flex, Logo, Menu, HeaderNav } from "../styles"

// images
import { lens, record } from "../images"

// context
import { useGlobalStateContext, useGlobalDispatchContext } from "../context"

const Header = ({ onCursor, setToggleMenu, toggleMenu }) => {
  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()

  const toggleTheme = () => {
    if (currentTheme === "light") {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" })
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "light" })
    }
  }

  const blinkingAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{
        duration: 1,
        delay: 0.7,
        ease: [0.6, 0.05, 0.01, 0.9],
      }}
    >
      <Container>
        <Flex spacebetween="true" noheight="true">
          <div className="logo-container">
            <Logo
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
            >
              <Link to="/">A BAD C</Link>
              <span
                onMouseEnter={() => onCursor("pointer")}
                onMouseLeave={onCursor}
              >
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

            <div
              className="bottom-logo"
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
            >
              <Link to="/" className="studios">
                STUDIOS
              </Link>

              <span>
                <motion.img
                  src={record}
                  alt="record"
                  className="record"
                  initial="hidden"
                  animate="visible"
                  variants={blinkingAnimation}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </span>
            </div>
          </div>

          <Menu
            onClick={() => setToggleMenu(!toggleMenu)}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
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
