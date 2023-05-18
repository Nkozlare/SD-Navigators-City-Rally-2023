import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { StyledSection } from '../StyledComponents.jsx'

const StyledTitle = styled(StyledSection)`
  flex-direction: row;
  margin-top: 1rem;
  margin-bottom: -2rem;
  img {
    width: 10rem;
    height: auto;
    margin-right: 5rem;
  }
  h1 {
    font-size: 4rem;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 1rem;
    img {
      margin-right: 0rem;
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    h1 {
      font-size: 3rem;
      text-align: center;
    }
    img {
      width: 5rem;
      margin-right: 0rem;
      margin-bottom: 1rem;
    }
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
  @media (max-width: 1200px) {
    flex-flow: row wrap;
    gap: 1rem;
    a {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 800px) {
    flex-direction: row;
    flex-flow: row wrap;
    a {
      font-size: 1rem;
    }
  }
`

export default function TitleBar () {
  function handleScroll (section) {
    let offsetTop  = document.getElementById(section).offsetTop;
    window.scrollTo({
      top: offsetTop-0,
      behavior: "smooth"
    });
  }

  return (
    <StyledTitle>
      <img src='https://www.navigators.org/wp-content/uploads/2018/04/Navigators-Favicon.png'/>
      <StyledLinks>
      <a onClick={() => { handleScroll("speaker")}}>Conference Speaker</a>
      <a onClick={() => { handleScroll("connection")}}>Connections</a>
      <a onClick={() => { handleScroll("handouts")}}>Handouts</a>
      </StyledLinks>
    </StyledTitle>
  )
}