import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    z-index: 10;
    background-color: rgba(75, 89, 123, 0.94);
    position: fixed;
    transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    justify-content: center;
    ${"" /* padding-top: 150px; */}
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      padding: 32px 10px;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        border-radius: 3px;
        background: #fff;
        bottom: -10px;
        left: 0;
      }
      a {
        font-size: 24px;
      }
    }
  }
`

const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: 18px;
  margin: 0 auto;


  a {
    text-decoration: none;
    position: relative;
    color: #fff;
    text-shadow: 0 2px 9px #8963e3;

    &:after {
      position: absolute;
      display: block;
      transform: scaleX(0);
      bottom: -2px;
      left: 0;
      background: #fff;
      width: 100%;
      content: "";
      height: 2px;
      transition: transform 250ms ease-in-out;
      transform-origin: 100% 50%;
      box-shadow: 0 2px 9px #8963e3;
    }

    &:hover {
      background-position: 0%;
      background-size: 340% 100%;

      &:after {
        background: #fff;
        transform: scaleX(1);
        transform-origin: 0 50%;
      }
    }
  }
  }
`

const NavLine = styled.span`
  ${"" /* width: 100px;
  margin: 0 auto;
  height: 2px;
  background: #fff;
  display: none;

  @media (max-width: 768px) {
    display: block;
  } */}
`

const NavList = ({ open }) => {
  return (
    <Ul open={open}>
      <NavigationListItem>
        <Link activeClassName="activeLink" to="/about">
          O nas{" "}
        </Link>
      </NavigationListItem>
      <NavLine></NavLine>
      <NavigationListItem>
        <Link activeClassName="activeLink" to="/faq">
          FAQ
        </Link>
      </NavigationListItem>
      <NavLine></NavLine>
      <NavigationListItem>
        <Link activeClassName="activeLink" to="/rules">
          Regulamin
        </Link>
      </NavigationListItem>
      <NavLine></NavLine>
      <NavigationListItem>
        <Link to="#contact">Kontakt</Link>
      </NavigationListItem>
      <NavLine></NavLine>
    </Ul>
  )
}

export default NavList
