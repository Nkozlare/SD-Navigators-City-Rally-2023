import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { StyledSection } from '../StyledComponents.jsx'

const StyledCopyright = styled(StyledSection)`
  h1 {
    color: #dddddd;
    font-size: 1rem;
    padding: 2rem;
    text-align: center;
  }
`

export default function Copyright () {
  return (
    <StyledCopyright>
      <h1>
        ©2022 by Nick Kozlarek. www.linkedin.com/in/nicholas-kozlarek.
      </h1>
    </StyledCopyright>
  )
}

