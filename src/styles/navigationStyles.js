import styled from "styled-components"
import { motion } from "framer-motion"

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: ${props => props.theme.green};
  color: #1f1f1f;
  z-index: 100;
  overflow: hidden;
`

export const NavHeader = styled.div`
  top: 72px;
  position: relative;

  h2 {
    color: ${props => props.theme.background};
  }

  /* media queries */
  @media (max-width: 767px) {
    top: 52px;
  }
`

export const CloseNav = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;

    span {
      width: 36px;
      height: 8px;
      display: block;
      background: ${props => props.theme.background};
      margin: 8px;
    }
  }
`

export const NavList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  ul {
    padding: 0;

    /* media queries */
    @media (max-width: 767px) {
      position: absolute;
      top: 76px;
    }

    li {
      list-style: none;
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 900;
      height: 96px;
      line-height: 96px;
      overflow: hidden;

      /* media queries */
      @media (max-width: 767px) {
        height: 54px;
        line-height: 54px;
      }

      .link {
        color: ${props => props.theme.background};
        position: relative;
        display: flex;
        align-items: center;
        &:hover {
          color: ${props => props.theme.text};
        }

        .arrow {
          height: 76px;
          margin-right: 20px;
          display: flex;
          align-items: center;
          gap: 10px;

          svg {
            width: 100px;
            path {
              fill: ${props => props.theme.text};
            }
          }
        }
      }

      /* media queries */
      @media (max-width: 767px) {
        .link {
          font-size: 1.6rem;
          left: 120px;
        }

        svg {
          display: none;
        }
      }
    }
  }
`

export const NavFooter = styled.div``

export const NavVideos = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 28%;
  z-index: -1;
  height: 100%;
  width: 100%;
  background: #0a0a0a;

  .reveal {
    width: 100%;
    background: ${props => props.theme.green};
    position: absolute;
    top: 0;
    bottom: 0;
    left: -10px;
  }

  .video {
    background: #0a0a0a;
    position: absolute;
    height: 100%;
    width: 100%;
    margin: 0;
    z-index: -1;

    video {
      height: 100%;
    }
  }

  /* media queries */
  @media (max-width: 767px) {
    display: none;
  }
`
