import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CommentAPI from './components/CommentAPI'
import Header from './components/Header'
import "./App.css"

const App = () => {
  return (
    <div>
      <Header/>
      <CommentAPI/>
    </div>
  )
}

export default App
