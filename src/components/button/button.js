import React from "react"
import styles from "./button.module.less"
import { Link } from "gatsby"

const Button = ({ text, bordered, linkTo, sizeL }) => (
  <>
    {linkTo ? (
      bordered ? (
        <div
          className={`${styles.btnBordered} ${
            sizeL ? styles.btnL : styles.btnM
          }`}
        >
          <div className={styles.btnMask}>
            <span className={styles.btnBorderedText}>
              {text}
              <div className={styles.arrowPink}></div>
            </span>
            <Link to={linkTo} className="linkDiv"></Link>
          </div>
        </div>
      ) : (
        <a
          href={linkTo}
          className={`${styles.btnGradient} ${
            sizeL ? styles.btnL : styles.btnM
          }`}
        >
          {text}
          <div className={styles.arrowWhite}></div>
        </a>
      )
    ) : (
      <button
        type={"submit"}
        className={`${styles.btnGradient} ${sizeL ? styles.btnL : styles.btnM}`}
      >
        {text}
      </button>
    )}
  </>
)
export default Button
