import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

import FormRegister from "../components/form/form"

import Button from "../components/button/button"
import styled from "styled-components"

const ButtonWrap = styled.div`
  max-width: 500px;
  margin: 60px auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Największy turniej zrzeszający Polskich graczy Mortal Kombat 11</h1>
    <ButtonWrap>
      <Button linkTo="#contactForm" text="Zapisz się" />
      <Button linkTo="/about" bordered text="Dowiedz się więcej" />
    </ButtonWrap>
    {/* <Button sizeL linkTo={"/#"} text={"Zapisz się na turniej!"} bordered>
      See Testimonials
    </Button> */}
    <FormRegister></FormRegister>
  </Layout>
)

export default IndexPage
