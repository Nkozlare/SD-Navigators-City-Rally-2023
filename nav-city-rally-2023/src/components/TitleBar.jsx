import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { StyledSection } from '../StyledComponents.jsx'

const StyledTitle = styled(StyledSection)`
  margin-top: 3rem;
  img {
    width: 10rem;
    height: auto;
  }
  h1 {
    font-size: 4rem;
  }
`
const StyledLinks = styled(StyledSection)`
  flex-direction: row;
  gap: 2rem;
  a {
    text-decoration: none;
    color: #dddddd;
    font-size: 1.5rem;
    font-weight: bold;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      color: #690000;
    }
  }
`

export default function TitleBar () {
  function handleScroll (section) {
    let offsetTop  = document.getElementById(section).offsetTop;
    window.scrollTo({
      top: offsetTop-100,
      behavior: "smooth"
    });
  }

  return (
    <StyledTitle>
      <img src='https://www.navigators.org/wp-content/uploads/2018/04/Navigators-Favicon.png'/>
      <h1>
        SD Navigators City Rally 2023
      </h1>
      <StyledLinks>
      <a href='https://www.w3schools.com' target='_blank'>Register</a>
      <a onClick={() => { handleScroll("info")}}>Info</a>
      <a onClick={() => { handleScroll("speaker")}}>Conference Speaker</a>
      <a onClick={() => { handleScroll("workshops")}}>Workshops</a>
      <a onClick={() => { handleScroll("calendar")}}>Calendar</a>
      <a onClick={() => { handleScroll("merch")}}>Merch</a>
      <a onClick={() => { handleScroll("contact")}}>Contact</a>
      </StyledLinks>
    </StyledTitle>
  )
}