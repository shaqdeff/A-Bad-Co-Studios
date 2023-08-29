import React, { useState } from "react"
import Loadable from "react-loadable"

// components
import { GalleryLayout, GalleryHeader, Navigation } from "../../components"

// context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../../context/globalContext"

function LoadingComponent(props) {
  return <div />
}

// lazy load of component
const GalleryLazy = Loadable({
  loader: () => import("../../components/gallery/galleryContent"),
  loading: LoadingComponent,
})

const Gallery = () => {
  const { currentTheme, cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const [gridVisible, setGridVisible] = useState(true)

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <GalleryLayout>
      <GalleryHeader
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        gridVisible={gridVisible}
        setGridVisible={setGridVisible}
      />
      <Navigation
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        onCursor={onCursor}
      />
      <GalleryLazy gridVisible={gridVisible} />
    </GalleryLayout>
  )
}

export default Gallery
