import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { StyledSection } from '../StyledComponents.jsx'

const StyledName = styled(StyledSection)`
  background-image: url("https://images.unsplash.com/photo-1517384084767-6bc118943770?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fG9jZWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  color: #004d4d;
  margin-top: 3rem;
  border-bottom: 1px solid #004d4d;
  border-top: 1px solid #004d4d;
  h1 {
    text-align: center;
    font-size: 12rem;
    margin-bottom: 10rem;
    transition: 0.8s;
    transition-timing-function: ease-out;
    border-bottom: 2px solid #004d4d;
    width: 70rem;
    &:hover {
      color: #690000;
      width: 80rem;
      border-bottom: 2px solid #690000;
    }
    @media (max-width: 800px) {
      font-size: 4rem;
      width: 15rem;
      margin: 6rem;
      &:hover {
        color: #690000;
        border-bottom: 2px solid #690000;
        width: 15rem;
      }
    }
  }
`

export default function ConferenceName () {
  return (
    <StyledName>
      <h1>RALLY 2023</h1>
    </StyledName>
  )
}