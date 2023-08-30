import styled from "styled-components"
import { motion } from "framer-motion"

export const Content = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  overflow-x: hidden;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  /* content-visibility: auto; */
`

export const GridContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 2110px;
  height: 1600px;
  top: calc(((1vh * 100) - 1600px) / 2);
  left: calc((100vw - 2110px) / 2);
`

export const GridElements = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 420px);

  .element {
    padding: 32px 46px;
  }
`

export const ThumbnailWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`

export const ListContent = styled.div`
  overflow: auto hidden;
  height: 100vh;

  display: grid;
  grid-template-columns: repeat(25, 1fr);
  align-items: center;

  .element {
    width: 70vmin;
    height: 70vmin;
    margin: 0 5vw;
  }
`

export const GridItemMedia = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
export const ViewSwitch = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
  margin-left: -0.2rem;
  z-index: 25;

  button {
    padding: 2px;
    background: none;
    box-shadow: none;

    display: flex;
    border: none;
    border-radius: 5px;

    .toggle-icon {
      color: ${props => props.theme.text};
    }

    /* media queries */
    @media (max-width: 767px) {
      padding: 0;
      border: none;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      border: 2px solid ${props => props.theme.text};
    }
  }

  /* media queries */
  @media (max-width: 767px) {
    margin-bottom: -5.5rem;
    margin-left: -2rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-bottom: -6.6rem;
    margin-left: -2.3rem;
    background: ${props => props.theme.background};
    border-radius: 5px;
  }
`
