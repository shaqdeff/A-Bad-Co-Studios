import { AnimationControls, Variants } from "framer-motion"
import React from "react"

// styled components
import { FullLoader, LoaderTitle } from "../../styles"

// utils
import { defaultTransition } from "../../utils"

type LoaderProps = {
  title: string
  loaderControls: AnimationControls
}

// animation
const variants: Variants = {
  initial: {
    y: 50,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
  },
}

const Loader = ({ title, loaderControls }: LoaderProps) => {
  return (
    <>
      <FullLoader animate={loaderControls}>
        <LoaderTitle
          variants={variants}
          initial={"initial"}
          animate={"animate"}
          transition={defaultTransition}
        >
          {title}
        </LoaderTitle>
      </FullLoader>
    </>
  )
}

export default Loader
