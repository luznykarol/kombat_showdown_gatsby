/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navigation from "./navigation/navigation"
import Footer from "./footer/footer"
import Background from "./background"
import Header from "./header"
import "./layout.less"
import "../fonts/fonts.css"
import styled from "styled-components"
import colors from "../variables/colors"

const Layout = ({ children }) => {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const Wrapper = styled.div`
    ${"" /* min-height: 100%; */}
    min-height: 913px;
    max-width: 1185px;
    width: 100%;
    padding: 30px 30px 0 30px;
    height: 100%;
    ${"" /* margin: 0 auto -100px auto; */}
    margin: 0 auto;
    position: relative;
    z-index: 100;

    @media (max-width: 414px) {
      padding: 15px 15px 0;
    }
  `

  const Bg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-image: linear-gradient(-90deg, #02203c, #001528);
    @media (max-width: 414px) {
      padding: 15px 15px 0;
    }
  `

  // const Push = styled.div`
  //   height: 100px;
  // `

  return (
    <>
      <Background page={"starsbg"}></Background>
      <Bg></Bg>
      <Wrapper>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <Navigation />

        {/* <div
          style={{
            height: `100%`,
            margin: `0 auto`,
            maxWidth: 960,
          }}
        > */}
        <main>{children}</main>
        {/* </div> */}
        {/* <Push></Push> */}
      </Wrapper>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
