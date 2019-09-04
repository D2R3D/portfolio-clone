import React, { Component } from 'react'
import Navbar from './components/navbar/navbar'

import 'reset-css'
import './App.css'


export default class App extends Component {
  render() {
    return (
      <div className ='app-intro'>
        <Navbar />
      <div className ='app-intro'>

        <h1>Welcome to our Studio!</h1>
        <h1> IT'S NICE TO MEET YOU</h1>

        <button> Tell Me More </button>
    </div>
        
      </div>
    )
  }
}
