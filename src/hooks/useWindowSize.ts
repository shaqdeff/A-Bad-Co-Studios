import { useState, useEffect } from "react"

export default function useWindowSize() {
  const hasWindow = typeof window !== "undefined"

  function getSize() {
    const width = hasWindow ? window.innerWidth : null
    const height = hasWindow ? window.innerHeight : null
    return {
      width,
      height,
    }
  }

  const [windowSize, setWindowSize] = useState(getSize())

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowSize(getSize())
      }

      window.addEventListener("resize", handleResize)

      return () => window.removeEventListener("resize", handleResize)
    }
  }, [hasWindow])

  return windowSize
}
