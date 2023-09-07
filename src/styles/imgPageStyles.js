import styled from "styled-components"

export const ImgPageContent = styled.div`
  margin: 2%;
`

export const ImgWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 1300px;
    aspect-ratio: 16/9;
    object-fit: contain;
  }

  /* media queries */
  @media (max-width: 767px) {
    overflow-x: hidden;

    img {
      aspect-ratio: 14/5;
      object-fit: contain;
    }
  }
`

export const BackButton = styled.div`
  position: absolute;
  left: 4rem;
  top: 0.8rem;

  .button {
    padding: 5px;
    background: ${props => props.theme.text};
    box-shadow: none;

    display: flex;
    border: none;
    border-radius: 5px;
    transition: background 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
      background: ${props => props.theme.green};

      svg {
        color: ${props => props.theme.text};
      }
    }

    svg {
      color: ${props => props.theme.background};
    }

    /* media queries */
    @media (max-width: 767px) {
      padding: 0;
      border: none;
      background: none;

      svg {
        color: ${props => props.theme.text};
      }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      padding: 3px;
      background: none;
      border: 1px solid ${props => props.theme.text};

      svg {
        color: ${props => props.theme.text};
      }
    }
  }

  /* media queries */
  @media (max-width: 767px) {
    left: 1rem;
    top: 0.5rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    left: 1rem;
    top: 0.5rem;
  }
`
