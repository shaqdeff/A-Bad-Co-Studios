import React from "react"
import { motion } from "framer-motion"
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
  return (
    <GridItemMedia>
      <motion.img
        src={element.cover}
        layoutId={`container-${index}`}
        transition={defaultTransition}
      />
    </GridItemMedia>
  )
}

export default ImageLink
