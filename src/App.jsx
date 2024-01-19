import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Promotion from './components/promotion/Promotion'
import Footer from './components/footer/Footer'


export default function App() {

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/about' element = {<About/>} />
          <Route path='/Promotion' element = {<Promotion/>} />
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}
