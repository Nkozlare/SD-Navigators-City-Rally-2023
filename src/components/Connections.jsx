import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { StyledSection } from '../StyledComponents.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faChevronUp, faChevronDown, faCircle } from '@fortawesome/free-solid-svg-icons'
import Collegiate from "./contacts/Collegiate.jsx";
import D4L from "./contacts/D4L.jsx";
import Military from "./contacts/Military.jsx";
import SandDiego from "./contacts/SanDiego.jsx";
import WorldMissions from "./contacts/WorldMissions.jsx";
import Tijuana from "./contacts/Tijuana.jsx";

const ConnectionSection = styled(StyledSection)`
  width: 100vw;
  color: #dddddd;
  border-bottom: 1px solid #004d4d;
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
  h2 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    width: 90vw;
  }
  li {
    margin-bottom: 1rem;
    width: 50vw;
    font-size: 1.5rem;
    font-weight: bold;
    @media (max-width: 800px) {
      width: 70vw;
    }
  }
  p {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 4rem;
    text-align: center;
    width: 90vw;
    a {
        color: #dddddd;
        transition: 0.3s;
        &:hover {
            color: #690000;
        }
    }
  }
  @media (max-width: 800px) {
    h1 {
      width: 100vw;
    }
  }
`

const BackToTop = styled.div`
  border-top: 1px solid #004d4d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100vw;
  text-align: center;
  border-bottom: 1px solid #004d4d;
  cursor: pointer;
  font-weight: bold;
  color: #004d4d;
  img {
    width: 20rem;
  }
`


