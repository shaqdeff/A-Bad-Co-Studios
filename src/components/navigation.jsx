import React, { useState } from "react"
import { Link } from "gatsby"
import { AnimatePresence, motion } from "framer-motion"

// styled components
import {
  Container,
  Flex,
  Nav,
  NavHeader,
  CloseNav,
  NavList,
  NavFooter,
  NavVideos,
} from "../styles"

// data
import { navRoutes } from "../data"

// assets
import { beginnings, next, lights, colorist, wild } from "../assets"

const Navigation = ({ toggleMenu, setToggleMenu, onCursor }) => {
  const [revealVideo, setRevealVideo] = useState({
    show: false,
    video: beginnings,
    key: "0",
  })

  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ x: toggleMenu ? 0 : "100%" }}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, 0.01, 0.9],
            }}
          >
            <Container>
              <NavHeader>
                <Flex spacebetween="true" noheight="true">
                  <h2>Projects</h2>

                  <CloseNav
                    onClick={() => setToggleMenu(!toggleMenu)}
                    onMouseEnter={() => onCursor("pointer")}
                    onMouseLeave={onCursor}
                  >
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
                    <motion.li key={route.id}>
                      <Link to={`/projects${route.path}`}>
                        <motion.div
                          initial={{ x: -108 }}
                          whileHover={{
                            x: -40,
                            transition: {
                              duration: 0.4,
                              ease: [0.6, 0.05, 0.01, 0.9],
                            },
                          }}
                          className="link"
                          onHoverStart={() =>
                            setRevealVideo({
                              show: true,
                              video: route.video,
                              key: route.id,
                            })
                          }
                          onHoverEnd={() =>
                            setRevealVideo({
                              show: false,
                              video: route.video,
                              key: route.id,
                            })
                          }
                          onMouseEnter={() => onCursor("pointer")}
                          onMouseLeave={onCursor}
                        >
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
                        </motion.div>
                      </Link>
                    </motion.li>
                  ))}

                  <li>
                    <Link to="/projects/gallery">
                      <motion.div
                        initial={{ x: -108 }}
                        whileHover={{
                          x: -40,
                          transition: {
                            duration: 0.4,
                            ease: [0.6, 0.05, 0.01, 0.9],
                          },
                        }}
                        className="link"
                        onMouseEnter={() => onCursor("pointer")}
                        onMouseLeave={onCursor}
                      >
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
                      </motion.div>
                    </Link>
                  </li>
                </ul>
              </NavList>

              <NavFooter></NavFooter>

              <NavVideos>
                <motion.div
                  animate={{ width: revealVideo.show ? 0 : "100%" }}
                  className="reveal"
                ></motion.div>

                <div className="video">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.video
                      key={revealVideo.key}
                      src={revealVideo.video}
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                      }}
                      autoPlay
                      muted
                      loop
                    ></motion.video>
                  </AnimatePresence>
                </div>
              </NavVideos>
            </Container>
          </Nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
