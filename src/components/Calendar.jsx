import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { StyledSection } from '../StyledComponents.jsx'
import { faChevronLeft, faChevronRight, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CalendarSection = styled(StyledSection)`
  width: 100vw;
  color: #dddddd;
  padding-bottom: 10rem;
  h1 {
    margin: 5rem;
    margin-top: 10rem;
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
  @media (max-width: 800px) {
    width: 32rem;
    h1 {
      width: 100vw;
    }
  }
`

const StyledCalendar = styled(StyledSection)`

`
const BackToTop = styled.div`
  text-align: center;
  border-bottom: 1px solid #004d4d;
  cursor: pointer;
  font-weight: bold;
  color: #ffffff;
`

const Event = styled(StyledSection)`
  flex-direction: row;
  justify-content: space-between;
  width: 70rem;
  transition: 0.6s;
  padding-left: 4rem;
  padding-right: 4rem;
  border-bottom: 1px solid #dddddd;
  &:hover{
    background-color: #006d6d;
  }
  p {
    font-size: 1.5rem;
    font-weight: bold;
  }
  @media (max-width: 1200px) {
    width: 50rem;
  }
  @media (max-width: 800px) {
    text-align: end;
    width: 30rem;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    text-align: end;
    p {
      width: 18rem;
      font-size: 1rem;
    }
  }
`

export default function Calendar () {
  const [events, setEvents] = useState([
    {
      time: '9:00',
      event: 'Plenary 1 (with small-group discussion and prayer)'
    },
    {
      time: '10:30',
      event: 'Coffee Break'
    },
    {
      time: '10:45',
      event: 'Workshop 1'
    },
    {
      time: '12:00',
      event: ' Lunch (provided)'
    },
    {
      time: '1:15',
      event: 'Plenary 2 (with discussion and prayer)'
    },
    {
      time: '2:45',
      event: 'Coffee Break'
    },
    {
      time: '3:00',
      event: 'Workshop 2'
    },
    {
      time: '4:15',
      event: 'Plenary 3'
    },
    {
      time: '5:00',
      event: 'Dismissed'
    },
  ])

  const eventList = events.map((event, i) => {
    return (
      <Event key={i}>
        <p>{event.time}</p>
        <p>{event.event}</p>
      </Event>
    )
  })
  function handleScroll (section) {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <>
      <CalendarSection>
        <h1>Schedule</h1>
        <StyledCalendar>
          {eventList}
        </StyledCalendar>
      </CalendarSection>
      <BackToTop onClick={() => { handleScroll('title-bar'); console.log('clicked')}}>top <FontAwesomeIcon icon={faChevronUp} /></BackToTop>
    </>
  )
}