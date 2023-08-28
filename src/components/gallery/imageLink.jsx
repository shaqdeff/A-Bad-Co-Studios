import React from "react"
import { DataType } from "./galleryContent"

// styled components
import { GridItemMedia } from "../../styles"

type Props {
  element: DataType
  index: number;
}

const ImageLink:React.FC<Props> = ({index, element}: Props) => {
  return (
    <GridItemMedia>
      <img src={ element.cover} />
    </GridItemMedia>
  )
}

export default ImageLink
