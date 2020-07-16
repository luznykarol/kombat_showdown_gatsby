import React from "react"
import styled from "styled-components"

const CollapseItem = styled.div`
  max-width: 700px;
  width: 100%;
  padding: 16px;
  margin: 15px auto 0 auto;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.11);
  position: relative;
`

const CollapseTitle = styled.p`
  position: relative;
  font-size: 20px;
  padding: 0 80px 0 0;
`
const CollapseIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 11px;
  width: 30px;
  height: 30px;
  transition: 0.3s all ease-out;
  transform: ${faq =>
    faq.open
      ? "translateY(-50%) rotate(180deg)"
      : "translateY(-50%) rotate(0deg)"};
`

const CollapseText = styled.div`
  max-height: ${faq => (faq.open ? `1000px` : `0px`)};
  opacity: ${faq => (faq.open ? `1` : `0`)};
  overflow-y: hidden;
  transition: 0.4s all ease;
  padding: 0 80px 0 0;
  margin-top: ${faq => (faq.open ? `8px` : `0`)};
`

const Collapse = ({ faq, index, toggleFAQ }) => {
  return (
    <CollapseItem key={index} onClick={() => toggleFAQ(index)}>
      <CollapseIcon open={faq.open}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M6 7l6 6l6-6l2 2l-8 8l-8-8z"
            fill="#626262"
            fill-rule="evenodd"
          />
        </svg>
      </CollapseIcon>
      <CollapseTitle>{faq.question}</CollapseTitle>
      <CollapseText open={faq.open}>{faq.answer}</CollapseText>
    </CollapseItem>
  )
}

export default Collapse
