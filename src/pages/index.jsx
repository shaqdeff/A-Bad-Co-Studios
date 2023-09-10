import React from "react"

// components
import { Layout, HomeBanner } from "../components"

// context
import { useGlobalStateContext, useGlobalDispatchContext } from "../context"

const IndexPage = props => {
  const { cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  return (
    <Layout>
      <HomeBanner onCursor={onCursor} />
    </Layout>
  )
}

export default IndexPage
