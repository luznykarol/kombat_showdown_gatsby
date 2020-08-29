import React, { useState, useEffect } from "react"
import styled from "styled-components"
import NavList from "./navList"

const StyledBurger = styled.div`
  width: 33px;
  height: 24px;
  position: relative;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  span {
    background-color: ${({ open }) => (open ? "#fff" : "#fff")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    position: absolute;
    width: 100%;
    height: 3px;
    box-shadow: 0 2px 9px rgba(95, 121, 246, 0.8);
    &:nth-child(1) {
      top: 0;
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      bottom: ${({ open }) => (open ? "-1px" : "0")};
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const Burger = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "initial"
    }
  })

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </StyledBurger>
      <NavList open={open} setOpen={setOpen} />
    </>
  )
}
export default Burger
