import React from "react"
import { motion, Variants } from "framer-motion"

// components
import { Layout, GalleryButton } from "../components"

// props
import { DataType } from "../components/gallery/galleryContent"

// styled components
import { ImgPageContent, ImgWrapper } from "../styles/"

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
  return (
    <Layout>
      <GalleryButton />
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
