import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image/image"
import SEO from "../components/seo"
import Background from "../components/background"
import Button from "../components/button/button"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Największy turniej zrzeszający Polskich graczy Mortal Kombat 11</h1>
    {/* <Button sizeL linkTo={"/#"} text={"Zapisz się na turniej!"} bordered>
      See Testimonials
    </Button> */}
  </Layout>
)

export default IndexPage
