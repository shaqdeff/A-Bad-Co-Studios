import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;

  /* media queries */
  @media (min-width: 1024px) {
    max-width: 960px;
  }

  @media (min-width: 1216px) {
    max-width: 1152px;
  }

  @media (min-width: 1408px) {
    max-width: 1244px;
  }

  ${props =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100%;
    `}
`

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${props =>
    props.spacebetween &&
    css`
      justify-content: space-between;
    `}

  ${props =>
    props.flexend &&
    css`
      justify-content: flex-end;
    `}

${props =>
    props.aligntop &&
    css`
      justify-content: flex-start;
    `}

${props =>
    props.noheight &&
    css`
      height: 0;
    `}

    .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    top: 10px;
  }

  .bottom-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    position: relative;
    bottom: 5px;
    left: 5px;
  }

  .studios {
    font-size: 12px;
    width: 100%;
    text-align: center;
    font-weight: bold;
    margin-right: 10px;
    color: ${props => props.theme.text};
  }

  .record {
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 3px;
    border-radius: 100%;
    display: inline-block;
    position: relative;
    bottom: -1.5px;
    right: 8px;
  }

  /* media queries */
  @media (max-width: 767px) {
    .bottom-logo {
      bottom: 6px;
      left: 7px;
    }

    .studios {
      font-size: 11px;
    }

    .record {
      height: 1.2rem;
      width: 1.2rem;
      margin-right: 3px;
    }
  }
`
export const Cursor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 22px;
  height: 22px;
  background: ${props => props.theme.red};
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-in-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;

  &.pointer {
    border: 5px solid ${props => props.theme.text} !important;
  }

  &.ring {
    border: 5px solid ${props => props.theme.green} !important;
  }

  &.hovered {
    background: transparent !important;
    width: 45px;
    height: 45px;
    border: 5px solid ${props => props.theme.red};
  }

  &.drawing {
    border: 5px solid ${props => props.theme.green};
    mix-blend-mode: difference;
  }

  &.nav-open {
    background: ${props => props.theme.text};
  }

  /* media queries */
  @media (max-width: 767px) {
    display: none;
  }
`

export const Dragger = styled(motion.div)`
  display: block;
  position: absolute;
  top: 60%;
  left: 70%;
  width: 62px;
  height: 62px;
  background: transparent;
  color: ${props => props.theme.green};
  border: 6px solid ${props => props.theme.green};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  font-weight: 800;
  text-align: center;
  z-index: 999;

  span {
    transform: rotate(33deg);
  }

  @media (min-width: 768px) {
    display: none;
  }
`
