import React from "react"

// styled components
import { Banner, Video, Canvas, BannerTitle, Headline } from "../../styles"

// assets
import { lights } from "../../assets"

const HomeBanner = () => {
  return (
    <Banner>
      <Video>
        <video src={lights} height="100%" width="100%" loop autoPlay muted />
      </Video>

      <Canvas />

      <BannerTitle>
        <Headline>Get</Headline>
        <Headline>
          Glow<span>.</span>
        </Headline>
      </BannerTitle>
    </Banner>
  )
}

export default HomeBanner
