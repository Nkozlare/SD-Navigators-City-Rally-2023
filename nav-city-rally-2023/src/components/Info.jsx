import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import {
  StyledSection,
  RegisterButton,
 } from '../StyledComponents.jsx'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faChevronLeft, faChevronRight, faChevronUp, faChevronDown, faCircle } from '@fortawesome/free-solid-svg-icons'

const StyledInfo = styled(StyledSection)`
  background-color: #dddddd;
  width: 100vw;
  border-bottom: 1px solid #004d4d;
  h1 {
    font-size: 2rem;
    color: #004d4d;
    padding-top: 6rem;
  }
  button {
    margin-top: 4rem;
    margin-bottom:6rem;
  }
  @media (max-width: 800px) {
    width: 50rem;
    h1 {
      width: 15rem;
      text-align: center;
      font-size: 1.5rem;
    }
  }
`

const StyledMeta = styled(StyledSection)`
  background-color: white;
  padding: 4rem;
  @media (max-width: 800px) {
    width: 42rem;
  }
`

const StyledImage = styled(StyledSection)`
  background-image: url("https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  width: 80%;
  height: 50rem;
  overflow: hidden;
  h1 {
    text-align: center;
    border-bottom: 1px solid #dddddd;
    padding: 1rem;
    width: 40rem;
    @media (max-width: 800px) {
      width: 15rem;
    }
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #69000086;
    width: 100%;
    color: #dddddd;
    transition: 0.6s;
    &:hover {
      background-color: #690000ac;
      padding: 4rem;
    }
    h2 {
      text-align: center;
    }
    ul {
      width: 30rem;
      font-weight: bold;
      li {
        margin-top: 0.5rem;
        font-size: 1.1rem;
      }
      @media (max-width: 800px) {
        width: 16rem;
        margin-left: -1rem;
      }
    }
    @media (max-width: 800px) {
      width: 30rem;
    }
  }
  @media (max-width: 800px) {
    width: 40rem;
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

export default function Info () {
  const [info, setInfo] = useState([
    'Date: April 15, 2023',
    'Time: 9:00 am to 5:00 pm',
    'Registration from 8 to 8:45, first plenary at 9',
    'Location: New LIfe Presbyterian Church (30 seconds north of the 8)'
  ])
  let infoList = info.map((line, i) => {
    return (
      <li key={i}>
        {line}
      </li>
    )
  })
  function handleScroll (section) {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <>
      <StyledInfo>
        <h1>
        San Diego Navigators City Conference
        </h1>
        <RegisterButton>
          Register here
        </RegisterButton>
      </StyledInfo>
      <StyledMeta>
        <StyledImage id='info'>
          <div>
            <h1 >
              A Navigators Conference
              <br></br>
              RALLY 2023
            </h1>
            <h2>
              General Info
            </h2>
            <ul>
              {infoList}
              <li><a href='https://www.google.com/maps/place/5333+Lake+Murray+Blvd,+La+Mesa,+CA+91942/@32.7758948,-117.0461977,17z/data=!3m1!4b1!4m5!3m4!1s0x80d956fa8023fce1:0xab59759d56266d91!8m2!3d32.7758948!4d-117.044009' target='blank' style={{textDecoration: 'none', color: '#dddddd'}}> Address: 5333 Lake Murray Blvd, La Mesa, CA 91942</a>
              </li>
            </ul>
          </div>
        </StyledImage>
      </StyledMeta>
      <BackToTop onClick={() => { handleScroll('title-bar'); console.log('clicked')}}>top <FontAwesomeIcon icon={faChevronUp} /></BackToTop>
    </>
  )
}