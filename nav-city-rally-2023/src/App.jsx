import { useState } from 'react'
import Workshops from './components/Workshops.jsx'
import TitleBar from './components/TitleBar.jsx'
import Speaker from './components/Speaker.jsx'
import NavBar from './components/NavBar.jsx'
import Merch from './components/Merch.jsx'
import Map from './components/Map.jsx'
import Info from './components/Info.jsx'
import Description from './components/Description.jsx'
import Contact from './components/Contact.jsx'
import Calendar from './components/Calendar.jsx'
import Copyright from './components/Copyright.jsx'
import ConferenceName from './components/ConferenceName.jsx'
import {
  Body,
  Components
} from './StyledComponents.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Body/>
      <Components>
        <TitleBar/>
        <ConferenceName/>
        <div id='info'>
          <Info/>
        </div>
        <div id='speaker'>
          <Speaker/>
        </div>
        <div id='workshops'>
          <Workshops/>
        </div>
        <div id='calendar'>
          <Calendar/>
        </div>
        <div  id='merch'>
          <Merch/>
        </div>
        <div id='contact'>
          <Contact/>
        </div>
        <Copyright/>
      </Components>
    </div>
  )
}

export default App
