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
  Element,
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
                <Element>
                  <ThumbnailWrapper>
                    <ImageLink element={element} index={index} />
                  </ThumbnailWrapper>
                </Element>
              ))}
            </GridElements>
          </GridContent>
        )}

        {!gridVisible && (
          <ListContent>
            {mapData.map((element, index) => (
              <Element>
                <ImageLink element={element} index={index} />
              </Element>
            ))}
          </ListContent>
        )}
      </Content>
    </>
  )
}

export default GalleryContent
