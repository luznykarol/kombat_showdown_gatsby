import React from "react"
import styled from "styled-components"

const CardBody = styled.div`
  background-color: #fff;
  
  width: 100%;
  padding: ${({ titleBox }) =>
    titleBox === true ? "100px 16px 0 16px" : "16px"};
  min-height: 20px;
  ${"" /* box-shadow: 4px -4px 13px rgba(95, 121, 246, 0.8); */}
  max-width: ${({ small }) => (small === true ? "500px" : "700px")};
  margin: ${({ listed }) => (listed === true ? "16px auto 0 auto" : "0 auto")};
  position: relative;
  cursor: ${({ clickable }) => (clickable === true ? "pointer" : "default")};

  > span {
    position: absolute;
    letter-spacing: .58px;
    top: -1px;
    left: 0;
    height: 60px;

    background-color: #111167;
    width: 100%;
    color: #fff;
    text-shadow: 0 2px 9px #8963e3;
    display: flex;
    justify-content: center;
    font-size: 20px;
    align-items: center;
    font-weight: 600;
  }
`
const Card = ({
  titleBox,
  title,
  children,
  clickable,
  onClick,
  listed,
  small,
}) => {
  return (
    <CardBody
      small={small}
      listed={listed}
      onClick={onClick}
      clickable={clickable}
    >
      {titleBox && <span>{title}</span>}

      {children}
    </CardBody>
  )
}

export default Card
