import styled from "styled-components"
import { motion } from "framer-motion"

export const Banner = styled.div`
  background: ${props => props.theme.background};
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 296px;
`

export const Video = styled.div`
  height: 100%;
  width: 100%;

  video {
    object-fit: cover;
  }
`

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: block;
`

export const BannerTitle = styled.h1`
  position: absolute;
  bottom: -120px;
  left: -3px;
  color: ${props => props.theme.text};
  pointer-events: none;

  /* media queries */
  @media (max-width: 767px) {
    bottom: -58px;
  }
`

export const Headline = styled.span`
  display: block;
  font-size: 20rem;
  font-weight: 900;
  line-height: 0.76;
  text-transform: uppercase;

  span {
    font-size: 17rem;
    color: ${props => props.theme.red};
  }

  /* media queries */
  @media (max-width: 767px) {
    font-size: 7.65rem;
    line-height: 0.82;

    span {
      font-size: 5rem;
      position: relative;
      right: 15px;
    }
  }
`
