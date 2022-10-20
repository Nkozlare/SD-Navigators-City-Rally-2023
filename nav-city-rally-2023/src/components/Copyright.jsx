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

const LinkedInRef = styled.a`
  color: #dddddd;
`

export default function Copyright () {
  return (
    <StyledCopyright>
      <h1>
        ©2022 by Nick Kozlarek. <LinkedInRef href='https://www.linkedin.com/in/nicholas-kozlarek' target='_blank'>Linkedin</LinkedInRef>
      </h1>
    </StyledCopyright>
  )
}

