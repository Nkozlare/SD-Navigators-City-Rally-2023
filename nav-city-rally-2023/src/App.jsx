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
import ConferenceName from './components/ConferenceName'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar/>
      <TitleBar/>
      <ConferenceName/>
      <Info/>
      <Speaker/>
      <Workshops/>
      <Merch/>
      <Contact/>
      <Map/>
      <Lodging/>
    </div>
  )
}

export default App
