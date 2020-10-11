import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import { ReactSVG } from "react-svg"
import FormRegister from "../components/form/form"

import Button from "../components/button/button"
import Hexagon from "../components/hexagon/hexagon"
import styled from "styled-components"
import Image from "../components/image/image"
import { Link } from "gatsby"

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
    <div className="wrapper">
      <section className="hero">
        <h1>
          Największy polski turniej{" "}
          <span className="hidden">Mortal Kombat 11</span>
        </h1>
        <Image className="mklogo" name="mklogo"></Image>
      </section>
    </div>

    <div className="wrapper">
      <section className="section section__info">
        <h2>O turnieju</h2>
        <p className="section-para">
          Pełne zasady turnieju dostępne na podstronie
          <Link to="rules">Regulamin</Link>
        </p>

        <div className="items-container">
          <div className="info-item">
            <Image name="date"></Image>
            <h3>Data</h3>
            <p> Sobota, 17.10.2020</p>
          </div>
          <div className="info-item">
            <Image name="platform"></Image>
            <h3>Platforma</h3>
            <p>Playstation 4</p>
          </div>
          <div className="info-item">
            <Image name="fee"></Image>
            <h3>Wpisowe</h3>
            <p>20 PLN</p>
          </div>
        </div>
      </section>
    </div>

    <div className="wrapper">
      <FormRegister />

      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://discord.gg/XrqkGsH"
        className="discord"
      >
        <p> Dołącz do discorda Polska Scena NRS</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          width="60px"
          height="60px"
          viewBox="0 0 256 293"
        >
          <path
            d="M226.011 0H29.99C13.459 0 0 13.458 0 30.135v197.778c0 16.677 13.458 30.135 29.989 30.135h165.888l-7.754-27.063l18.725 17.408l17.7 16.384L256 292.571V30.135C256 13.458 242.542 0 226.011 0zm-56.466 191.05s-5.266-6.291-9.655-11.85c19.164-5.413 26.478-17.408 26.478-17.408c-5.998 3.95-11.703 6.73-16.823 8.63c-7.314 3.073-14.336 5.12-21.211 6.291c-14.044 2.633-26.917 1.902-37.888-.146c-8.339-1.61-15.507-3.95-21.504-6.29c-3.365-1.317-7.022-2.926-10.68-4.974c-.438-.293-.877-.439-1.316-.732c-.292-.146-.439-.292-.585-.438c-2.633-1.463-4.096-2.487-4.096-2.487s7.022 11.703 25.6 17.261c-4.388 5.56-9.801 12.142-9.801 12.142c-32.33-1.024-44.617-22.235-44.617-22.235c0-47.104 21.065-85.285 21.065-85.285c21.065-15.799 41.106-15.36 41.106-15.36l1.463 1.756C80.75 77.53 68.608 89.088 68.608 89.088s3.218-1.755 8.63-4.242c15.653-6.876 28.088-8.777 33.208-9.216c.877-.147 1.609-.293 2.487-.293a123.776 123.776 0 0 1 29.55-.292c13.896 1.609 28.818 5.705 44.031 14.043c0 0-11.556-10.971-36.425-18.578l2.048-2.34s20.041-.44 41.106 15.36c0 0 21.066 38.18 21.066 85.284c0 0-12.435 21.211-44.764 22.235zm-68.023-68.316c-8.338 0-14.92 7.314-14.92 16.237c0 8.924 6.728 16.238 14.92 16.238c8.339 0 14.921-7.314 14.921-16.238c.147-8.923-6.582-16.237-14.92-16.237m53.394 0c-8.339 0-14.922 7.314-14.
        922 16.237c0 8.924 6.73 16.238 14.922 16.238c8.338 0 14.92-7.314 14.92-16.238c0-8.923-6.582-16.237-14.92-16.237"
            fill="#7289DA"
          />
        </svg>
      </a>
    </div>
  </Layout>
)

export default IndexPage
