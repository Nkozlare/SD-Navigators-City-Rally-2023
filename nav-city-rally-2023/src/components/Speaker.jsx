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
  color: #690000;
  h2 {
    margin-top: 8rem;
    font-size: 2rem;
    text-align: center;
  }
`

const StyledSpeaker = styled(StyledSection)`
  flex-direction: row;
  color: #004d4d;
  gap: 8rem;
  img {
    height: 28rem;
    border: 1px solid #004d4d;
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
  margin-top: -5rem;
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
  margin-top: -8rem;
  @media (max-width: 800px) {
    width: 26.5rem;
  }
`

const VideoList = styled.div`
  color: #690000;
  text-align: center;
  padding: 2rem;
  transition: 0.8s;
  h2 {
    font-size: 1.7rem;
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

const BackToTop = styled.div`
  background-color: #dddddd;
  text-align: center;
  border-bottom: 1px solid #004d4d;
  cursor: pointer;
  font-weight: bold;
  color: #004d4d;
`



export default function Speaker () {
  var [x, setx] = useState(0);
  let [sermons, setSermons] = useState([
    {
      url: 'ewPV3wHHVLE',
      title: 'Anxiety'
    }
  ])

  function handleScroll (section) {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
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
    <>
      <StyledSpeakerSection>
        <h1>Conference Speaker</h1>
        <StyledSpeaker>
          <img src='https://i.ibb.co/wrJZ9gy/Ben-Nugent-headshot-10-22.jpg' alt='picture of Ben Nugent'/>
          <StyledSpeakerInfo>
            
            <h2>Ben Nugent</h2>
            <p>
              Ben met Christ late in high school and met The Navigators his first day on campus at Illinois State University, where he graduated with a degree in History Education. He met his wife Melissa at a Navigator Summer Training Program in 1996, they have now been married for 24 years. Their son Sam is 15 and their daughter Vivian is 12. 
            </p>
            <p>
              Ben and Melissa served with the Collegiate Navigators at Colorado State University, the University of Florida, and Kansas City, MO for nearly two decades. He was the Director for Navigators 20s for 2 years and now serves as the U.S. Collegiate Director. 
              His passions include developing laborers for God’s harvest, teaching the Word of God, Summer Training Programs, and discipling younger men to become leaders. He enjoys playing golf, getting creamed in Madden by his son, Sam, and eating anything that is “Chicago Style.
            </p>
          </StyledSpeakerInfo>
        </StyledSpeaker>
        <h2 style={{color: '#004d4d'}}>
          Here’s a sermon sample from Ben to help you get to know him… 
        </h2>
        <VideoCarousel>
          {videoList}
        </VideoCarousel>
        {x > (-100 * sermons.length + 100) ? (<RightButton data-testid='right-arrow' onClick={goRight}><FontAwesomeIcon icon={faChevronRight} /></RightButton>) : (<div></div>)}
        {x === 0 ? (<div></div>) : (<LeftButton data-testid='left-arrow' onClick={goLeft}><FontAwesomeIcon icon={faChevronLeft} /></LeftButton>)}
      </StyledSpeakerSection>
      <BackToTop onClick={() => { handleScroll('title-bar'); console.log('clicked')}}>top <FontAwesomeIcon icon={faChevronUp} /></BackToTop>
    </>
  )
}