import styled from "styled-components"
import { motion } from "framer-motion"

export const Content = styled(motion.div)`
  position: relative;
  width: 100vw;
  height: 100vh;

  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  /* content-visibility: auto; */
`

export const GridContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 2310px;
  height: 1450px;
  top: calc(((1vh * 100) - 1900px) / 2);
  left: calc((100vw - 2200px) / 2);

  /* media queries */
  @media (max-width: 767px) {
    top: calc(((1vh * 100) - 1850px) / 2);
    left: calc((100vw - 2240px) / 2);
  }
`

export const GridElements = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(5, 420px);

  .element {
    padding: 32px 40px;
  }

  /* media queries */
  @media (max-width: 767px) {
    grid-template-columns: repeat(5, 200px);

    .element {
      padding: 24px 0;
    }
  }
`

export const ThumbnailWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`

export const ListContent = styled(motion.div)`
  overflow: auto hidden;
  height: 100vh;

  display: grid;
  grid-template-columns: repeat(25, 1fr);
  align-items: center;

  .element {
    width: 65vmin;
    height: 65vmin;
    margin: 0 5vw;
    margin-top: 3rem;
  }

  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
`

export const ContentDragger = styled.div`
  background: ${props => props.theme.text};
  position: absolute;
  top: 0;
  left: 13.4%;
  width: 2px;
  height: 100%;
  z-index: -10;
`

export const CircularShape = styled.div`
  position: absolute;
  width: 28px;
  height: 28px;
  background: ${props => props.theme.background};
  border: 1.5px solid ${props => props.theme.text};
  border-radius: 50%;
  top: 12%;
  left: 13.5%;
  transform: translateY(-50%);
  transform: translateX(-50%);
  z-index: -10;
`

export const GridItemMedia = styled.div`
  img {
    width: 65%;
    height: 65%;
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

      .toggle-icon {
        color: ${props => props.theme.text};
      }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      border: 2px solid ${props => props.theme.background};

      .toggle-icon {
        color: ${props => props.theme.text};
      }
    }
  }

  /* media queries */
  @media (max-width: 767px) {
    background: ${props => props.theme.background};
    margin-bottom: -5.5rem;
    margin-left: -2rem;
    border-radius: 4px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    background: ${props => props.theme.background};
    margin-bottom: -6rem;
    margin-left: -2.3rem;
    border-radius: 5px;
  }
`
