import React from "react"
import styled from "styled-components"
import Image from "../image/image"
import { Link } from "gatsby"

const NavigationWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: relative;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat";
`
// const LogoWrap = styled.a`

// `

const LogoWrap = styled(props => <Link {...props} />)`
  height: 200px;
  max-width: 232px;
  width: 100%;
`

const Logo = styled.span`
  font-weight: 700;
  font-size: 20px;
`
const NavigationList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  max-width: 600px;
  align-items: center;
  width: 100%;
`
const NavigationBtn = styled.div`
  padding: 15px;
  max-width: 192px;
  heigth: 50px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 2px solid #fff;
  color: #fff;
  text-shadow: 0 2px 9px #8963e3;
  font-weight: 600;
  box-shadow: 0 13px 19px 0 rgba(144, 127, 249, 0.39);
  a {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }
`
const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: 16px;
  ${"" /* margin-left: 30px; */}

  &:not(:first-of-type) {
    margin-left: 30px;
  }
  a {
    text-decoration: none;
    color: #fff;
    text-shadow: 0 2px 9px #8963e3;
  }
`

const Navigation = () => {
  return (
    <NavigationWrapper>
      <LogoWrap to="/">
        <Image name="logoMain"></Image>
      </LogoWrap>

      <NavigationList>
        <NavigationListItem>
          <Link to="/about">O nas </Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link to="/faq">FAQ</Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link to="/rules">Regulamin</Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link>Kontakt</Link>
        </NavigationListItem>
        {/* <NavigationBtn>
          Zapisz się!
          <Link to="#footer"></Link>
        </NavigationBtn> */}
      </NavigationList>
    </NavigationWrapper>
  )
}

export default Navigation
