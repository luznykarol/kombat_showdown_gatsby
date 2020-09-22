import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

import FormRegister from "../components/form/form"

import Button from "../components/button/button"
import Hexagon from "../components/hexagon/hexagon"
import styled from "styled-components"

const ButtonWrap = styled.div`
  max-width: 500px;
  margin: 60px auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;

    a {
      max-width: 400px;

      &:last-of-type {
        margin: 24px auto 0 auto;
      }
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="The Kombat Showdown / Home" />
    <h1>Największy turniej zrzeszający Polskich graczy Mortal Kombat 11</h1>
    {/* <ButtonWrap>
      <Button linkTo="#contactForm" text="Zapisz się" />
      <Button linkTo="/about" bordered text="Dowiedz się więcej" />
    </ButtonWrap> */}
    {/* <Button sizeL linkTo={"/#"} text={"Zapisz się na turniej!"} bordered>
      See Testimonials
    </Button> */}

    <FormRegister />
  </Layout>
)

export default IndexPage
