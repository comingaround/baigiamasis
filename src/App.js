import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/Home'
import About from './routes/about/About'
import Contacts from './routes/contacts/Contacts'
import './app.css'
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />}/>
      </Routes>
    </>
  )
}

export default App
