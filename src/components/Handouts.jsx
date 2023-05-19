import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { StyledSection } from '../StyledComponents.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faChevronUp, faChevronDown, faCircle } from '@fortawesome/free-solid-svg-icons'
import LessonsOnAssurance from '../../dist/assets/LessonsOnAssurance.jpg'
import TheBibleAtAGlance from '../../dist/assets/BibleAtAGlance.jpg'
import PrayerSheet from '../../dist/assets/PrayerSheet.jpg'
import TheWordHand from '../../dist/assets/TheWordHand.pdf'
import WarriorPainting from '../../dist/assets/WarriorPainting.pdf'
import Wheel from '../../dist/assets/TheWheel.pdf'
import Armour from '../../dist/assets/ArmorForSpiritualWarfare.pdf'
import TheJoyOfPrayer from '../../dist/assets/TheJoyOfPrayer.pdf'
import FourReasons from '../../dist/assets/4Reasons.pdf'
import Discipleship101 from '../../dist/assets/Discipleship101.pdf'
import MakingDisciples from '../../dist/assets/MakingDisciples.pdf'
import BiblicalSexuality from '../../dist/assets/BiblicalSexuality.pdf'
import Impacting from '../../dist/assets/ImpactingTheNations.pdf'
import Design from '../../dist/assets/OutOfDesign.pdf'
import Human from '../../dist/assets/GodSaysAboutSexuality.pdf'
import Reality from '../../dist/assets/RealityWorkshop.pdf'
import Spanish from '../../dist/assets/SpanishLanguage.pdf'
import ImageOne from '../../dist/assets/ImageOfGod.pdf'
import ImageTwo from '../../dist/assets/ImageOfGodPartTwo.pdf'
import ImagePPT from '../../dist/assets/ImageOfGodPpt.pdf'
import smallGroups from '../../dist/assets/smallGroups.pdf'

const HandoutsSection = styled(StyledSection)`
    background-color: #dddddd;
    width: 100vw;
    color: #690000;
    flex-direction: columns;
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
`

const List = styled.div`
    width: 90vw;
    padding-bottom: 10rem;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
    flex-wrap: wrap;
`

const Handout = styled(StyledSection)`
    width: 25rem;
    height: ${props => (props.selected === props.index ? '12rem' : '3.4rem')};
    font-size: 2rem;
    padding: 1.8rem;
    background-color: #877777;
    color: #dddddd;
    font-weight: bold;
    transition: 0.3s;
    justify-content: start;
    align-items: flex-start;
    overflow: hidden;
    cursor: pointer;
    h2 {
        font-size: 1.5rem;
        margin: 0rem;
        margin-bottom: 1rem;
        @media (max-width: 800px) {
            font-size: 1.2rem;
        }
    }
    ul {
        li {
            list-style-type: none;
            font-size: 1.4rem;
            padding: 0.5rem;
            a {
                color: white;
            }
        }
    }
    &:hover {
        background-color: #554040;
    }
`

