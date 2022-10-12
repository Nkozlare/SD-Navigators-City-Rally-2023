import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import {
  StyledSection,
  RightButton,
  LeftButton
 } from '../StyledComponents.jsx'
import { faChevronLeft, faChevronRight, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MerchSection = styled(StyledSection)`
  background-color: #dddddd;
  border-bottom: 1px solid #004d4d;
  width: 100vw;
  color: #690000;
  padding-bottom: 10rem;
  h1 {
    margin: 5rem;
    font-size: 3.5rem;
    border-bottom: 1px solid;
    width: 40rem;
    text-align: center;
    padding-bottom: 2rem;
    transition: 0.6s;
    &:hover {
      width: 30rem;
    }
  }
`

const WorkshopLeftButton = styled(LeftButton)`
  position: absolute;
  color: #353535;
  left: 1rem;
  border-radius: 1rem;
  width: 5rem;
  margin-top: 16.5rem;
  &:hover {
    color: #690000;
  }
`

const WorkshopRightButton = styled(RightButton)`
  position: absolute;
  color: #353535;
  right: 1rem;
  border-radius: 1rem;
  width: 5rem;
  margin-top: 16.5rem;
  &:hover {
    color: #690000;
  }
`

const MerchCarousel = styled(StyledSection)`
  overflow: hidden;
  justify-content: start;
  flex-direction: right;
  flex-direction: row;
  width: 30vw;
`

const Item = styled(StyledSection)`
  flex-direction: row;
  width: 100vw;
  gap: 10rem;
  padding: 4rem;
  img {
    object-fit: cover;
    height: 20rem;
    width: 15rem;
  }
  @media (max-width: 1800px) {
    gap: 5rem;
  }
  @media (max-width: 1400px) {
    flex-direction: column;
    padding: 2rem;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    padding:1rem;
  }
`

export default function Merch () {
  const [merch, setMerch] = useState([
    {
      url: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      item: 'Shirt'
    },
    {
      url: 'https://images.unsplash.com/photo-1616241673347-67fb5dfa3167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80',
      item: 'mug'
    },
    {
      url: 'https://images.unsplash.com/photo-1526280760714-f9e8b26f318f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      item: 'journal'
    }
  ])
  const goLeft = () => {
    setx(x + 100);
  }
  // on click function to move the carousel to the right
  const goRight = () => {
    setx(x - 100);
  }
  var [x, setx] = useState(0)

  const merchList = merch.map((item, i) => {
    return (
      <Item key={i} style={{transform: `translateX(${x}%)`}}>
        <img src={item.url}/>
        <h2>{item.item}</h2>
      </Item>
    )
  })

  return (
    <MerchSection>
      <h1>Merch!</h1>
      <MerchCarousel>
        {merchList}
      </MerchCarousel>
      {x > (-100 * merch.length + 100) ? (<WorkshopRightButton data-testid='right-arrow' onClick={goRight}><FontAwesomeIcon icon={faChevronRight} /></WorkshopRightButton>) : (<div></div>)}
      {x === 0 ? (<div></div>) : (<WorkshopLeftButton data-testid='left-arrow' onClick={goLeft}><FontAwesomeIcon icon={faChevronLeft} /></WorkshopLeftButton>)}
    </MerchSection>
  )
}