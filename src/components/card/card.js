import React from "react"
import styled from "styled-components"

const CardBody = styled.div`
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 16px;
  min-height: 20px;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.11);
  max-width: ${({ small }) => (small === true ? "500px" : "700px")};
  margin: ${({ listed }) => (listed === true ? "16px auto 0 auto" : "0 auto")};
  position: relative;
  cursor: ${({ clickable }) => (clickable === true ? "pointer" : "default")};

  > span {
    position: absolute;
    top: -1px;
    left: 0;
    height: 3px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: red;
    width: 100%;
  }
`
const Card = ({ children, clickable, onClick, listed, small, topLine }) => {
  return (
    <CardBody
      small={small}
      listed={listed}
      onClick={onClick}
      clickable={clickable}
    >
      {topLine && <span></span>}

      {children}
    </CardBody>
  )
}

export default Card
