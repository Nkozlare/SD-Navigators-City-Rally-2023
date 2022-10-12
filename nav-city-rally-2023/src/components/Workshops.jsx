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
  background-color: #ffffff;
  width: 100vw;
  border-bottom: 1px solid #004d4d;
  color: #690000;
  h1{
    margin-bottom: 5rem;
    font-size: 3.5rem;
  }
`


export default function Workshops () {


  return (
    <WorkshopSection>
      <h1>
        Workshops
      </h1>
      <Carousel/>
    </WorkshopSection>
  )
}