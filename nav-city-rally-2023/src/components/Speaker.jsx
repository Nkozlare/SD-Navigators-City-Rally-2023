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
        font-size: 3rem;
        border-bottom: 1px solid;
        width: 40rem;
        text-align: center;
        padding-bottom: 2rem;
        transition: 0.6s;
        &:hover {
        width: 30rem;
        }
        @media (max-width: 800px) {
          max-width: 90vw;
        }
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

const StyledSermons = styled(StyledSection)`
  flex-direction: column;
  background-color: white;
  padding-top: 5rem;
  padding-bottom: 5rem;
  h2 {
    color: #690000;
    width: 70vw;
    text-align: center;
  }
`

const StyledChoices = styled(StyledSection)`
  flex-direction: row;
  flex-wrap: wrap;
  width: 80vw;
  gap: 2rem;
  p {
    display: flex;
    justify-content: center;
    align-items:center;
    width: 20rem;
    height: 5rem;
    font-size: 1.5rem;
    text-align: center;
    background-color: #877777;
    font-weight: bold;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      background-color: #573f3f;
    }
  }
`

const Video = styled.iframe`
    width: 70vw;
    height: 70vh;
    @media (max-width: 800px) {
        height: 30vh;
    }
`

const ExpandArea = styled(StyledSection)`
  height: ${props => (props.expanded ? '80vh' : '0vh')};
  overflow: hidden;
  transition: 0.6s;
  @media (max-width: 800px) {
        height: 40vh;
  }
`


export default function Speaker () {
  var [x, setx] = useState(0);
  let [expanded, setExpanded] = useState(false);
  let [sermons, setSermons] = useState([
    {
      url: "https://www.youtube.com/embed/O9hSzutTayE",
      title: 'Sermon One'
    },
    {
      url: "https://www.youtube.com/embed/dOD2ggDBuDE",
      title: 'Sermon Two'
    },
    {
      url: "https://www.youtube.com/embed/lykXiYwks1k",
      title: 'Sermon Three'
    },
  ])

  let [selected, setSelected] = useState(0);

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

  const selectionMap = sermons.map((sermon, index) => {
    return (
      <p key={index} onClick={() => {
        setSelected(index);
        if (index === selected) {
          setExpanded(false);
        } else {
          setExpanded(true);
        }
      }}>
        {expanded && index === selected ? 'Minimize' : sermon.title} 
      </p>
    )
  })

  return (
    <>
      <StyledSpeakerSection>
        <h1>Conference Speaker</h1>
        <StyledSpeaker>
          <img src='https://static.wixstatic.com/media/22fd5d_a544bea60a1b4cc287c39b4167baca8f~mv2.jpg/v1/fill/w_460,h_860,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot%202022-09-16%20at%2010_14_edited.jpg' alt='picture of Ben Nugent'/>
          <StyledSpeakerInfo>
            
            <h2>Drew Frazer</h2>
            <p>
              Drew Frazer currently serves at Montana State University as a Campus Director with The Navigators. He has worked with college students for the past 23 years and has a love for evangelism and discipleship. He likes to say "Give me a campus or give me death!" Drew was raised in Florida where he grew up playing sports and surfing. He attended college at Georgia Tech and worked as an Industrial Designer before entering the ministry in 2000. He has served on campuses all over the country and as a conference speaker spoken with thousands of college students all over the USA and around the world. Drew currently lives in Bozeman Montana with his wife Stacy, and his three kids, Dax, Biz and Garrett. He spends his freetime overlanding, camping with the family, and enjoying all the recreation  that Montana offers. He has a passion to know Christ, make Him known and help others do the same. 
            </p>
            <p>
            Fun facts, Drew loves Mexican food (he says Taco Bell counts), he's fanatical about Toyota Land Cruisers and has been in pursuit of the perfect backpack for over 20 years now. 
            </p>
          </StyledSpeakerInfo>
        </StyledSpeaker>
      </StyledSpeakerSection>
      {/* <StyledSermons>
        <h2>
          Talks from the Conference
        </h2>
        <StyledChoices>
          {selectionMap}
          <ExpandArea expanded={expanded}>
            <Video src={sermons[selected].url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Video>
          </ExpandArea>
        </StyledChoices>
      </StyledSermons> */}
      <BackToTop onClick={() => { handleScroll('title-bar'); console.log('clicked')}}>top <FontAwesomeIcon icon={faChevronUp} /></BackToTop>
    </>
  )
}

//<iframe width="560" height="315" src="https://www.youtube.com/embed/O9hSzutTayE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
// <iframe width="560" height="315" src="https://www.youtube.com/embed/dOD2ggDBuDE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
// <iframe width="560" height="315" src="https://www.youtube.com/embed/lykXiYwks1k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>