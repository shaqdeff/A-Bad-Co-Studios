const React = require("react");

import { GlobalProvider } from "./src/context/globalContext.mjs"

export const wrapRootElement = ({ element }) => (
  <GlobalProvider>{element}</GlobalProvider>
)
