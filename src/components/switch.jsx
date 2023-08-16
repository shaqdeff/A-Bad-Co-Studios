import React, { useState } from "react"

// context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

// styled components
import { ToggleSwitch } from "../styles"

// icons
import { MoonIcon, SunIcon } from "../assets"

function Switch() {
  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()
  const [isToggled, setIsToggled] = useState(false)

  const onToggle = () => {
    if (currentTheme === "light") {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" })
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "light" })
    }

    setIsToggled(!isToggled)
  }

  return (
    <ToggleSwitch>
      <SunIcon />
      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
      </label>
      <MoonIcon />
    </ToggleSwitch>
  )
}
export default Switch
