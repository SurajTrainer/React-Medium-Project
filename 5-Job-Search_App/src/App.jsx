import React from 'react'
import NavBar from './components/NavBarBox/Navbar'
import Search from './components/SearchBox/Search'
import Job from './components/JobBox/Job'
import Value from './components/ValueBox/Value'
import Footer from './components/FooterBox/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <>
      <NavBar/>
      <Search/>
      <Job/>
      <Value/>
      <Footer/>
    </>
  )
}

export default App
