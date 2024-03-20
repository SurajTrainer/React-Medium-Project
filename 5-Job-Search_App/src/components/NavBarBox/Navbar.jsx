import React from 'react'
import style from './Navbar.module.css'

function Navbar() {
  return (
    <div className={style.navbarContainer}>

          <h1 className={style.header}><strong className={style.strong}>Job</strong>Search</h1>

      <div className={style.liTab}>
         
              <li>Jobs</li>
              <li>Companies</li>
              <li>About</li>
              <li>Contact</li>
              <li>Blogs</li>
              <li>News</li>
              <li>Login</li>
              <li>Register</li>
      </div>

    </div>
  ) 
}

export default Navbar
