import styled from "styled-components"
import { motion } from "framer-motion"

export const HeaderNav = styled(motion.div)`
  height: 0;
  width: 100%;
  position: absolute;
  top: 72px;
  right: 0;
  left: 0;
  z-index: 99;

  .switch-box {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0;
    position: relative;
    bottom: 30px;
    left: 98.5%;
    z-index: -10;
    width: fit-content;
  }

  /* media queries */
  @media (max-width: 767px) {
    top: 52px;

    .switch-box {
      bottom: 26px;
      left: 97%;
    }
  }
`
export const Logo = styled.div`
  a {
    font-size: 2rem;
    font-weight: 800;
    color: ${props => props.theme.text};
  }

  .lens {
    height: 1.6rem;
    width: 1.6rem;
    margin: 0 2px;
    border-radius: 100%;
    display: inline-block;
    position: relative;
    bottom: -2px;
  }

  /* media queries */
  @media (max-width: 767px) {
    a {
      font-size: 1.65rem;
    }

    .lens {
      height: 1.25rem;
      width: 1.25rem;
      margin: 0 1px;
      bottom: 0;
    }
  }
`
export const Menu = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;

    span {
      width: 33px;
      height: 7px;
      display: block;
      background: ${props => props.theme.text};
      margin: 8px;
    }
  }

  /* media queries */
  @media (max-width: 767px) {
    button {
      padding: 10px;
      margin-bottom: 1px;

      span {
        width: 26px;
        height: 5px;
        margin: 6px 5px;
      }
    }
  }
`

export const ToggleSwitch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  bottom: 15px;
  gap: 2px;

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
    background-color: #f4f4f6;
    border-radius: 25px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: background-color 0.2s ease;
    cursor: none;
  }
  .toggle-switch .switch::before {
    position: absolute;
    content: "";
    left: 3px;
    top: 7px;
    width: 12px;
    height: 12px;
    background-color: #0a0a0a;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
  .toggle-switch input[type="checkbox"]:checked + .switch::before {
    transform: translateY(15px);
    background-color: #f4f4f6;
  }
  .toggle-switch input[type="checkbox"]:checked + .switch {
    background-color: #0a0a0a;
  }

  @media (max-width: 767px) {
    .toggle-switch {
      width: 16px;
      height: 32px;
    }

    /* media queries */
    .toggle-switch .switch::before {
      left: 2px;
      top: 3px;
    }
  }
`
