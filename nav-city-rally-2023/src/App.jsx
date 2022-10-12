import { useState } from 'react'
import Workshops from './components/Workshops.jsx'
import TitleBar from './components/TitleBar.jsx'
import Speaker from './components/Speaker'
import NavBar from './components/NavBar'
import Merch from './components/Merch'
import Map from './components/Map'
import Lodging from './components/Lodging'
import Info from './components/Info'
import Description from './components/Description'
import Contact from './components/Contact'
import Calendar from './components/Calendar'
import ConferenceName from './components/ConferenceName'
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
        <Map/>
        <Lodging/>
      </Components>
    </div>
  )
}

export default App
