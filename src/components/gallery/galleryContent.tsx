import React from "react"
import images from "../../data/images.js"

// components
import ImageLink from "./imageLink"
import Loader from "../loader/loader"

// styled components
import {
  Content,
  GridContent,
  ListContent,
  GridElements,
  ThumbnailWrapper,
} from "../../styles"
import { useAnimation } from "framer-motion"

export type DataType = {
  cover: string
  title: string
  slug: string
  color: string
}

const GalleryContent = ({ gridVisible }) => {
  const loaderControls = useAnimation()
  const mapData: DataType[] = Array.from(images)

  return (
    <>
      <Loader loaderControls={loaderControls} />
      <Content>
        {gridVisible && (
          <GridContent>
            <GridElements>
              {mapData.map((element, index) => (
                <div className="element">
                  <ThumbnailWrapper>
                    <ImageLink element={element} index={index} />
                  </ThumbnailWrapper>
                </div>
              ))}
            </GridElements>
          </GridContent>
        )}

        {!gridVisible && (
          <ListContent>
            {mapData.map((element, index) => (
              <div className="element">
                <ImageLink element={element} index={index} />
              </div>
            ))}
          </ListContent>
        )}
      </Content>
    </>
  )
}

export default GalleryContent
