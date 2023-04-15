import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { StyledSection } from '../StyledComponents.jsx'


const VideoSection = styled(StyledSection)`
    background-color: white;
    color: #690000;
    width: 100vw;
    border-bottom: 1px solid #004d4d;
    h1 {
        width: 70vw;
        margin-top: 5rem;
        font-size: 3.0rem;
        border-bottom: 1px solid;
        text-align: center;
        padding-bottom: 2rem;
        transition: 0.6s;
  }
  
`

const Video = styled.iframe`
    width: 70vw;
    height: 70vh;
    margin-bottom: 5rem;
    @media (max-width: 800px) {
        height: 50vh;
    }
`

export default function IntroVideo () {
  return (
    <VideoSection>
        <h1>
            San Diego Nav City Video
        </h1>
        <Video src="https://www.youtube.com/embed/uOJx-p_r5Mk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Video>
    </VideoSection>
  )
}