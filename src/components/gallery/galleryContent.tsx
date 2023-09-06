import React, { useEffect } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"
import { useTheme } from "styled-components"

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

// data
import images from "../../data/images.js"

// utils
import { defaultTransition } from "../../utils"

export type DataType = {
  cover: string
  title: string
  slug: string
  color: string
}

const gridUtils = [600, 400, 600, 800, 600]

const GalleryContent = ({ gridVisible, updateGridVisible }) => {
  const loaderControls = useAnimation()
  const animation = useAnimation()
  const mapData: DataType[] = Array.from(images)

  const theme = useTheme()
  const bgColor = useMotionValue(theme.text)

  useEffect(() => {
    const sequence = async () => {
      await animation.set(index => ({
        y: gridUtils[index % 5],
        scale: 1.05,
      }))

      await animation.start(() => ({
        y: 0,
        transition: defaultTransition,
      }))

      bgColor.set(theme.background)

      await animation.start(() => ({
        scale: 0.95,
        transition: defaultTransition,
      }))

      updateGridVisible(false)
    }

    const timeoutId = setTimeout(() => {
      loaderControls.start({
        opacity: 0,
        transition: { defaultTransition },
      })

      sequence()
    }, 2500)

    return () => {
      clearTimeout(timeoutId)
      loaderControls.stop()
    }
  }, [])

  return (
    <>
      <Loader loaderControls={loaderControls} />
      <Content theme={theme}>
        {gridVisible && (
          <GridContent>
            <GridElements>
              {mapData.map((element, index) => (
                <motion.div
                  className="element"
                  key={element.slug}
                  animate={animation}
                  custom={index}
                >
                  <ThumbnailWrapper>
                    <ImageLink element={element} index={index} />
                  </ThumbnailWrapper>
                </motion.div>
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