const Word101 = styled(Handout)`
    height: ${props => (props.selected === props.index ? '30rem' : '3.2rem')};
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

export default function Handouts () {
  const [expanded, setExpanded] = useState(true);

  const handleClick = () => {
    setExpanded(!expanded)
  }

  function handleScroll (section) {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const [selected, setSelected] = useState(null);

  const [workshops, setWorkshops] = useState([
    {
        name: 'Word 101 - Meeting God in the Word',
        handouts: [
            {
                title: 'Lessons on Assurance and Beginning with Christ',
                file: LessonsOnAssurance
            },
            {
                title:'The Bible at a Glance',
                file: TheBibleAtAGlance,
            },
            {
                title: 'Prayer Sheet',
                file: PrayerSheet,
            },
            {
                title: 'The Word Hand',
                file: TheWordHand,
            },
            {
                title: 'The Wheel',
                file: Wheel,
            },
            {
                title: 'Warrior Painting',
                file: WarriorPainting,
            },
            {
                title: 'Armour for Spiritual Warfare',
                file: Armour,
            },
            // {
            //     title: '',
            //     file: '',
            // }
        ],
    },
    {
        name: 'Prayer 101 - The Joy of Prayer',
        handouts: [
            {
                title: 'The Joy of Prayer',
                file: TheJoyOfPrayer,
            }
        ],
    },
    {
        name: 'Witnessing 101 - Sharing Christ and Starting a Bible Study at Work',
        handouts: [
            {
                title: "4 Reasons it’s Important to share the Gospel at work",
                file: FourReasons,
            }
        ],
    },
    {
        name: 'Discipleship 101 - Building Life-to-Life D-ship Relationships',
        handouts: [   
            {
                title: 'Discipleship 101',
                file: Discipleship101,
            }
        ],
    },
    {
        name: 'Discipleship 201 - Making Disciples Where You Live, Work, Play',
        handouts: [
            {
                title: 'Making Disciples where you live, work and play',
                file: MakingDisciples,
            }
        ],
    },
    {
        name: 'Sexual Health and Wholeness',
        handouts: [
            {
                title: 'Biblical Sexual Resources and Exercises',
                file: BiblicalSexuality,
            }
        ],
    },
    {
        name: 'To the Nations!',
        handouts: [
            {
                title: 'Workshop - Impacting the Nations - Handout for Participants',
                file: Impacting,
            }
        ],
    },
    {
        name: 'Leading a Small Group People Actually Want to Come to',
        handouts: [
            {
                title: 'Small Groups Workshop Handout',
                file: smallGroups,
            }
        ],
    },
    {
        name: 'Live and Disciple Out of Your Design',
        handouts: [
            {
                title: 'Live and Disciple out of your Design',
                file: Design,
            }
        ],
    },
    {
        name: 'What Does it Mean to be Human?',
        handouts: [
            {
                title: 'Image of God Part One',
                file: ImageTwo,
            },
            {
                title: 'Image of God Part Two',
                file: ImageOne,
            },
            {
                title: 'Image of God Powerpoint',
                file: ImagePPT,
            }
        ],
    },
    {
        name: 'Defining Reality in an Upside-Down World',
        handouts: [
            {
                title: 'Reality Workshop Handout',
                file: Reality,
            }
        ],
    },
    {
        name: 'Spanish Language',
        handouts: [
            {
                title: 'Spanish Language Handout',
                file: Spanish,
            }
        ],
    },
    // {
    //     name: '',
    //     handouts: [
        // {
            //     title: '',
            //     file: '',
        // }
        // ],
    // },
  ])

  const handoutsMap = workshops.map((workshop, index) => {
    if (index === 0 || index === 9) {
        return (
            <Word101 selected={selected} index={index} onClick={() => {
                if (selected === index) {
                    setSelected(null);
                } else {
                    setSelected(index);
                }
            }} key={index}>
                <h2>
                    {workshop.name}
                </h2>
                <ul>
                    {workshop.handouts.map((handout, index) => {
                        return (
                            <li key={index}>
                                {handout.file ? <a href={handout.file} target='_blank'>{handout.title}</a> : handout.title}
                            </li>
                        )
                    })}
                </ul>
            </Word101>
        )
    }
    return (
        <Handout selected={selected} index={index} onClick={() => {
            if (selected === index) {
                setSelected(null);
            } else {
                setSelected(index);
            }
        }} key={index}>
            <h2>
                {workshop.name}
            </h2>
            <ul>
                {workshop.handouts.map((handout, index) => {
                    return (
                        <li key={index}>
                            {handout.file ? <a href={handout.file} target='_blank'>{handout.title}</a> : handout.title}
                        </li>
                    )
                })}
            </ul>
        </Handout>
    )
  })

  return (
    <>
        <HandoutsSection>
            <h1>
                Handouts
            </h1>
            <List>
                {handoutsMap}
            </List>
        </HandoutsSection>
        <BackToTop onClick={() => { handleScroll('title-bar');}}>
            <img src="https://i.ibb.co/W0h5ZWy/Black-Logo-on-White.png" alt="SD-Nav-Logo" border="0" onClick={() => { handleScroll('title-bar');}}/>
            <div>
            top 
            <FontAwesomeIcon icon={faChevronUp} />
            </div>
        </BackToTop>
    </>
  )
}