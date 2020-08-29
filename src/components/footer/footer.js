import React from "react"
import styled from "styled-components"
import Image from "../image/image"

const Footer = styled.footer`
  z-index: 1;
  position: relative;
  background-color: #fff;
  width: 100%;
  ${"" /* height: 100px; */}
  display: flex;
  box-shadow: 0 -6px 9px rgba(95, 121, 246, 0.8);
  align-items: center;
  margin: 80px auto 0 auto;
`

const FooterWrap = styled.div`
  max-width: 1185px;
  width: 100%;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 520px) {
    flex-direction: column;
    justify-content: center;
  }
`

const SocialList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 180px;
  width: 100%;
  margin: 0 0 0 10px;
`

const SocialWrap = styled.div`
  display: flex;
  max-width: 350px;
  width: 100%;
  align-items: center;

  justify-content: flex-end;

  @media (max-width: 520px) {
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
  background: #4b597b;
  position: relative;

  &:hover {
    transform: translateY(-2px);
    transition: 0.3s all ease;
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

const SocialTwitch = styled(SocialLink)`
  &:hover {
    background: #6441a4;
  }
`

const SocialYoutube = styled(SocialLink)`
  &:hover {
    background: #ff0000;
  }
`

const SocialInstagram = styled(SocialLink)`
  &:hover {
    background: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
  }
`

const SocialFacebook = styled(SocialLink)`

&:hover {
  background: #4267B2;
}
 
  );
`

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

const RightWrap = styled.div``

const Navigation = () => {
  return (
    <Footer id="contact">
      <FooterWrap>
        <LogoWrap>
          <Image name="logoMain"></Image>
        </LogoWrap>
        <ContactLink href="mailto:thekombatshowdown@gmail.com">
          thekombatshowdown@gmail.com
        </ContactLink>

        <SocialWrap>
          <SocialList>
            <SocialTwitch>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="0.97em"
                height="1em"
                viewBox="0 0 1600 1664"
              >
                <path
                  d="M800 434v434H655V434h145zm398 0v434h-145V434h145zm0 760l253-254V145H257v1049h326v217l217-217h398zM1596 0v1013l-434 434H836l-217 217H402v-217H4V289L113 0h1483z"
                  fill="#FFF"
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
                  fill="#fff"
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
                  fill="#fff"
                />
              </svg>
            </SocialFacebook>
            <SocialInstagram
              href="https://www.instagram.com/thekombatshowdown/"
              noopener="noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="0.88em"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  fill="#fff"
                />
              </svg>
            </SocialInstagram>
          </SocialList>
        </SocialWrap>
      </FooterWrap>
    </Footer>
  )
}

export default Navigation
