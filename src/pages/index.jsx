import React, { useEffect, useState } from "react"

// components
import { Layout, HomeBanner } from "../components"

// context
import { useGlobalStateContext, useGlobalDispatchContext } from "../context"

const IndexPage = props => {
  const { cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const [isClient, setClient] = useState(false)
  const key = isClient ? "client" : "server"

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  useEffect(() => {
    setClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <Layout>
      <div key={key}>
        <HomeBanner onCursor={onCursor} />
      </div>
    </Layout>
  )
}

export default IndexPage
