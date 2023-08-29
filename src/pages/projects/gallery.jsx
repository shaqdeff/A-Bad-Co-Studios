import React, { useState } from "react"
import Loadable from "react-loadable"

// components
import { GalleryLayout, GalleryHeader } from "../../components"

function LoadingComponent(props) {
  return <div />
}

// lazy load of component
const GalleryLazy = Loadable({
  loader: () => import("../../components/gallery/galleryContent"),
  loading: LoadingComponent,
})

const Gallery = () => {
  const [gridVisible, setGridVisible] = useState(true)

  return (
    <GalleryLayout>
      <GalleryHeader
        gridVisible={gridVisible}
        setGridVisible={setGridVisible}
      />
      <GalleryLazy gridVisible={gridVisible} />
    </GalleryLayout>
  )
}

export default Gallery
