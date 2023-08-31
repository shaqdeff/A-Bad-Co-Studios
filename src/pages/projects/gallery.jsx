import React, { useEffect, useState } from "react"
import Loadable from "react-loadable"

// components
import {
  CustomCursor,
  GalleryLayout,
  GalleryHeader,
  Navigation,
} from "../../components"

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

const Gallery = props => {
  const { currentTheme, cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const savedGridVisible = JSON.parse(localStorage.getItem("gridVisible"))
  const [gridVisible, setGridVisible] = useState(
    savedGridVisible !== null ? savedGridVisible : true
  )

  useEffect(() => {
    localStorage.setItem("gridVisible", JSON.stringify(gridVisible))
  }, [gridVisible])

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <GalleryLayout>
      <CustomCursor toggleMenu={toggleMenu} />
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
      <GalleryLazy onCursor={onCursor} gridVisible={gridVisible} />
    </GalleryLayout>
  )
}

export default Gallery
