import { motion, AnimationControls, Variants } from "framer-motion"
import React from "react"

// styled components
import { FullLoader, LoaderTitle, Logo } from "../../styles"

// utils
import { defaultTransition } from "../../utils"

// assets
import { lens, record } from "../../images"

type LoaderProps = {
  loaderControls: AnimationControls
}

// animation
const variants: Variants = {
  initial: {
    y: 50,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
  },
}

const blinkingAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const Loader = ({ loaderControls }: LoaderProps) => {
  return (
    <>
      <FullLoader animate={loaderControls}>
        <LoaderTitle
          variants={variants}
          initial={"initial"}
          animate={"animate"}
          transition={defaultTransition}
        >
          <div className="logo-container">
            <div className="logo">
              <div>A BAD C</div>
              <span>
                <div>
                  <img src={lens} alt="lens" className="lens" />
                </div>
              </span>
            </div>

            <div className="bottom-logo">
              <div className="studios">STUDIOS</div>

              <span>
                <motion.img
                  src={record}
                  alt="record"
                  className="record"
                  initial="hidden"
                  animate="visible"
                  variants={blinkingAnimation}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </span>
            </div>
          </div>
        </LoaderTitle>
      </FullLoader>
    </>
  )
}

export default Loader
