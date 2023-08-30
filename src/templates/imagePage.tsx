import React from "react"
import { motion } from "framer-motion"

// components
import { Layout } from "../components"

// props
import { DataType } from "../components/gallery/galleryContent"

// styled components
import { ImgPageContent, ImgWrapper } from "../styles/"

type ImageProps = {
  pageContext: DataType
}

const ImagePage = ({ pageContext }: ImageProps) => {
  return (
    <Layout>
      <ImgPageContent>
        <ImgWrapper>
          <motion.img src={pageContext.cover} />
        </ImgWrapper>
      </ImgPageContent>
    </Layout>
  )
}

export default ImagePage
