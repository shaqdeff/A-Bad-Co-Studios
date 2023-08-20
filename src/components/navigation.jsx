import React from "react"
import { Link } from "gatsby"

// styled components
import {
  Container,
  Flex,
  Nav,
  NavHeader,
  CloseNav,
  NavList,
  NavFooter,
} from "../styles"

// data
import { navRoutes } from "../data"

const Navigation = () => {
  return (
    <Nav>
      <Container>
        <NavHeader>
          <Flex spacebetween="true" noheight="true">
            <h2>Projects</h2>
            <CloseNav>
              <button>
                <span></span>
                <span></span>
              </button>
            </CloseNav>
          </Flex>
        </NavHeader>

        <NavList>
          <ul>
            {navRoutes.map(route => (
              <li key={route.id}>
                <Link to={`/projects/${route.path}`}>
                  <div className="link">
                    <span className="arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 101 57"
                      >
                        <path
                          d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                          fill="#FFF"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                      {route.title}
                    </span>
                  </div>
                </Link>
              </li>
            ))}

            <li>
              <Link to="/projects/gallery">
                <div className="link">
                  <span className="arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 101 57"
                    >
                      <path
                        d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                        fill="#FFF"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                    gallery
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </NavList>

        <NavFooter></NavFooter>
      </Container>
    </Nav>
  )
}

export default Navigation
