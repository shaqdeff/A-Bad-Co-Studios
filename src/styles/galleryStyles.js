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