export default function Connections () {
  let [connections, setConnections] = useState([
    {
        name: 'Tim Chou and Thomas Baker',
        website: 'https://nav20s.org/location/san-diego/',
        emails: ['Timchoue8@gmail.com', 'Thomas.baker@navigators.org'],
        numbers: ['858-337-7618', '619-405-2718'],
        photoUrl: "https://i.ibb.co/6ydn0yL/Tim-Chou-and-Thomas-Baker.jpg",
        area: 'In San Diego',
        specific: '20s',
    },
    {
        name: 'Stephen and Tess Holechek',
        website: 'https://linktr.ee/navigatorsatucsd',
        emails: ['Stephen.holechek@navigators.org'],
        numbers: [''],
        photoUrl: 'https://i.ibb.co/5W2Xp6q/Holechek-UCSD.jpg',
        area: 'Collegiate',
        specific: 'UC San Diego',
    },
    {
        name: 'Connor and Ashley Heiser',
        website: 'https://linktr.ee/sdsunavs',
        emails: ['navigatorssdsu@gmail.com'],
        numbers: [''],
        photoUrl: 'https://i.ibb.co/PYzVdwM/Heiser-SDSU.jpg',
        area: 'Collegiate',
        specific: 'San Diego State University'
    },
    {
        name: 'Bret Marshall',
        website: '',
        emails: ['brtmarsh20@gmail.com'],
        numbers: ['858-663-5997'],
        photoUrl: 'https://i.ibb.co/T2nZZfJ/Bret-Marshall.png',
        area: 'Military',
        specific: 'Marines: Camp Pendleton'
    },
    {
        name: 'John Voss',
        website: '',
        emails: ['John.voss@navigators.org'],
        numbers: [],
        photoUrl: 'https://i.ibb.co/pXZPh4n/John-Voss.png',
        area: 'Military',
        specific: 'Marines: Camp Pendleton'
    },
    {
        name: 'Mike Harper',
        website: '',
        emails: ['mjharper1@gmail.com'],
        numbers: ['760-576-9753'],
        photoUrl: 'https://i.ibb.co/JxP14y5/Mike-Harper.jpg',
        area: 'Military',
        specific: 'Camp Pendleton'
    },
    {
        name: 'Ryan Bailey',
        website: 'https://www.facebook.com/sdnavynavs',
        emails: ['Ryan.bailey@navigators.org'],
        numbers: ['509-859-4114'],
        photoUrl: 'https://i.ibb.co/ZTywm60/Ryan-Bailey.png',
        area: 'Military',
        specific: 'Navy: Coronado and 32nd Street'
    },
    {
        name: 'Nate Smith',
        website: '',
        emails: ['Nathan.smith2@navigators.org'],
        numbers: ['850-501-4536'],
        photoUrl: 'https://i.ibb.co/z6DMDt5/Nate-Smith-2.jpg',
        area: 'Military',
        specific: 'Navy: Coronado'
    },
    {
        name: 'Travis and Lydia Klingforth',
        website: 'https://www.i-58navs.org/',
        emails: ['Travis.klingforth@navigators.org'],
        numbers: [],
        photoUrl: 'https://i.ibb.co/mrnbW0w/Klingforth-Family.jpg"',
        area: 'Disciplemakers for Life',
        specific: 'I-58 (Making Disciples Among Marginalized Urban Communities)'
    },
    {
        name: 'Dave Haigh',
        website: '',
        emails: ['Dave.h.haigh@gmail.com'],
        numbers: ['858-484-8677'],
        photoUrl: 'https://i.ibb.co/pK22rJ4/Dave-Haigh.jpg',
        area: 'Disciplemakers for Life',
        specific: 'Workplace'
    },
    {
        name: 'Ted and Karey Yeats',
        website: '',
        emails: ['tandkyeats@gmail.com'],
        numbers: [],
        photoUrl: 'https://i.ibb.co/WK8Nry7/Ted-and-Karey-Yeats.jpg',
        area: 'Disciplemakers for Life ',
        specific: 'Workplace'
    },
    {
        name: 'Sam Hershey',
        website: '',
        emails: ['sam.hershey@navigators.org'],
        numbers: [],
        photoUrl: 'https://i.ibb.co/2cyL0L7/Sam-Hershey.jpg',
        area: 'Disciplemakers for Life ',
        specific: 'Church Ministries'
    },
    {
        name: 'Stan Nolte',
        website: '',
        emails: ['navnolte@yahoo.com '],
        numbers: [],
        photoUrl: 'https://i.ibb.co/Df62wC0/Stan-Nolte.jpg',
        area: 'Disciplemakers for Life',
        specific: 'Church Ministries - English and Spanish'
    },
    {
        name: 'Pastor Enrique Sanchez',
        website: '',
        emails: ['lesramirez@att.net'],
        numbers: [],
        photoUrl: 'https://i.ibb.co/GRL56p5/Enrique-Sanchez-1.jpg',
        area: 'Disciplemakers for Life',
        specific: 'Church Ministries - English and Spanish, Vida Nueva Church - Spanish service Sundays at 1:30',
        address: '3737 Wightman Street, Sand Diego CA 92105'
    },
    {
        name: 'Paul Reynoso',
        website: 'https://nationswithin.org',
        emails: ["Paul.reynoso@navigators.org"],
        numbers: [],
        photoUrl: 'https://i.ibb.co/z83K8FY/Paul-Reynoso.jpg',
        area: 'World Missions',
        specific: 'Explore overseas opportunities - short-term or long-term'
    },
    {
        name: 'Frank Christian',
        website: '',
        emails: ['fwchristian@dc.rr.com'],
        numbers: ['760-668-0206'],
        photoUrl: 'https://i.ibb.co/dBXPTGP/Frank-Christian.jpg',
        area: 'Military',
        specific: 'Marines in San Diego',
    },
    {
        name: 'Carlos Ricoy',
        website: '',
        emails: ['cricoy@hotmail.com'],
        numbers: ['737-777-0187'],
        photoUrl: 'https://i.ibb.co/zrj2XpK/Carlos-Ricoy.jpg',
        area: 'Tijuana',
        specific: 'Family and Church Ministries',
    }
    
    // {
    //     name: '',
    //     website: '',
    //     emails: [''],
    //     numbers: [''],
    //     photoUrl: '',
    //     area: '',
    //     specific: '',
    // }
  ])
  return (
    <>
        <ConnectionSection>
            <h1>
                Connections
            </h1>
            <h2>
                Digital Discipleship Journey:
            </h2>
            <ul>
                <li>
                    A series of eight to 13 weekly emails designed to help you grow spiritually, curated based on your answers to some brief questions about your walk with God
                </li>
                <li>
                    Access to newly designed versions of our most popular discipleship resources and some brand new ones!
                </li>
                <li>
                    Advice on how to use these easy-to-use resources to help friends become gripped by the gospel and begin their own adventure with God
                </li>
                <li>
                    Power-packed biblical truth that will boost your faith and help you bring others on the journey
                </li>
            </ul>
            <p>
                Sign up here: <a href="https://www.navigators.org/disciplemaking/" target="_blank">Disciplemaking Series</a>
            </p>
            <Collegiate contact={connections.filter(connection => connection.area === 'Collegiate')}/>
            <Military contact={connections.filter(connection => connection.area === 'Military')}/>
            <SandDiego contact={connections.filter(connection => connection.area === 'In San Diego')}/>
            <D4L contact={connections.filter(connection => connection.area === 'Disciplemakers for Life')}/>
            <WorldMissions contact={connections.filter(connection => connection.area === 'World Missions')}/>
            <Tijuana contact={connections.filter(connection => connection.area === 'Tijuana')}/>
        </ConnectionSection>
    </>
  )
}