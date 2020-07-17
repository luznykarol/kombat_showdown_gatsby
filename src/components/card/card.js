import React from "react"
import styled from "styled-components"

const CardBody = styled.div`
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 16px;
  min-height: 20px;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.11);
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  ${"" /* cursor: ${({ clickable }) => (clickable ? "pointer" : "")} */}
    ${
      "" /* cursor: ${props => {
    props.clickable ? "pointer" : "default"
  }}; */
    }
    ${
      "" /* transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")}; */
    };
  cursor: ${({ clickable }) => (clickable === true ? "pointer" : "default")};
`

const Card = ({ children, clickable }) => {
  return <CardBody clickable={clickable}>{children}</CardBody>
}

export default Card
