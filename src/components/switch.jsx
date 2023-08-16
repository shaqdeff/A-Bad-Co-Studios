import React, { useEffect, useState } from "react"

// context
import { useGlobalDispatchContext, useGlobalStateContext } from "../context"

// styled components
import { ToggleSwitch } from "../styles"

// icons
import { MoonIcon, SunIcon } from "../assets"

const Switch = () => {
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

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme)
  }, [currentTheme])

  useEffect(() => {
    if (window.localStorage.getItem("theme") === "light") {
      setIsToggled(true)
    }
  }, [])

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
