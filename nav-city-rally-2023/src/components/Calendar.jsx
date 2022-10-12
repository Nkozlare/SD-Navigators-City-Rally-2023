import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { StyledSection } from '../StyledComponents.jsx'

const CalendarSection = styled(StyledSection)`
  width: 100vw;
  color: #dddddd;
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

const StyledCalendar = styled(StyledSection)`

`

const Event = styled(StyledSection)`
  flex-direction: row;
  justify-content: space-between;
  width: 50rem;
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
      time: '11:00',
      event: 'Workshop 1'
    },
    {
      time: '12:15',
      event: ' Lunch (provided)'
    },
    {
      time: '1:30',
      event: 'Plenary 2 (with discussion and prayer)'
    },
    {
      time: '3:15',
      event: 'Workshop 2'
    },
    {
      time: '4:30',
      event: 'Coffee Break'
    },
    {
      time: '4:45',
      event: 'Plenary 3'
    },
    {
      time: '5:30',
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
  return (
    <CalendarSection>
      <h1>Calendar</h1>
      <StyledCalendar>
        {eventList}
      </StyledCalendar>
    </CalendarSection>
  )
}