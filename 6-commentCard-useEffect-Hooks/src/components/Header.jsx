import React from 'react'

const Header = () => {

    const Alertpop = () => {
        alert('Ohkk, Hii')
    } 
  return (
    <>
    <div>
    <div className="px-4 py-5 my-5 text-center">
    <h1 className="display-5 fw-bold text-body-emphasis">List all Comments</h1>
    <div className="col-lg-6 mx-auto">
        <button type="button" className="btn btn-outline-danger btn-lg px-4" onClick={Alertpop}>Hello Dost</button>
      </div>
    </div>
  </div>
    </>
  )
}

export default Header

