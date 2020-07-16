import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CollapseWrap from "../components/collapseWrap/collapseWrap"

const Faq = () => {
  return (
    <Layout>
      <SEO title="Page two" />
      <>
        {/* {faqs.map((faq, i) => (
          <Collapse
            faq={faq}
            key={i}
            index={i}
            toggleFAQ={toggleFAQ}
          ></Collapse>
        ))} */}
        <CollapseWrap></CollapseWrap>
      </>
    </Layout>
  )
}

export default Faq
