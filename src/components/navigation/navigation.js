import React from "react"
import styled from "styled-components"
import Burger from "./burger"
import Image from "../image/image"
import { Link } from "gatsby"

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoWrap = styled(props => <Link {...props} />)`
  max-width: 160px;
  width: 100%;
  z-index: 11;
  position: relative;
`

const Navbar = () => {
  return (
    <div className="wrapper wrapper-top">
      <Nav>
        <LogoWrap to="/">
          <Image loading="eager" critical="true" name="logoTitle"></Image>
        </LogoWrap>
        <Burger />
      </Nav>
    </div>
  )
}

export default Navbar
