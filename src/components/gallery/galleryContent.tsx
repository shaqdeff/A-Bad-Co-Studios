import React, { useState } from "react"
import { images } from "../../data"

// components
import ImageLink from "./imageLink"

// styled components
import {
  Content,
  GridContent,
  ListContent,
  GridElements,
  GridElement,
  ThumbnailWrapper,
} from "../../styles"

export type DataType = {
  cover: string
  title: string
  slug: string
  color: string
}

const GalleryContent = () => {
  const [gridVisible, setGridVisible] = useState(true)
  const mapData: DataType[] = Array.from(images)

  return (
    <>
      <Content>
        {gridVisible && (
          <GridContent>
            <GridElements>
              {mapData.map((element, index) => (
                <GridElement>
                  <ThumbnailWrapper>
                    <ImageLink element={element} index={index} />
                  </ThumbnailWrapper>
                </GridElement>
              ))}
            </GridElements>
          </GridContent>
        )}

        {!gridVisible && (
          <ListContent>
            {mapData.map((element, index) => (
              <GridElement>
                <ThumbnailWrapper>
                  <ImageLink element={element} index={index} />
                </ThumbnailWrapper>
              </GridElement>
            ))}
          </ListContent>
        )}
      </Content>
    </>
  )
}

export default GalleryContent
