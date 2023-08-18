import React, { useEffect, useRef, useState } from "react"

// hooks
import { useWindowSize } from "../../hooks"

// styled components
import {
  Dragger,
  Banner,
  Video,
  Canvas,
  BannerTitle,
  Headline,
} from "../../styles"

// context
import { useGlobalStateContext } from "../../context"

// assets
import { lights } from "../../assets"

const HomeBanner = ({ onCursor }) => {
  const size = useWindowSize()
  const { currentTheme } = useGlobalStateContext()
  const canvas = useRef(null)
  const dragger = useRef(null)
  const drawing = useRef(false)
  const lastX = useRef(0)
  const lastY = useRef(0)
  const lastPosition = useRef({ x: 0, y: 0 })

  const handleDraggerTouchStart = e => {
    e.preventDefault()
    drawing.current = true
    const touch = e.touches[0]
    const canvasRect = canvas.current.getBoundingClientRect()
    lastPosition.current = {
      x: touch.clientX - canvasRect.left,
      y: touch.clientY - canvasRect.top,
    }
  }

  const handleDraggerTouchMove = e => {
    if (!drawing.current) return

    const touch = e.touches[0]
    const currentX = touch.clientX - canvas.current.getBoundingClientRect().left
    const currentY = touch.clientY - canvas.current.getBoundingClientRect().top

    const drawingCtx = canvas.current.getContext("2d")

    requestAnimationFrame(() => {
      drawingCtx.lineJoin = "round"
      drawingCtx.globalCompositeOperation = "destination-out"
      drawingCtx.moveTo(lastPosition.current.x, lastPosition.current.y)
      drawingCtx.lineTo(currentX, currentY)
      drawingCtx.closePath()
      drawingCtx.lineWidth = 70
      drawingCtx.stroke()

      lastPosition.current = { x: currentX, y: currentY }

      dragger.current.style.left = `${currentX}px`
      dragger.current.style.top = `${currentY}px`
    })
  }

  const handleDraggerTouchEnd = () => {
    drawing.current = false
  }

  // Throttle the touchmove event handling
  const throttle = (func, delay) => {
    let timeoutId
    return (...args) => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          func(...args)
          timeoutId = null
        }, delay)
      }
    }
  }

  const handleTouchMoveThrottled = throttle(handleDraggerTouchMove, 4)

  useEffect(() => {
    const renderingElement = canvas.current
    const renderingCtx = renderingElement.getContext("2d")

    renderingCtx.clearRect(0, 0, size.width, size.height)
    renderingCtx.globalCompositeOperation = "source-over"
    renderingCtx.fillStyle = currentTheme === "dark" ? "#0a0a0a" : "#e0e0e0"
    renderingCtx.fillRect(0, 0, size.width, size.height)
    drawing.current = false

    const handleMouseOver = e => {
      drawing.current = true
      lastX.current = e.pageX - renderingElement.offsetLeft
      lastY.current = e.pageY - renderingElement.offsetTop
    }

    const handleMouseUp = () => {
      drawing.current = false
    }

    const handleMouseMoveEvent = e => {
      if (!drawing.current) return
      const currentX = e.pageX - renderingElement.offsetLeft
      const currentY = e.pageY - renderingElement.offsetTop
      const drawingCtx = renderingCtx
      drawingCtx.globalCompositeOperation = "destination-out"
      drawingCtx.lineJoin = "round"
      drawingCtx.moveTo(lastX.current, lastY.current)
      drawingCtx.lineTo(currentX, currentY)
      drawingCtx.closePath()
      drawingCtx.lineWidth = 120
      drawingCtx.stroke()
      lastX.current = currentX
      lastY.current = currentY
    }

    renderingElement.addEventListener("mouseover", handleMouseOver)
    renderingElement.addEventListener("mouseup", handleMouseUp)
    renderingElement.addEventListener("mousemove", handleMouseMoveEvent)
    dragger.current.addEventListener("touchstart", handleDraggerTouchStart)
    dragger.current.addEventListener("touchmove", handleTouchMoveThrottled)
    dragger.current.addEventListener("touchend", handleDraggerTouchEnd)

    return () => {
      renderingElement.removeEventListener("mouseover", handleMouseOver)
      renderingElement.removeEventListener("mouseup", handleMouseUp)
      renderingElement.removeEventListener("mousemove", handleMouseMoveEvent)
      dragger.current.removeEventListener("touchstart", handleDraggerTouchStart)
      dragger.current.removeEventListener("touchmove", handleTouchMoveThrottled)
      dragger.current.removeEventListener("touchend", handleDraggerTouchEnd)
    }
  }, [currentTheme, size.width, size.height])

  const parent = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const child = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  }

  return (
    <Banner>
      <Video>
        <video src={lights} height="100%" width="100%" loop autoPlay muted />
      </Video>

      <Dragger ref={dragger} onTouchStart={handleDraggerTouchStart}>
        Drag
      </Dragger>

      <Canvas
        height={size.height}
        width={size.width}
        ref={canvas}
        onMouseEnter={() => onCursor("hovered")}
        onMouseLeave={onCursor}
      />

      <BannerTitle variants={parent} initial="initial" animate="animate">
        <Headline variants={child}>Get</Headline>
        <Headline variants={child}>
          Scene<span>.</span>
        </Headline>
      </BannerTitle>
    </Banner>
  )
}

export default HomeBanner
