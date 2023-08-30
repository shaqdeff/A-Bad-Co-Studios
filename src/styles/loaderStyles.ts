import styled from "styled-components"
import { motion } from "framer-motion"

export const FullLoader = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${props => props.theme.background};
  z-index: 100;
  color: ${props => props.theme.text};
  font-size: 5rem;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  font-weight: 500;
  justify-content: center;
  pointer-events: none;
`

export const LoaderTitle = styled(motion.h1)``
