import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card/card"
import rulesData from "../data/rulesData"
const RulesList = styled.ul`
  li {
    &:not(:last-of-type) {
      margin: 0 0 8px 0;
    }

    ul {
      margin: 8px 0 0 16px;
      padding: 0 0 0 16px;
      li {
        list-style-type: square;
      }
    }
  }
`

const Rules = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Regulamin Turnieju</h1>
    <Card>
      <h3>{rulesData.details.title}</h3>
      <RulesList>
        {rulesData.details.text.map(i => (
          <li>{i}</li>
        ))}
      </RulesList>

      <h3>{rulesData.match.title}</h3>
      <RulesList>
        {rulesData.match.text.map(i => (
          <li>{i}</li>
        ))}
        <li>
          <ul>
            {rulesData.match.subText.map(i => (
              <li>{i}</li>
            ))}
          </ul>
        </li>
      </RulesList>
      <h3>{rulesData.punctuality.title}</h3>
      <RulesList>
        {rulesData.punctuality.text.map(i => (
          <li>{i}</li>
        ))}
      </RulesList>

      <h3>{rulesData.results.title}</h3>
      <RulesList>
        {rulesData.results.text.map(i => (
          <li>{i}</li>
        ))}
      </RulesList>

      <h3>{rulesData.rest.title}</h3>
      <RulesList>
        {rulesData.rest.text.map(i => (
          <li>{i}</li>
        ))}
      </RulesList>

      <h3>{rulesData.stream.title}</h3>
      <RulesList>
        <li>{rulesData.stream.text}</li>
      </RulesList>
    </Card>
  </Layout>
)

export default Rules
