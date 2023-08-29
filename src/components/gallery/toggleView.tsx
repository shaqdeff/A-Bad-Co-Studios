import React from "react"
import { Columns, Grid } from "react-feather"

// styled components
import { ViewSwitch } from "../../styles"

type ToggleProps = {
  toggleView: (view: boolean) => void
  view: boolean
}

const ToggleView = ({ view, toggleView }: ToggleProps) => {
  return (
    <ViewSwitch>
      <button onClick={() => toggleView(!view)}>
        {view ? (
          <Columns className="toggle-icon" />
        ) : (
          <Grid className="toggle-icon" />
        )}
      </button>
    </ViewSwitch>
  )
}

export default ToggleView
