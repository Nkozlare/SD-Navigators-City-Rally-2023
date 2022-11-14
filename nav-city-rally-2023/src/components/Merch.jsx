import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import {
  StyledSection,
  RightButton,
  LeftButton
 } from '../StyledComponents.jsx'
import { faChevronLeft, faChevronRight, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MerchSection = styled(StyledSection)`
  background-color: white;
  flex-direction: column;
  width: 100vw;
  color: #690000;
  padding-bottom: 0rem;
  h1 {
    margin: 5rem;
    margin-bottom: -2rem;
    font-size: 3.5rem;
    border-bottom: 1px solid;
    width: 40rem;
    text-align: center;
    padding-bottom: 2rem;
    transition: 0.6s;
    &:hover {
      width: 30rem;
    }
  }
  @media (max-width: 800px) {
    width: 35rem;
    gap: 2rem;
    h1 {
      width: 60%;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
    }
  }
`

const MerchCarousel = styled(StyledSection)`
  flex-direction: row;
  width: 30vw;
  @media (max-width: 600px) {
    width: 15rem;
    flex-direction: column;
    div {
      margin-bottom: 2rem;
    }
  }
`

const Shirt = styled(StyledSection)`
  flex-direction: column;
  width: 100vw;
  gap: 3rem;
  padding: 5rem;
  height: 30rem;
  justify-content: space-between;
  h2 {
    margin-bottom: -1rem;
  }
  img {
    object-fit: cover;
    height: 20rem;
    width: 25rem;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 2rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    padding:1rem;
    padding: 0;
    gap: 3rem;
    width: 20rem;
    height: auto;
    img {
      object-fit: cover;
      height: auto;
      width: 20rem;
    }
  }
`

const Journal = styled(Shirt)`
  img {
    height: auto;
    width: 15rem;
  }
  @media (max-width: 600px) {
    img {
      width: 10rem;
    }
  }
`

const BackToTop = styled.div`
  background-color: white;
  text-align: center;
  border-bottom: 1px solid #004d4d;
  cursor: pointer;
  font-weight: bold;
  color: #004d4d;
`

export default function Merch () {

  return (
    <>
      <MerchSection>
        <h1>
          Merch
        </h1>
        <MerchCarousel>
          <Shirt>
            <h2>Shirt</h2>
            <img src="https://i.ibb.co/tKtm8TP/Screen-Shot-2022-11-11-at-1-23-26-PM.png"/>
          </Shirt>
          <Journal>
            <h2>Journal</h2>
            <img src='https://i.ibb.co/W5VFvwq/4imprint-Artwork-Approval.jpg'/>
          </Journal>
        </MerchCarousel>
      </MerchSection>
      <BackToTop onClick={() => { handleScroll('title-bar'); console.log('clicked')}}>top <FontAwesomeIcon icon={faChevronUp} /></BackToTop>
    </>
  )
}