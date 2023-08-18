import React, { useEffect, useRef } from "react"

// hooks
import { useWindowSize } from "../../hooks"

// styled components
import { Banner, Video, Canvas, BannerTitle, Headline } from "../../styles"

// context
import { useGlobalStateContext } from "../../context"

// assets
import { lights } from "../../assets"

const HomeBanner = () => {
  // Get the window size using a custom hook
  const size = useWindowSize()

  // Get the current theme from the global state context
  const { currentTheme } = useGlobalStateContext()

  // Create a reference to the canvas element
  const canvas = useRef(null)

  // Create a reference to track if drawing is in progress
  const drawing = useRef(false)

  // Create references to store the last drawn position
  const lastX = useRef(0)
  const lastY = useRef(0)

  useEffect(() => {
    // Get the rendering canvas element and its context
    const renderingElement = canvas.current
    const renderingCtx = renderingElement.getContext("2d")

    // Set the canvas background color based on the current theme
    renderingCtx.globalCompositeOperation = "source-over"
    renderingCtx.fillStyle = currentTheme === "dark" ? "#0a0a0a" : "#e0e0e0"
    renderingCtx.fillRect(0, 0, size.width, size.height)

    // Event handler for when the mouse is over the canvas
    const handleMouseOver = e => {
      drawing.current = true
      lastX.current = e.pageX - renderingElement.offsetLeft
      lastY.current = e.pageY - renderingElement.offsetTop
    }

    // Event handler for when the mouse button is released
    const handleMouseUp = () => {
      drawing.current = false
    }

    // Event handler for mouse move
    const handleMouseMoveEvent = e => {
      if (!drawing.current) return

      const currentX = e.pageX - renderingElement.offsetLeft
      const currentY = e.pageY - renderingElement.offsetTop

      // Get the drawing context and set properties for drawing
      const drawingCtx = renderingCtx
      drawingCtx.globalCompositeOperation = "destination-out"
      drawingCtx.lineJoin = "round"
      drawingCtx.moveTo(lastX.current, lastY.current)
      drawingCtx.lineTo(currentX, currentY)
      drawingCtx.closePath()
      drawingCtx.lineWidth = 120
      drawingCtx.stroke()

      // Update the last drawn position
      lastX.current = currentX
      lastY.current = currentY
    }

    // Add event listeners for mouse interactions
    renderingElement.addEventListener("mouseover", handleMouseOver)
    renderingElement.addEventListener("mouseup", handleMouseUp)
    renderingElement.addEventListener("mousemove", handleMouseMoveEvent)

    // Clean up event listeners when the component is unmounted
    return () => {
      renderingElement.removeEventListener("mouseover", handleMouseOver)
      renderingElement.removeEventListener("mouseup", handleMouseUp)
      renderingElement.removeEventListener("mousemove", handleMouseMoveEvent)
    }
  }, [currentTheme, size.width, size.height])

  // Return the JSX structure of the component
  return (
    <Banner>
      <Video>
        <video src={lights} height="100%" width="100%" loop autoPlay muted />
      </Video>

      {/* Create a canvas element with dynamic size */}
      <Canvas height={size.height} width={size.width} ref={canvas} />

      <BannerTitle>
        <Headline>Get</Headline>
        <Headline>
          Scene<span>.</span>
        </Headline>
      </BannerTitle>
    </Banner>
  )
}

export default HomeBanner
