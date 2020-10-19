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

const SocialList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 180px;
  width: 100%;
`

const SocialWrap = styled.div`
  display: flex;
  margin: 20px auto 0 auto;
  max-width: 350px;
  width: 100%;
  align-items: center;

  justify-content: center;

  @media (max-width: 768px) {
    justify-content: center;
    margin: 24px auto 0 auto;
    p {
      display: none;
    }
  }
`

const SocialText = styled.p`
  font-size: 16px;
  font-weight: 600;
`

const ContactLink = styled.a`
  font-size: 14px;
  font-weight: 600;
  background: linear-gradient(
    -45deg,
    rgb(17, 17, 103) 0%,
    rgb(95, 121, 246) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 1px 9px rgba(95, 121, 246, 0.8);
  &:after {
    background-image: linear-gradient(
      -45deg,
      rgb(17, 17, 103) 0%,
      rgb(95, 121, 246) 100%
    );
  }

  @media (max-width: 768px) {
    margin: 24px auto 0 auto;
  }
`

const SocialMail = styled.a`
  font-size: 16px;
  font-weight: 600;
`

const SocialLink = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: #fff;
  position: relative;

  &:hover {
    transform: translateY(-2px);
    transition: 0.3s all ease;

    svg {
      fill: #fff;
    }
  }
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${"" /* width: 30px;
    z-index: 10;
    position: relative;
    height: 30px; */};
  }
`

const SocialTwitch = styled(SocialLink)``

const SocialYoutube = styled(SocialLink)``

const SocialInstagram = styled(SocialLink)``

const SocialFacebook = styled(SocialLink)``

const LogoWrap = styled.div`
  width: 100px;
  height: 70px;
  ${"" /* positon: relative; */}
  position: absolute;
  top: -45px;
  left: 50%;
  transform: translate(-50%, 0);

  ${"" /* @media (max-width: 520px) {
    position: absolute;
    top: -45px;
    left: 50%;
    transform: translate(-50%, 0);
  } */}
`

const IndexPage = () => (
  <Layout>
    <SEO title="The Kombat Showdown / Home" />
    <div className="wrapper">
      <section className="hero">
        <h1>
          Największy polski turniej
          <span className="hidden">Mortal Kombat 11</span>
        </h1>
        <Image className="mklogo" name="mklogo"></Image>
        <h2 className="margin-helper">Powróci już niedługo!</h2>
        <p className="section-para margin-helper--2">
          Śledź nas na social mediach aby nie przegapić nadchodzących
          aktualności
        </p>
        <SocialWrap>
          <SocialList>
            <SocialTwitch
              href="https://twitch.tv/thekombatshowdown/profile"
              target="_blank"
              noopener="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="0.97em"
                height="1em"
                viewBox="0 0 1600 1664"
              >
                <path
                  d="M800 434v434H655V434h145zm398 0v434h-145V434h145zm0 760l253-254V145H257v1049h326v217l217-217h398zM1596 0v1013l-434 434H836l-217 217H402v-217H4V289L113 0h1483z"
                  fill="#4b597b"
                />
              </svg>
            </SocialTwitch>
            <SocialYoutube
              target="_blank"
              noopener="noreferrer"
              href="https://www.youtube.com/channel/UCuSO8M8dOGKxPdNnErh0fCA"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.13em"
                height="1em"
                viewBox="0 0 576 512"
              >
                <path
                  d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z"
                  fill="#4b597b"
                />
              </svg>
            </SocialYoutube>
            <SocialFacebook
              target="_blank"
              noopener="noreferrer"
              href="https://www.facebook.com/The-Kombat-Showdown-104139237939278/?ref=page_internal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="0.63em"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  fill="#4b597b"
                />
              </svg>
            </SocialFacebook>
            <SocialInstagram
              href="https://www.instagram.com/thekombatshowdown/"
              noopener="noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/#4b597b"
                width="0.88em"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  fill="#4b597b"
                />
              </svg>
            </SocialInstagram>
          </SocialList>
        </SocialWrap>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://discord.gg/XrqkGsH"
          className="discord"
        >
          <p className=""> oraz dołącz do discorda Polska Scena NRS</p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            width="40px"
            height="40px"
            viewBox="0 0 256 293"
          >
            <path
              d="M226.011 0H29.99C13.459 0 0 13.458 0 30.135v197.778c0 16.677 13.458 30.135 29.989 30.135h165.888l-7.754-27.063l18.725 17.408l17.7 16.384L256 292.571V30.135C256 13.458 242.542 0 226.011 0zm-56.466 191.05s-5.266-6.291-9.655-11.85c19.164-5.413 26.478-17.408 26.478-17.408c-5.998 3.95-11.703 6.73-16.823 8.63c-7.314 3.073-14.336 5.12-21.211 6.291c-14.044 2.633-26.917 1.902-37.888-.146c-8.339-1.61-15.507-3.95-21.504-6.29c-3.365-1.317-7.022-2.926-10.68-4.974c-.438-.293-.877-.439-1.316-.732c-.292-.146-.439-.292-.585-.438c-2.633-1.463-4.096-2.487-4.096-2.487s7.022 11.703 25.6 17.261c-4.388 5.56-9.801 12.142-9.801 12.142c-32.33-1.024-44.617-22.235-44.617-22.235c0-47.104 21.065-85.285 21.065-85.285c21.065-15.799 41.106-15.36 41.106-15.36l1.463 1.756C80.75 77.53 68.608 89.088 68.608 89.088s3.218-1.755 8.63-4.242c15.653-6.876 28.088-8.777 33.208-9.216c.877-.147 1.609-.293 2.487-.293a123.776 123.776 0 0 1 29.55-.292c13.896 1.609 28.818 5.705 44.031 14.043c0 0-11.556-10.971-36.425-18.578l2.048-2.34s20.041-.44 41.106 15.36c0 0 21.066 38.18 21.066 85.284c0 0-12.435 21.211-44.764 22.235zm-68.023-68.316c-8.338 0-14.92 7.314-14.92 16.237c0 8.924 6.728 16.238 14.92 16.238c8.339 0 14.921-7.314 14.921-16.238c.147-8.923-6.582-16.237-14.92-16.237m53.394 0c-8.339 0-14.922 7.314-14.
        922 16.237c0 8.924 6.73 16.238 14.922 16.238c8.338 0 14.92-7.314 14.92-16.238c0-8.923-6.582-16.237-14.92-16.237"
              fill="#7289DA"
            />
          </svg>
        </a>
      </section>
    </div>
  </Layout>
)

export default IndexPage
