import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import viteLogo from '/vite.svg'
import HomePage from './pages/homePage/HomePage'
import AboutPage from './pages/About/AboutPage'
import { useState } from 'react'
import Forms from './components/Forms'


function App() {
  
const [darkMode,setDarkMode]=useState(false)
const [hide, setHide]=useState(false)
  return (
    < >
    <div className={`${darkMode ? "dark" : ""}`} >     
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode}/>
      <Routes>
        <Route path="/"element={<Forms/>}/>
        <Route path="about"element={<AboutPage/>}/>
      </Routes>
      </div>  
    </>
  )
}

export default App
