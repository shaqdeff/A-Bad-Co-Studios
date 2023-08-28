import React, { useRef, useState } from "react"
import jsonData from "../../data/images.json"

// components
import ImageLink from "./imageLink"

// styled components
import { Content, GridContent, ListContent, GridElements, GridElement, ThumbnailWrapper } from "../../styles"

export type DataType = {
  cover: string
  title: string
  color: string
  slug: string
}

type ComponentProps = {
  data: DataType
}

const GalleryContent: React.FC<ComponentProps> = ({ data }) => {
  const [gridVisible, setGridVisible] = useState(true)
  const mapData: DataType[] = jsonData;
  
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
