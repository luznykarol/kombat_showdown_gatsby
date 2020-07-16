import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image/image"
import SEO from "../components/seo"
import Background from "../components/background"
import Button from "../components/button/button"

const IndexPage = () => (
  <Layout>
    {/* <Background page={"mainBg"}> */}
    <SEO title="Home" />
    <h1>Największy turniej</h1>
    <Button sizeL linkTo={"/#"} text={"See Testimonials"} bordered>
      See Testimonials
    </Button>
  </Layout>
)

export default IndexPage
