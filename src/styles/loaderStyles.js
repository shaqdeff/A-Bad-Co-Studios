import styled from "styled-components"
import { motion } from "framer-motion"

export const FullLoader = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${props => props.theme.background};
<<<<<<< HEAD:src/styles/loaderStyles.js
<<<<<<< HEAD:src/styles/loaderStyles.js
<<<<<<< HEAD
<<<<<<< HEAD:src/styles/loaderStyles.js
=======
  z-index: 1000;
>>>>>>> 89e7224 (Update cursor and loader styles):src/styles/loaderStyles.ts
=======
  z-index: 1000;
>>>>>>> ddcdf90 (Fix conflicts)
=======
  z-index: 1000;
>>>>>>> 89e7224 (Update cursor and loader styles):src/styles/loaderStyles.ts
=======
  z-index: 1000;
>>>>>>> 89e7224 (Update cursor and loader styles):src/styles/loaderStyles.ts
  color: ${props => props.theme.text};
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 500;
  text-transform: capitalize;
  justify-content: center;
  pointer-events: none;

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    top: 10px;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lens {
    height: 3.2rem;
    width: 3.2rem;
    margin: 0 2px;
    border-radius: 100%;
    display: inline-block;
    position: relative;
    bottom: -2px;
  }

  .bottom-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    position: relative;
    bottom: 25px;
    left: -2px;
  }

  .studios {
    font-size: 18px;
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
    bottom: 13px;
    right: 5px;
  }

  /* media queries */
  @media (max-width: 767px) {
    font-size: 1rem;

    .lens {
      height: 1.65rem;
      width: 1.65rem;
      margin: 0 1px;
      bottom: -1px;
    }

    .bottom-logo {
      bottom: 10px;
      left: 8px;
    }

    .studios {
      font-size: 12px;
    }

    .record {
      height: 1.2rem;
      width: 1.2rem;
      bottom: 2px;
      margin-right: 3px;
    }
  }
`

export const LoaderTitle = styled(motion.h1)``
