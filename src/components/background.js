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
        position: "",
        backgroundPosition: "",
      }}
    >
      <div className={shapes}>{children}</div>
    </BackgroundImage>
  )
}

export default Background
