import React from "react"
import Loadable from "react-loadable"

// components
import { GalleryLayout } from "../../components"

function LoadingComponent(props) {
  return <div />
}

// lazy load of component
const GalleryLazy = Loadable({
  loader: () => import("../../components/gallery/galleryContent"),
  loading: LoadingComponent,
})

const Gallery = () => {
  return (
    <GalleryLayout>
      <GalleryLazy />
    </GalleryLayout>
  )
}

export default Gallery
