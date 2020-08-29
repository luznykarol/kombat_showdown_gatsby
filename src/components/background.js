import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

export const fluidImageBg = graphql`
  fragment fluidImageBg on File {
    childImageSharp {
      fluid(quality: 90, maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

const Background = ({ children, page, shapes, className }) => {
  const data = useStaticQuery(graphql`
    query {
      mainBg: file(relativePath: { eq: "background.png" }) {
        ...fluidImageBg
      }
      subBg: file(relativePath: { eq: "background2.png" }) {
        ...fluidImageBg
      }
      starsbg: file(relativePath: { eq: "bg/3.png" }) {
        ...fluidImageBg
      }
    }
  `)
  return (
    <BackgroundImage
      // className="dupa"
      // className={className}
      fluid={data[page].childImageSharp.fluid}
      backgroundColor={`white`}
      style={{
        // Defaults are overwrite-able by setting one or each of the following:
        // position: "absolute",
        zIndex: "0",
        backgroundPosition: "",
        height: "100%",
        position: "absolute",
        width: "100%",
      }}
    >
      {/* <div style={{ height: `100%` }} className={shapes}>
        {children}
      </div> */}
      {children}
    </BackgroundImage>
  )
}

export default Background
