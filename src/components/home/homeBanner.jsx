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
  const drawing = useRef(false)
  const lastX = useRef(0)
  const lastY = useRef(0)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  const handleTouchStart = e => {
    drawing.current = true
    const touch = e.touches[0]
    lastX.current = touch.pageX - canvas.current.getBoundingClientRect().left
    lastY.current = touch.pageY - canvas.current.getBoundingClientRect().top
  }

  const handleTouchMove = e => {
    if (!drawing.current) return
    const touch = e.touches[0]
    const currentX = touch.pageX - canvas.current.getBoundingClientRect().left
    const currentY = touch.pageY - canvas.current.getBoundingClientRect().top
    setCursorPosition({ x: currentX, y: currentY })
    const drawingCtx = canvas.current.getContext("2d")
    drawingCtx.globalCompositeOperation = "destination-out"
    drawingCtx.lineJoin = "round"
    drawingCtx.moveTo(lastX.current, lastY.current)
    drawingCtx.lineTo(currentX, currentY)
    drawingCtx.closePath()
    drawingCtx.lineWidth = 70
    drawingCtx.stroke()
    lastX.current = currentX
    lastY.current = currentY
  }

  const handleTouchEnd = () => {
    drawing.current = false
  }

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
    renderingElement.addEventListener("touchstart", handleTouchStart)
    renderingElement.addEventListener("touchmove", handleTouchMove)
    renderingElement.addEventListener("touchend", handleTouchEnd)

    return () => {
      renderingElement.removeEventListener("mouseover", handleMouseOver)
      renderingElement.removeEventListener("mouseup", handleMouseUp)
      renderingElement.removeEventListener("mousemove", handleMouseMoveEvent)
      renderingElement.removeEventListener("touchstart", handleTouchStart)
      renderingElement.removeEventListener("touchmove", handleTouchMove)
      renderingElement.removeEventListener("touchend", handleTouchEnd)
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

      <Dragger>Drag</Dragger>

      <Canvas
        height={size.height}
        width={size.width}
        ref={canvas}
        onMouseEnter={() => onCursor("hovered")}
        onMouseLeave={onCursor}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
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
