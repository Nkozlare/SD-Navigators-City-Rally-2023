import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { StyledSection, ConnectionSection, ConnectionSquare, Wrapped } from '../../StyledComponents.jsx'

const StyledSanDiego = styled(ConnectionSection)`
    background-color: #879a9a;
    h2 {
        font-size: 3rem;
    }
`

export default function SandDiego ({contact}) {
  let contactMap = contact.map((person) => {
    return (
        <ConnectionSquare>
            <img src={person.photoUrl} alt={person.name}/>
            <ul>
                <li style={{fontWeight: 'bold'}}>
                    {person.name}
                </li>
                {person.website ? 
                <li>
                    <a href={person.website} target='_blank'>{person.website}</a>                </li> 
                : null}
                {person.emails ? 
                <li>
                    <a href={'mailto:' + person.emails[0]}>{person.emails[0]}</a>
                    {person.emails.length > 1 ? <><br/><a href={'mailto:' + person.emails[1]}>{person.emails[1]}</a></> : null}
                </li> 
                : null}
                {person.numbers ? 
                <li>
                    {person.numbers[0]}
                    {person.numbers.length > 1 ? `, ${person.numbers[1]}` : null}
                </li> 
                : null}
            </ul>
        </ConnectionSquare>
    )
  })
  return (
    <StyledSanDiego>
        <h2>
            20s Ministry
        </h2>
        <Wrapped>
            {contactMap}
        </Wrapped>
    </StyledSanDiego>
  )
}