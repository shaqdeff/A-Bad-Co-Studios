import React, { useEffect } from "react"
import { motion, useAnimation, Variants } from "framer-motion"

// components
import { Layout, GalleryButton, ImgLoader } from "../components"

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
    transition: {
      duration: 1,
      delay: 3,
    },
  },
}

const ImagePage = ({ pageContext }: ImageProps) => {
  const { cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  const control = useAnimation()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      control.start({
        opacity: 0,
        transition: { defaultTransition },
      })
    }, 2500)

    return () => {
      clearTimeout(timeoutId)
      control.stop()
    }
  })
  return (
    <>
      <Layout>
        <ImgLoader
          title={pageContext.title}
          color={pageContext.color}
          loaderControls={control}
        />
        <GalleryButton onCursor={onCursor} />
        <ImgPageContent>
          <ImgWrapper>
            <motion.img
              src={pageContext.cover}
              variants={variants}
              initial={"initial"}
              animate={"animate"}
              transition={{ defaultTransition, delay: 3 }}
            />
          </ImgWrapper>
        </ImgPageContent>
      </Layout>
    </>
  )
}

export default ImagePage
