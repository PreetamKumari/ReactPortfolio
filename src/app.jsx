import { useState } from 'react';

import Topbar from './components/topbar/topbar.jsx'
import Intro from './components/intro/intro.jsx'
import Projects from './components/project/project.jsx'
import './app.scss'

function App() {
  const [menuActive, setMenuActive] = useState(false)
  return (
    <div className="app">
      <Topbar menuActive={menuActive} setMenuActive={setMenuActive}/>
      {/* <Menu menuActive={menuActive} setMenuActive={setMenuActive}/> */}
      <div className = 'sections'>
        <Intro/>
        <Projects/>
      </div>
    </div>
      )}

export default App;
