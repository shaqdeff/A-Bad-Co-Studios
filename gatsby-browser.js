import React from "react"
// import { Layout } from "./src/components"

import { GlobalProvider } from "./src/context/globalContext"

export const wrapRootElement = ({ element }) => (
  <GlobalProvider>{element}</GlobalProvider>
)
