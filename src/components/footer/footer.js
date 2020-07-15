import React from "react"
import styled from "styled-components"
import Image from "../image/image"
import { Link } from "gatsby"

const FooterWrap = styled.footer`
  z-index: 1;
  position: relative;

  background-color: #fff;
  width: 100%;
  padding: 30px;
`

const Navigation = () => {
  return <FooterWrap id="footer"></FooterWrap>
}

export default Navigation
