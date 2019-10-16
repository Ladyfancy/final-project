import React, { Component } from 'react'
import Calendar from './Calendar'

// import { video } from '.../slow_motion_pouring_water'
export default class Home extends Component {
  render() {
    return (
      <div className = "home-text"> 
       
       <h1><div>Vision</div> Meets Reality</h1>
       
      <br></br>
        
       
        <button onClick={e => this.handleClick(e)}>Start Here</button>
      </div> 
      
    )
  }
}
