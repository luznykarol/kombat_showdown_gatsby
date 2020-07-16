// import React from "react"
// import styled from "styled-components"
// import Image from "../image/image"
// import { Link } from "gatsby"

// const NavigationWrapper = styled.nav`
//   display: flex;
//   flex-direction: column;
//   z-index: 1;
//   position: relative;
//   align-items: center;
//   justify-content: center;
//   font-family: "Montserrat";
// `

// const LogoWrap = styled(props => <Link {...props} />)`
//   height: 200px;
//   max-width: 232px;
//   width: 100%;
// `

// const Logo = styled.span`
//   font-weight: 700;
//   font-size: 20px;
// `

// const NavigationList = styled.ul`
//   margin: 0;
//   padding: 0;
//   list-style: none;
//   display: flex;
//   justify-content: space-between;
//   max-width: 600px;
//   align-items: center;
//   width: 100%;
// `

// const NavigationListItem = styled.li`
//   font-weight: 600;
//   font-size: 18px;

//   &:not(:first-of-type) {
//     margin-left: 30px;
//   }
//   a {
//     text-decoration: none;
//     position: relative;
//     color: #fff;
//     text-shadow: 0 2px 9px #8963e3;

//     &:after {
//       position: absolute;
//       display: block;
//       transform: scaleX(0);
//       bottom: -2px;
//       left: 0;
//       background: #fff;
//       width: 100%;
//       content: "";
//       height: 2px;
//       transition: transform 250ms ease-in-out;
//       transform-origin: 100% 50%;
//     }

//     &:hover {
//       background-position: 0%;
//       background-size: 340% 100%;

//       &:after {
//         background: #fff;
//         transform: scaleX(1);
//         transform-origin: 0 50%;
//       }
//     }
//   }
//   }
// `

// const Navigation = () => {
//   return (
//     <NavigationWrapper>
//       <LogoWrap to="/">
//         <Image loading="eager" critical="true" name="logoMain"></Image>
//       </LogoWrap>

//       <NavigationList>
//         <NavigationListItem>
//           <Link activeClassName="activeLink" to="/about">
//             O nas{" "}
//           </Link>
//         </NavigationListItem>
//         <NavigationListItem>
//           <Link activeClassName="activeLink" to="/faq">
//             FAQ
//           </Link>
//         </NavigationListItem>
//         <NavigationListItem>
//           <Link activeClassName="activeLink" to="/rules">
//             Regulamin
//           </Link>
//         </NavigationListItem>
//         <NavigationListItem>
//           <Link>Kontakt</Link>
//         </NavigationListItem>
//       </NavigationList>
//     </NavigationWrapper>
//   )
// }

// export default Navigation

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
  z-index: 10;
  position: relative;
`

const Navbar = () => {
  return (
    <Nav>
      <LogoWrap to="/">
        <Image loading="eager" critical="true" name="logoTitle"></Image>
      </LogoWrap>
      <Burger />
    </Nav>
  )
}

export default Navbar
