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
  h1 {
    text-align: center;
  }
  h2 {
    margin-top: 8rem;
    font-size: 2rem;
    text-align: center;
    max-width: 90%;
  }
  h3 {
    color: #004d4d;
    text-align: center;
    font-size: 2rem;
    margin-top: 8rem;
    margin-bottom: -4rem;
    @media (max-width: 800px) {
      max-width: 90%;
      font-size: 1.5rem;
      margin-bottom: -6rem;
    }
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
    width: 85%;
    p {
      text-align: center;
      text-indent: 0rem;
    }
  }
`

const VideoList = styled.div`
  color: #690000;
  text-align: center;
  padding: 0rem;
  transition: 0.8s;
  display: flex;
  flex-direction: column;
  align-items: center;
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
        <h3>
          Here is a quick video of Ben introducing himself and his heart for discipleship. 
        </h3>
        <VideoList>
          <h2></h2>
          <YoutubeEmbed embedId='d1TcRwj4sjw'/>
        </VideoList>
        {x > (-100 * sermons.length + 100) ? (<RightButton data-testid='right-arrow' onClick={goRight}><FontAwesomeIcon icon={faChevronRight} /></RightButton>) : (<div></div>)}
        {x === 0 ? (<div></div>) : (<LeftButton data-testid='left-arrow' onClick={goLeft}><FontAwesomeIcon icon={faChevronLeft} /></LeftButton>)}
      </StyledSpeakerSection>
      <BackToTop onClick={() => { handleScroll('title-bar'); console.log('clicked')}}>top <FontAwesomeIcon icon={faChevronUp} /></BackToTop>
    </>
  )
}