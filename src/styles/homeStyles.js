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
  display: none;
`

export const BannerTitle = styled.h1`
  position: absolute;
  bottom: -120px;
  left: -3px;
  color: ${props => props.theme.text};
  pointer-events: none;

  /* media queries */
  @media (max-width: 767px) {
    bottom: -55px;
  }

  @media (max-width: 350px) {
    bottom: -45px;
  }
`

export const Headline = styled.span`
  display: block;
  font-size: 20rem;
  font-weight: 900;
  line-height: 0.76;
  text-transform: uppercase;

  span {
    font-size: 12rem;
    color: ${props => props.theme.green};
    position: relative;
    right: 10px;
  }

  /* media queries */
  @media (max-width: 767px) {
    font-size: 6.8rem;
    line-height: 0.82;

    span {
      font-size: 3rem;
      display: none;
    }
  }

  @media (max-width: 350px) {
    font-size: 5rem;
    line-height: 0.82;

    span {
      display: none;
    }
  }
`
