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
  handleImageHover: (color: string) => void
  isGridContent: boolean
}

const ImageLink = ({
  index,
  element,
  handleImageHover,
  isGridContent,
}: ImageProps) => {
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
        whileHover={isGridContent ? { scale: 1.05 } : {}}
        onMouseEnter={
          isGridContent ? () => handleImageHover(element.color) : () => {}
        }
        onMouseLeave={isGridContent ? () => handleImageHover("") : () => {}}
      />
    </GridItemMedia>
  )
}

export default ImageLink
