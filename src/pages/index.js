import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image/image"
import SEO from "../components/seo"
import Background from "../components/background"

const IndexPage = () => (
  <Layout>
    {/* <Background page={"mainBg"}> */}
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>

    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    {/* </Background> */}
  </Layout>
)

export default IndexPage
