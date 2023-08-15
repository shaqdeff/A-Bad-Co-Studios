import styled from "styled-components"

export const HeaderNav = styled.div`
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
    padding: 0 20px;
    position: relative;
    bottom: 20px;
    left: 45px;
    z-index: -10;
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
    margin: 0 3px;
    border-radius: 100%;
    display: inline-block;
    position: relative;
    bottom: -2px;
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
`
