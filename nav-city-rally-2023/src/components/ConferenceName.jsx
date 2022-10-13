import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { StyledSection } from '../StyledComponents.jsx'

const StyledName = styled(StyledSection)`
  background-image: url("https://images.unsplash.com/photo-1495168851820-454d9d45386b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHNhbiUyMGRpZWdvJTIwYmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60");
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
      font-size: 4rem;;
      width: 30rem;
    }
  }
  p {
    font-size: 4rem;
    margin-bottom: 7.5rem;
  }
`

export default function ConferenceName () {
  return (
    <StyledName>
      <h1>RALLY 2023</h1>
    </StyledName>
  )
}