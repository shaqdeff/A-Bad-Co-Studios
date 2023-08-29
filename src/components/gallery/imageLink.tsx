import React from "react"
import { DataType } from "./galleryContent"
import { GridItemMedia } from "../../styles"

type ImageProps = {
  element: DataType
  index: number
}

const ImageLink = ({ index, element }: ImageProps) => {
  return (
    <GridItemMedia>
      <img src={element.cover} />
    </GridItemMedia>
  )
}

export default ImageLink
