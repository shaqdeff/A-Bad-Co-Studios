import React, { useState } from "react"
import styled from "styled-components"

// icons
import { MoonIcon, SunIcon } from "../assets"

// context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

const SwitchStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 18px;
    height: 40px;
    margin: 0 0.75rem;
  }
  .toggle-switch input[type="checkbox"] {
    display: none;
  }
  .toggle-switch .switch {
    position: absolute;
    cursor: pointer;
    background-color: #fbfbed;
    border-radius: 25px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: background-color 0.2s ease;
  }
  .toggle-switch .switch::before {
    position: absolute;
    content: "";
    left: 3px;
    top: 7px;
    width: 12px;
    height: 12px;
    background-color: #1f1f1f;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
  .toggle-switch input[type="checkbox"]:checked + .switch::before {
    transform: translateY(15px);
    background-color: #fbfbed;
  }
  .toggle-switch input[type="checkbox"]:checked + .switch {
    background-color: #1f1f1f;
  }
`

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
    <>
      <SwitchStyles>
        <SunIcon />
        <label className="toggle-switch">
          <input type="checkbox" checked={isToggled} onChange={onToggle} />
          <span className="switch" />
        </label>
        <MoonIcon />
      </SwitchStyles>
    </>
  )
}
export default Switch
