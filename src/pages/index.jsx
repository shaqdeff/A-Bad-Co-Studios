import React, { useEffect } from "react"
import { useAnimation } from "framer-motion"

// components
import { Layout, HomeBanner, Loader } from "../components"

// context
import { useGlobalStateContext, useGlobalDispatchContext } from "../context"

// utils
import { defaultTransition } from "../utils"

const IndexPage = props => {
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
    <Layout>
      <Loader loaderControls={control} />
      <HomeBanner onCursor={onCursor} />
    </Layout>
  )
}

export default IndexPage
