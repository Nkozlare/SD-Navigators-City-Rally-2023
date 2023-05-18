import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { StyledSection, ConnectionSection, ConnectionSquare, Wrapped } from '../../StyledComponents.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faChevronUp, faChevronDown, faCircle } from '@fortawesome/free-solid-svg-icons'

const StyledCollegiate = styled(ConnectionSection)`
    background-color: #b7a7a7;
    h2 {
        font-size: 3rem;
    }
    h1 {
        margin: 1rem;

    }
    p {
        margin-top: 0rem;
        font-size: 1rem;
        cursor: pointer;
    }
`



export default function Collegiate ({contact}) {
    function handleScroll (section) {
        let offsetTop  = document.getElementById(section).offsetTop;
        window.scrollTo({
          top: offsetTop-0,
          behavior: "smooth"
        });
        console.log('clicked')
    }

    let contactMap = contact.map((person, index) => {
        return (
            <ConnectionSquare key={index}>
                <img src={person.photoUrl} alt={person.name}/>
                <ul>
                    <li style={{fontWeight: 'bold'}}>
                        {person.name}
                    </li>
                    <li>
                        {person.specific}
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
    <StyledCollegiate>
        <h1>In San Diego</h1>
        <p onClick={() => {
            handleScroll("tijuana");
        }}>Jump To Tijuana Contact<br></br><FontAwesomeIcon icon={faChevronDown} /></p>
        <h2>Collegiate</h2>
        <Wrapped>
            {contactMap}
        </Wrapped>
    </StyledCollegiate>
  )
}