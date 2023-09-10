const React = require("react");

import { GlobalProvider } from "./src/context/globalContext"

export const wrapRootElement = ({ element }) => (
  <GlobalProvider>{element}</GlobalProvider>
)
