import React from "react"
import Loadable from "react-loadable"

// components
import { Layout } from "../../components"

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
    <Layout>
      <GalleryLazy />
    </Layout>
  )
}

export default Gallery
