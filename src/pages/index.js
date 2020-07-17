import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

import FormRegister from "../components/form/form"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Największy turniej zrzeszający Polskich graczy Mortal Kombat 11</h1>
    {/* <Button sizeL linkTo={"/#"} text={"Zapisz się na turniej!"} bordered>
      See Testimonials
    </Button> */}
    <FormRegister></FormRegister>
  </Layout>
)

export default IndexPage
