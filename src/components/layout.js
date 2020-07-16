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
import styled from "styled-components"

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
    min-height: 100%;
    max-width: 1185px;
    width: 100%;
    padding: 30px 30px 0 30px;
    margin: 0 auto -100px auto;
  `

  const Push = styled.div`
    height: 100px;
  `

  return (
    <>
      <Wrapper>
        <Background page={"subBg"}>
          {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
          <Navigation />

          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0 1.0875rem 1.45rem`,
            }}
          >
            <main>{children}</main>
            {/* <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer> */}
          </div>
        </Background>
        <Push></Push>
      </Wrapper>

      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
