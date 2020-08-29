import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const ButtonGradient = styled.button`
  padding: 0 20px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  -webkit-font-smoothing: antialiased !important;
  color: #fff;
  text-shadow: 0 2px 9px #8963e3;
  width: 100%;
  height: 50px;
  text-transform: uppercase;
  font-size: 12px;
  box-shadow: 0 2px 9px rgba(95, 121, 246, 0.8);
  font-weight: 900;
  letter-spacing: 0.83px;
  line-height: 12px;
  max-width: 220px;
  width: 100%;
  margin: 0 auto;
  background-image: linear-gradient(-45deg, #111167 0%, #5f79f6 100%);
  border: none;
  outline: none;

  &:hover {
    transform: translateY(-2px);
    transition: 0.3s all ease;
  }
`

const ButtonLink = styled(props => <Link {...props} />)`
  padding: 0 20px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  -webkit-font-smoothing: antialiased !important;
  color: #fff;
  text-shadow: 0 2px 9px #8963e3;
  width: 100%;
  height: 50px;
  text-transform: uppercase;
  font-size: 12px;
  box-shadow: 0 2px 9px rgba(95, 121, 246, 0.8);
  font-weight: 900;
  letter-spacing: 0.83px;
  line-height: 12px;
  max-width: 220px;
  width: 100%;
  margin: 0 auto;
  margin: ${({ buttoncenter }) => (buttoncenter ? " 0 auto" : "0")};
  background: transparent;
  border: 2px solid #fff;
  &:hover {
    transform: translateY(-2px);
    transition: 0.3s all ease;
  }
`

const ButtonLinkGradient = styled(props => <Link {...props} />)`
  padding: 0 20px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  -webkit-font-smoothing: antialiased !important;
  color: #fff;
  text-shadow: 0 2px 9px #8963e3;
  width: 100%;
  height: 50px;
  text-transform: uppercase;
  font-size: 12px;
  box-shadow: 0 2px 9px rgba(95, 121, 246, 0.8);
  font-weight: 900;
  letter-spacing: 0.83px;
  line-height: 12px;
  max-width: 220px;
  width: 100%;
  margin: ${({ buttoncenter }) => (buttoncenter ? " 0 auto" : "0")};
  background-image: linear-gradient(-45deg, #111167 0%, #5f79f6 100%);

  &:hover {
    transform: translateY(-2px);
    transition: 0.3s all ease;
  }
`

const Button = ({ text, buttoncenter, bordered, linkTo, sizeL }) => (
  <>
    {linkTo ? (
      bordered ? (
        <ButtonLink buttoncenter={buttoncenter} to={linkTo}>
          {text}
        </ButtonLink>
      ) : (
        <ButtonLinkGradient buttoncenter={buttoncenter} to={linkTo}>
          {text}
        </ButtonLinkGradient>
      )
    ) : (
      <ButtonGradient buttoncenter={buttoncenter} type="submit">
        {text}
      </ButtonGradient>
    )}
  </>
)
export default Button
