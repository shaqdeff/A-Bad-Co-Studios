import React, { useEffect, useRef } from "react"

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

    const canvasRect = canvas.current.getBoundingClientRect()
    const draggerCenterX =
      dragger.current.offsetLeft + dragger.current.offsetWidth / 2
    const draggerCenterY =
      dragger.current.offsetTop + dragger.current.offsetHeight / 2

    const lineWidth = 95
    lastPosition.current = {
      x: draggerCenterX - canvasRect.left - lineWidth / 2,
      y: draggerCenterY - canvasRect.top - lineWidth / 2,
    }
  }

  const handleDraggerTouchMove = e => {
    if (!drawing.current) return

    const touch = e.touches[0]
    const currentX = touch.clientX - canvas.current.getBoundingClientRect().left
    const currentY = touch.clientY - canvas.current.getBoundingClientRect().top

    const draggerWidth = dragger.current.offsetWidth
    const draggerHeight = dragger.current.offsetHeight
    const lineWidth = 95

    const draggerCenterX = currentX - draggerWidth / 2
    const draggerCenterY = currentY - draggerHeight / 2

    const drawingCtx = canvas.current.getContext("2d")

    requestAnimationFrame(() => {
      drawingCtx.lineJoin = "round"
      drawingCtx.globalCompositeOperation = "destination-out"
      drawingCtx.moveTo(lastPosition.current.x, lastPosition.current.y)
      drawingCtx.lineTo(currentX, currentY)
      drawingCtx.closePath()
      drawingCtx.lineWidth = lineWidth
      drawingCtx.stroke()

      lastPosition.current = { x: currentX, y: currentY }

      const pointerOffsetX = draggerWidth / 2 - lineWidth / 2
      const pointerOffsetY = draggerHeight / 2 - lineWidth / 2

      dragger.current.style.left = `${draggerCenterX - pointerOffsetX}px`
      dragger.current.style.top = `${draggerCenterY - pointerOffsetY}px`
    })
  }

  const handleDraggerTouchEnd = () => {
    drawing.current = false
  }

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
    renderingCtx.fillStyle = currentTheme === "dark" ? "#0a0a0a" : "#f4f4f6"
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

    const cleanup = () => {
      renderingElement.removeEventListener("mouseover", handleMouseOver)
      renderingElement.removeEventListener("mouseup", handleMouseUp)
      renderingElement.removeEventListener("mousemove", handleMouseMoveEvent)
      if (dragger.current) {
        dragger.current.removeEventListener(
          "touchstart",
          handleDraggerTouchStart
        )
        dragger.current.removeEventListener(
          "touchmove",
          handleTouchMoveThrottled
        )
        dragger.current.removeEventListener("touchend", handleDraggerTouchEnd)
      }
    }

    renderingElement.addEventListener("mouseover", handleMouseOver)
    renderingElement.addEventListener("mouseup", handleMouseUp)
    renderingElement.addEventListener("mousemove", handleMouseMoveEvent)
    if (dragger.current) {
      dragger.current.addEventListener("touchstart", handleDraggerTouchStart)
      dragger.current.addEventListener("touchmove", handleTouchMoveThrottled)
      dragger.current.addEventListener("touchend", handleDraggerTouchEnd)
    }

    return cleanup
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
        delay: 3,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  }

  return (
    <Banner>
      <Video>
        <video src={lights} height="100%" width="100%" loop autoPlay muted />
      </Video>

      <Dragger
        ref={dragger}
        onTouchStart={handleDraggerTouchStart}
        initial={{ x: 72, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 3.5,
          ease: [0.6, 0.05, 0.01, 0.9],
        }}
      >
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
