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

const GalleryContent = ({
  gridVisible,
  updateGridVisible,
}: {
  gridVisible: boolean
  updateGridVisible: () => void
}) => {
  const loaderControls = useAnimation()
  const animation = useAnimation()
  const mapData: DataType[] = Array.from(images)

  const gridRef = useRef<HTMLDivElement | null>(null)
  const listContentRef = useRef<HTMLDivElement | null>(null)
  const draggerRef = useRef<HTMLDivElement | null>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  let scrollPercent = 0
  let newScrollPosition = 0

  const theme = useTheme()
  const [hoveredColor, setHoveredColor] = useState("")
  const [imagesLoaded, setImagesLoaded] = useState(false)

  const handleImageHover = (color: React.SetStateAction<string>) => {
    setHoveredColor(color)
  }

  // Preload images
  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = mapData.map(element => {
        return new Promise(resolve => {
          const img = new Image()
          img.src = element.cover
          img.onload = resolve
          img.onerror = resolve
        })
      })

      Promise.all(imagePromises).then(() => {
        setImagesLoaded(true)
      })
    }

    preloadImages()
  }, [])

  // animation sequence
  useEffect(() => {
    const sequence = async () => {
      await new Promise(resolve => setTimeout(resolve, 100))

      await animation.set(index => ({
        y: gridUtils[index % 5],
        scale: 1.05,
      }))

      await animation.start(() => ({
        y: 0,
        transition: defaultTransition,
      }))

      await animation.start(() => ({
        scale: 0.95,
        transition: defaultTransition,
      }))

      updateGridVisible(false)
    }

    if (imagesLoaded) {
      loaderControls.start({
        opacity: 0,
        transition: { defaultTransition },
      })

      sequence()
    }

    return () => {
      loaderControls.stop()
    }
  }, [imagesLoaded, loaderControls])

  // horizontal scroll
  useEffect(() => {
    const listContent = listContentRef.current
    const dragger = draggerRef.current

    const handleScroll = (event: {
      deltaY: number
      preventDefault: () => void
    }) => {
      if (!gridVisible && listContent) {
        const listWidth = listContent.scrollWidth
        const draggerWidth = dragger ? dragger.offsetWidth : 0
        const maxScroll = listWidth - draggerWidth
        const scrollAmount = event.deltaY * 0.5

        listContent.scrollLeft += scrollAmount
        newScrollPosition = listContent.scrollLeft

        const minScrollPosition = (2 * listWidth) / 100
        const maxScrollPosition = maxScroll

        if (newScrollPosition < minScrollPosition) {
          newScrollPosition = minScrollPosition
        } else if (newScrollPosition > maxScrollPosition) {
          newScrollPosition = maxScrollPosition
        }

        scrollPercent = (newScrollPosition / maxScroll) * 100

        if (dragger) {
          dragger.style.left = `${scrollPercent}%`
        }

        event.preventDefault()
      }
    }

    const initializeScrollPosition = () => {
      if (listContent && dragger) {
        const listWidth = listContent.scrollWidth

        const initialScrollPercent = Math.max(45, 0)
        const initialScrollPosition = (initialScrollPercent * listWidth) / 100

        const scrollDistance = initialScrollPosition - listContent.scrollLeft

        // Set up a scroll animation
        const animationDuration = 1.5
        const animationFrames = 60
        const scrollStep =
          scrollDistance / (animationDuration * animationFrames)
        let currentScroll = listContent.scrollLeft

        const scrollAnimation = () => {
          if (
            (scrollDistance > 0 && currentScroll < initialScrollPosition) ||
            (scrollDistance < 0 && currentScroll > initialScrollPosition)
          ) {
            currentScroll += scrollStep
            listContent.scrollLeft = currentScroll
            requestAnimationFrame(scrollAnimation)
          } else {
            listContent.scrollLeft = initialScrollPosition
          }
        }

        // Start the scroll animation
        scrollAnimation()

        dragger.style.left = `${initialScrollPercent}%`
        scrollPercent = initialScrollPercent
      }
    }

    initializeScrollPosition()

    window.addEventListener("wheel", handleScroll)

    return () => {
      window.removeEventListener("wheel", handleScroll)
    }
  }, [gridVisible])

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
      {imagesLoaded && (
        <Content
          style={{
            backgroundColor: hoveredColor ? hoveredColor : theme.background,
            zIndex: 1,
          }}
        >
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
                    <ThumbnailWrapper
                      transition={{
                        delay: 0.5,
                      }}
                    >
                      <div>
                        <ImageLink
                          element={element}
                          index={index}
                          handleImageHover={handleImageHover}
                          isGridContent={true}
                        />
                      </div>
                    </ThumbnailWrapper>
                  </motion.div>
                ))}
              </GridElements>
            </GridContent>
          )}

          {!gridVisible && (
            <>
              <ContentDragger ref={draggerRef}>
                <CircularShape
                  style={{
                    background: hoveredColor ? hoveredColor : theme.background,
                  }}
                />
              </ContentDragger>
              <ListContent ref={listContentRef}>
                {mapData.map((element, index) => (
                  <motion.div className="element">
                    <ImageLink
                      element={element}
                      index={index}
                      handleImageHover={handleImageHover}
                      isGridContent={false}
                    />
                  </motion.div>
                ))}
              </ListContent>
            </>
          )}
        </Content>
      )}
    </>
  )
}

export default GalleryContent
