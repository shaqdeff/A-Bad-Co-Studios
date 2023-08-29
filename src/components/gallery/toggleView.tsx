import React from "react"

// styled components
import { ViewSwitch } from "../../styles"

type ToggleProps = {
  toggleView: (view: boolean) => void
  view: boolean
}

const ToggleView = ({ view, toggleView }: ToggleProps) => {
  return (
    <ViewSwitch>
      <button onClick={() => toggleView(!view)}></button>
    </ViewSwitch>
  )
}

export default ToggleView
