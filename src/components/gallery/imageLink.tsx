import React from "react"
import { motion } from "framer-motion"
import { navigate } from "gatsby"

// props
import { DataType } from "./galleryContent"

// styled components
import { GridItemMedia } from "../../styles"

// utils
import { defaultTransition } from "../../utils"

type ImageProps = {
  element: DataType
  index: number
}

const ImageLink = ({ index, element }: ImageProps) => {
  const navigateTo = () => {
    navigate(element.slug)
  }

  return (
    <GridItemMedia>
      <motion.img
        onClick={navigateTo}
        src={element.cover}
        layoutId={`container-${index}`}
        transition={defaultTransition}
      />
    </GridItemMedia>
  )
}

export default ImageLink
