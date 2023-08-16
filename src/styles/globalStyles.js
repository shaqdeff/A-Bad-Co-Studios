import styled, { css } from "styled-components"

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;

  /* media queries */
  @media (min-width: 1024px) {
    max-width: 960px;
  }

  @media (min-width: 1216px) {
    max-width: 1152px;
  }

  @media (min-width: 1408px) {
    max-width: 1244px;
  }

  ${props =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100%;
    `}
`

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${props =>
    props.spacebetween &&
    css`
      justify-content: space-between;
    `}

  ${props =>
    props.flexend &&
    css`
      justify-content: flex-end;
    `}

${props =>
    props.aligntop &&
    css`
      justify-content: flex-start;
    `}

${props =>
    props.noheight &&
    css`
      height: 0;
    `}

    .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    top: 10px;
  }

  .bottom-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    position: relative;
    bottom: 5px;
    left: 5px;
  }

  .studios {
    font-size: 12px;
    width: 100%;
    text-align: center;
    font-weight: bold;
    margin-right: 10px;
    color: ${props => props.theme.text};
  }

  .record {
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 3px;
    border-radius: 100%;
    display: inline-block;
    position: relative;
    bottom: -1px;
    right: 8px;
  }

  /* media queries */
  @media (max-width: 767px) {
    .bottom-logo {
      bottom: 7px;
      left: 7px;
    }

    .studios {
      font-size: 10px;
    }

    .record {
      height: 1.2rem;
      width: 1.2rem;
      margin-right: 3px;
    }
  }
`
