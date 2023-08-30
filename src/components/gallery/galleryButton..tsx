import React from "react"
import { Link } from "gatsby"
import { ArrowLeft } from "react-feather"

// styled components
import { BackButton } from "../../styles/"

const GalleryButton = ({ onCursor }) => {
  return (
    <BackButton
      onMouseEnter={() => onCursor("hovered")}
      onMouseLeave={onCursor}
    >
      <Link to="/projects/gallery" replace className="button">
        <ArrowLeft />
      </Link>
    </BackButton>
  )
}

export default GalleryButton
