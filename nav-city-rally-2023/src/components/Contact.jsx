import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { StyledSection, RegisterButton } from '../StyledComponents.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faChevronUp, faChevronDown, faCircle } from '@fortawesome/free-solid-svg-icons'

const StyledContact = styled(StyledSection)`
  background-color: #dddddd;
  color: #004d4d;
  padding: 4rem;
  width: 100vw;
  p {
    font-size: 1.4rem;
    font-weight: 600;
    text-align: center;
  }
  a {
    font-size: 1.4rem;
    font-weight: 600;
    text-decoration: none;
    color: #004d4d;
    transition: 0.3s;
    text-align: center;
    &:hover {
      color: #690000;
    }
  }
  @media (max-width: 800px) {
    a {
      width: 18rem;
      img {
        width: 18rem;
      }
    }
  }
`

const BackToTop = styled.div`
  border-top: 1px solid #004d4d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  text-align: center;
  border-bottom: 1px solid #004d4d;
  cursor: pointer;
  font-weight: bold;
  color: #004d4d;
  img {
    width: 20rem;
  }
`



export default function Contact () {
  function handleScroll (section) {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <>
      <StyledContact>
        <h1>
          Contact
        </h1>
        <p>
        Email: sdnavsrally2023@gmail.com
        </p>
        <a href='https://navigators.regfox.com/rally-2023' target="_blank"><RegisterButton style={{marginTop: '4rem'}}>Register</RegisterButton></a>
      </StyledContact>
      <BackToTop onClick={() => { handleScroll('title-bar'); console.log('clicked')}}>
        <img src="https://i.ibb.co/W0h5ZWy/Black-Logo-on-White.png" alt="SD-Nav-Logo" border="0"/>
        <div>
          top 
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
      </BackToTop>
    </>
  )
}