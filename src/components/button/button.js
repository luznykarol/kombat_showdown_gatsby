import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Buttona = styled.button`
  padding: 0 20px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  -webkit-font-smoothing: antialiased !important;
  width: 100%;
  height: 50px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.83px;
  line-height: 12px;
  max-width: 220px;
  width: 100%;
  margin: 0 auto;
`
const Button = ({ text, bordered, linkTo, sizeL }) => (
  <>
    {/* {linkTo ? (
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
    ) : ( */}
    <Buttona type={"submit"}>{text}</Buttona>
    {/* )} */}
  </>
)
export default Button
