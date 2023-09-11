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
  const { cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()
  const [gridVisible, setGridVisible] = useState(true)
  const [isClient, setClient] = useState(false)

  const updateGridVisible = value => {
    setGridVisible(value)
  }

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  const [toggleMenu, setToggleMenu] = useState(false)

  useEffect(() => {
    setClient(true)
  }, [])

  if (!isClient) {
    return null
  }

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
      <GalleryLazy
        onCursor={onCursor}
        gridVisible={gridVisible}
        updateGridVisible={updateGridVisible}
      />
    </GalleryLayout>
  )
}

export default Gallery
