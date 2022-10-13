import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import {
  StyledSection,
  RightButton,
  LeftButton
 } from '../../StyledComponents.jsx'
import { faChevronLeft, faChevronRight, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledCarousel = styled(StyledSection)`
  width: 100%;
  flex-direction: row;
  overflow: hidden;
  justify-content: start;
  transition: 0.3s;
  border-top: 1px solid #004d4d;
`

const Workshop = styled.img`
  object-fit: cover;
  width: 100vw;
  height: 80vh;
`

const WorkShopList = styled.div`
  transition: 1s;
  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    text-align: center;
    color: #004d4d;
    background-color: #ffffff6e;
    padding: 2rem;
    width: 96vw;
    border-top: 1px solid #004d4d;
    border-bottom: 1px solid #004d4d;
  }
  @media (max-width: 1000px) {
    h2 {
      width: 92vw;
      top: 40%;
    }
  }
  @media (max-width: 800px) {
    h2 {
      width: 90vw;
    }
  }
  @media (max-width: 700px) {
    h2 {
      width: 86vw;
    }
  }
`

const WorkshopLeftButton = styled(LeftButton)`
  position: absolute;
  color: #353535;
  left: 4rem;
  border-radius: 1rem;
  width: 5rem;
  margin-top: 16.5rem;
  &:hover {
    color: #080808;
  }
  @media (max-width: 800px) {
    margin-top: 47rem;
    color: white;
  }
`

const WorkshopRightButton = styled(RightButton)`
  position: absolute;
  color: #353535;
  right: 4rem;
  border-radius: 1rem;
  width: 5rem;
  margin-top: 16.5rem;
  &:hover {
    color: #080808;
  }
  @media (max-width: 800px) {
    margin-top: 47rem;
    color: white;
  }
`



export default function Carousel () {
  var [x, setx] = useState(0)
  let [workshops, setWorkshops] = useState([
    {
      url: 'https://images.unsplash.com/photo-1533000971552-6a962ff0b9f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      name: 'Word 101 - Meeting God in the Word',
      leader: '',
    },
    {
      url: 'https://images.unsplash.com/photo-1470429346530-f5590bff80d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      name: 'Prayer 101 - The Joy of Prayer',
      leader: '',
    },
    {
      url: 'https://images.unsplash.com/photo-1547958481-9753b5467c80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Witnessing 101 - Sharing Christ in a Polarized Culture',
      leader: '',
    },
    {
      url: 'https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Discipleship 101 - Building Life-to-Life Discipleship Relationships',
      leader: '',
    },
    {
      url: 'https://images.unsplash.com/photo-1517732306149-e8f829eb588a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
      name: 'Discipleship 201 - Making Disciples Where You Live, Work and Play',
      leader:'',
    },
    {
      url: 'https://images.unsplash.com/photo-1547111179-4b6619942503?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Sexual Health and Wholeness',
      leader: '',
    },
    {
      url: 'https://images.unsplash.com/photo-1562504208-03d85cc8c23e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'How Can I Impact the Nations?',
      leader: '',
    },
    {
      url: 'https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80',
      name: 'Leading a Small Group People Actually Want to Come to',
      leader: '',
    },
    {
      url: 'https://images.unsplash.com/photo-1529690840038-f38da8894ff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Live and Disciple Out of Your Design',
      leader: '',
    },
    {
      url: 'https://images.unsplash.com/photo-1534971032217-fdd43ca8e3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'What Does it Mean to be Human?',
      leader: '',
    },
    {
      url: 'https://images.unsplash.com/photo-1504240906667-b55084de1875?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Defining Reality in an Upside Down World',
      leader: '',
    },
  ])
  const goLeft = () => {
    setx(x + 100);
  }
  // on click function to move the carousel to the right
  const goRight = () => {
    setx(x - 100);
  }

  const timedCarouselShift = () => {
    setTimeout(() => {
    if (x > (-100 * workshops.length + 100)) {
      goRight();
    } else {
      setx(0)
    }
    }, 6000)
  }

  useEffect(() => {
    timedCarouselShift();
  })

  let workshopList = workshops.map((workshop, i) => {
    return (
      <WorkShopList  key={i} style={{transform: `translateX(${x}%)`}}>
        <h2>{workshop.name}</h2>
        <Workshop src={workshop.url}/>
      </WorkShopList>
    )
  })

  return (
    <>
      <StyledCarousel>
        {workshopList}
      </StyledCarousel>
      {x > (-100 * workshops.length + 100) ? (<WorkshopRightButton data-testid='right-arrow' onClick={goRight}><FontAwesomeIcon icon={faChevronRight} /></WorkshopRightButton>) : (<div></div>)}
      {x === 0 ? (<div></div>) : (<WorkshopLeftButton data-testid='left-arrow' onClick={goLeft}><FontAwesomeIcon icon={faChevronLeft} /></WorkshopLeftButton>)}
    </>
  )
}