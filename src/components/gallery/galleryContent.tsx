import React, { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useMotionValue, useSpring } from "framer-motion"
import { useTheme } from "styled-components"

// components
import ImageLink from "./imageLink"
import Loader from "../loader/loader"

// styled components
import {
  Content,
  GridContent,
  ListContent,
  ContentDragger,
  CircularShape,
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

  const gridRef = useRef<HTMLDivElement | null>(null)
  const listContentRef = useRef<HTMLDivElement | null>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // horizontal scroll
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (!gridVisible && listContentRef.current) {
        const scrollAmount = event.deltaY * 0.5
        listContentRef.current.scrollLeft += scrollAmount
        event.preventDefault()
      }
    }

    if (!gridVisible) {
      window.addEventListener("wheel", handleScroll)
    }

    return () => {
      window.removeEventListener("wheel", handleScroll)
    }
  }, [gridVisible])

  // animation sequence
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

  // parallax effect
  const handleGridParallax = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (gridRef.current) {
      const speed = -10
      const { width, height } = gridRef.current.getBoundingClientRect()
      const offsetX = event.pageX - width * 0.5
      const offsetY = event.pageY - height * 0.5

      const newTransformX = (offsetX * speed) / 100
      const newTransformY = (offsetY * speed) / 30

      x.set(newTransformX)
      y.set(newTransformY)
    }
  }

  const xMotion = useSpring(x, { stiffness: 400, damping: 90 })
  const yMotion = useSpring(y, { stiffness: 400, damping: 90 })

  return (
    <>
      <Loader loaderControls={loaderControls} />
      <Content theme={theme}>
        {gridVisible && (
          <GridContent>
            <GridElements
              onMouseMove={handleGridParallax}
              ref={gridRef}
              transition={defaultTransition}
              style={{
                x: xMotion,
                y: yMotion,
              }}
            >
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
          <>
            <ContentDragger />
            <CircularShape />
            <ListContent ref={listContentRef}>
              {mapData.map((element, index) => (
                <div className="element">
                  <ImageLink element={element} index={index} />
                </div>
              ))}
            </ListContent>
          </>
        )}
      </Content>
    </>
  )
}

export default GalleryContent
