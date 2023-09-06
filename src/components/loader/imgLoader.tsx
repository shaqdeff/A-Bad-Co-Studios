import React, { useEffect, useState } from "react"
import { AnimationControls, Variants } from "framer-motion"
import { useTheme } from "styled-components"

// styled components
import { FullLoader, LoaderTitle } from "../../styles"

// utils
import { defaultTransition } from "../../utils"

type ImgLoaderProps = {
  title: string
  color: string
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

const ImgLoader = ({ title, color, loaderControls }: ImgLoaderProps) => {
  const theme = useTheme()
  const [loaderColor, setLoaderColor] = useState("")

  useEffect(() => {
    setLoaderColor(color)
  }, [color])

  return (
    <>
      <FullLoader
        animate={loaderControls}
        style={{
          background: loaderColor ? loaderColor : theme.background,
        }}
      >
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

export default ImgLoader
