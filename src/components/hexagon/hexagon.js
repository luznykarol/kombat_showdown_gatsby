import React from "react"
import styled from "styled-components"

const HexBody = styled.div`
  position: relative;
  width: 160px;
  height: 90px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  ${"" /* box-shadow: 0 6px 30px rgba(0, 0, 0, 0.11); */}

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0;
    border-left: 80px solid transparent;
    border-right: 80px solid transparent;
    ${"" /* box-shadow: 0 6px 30px rgba(0, 0, 0, 0.11); */}
  }

  &:before {
    bottom: 99.9%;
    border-bottom: 40px solid #fff;
  }
  &:after {
    top: 100%;
    border-top: 40px solid #fff;
  }
`
const Hexagon = ({
  titleBox,
  title,
  children,
  clickable,
  onClick,
  listed,
  small,
}) => {
  return (
    <HexBody
      small={small}
      listed={listed}
      onClick={onClick}
      clickable={clickable}
    >
      {titleBox && <span>{title}</span>}

      {children}
    </HexBody>
  )
}

export default Hexagon
