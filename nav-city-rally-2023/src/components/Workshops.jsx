import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Carousel from './workshops/Carousel.jsx'
import {
  StyledSection,
  RightButton,
  LeftButton
 } from '../StyledComponents.jsx'
import { faChevronLeft, faChevronRight, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WorkshopSection = styled(StyledSection)`
  padding: 4rem;
  padding-top: 4rem;
  padding-bottom: 10rem;
  background-color: #ffffff;
  width: 100vw;
  color: #690000;
  h1{
    margin-bottom: 3rem;
    font-size: 3.5rem;
  }
  p {
    font-size: 1.5rem;
    text-align: center;
  }
`
const BackToTop = styled.div`
  background-color: #ffffff;
  text-align: center;
  border-bottom: 1px solid #004d4d;
  cursor: pointer;
  font-weight: bold;
  color: #004d4d;
`


export default function Workshops () {
  function handleScroll (section) {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  return (
    <>
      <WorkshopSection>
        <h1>
          Workshops
        </h1>
        <p>
          You can choose two workshops.
        </p>
        <Carousel/>
      </WorkshopSection>
      <BackToTop onClick={() => { handleScroll('title-bar'); console.log('clicked')}}>top <FontAwesomeIcon icon={faChevronUp} /></BackToTop>
    </>
  )
}