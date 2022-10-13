import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { StyledSection } from '../StyledComponents.jsx'

const StyledContact = styled(StyledSection)`
  background-color: white;
  color: #006d6d;
  padding: 6rem;
  width: 100vw;
  border-bottom: 1px solid #004d4d;
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


export default function Contact () {
  return (
    <StyledContact>
      <h1>
        Contact
      </h1>
      <p>
        sunlandfallcon@gmail.com
      </p>
      <h1>
        Location
      </h1>
      <a href='https://www.google.com/maps/place/5333+Lake+Murray+Blvd,+La+Mesa,+CA+91942/@32.7758948,-117.0461977,17z/data=!3m1!4b1!4m5!3m4!1s0x80d956fa8023fce1:0xab59759d56266d91!8m2!3d32.7758948!4d-117.044009' target='blank'> Address: 5333 Lake Murray Blvd, La Mesa, CA 91942</a>
      <a href="https://imgbb.com/"><img src="https://i.ibb.co/0rS0w64/SD-Nav-Logo.jpg" alt="SD-Nav-Logo" border="0"/></a>
    </StyledContact>
  )
}