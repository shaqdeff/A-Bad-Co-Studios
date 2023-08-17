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
  let canvas = useRef(null)
  const size = useWindowSize()
  const { currentTheme } = useGlobalStateContext()

  useEffect(() => {
    let renderingElement = canvas.current
    let drawingElement = renderingElement.cloneNode()

    let drawingCtx = drawingElement.getContext("2d")
    let renderingCtx = renderingElement.getContext("2d")

    let lastX
    let lastY

    let moving = false

    renderingCtx.globalCompositeOperation = "source-over"
    renderingCtx.fillStyle = currentTheme === "dark" ? "#0a0a0a" : "#e0e0e0"
    renderingCtx.fillRect(0, 0, size.width, size.height)
  }, [currentTheme, size.width, size.height])

  return (
    <Banner>
      <Video>
        <video src={lights} height="100%" width="100%" loop autoPlay muted />
      </Video>

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
