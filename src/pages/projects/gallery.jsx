import React from "react"
import Loadable from "react-loadable"

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
    <>
      <GalleryLazy />
    </>
  )
}

export default Gallery
