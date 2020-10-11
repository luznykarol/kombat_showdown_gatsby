import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CollapseWrap from "../components/collapseWrap/collapseWrap"

const Faq = () => {
  return (
    <Layout>
      <SEO title="The Kombat Showdown / FAQ" />
      <>
        <div className="wrapper">
          <section className="hero">
            {" "}
            <h1>FAQ</h1>
          </section>
          <CollapseWrap></CollapseWrap>
        </div>
      </>
    </Layout>
  )
}

export default Faq
