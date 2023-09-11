import React, { useEffect, useState } from "react"
import { useAnimation } from "framer-motion"

// components
import { Layout, HomeBanner, Loader } from "../components"

// context
import { useGlobalStateContext, useGlobalDispatchContext } from "../context"

// utils
import { defaultTransition } from "../utils"

const IndexPage = props => {
  const { currentTheme, cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const [isClient, setClient] = useState(false)
  const key = isClient ? "client" : "server"

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

  useEffect(() => {
    setClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <Layout>
      <Loader loaderControls={control} />
      <div key={key}>
        <HomeBanner onCursor={onCursor} />
      </div>
    </Layout>
  )
}

export default IndexPage
