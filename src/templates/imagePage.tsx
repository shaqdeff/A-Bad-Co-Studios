import React from "react"
import { motion, Variants } from "framer-motion"

// components
import { Layout, GalleryButton } from "../components"

// props
import { DataType } from "../components/gallery/galleryContent"

// styled components
import { ImgPageContent, ImgWrapper } from "../styles/"

// context
import { useGlobalStateContext, useGlobalDispatchContext } from "../context"

// utils
import { defaultTransition } from "../utils"

type ImageProps = {
  pageContext: DataType
}

const variants: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
}

const ImagePage = ({ pageContext }: ImageProps) => {
  const { cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  return (
    <Layout>
      <GalleryButton onCursor={onCursor} />
      <ImgPageContent>
        <ImgWrapper>
          <motion.img
            src={pageContext.cover}
            variants={variants}
            initial={"initial"}
            animate={"animate"}
            transition={defaultTransition}
          />
        </ImgWrapper>
      </ImgPageContent>
    </Layout>
  )
}

export default ImagePage
