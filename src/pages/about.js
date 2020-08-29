import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hexagon from "../components/hexagon/hexagon"
import Image from "../components/image/image"
import styled from "styled-components"

const HexWrap = styled.div`
  max-width: 900px;
  margin: 120px auto 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HexItemWrap = styled.div``

const IconWrap = styled.div`
  max-width: 90px;
  width: 100%;
`

const HexHeading = styled.h4`
  color: #fff;
  font-size: 24px;
  text-align: center;
  margin: 54px auto 0 auto;
`

const pageHeading = styled.h2`
  color: #fff;
  text-align: center;
  font-size: ;
`

const About = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>O turnieju</h1>
    <HexWrap>
      <HexItemWrap>
        <Hexagon>
          <IconWrap></IconWrap>
        </Hexagon>
        <HexHeading>Data</HexHeading>
      </HexItemWrap>
      <HexItemWrap>
        <Hexagon>
          <IconWrap></IconWrap>
        </Hexagon>
        <HexHeading>Platforma</HexHeading>
      </HexItemWrap>
      <HexItemWrap>
        <Hexagon>
          <IconWrap></IconWrap>
        </Hexagon>
        <HexHeading>Wpisowe</HexHeading>
      </HexItemWrap>
      <HexItemWrap>
        <Hexagon>
          <IconWrap></IconWrap>
        </Hexagon>
        <HexHeading>Miejsce</HexHeading>
      </HexItemWrap>
    </HexWrap>
    <h2>Poprzednie edycje</h2>
    <h2></h2>
  </Layout>
)

export default About
