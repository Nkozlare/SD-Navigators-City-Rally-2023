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
import Connections from './components/Connections.jsx'
import Handouts from './components/Handouts.jsx'
import IntroVideo from './components/IntroVideo.jsx'
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
        <TitleBar id='title-bar'/>
        <ConferenceName/>
        <IntroVideo/>
        <div id='speaker'>
          <Speaker/>
        </div>
        <div id='connection'>
          <Connections/>
        </div>
        <div id='handouts'>
          <Handouts/>
        </div>
        <Copyright/>
      </Components>
    </div>
  )
}

export default App
