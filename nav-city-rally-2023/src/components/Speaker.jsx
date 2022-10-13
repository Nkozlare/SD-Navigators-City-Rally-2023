import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import {
  StyledSection,
  RightButton,
  LeftButton
 } from '../StyledComponents.jsx'
import YoutubeEmbed from './Youtube.jsx'
import { faChevronLeft, faChevronRight, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const StyledSpeakerSection = styled(StyledSection)`
  padding: 4rem;
  background-color: #dddddd;
  width: 100vw;
  border-bottom: 1px solid #004d4d;
  color: #690000;
`

const StyledSpeaker = styled(StyledSection)`
  flex-direction: row;
  color: #004d4d;
  gap: 8rem;
  img {
    height: 28rem;
  }
  @media (max-width: 1200px) {
    flex-direction: column-reverse;
    img {
      width: 17rem;
      height: auto;
      margin-top: -6rem;
    }
  }
`

const StyledSpeakerInfo = styled(StyledSection)`
  width: 30rem;
  p {
    font-weight: bold;
    text-indent: 2rem;
    line-height: 1.7rem;
  }
  h1 {
    text-align: center;
  }
  @media (max-width: 800px) {
    width: 16rem;
    p {
      text-align: center;
      text-indent: 0rem;
    }
  }
`

const VideoCarousel = styled(StyledSection)`
  flex-direction: row;
  justify-content: start;
  overflow: hidden;
  width: 40rem;
  @media (max-width: 800px) {
    width: 26.5rem;
  }
`

const VideoList = styled.div`
  color: #690000;
  text-align: center;
  padding: 4rem;
  transition: 0.8s;
  h2 {
    font-size: 2.3rem;
    border-bottom: 1px solid #690000;
    padding-bottom: 1rem;
  }
  div {
    width: 35rem;
    height: 25rem;
    margin-top: 1rem;

  }
  @media (max-width: 800px) {
    div {
      width: 18rem;
      height: 15rem;
    }
  }
`

const VideoSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 60rem;
`



export default function Speaker () {
  var [x, setx] = useState(0);
  let [sermons, setSermons] = useState([
    {
      url: 'ewPV3wHHVLE',
      title: 'Anxiety'
    },
    {
      url: '5WD5BhKtHLc',
      title: 'Indirect Leadership'
    }
  ])

  // on click function to move the carousel to the left
  const goLeft = () => {
    setx(x + 100);
  }
  // on click function to move the carousel to the right
  const goRight = () => {
    setx(x - 100);
  }

  const videoList = sermons.map((sermon, i) => {
    return (
      <VideoList key={i} style={{transform: `translateX(${x}%)`}}>
        <h2>Sermon:   {sermon.title}</h2>
        <YoutubeEmbed embedId={sermon.url}/>
      </VideoList>
    )
  })

  return (
    <StyledSpeakerSection>
      <StyledSpeaker>
        <img src='https://media-exp1.licdn.com/dms/image/C5603AQHSKoAijeNnzQ/profile-displayphoto-shrink_800_800/0/1517269864460?e=1671062400&v=beta&t=Ml2HYEnDXva1qAvB243PDWzBL8Go9DLhRnyS2ca9L5E' alt='picture of Ben Nugent'/>
        <StyledSpeakerInfo>
          <h1>Conference Speaker</h1>
          <h2>Ben Nugent</h2>
          <p>
            Drew Frazer currently serves at Montana State University as a Campus Director with The Navigators. He has worked with college students for the past 22 years and has a love for evangelism and discipleship. He likes to say "Give me a campus or give me death!" Drew was raised in Florida where he grew up playing sports and surfing. He attended college at Georgia Tech and worked as an Industrial Designer before entering the ministry in 2000. He has served on campuses all over the country and as a conference speaker spoken with thousands of college students all over the USA and around the world. Drew currently lives in Bozeman Montana with his wife Stacy, and his three kids, Dax, Biz and Garrett. He spends his freetime overlanding, camping with the family, and enjoying all the recreation  that Montana offers. He has a passion to know Christ, make Him known and help others do the same.
          </p>
          <p>
            Fun facts, Drew loves Mexican food (he says Taco Bell counts), he's fanatical about Toyota Land Cruisers and has been in pursuit of the perfect backpack for over 20 years now.
          </p>
        </StyledSpeakerInfo>
      </StyledSpeaker>
      <VideoCarousel>
        {videoList}
      </VideoCarousel>
      {x > (-100 * sermons.length + 100) ? (<RightButton data-testid='right-arrow' onClick={goRight}><FontAwesomeIcon icon={faChevronRight} /></RightButton>) : (<div></div>)}
      {x === 0 ? (<div></div>) : (<LeftButton data-testid='left-arrow' onClick={goLeft}><FontAwesomeIcon icon={faChevronLeft} /></LeftButton>)}
    </StyledSpeakerSection>
  )
}